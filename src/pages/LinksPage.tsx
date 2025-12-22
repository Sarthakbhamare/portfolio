import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Send, Mail, Globe, Calendar, MapPin } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const socialLinks = [
  { icon: Github, name: "GitHub", handle: "@Sarthakbhamare", url: "https://github.com/Sarthakbhamare" },
  { icon: Linkedin, name: "LinkedIn", handle: "in/sarthak-bhamare-899148288", url: "https://www.linkedin.com/in/sarthak-bhamare-899148288/" },
  { icon: Twitter, name: "Twitter / X", handle: "@sarthakbhamare", url: "https://twitter.com/sarthakbhamare" },
  { icon: Send, name: "Telegram", handle: "@sarthakbhamare", url: "https://t.me/sarthakbhamare" },
];

export default function LinksPage() {
  return (
    <PageLayout>
      <div className="pt-32 pb-20 px-4 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase font-mono">
            Network
          </span>
          <h1 className="text-4xl md:text-6xl font-instrument-serif mt-4">
            Connect With{" "}
            <span className="italic animate-gradient-x">
              Me
            </span>
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-[350px_1fr] gap-12">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8"
          >
            <div className="text-center mb-6">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 mb-4 flex items-center justify-center text-3xl font-bold text-background">
                SB
              </div>
              <h2 className="text-xl font-instrument-serif">Sarthak Bhamare</h2>
              <div className="flex justify-center gap-2 mt-2">
                <span className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground">Developer</span>
                <span className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground">Freelancer</span>
              </div>
            </div>

            <div className="space-y-3 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>India</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>Sarthakbhamare12@gmail.com</span>
              </div>
            </div>

            <div className="space-y-2">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors">
                <Calendar className="w-4 h-4" />
                Book a Call
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-secondary/50 hover:bg-secondary rounded-lg transition-colors">
                  <Globe className="w-4 h-4" />
                  Website
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-secondary/50 hover:bg-secondary rounded-lg transition-colors">
                  <Mail className="w-4 h-4" />
                  Email
                </button>
              </div>
            </div>
          </motion.div>

          {/* Links */}
          <div className="space-y-8">
            {/* Code & Craft */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-muted-foreground text-xs uppercase tracking-wider font-mono">Code & Craft</span>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-6 flex items-center gap-4 hover:border-border/60 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">GitHub</h3>
                    <p className="text-sm text-muted-foreground">@Sarthakbhamare</p>
                  </div>
                </a>
                <a
                  href="/guestbook"
                  className="glass-card p-6 flex items-center gap-4 hover:border-border/60 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-xl">
                    📝
                  </div>
                  <div>
                    <h3 className="font-medium">Guestbook</h3>
                    <p className="text-sm text-muted-foreground">Leave a mark</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-muted-foreground text-xs uppercase tracking-wider font-mono">Connect</span>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-6 flex items-center gap-4 hover:border-border/60 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      <link.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">{link.name}</h3>
                      <p className="text-sm text-muted-foreground">{link.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
