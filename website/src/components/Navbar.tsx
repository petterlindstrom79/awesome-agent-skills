"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Github } from "./Icons";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "What is it", href: "#what-is-it" },
  { name: "Skill Directory", href: "#skills" },
  { name: "Standards", href: "#standards" },
  { name: "Guides", href: "#guides" },
  { name: "Trends", href: "#trends" },
  { name: "FAQ", href: "#faq" },
  { name: "Contributing", href: "#contributing" },
];

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
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-semibold tracking-tight hover:opacity-70 transition-opacity">
            awesome-agent-skills
          </Link>
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/heilcheng/awesome-agent-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <button
            onClick={toggleDark}
            className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
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
            className="lg:hidden absolute top-16 left-0 right-0 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800 p-6 flex flex-col gap-4 shadow-xl"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-zinc-600 dark:text-zinc-400"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
