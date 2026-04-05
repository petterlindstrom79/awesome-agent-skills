"use client";

import { MessageCircle } from "lucide-react";
import { Github, Twitter } from "./Icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-24 bg-white dark:bg-black transition-colors border-t border-zinc-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-2 space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              awesome-agent-skills
            </Link>
            <p className="max-w-xs text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
              Curated capabilities for the next leap in agentic engineering. Standardizing the instructions that power the world's most intelligent autonomous assistants.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/heilcheng/awesome-agent-skills" className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-2xl hover:scale-110 transition-transform">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-2xl hover:scale-110 transition-transform">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-2xl hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Navigation</h4>
            <ul className="space-y-4">
              {["What is it", "Skill Directory", "Standards", "Guides", "Trends", "FAQ"].map(item => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="text-sm font-bold text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Resources</h4>
            <ul className="space-y-4">
              {["GitHub Repo", "Contributing", "Style Guide", "Skill Template", "License"].map(item => (
                <li key={item}>
                  <Link href="#" className="text-sm font-bold text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">
            © 2026 Awesome Agent Skills. Open source under MIT.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Built with Next.js & Three.js</span>
            <div className="w-px h-4 bg-zinc-200 dark:bg-zinc-800" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Curated by Engineering Teams</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
