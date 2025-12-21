import { motion } from "framer-motion";
import { Star } from "lucide-react";

const skills = [
  "Accessible", "Responsive", "Dynamic", "Scalable", "Search Optimized",
  "Interactive", "Secure", "Reliable", "Engaging", "Performant"
];

export const Skills = () => {
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4 block">
          My Skills
        </span>
        <h2 className="text-4xl md:text-5xl font-bold">
          The Secret <span className="font-serif italic text-gradient">Sauce</span>
        </h2>
      </motion.div>

      {/* Skills marquee */}
      <div className="relative py-8 overflow-hidden">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex gap-4 animate-marquee" style={{ animationDuration: "25s" }}>
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill}-${index}`}
              className="flex items-center gap-2 flex-shrink-0 px-6 py-3 rounded-full glass hover:bg-secondary/50 transition-colors cursor-default group"
            >
              <span className="font-medium">{skill}</span>
              <Star className="w-4 h-4 text-muted-foreground group-hover:text-yellow-400 transition-colors" />
            </div>
          ))}
        </div>
      </div>

      {/* Reverse marquee */}
      <div className="relative py-8 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex gap-4 animate-marquee-reverse" style={{ animationDuration: "30s" }}>
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill}-rev-${index}`}
              className="flex items-center gap-2 flex-shrink-0 px-6 py-3 rounded-full glass hover:bg-secondary/50 transition-colors cursor-default group"
            >
              <span className="font-medium">{skill}</span>
              <Star className="w-4 h-4 text-muted-foreground group-hover:text-yellow-400 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
