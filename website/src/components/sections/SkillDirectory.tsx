"use client";

import { useState } from "react";
import { Search, Filter, ExternalLink, BadgeCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All",
  "AI Platforms",
  "Cloud & Infra",
  "Dev Tools",
  "Google Ecosystem",
  "Business & Marketing",
  "Security & Intelligence",
];

const skillsData = [
  {
    name: "Anthropic Docx",
    category: "AI Platforms",
    description: "Create, edit, and analyze Word documents with Claude Code.",
    difficulty: "Beginner",
    tags: ["Office", "Claude", "Writing"],
    useCase: "Drafting PRDs or status reports from technical specs.",
    link: "https://agent-skill.co/anthropics/skills/docx"
  },
  {
    name: "OpenAI ImageGen",
    category: "AI Platforms",
    description: "Generate and edit images using OpenAI's Image API directly in chat.",
    difficulty: "Beginner",
    tags: ["Creative", "DALL-E", "Media"],
    useCase: "Creating UI mockups or marketing assets from a prompt.",
    link: "https://agent-skill.co/openai/skills/imagegen"
  },
  {
    name: "Cloudflare Agents SDK",
    category: "Cloud & Infra",
    description: "Build stateful AI agents with scheduling and RPC on Cloudflare.",
    difficulty: "Advanced",
    tags: ["Serverless", "Infra", "Workers"],
    useCase: "Deploying long-running autonomous workflows as Workers.",
    link: "https://agent-skill.co/cloudflare/skills/agents-sdk"
  },
  {
    name: "Vercel Next.js Guide",
    category: "Dev Tools",
    description: "Best practices and recommended patterns for modern Next.js 16+ apps.",
    difficulty: "Intermediate",
    tags: ["Web", "React", "Frontend"],
    useCase: "Upgrading a legacy React app to App Router conventions.",
    link: "https://agent-skill.co/vercel-labs/skills/next-best-practices"
  },
  {
    name: "Google Workspace Gmail",
    category: "Google Ecosystem",
    description: "Send, read, and manage Gmail messages via the GWS CLI.",
    difficulty: "Intermediate",
    tags: ["Productivity", "Google", "Email"],
    useCase: "Automating follow-up emails based on spreadsheet data.",
    link: "https://agent-skill.co/googleworkspace/skills/gws-gmail"
  },
  {
    name: "Trail of Bits Security Audit",
    category: "Security & Intelligence",
    description: "Perform granular code analysis for security vulnerabilities.",
    difficulty: "Expert",
    tags: ["Security", "Audit", "Rust"],
    useCase: "Scanning smart contracts for known exploit patterns.",
    link: "https://agent-skill.co/trailofbits/skills/audit-context-building"
  },
  {
    name: "Stripe Best Practices",
    category: "Business & Marketing",
    description: "Comprehensive guide to building production-ready Stripe integrations.",
    difficulty: "Intermediate",
    tags: ["Payments", "Fintech", "API"],
    useCase: "Implementing complex subscription models with tax handling.",
    link: "https://agent-skill.co/stripe/skills/stripe-best-practices"
  }
];

export default function SkillDirectory() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = activeCategory === "All" || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 bg-[#fafafa] dark:bg-[#09090b] transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Skill Directory</h2>
            <p className="text-zinc-600 dark:text-zinc-400 font-medium">
              A peer-reviewed knowledge base of modular agent capabilities. Each entry is optimized for agentic context and real-world engineering workflows.
            </p>
          </div>
          
          <div className="relative group w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-black dark:group-focus-within:text-white transition-colors" />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-3 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === category
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-white dark:bg-[#111] text-zinc-500 hover:text-black dark:hover:text-white border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="group relative glass rounded-[2rem] p-8 border border-zinc-100 dark:border-zinc-800 hover:shadow-2xl transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
                    <BadgeCheck className="w-6 h-6 text-black dark:text-white" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 pt-2">
                    {skill.difficulty}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 tracking-tight group-hover:underline underline-offset-4 cursor-pointer">
                  {skill.name}
                </h3>
                
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  {skill.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-500 font-bold uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1">Use Case</span>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 italic leading-relaxed">
                      "{skill.useCase}"
                    </p>
                  </div>
                </div>

                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center justify-between group/link"
                >
                  <span className="text-sm font-bold tracking-tight">View Skill Docs</span>
                  <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center transition-all group-hover/link:bg-black group-hover/link:text-white dark:group-hover/link:bg-white dark:group-hover/link:text-black">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
