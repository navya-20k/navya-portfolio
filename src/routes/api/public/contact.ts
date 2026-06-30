import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(1).max(2000),
});

const OWNER_EMAIL = "navyasrisatya799@gmail.com";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400 });
        }

        const parsed = schema.safeParse(body);
        if (!parsed.success) {
          return Response.json(
            { error: "Invalid input", issues: parsed.error.issues },
            { status: 400 },
          );
        }
        const { name, email, message } = parsed.data;

        // 1) Persist the message (always, even if email send fails)
        const { supabaseAdmin } = await import(
          "@/integrations/supabase/client.server"
        );
        const { error: dbError } = await supabaseAdmin
          .from("contact_messages")
          .insert({ name, email, message });
        if (dbError) {
          console.error("contact_messages insert failed", dbError);
          return Response.json(
            { error: "Could not save message" },
            { status: 500 },
          );
        }

        // 2) Send notification email via Resend (if configured)
        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        let emailSent = false;
        if (RESEND_API_KEY) {
          try {
            const html = `
              <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;padding:24px;background:#0f172a;color:#fff;border-radius:12px">
                <h2 style="margin:0 0 12px;color:#a78bfa">New portfolio message</h2>
                <p style="margin:0 0 16px;color:#cbd5e1">You received a new message from your portfolio contact form.</p>
                <table style="width:100%;border-collapse:collapse;font-size:14px;color:#e2e8f0">
                  <tr><td style="padding:6px 0;color:#94a3b8">Name</td><td style="padding:6px 0">${escapeHtml(name)}</td></tr>
                  <tr><td style="padding:6px 0;color:#94a3b8">Email</td><td style="padding:6px 0"><a style="color:#a78bfa" href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
                </table>
                <div style="margin-top:16px;padding:16px;background:#111827;border:1px solid #1f2937;border-radius:8px;white-space:pre-wrap;line-height:1.5">${escapeHtml(message)}</div>
              </div>`;

            const res = await fetch("https://api.resend.com/emails", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${RESEND_API_KEY}`,
              },
              body: JSON.stringify({
                from: "Portfolio <onboarding@resend.dev>",
                to: [OWNER_EMAIL],
                reply_to: email,
                subject: `New portfolio message from ${name}`,
                html,
              }),
            });
            emailSent = res.ok;
            if (!res.ok) {
              console.error("Resend error", res.status, await res.text());
            }
          } catch (err) {
            console.error("Resend send failed", err);
          }
        } else {
          console.warn("RESEND_API_KEY not set — message saved, email skipped");
        }

        return Response.json({ ok: true, emailSent });
      },
    },
  },
});
