import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "./ui/ScrollStack";

const projects = [
  {
    id: "01",
    type: "Mobile App",
    title: "Finote App",
    date: "2025",
    description: "An intuitive mobile companion for organizing your digital wallets and analyzing your financial health through interactive charts. Take control of your financial life with Finote, a powerful and intuitive personal finance manager built with Expo.",
    features: [
      "Create and manage multiple wallets to keep finances organized",
      "Visualize spending trends with interactive weekly and yearly charts",
      "Attach receipts and sync data in real time using cloud storage",
      "Navigate smoothly with custom animations and a modern design",
      "Protect your data with secure login and authentication"
    ],
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&h=800&fit=crop",
    tags: ["Expo", "TypeScript", "Firebase", "Zod", "Zustand", "Cloudinary", "Reanimated", "Gifted-Charts"],
  },
  {
    id: "02",
    type: "Web App",
    title: "Zenith Minds",
    date: "2025",
    description: "Developed ZenithMinds, an educational platform connecting students and instructors, fostering global collaboration and continuous learning.",
    features: [
      "Built with Next.js, React, and TypeScript for scalability.",
      "Styled using Tailwind CSS with animations by Motion.dev.",
      "Used Zustand for state management and Zod for validation.",
      "Integrated MongoDB and RESTful APIs with Node.js and Express.",
      "Designed a user-friendly interface for seamless interactions."
    ],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop",
    tags: ["Next.js", "React", "Node.js", "Express.js", "Turborepo", "TypeScript", "MongoDB", "Razorpay", "Zustand", "Zod", "Tailwind CSS", "Motion.dev"],
  },
  {
    id: "03",
    type: "Web App",
    title: "Snippix",
    date: "2025",
    description: "A platform for creating and sharing code snippets with a clean and intuitive design. It allows you to create, share, and discover code snippets with ease.",
    features: [
      "Choose from over 10+ code editor themes (light and dark) and 12+ handpicked monospace fonts.",
      "Automatic syntax highlighting powered by Highlight.js for all major programming languages",
      "Export your snippet as PNG or SVG, copy it to your clipboard, or generate a shareable permalink.",
      "Change font size, background styles, padding, window controls, line numbers,and more — Snippix adapts to your aesthetic.",
      "Drag to resize the snippet container, and use keyboard shortcuts (via react-hotkeys-hook) for a faster workflow."
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop",
    tags: ["Next.js", "React", "Zustand", "shadcn-ui", "highlight.js", "react-hotkeys-hook"],
  },
  {
    id: "04",
    type: "Landing Page",
    title: "StarForge",
    date: "2025",
    description: "An AI SaaS landing page showcasing modern UI/UX excellence. With sleek design and smooth animations, it delivers an engaging user experience and serves as an inspiring reference for developers and designers.",
    features: [
      "Built with React and Vite for fast and scalable development.",
      "Designed responsive layouts using Tailwind CSS.",
      "Enhanced user experience with smooth animations using react-just-parallax.",
      "Implemented JavaScript for dynamic interactions and seamless functionality."
    ],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=800&fit=crop",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "parallax", "Vercel"],
  },
];

export const Projects = () => {
  const [activeId, setActiveId] = useState(projects[0].id);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const dataId = (entry.target as HTMLElement).getAttribute("data-project-id");
            if (dataId) {
              setActiveId(dataId);
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-35% 0px -35% 0px"
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const activeProject = projects.find((p) => p.id === activeId) || projects[0];

  return (
    <section id="work" className="relative">
      {/* Header - Sticky at the top until the first card hits */}
      <div className="py-24 px-4 max-w-[1600px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4 block font-mono">
            Case Studies
          </span>
          <h2 className="text-5xl md:text-7xl font-instrument-serif">
            Curated <span className="italic bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">work</span>
          </h2>
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row max-w-[1600px] mx-auto px-4 gap-8 items-start">
        {/* Left Side: Stacking Cards */}
        <div className="w-full lg:w-1/2">
          <ScrollStack useWindowScroll={true} className="!overflow-visible !h-auto" itemDistance={100} stackPosition="15%">
            {projects.map((project, index) => (
              <ScrollStackItem key={project.id} itemClassName="!h-auto !p-0 !my-0 !bg-transparent !shadow-none !rounded-3xl overflow-hidden">
                <div
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  data-project-id={project.id}
                  className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] xl:aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-card"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover bg-secondary/20"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  
                  {/* Mobile Overlay Text */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 lg:hidden bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                    <h3 className="text-3xl font-instrument-serif text-white mb-2">{project.title}</h3>
                    <p className="text-white/80 text-sm line-clamp-3">{project.description}</p>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>

        {/* Right Side: Sticky Info Panel */}
        <div className="hidden lg:flex w-1/2 sticky top-0 h-screen items-center justify-center pl-12 self-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="space-y-6 max-w-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-pink-500/50" />
                <span className="text-5xl font-bold text-muted-foreground/10 font-mono absolute -z-10 -translate-y-6 -translate-x-4">
                  {activeProject.id}
                </span>
                <h3 className="text-5xl font-instrument-serif text-foreground relative z-10">
                  {activeProject.title}
                </h3>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {activeProject.description}
              </p>

              <ul className="space-y-3">
                {activeProject.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground/80">
                    <Star className="w-4 h-4 text-pink-500 mt-1 shrink-0 fill-pink-500/20" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-6">
                {activeProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-md border border-white/10 bg-secondary/20 text-xs text-muted-foreground font-mono hover:bg-secondary/40 transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-6">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
                >
                  View Case Study
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
