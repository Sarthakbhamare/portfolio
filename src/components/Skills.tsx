import { motion } from "framer-motion";
import { Star } from "lucide-react";
import steelFlower from "@/assets/steel-flower.webp";

const skills = [
  "Accessible", "Responsive", "Dynamic", "Scalable", "Search Optimized",
  "Interactive", "Secure", "Reliable", "Engaging", "Performant"
];

export const Skills = () => {
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Rotating steel flower */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <motion.img
              src={steelFlower}
              alt="Skills cover"
              className="w-full h-full object-contain"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            {/* Glow effect */}
            <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full -z-10" />
          </div>
        </motion.div>

        {/* Right side - Header and marquees */}
        <div>
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4 block">
              My Skills
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              The Secret <span className="font-serif italic text-gradient">Sauce</span>
            </h2>
          </motion.div>

          {/* Skills marquee */}
          <div className="relative py-4 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex gap-4 animate-marquee" style={{ animationDuration: "20s" }}>
              {duplicatedSkills.map((skill, index) => (
                <div
                  key={`${skill}-${index}`}
                  className="flex items-center gap-2 flex-shrink-0 px-5 py-2.5 rounded-full glass hover:bg-secondary/50 transition-colors cursor-default group"
                >
                  <span className="font-medium text-sm">{skill}</span>
                  <Star className="w-3.5 h-3.5 text-muted-foreground group-hover:text-yellow-400 transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Reverse marquee */}
          <div className="relative py-4 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex gap-4 animate-marquee-reverse" style={{ animationDuration: "25s" }}>
              {duplicatedSkills.map((skill, index) => (
                <div
                  key={`${skill}-rev-${index}`}
                  className="flex items-center gap-2 flex-shrink-0 px-5 py-2.5 rounded-full glass hover:bg-secondary/50 transition-colors cursor-default group"
                >
                  <span className="font-medium text-sm">{skill}</span>
                  <Star className="w-3.5 h-3.5 text-muted-foreground group-hover:text-yellow-400 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
