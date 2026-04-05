import { CheckCircle2, XCircle } from "lucide-react";

const standards = [
  {
    title: "Clarity & Precision",
    description: "Instructions must be unambiguous. Avoid 'try to' or 'maybe' — use direct language like 'Execute' or 'Generate'.",
  },
  {
    title: "Focused Scope",
    description: "A good skill does one thing well. Monolithic skills slow down agents and increase token overhead.",
  },
  {
    title: "Safety & Reliability",
    description: "Explicitly define error handling and edge cases. A skill should know when to stop and ask for confirmation.",
  },
  {
    title: "Proven Examples",
    description: "Include at least two real-world usage examples in SKILL.md to ground the agent in concrete behavior.",
  },
];

export default function QualityStandards() {
  return (
    <section id="quality-standards" className="scroll-mt-20 py-16 border-b border-neutral-200 dark:border-neutral-800">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">Quality Standards</h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl text-base leading-relaxed">
        Not all skills are created equal. We maintain a high bar for what gets merged to ensure agents stay stable and predictable.
      </p>

      {/* Standards list */}
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {standards.map((s, i) => (
          <div key={s.title} className="flex gap-4 p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900">
            <span className="text-xs font-bold text-neutral-400 dark:text-neutral-600 mt-0.5 w-4 shrink-0">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">{s.title}</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{s.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Good vs Bad */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
            <CheckCircle2 className="w-4 h-4 text-neutral-700 dark:text-neutral-400" />
            <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-widest">Good pattern</span>
          </div>
          <div className="p-4">
            <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400 leading-relaxed bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
              "When a PR is opened, scan the `packages/core` directory for changes. If changes exist, run `npm test` and output the results as a summary table."
            </p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-3 italic">Clear trigger, specific target, defined output format.</p>
          </div>
        </div>

        <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
            <XCircle className="w-4 h-4 text-neutral-400 dark:text-neutral-600" />
            <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-500 uppercase tracking-widest">Anti-pattern</span>
          </div>
          <div className="p-4">
            <p className="text-xs font-mono text-neutral-400 dark:text-neutral-600 leading-relaxed bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 opacity-70">
              "Try to look at the code if you have time and maybe let me know if anything looks weird or if there are bugs."
            </p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-3 italic">No trigger, no target, no success criteria — prone to hallucination.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
