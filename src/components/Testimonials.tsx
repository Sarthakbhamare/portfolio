import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Sarthak is an artist with code. We went from 'I want something high-tech and fast' to a fully built, high-ranking website in just over a week.",
    name: "Michael Davis",
    role: "Founder/CTO",
    company: "Apex Consulting",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "Simply the best developer I've worked with. He took our design requirements and translated everything into a robust, WCAG accessible platform.",
    name: "Jennifer Wilson",
    role: "Founder",
    company: "Blue Harbor Agency",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "Professional, quick, and delivered our fully SEO-optimized site ahead of schedule. The integration with our headless CMS was seamless.",
    name: "Robert Johnson",
    role: "Owner",
    company: "Startup Agency",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "Excellent communication and professionalism. Our Core Web Vitals jumped immediately after deployment. An excellent experience overall.",
    name: "Tony Parker",
    role: "Founder",
    company: "Metro Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "His JavaScript/React web UI programming skills are through the roof. If Sarthak says he can deliver a project, rest assured it will be awesome.",
    name: "Chris Taylor",
    role: "Chairperson",
    company: "Core Fitness Club",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "He's not just a developer; he's a true partner in the process. He takes your product vision and brings it to life. He's brilliant!",
    name: "Sarah Chen",
    role: "Product Owner",
    company: "Digital Bridge",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export const Testimonials = () => {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4 block font-mono">
          Testimonials
        </span>
        <h2 className="text-4xl md:text-5xl font-instrument-serif">
          Word on the street
          <br />
          <span className="italic animate-gradient-x">about me</span>
        </h2>
      </motion.div>

      {/* Testimonials grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            variants={itemVariants}
            className="glass-card p-6 group hover:bg-card/60 transition-all duration-500"
          >
            <Quote className="w-8 h-8 text-muted-foreground/30 mb-4" />
            
            <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
              "{testimonial.quote}"
            </p>

            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role} • {testimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
