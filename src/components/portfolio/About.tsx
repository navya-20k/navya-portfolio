import { Section, SectionHeading, Reveal } from "./primitives";
import { personal } from "@/data/personal";
import { Sparkles, Target, Compass, Heart, Zap } from "lucide-react";

export function About() {
  const a = personal.about;
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="A bit about me"
        description="Engineer in the making, learning out loud and shipping real things."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2">
        <Card className="lg:col-span-4 lg:row-span-1" icon={<Sparkles size={18} />} title="About Me">
          <p>{a.aboutMe}</p>
        </Card>
        <Card className="lg:col-span-2" icon={<Target size={18} />} title="Current Focus">
          <p>{a.currentFocus}</p>
        </Card>
        <Card className="lg:col-span-2" icon={<Compass size={18} />} title="Career Goal">
          <p>{a.careerGoal}</p>
        </Card>
        <Card className="lg:col-span-2" icon={<Heart size={18} />} title="Interests">
          <ul className="flex flex-wrap gap-2">
            {a.interests.map((i) => (
              <li key={i} className="rounded-full glass px-3 py-1 text-xs">{i}</li>
            ))}
          </ul>
        </Card>
        <Card className="lg:col-span-2" icon={<Zap size={18} />} title="Strengths">
          <ul className="flex flex-wrap gap-2">
            {a.strengths.map((i) => (
              <li key={i} className="rounded-full glass px-3 py-1 text-xs">{i}</li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}

function Card({
  className = "",
  icon,
  title,
  children,
}: {
  className?: string;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal className={className}>
      <div className="group h-full rounded-2xl border border-border bg-card/60 p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/40">
        <div className="mb-4 inline-flex size-9 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
          {icon}
        </div>
        <h3 className="mb-2 text-base font-semibold">{title}</h3>
        <div className="text-sm leading-relaxed text-muted-foreground">{children}</div>
      </div>
    </Reveal>
  );
}
