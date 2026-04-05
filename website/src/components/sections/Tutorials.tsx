import { ArrowUpRight } from "lucide-react";

const resources = [
  {
    title: "Official Skills Guide",
    type: "Documentation",
    level: "Beginner",
    description: "Anthropic's official step-by-step guide to authoring skills for Claude Code.",
    href: "https://support.claude.com/en/articles/12512180-using-skills-in-claude",
  },
  {
    title: "Building MCP Servers",
    type: "Technical Guide",
    level: "Advanced",
    description: "Connect skills to external APIs using the open Model Context Protocol standard.",
    href: "https://modelcontextprotocol.io/docs/first-server",
  },
  {
    title: "Agentic IDE Mastery",
    type: "Video Series",
    level: "Intermediate",
    description: "Visual walkthroughs for Cursor, Windsurf, and Claude Code — setup through end-to-end workflows.",
    href: "#",
  },
  {
    title: "Skill Architecture Patterns",
    type: "Deep Dive",
    level: "Intermediate",
    description: "Advanced patterns: hierarchical skill trees, state-aware agents, and multi-agent orchestration.",
    href: "#",
  },
];

const levelColors: Record<string, string> = {
  Beginner: "text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800",
  Intermediate: "text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800",
  Advanced: "text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800",
};

export default function Tutorials() {
  return (
    <section id="tutorials" className="scroll-mt-20 py-16 border-b border-neutral-200 dark:border-neutral-800">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">Tutorials & Guides</h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed max-w-xl">
            Curated learning paths for every level — from your first SKILL.md to multi-agent orchestration.
          </p>
        </div>
        <a
          href="https://github.com/heilcheng/awesome-agent-skills"
          className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors whitespace-nowrap"
        >
          Full wiki <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {resources.map((r) => (
          <a
            key={r.title}
            href={r.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-sm transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">{r.type}</span>
                <span className={`text-xs px-2 py-0.5 rounded font-medium ${levelColors[r.level]}`}>{r.level}</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-300 dark:text-neutral-600 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors" />
            </div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">{r.title}</h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{r.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
