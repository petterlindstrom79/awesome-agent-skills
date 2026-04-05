"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, Code2, Cloud, Wrench, Shield, Briefcase, Zap } from "lucide-react";

// Mapped from the actual README categories
const skillTabs = [
  { id: "official", label: "Official AI Providers" },
  { id: "cloud", label: "Cloud & Infrastructure" },
  { id: "devtools", label: "Developer Tools" },
  { id: "business", label: "Business & Utility" },
  { id: "security", label: "Security & Audit" },
  { id: "community", label: "Community Repos" },
];

const mockSkills = [
  // Official
  {
    id: "anthropic-docx",
    name: "anthropics/docx",
    description: "Create, edit, and analyze Word documents with Claude.",
    category: "official",
    tags: ["Document", "Office"],
    icon: <Zap className="w-5 h-5 text-purple-500" />,
    url: "https://agent-skill.co/anthropics/skills/docx"
  },
  {
    id: "anthropic-webapp",
    name: "anthropics/webapp-testing",
    description: "Test local web applications using Playwright natively.",
    category: "official",
    tags: ["Testing", "E2E"],
    icon: <Zap className="w-5 h-5 text-purple-500" />,
    url: "https://agent-skill.co/anthropics/skills/webapp-testing"
  },
  {
    id: "openai-cloudflare",
    name: "openai/cloudflare-deploy",
    description: "Deploy apps to Cloudflare using Workers and Pages",
    category: "official",
    tags: ["Deployment", "Edge"],
    icon: <Zap className="w-5 h-5 text-green-500" />,
    url: "https://agent-skill.co/openai/skills/cloudflare-deploy"
  },
  {
    id: "gemini-api",
    name: "google-gemini/gemini-api-dev",
    description: "Best practices for developing Gemini-powered apps",
    category: "official",
    tags: ["LLM", "Google"],
    icon: <Zap className="w-5 h-5 text-blue-500" />,
    url: "https://agent-skill.co/google-gemini/skills/gemini-api-dev"
  },
  
  // Cloud
  {
    id: "cf-agents",
    name: "cloudflare/agents-sdk",
    description: "Build stateful AI agents with scheduling, RPC, and MCP servers",
    category: "cloud",
    tags: ["Workers", "State"],
    icon: <Cloud className="w-5 h-5 text-orange-500" />,
    url: "https://agent-skill.co/cloudflare/skills/agents-sdk"
  },
  {
    id: "vercel-react",
    name: "vercel-labs/react-best-practices",
    description: "React best practices and modern server component patterns",
    category: "cloud",
    tags: ["React", "UI"],
    icon: <Cloud className="w-5 h-5 text-white" />,
    url: "https://agent-skill.co/vercel-labs/skills/react-best-practices"
  },
  {
    id: "hashi-tf",
    name: "hashicorp/terraform-style-guide",
    description: "Generate Terraform HCL code following HashiCorp's official style",
    category: "cloud",
    tags: ["IaC", "AWS"],
    icon: <Cloud className="w-5 h-5 text-indigo-500" />,
    url: "https://agent-skill.co/hashicorp/skills/terraform-style-guide"
  },

  // Dev Tools
  {
    id: "figma-impl",
    name: "figma/figma-implement-design",
    description: "Translate Figma designs into production-ready code with 1:1 fidelity",
    category: "devtools",
    tags: ["UI", "CSS"],
    icon: <Wrench className="w-5 h-5 text-pink-500" />,
    url: "https://agent-skill.co/figma/skills/figma-implement-design"
  },
  {
    id: "duckdb-query",
    name: "duckdb/query",
    description: "Run SQL queries against attached databases or ad-hoc files",
    category: "devtools",
    tags: ["Data", "SQL"],
    icon: <Wrench className="w-5 h-5 text-yellow-500" />,
    url: "https://agent-skill.co/duckdb/skills/query"
  },

  // Business
  {
    id: "stripe-best",
    name: "stripe/stripe-best-practices",
    description: "Best practices for building Stripe billing and checkout integrations",
    category: "business",
    tags: ["Payments", "API"],
    icon: <Briefcase className="w-5 h-5 text-indigo-400" />,
    url: "https://agent-skill.co/stripe/skills/stripe-best-practices"
  },
  {
    id: "notion-intel",
    name: "makenotion/meeting-intelligence",
    description: "Prepare meeting materials by gathering real-time Notion context",
    category: "business",
    tags: ["Productivity", "Docs"],
    icon: <Briefcase className="w-5 h-5 text-zinc-400" />,
    url: "https://agent-skill.co/makenotion/skills/meeting-intelligence"
  },

  // Security
  {
    id: "trail-audit",
    name: "trailofbits/static-analysis",
    description: "Static analysis toolkit with CodeQL and Semgrep for vulnerability hunting",
    category: "security",
    tags: ["Audit", "CodeQL"],
    icon: <Shield className="w-5 h-5 text-red-500" />,
    url: "https://agent-skill.co/trailofbits/skills/static-analysis"
  },

  // Community
  {
    id: "agentops-eval",
    name: "agentops/eval-framework",
    description: "Community maintained framework for evaluating agent trajectory behavior",
    category: "community",
    tags: ["Eval", "Testing"],
    icon: <Code2 className="w-5 h-5 text-teal-400" />,
    url: "https://agent-skill.co/agentops/skills/eval-framework"
  }
];

export default function SkillDirectory() {
  const [activeTab, setActiveTab] = useState("official");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkills = mockSkills.filter((skill) => {
    const matchesCategory = skill.category === activeTab;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="directory" className="scroll-mt-32">
      <div className="mb-10">
        <div className="inline-block px-3 py-1 rounded-full border border-white/20 bg-white/10 text-sm font-bold tracking-wider text-blue-400 mb-4">
          THE RESOURCES
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 glow-text text-white">Skill Directory</h2>
        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
          The central hub for off-the-shelf capabilities. Click to drop them into your agent framework.
        </p>
      </div>

      <div className="glass-panel p-2 flex flex-wrap gap-2 mb-8 relative z-10 w-full overflow-x-auto hide-scrollbar">
        {skillTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-5 py-3 rounded-2xl text-sm font-bold whitespace-nowrap transition-colors duration-300 ${
                isActive ? "text-black" : "text-zinc-400 hover:text-white"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeDirectoryTab"
                  className="absolute inset-0 bg-white rounded-2xl -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className="relative mb-12 z-20">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
        <input
          type="text"
          placeholder={`Search ${skillTabs.find(t => t.id === activeTab)?.label}...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-14 pr-6 py-5 bg-black/40 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-white placeholder:text-zinc-500 shadow-inner"
        />
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.a
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              key={skill.id}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass p-6 rounded-3xl flex items-start gap-5 hover:bg-white/5 transition-colors cursor-pointer relative overflow-hidden h-fit"
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
              </div>
              <div className="p-4 rounded-2xl bg-black/50 border border-white/5 flex items-center justify-center shrink-0">
                {skill.icon}
              </div>
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-lg font-bold tracking-tight mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-medium mb-4">
                    {skill.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white/5 text-zinc-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
        
        {filteredSkills.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-16 h-16 mb-4 rounded-full bg-white/5 flex items-center justify-center">
              <Search className="w-8 h-8 text-zinc-500" />
            </div>
            <p className="text-zinc-400 font-medium">No skills found in this category matching "{searchQuery}"</p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
