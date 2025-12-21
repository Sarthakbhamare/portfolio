import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const milestones = [
  { title: "Remote working with client from abroad", date: "Sep 2024", description: "Secured my first international contract via cold outreach on LinkedIn. Delivered a full-stack SaaS MVP.", completed: true },
  { title: "Get a Remote Job", date: "Jan 2025", description: "Transitioned to a full-time remote role at a forward-thinking tech company, enabling a location-independent lifestyle.", completed: true },
  { title: "Get 250+ followers on Github", date: "Dec 2025", description: "Reached this milestone by consistently contributing to open source and sharing useful repositories.", completed: true },
  { title: "Get 5,000+ organic LinkedIn followers", date: "Apr 2025", description: "Built a community around React, Next.js, and system design by sharing daily technical insights.", completed: true },
  { title: "First OpenSource contribution", date: "Dec 2024", description: "Merged a PR into a popular UI library, fixing a critical accessibility bug.", completed: true },
  { title: "Create portfolio website", date: "Aug 2024", description: "Launched v2.0 of this digital garden. Focused on performance, micro-interactions, and a clean bento-grid aesthetic.", completed: true },
];

const bucketList = [
  { title: "Skydiving", description: "To experience freefall and conquer the fear of heights from 13,000 feet.", completed: false },
  { title: "Do 10K marathon", description: "Training to build endurance and mental toughness. Target time: Sub 60 mins.", completed: false },
  { title: "Visit Japan", description: "Experience the culture, food, and tech scene in Tokyo and Kyoto.", completed: false },
  { title: "Launch a SaaS product", description: "Build and ship a profitable software-as-a-service product.", completed: false },
  { title: "Speak at a tech conference", description: "Share knowledge and connect with the global developer community.", completed: false },
  { title: "Write a technical book", description: "Document my learnings in a comprehensive guide for other developers.", completed: false },
];

export default function BucketListPage() {
  return (
    <PageLayout>
      <div className="pt-32 pb-20 px-4 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
            Lifetime
          </span>
          <h1 className="text-4xl md:text-6xl font-serif mt-4">
            The Bucket{" "}
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Roadmap
            </span>
          </h1>
        </motion.div>

        {/* Milestones */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-muted-foreground text-sm">01</span>
            <h2 className="text-2xl font-serif">Milestones</h2>
          </div>

          <div className="space-y-4">
            {milestones.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + idx * 0.05 }}
                className="glass-card p-6 flex gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-medium">{item.title}</h3>
                    <span className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground shrink-0">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Bucket List */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-muted-foreground text-sm">02</span>
            <h2 className="text-2xl font-serif">The List</h2>
          </div>
          <p className="text-muted-foreground mb-8">
            Goals, dreams, and technical ambitions I'm actively working towards.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {bucketList.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + idx * 0.05 }}
                className="glass-card p-6 flex gap-4"
              >
                <Circle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </PageLayout>
  );
}
