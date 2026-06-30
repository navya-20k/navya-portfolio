import { Download, FileText } from "lucide-react";
import { Section, SectionHeading, Reveal } from "./primitives";
import { personal } from "@/data/personal";

export function Resume() {
  return (
    <Section id="resume">
      <SectionHeading
        eyebrow="Resume"
        title="Take my resume with you"
      />
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 p-8 shadow-card sm:p-12">
          <div className="absolute -right-20 -top-24 size-64 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-5">
              <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                <FileText size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">My Resume</h3>
                <p className="mt-1 max-w-md text-sm text-muted-foreground">
                  A one-page summary of experience, projects, skills, and education — updated regularly.
                </p>
              </div>
            </div>
            <a
              href={personal.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>
          <div className="mt-8 rounded-2xl border border-dashed border-border bg-background/50 p-10 text-center text-sm text-muted-foreground">
            Resume preview placeholder — embed the PDF here when ready.
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
