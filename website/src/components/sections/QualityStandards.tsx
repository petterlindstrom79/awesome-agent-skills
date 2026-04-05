"use client";

import { CheckCircle2, XCircle, Star, Target, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const standards = [
  {
    icon: <Target className="w-6 h-6 text-blue-400" />,
    title: "Clarity & Precision",
    description: "Instructions must be unambiguous. Avoid 'try to' or 'maybe'—use direct language like 'Execute' or 'Generate'.",
    border: "border-blue-500/20"
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "Operational Scope",
    description: "A good skill does one thing perfectly. Monolithic skills slow down agents and increase token noise.",
    border: "border-yellow-500/20"
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
    title: "Safety & Reliability",
    description: "Define error handling and edge cases. A skill should know when to stop and ask for human verification.",
    border: "border-green-500/20"
  },
  {
    icon: <Star className="w-6 h-6 text-purple-400" />,
    title: "Proven Examples",
    description: "Include at least two real-world usage examples in SKILL.md to ground the agent's behavior firmly.",
    border: "border-purple-500/20"
  }
];

export default function QualityStandards() {
  return (
    <section id="quality-standards" className="scroll-mt-32">
      <div className="mb-12">
        <div className="inline-block px-3 py-1 rounded-full border border-white/20 bg-white/10 text-sm font-bold tracking-wider text-green-400 mb-4">
          THE STANDARD
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 glow-text text-white">Quality Standards</h2>
        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
          Not all skills are created equal. We maintain a high bar for what gets merged, to ensure agents stay stable and predictable.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {standards.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`glass-panel p-8 border ${s.border}`}
          >
            <div className="mb-6 p-3 bg-black/40 w-fit rounded-2xl border border-white/10">
              {s.icon}
            </div>
            <h3 className="text-lg font-bold mb-3 tracking-tight text-white">{s.title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Good vs Bad example */}
      <div className="glass-panel p-2">
        <div className="grid md:grid-cols-2 gap-2">
          <div className="p-8 space-y-6 rounded-3xl border border-green-500/20 bg-green-950/20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/50 border border-green-500/30 text-[10px] font-bold tracking-widest text-green-400 uppercase">
              <CheckCircle2 className="w-3 h-3" /> Good Pattern
            </div>
            <h4 className="text-2xl font-bold tracking-tight text-white">Explicit Instruction</h4>
            <div className="p-5 bg-black/60 rounded-2xl border border-green-900/30 text-sm font-mono text-green-300/80 leading-relaxed">
              "When a PR is opened, scan the `packages/core` directory for changes. If changes exist, run `npm test` and output results as a summary table."
            </div>
            <p className="text-sm text-zinc-500 font-medium italic">
              ✓ Clear trigger, specific target, defined output format.
            </p>
          </div>

          <div className="p-8 space-y-6 rounded-3xl border border-red-500/20 bg-red-950/10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/50 border border-red-500/30 text-[10px] font-bold tracking-widest text-red-400 uppercase">
              <XCircle className="w-3 h-3" /> Anti-Pattern
            </div>
            <h4 className="text-2xl font-bold tracking-tight text-white/60">Vague Suggestion</h4>
            <div className="p-5 bg-black/60 rounded-2xl border border-red-900/30 text-sm font-mono text-red-300/50 leading-relaxed">
              "Try to look at the code if you have time and maybe let me know if anything looks weird or if there are bugs."
            </div>
            <p className="text-sm text-zinc-600 font-medium italic">
              ✗ No trigger, no target, no success criteria — hallucinates easily.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
