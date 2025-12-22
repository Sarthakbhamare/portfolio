import { motion } from "framer-motion";

const techStack1 = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "CSS", "Motion.dev",
  "Sanity CMS", "Figma", "Notion", "Markdown", "Node.js", "Express.js", "Redis"
];

const techStack2 = [
  "PostgreSQL", "MongoDB", "Prisma ORM", "Drizzle ORM", "Better Auth",
  "Turborepo", "TanStack Query", "Zustand", "Expo", "GROQ", "PostHog", "pnpm", "Bun"
];

const techStack3 = [
  "Biome.js", "Git", "GitHub", "GitHub Actions", "Vercel", "Docker",
  "AWS", "Cloudflare", "Python", "Linux", "Bash"
];

interface MarqueeRowProps {
  items: string[];
  reverse?: boolean;
  speed?: number;
}

const MarqueeRow = ({ items, reverse = false, speed = 50 }: MarqueeRowProps) => {
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="flex overflow-hidden py-2">
      <motion.div
        className={`flex gap-3 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {duplicatedItems.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="flex-shrink-0 px-4 py-2 rounded-full glass text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-300 cursor-default font-mono"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export const TechMarquee = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="space-y-3">
        <MarqueeRow items={techStack1} speed={40} />
        <MarqueeRow items={techStack2} reverse speed={45} />
        <MarqueeRow items={techStack3} speed={40} />
      </div>
    </section>
  );
};
