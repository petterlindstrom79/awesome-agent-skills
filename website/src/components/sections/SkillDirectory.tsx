"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, Cloud, Wrench, Shield, Briefcase, Cpu, Globe, Server, Code, Zap } from "lucide-react";

const skillTabs = [
  { id: "official", label: "AI Platforms" },
  { id: "cloud", label: "Cloud & Infrastructure" },
  { id: "devtools", label: "Developer Tools" },
  { id: "business", label: "Business & Marketing" },
  { id: "security", label: "Security & Intelligence" },
];

const skills = [
  // Official - Anthropic
  { id: "anthropic-docx", name: "anthropics/docx", description: "Create, edit, and analyze Word documents with Claude.", category: "official", tags: ["Document", "Anthropic"], Icon: Cpu },
  { id: "anthropic-doc-coauthoring", name: "anthropics/doc-coauthoring", description: "Collaborative document editing and co-authoring.", category: "official", tags: ["Collaborative", "Anthropic"], Icon: Cpu },
  { id: "anthropic-pptx", name: "anthropics/pptx", description: "Create, edit, and analyze PowerPoint presentations.", category: "official", tags: ["Presentation", "Anthropic"], Icon: Cpu },
  { id: "anthropic-xlsx", name: "anthropics/xlsx", description: "Create, edit, and analyze Excel spreadsheets.", category: "official", tags: ["Spreadsheet", "Anthropic"], Icon: Cpu },
  { id: "anthropic-pdf", name: "anthropics/pdf", description: "Extract text, create PDFs, and handle forms.", category: "official", tags: ["PDF", "Anthropic"], Icon: Cpu },
  { id: "anthropic-algorithmic-art", name: "anthropics/algorithmic-art", description: "Create generative art using p5.js with seeded randomness.", category: "official", tags: ["Art", "Anthropic"], Icon: Cpu },
  { id: "anthropic-canvas-design", name: "anthropics/canvas-design", description: "Design visual art in PNG and PDF formats.", category: "official", tags: ["Design", "Anthropic"], Icon: Cpu },
  { id: "anthropic-frontend-design", name: "anthropics/frontend-design", description: "Frontend design and UI/UX development tools.", category: "official", tags: ["Frontend", "Anthropic"], Icon: Cpu },
  { id: "anthropic-webapp-testing", name: "anthropics/webapp-testing", description: "Test local web applications using Playwright natively.", category: "official", tags: ["Testing", "Anthropic"], Icon: Cpu },
  { id: "anthropic-skill-creator", name: "anthropics/skill-creator", description: "Guide for creating skills that extend Claude's capabilities.", category: "official", tags: ["Meta", "Anthropic"], Icon: Cpu },

  // Official - OpenAI
  { id: "openai-cloudflare", name: "openai/cloudflare-deploy", description: "Deploy apps to Cloudflare using Workers and Pages.", category: "official", tags: ["Deployment", "OpenAI"], Icon: Zap },
  { id: "openai-game", name: "openai/develop-web-game", description: "Build and test web games iteratively using Playwright.", category: "official", tags: ["Game", "OpenAI"], Icon: Zap },
  { id: "openai-doc", name: "openai/doc", description: "Read, create, and edit .docx documents with formatting.", category: "official", tags: ["Document", "OpenAI"], Icon: Zap },
  { id: "openai-linear", name: "openai/linear", description: "Manage issues, projects, and team workflows in Linear.", category: "official", tags: ["Linear", "OpenAI"], Icon: Zap },
  { id: "openai-pdf", name: "openai/pdf", description: "Read, create, and review PDFs with layout integrity.", category: "official", tags: ["PDF", "OpenAI"], Icon: Zap },
  { id: "openai-figma", name: "openai/figma-implement-design", description: "Translate Figma designs into production-ready code.", category: "official", tags: ["Figma", "OpenAI"], Icon: Zap },

  // Official - Google
  { id: "google-gemini-dev", name: "google-gemini/gemini-api-dev", description: "Best practices for developing Gemini-powered apps.", category: "official", tags: ["Gemini", "Google"], Icon: Globe },
  { id: "google-vertex-dev", name: "google-gemini/vertex-ai-api-dev", description: "Developing Gemini apps on Google Cloud Vertex AI.", category: "official", tags: ["Vertex", "Google"], Icon: Globe },

  // Cloud & Infrastructure
  { id: "cloudflare-agents", name: "cloudflare/agents-sdk", description: "Build stateful AI agents with scheduling, RPC, and MCP servers.", category: "cloud", tags: ["Agents", "Cloudflare"], Icon: Cloud },
  { id: "netlify-functions", name: "netlify/netlify-functions", description: "Build serverless API endpoints and background tasks.", category: "cloud", tags: ["Functions", "Netlify"], Icon: Cloud },
  { id: "vercel-react", name: "vercel-labs/react-best-practices", description: "React best practices and modern server component patterns.", category: "cloud", tags: ["React", "Vercel"], Icon: Cloud },
  { id: "vercel-next", name: "vercel-labs/next-best-practices", description: "Next.js best practices and recommended patterns.", category: "cloud", tags: ["Next.js", "Vercel"], Icon: Cloud },
  { id: "hashicorp-tf", name: "hashicorp/terraform-style-guide", description: "HCL code following HashiCorp's official style conventions.", category: "cloud", tags: ["Terraform", "Infrastructure"], Icon: Cloud },
  { id: "neon-postgres", name: "neondatabase/neon-postgres", description: "Best practices for Neon Serverless Postgres.", category: "cloud", tags: ["Database", "Neon"], Icon: Cloud },

  // Developer Tools
  { id: "voltagent-best", name: "voltagent/voltagent-best-practices", description: "Architecture and usage patterns for agents, workflows, and memory.", category: "devtools", tags: ["VoltAgent", "Architecture"], Icon: Wrench },
  { id: "expo-ui", name: "expo/building-native-ui", description: "Build apps with Expo Router, styling, and animations.", category: "devtools", tags: ["Expo", "Native"], Icon: Wrench },
  { id: "duckdb-query", name: "duckdb/query", description: "Run SQL queries against attached databases or ad-hoc files.", category: "devtools", tags: ["DuckDB", "SQL"], Icon: Wrench },
  { id: "gsap-core", name: "greensock/gsap-core", description: "Core API: gsap.to(), from(), fromTo(), animations, and timelines.", category: "devtools", tags: ["GSAP", "Animation"], Icon: Wrench },
  { id: "remotion-video", name: "remotion-dev/remotion", description: "Programmatic video creation with React.", category: "devtools", tags: ["Video", "React"], Icon: Wrench },

  // Business & Marketing
  { id: "stripe-best", name: "stripe/stripe-best-practices", description: "Best practices for building Stripe integrations.", category: "business", tags: ["Payments", "Stripe"], Icon: Briefcase },
  { id: "notion-knowledge", name: "makenotion/knowledge-capture", description: "Transform conversations into structured Notion documentation.", category: "business", tags: ["Documentation", "Notion"], Icon: Briefcase },
  { id: "resend-email", name: "resend/resend", description: "Send and manage emails via the Resend API.", category: "business", tags: ["Email", "Resend"], Icon: Briefcase },
  { id: "sanity-best", name: "sanity-io/sanity-best-practices", description: "Sanity Studio and content workflow best practices.", category: "business", tags: ["CMS", "Sanity"], Icon: Briefcase },
  { id: "better-auth-best", name: "better-auth/best-practices", description: "Best practices for Better Auth integration.", category: "business", tags: ["Auth", "Security"], Icon: Briefcase },

  // Security & Web Intelligence
  { id: "trailofbits-audit", name: "trailofbits/audit-context-building", description: "Deep architectural context via granular code analysis.", category: "security", tags: ["Audit", "Trail of Bits"], Icon: Shield },
  { id: "trailofbits-static", name: "trailofbits/static-analysis", description: "Static analysis toolkit with CodeQL and Semgrep.", category: "security", tags: ["Static Analysis", "CodeQL"], Icon: Shield },
  { id: "getsentry-bugs", name: "getsentry/find-bugs", description: "Find and identify bugs in code using Sentry data.", category: "security", tags: ["Sentry", "Bugs"], Icon: Shield },
  { id: "firecrawl-cli", name: "firecrawl/firecrawl-cli", description: "Scrape, crawl, search, and map the web via CLI.", category: "security", tags: ["Scraping", "Firecrawl"], Icon: Shield },
  { id: "binance-audit", name: "binance/query-token-audit", description: "Audit token security to detect scams and honeypots.", category: "security", tags: ["Crypto", "Security"], Icon: Shield },
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
        Official and community-maintained capabilities organized by category. Click any card to visit the source.
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
