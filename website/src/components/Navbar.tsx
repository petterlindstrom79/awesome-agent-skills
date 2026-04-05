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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-zinc-200 dark:border-zinc-800 h-16">
      <div className="w-full px-6 h-full flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex-1">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">Agent Skills</span>
          </Link>
        </div>

        {/* Center: Search and AI */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-4">
          <div className="relative group w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-hover:text-zinc-600 transition-colors" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-9 pr-12 py-1.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 transition-all text-sm placeholder:text-zinc-400"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-0.5">
              <kbd className="px-1.5 py-0.5 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded text-[10px] font-sans font-bold text-zinc-400">⌘K</kbd>
            </div>
          </div>
          <button className="flex items-center gap-2 px-3 py-1.5 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-zinc-600 dark:text-zinc-400">
            <Sparkles className="w-4 h-4" /> Ask AI
          </button>
        </div>

        {/* Right: GitHub & Theme */}
        <div className="flex-1 flex items-center justify-end gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <a
            href="https://github.com/heilcheng/awesome-agent-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            agentskills/agentskills
            <span className="flex items-center gap-1"><span className="text-[12px]">☆</span> 15,076</span>
          </a>
          <button
            onClick={toggleDark}
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-zinc-200 dark:border-zinc-800 p-4 shadow-xl z-50 flex flex-col gap-4"
          >
            <div className="relative group w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-9 py-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm"
              />
            </div>
            <button className="flex items-center justify-center gap-2 px-3 py-2 w-full border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm font-medium">
              <Sparkles className="w-4 h-4" /> Ask AI
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
