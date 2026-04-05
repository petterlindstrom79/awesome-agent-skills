"use client";

import { motion } from "framer-motion";
import { FolderPlus, FileText, Code2, Layers, ArrowRight } from "lucide-react";

export default function CreatingSkills() {
  return (
    <section id="guides" className="py-24 bg-white dark:bg-black transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-xl mb-24">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Creating Skills</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
            Skills are instruction bundles that tell the agent how to perform specific tasks. They are not executable code—they are high-level semantic instructions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight">Anatomy of a Skill</h3>
              <p className="text-sm text-zinc-500 font-medium leading-relaxed">
                A project-ready skill follows this standardized filesystem pattern for maximum agentic discoverability.
              </p>
            </div>

            <div className="p-8 bg-zinc-50 dark:bg-zinc-950 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 space-y-6">
              {[
                { icon: <FolderPlus className="w-5 h-5" />, path: "skill-name/", desc: "A kebab-case folder" },
                { icon: <FileText className="w-5 h-5 text-black dark:text-white" />, path: "├── SKILL.md", desc: "Required: The brains" },
                { icon: <Code2 className="w-5 h-5" />, path: "├── scripts/", desc: "Optional: Helper logic" },
                { icon: <Layers className="w-5 h-5" />, path: "└── templates/", desc: "Optional: File outputs" },
              ].map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="p-3 bg-white dark:bg-black rounded-xl border border-zinc-100 dark:border-zinc-800 shadow-sm transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div>
                    <code className="text-sm font-bold tracking-tight text-black dark:text-zinc-300">{item.path}</code>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight">The SKILL.md Blueprint</h3>
              <p className="text-sm text-zinc-500 font-medium leading-relaxed">
                Metadata is parsed by the agent to determine when this skill should be active. Use clear, semantic labels.
              </p>
            </div>

            <div className="relative glass p-2 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 group h-fit">
              <div className="p-6 bg-zinc-50 dark:bg-[#111] rounded-[2rem] border border-zinc-200 dark:border-zinc-800 font-mono text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                <div className="space-y-1 mb-8 opacity-80">
                  <span className="text-zinc-400">---</span><br />
                  <span className="text-black dark:text-white font-bold">name:</span> your-skill-name<br />
                  <span className="text-black dark:text-white font-bold">description:</span> Accurate, clear use cases for the agent.<br />
                  <span className="text-zinc-400">---</span>
                </div>
                
                <h4 className="text-black dark:text-white font-bold mb-4"># Instructions</h4>
                <p className="mb-4">1. Use semantic headers for different stages.</p>
                <p className="mb-4">2. Provide explicit step-by-step logic.</p>
                <p>3. Define clear exit criteria and failure modes.</p>
              </div>
              
              <div className="absolute -bottom-8 -right-8 p-6 glass rounded-[2rem] border border-zinc-200 dark:border-zinc-800 flex items-center gap-4 hover:scale-105 transition-transform cursor-pointer shadow-2xl">
                <span className="text-xs font-bold uppercase tracking-widest">Get the Full Template</span>
                <div className="w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
