import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const projects = [
  {
    id: "01",
    type: "Web App",
    title: "Next Ventures",
    date: "Q1 2025",
    description: "A space for entrepreneurs to pitch ideas, explore others, and gain exposure with clean design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    tags: ["Next.js", "React", "Sanity CMS", "TypeScript", "Tailwind CSS"],
    color: "from-pink-500/20 to-purple-500/20",
  },
  {
    id: "02",
    type: "Mobile App",
    title: "Finote App",
    date: "Q4 2025",
    description: "An intuitive mobile companion for organizing your digital wallets and analyzing your financial health",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=500&fit=crop",
    tags: ["Expo", "TypeScript", "Firebase", "Zustand", "Reanimated"],
    color: "from-violet-500/20 to-blue-500/20",
  },
  {
    id: "03",
    type: "Web App",
    title: "Zenith Minds",
    date: "2025",
    description: "A platform connecting students and instructors for enhanced learning experiences",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "04",
    type: "Web App",
    title: "DevFlow",
    date: "2024",
    description: "A community-driven platform for developers to ask questions, share knowledge, and grow together",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Clerk"],
    color: "from-orange-500/20 to-red-500/20",
  },
];

export default function ProjectsPage() {
  return (
    <PageLayout>
      <div className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
            Case Studies
          </span>
          <h1 className="text-4xl md:text-6xl font-serif mt-4">
            Curated{" "}
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Work
            </span>
          </h1>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Info */}
              <div className={`space-y-4 ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{project.id}</span>
                  <span className="w-8 h-px bg-border" />
                  <span>{project.type}</span>
                  <span className="ml-auto px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs">
                    {project.date}
                  </span>
                </div>
                
                <h2 className="text-3xl font-serif">{project.title}</h2>
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-secondary/50 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-foreground mt-4 group"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative overflow-hidden rounded-2xl ${idx % 2 === 1 ? "md:order-1" : ""}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[300px] md:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
