"use client";

import { motion } from "framer-motion";
import { Terminal, Copy, Check, Play, Combine, Settings } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    icon: <Terminal className="w-5 h-5 text-blue-400" />,
    title: "1. Find a skill",
    description: "Browse the Directory to find an official or community skill that matches your workflow. Each one is a self-contained folder you can inspect before adding it."
  },
  {
    icon: <Play className="w-5 h-5 text-purple-400" />,
    title: "2. Add it to your project",
    description: "Drop the skill folder into `.github/skills/` (or wherever your agent indexes skills). The agent reads SKILL.md automatically next time it starts."
  },
  {
    icon: <Combine className="w-5 h-5 text-green-400" />,
    title: "3. It just works",
    description: "Your agent now knows exactly when and how to run this capability. No prompting needed — the skill activates based on semantic context."
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
    <section id="using-skills" className="scroll-mt-32">
      <div className="mb-12">
        <div className="inline-block px-3 py-1 rounded-full border border-white/20 bg-white/10 text-sm font-bold tracking-wider text-purple-400 mb-4">
          GET STARTED
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 glow-text text-white">Using Skills</h2>
        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
          Adding a skill to your project is a three-step process and takes under a minute. No config files, no complicated setup.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 group glass-panel p-6"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-black/40 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1 tracking-tight text-white">{step.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-6">
          {/* CLI */}
          <div className="glass-panel p-8 space-y-5">
            <h3 className="text-xl font-bold tracking-tight text-white">CLI Quick-add</h3>
            <div className="relative group">
              <pre className="bg-black/60 text-zinc-300 p-6 rounded-2xl font-mono text-sm overflow-x-auto border border-white/10">
                <code>npx skills add anthropics/skills/docx</code>
              </pre>
              <button
                onClick={copyCode}
                className="absolute top-3 right-3 p-2 rounded-lg bg-white/5 hover:bg-white/20 transition-colors text-zinc-400 hover:text-white"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-xs text-zinc-600 italic">
              Supports GitHub shorthand, full URLs, or local relative paths.
            </p>
          </div>

          {/* Manual */}
          <div className="glass-panel p-8 space-y-5">
            <h3 className="text-xl font-bold tracking-tight text-white">Manual Drop-in</h3>
            <div className="flex items-center gap-4 p-4 bg-black/40 rounded-xl border border-white/10">
              <Settings className="w-5 h-5 text-zinc-400" />
              <div className="text-sm font-medium text-zinc-300">
                <span className="text-zinc-500">Path: </span>
                <code className="text-white">.github/skills/skill-name/</code>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Drop your SKILL.md (and optional scripts) into this directory. Modern agents automatically index these folders on startup — no restart needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
