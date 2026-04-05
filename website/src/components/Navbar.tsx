"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X, Search } from "lucide-react";
import { Github } from "./Icons";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const mobileNavItems = [
  "What Is It?", "Directory", "Quality Standards",
  "Using Skills", "Creating Skills", "Tutorials", "Trends", "FAQ"
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleDark = () => {
    const isDark = !dark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  };

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 h-14">
      <div className="w-full h-full flex items-center justify-between px-6">

        {/* Left: logo */}
        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight hover:opacity-70 transition-opacity">
            awesome-agent-skills
          </Link>
        </div>

        {/* Center: search */}
        <div className="hidden md:flex flex-1 max-w-sm mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search docs..."
              className="w-full pl-9 pr-10 py-1.5 text-sm bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-600 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400"
            />
            <kbd className="absolute right-2 top-1/2 -translate-y-1/2 px-1.5 py-0.5 text-[10px] font-mono font-semibold text-neutral-400 bg-neutral-200 dark:bg-neutral-700 rounded">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* Right: actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/heilcheng/awesome-agent-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>heilcheng/awesome-agent-skills</span>
          </a>
          <div className="hidden lg:block w-px h-4 bg-neutral-200 dark:bg-neutral-700" />
          <button
            onClick={toggleDark}
            className="p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-500 dark:text-neutral-400"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-500"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden absolute top-14 left-0 right-0 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 py-4 px-6 flex flex-col gap-1 shadow-md"
          >
            {mobileNavItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/[\s?]/g, "-").replace(/-+/g, "-")}`}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
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
