import { motion } from "framer-motion";
import { Music } from "lucide-react";

export const LastPlayed = () => {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4 block font-mono">
          Last Played
        </span>
        <h2 className="text-2xl md:text-3xl font-instrument-serif">
          Currently <span className="italic animate-gradient-x">vibing to</span>
        </h2>
      </motion.div>

      {/* Track Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="glass-card p-8 md:p-12 group"
      >
        <div className="flex items-start gap-6">
          <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
            <Music className="w-10 h-10 text-muted-foreground" />
          </div>

          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 group-hover:text-foreground transition-colors">
              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Timeless (feat Playboi Carti)
              </a>
            </h3>

            <div className="space-y-2 text-muted-foreground">
              <p>
                by{" "}
                <a
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground hover:underline transition-colors"
                >
                  The Weeknd, Playboi Carti
                </a>
              </p>
              <p>
                from{" "}
                <a
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground hover:underline transition-colors"
                >
                  Hurry Up Tomorrow
                </a>
              </p>
            </div>
          </div>

          <a
            href="https://open.spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-medium hover:bg-green-500/30 transition-colors"
          >
            Listen on Spotify
          </a>
        </div>
      </motion.div>
    </section>
  );
};
