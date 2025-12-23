import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4 block font-mono">
            Know About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-instrument-serif mb-6">
            Full-Stack Developer
            <br />
            <span className="text-muted-foreground text-2xl md:text-3xl italic animate-gradient-x">
              and a little bit of everything
            </span>
          </h2>

          <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
            <p>
              I'm Sarthak Bhamare, a proactive full-stack developer passionate about
              creating dynamic web experiences. From frontend to backend, I thrive
              on solving complex problems with clean, efficient code.
            </p>
            <p>
              My expertise spans React, Next.js, and Node.js, and I'm always eager
              to learn more. When I'm not immersed in work, I'm exploring new ideas
              and staying curious.
            </p>
            <p className="text-foreground font-medium">
              I believe in waking up each day eager to make a difference!
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-4 mb-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-secondary/50 transition-colors group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-secondary/50 transition-colors group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-secondary/50 transition-colors group"
            >
              <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"
          >
            Work Experience →
          </a>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            {/* Background gradient */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent blur-2xl" />
            
            {/* Logo overlay */}
            <div className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-foreground text-background flex items-center justify-center font-bold text-2xl z-10">
              SB
            </div>

            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden glass-card">
              <img
                src="/assets/profile pic.jpg"
                alt="Sarthak Bhamare"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
