import { motion } from "framer-motion";
import { Zap, Code2, Palette, Terminal, BookOpen } from "lucide-react";

const tools = [
  { name: "Raycast", icon: Zap, color: "from-red-500 to-pink-500" },
  { name: "Arc", icon: Palette, color: "from-blue-500 to-cyan-500" },
  { name: "VSCode", icon: Code2, color: "from-purple-500 to-indigo-500" },
  { name: "Obsidian", icon: BookOpen, color: "from-amber-500 to-orange-500" },
  { name: "Notion", icon: Terminal, color: "from-gray-500 to-slate-500" },
];

export const MySite = () => {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4 block font-mono">
          My Site
        </span>
        <h2 className="text-4xl md:text-5xl font-instrument-serif">
          Explore, experiment{" "}
          <span className="italic animate-gradient-x">&& say hello</span>
        </h2>
      </motion.div>

      {/* Tools Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex justify-center gap-4 md:gap-6 mb-16 flex-wrap"
      >
        {tools.map((tool, idx) => {
          const IconComponent = tool.icon;
          return (
            <motion.button
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 rounded-xl bg-gradient-to-br glass flex items-center justify-center hover:shadow-lg transition-all"
            >
              <IconComponent className="w-8 h-8" />
            </motion.button>
          );
        })}
      </motion.div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Uses Card */}
        <motion.a
          href="/uses"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ y: -4 }}
          className="glass-card p-8 group cursor-pointer hover:bg-card/60 transition-all"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                Tools
              </span>
              <h3 className="text-2xl font-semibold">
                Check out my{" "}
                <span className="font-serif italic text-gradient">
                  favorite tools
                </span>
              </h3>
            </div>
          </div>
          <p className="text-muted-foreground text-sm">
            My complete setup and tools that help me build amazing things.
          </p>
        </motion.a>

        {/* Guestbook Card */}
        <motion.a
          href="/guestbook"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ y: -4 }}
          className="glass-card p-8 group cursor-pointer hover:bg-card/60 transition-all"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                Guestbook
              </span>
              <h3 className="text-2xl font-semibold">
                Let me know you were{" "}
                <span className="font-serif italic text-gradient">here</span>
              </h3>
            </div>
          </div>
          <p className="text-muted-foreground text-sm">
            Sign my guestbook and leave a message!
          </p>
        </motion.a>
      </div>
    </section>
  );
};
