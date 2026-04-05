"use client";

import Link from "next/link";
import { useState } from "react";

const sidebarGroups = [
  {
    title: "Overview",
    items: [
      { label: "What are skills?", href: "#what-are-skills" },
      { label: "Specification", href: "#specification" },
      { label: "Client Showcase", href: "#client-showcase" },
    ]
  },
  {
    title: "For skill creators",
    items: [
      { label: "Quickstart", href: "#quickstart" },
      { label: "Best practices", href: "#best-practices" },
      { label: "Optimizing descriptions", href: "#optimizing-descriptions" },
      { label: "Evaluating skills", href: "#evaluating-skills" },
      { label: "Using scripts", href: "#using-scripts" },
    ]
  },
  {
    title: "For client implementors",
    items: [
      { label: "Adding skills support", href: "#adding-skills-support" },
    ]
  }
];

export default function WikiSidebar() {
  const [activeItem, setActiveItem] = useState("What are skills?");

  return (
    <aside className="hidden md:block w-72 h-[calc(100vh-4rem)] fixed left-0 top-16 overflow-y-auto pt-8 pb-12 px-6 sidebar-scroll border-r border-zinc-100 dark:border-zinc-800">
      <div className="space-y-10">
        {sidebarGroups.map((group) => (
          <div key={group.title}>
            <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-3 px-3">
              {group.title}
            </h4>
            <ul className="space-y-1">
              {group.items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setActiveItem(item.label)}
                    className={`block px-3 py-1.5 rounded-lg text-sm transition-colors ${
                      activeItem === item.label
                        ? "bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-medium"
                        : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
