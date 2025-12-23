import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techIcons = [
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "CSS3", icon: "https://cdn.simpleicons.org/css3/1572B6" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "Notion", icon: "https://cdn.simpleicons.org/notion/FFFFFF" },
  { name: "MaterialUI", icon: "https://cdn.simpleicons.org/mui/007FFF" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/FFFFFF" },
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
  { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" },
  { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql/E10098" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/FFFFFF" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF" },
  { name: "AWS", icon: "https://cdn.simpleicons.org/amazonaws/FFFFFF" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Linux", icon: "https://cdn.simpleicons.org/linux/FCC624" },
  { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
  { name: "Cloudflare", icon: "https://cdn.simpleicons.org/cloudflare/F38020" },
];

const skills = [
  "RESPONSIVE", "DYNAMIC", "SCALABLE", "SEARCH OPTIMIZED",
  "INTERACTIVE", "SECURE", "RELIABLE", "ENGAGING", "ACCESSIBLE"
];

export const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const flowerRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !flowerRef.current || !iconsRef.current) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Fallback: static layout with no scroll animation
      if (iconsRef.current) {
        iconsRef.current.style.gap = '24px';
      }
      return;
    }

    const ctx = gsap.context(() => {
      const icons = gsap.utils.toArray<HTMLElement>(".tech-icon");
      const rows = gsap.utils.toArray<HTMLElement>(".icon-row");

      // Main timeline with scroll trigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1.2,
          pin: false,
        }
      });

      // Flower rotation (360 degrees - slower than before)
      tl.to(flowerRef.current, {
        rotation: 360,
        ease: "none",
      }, 0);

      // Breathing - animate vertical spacing between rows
      tl.fromTo(iconsRef.current,
        { gap: "10px" },
        { gap: "18px", ease: "power2.out" },
        0
      );

      // Breathing - animate horizontal gap within each row
      rows.forEach((row) => {
        tl.fromTo(row,
          { gap: "10px" },
          { gap: "18px", ease: "power2.out" },
          0
        );
      });

      // Individual icon polish (scale + opacity)
      icons.forEach((icon) => {
        tl.fromTo(icon,
          {
            scale: 0.85,
            opacity: 0.6,
          },
          {
            scale: 1,
            opacity: 1,
            ease: "power3.out",
          },
          0
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black overflow-hidden"
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-4">
        {/* Subtle ambient glow */}
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/10 via-transparent to-transparent" />
        
        {/* Flower and Title Container (for overlap) */}
        <div className="relative flex flex-col items-center w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
          {/* Outer bloom glow (fixed, doesn't rotate) */}
          <div
            className="absolute inset-0"
            style={{
              transform: "scale(1.2)",
              opacity: 0.4,
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-radial from-pink-500/40 via-purple-500/20 to-transparent blur-3xl" />
          </div>

          {/* Rotating Flower */}
          <motion.div
            ref={flowerRef}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
            style={{
              filter: "drop-shadow(0 0 50px rgba(236, 72, 153, 0.5))",
            }}
          >
            <img
              src="/assets/download.webp"
              alt="Secret Sauce Flower"
              className="w-full h-full object-contain"
              loading="eager"
            />
          </motion.div>
          
          {/* Black overlay on bottom 50% (fixed, doesn't rotate) */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-[50%] z-10"
            style={{
              background: "linear-gradient(to top, rgba(0, 0, 0, 0.98) 0%, rgba(0, 0, 0, 0.85) 40%, rgba(0, 0, 0, 0.4) 70%, transparent 100%)",
              pointerEvents: "none",
            }}
          />

          {/* Title - Positioned on fixed black overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-0 left-0 right-0 z-20 text-center pb-8 md:pb-12"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-4 block font-mono opacity-60">
              MY SKILLS
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-instrument-serif text-white">
              The Secret <span className="italic animate-gradient-x">Sauce</span>
            </h2>
          </motion.div>
        </div>

        {/* Tech Icons - diamond rows */}
        <div
          ref={iconsRef}
          className="relative flex flex-col items-center gap-2 md:gap-3 mt-12 md:mt-16"
        >
          {(() => {
            const pattern = [5, 6, 7, 6, 5];
            const rows: typeof techIcons[] = [];
            let idx = 0;
            for (let p of pattern) {
              if (idx >= techIcons.length) break;
              rows.push(techIcons.slice(idx, idx + p));
              idx += p;
            }
            return rows.map((row, rIdx) => (
              <div key={rIdx} className="icon-row flex justify-center gap-2 md:gap-3">
                {row.map((tech, i) => (
                  <div
                    key={`${rIdx}-${i}`}
                    className="tech-icon w-12 h-12 md:w-14 md:h-14 rounded-[14px] flex items-center justify-center group cursor-default p-2.5 rotate-45"
                    style={{
                      background: "rgba(255, 255, 255, 0.06)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.09)",
                      boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 8px 20px rgba(0, 0, 0, 0.55)",
                      transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px) scale(1.05) rotate(45deg)";
                      e.currentTarget.style.boxShadow = "0 0 25px rgba(99, 102, 241, 0.35), 0 12px 30px rgba(0, 0, 0, 0.6)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "rotate(45deg)";
                      e.currentTarget.style.boxShadow = "inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 8px 20px rgba(0, 0, 0, 0.5)";
                    }}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 ease-out -rotate-45"
                      style={{ filter: "brightness(1.1) contrast(1.05) drop-shadow(0 1px 2px rgba(0,0,0,0.4))" }}
                    />
                  </div>
                ))}
              </div>
            ));
          })()}
        </div>

        {/* Bottom Marquee */}
        <div className="absolute bottom-0 left-0 right-0 py-6 bg-gradient-to-t from-blue-600/20 to-transparent overflow-hidden">
          <div className="flex gap-6 animate-marquee whitespace-nowrap">
            {[...skills, ...skills, ...skills].map((skill, i) => (
              <span
                key={i}
                className="text-sm font-medium tracking-wider text-blue-400/80 uppercase"
              >
                {skill} +
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
