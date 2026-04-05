"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X, Search, Sparkles } from "lucide-react";
import { Github } from "./Icons";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (document.documentElement.classList.contains("dark")) {
      setDark(true);
    }
  }, []);

  const toggleDark = () => {
    const isDark = !dark;
    setDark(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 h-16 transition-all duration-300">
      <div className="w-full mx-auto px-6 h-full flex items-center justify-between">
        
        <div className="flex-1 flex items-center gap-4">
          <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-70 transition-opacity glow-text hidden sm:block">
            Agent Skills
          </Link>
          <div className="hidden md:flex items-center gap-3">
             <div className="relative group w-64 lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-9 pr-12 py-1.5 bg-black/20 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-full focus:outline-none focus:ring-1 focus:ring-white/30 transition-all text-sm placeholder:text-zinc-500"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-0.5">
                <kbd className="px-1.5 py-0.5 bg-black/40 border border-white/10 rounded text-[10px] font-sans font-bold text-zinc-400">⌘K</kbd>
              </div>
            </div>
            <button className="flex items-center gap-2 px-3 py-1.5 border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 transition-colors text-zinc-300 hover:text-white shadow-sm glow-text">
              <Sparkles className="w-4 h-4 text-purple-400" /> Ask AI
            </button>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-end gap-2 sm:gap-4">
          <a
            href="https://github.com/heilcheng/awesome-agent-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors mr-4"
          >
            <Github className="w-4 h-4" />
            agentskills/agentskills
            <span className="flex items-center gap-1"><span className="text-[12px] text-yellow-500">★</span> 15,076</span>
          </a>
          <button
            onClick={toggleDark}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-zinc-400 hover:text-white"
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-white/10 rounded-full transition-colors text-zinc-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-16 left-0 right-0 glass border-t border-white/5 p-6 flex flex-col gap-6 shadow-2xl rounded-b-3xl"
          >
            {["What are skills?", "Directory", "Standards", "Using Skills", "Creating Skills", "Trends", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-").replace(/\?/, "")}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold tracking-tight text-white/80 hover:text-white"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
