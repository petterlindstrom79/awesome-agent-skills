"use client";

import { motion } from "framer-motion";
import { FolderPlus, FileText, Code2, Layers, ArrowRight } from "lucide-react";

export default function CreatingSkills() {
  return (
    <section id="creating-skills" className="scroll-mt-32">
      <div className="mb-12">
        <div className="inline-block px-3 py-1 rounded-full border border-white/20 bg-white/10 text-sm font-bold tracking-wider text-yellow-400 mb-4">
          BUILD YOUR OWN
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 glow-text text-white">Creating Skills</h2>
        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
          Skills aren't code — they're <em>curated instructions</em>. Think of them like very well-written README files that AI agents can truly internalize and act on.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Anatomy */}
        <div className="glass-panel p-8 space-y-8">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold tracking-tight text-white">Anatomy of a Skill</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Every skill lives in a predictable folder structure so any agent can discover it automatically.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { icon: <FolderPlus className="w-5 h-5 text-blue-400" />, path: "my-skill/", desc: "A kebab-case root folder" },
              { icon: <FileText className="w-5 h-5 text-purple-400" />, path: "├── SKILL.md", desc: "Required — the brains of the skill" },
              { icon: <Code2 className="w-5 h-5 text-green-400" />, path: "├── scripts/", desc: "Optional — helper scripts" },
              { icon: <Layers className="w-5 h-5 text-orange-400" />, path: "└── templates/", desc: "Optional — file output templates" },
            ].map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-5 group p-3 rounded-2xl hover:bg-white/5 transition-colors"
              >
                <div className="p-3 bg-black/50 rounded-xl border border-white/10 transition-transform group-hover:scale-110">
                  {item.icon}
                </div>
                <div>
                  <code className="text-sm font-bold tracking-tight text-zinc-200">{item.path}</code>
                  <p className="text-[11px] uppercase font-bold tracking-widest text-zinc-500 mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SKILL.md Blueprint */}
        <div className="glass-panel p-8 space-y-6 relative">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold tracking-tight text-white">The SKILL.md Blueprint</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              The SKILL.md front-matter tells the agent exactly when to activate this skill. Be precise.
            </p>
          </div>
          <div className="bg-black/60 rounded-2xl border border-white/10 p-6 font-mono text-sm leading-8 text-zinc-400">
            <span className="text-zinc-600">---</span><br />
            <span className="text-blue-400 font-bold">name:</span> <span className="text-green-400">your-skill-name</span><br />
            <span className="text-blue-400 font-bold">description:</span> <span className="text-zinc-300">Clear, accurate use-case summary.</span><br />
            <span className="text-zinc-600">---</span><br /><br />
            <span className="text-purple-400 font-bold"># Instructions</span><br />
            <span className="text-zinc-500">1. Use explicit headers for each stage.</span><br />
            <span className="text-zinc-500">2. Provide step-by-step logic.</span><br />
            <span className="text-zinc-500">3. Define clear success & failure criteria.</span>
          </div>
          <a
            href="https://github.com/heilcheng/awesome-agent-skills"
            className="w-full py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl font-bold flex items-center justify-center gap-2 transition-colors text-white text-sm"
          >
            Get the Full Template <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
