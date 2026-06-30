import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { socials } from "@/data/social";
import { personal } from "@/data/personal";

export function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {personal.name}. Built with care.
        </p>
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>
      {show && (
        <a
          href="#top"
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 inline-flex size-11 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow transition-transform hover:scale-110"
        >
          <ArrowUp size={18} />
        </a>
      )}
    </footer>
  );
}
