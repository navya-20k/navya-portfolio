import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { Section, SectionHeading } from "./primitives";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/30 to-transparent md:left-1/2 md:-translate-x-1/2" />
        <div className="space-y-10">
          {experiences.map((e, i) => (
            <motion.div
              key={e.role + e.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative md:grid md:grid-cols-2 md:gap-10 ${
                i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              <div className="absolute left-4 top-3 -translate-x-1/2 md:left-1/2">
                <div className="size-3 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />
              </div>
              <div className="pl-10 md:pl-0 md:pr-10 md:text-right">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {e.period}
                </p>
                <h3 className="mt-1 text-lg font-semibold">{e.role}</h3>
                <p className="text-sm text-muted-foreground">{e.company}</p>
              </div>
              <div className="mt-3 pl-10 md:mt-0 md:pl-10">
                <div className="rounded-2xl border border-border bg-card/60 p-5 shadow-card">
                  <div className="mb-3 inline-flex size-8 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
                    <Briefcase size={16} />
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {e.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
