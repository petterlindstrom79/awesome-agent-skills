"use client";

import { CheckCircle2, XCircle, Star, Target, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const standards = [
  {
    icon: <Target className="w-6 h-6 text-black dark:text-white" />,
    title: "Clarity & Precision",
    description: "Instructions must be unambiguous. Avoid 'try to' or 'maybe'—use direct, imperative language like 'Execute' or 'Generate'."
  },
  {
    icon: <Zap className="w-6 h-6 text-black dark:text-white" />,
    title: "Operational Scope",
    description: "A good skill does one thing perfectly. Monolithic skills slow down agents and increase token noise."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-black dark:text-white" />,
    title: "Safety & Reliability",
    description: "Define error handling and edge cases. A skill should know when to stop and ask for human verification."
  },
  {
    icon: <Star className="w-6 h-6 text-black dark:text-white" />,
    title: "Proven Examples",
    description: "Include at least two real-world usage examples in the SKILL.md to ground the agent's behavior."
  }
];

export default function QualityStandards() {
  return (
    <section id="standards" className="py-24 bg-white dark:bg-black transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">The Standard of Excellence</h2>
          <p className="text-zinc-600 dark:text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Not all skills are created equal. We maintain a high bar for inclusion in this repository to ensure agentic stability and peak performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {standards.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2rem] glass border border-zinc-100 dark:border-zinc-800"
            >
              <div className="mb-6 p-3 bg-zinc-100 dark:bg-zinc-800 w-fit rounded-2xl">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold mb-3 tracking-tight">{s.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-[3rem] p-8 md:p-12 bg-zinc-50/50 dark:bg-zinc-950/50 backdrop-blur-2xl">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-[10px] font-bold tracking-widest text-green-700 dark:text-green-300 uppercase">
              <CheckCircle2 className="w-3 h-3" /> Preferred Pattern
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-bold tracking-tight">Explicit Instruction</h4>
              <div className="p-6 bg-white dark:bg-black rounded-2xl border border-green-100 dark:border-green-900/20 text-sm font-mono text-zinc-600 dark:text-zinc-400">
                "When a PR is opened, immediately scan the `packages/core` directory for changes. If changes exist, run `npm test` and output the results as a summary table."
              </div>
              <p className="text-sm text-zinc-500 font-medium italic">
                Why? It provides clear triggers, specific targets, and defined output formats.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-[10px] font-bold tracking-widest text-red-700 dark:text-red-300 uppercase">
              <XCircle className="w-3 h-3" /> Anti-Pattern
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-bold tracking-tight">Vague Suggestion</h4>
              <div className="p-6 bg-white dark:bg-black rounded-2xl border border-red-100 dark:border-red-900/20 text-sm font-mono text-zinc-600 dark:text-zinc-400 opacity-60">
                "Try to look at the code if you have time and maybe let me know if anything looks weird or if there are bugs."
              </div>
              <p className="text-sm text-zinc-500 font-medium italic">
                Why? Hallucination-prone. No specific trigger, no defined success criteria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
