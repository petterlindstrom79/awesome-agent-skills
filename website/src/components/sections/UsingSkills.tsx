"use client";

import { motion } from "framer-motion";
import { Terminal, Copy, Check, Play, Settings, Combine } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    icon: <Terminal className="w-5 h-5" />,
    title: "Discovery",
    description: "The agent identifies a gap in its current capabilities and searches for a compatible skill."
  },
  {
    icon: <Play className="w-5 h-5" />,
    title: "Activation",
    description: "Metadata is parsed from the SKILL.md and cached for immediate situational awareness."
  },
  {
    icon: <Combine className="w-5 h-5" />,
    title: "Execution",
    description: "The agent follows the step-by-step instructions and accesses any local scripts or templates."
  }
];

export default function UsingSkills() {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText("npx skills add anthropics/skills/docx");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="guides" className="py-24 bg-[#fafafa] dark:bg-[#111111] transition-colors">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Using Skills</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
              We've made using skills as simple as adding a dependency to your project. Whether you're using the CLI or manual placement, the process is streamlined for the modern agentic IDE.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0 w-12 h-12 glass rounded-2xl flex items-center justify-center border border-zinc-200 dark:border-zinc-800 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 tracking-tight">{step.title}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass rounded-[2rem] p-8 border border-zinc-200 dark:border-zinc-800 space-y-6">
            <h3 className="text-xl font-bold tracking-tight mb-4">CLI Installation</h3>
            <div className="relative group">
              <pre className="bg-black text-zinc-300 p-6 rounded-2xl font-mono text-sm overflow-x-auto border border-zinc-800">
                <code>npx skills add anthropics/skills/docx</code>
              </pre>
              <button
                onClick={copyCode}
                className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-xs text-zinc-500 font-medium italic">
              * Supports GitHub shorthand, full URL, or local relative paths.
            </p>
          </div>

          <div className="glass rounded-[2rem] p-8 border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xl font-bold tracking-tight mb-4">Manual Integration</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <Settings className="w-5 h-5 text-zinc-400" />
                <div className="text-sm font-medium">
                  <span className="text-zinc-400">Path:</span> <code className="text-black dark:text-white">.github/skills/skill-name/</code>
                </div>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                Simply drop your `SKILL.md` (and any scripts) into this directory. Modern agents automatically index these folders on startup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
