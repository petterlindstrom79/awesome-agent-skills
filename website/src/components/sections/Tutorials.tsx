"use client";

import { BookOpen, Video, FileText, ArrowUpRight, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const resources = [
  {
    title: "Official Skills Guide",
    type: "Documentation",
    difficulty: "Beginner",
    summary: "Anthropic's official step-by-step guide to authoring skills for Claude Code. The definitive starting point.",
    icon: <BookOpen className="w-5 h-5 text-blue-400" />,
    link: "https://support.claude.com/en/articles/12512180-using-skills-in-claude",
    color: "border-blue-500/20"
  },
  {
    title: "Building MCP Servers",
    type: "Technical Guide",
    difficulty: "Advanced",
    summary: "Learn how to connect skills to external APIs using the open Model Context Protocol (MCP) standard.",
    icon: <FileText className="w-5 h-5 text-purple-400" />,
    link: "https://modelcontextprotocol.io/docs/first-server",
    color: "border-purple-500/20"
  },
  {
    title: "Agentic IDE Mastery",
    type: "Video Series",
    difficulty: "Intermediate",
    summary: "Visual walkthroughs for Cursor, Windsurf, and Claude Code — from setup to end-to-end workflows.",
    icon: <Video className="w-5 h-5 text-pink-400" />,
    link: "#",
    color: "border-pink-500/20"
  },
  {
    title: "Skill Architecture Patterns",
    type: "Deep Dive",
    difficulty: "Intermediate",
    summary: "Advanced patterns for state-aware agents, hierarchical skill trees, and multi-agent orchestration.",
    icon: <GraduationCap className="w-5 h-5 text-orange-400" />,
    link: "#",
    color: "border-orange-500/20"
  }
];

const difficultyColors: Record<string, string> = {
  Beginner: "text-green-400 bg-green-900/50 border-green-700/50",
  Intermediate: "text-yellow-400 bg-yellow-900/50 border-yellow-700/50",
  Advanced: "text-red-400 bg-red-900/50 border-red-700/50",
};

export default function Tutorials() {
  return (
    <section id="tutorials" className="scroll-mt-32">
      <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-12">
        <div className="max-w-xl">
          <div className="inline-block px-3 py-1 rounded-full border border-white/20 bg-white/10 text-sm font-bold tracking-wider text-orange-400 mb-4">
            LEARN
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 glow-text text-white">Tutorials & Guides</h2>
          <p className="text-zinc-400 font-medium leading-relaxed">
            Curated learning paths for every skill level — from your first SKILL.md to running complex multi-agent systems.
          </p>
        </div>
        <a
          href="https://github.com/heilcheng/awesome-agent-skills"
          className="text-sm font-bold tracking-tight pb-2 border-b border-white/30 hover:border-white text-zinc-400 hover:text-white transition-colors whitespace-nowrap"
        >
          Full Wiki →
        </a>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {resources.map((resource, i) => (
          <motion.a
            key={resource.title}
            href={resource.link}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`group flex flex-col p-8 glass-panel border ${resource.color} hover:scale-[1.02] active:scale-[0.99] transition-all text-left`}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-black/50 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform">
                {resource.icon}
              </div>
              <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>

            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{resource.type}</span>
              <span className={`text-[10px] px-2 py-1 border rounded-lg font-bold uppercase tracking-widest ${difficultyColors[resource.difficulty]}`}>
                {resource.difficulty}
              </span>
            </div>

            <h3 className="text-xl font-bold mb-3 tracking-tight text-white group-hover:underline underline-offset-4 decoration-2">
              {resource.title}
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed mt-auto">
              {resource.summary}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
