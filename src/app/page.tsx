import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-dvh">
      <Header />
      <main>
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <div className="flex min-h-dvh snap-start flex-col justify-between">
          <div className="flex flex-1 items-center">
            <ContactSection />
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
