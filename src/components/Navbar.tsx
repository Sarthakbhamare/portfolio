import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Command } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Blog", href: "#blog" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <nav className="glass rounded-full px-2 py-2 flex items-center gap-1">
        {/* Logo */}
        <a
          href="#home"
          className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm mr-2"
        >
          AB
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
          <div className="w-px h-6 bg-border mx-2" />
          <a
            href="#contact"
            className="px-4 py-2 rounded-full text-sm bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
          >
            Book a Call
          </a>
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
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 mt-2 glass rounded-2xl p-4"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="block px-4 py-3 mt-2 rounded-lg text-center bg-foreground text-background"
            onClick={() => setIsOpen(false)}
          >
            Book a Call
          </a>
        </motion.div>
      )}
    </motion.header>
  );
};
