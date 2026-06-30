import { motion } from "motion/react";
import { Section, SectionHeading } from "./primitives";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I build with"
        description="A growing toolkit across languages, frameworks, and people skills."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: gi * 0.05 }}
            className="rounded-2xl border border-border bg-card/60 p-6 shadow-card"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <div
                  key={s.name}
                  className="group flex items-center gap-2 rounded-xl border border-border bg-background/40 px-3 py-2 text-sm transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card"
                >
                  <span className="text-primary transition-transform group-hover:scale-110">
                    <s.icon size={16} />
                  </span>
                  {s.name}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
