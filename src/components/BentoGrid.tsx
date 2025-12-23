import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { Mail, ArrowUpRight, MapPin, Terminal, Copy } from "lucide-react";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFramer,
  SiTypescript,
  SiNodedotjs,
  SiLinux,
  SiSupabase,
  SiReact,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiPython,
  SiFirebase,
  SiGraphql,
  SiRedis,
  SiAmazon,
  SiVercel,
} from "react-icons/si";

// Globe component using cobe
const Globe = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let phi = 0;
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.1],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0.2, 0.2, 0.4],
      opacity: 1,
      markers: [{ location: [28.6139, 77.209], size: 0.1 }],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
      },
    });

    return () => globe.destroy();
  }, []);

  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center pt-10">
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      />
    </div>
  );
};

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden relative flex flex-col ${className}`}>
    {children}
  </div>
);

const TechPill = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-3 px-4 py-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm">
    <span className="text-xl opacity-80">{icon}</span>
    <span className="text-sm font-medium text-gray-300">{text}</span>
  </div>
);

export const BentoGrid = () => {
  return (
    <div className="min-h-screen bg-background text-gray-100 p-4 md:p-8 font-sans antialiased selection:bg-purple-500/30 font-light">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
        .font-serif-custom { font-family: 'Instrument Serif', serif; }
        .mask-right { -webkit-mask-image: linear-gradient(to right, black 60%, transparent 100%); mask-image: linear-gradient(to right, black 60%, transparent 100%); }
        .mask-bottom { -webkit-mask-image: linear-gradient(to bottom, black 75%, transparent 100%); mask-image: linear-gradient(to bottom, black 75%, transparent 100%); }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 18s linear infinite; }
      `}</style>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 px-4">
        {/* Row 1 - Profile */}
        <Card className="md:col-span-2 h-[360px] justify-center items-center text-center group">          {/* Strong purple glow behind profile */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
            <div className="w-[400px] h-[400px] bg-purple-600/30 rounded-full blur-[120px]"></div>
          </div>          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent opacity-40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-105 transition-transform duration-700">
            <div className="w-[280px] h-[280px] border border-white/10 rounded-full absolute -translate-x-1/2 -translate-y-1/2" />
            <div className="w-[380px] h-[380px] border border-white/10 rounded-full absolute -translate-x-1/2 -translate-y-1/2 opacity-60" />
            <div className="w-[480px] h-[480px] border border-white/5 rounded-full absolute -translate-x-1/2 -translate-y-1/2 opacity-30" />
          </div>
          <div className="relative z-10 flex flex-col items-center mt-4">
            <div className="w-20 h-20 rounded-full border-2 border-purple-500/50 p-1 mb-4 relative">
              <img
                src="/assets/profile pic.jpg"
                alt="Profile"
                className="w-full h-full rounded-full bg-gray-800 object-cover"
              />
              <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-[3px] border-[#0a0a0a] rounded-full" />
            </div>
            <h2 className="text-sm tracking-widest text-gray-400 mb-2 uppercase">Collaboration</h2>
            <p className="text-3xl md:text-4xl max-w-lg font-serif-custom leading-tight">
              I prioritize client collaboration, <br /> fostering open communication.
            </p>
          </div>
        </Card>

        {/* Row 1 - Tech Stack + Recent Work Merged */}
        <Card className="md:col-span-1 md:row-span-2 h-[680px] bg-gradient-to-b from-purple-900/10 via-[#0f0f0f] to-purple-900/10 p-0 group relative overflow-hidden">
          <div className="h-full w-full bg-gradient-to-br from-gray-900 to-black p-5 flex flex-col gap-4 justify-between bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl text-center font-serif-custom italic text-gray-200">
                Passionate about cutting-edge <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 not-italic font-sans font-semibold text-3xl">
                  technologies
                </span>
              </h3>

              <div className="flex flex-col gap-8">
                {/* Scrolling Tech Strip 1 - Left to Right */}
                <div className="relative overflow-hidden mask-right">
                  <div className="flex gap-3 animate-marquee" style={{ width: "200%" }}>
                    {[...Array(2)].map((_, setIndex) => (
                      <React.Fragment key={setIndex}>
                        <TechPill icon={<SiReact className="text-blue-400" />} text="React" />
                        <TechPill icon={<SiNextdotjs className="text-white" />} text="Next.js" />
                        <TechPill icon={<SiTypescript className="text-blue-500" />} text="TypeScript" />
                        <TechPill icon={<SiTailwindcss className="text-cyan-400" />} text="Tailwind" />
                        <TechPill icon={<SiFramer className="text-black bg-white rounded-sm p-0.5" />} text="Motion" />
                        <TechPill icon={<SiSupabase className="text-green-400" />} text="Supabase" />
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Scrolling Tech Strip 2 - RIGHT TO LEFT (OPPOSITE) */}
                <div className="relative overflow-hidden mask-right">
                  <div className="flex gap-3 animate-marquee" style={{ width: "200%", animationDelay: "-6s", animationDirection: "reverse" }}>
                    {[...Array(2)].map((_, setIndex) => (
                      <React.Fragment key={setIndex}>
                        <TechPill icon={<SiNodedotjs className="text-green-600" />} text="Node.js" />
                        <TechPill icon={<SiPostgresql className="text-blue-300" />} text="Postgres" />
                        <TechPill icon={<SiMongodb className="text-green-500" />} text="MongoDB" />
                        <TechPill icon={<SiGit className="text-orange-500" />} text="Git" />
                        <TechPill icon={<SiLinux className="text-yellow-500" />} text="Linux" />
                        <TechPill icon={<SiDocker className="text-blue-400" />} text="Docker" />
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Scrolling Tech Strip 3 - Left to Right */}
                <div className="relative overflow-hidden mask-right">
                  <div className="flex gap-3 animate-marquee" style={{ width: "200%", animationDelay: "-12s" }}>
                    {[...Array(2)].map((_, setIndex) => (
                      <React.Fragment key={setIndex}>
                        <TechPill icon={<SiPython className="text-yellow-400" />} text="Python" />
                        <TechPill icon={<SiFirebase className="text-orange-400" />} text="Firebase" />
                        <TechPill icon={<SiGraphql className="text-pink-500" />} text="GraphQL" />
                        <TechPill icon={<SiRedis className="text-red-500" />} text="Redis" />
                        <TechPill icon={<SiAmazon className="text-orange-300" />} text="AWS" />
                        <TechPill icon={<SiVercel className="text-white" />} text="Vercel" />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Work Section */}
            <div className="w-full h-[200px] bg-black rounded-lg border border-white/10 shadow-2xl overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
              <div className="h-6 bg-white/5 flex items-center px-2 gap-1.5 border-b border-white/5">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
              <div className="flex items-center justify-center h-full text-center p-4">
                <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                  Websites that <br /> <span className="text-white">Impact.</span>
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mt-1.5">
              <span className="text-sm font-medium text-gray-400">Recent Work</span>
              <ArrowUpRight size={18} className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        </Card>

        {/* Row 2 - Timezone (extends down 2 rows) */}
        <Card className="md:col-span-1 md:row-span-2 h-[560px] relative overflow-hidden group bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/60 via-blue-950/40 to-[#0a0a0a]">
          <div className="relative z-10 p-6">
            <h3 className="text-2xl font-serif-custom leading-tight">
              I'm very flexible with <br />
              <span className="text-blue-400 font-sans font-medium text-lg">time zone communications</span>
            </h3>
            <div className="flex items-center gap-3 mt-4">
              <span className="text-xs font-bold text-gray-500">GB UK</span>
              <span className="text-xs font-bold text-white bg-blue-600 px-2 py-0.5 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]">IN India</span>
              <span className="text-xs font-bold text-gray-500">US USA</span>
            </div>
          </div>
          <div className="absolute top-20 left-0 w-full h-full pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
            <Globe />
          </div>
          <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 text-gray-400 text-sm">
            <MapPin size={14} className="text-blue-500" />
            <span>Remote, India</span>
          </div>
        </Card>

        {/* Row 2 - Contact */}
        <Card className="md:col-span-1 h-[300px] flex items-center justify-center text-center p-6 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500/40 via-[#0a0a0a] to-[#0a0a0a]">
          <div className="space-y-4 z-10">
            <h3 className="text-3xl font-serif-custom italic">
              Let's work together <br />
              <span className="not-italic font-sans text-xl font-normal">on your next project</span>
            </h3>
            <div className="flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer bg-white/5 px-4 py-2 rounded-lg border border-white/5 hover:border-white/10">
              <Mail size={16} />
              <span className="text-sm">hello@sarthak.dev</span>
              <Copy size={12} className="opacity-50" />
            </div>
          </div>
        </Card>

        {/* Row 3 - Bottom Status & Marquee (fits 2 cols in this layout) */}
        <Card className="md:col-span-2 h-[220px] bg-[#0c0c0c] p-0 overflow-hidden relative">
          <div className="flex h-full">
            <div className="flex-1 overflow-hidden relative mask-right">
              <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0c0c0c] to-transparent z-10" />

              <div className="flex gap-4 p-6 items-end h-full animate-marquee" style={{ width: "200%" }}>
                {[
                  { title: "Payment System Architecture", desc: "Handles recurring payments, upgrades, downgrades, and cancellations seamlessly." },
                  { title: "Monitoring & Analytics", desc: "Provides real-time insights into user behavior, system performance, and metrics." },
                  { title: "Design System & UI", desc: "Unified design assets, including logos and themes, ensuring consistent branding." },
                  { title: "API Gateway & Documentation", desc: "Guides developers to integrate with the platform efficiently with examples." },
                  { title: "User Onboarding Flow", desc: "Step-by-step guides and interactive tutorials to help users get started." },
                  { title: "Payment System Architecture", desc: "Handles recurring payments, upgrades, downgrades, and cancellations seamlessly." },
                  { title: "Monitoring & Analytics", desc: "Provides real-time insights into user behavior, system performance, and metrics." },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="min-w-[180px] h-32 bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col justify-end hover:bg-white/10 transition-colors cursor-default group relative"
                  >
                    <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors" />
                    <h4 className="text-xs font-bold text-gray-300 mb-1 leading-tight">{item.title}</h4>
                    <p className="text-[10px] text-gray-500 leading-tight">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-6 right-6 z-20">
              <div className="flex items-center gap-3 bg-[#111] pl-2 pr-5 py-2 rounded-full border border-white/10 shadow-2xl">
                <div className="p-2 bg-purple-500/10 rounded-full text-purple-400">
                  <Terminal size={16} />
                </div>
                <div>
                  <p className="text-[9px] text-gray-500 uppercase tracking-wider font-bold">The Inside Scoop</p>
                  <p className="text-xs font-medium text-gray-200">Currently building a SaaS</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BentoGrid;
