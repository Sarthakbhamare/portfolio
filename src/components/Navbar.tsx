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
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <nav className="glass rounded-full px-2 py-2 flex items-center gap-1">
        {/* Logo */}
        <Link
          to="/"
          className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm mr-2"
        >
          AB
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                isActive(item.href)
                  ? "text-foreground bg-secondary/50"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
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
              className="px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-300 flex items-center gap-1"
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

          <div className="w-px h-6 bg-border mx-2" />
          <Link
            to="/contact"
            className="px-4 py-2 rounded-full text-sm bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
          >
            Book a Call
          </Link>
        </div>

        {/* Command button */}
        <button className="hidden md:flex w-10 h-10 rounded-full bg-secondary/50 items-center justify-center ml-2 hover:bg-secondary transition-colors">
          <Command className="w-4 h-4" />
        </button>

        {/* Mobile menu button */}
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
  );
};
