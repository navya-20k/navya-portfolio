import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Section, SectionHeading, Reveal } from "./primitives";
import { personal } from "@/data/personal";
import { socials } from "@/data/social";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80),
  email: z.string().trim().email("Invalid email").max(200),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const out: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        out[String(i.path[0])] = i.message;
      });
      setErrors(out);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setForm({ name: "", email: "", message: "" });
      toast.success("Thanks! Your message was sent — I'll be in touch soon.");
    } catch {
      toast.error("Something went wrong. Please try again or email me directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const items = [
    { icon: Mail, label: "Email", value: personal.contact.email, href: `mailto:${personal.contact.email}` },
    { icon: Phone, label: "Phone", value: personal.contact.phone, href: `tel:${personal.contact.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Location", value: personal.contact.location, href: "#" },
  ];

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something great"
        description="Have a role, project, or idea in mind? I'd love to hear from you."
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-card/60 p-6 shadow-card">
            <h3 className="text-base font-semibold">Reach out directly</h3>
            <div className="space-y-3">
              {items.map((it) => (
                <a
                  key={it.label}
                  href={it.href}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background/40 p-3 text-sm transition-colors hover:border-primary/40 hover:bg-card"
                >
                  <span className="inline-flex size-9 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
                    <it.icon size={15} />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">{it.label}</p>
                    <p className="font-medium">{it.value}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-auto">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Find me online
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className="inline-flex size-10 items-center justify-center rounded-xl glass transition-colors hover:bg-card"
                  >
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-card/60 p-6 shadow-card"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Name"
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                error={errors.name}
                placeholder="Your name"
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                error={errors.email}
                placeholder="you@example.com"
              />
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-xs font-medium text-muted-foreground">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                rows={5}
                maxLength={1000}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-destructive">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] disabled:opacity-60"
            >
              <Send size={16} />
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={200}
        className="w-full rounded-xl border border-border bg-background/40 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
