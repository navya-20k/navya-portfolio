import { Award, Trophy } from "lucide-react";
import { motion } from "motion/react";
import { Section, SectionHeading } from "./primitives";
import { certifications, achievements } from "@/data/certifications";

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        eyebrow="Certifications & Achievements"
        title="Recognition & learning milestones"
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Certifications
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {certifications.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card/60 p-4 shadow-card transition-transform hover:-translate-y-0.5"
              >
                <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
                  <Award size={15} />
                </span>
                <div>
                  <p className="text-sm font-medium leading-snug">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Achievements
          </p>
          <div className="space-y-3">
            {achievements.map((a, i) => (
              <motion.div
                key={a}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card/60 p-4 shadow-card"
              >
                <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
                  <Trophy size={15} />
                </span>
                <p className="text-sm leading-relaxed">{a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
