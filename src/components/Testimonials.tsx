import { motion } from "framer-motion";

const testimonials = [
  {
    title: "Who Delivers Real Results",
    quote: "Sarthak is an artist with code. We went from 'I want something high-tech and fast' to a fully built, high-ranking website in just over a week. His attention to his craft, ensuring information adheres to the speed and efficiency, impresses us ourselves.",
    name: "Michael Davis",
    role: "Founder/CTO",
    company: "Apex Consulting",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    bgColor: "from-blue-900/40 to-blue-950/60",
  },
  {
    title: "Simply the best developer I've worked with.",
    quote: "Aayush is the man! He is simply 'the best developer' I've worked with. He took our design requirements and style guide, translating everything into a robust, WCAG accessible platform. We are super happy with the final product. To anyone reading this—I can't recommend Aayush enough, your job will be done exceptionally well.",
    name: "Jennifer Wilson",
    role: "Founder",
    company: "Blue Harbor Agency",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    bgColor: "from-teal-900/40 to-teal-950/60",
  },
  {
    title: "Professional, Quick, and a Seamless CMS Integration",
    quote: "Aayush was quick to respond, very professional, and delivered our fully SEO-optimized site ahead of schedule. The integration with our headless CMS was seamless and exactly what we needed for easy content management. Very good job. Looking forward to collaborating again soon.",
    name: "Robert Johnson",
    role: "Startup Agency Owner",
    company: "",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    bgColor: "from-purple-900/40 to-purple-950/60",
  },
  {
    title: "Excellent Communication and a Huge Jump in Core Web Vitals",
    quote: "Excellent communication and professionalism from the start and throughout. Aayush calmly entertained a mountain of additional requests, maintaining an open-minded approach to suggestions and feedback. Our Core Web Vitals jumped immediately after deployment. An excellent experience overall, we will certainly re-engage Aayush for future projects.",
    name: "Tony Parker",
    role: "Founder",
    company: "Metro Solutions Group",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    bgColor: "from-gray-900/60 to-black/80",
  },
  {
    title: "His JavaScript/React skills are through the Roof",
    quote: "I've been working with Aayush for the past few months now and I couldn't be more impressed. His JavaScript/React web UI programming and testing skills are through the roof. Aayush has an excellent workflow, and he's both proactive and efficient. If Aayush says he can deliver a project, rest assured that it will be awesome.",
    name: "Chris Taylor",
    role: "Chairperson",
    company: "Core Fitness Club",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
    bgColor: "from-slate-800/40 to-slate-900/60",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 overflow-hidden">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 px-4"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4 block font-mono">
          Testimonials
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-instrument-serif">
          Word on the street <span className="italic bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent">about me</span>
        </h2>
      </motion.div>

      {/* Horizontal scrolling testimonials */}
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto px-4 pb-8 snap-x snap-mandatory scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex-shrink-0 w-[350px] md:w-[400px] h-auto rounded-3xl bg-gradient-to-br ${testimonial.bgColor} p-8 snap-center border border-white/10`}
            >
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 leading-tight">
                {testimonial.title}
              </h3>

              {/* Quote */}
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
                {testimonial.quote}
              </p>

              {/* Author info */}
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                />
                <div>
                  <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-400">
                    {testimonial.role}{testimonial.company && ` • ${testimonial.company}`}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};
