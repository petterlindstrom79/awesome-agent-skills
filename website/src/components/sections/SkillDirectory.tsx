"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, Cloud, Wrench, Shield, Briefcase, Cpu, Globe } from "lucide-react";

const skillTabs = [
  { id: "official", label: "Official AI Providers" },
  { id: "cloud", label: "Cloud & Infrastructure" },
  { id: "devtools", label: "Developer Tools" },
  { id: "business", label: "Business & Utility" },
  { id: "security", label: "Security & Audit" },
  { id: "community", label: "Community" },
];

const skills = [
  // Official
  { id: "anthropic-docx", name: "anthropics/docx", description: "Create, edit, and analyze Word documents with Claude.", category: "official", tags: ["Document", "Office"], Icon: Cpu },
  { id: "anthropic-webapp", name: "anthropics/webapp-testing", description: "Test local web applications using Playwright natively.", category: "official", tags: ["Testing", "E2E"], Icon: Cpu },
  { id: "openai-cloudflare", name: "openai/cloudflare-deploy", description: "Deploy apps to Cloudflare using Workers and Pages.", category: "official", tags: ["Deployment", "Edge"], Icon: Cpu },
  { id: "gemini-api", name: "google-gemini/gemini-api-dev", description: "Best practices for developing Gemini-powered applications.", category: "official", tags: ["LLM", "Google"], Icon: Cpu },
  // Cloud
  { id: "cf-agents", name: "cloudflare/agents-sdk", description: "Build stateful AI agents with scheduling, RPC, and MCP servers.", category: "cloud", tags: ["Workers", "State"], Icon: Cloud },
  { id: "vercel-react", name: "vercel-labs/react-best-practices", description: "React best practices and modern server component patterns.", category: "cloud", tags: ["React", "UI"], Icon: Cloud },
  { id: "hashi-tf", name: "hashicorp/terraform-style-guide", description: "Generate Terraform HCL code following HashiCorp's official style.", category: "cloud", tags: ["IaC", "AWS"], Icon: Cloud },
  // DevTools
  { id: "figma-impl", name: "figma/figma-implement-design", description: "Translate Figma designs into production-ready code with 1:1 fidelity.", category: "devtools", tags: ["UI", "CSS"], Icon: Wrench },
  { id: "duckdb-query", name: "duckdb/query", description: "Run SQL queries against attached databases or ad-hoc files.", category: "devtools", tags: ["Data", "SQL"], Icon: Wrench },
  // Business
  { id: "stripe-best", name: "stripe/stripe-best-practices", description: "Best practices for building Stripe billing and checkout integrations.", category: "business", tags: ["Payments", "API"], Icon: Briefcase },
  { id: "notion-intel", name: "makenotion/meeting-intelligence", description: "Prepare meeting materials by gathering real-time Notion context.", category: "business", tags: ["Productivity", "Docs"], Icon: Briefcase },
  // Security
  { id: "trail-audit", name: "trailofbits/static-analysis", description: "Static analysis with CodeQL and Semgrep for vulnerability hunting.", category: "security", tags: ["Audit", "CodeQL"], Icon: Shield },
  // Community
  { id: "agentops-eval", name: "agentops/eval-framework", description: "Community framework for evaluating agent trajectory behavior.", category: "community", tags: ["Eval", "Testing"], Icon: Globe },
];

export default function SkillDirectory() {
  const [activeTab, setActiveTab] = useState("official");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = skills.filter((s) =>
    s.category === activeTab &&
    (s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     s.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="directory" className="scroll-mt-20 py-16 border-b border-neutral-200 dark:border-neutral-800">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">Skill Directory</h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl text-base leading-relaxed">
        Official and community-maintained capabilities organised by category. Click any card to visit the source.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap gap-1 mb-6 border-b border-neutral-200 dark:border-neutral-800 pb-px">
        {skillTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => { setActiveTab(tab.id); setSearchQuery(""); }}
            className={`px-4 py-2 text-sm font-medium rounded-t-md transition-colors relative -mb-px ${
              activeTab === tab.id
                ? "text-neutral-900 dark:text-white border border-b-white dark:border-neutral-700 dark:border-b-neutral-950 bg-white dark:bg-neutral-950"
                : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
        <input
          type="text"
          placeholder={`Search ${skillTabs.find(t => t.id === activeTab)?.label.toLowerCase()}...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2 text-sm bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-600 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400"
        />
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((skill) => (
            <motion.a
              layout
              key={skill.id}
              href={`https://github.com/heilcheng/awesome-agent-skills`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="group flex items-start gap-4 p-4 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-sm transition-all"
            >
              <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 shrink-0">
                <skill.Icon className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-white font-mono group-hover:underline underline-offset-2">
                    {skill.name}
                  </h3>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-300 dark:text-neutral-600 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors shrink-0 mt-0.5" />
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mt-1 mb-2">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {skill.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="py-16 text-center text-sm text-neutral-400">
          No skills found matching "{searchQuery}"
        </div>
      )}
    </section>
  );
}
