import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="relative py-24 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Open to work banner */}
      <div className="relative overflow-hidden py-4 mb-16">
        <div className="flex gap-8 animate-marquee" style={{ animationDuration: "15s" }}>
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="flex-shrink-0 text-sm uppercase tracking-widest text-muted-foreground/50"
            >
              Open to Work · Open to Work ·
            </span>
          ))}
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Wings decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-6xl mb-8"
        >
          ✦
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            From Concept to Creation
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
            LET'S MAKE IT{" "}
            <span className="font-serif italic text-gradient">HAPPEN!</span>
          </h2>

          <a
            href="mailto:hello@aayushbharti.in"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-medium text-lg hover:bg-foreground/90 transition-all duration-300 hover:scale-105 group mb-8"
          >
            Get In Touch
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            I'm available for full-time roles & freelance projects.
            <br />
            I thrive on crafting dynamic web applications and delivering seamless
            user experiences.
          </p>
        </motion.div>

        {/* Footer links */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Aayush Bharti. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
