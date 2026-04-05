"use client";

import Link from "next/link";
import { useState } from "react";

const sidebarGroups = [
  {
    title: "Introduction",
    items: [
      { label: "What Are Agent Skills?", href: "#what-are-skills" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Finding Skills", href: "#finding-skills" },
      { label: "Compatible Agents", href: "#compatible-agents" },
    ]
  },
  {
    title: "Directory",
    items: [
      { label: "AI Platforms", href: "#directory" },
      { label: "Cloud & Infrastructure", href: "#directory" },
      { label: "Developer Tools", href: "#directory" },
      { label: "Business & Marketing", href: "#directory" },
      { label: "Security", href: "#directory" },
    ]
  },
  {
    title: "Standards & Guides",
    items: [
      { label: "Quality Standards", href: "#quality-standards" },
      { label: "Using Skills", href: "#using-skills" },
      { label: "Creating Skills", href: "#creating-skills" },
    ]
  },
  {
    title: "Resources",
    items: [
      { label: "Official Tutorials", href: "#tutorials" },
      { label: "Trends (2026)", href: "#trends" },
      { label: "FAQ", href: "#faq" },
      { label: "Contributing", href: "#contributing" },
    ]
  }
];

export default function WikiSidebar() {
  const [activeItem, setActiveItem] = useState("What Are Agent Skills?");

  return (
    <aside className="hidden lg:block w-64 h-[calc(100vh-3.5rem)] fixed left-0 top-14 overflow-y-auto sidebar-scroll border-r border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 py-6 px-4">
      <div className="space-y-7">
        {sidebarGroups.map((group) => (
          <div key={group.title}>
            <h4 className="text-[10px] font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-2 px-3">
              {group.title}
            </h4>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const isActive = activeItem === item.label;
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setActiveItem(item.label)}
                      className={`block px-3 py-1.5 rounded-md text-sm transition-colors ${
                        isActive
                          ? "text-neutral-900 dark:text-white font-medium bg-neutral-200 dark:bg-neutral-800"
                          : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 px-3 border-t border-neutral-200 dark:border-neutral-800 pt-6">
        <a
          href="https://github.com/heilcheng/awesome-agent-skills"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
        >
          heilcheng/awesome-agent-skills →
        </a>
      </div>
    </aside>
  );
}
