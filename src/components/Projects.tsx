import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    type: "Web App",
    title: "Next Ventures",
    date: "Q1 2025",
    description: "A space for entrepreneurs to pitch ideas, explore others, and gain exposure with clean design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Next.js", "React", "Sanity CMS", "TypeScript", "Motion.dev"],
  },
  {
    id: "02",
    type: "Mobile App",
    title: "Finote App",
    date: "Q4 2025",
    description: "An intuitive mobile companion for organizing your digital wallets and analyzing your financial health",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop",
    tags: ["Expo", "TypeScript", "Firebase", "Zustand", "Reanimated"],
  },
  {
    id: "03",
    type: "Web App",
    title: "Zenith Minds",
    date: "2025",
    description: "A platform connecting students and instructors for enhanced learning experiences",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    tags: ["Next.js", "Node.js", "MongoDB", "Turborepo", "Tailwind CSS"],
  },
  {
    id: "04",
    type: "Web App",
    title: "Snippix",
    date: "2025",
    description: "A platform for creating and sharing code snippets with a clean and intuitive design",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    tags: ["Next.js", "React", "Zustand", "shadcn-ui", "highlight.js"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const Projects = () => {
  return (
    <section id="work" className="py-24 px-4 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4 block">
          Case Studies
        </span>
        <h2 className="text-4xl md:text-5xl font-bold">
          Curated <span className="font-serif italic text-gradient">work</span>
        </h2>
      </motion.div>

      {/* Projects grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-8"
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            variants={itemVariants}
            className="group glass-card p-6 md:p-8 hover:bg-card/60 transition-all duration-500"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Content */}
              <div className={`flex flex-col justify-between ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl font-bold text-muted-foreground/30">
                      {project.id}
                    </span>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground block">
                        {project.type}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {project.date}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-semibold mb-4 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-secondary/50 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium group/link"
                >
                  View Project
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="relative overflow-hidden rounded-xl aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* See more button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a
          href="#"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-secondary/50 transition-colors"
        >
          See more projects
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
};
