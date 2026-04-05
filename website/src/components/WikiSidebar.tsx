"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sidebarGroups = [
  {
    title: "Overview",
    items: [
      { label: "What are skills?", href: "#what-are-skills" },
      { label: "Why Agent Skills?", href: "#why-skills" },
    ]
  },
  {
    title: "Directories",
    items: [
      { label: "Skill Directory", href: "#directory" },
      { label: "Official Tutorials", href: "#tutorials" },
    ]
  },
  {
    title: "For Builders",
    items: [
      { label: "Quality Standards", href: "#quality-standards" },
      { label: "Using Skills", href: "#using-skills" },
      { label: "Creating Skills", href: "#creating-skills" },
    ]
  },
  {
    title: "Resources",
    items: [
      { label: "2026 Trends", href: "#trends" },
      { label: "FAQ", href: "#faq" },
      { label: "Contributing", href: "#contributing" },
    ]
  }
];

export default function WikiSidebar() {
  const [activeItem, setActiveItem] = useState("What are skills?");

  useEffect(() => {
    // Simple intersection observer or scroll spy could go here
    // For now we rely on clicks mapping nicely
  }, []);

  return (
    <aside className="hidden lg:block w-72 h-[calc(100vh-4rem)] fixed left-0 top-16 overflow-y-auto pt-8 pb-12 px-6 sidebar-scroll border-r border-white/10 glass">
      <div className="space-y-10">
        {sidebarGroups.map((group) => (
          <div key={group.title}>
            <h4 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3 px-3">
              {group.title}
            </h4>
            <ul className="space-y-1 relative">
              {group.items.map((item) => {
                const isActive = activeItem === item.label;
                return (
                  <li key={item.label} className="relative">
                    <Link
                      href={item.href}
                      onClick={() => setActiveItem(item.label)}
                      className={`relative block px-4 py-2 rounded-xl text-sm transition-all duration-300 z-10 ${
                        isActive
                          ? "text-white font-bold"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {isActive && (
                      <motion.div
                        layoutId="activeSidebar"
                        className="absolute inset-0 bg-white/10 dark:bg-white/10 border border-white/20 rounded-xl -z-10 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
