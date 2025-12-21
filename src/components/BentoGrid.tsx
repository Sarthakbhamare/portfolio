import { motion } from "framer-motion";
import { Globe, MessageSquare, Users } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const BentoGrid = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {/* Collaboration Card */}
        <motion.div
          variants={itemVariants}
          className="glass-card p-6 md:p-8 group hover:bg-card/60 transition-all duration-500"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            I prioritize client collaboration, fostering open communication
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Book a call →
          </a>

          {/* Avatar stack */}
          <div className="flex -space-x-3 mt-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 20}.jpg`}
                alt="Team member"
                className="w-10 h-10 rounded-full border-2 border-background object-cover"
              />
            ))}
          </div>
        </motion.div>

        {/* Tech Passion Card - spans 2 columns */}
        <motion.div
          variants={itemVariants}
          className="glass-card p-6 md:p-8 md:col-span-2"
        >
          <h3 className="text-xl font-semibold mb-4">
            Passionate about cutting-edge technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "MongoDB", "AWS"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full bg-secondary/50 text-sm text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Domain Card */}
        <motion.div
          variants={itemVariants}
          className="glass-card p-6 md:p-8 flex flex-col justify-between"
        >
          <div>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              aayushbharti.in
            </span>
            <h3 className="text-2xl font-semibold mt-2">
              Websites that{" "}
              <span className="text-gradient font-serif italic">Impact.</span>
            </h3>
          </div>
          <div className="flex gap-2 mt-6">
            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Start
            </a>
            <a
              href="#work"
              className="px-4 py-2 rounded-full glass text-sm hover:bg-secondary/50 transition-colors"
            >
              Details
            </a>
          </div>
        </motion.div>

        {/* Timezone Card */}
        <motion.div
          variants={itemVariants}
          className="glass-card p-6 md:p-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Globe className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Flexible with time zones</span>
          </div>
          <div className="flex gap-3 mb-6">
            <span className="flex items-center gap-1 text-sm">🇬🇧 UK</span>
            <span className="flex items-center gap-1 text-sm">🇮🇳 India</span>
            <span className="flex items-center gap-1 text-sm">🇺🇸 USA</span>
          </div>
          <div className="p-4 rounded-xl bg-secondary/30">
            <p className="text-xs text-muted-foreground mb-1">Remote</p>
            <p className="font-medium">India</p>
          </div>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          variants={itemVariants}
          className="glass-card p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-card to-secondary/20"
        >
          <div>
            <Users className="w-8 h-8 mb-4" />
            <p className="text-muted-foreground text-sm mb-2">
              Let's work together on your next project
            </p>
            <p className="text-foreground font-medium">hello@aayushbharti.in</p>
          </div>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center justify-center w-full px-4 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Connect now
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
