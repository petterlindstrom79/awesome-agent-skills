"use client";

import { BookOpen, Video, FileText, ArrowUpRight, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const resources = [
  {
    title: "Official Skills Guide",
    type: "Documentation",
    difficulty: "Beginner",
    summary: "Anthropic's official step-by-step guide to authored skills for Claude Code.",
    icon: <BookOpen className="w-5 h-5" />,
    link: "https://support.claude.com/en/articles/12512180-using-skills-in-claude"
  },
  {
    title: "Building MCP Servers",
    type: "Technical Guide",
    difficulty: "Advanced",
    summary: "Learn how to connect skills to external APIs using the Model Context Protocol.",
    icon: <FileText className="w-5 h-5" />,
    link: "https://modelcontextprotocol.io/docs/first-server"
  },
  {
    title: "Agentic IDE Mastery",
    type: "Video Series",
    difficulty: "Intermediate",
    summary: "Visual walkthroughs for Cursor, Windsurf, and Antigravity workflows.",
    icon: <Video className="w-5 h-5" />,
    link: "#"
  },
  {
    title: "Skill Architecture",
    type: "Deep Dive",
    difficulty: "Intermediate",
    summary: "Advanced patterns for state management and hierarchical skill trees.",
    icon: <GraduationCap className="w-5 h-5" />,
    link: "#"
  }
];

export default function Tutorials() {
  return (
    <section id="guides" className="py-24 bg-[#fafafa] dark:bg-[#09090b] transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Official Tutorials & Guides</h2>
            <p className="text-zinc-600 dark:text-zinc-400 font-medium">
              Curated learning paths for mastering the agentic ecosystem. From your first skill to complex multi-agent orchestration.
            </p>
          </div>
          <a
            href="https://github.com/heilcheng/awesome-agent-skills"
            className="text-sm font-bold tracking-tight pb-2 border-b-2 border-black dark:border-white hover:opacity-70 transition-opacity"
          >
            Explore Full Wiki
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, i) => (
            <motion.a
              key={resource.title}
              href={resource.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col p-8 glass rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 hover:scale-105 active:scale-95 transition-all text-left h-full"
            >
              <div className="mb-8 p-3 bg-white dark:bg-black w-fit rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 group-hover:scale-110 transition-transform">
                {resource.icon}
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{resource.type}</span>
                <span className="text-[10px] px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-500 font-bold uppercase tracking-widest">{resource.difficulty}</span>
              </div>
              
              <h3 className="text-lg font-bold mb-4 tracking-tight group-hover:underline underline-offset-4 decoration-2">
                {resource.title}
              </h3>
              
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed font-medium">
                {resource.summary}
              </p>

              <div className="mt-auto pt-4 flex items-center justify-between text-black dark:text-white">
                <span className="text-xs font-bold tracking-tight">View Resource</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-8 glass rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6 text-center md:text-left">
            <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-[2rem]">
              <span className="text-2xl">💡</span>
            </div>
            <div>
              <h4 className="font-bold tracking-tight">Looking for more?</h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">We're constantly updating our tutorial library as the ecosystem evolves.</p>
            </div>
          </div>
          <button className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full font-bold text-sm tracking-tight hover:scale-105 transition-transform">
            Request a Topic
          </button>
        </motion.div>
      </div>
    </section>
  );
}
