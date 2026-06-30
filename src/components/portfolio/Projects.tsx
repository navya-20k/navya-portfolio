import { motion } from "motion/react";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";
import { Section, SectionHeading } from "./primitives";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="A few things I've built to solve real problems."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="absolute -right-16 -top-16 size-48 rounded-full bg-gradient-primary opacity-10 blur-3xl transition-opacity group-hover:opacity-25" />
            <div className="mb-5 inline-flex size-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
              <FolderGit2 size={18} />
            </div>
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {p.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-background/50 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full glass px-3.5 py-1.5 text-xs font-medium transition-colors hover:bg-card"
              >
                <Github size={14} /> GitHub
              </a>
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-primary px-3.5 py-1.5 text-xs font-medium text-primary-foreground transition-transform hover:scale-105"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
