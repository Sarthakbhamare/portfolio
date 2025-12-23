import { motion } from "framer-motion";
import { SiVisualstudio, SiRaycast, SiFigma, SiNotion, SiLinear } from "react-icons/si";
import { Code2 } from "lucide-react";

const tools = [
  { name: "Raycast", icon: SiRaycast, color: "text-red-500" },
  { name: "Figma", icon: SiFigma, color: "text-pink-500" },
  { name: "VSCode", icon: Code2, color: "text-blue-500" },
  { name: "Notion", icon: SiNotion, color: "text-purple-500" },
  { name: "Linear", icon: SiLinear, color: "text-gray-400" },
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
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-instrument-serif">
          Explore, experiment{" "}
          <span className="italic bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">&& say hello</span>
        </h2>
      </motion.div>

      {/* Three Card Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Uses Card */}
        <motion.a
          href="/uses"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          whileHover={{ y: -4 }}
          className="glass-card p-8 group cursor-pointer hover:bg-card/60 transition-all rounded-3xl relative overflow-hidden"
        >
          {/* Tool Icons */}
          <div className="flex gap-3 mb-8 flex-wrap">
            {tools.map((tool, idx) => {
              const IconComponent = tool.icon;
              return (
                <div
                  key={tool.name}
                  className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center backdrop-blur-sm"
                >
                  <IconComponent className={`w-6 h-6 ${tool.color}`} />
                </div>
              );
            })}
          </div>

          <div className="mt-auto">
            <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">
              Uses
            </span>
            <h3 className="text-lg font-medium text-foreground">
              Check out my favorite tools
            </h3>
          </div>
        </motion.a>

        {/* Guestbook Card */}
        <motion.a
          href="/guestbook"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ y: -4 }}
          className="glass-card p-8 group cursor-pointer hover:bg-card/60 transition-all rounded-3xl relative overflow-hidden"
        >
          {/* Guestbook Notes Visual */}
          <div className="mb-8 flex gap-4 items-center justify-center">
            <div className="w-32 h-40 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-2xl border border-white/10 rotate-[-8deg] backdrop-blur-sm" />
            <div className="w-32 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-white/10 rotate-[8deg] backdrop-blur-sm -ml-8" />
          </div>

          <div className="mt-auto">
            <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">
              Guestbook
            </span>
            <h3 className="text-lg font-medium text-foreground">
              Let me know you were here
            </h3>
          </div>
        </motion.a>

        {/* Last Played Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass-card p-8 group hover:bg-card/60 transition-all rounded-3xl relative overflow-hidden"
        >
          {/* Spotify Icon */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-green-500 mb-4">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              <span className="text-xs font-semibold">Last Played</span>
            </div>

            {/* Album Art Placeholder */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4">
              <div className="w-full h-full bg-gradient-to-br from-red-500/30 to-orange-500/30 backdrop-blur-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <p className="text-sm text-muted-foreground mb-1">
              Last Played <span className="font-semibold text-foreground">Gata Only</span> by <span className="font-semibold text-foreground">FloyyMenor, Cris MJ</span> from <span className="font-semibold text-foreground">EL COMIENZO</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
