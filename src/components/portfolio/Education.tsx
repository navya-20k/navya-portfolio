import { GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { Section, SectionHeading } from "./primitives";
import { education } from "@/data/education";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="Education" title="Academic background" />
      <div className="grid gap-5 md:grid-cols-3">
        {education.map((e, i) => (
          <motion.div
            key={e.school}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-2xl border border-border bg-card/60 p-6 shadow-card transition-transform hover:-translate-y-0.5"
          >
            <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
              <GraduationCap size={18} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {e.period}
            </p>
            <h3 className="mt-1 text-base font-semibold">{e.degree}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
            {e.detail && (
              <p className="mt-3 inline-flex rounded-full glass px-3 py-1 text-xs">
                {e.detail}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
