import { motion } from "framer-motion";
import { Linkedin, Github, Twitter } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const experiences = [
  {
    period: "JAN 2025 - Present",
    company: "Roboto Studio",
    location: "London Area, United Kingdom",
    type: "Remote work",
    highlights: [
      "Architected enterprise-scale, CMS-driven reusable pagebuilder blocks with dynamic configurability using Sanity and Contentful",
      "Designed custom schemas and optimized GROQ queries, resulting in 40% faster content delivery",
    ],
  },
  {
    period: "OCT 2024 - JAN 2025",
    company: "WellnessZ",
    location: "Mumbai, India",
    type: "Remote work",
    highlights: [
      "Built and maintained web applications using React and Next.js",
      "Implemented responsive designs and improved performance metrics",
    ],
  },
  {
    period: "JUN 2024 - SEP 2024",
    company: "Freelance",
    location: "Remote",
    type: "Contract",
    highlights: [
      "Delivered multiple client projects on time and within budget",
      "Specialized in modern web development with React ecosystem",
    ],
  },
];

const images = [
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop", label: "I Travel" },
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop", label: "I Work Out" },
  { src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop", label: "I Code" },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
            More About Me
          </span>
          <h1 className="text-4xl md:text-6xl font-serif mt-4">
            I'm Aayush, a creative{" "}
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              engineer
            </span>
          </h1>
        </motion.div>

        {/* Bio Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm Aayush Bharti, a proactive full-stack developer passionate about creating dynamic web experiences. From frontend to backend, I thrive on solving complex problems with clean, efficient code. My expertise spans React, Next.js, and Node.js, and I'm always eager to learn more.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not immersed in work, I'm exploring new ideas and staying curious. Life's about balance, and I love embracing every part of it.
            </p>
            <p className="text-foreground font-medium">
              I believe in waking up each day eager to make a difference!
            </p>

            <div className="flex gap-4 pt-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Photo Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02, rotate: idx % 2 === 0 ? 2 : -2 }}
                className={`relative overflow-hidden rounded-2xl ${idx === 0 ? "col-span-2" : ""}`}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-4 left-4 text-foreground font-medium">
                  {img.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
            The Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mt-4 mb-12">
            Experience That Brings{" "}
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Ideas to Life
            </span>
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="glass-card p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                    <p className="text-muted-foreground">{exp.location}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                      {exp.type}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
