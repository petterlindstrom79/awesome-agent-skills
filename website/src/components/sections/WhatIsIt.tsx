import { Code2, BookOpen, Package } from "lucide-react";

export default function WhatIsIt() {
  return (
    <section id="what-are-skills" className="scroll-mt-20 py-16 border-b border-neutral-200 dark:border-neutral-800">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">What is an Agent Skill?</h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl text-base leading-relaxed">
        Most people think of AI capabilities as a giant prompt. A skill is something more structured — a portable, reusable package of instructions your agent can read and act on, without you having to repeat yourself every session.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Old way */}
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 bg-neutral-50 dark:bg-neutral-900">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-neutral-200 dark:bg-neutral-700">
              <BookOpen className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
            </div>
            <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">The Old Way</span>
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">The giant prompt</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Pasting a wall of text into every session. The agent has to interpret it each time, and results are inconsistent. Complex workflows get lost, hallucinations happen.
          </p>
        </div>

        {/* New way */}
        <div className="border border-neutral-900 dark:border-neutral-600 rounded-xl p-6 bg-white dark:bg-neutral-900">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-neutral-900 dark:bg-white">
              <Code2 className="w-4 h-4 text-white dark:text-neutral-900" />
            </div>
            <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-300 uppercase tracking-widest">The New Way</span>
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">A structured skill</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            A SKILL.md file in a predictable folder. The agent discovers it automatically, reads the structured instructions, and executes the workflow deterministically every time.
          </p>
        </div>
      </div>

      <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 bg-white dark:bg-neutral-900">
        <div className="flex items-center gap-3 mb-4">
          <Package className="w-4 h-4 text-neutral-500" />
          <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">Think of it as a package manager for agent behavior</span>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          Just as <code>npm install</code> gives your project a new capability, installing a skill gives your agent a new, reliable behavior — whether that's auditing security vulnerabilities, deploying to Cloudflare, or translating a Figma design into code.
        </p>
      </div>
    </section>
  );
}
