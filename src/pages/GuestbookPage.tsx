import { motion } from "framer-motion";
import { Pencil } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const messages = [
  { name: "John Doe", message: "Amazing portfolio! Really love the design and attention to detail.", date: "2 days ago" },
  { name: "Jane Smith", message: "Great work! The animations are so smooth.", date: "1 week ago" },
  { name: "Alex Chen", message: "Inspiring stuff. Keep up the great work!", date: "2 weeks ago" },
  { name: "Sarah Wilson", message: "One of the best developer portfolios I've seen!", date: "3 weeks ago" },
  { name: "Mike Johnson", message: "The project section is incredible. Love how you presented each case study.", date: "1 month ago" },
  { name: "Emily Brown", message: "Clean, modern, and professional. Exactly what a dev portfolio should be!", date: "1 month ago" },
];

export default function GuestbookPage() {
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
            The Community Wall
          </span>
          <h1 className="text-4xl md:text-6xl font-instrument-serif mt-4">
            Leave{" "}
            <span className="italic animate-gradient-x">
              Your Mark
            </span>
          </h1>
        </motion.div>

        {/* Sign in Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-8 text-center mb-12 max-w-md mx-auto"
        >
          <h3 className="text-xl font-instrument-serif italic mb-2">"Join the wall..."</h3>
          <p className="text-muted-foreground text-sm mb-6">
            Sign in to pin your message to this board forever.
          </p>
          <button className="flex items-center gap-2 mx-auto px-6 py-3 bg-secondary/80 hover:bg-secondary rounded-full transition-colors">
            <Pencil className="w-4 h-4" />
            Write a message...
          </button>
        </motion.div>

        {/* Messages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + idx * 0.05 }}
              className="glass-card p-6 hover:border-border/60 transition-colors"
            >
              <p className="text-muted-foreground text-sm mb-4">{msg.message}</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-500" />
                <div>
                  <p className="text-sm font-medium">{msg.name}</p>
                  <p className="text-xs text-muted-foreground">{msg.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
