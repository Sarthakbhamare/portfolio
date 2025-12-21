import { motion } from "framer-motion";
import { ArrowRight, Copy } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Star field background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-foreground/30 rounded-full star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 70}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-3xl animate-pulse-glow" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-32">
        {/* Announcement badge */}
        <motion.a
          href="#work"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm mb-8 hover:bg-secondary/30 transition-colors cursor-pointer group"
        >
          <span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-medium">
            Upcoming
          </span>
          <span className="text-muted-foreground">
            Nextnode is launching soon!
          </span>
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
        </motion.a>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl text-muted-foreground mb-4"
        >
          I help founders turn ideas
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl md:text-5xl lg:text-6xl mb-8"
        >
          into seamless{" "}
          <span className="font-serif italic text-gradient">
            digital experiences
          </span>
        </motion.h1>

        {/* Intro line with avatar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-3 text-lg md:text-xl text-muted-foreground mb-12"
        >
          <span>Hello, I'm Aayush Bharti</span>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-border"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/50 to-purple-500/50 animate-pulse-glow" />
          </div>
          <span>a Full Stack Developer</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group flex items-center gap-3 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-all duration-300 hover:scale-105"
          >
            Let's Connect
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="flex items-center gap-3 px-6 py-3 rounded-full glass text-muted-foreground hover:text-foreground transition-colors">
            <Copy className="w-4 h-4" />
            hello@aayushbharti.in
          </button>
        </motion.div>
      </div>

      {/* Earth horizon at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48">
        {/* Atmospheric glow */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-amber-100/80 via-amber-50/40 to-transparent blur-sm" />
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-blue-200/20 via-blue-100/10 to-transparent blur-md" />
        
        {/* Earth surface curve */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-32"
          viewBox="0 0 1440 128"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="earthGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(200, 40%, 25%)" />
              <stop offset="50%" stopColor="hsl(200, 30%, 35%)" />
              <stop offset="100%" stopColor="hsl(40, 40%, 80%)" />
            </linearGradient>
          </defs>
          <ellipse
            cx="720"
            cy="400"
            rx="1200"
            ry="350"
            fill="url(#earthGradient)"
          />
        </svg>
      </div>
    </section>
  );
};
