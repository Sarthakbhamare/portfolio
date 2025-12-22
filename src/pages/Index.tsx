import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechMarquee } from "@/components/TechMarquee";
import { BentoGrid } from "@/components/BentoGrid";
import { ServicesMarquee } from "@/components/ServicesMarquee";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { MySite } from "@/components/MySite";
import { LastPlayed } from "@/components/LastPlayed";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <TechMarquee />
      <BentoGrid />
      <ServicesMarquee />
      <Projects />
      <Skills />
      <About />
      <Testimonials />
      <MySite />
      <LastPlayed />
      <Footer />
    </main>
  );
};

export default Index;
