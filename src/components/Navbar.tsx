import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Command, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/projects" },
  { name: "Blog", href: "/blog" },
];

const moreItems = [
  { name: "Guestbook", href: "/guestbook" },
  { name: "Bucket List", href: "/bucket-list" },
  { name: "Links", href: "/links" },
  { name: "Uses", href: "/uses" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
    {/* SB Logo - Fixed on LEFT */}
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-6 z-50"
    >
      <Link
        to="/"
        className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm"
      >
        SB
      </Link>
    </motion.div>

    {/* Centered Navigation (with nav items + Book a Call grouped) */}
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-max"
    >
      <nav className="glass rounded-full px-4 py-2 flex items-center justify-center gap-1" style={{ background: "rgba(80,80,80,0.4)", backdropFilter: "blur(10px)" }}>
        {/* Desktop Nav - All items in one pill */}
        <div className="hidden md:flex items-center gap-0">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                isActive(item.href)
                  ? "text-foreground bg-secondary/50"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* More dropdown */}
          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              onBlur={() => setTimeout(() => setMoreOpen(false), 150)}
              className="px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/30 transition-all duration-300 flex items-center gap-1"
            >
              More
              <ChevronDown className={`w-4 h-4 transition-transform ${moreOpen ? "rotate-180" : ""}`} />
            </button>
            
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-2 glass rounded-2xl p-2 min-w-[160px] z-50"
                >
                  {moreItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-4 py-2 rounded-lg text-sm transition-all ${
                        isActive(item.href)
                          ? "text-foreground bg-secondary/50"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      }`}
                      onClick={() => setMoreOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Book a Call - same level as others */}
          <Link
            to="/contact"
            className="px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/30 transition-all duration-300 whitespace-nowrap"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile menu button - outside nav */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 right-0 mt-2 glass rounded-2xl p-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-3 rounded-lg transition-all ${
                  isActive(item.href)
                    ? "text-foreground bg-secondary/50"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="border-t border-border my-2 pt-2">
              <span className="px-4 py-2 text-xs text-muted-foreground uppercase tracking-wider">More</span>
              {moreItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 rounded-lg transition-all ${
                    isActive(item.href)
                      ? "text-foreground bg-secondary/50"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link
              to="/contact"
              className="block px-4 py-3 mt-2 rounded-lg text-center bg-foreground text-background"
              onClick={() => setIsOpen(false)}
            >
              Book a Call
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>

    {/* Corner Command button - FAR RIGHT */}
    <motion.button
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      aria-label="Command Menu"
      className="hidden md:flex fixed top-6 right-6 z-50 w-10 h-10 rounded-full glass items-center justify-center hover:bg-secondary transition-colors"
      title="Command"
    >
      <Command className="w-4 h-4" />
    </motion.button>
    </>
  );
};
