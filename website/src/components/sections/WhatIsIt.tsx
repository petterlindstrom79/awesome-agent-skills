import { Package, Code2, BookOpen } from "lucide-react";

export default function WhatIsIt() {
  return (
    <section id="what-are-skills" className="scroll-mt-20 py-16 border-b border-neutral-200 dark:border-neutral-800">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">What Are Agent Skills?</h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl text-base leading-relaxed">
        Think of Agent Skills as "how-to guides" for AI assistants. Instead of the AI needing to know everything upfront, skills let it learn new abilities on the fly — like giving someone a recipe card instead of making them memorize an entire cookbook.
      </p>
      <p className="text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl text-base leading-relaxed">
        Skills are simple text files (called <code>SKILL.md</code>) that teach an AI how to do specific tasks. When you ask the AI to do something, it finds the right skill, reads the instructions, and gets to work.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {[
          {
            Icon: BookOpen,
            title: "Faster and lighter",
            desc: "The AI only loads what it needs, when it needs it. No massive monolithic prompts slowing things down.",
          },
          {
            Icon: Package,
            title: "Works everywhere",
            desc: "Create a skill once and use it with any compatible AI tool — Claude, Copilot, Codex, and more.",
          },
          {
            Icon: Code2,
            title: "Easy to share",
            desc: "Skills are just files. Copy them, download them, or share them on GitHub like any other project.",
          },
        ].map(({ Icon, title, desc }) => (
          <div key={title} className="flex gap-4 p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900">
            <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 h-fit">
              <Icon className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">{title}</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-neutral-50 dark:bg-neutral-900">
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          <strong className="text-neutral-900 dark:text-white">Skills are instructions, not code.</strong> The AI reads them like a human would read a guide, then follows the steps. You don't need to be a developer to write or use them.
        </p>
      </div>
    </section>
  );
}
