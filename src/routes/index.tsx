import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Certifications } from "@/components/portfolio/Certifications";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Navya Sri Satya — Software Engineer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Medisetti Navya Sri Satya — Software Engineer, Full Stack Developer & AI Enthusiast. Projects, skills, experience, and contact.",
      },
      { property: "og:title", content: "Navya Sri Satya — Software Engineer" },
      {
        property: "og:description",
        content:
          "Full Stack Developer & AI Enthusiast — projects, experience and skills.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <h1 className="sr-only">Medisetti Navya Sri Satya — Software Engineer Portfolio</h1>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
      <Toaster richColors position="bottom-center" />
    </main>
  );
}
