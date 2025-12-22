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
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-mono">
            From Concept to Creation
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-instrument-serif mb-8">
            LET'S MAKE IT{" "}
            <span className="italic animate-gradient-x">HAPPEN!</span>
          </h2>

          <a
            href="mailto:Sarthakbhamare12@gmail.com"
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
        <div className="mt-16 pt-8 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">General</p>
              <div className="space-y-2">
                <a href="/" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Home</a>
                <a href="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
                <a href="/projects" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</a>
                <a href="/blog" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">Specifics</p>
              <div className="space-y-2">
                <a href="/guestbook" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Guest Book</a>
                <a href="/bucket-list" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Bucket List</a>
                <a href="/uses" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Uses</a>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">More</p>
              <div className="space-y-2">
                <a href="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Book a call</a>
                <a href="/links" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Links</a>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">Attribution</p>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Use</a>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">Socials</p>
              <div className="space-y-2">
                <a href="https://linkedin.com/in/sarthak-bhamare-899148288/" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
                <a href="https://github.com/Sarthakbhamare" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2025 Sarthak Bhamare. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
