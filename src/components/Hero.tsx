import { motion } from "framer-motion";
import { ArrowRight, Copy } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ filter: "saturate(0.92) brightness(0.98)" }}
    >
      {/* Atmospheric base gradient (non-centered radial) */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(120% 60% at 50% 100%, #2b1b3f 0%, #1a2557 35%, #120f1c 60%, #050505 100%)",
        }}
      />

      {/* Global star field (twinkle, glow) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(80)].map((_, i) => (
          <div
            key={`bg-${i}`}
            className="absolute w-[2px] h-[2px] bg-white/50 rounded-full star star-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.45,
              filter: "blur(0.3px)",
            }}
          />
        ))}
      </div>

      {/* Stars around headline (gentle upward drift) */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[22%] w-full max-w-5xl h-[360px] pointer-events-none overflow-hidden">
        {[...Array(45)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white/70 rounded-full star star-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `rise ${8 + Math.random() * 4}s linear ${Math.random() * 3}s infinite`,
              opacity: 0.5,
              filter: "blur(0.3px)",
            }}
          />
        ))}
      </div>

      {/* Subtle glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/12 rounded-full blur-3xl animate-pulse-glow" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-[120px]">
        {/* Announcement badge */}
        <motion.a
          href="#work"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm mb-[28px] hover:bg-secondary/30 transition-colors cursor-pointer group"
        >
          <span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-medium font-mono uppercase">
            Upcoming
          </span>
          <span className="text-muted-foreground">
            Nextnode is launching soon!
          </span>
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
        </motion.a>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-[28px]"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-instrument-serif leading-tight text-[#f4f4f5] font-normal tracking-[0.01em]">
            I help founders turn ideas
            <br />
            into seamless{" "}
            <span className="italic animate-gradient-x">
              digital experiences
            </span>
          </h1>
        </motion.div>

        {/* Intro line with avatar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg md:text-xl text-muted-foreground mb-[28px]"
        >
          <span>Hello, I'm Sarthak Bhamare</span>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
              alt="Sarthak Bhamare"
              className="w-12 h-12 rounded-full object-cover border-2 border-border"
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
            Sarthakbhamare12@gmail.com
          </button>
        </motion.div>
      </div>

      {/* Curved glowing horizon (no image) */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none">
        {/* Ambient radial glow clipped to an ellipse for a curved top */}
        <div
          className="absolute inset-x-0 bottom-0 h-48 blur-2xl"
          style={{
            clipPath: "ellipse(140% 60% at 50% 120%)",
            background:
              "radial-gradient(closest-side, rgba(168,85,247,0.25), rgba(59,130,246,0.22) 40%, rgba(236,72,153,0.15) 55%, transparent 70%)",
          }}
        />

        {/* Horizon rim light using SVG - bright, visible glow with sharp rim */}
        <svg className="absolute bottom-0 left-0 right-0 w-full h-64" viewBox="0 0 1440 300" preserveAspectRatio="none">
          <defs>
            {/* Gradient 1: Outer soft white glow base */}
            <linearGradient id="rimGradientOuter" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#6b8dd9" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#5badce" />
            </linearGradient>
            
            {/* Gradient 2: Mid-layer bright blend */}
            <linearGradient id="rimGradientMid" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7a9ce8" />
              <stop offset="50%" stopColor="#f8fffe" />
              <stop offset="100%" stopColor="#6bb8d9" />
            </linearGradient>
            
            {/* Gradient 3: Sharp bright rim */}
            <linearGradient id="rimGradientSharp" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8aacf0" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#7bc8e9" />
            </linearGradient>
            
            {/* Filters */}
            <filter id="glowOuter" x="-150%" y="-150%" width="400%" height="400%">
              <feGaussianBlur stdDeviation="65" />
            </filter>
            <filter id="glowMid" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="30" />
            </filter>
          </defs>
          
          {/* Absolute black block below rim - zero glow escape */}
          <ellipse cx="720" cy="900" rx="1800" ry="700" fill="#000000" />
          
          {/* Layer 1: Outer soft white glow (widest, most diffuse) */}
          <ellipse 
            cx="720" cy="320" rx="1120" ry="420" 
            fill="none" 
            stroke="url(#rimGradientOuter)" 
            strokeWidth="1.5" 
            strokeOpacity="0.65" 
            filter="url(#glowOuter)" 
          />
          
          {/* Layer 2: Mid-layer bright glow (secondary halo) */}
          <ellipse 
            cx="720" cy="320" rx="1120" ry="420" 
            fill="none" 
            stroke="url(#rimGradientMid)" 
            strokeWidth="1.2" 
            strokeOpacity="0.5" 
            filter="url(#glowMid)" 
          />
          
          {/* Layer 3: Sharp bright rim (visible and clean) */}
          <ellipse 
            cx="720" cy="320" rx="1120" ry="420" 
            fill="none" 
            stroke="url(#rimGradientSharp)" 
            strokeWidth="4.5" 
            strokeOpacity="0.95" 
          />
        </svg>

        {/* Stars emanating from the horizon (clipped to same curve) */}
        <div
          className="absolute inset-x-0 bottom-0 h-40 overflow-hidden"
          style={{ clipPath: "ellipse(140% 60% at 50% 120%)" }}
        >
          {[...Array(50)].map((_, i) => (
            <div
              key={`emit-${i}`}
              className="absolute w-[2px] h-[2px] bg-white/70 rounded-full star-glow"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `0%`,
                animation: `rise-long ${12 + Math.random() * 8}s linear ${Math.random() * 4}s infinite`,
                opacity: 0.5,
                filter: "blur(0.3px)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
