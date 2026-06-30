import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { personal } from "@/data/personal";
import { socials } from "@/data/social";
import profileImg from "@/assets/profile.jpg";

function useRotatingText(items: string[], interval = 2200) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % items.length), interval);
    return () => clearInterval(id);
  }, [items, interval]);
  return items[i];
}

export function Hero() {
  const role = useRotatingText(personal.roles);

  return (
    <section id="top" className="relative overflow-hidden px-6 pb-20 pt-32 sm:pt-40">
      {/* glow background */}
      <div className="bg-hero-glow pointer-events-none absolute inset-0 -z-10" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(closest-side, oklch(0.56 0.24 295 / 0.25), transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
            <span className="size-1.5 animate-pulse rounded-full bg-primary" />
            Available for opportunities
          </div>
          <p className="text-base text-muted-foreground">{personal.greeting}</p>
          <p className="mt-2 text-base text-muted-foreground">{personal.intro}</p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl">
            {personal.name}
          </h1>
          <h2 className="mt-5 text-xl font-medium text-foreground sm:text-2xl">
            {personal.title}
          </h2>
          <div className="mt-2 h-7 overflow-hidden">
            <motion.span
              key={role}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-block text-gradient text-base font-semibold sm:text-lg"
            >
              {role}
            </motion.span>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {personal.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={personal.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-card"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <s.icon size={20} />
              </a>
            ))}
            <span className="ml-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin size={14} /> {personal.contact.location}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-primary opacity-30 blur-2xl" />
          <div className="overflow-hidden rounded-[1.75rem] glass p-2 shadow-card">
            <img
              src={profileImg}
              alt="Portrait of Medisetti Navya Sri Satya"
              width={1024}
              height={1024}
              className="aspect-square w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-4 rounded-2xl glass px-4 py-2.5 text-xs">
            <p className="text-muted-foreground">Currently</p>
            <p className="font-medium">B.Tech CSE · CGPA 7.92</p>
          </div>
          <div className="absolute -right-3 top-6 rounded-2xl glass px-4 py-2.5 text-xs">
            <p className="text-muted-foreground">Focus</p>
            <p className="font-medium">Full Stack · AI</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
