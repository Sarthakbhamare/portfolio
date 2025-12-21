import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";

const workstation = {
  name: "MacBook Air M4",
  specs: "16GB Unified Memory • 512GB SSD",
  color: "Sky Blue",
  image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=500&fit=crop",
};

const tools = [
  { name: "Raycast", icon: "🚀" },
  { name: "Arc", icon: "🌐" },
  { name: "VSCode", icon: "💻" },
  { name: "Obsidian", icon: "📝" },
  { name: "Notion", icon: "📋" },
  { name: "Spotify", icon: "🎵" },
  { name: "Figma", icon: "🎨" },
  { name: "Things 3", icon: "✅" },
  { name: "1Password", icon: "🔐" },
  { name: "Framer", icon: "⚡" },
  { name: "CleanShot X", icon: "📸" },
  { name: "Warp", icon: "🖥️" },
];

const vscodeExtensions = [
  "GitHub Copilot",
  "ESLint",
  "Prettier",
  "GitLens",
  "Error Lens",
  "Auto Rename Tag",
  "Tailwind CSS IntelliSense",
  "Thunder Client",
];

const techStack = [
  { name: "React", type: "Frontend" },
  { name: "Next.js", type: "Framework" },
  { name: "TypeScript", type: "Language" },
  { name: "Tailwind CSS", type: "Styling" },
  { name: "Framer Motion", type: "Animation" },
  { name: "Node.js", type: "Backend" },
  { name: "PostgreSQL", type: "Database" },
  { name: "Prisma", type: "ORM" },
];

export default function UsesPage() {
  return (
    <PageLayout>
      <div className="pt-32 pb-20 px-4 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
            The Gear
          </span>
          <h1 className="text-4xl md:text-6xl font-serif mt-4">
            What Powers{" "}
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              My Work
            </span>
          </h1>
        </motion.div>

        {/* Workstation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-muted-foreground text-sm">01</span>
            <h2 className="text-2xl font-serif">Workstation</h2>
          </div>

          <div className="glass-card p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img
                src={workstation.image}
                alt={workstation.name}
                className="w-full h-64 object-cover rounded-xl"
              />
              <div>
                <h3 className="text-2xl font-serif">{workstation.name}</h3>
                <p className="text-muted-foreground mt-2">{workstation.specs}</p>
                <span className="inline-block mt-3 px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground">
                  {workstation.color}
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Development Tools */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-muted-foreground text-sm">02</span>
            <h2 className="text-2xl font-serif">Development</h2>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {tools.map((tool, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + idx * 0.03 }}
                className="glass-card p-4 text-center hover:border-border/60 transition-colors"
              >
                <span className="text-2xl mb-2 block">{tool.icon}</span>
                <span className="text-xs text-muted-foreground">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* VSCode Extensions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-muted-foreground text-sm">03</span>
            <h2 className="text-2xl font-serif">VSCode Extensions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {vscodeExtensions.map((ext, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + idx * 0.03 }}
                className="glass-card p-4 flex items-center gap-3"
              >
                <span className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-sm">
                  {idx + 1}
                </span>
                <span>{ext}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-muted-foreground text-sm">04</span>
            <h2 className="text-2xl font-serif">Tech Stack</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {techStack.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + idx * 0.03 }}
                className="glass-card p-4 flex items-center justify-between"
              >
                <span className="font-medium">{tech.name}</span>
                <span className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground">
                  {tech.type}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </PageLayout>
  );
}
