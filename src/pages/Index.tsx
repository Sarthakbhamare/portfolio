import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { MySite } from "@/components/MySite";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <BentoGrid />
      <Projects />
      <Skills />
      <About />
      <Testimonials />
      <MySite />
      <Footer />
    </main>
  );
};

export default Index;
