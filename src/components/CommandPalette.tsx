import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Home, Users, FolderOpen, BookOpen, MessageSquare, List, Phone, Settings, Share2, Link as LinkIcon, Github } from "lucide-react";
import { Link } from "react-router-dom";

interface CommandItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  category: "pages" | "connect";
}

const commandItems: CommandItem[] = [
  // Pages
  { icon: <Home className="w-4 h-4" />, label: "Home", href: "/", category: "pages" },
  { icon: <Users className="w-4 h-4" />, label: "About", href: "/about", category: "pages" },
  { icon: <FolderOpen className="w-4 h-4" />, label: "Projects", href: "/projects", category: "pages" },
  { icon: <BookOpen className="w-4 h-4" />, label: "Blog", href: "/blog", category: "pages" },
  { icon: <MessageSquare className="w-4 h-4" />, label: "Guestbook", href: "/guestbook", category: "pages" },
  { icon: <List className="w-4 h-4" />, label: "Bucket List", href: "/bucket-list", category: "pages" },
  { icon: <Phone className="w-4 h-4" />, label: "Book a call", href: "/contact", category: "pages" },
  { icon: <Settings className="w-4 h-4" />, label: "Uses", href: "/uses", category: "pages" },
  { icon: <Share2 className="w-4 h-4" />, label: "Attribution", href: "#", category: "pages" },
  { icon: <LinkIcon className="w-4 h-4" />, label: "Links", href: "/links", category: "pages" },
  // Connect
  { icon: <Github className="w-4 h-4" />, label: "GitHub", href: "https://github.com", category: "connect" },
];

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette = ({ isOpen, onClose }: CommandPaletteProps) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
      }
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Prevent body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, isOpen]);

  const filteredItems = commandItems.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  const pages = filteredItems.filter((item) => item.category === "pages");
  const connect = filteredItems.filter((item) => item.category === "connect");

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100]"
          />

          {/* Command Palette */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full max-w-md pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-2xl glass backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden bg-[#1a1a1a]/95">
                {/* Search Input */}
                <div className="border-b border-white/10 px-4 py-3 flex items-center gap-3">
                  <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-transparent text-sm text-foreground placeholder-muted-foreground outline-none"
                  />
                  <span className="text-xs text-muted-foreground px-2 py-1 rounded bg-white/5">ESC</span>
                </div>

                {/* Results */}
                <div className="max-h-[400px] overflow-y-auto overscroll-contain"
                  onWheel={(e) => e.stopPropagation()}
                >
                {/* Pages Section */}
                {pages.length > 0 && (
                  <div>
                    <div className="px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                      Pages
                    </div>
                    {pages.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={onClose}
                        className="px-4 py-2.5 flex items-center gap-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-b-0"
                      >
                        <div className="w-4 h-4 text-muted-foreground flex-shrink-0">{item.icon}</div>
                        <span className="text-sm text-muted-foreground group-hover:text-foreground">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Connect Section */}
                {connect.length > 0 && (
                  <div>
                    <div className="px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                      Connect
                    </div>
                    {connect.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onClose}
                        className="px-4 py-2.5 flex items-center gap-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-b-0"
                      >
                        <div className="w-4 h-4 text-muted-foreground flex-shrink-0">{item.icon}</div>
                        <span className="text-sm text-muted-foreground">{item.label}</span>
                      </a>
                    ))}
                  </div>
                )}

                {/* No Results */}
                {filteredItems.length === 0 && (
                  <div className="px-4 py-8 text-center text-muted-foreground text-sm">
                    No results found
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
        </>
      )}
    </AnimatePresence>
  );
};
