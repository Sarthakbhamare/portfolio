import { motion } from "framer-motion";
import { ArrowRight, Copy } from "lucide-react";
import Galaxy from "./ui/Galaxy";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Galaxy Background */}
      <div className="absolute inset-0 z-0">
        <Galaxy 
          mouseInteraction={true}
          mouseRepulsion={true}
          density={0.5}
          glowIntensity={0.1}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.05}
          repulsionStrength={0}
          starSpeed={0.1}
          speed={0.2}
        />
      </div>

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
              src="/portfolio/assets/profile pic.jpg"
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
            <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/20">
              <img 
                src="/portfolio/assets/profile pic.jpg" 
                alt="Sarthak" 
                className="w-full h-full object-cover"
              />
            </div>
            Let's Connect
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="flex items-center gap-3 px-6 py-3 rounded-full glass text-muted-foreground hover:text-foreground transition-colors">
            <Copy className="w-4 h-4" />
            Sarthakbhamare12@gmail.com
          </button>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-56 z-[5]">
        <div aria-hidden="true" className="relative h-60 w-full mt-4">
          <div className="absolute bottom-0 left-1/2 z-0 -translate-x-1/2 transform h-[500px] w-[1200px] [mask-image:linear-gradient(to_right,transparent,black_30%,black_70%,transparent)]">
            {/* Animated Gradient Layer */}
            <div className="absolute bottom-[167px] left-1/2 -translate-x-1/2 transform h-[111px] w-[800px] blur-[80px] bg-[linear-gradient(90deg,#06b6d4,#7c3aed,#4f46e5,#38bdf8,#06b6d4)] [background-size:300%_100%] animate-gradient-animation" />
            
            {/* Gradient Overlay */}
            <div className="absolute -bottom-[753px] -left-[454px] -right-[432px] h-[955px] rounded-[100%] bg-gradient-to-b from-indigo-500/40 to-transparent dark:from-white" />
            
            {/* Curved Horizon with Glowing Border */}
            <div className="absolute -bottom-[759px] -left-[532px] -right-[510px] h-[956px] aspect-[2.346/1] rounded-[100%] bg-black border-t border-white/50 shadow-[inset_0_-2px_8px_rgba(255,255,255,0.2),inset_0_2px_20px_#4f46e520,0_-10px_80px_rgba(255,255,255,0.4),0_-5px_40px_rgba(255,255,255,0.3),0_-10px_50px_1px_#4f46e540] dark:shadow-[inset_0_-2px_8px_rgba(255,255,255,0.3),inset_0_2px_20px_#fff,0_-10px_80px_rgba(255,255,255,0.5),0_-5px_40px_rgba(255,255,255,0.4),0_-10px_60px_1px_#ffffff90]" />
          </div>
        </div>
      </div>
    </section>
  );
};
