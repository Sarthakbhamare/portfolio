import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Search } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const topics = [
  "nextjs", "react", "css", "tailwindcss", "javascript", "typescript",
  "design", "tips", "tools", "vite", "git", "productivity", "animation"
];

const posts = [
  {
    date: "Mar 18 2025",
    title: "My 2025 Stack as a Frontend Developer",
    excerpt: "As a Frontend Developer in 2025, I've fine-tuned my development environment with a set of powerful tools that enhance productivity, efficiency, and customization.",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
    tags: ["tools", "productivity"],
  },
  {
    date: "Jun 27 2025",
    title: "How to Build a Blog with Next.js and MDX",
    excerpt: "Build a blazing fast markdown blog using Next.js and MDX with this complete walkthrough.",
    readTime: "14 min read",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=250&fit=crop",
    tags: ["nextjs", "react"],
  },
  {
    date: "Dec 15 2024",
    title: "Learning Programming – Easy to Start, Hard to Master",
    excerpt: "Programming is more accessible than ever, yet mastering it takes time, persistence, and clarity. Let's bust some myths.",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
    tags: ["tips", "productivity"],
  },
];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const toggleTopic = (topic: string) => {
    setSelectedTopics(prev =>
      prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]
    );
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesTopics = selectedTopics.length === 0 ||
                          post.tags.some(tag => selectedTopics.includes(tag));
    return matchesSearch && matchesTopics;
  });

  return (
    <PageLayout>
      <div className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase font-mono">
            The Pensieve
          </span>
          <h1 className="text-4xl md:text-6xl font-instrument-serif mt-4">
            Handpicked{" "}
            <span className="italic animate-gradient-x">
              Insights
            </span>
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-[300px_1fr] gap-12">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <span className="text-muted-foreground text-xs uppercase tracking-wider font-mono">Explore</span>
              <h2 className="text-2xl font-instrument-serif mt-2">Library</h2>
              <p className="text-sm text-muted-foreground mt-1">Showing {filteredPosts.length} posts</p>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-secondary/50 border border-border rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            {/* Topics */}
            <div>
              <span className="text-muted-foreground text-xs uppercase tracking-wider font-mono">Topics</span>
              <div className="flex flex-wrap gap-2 mt-3">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => toggleTopic(topic)}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
                      selectedTopics.includes(topic)
                        ? "bg-foreground text-background"
                        : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Posts */}
          <div className="space-y-8">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="grid md:grid-cols-[1fr_200px] gap-6">
                  <div className="space-y-3">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <h3 className="text-xl font-instrument-serif group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 pt-2">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                      <button className="flex items-center gap-1 text-sm text-foreground group-hover:gap-2 transition-all">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-32 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
