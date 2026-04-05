import { Code2, BookOpen } from "lucide-react";

export default function WhatIsIt() {
  return (
    <section id="what-are-skills" className="scroll-mt-32 relative">
      <div className="absolute -inset-10 bg-white/5 dark:bg-white/[0.02] rounded-[3rem] -z-10 blur-xl" />
      
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <div className="inline-block px-3 py-1 rounded-full border border-white/20 bg-white/10 text-sm font-bold tracking-wider text-purple-400">
            THE CONCEPT
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight glow-text">
            What exactly is an <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Agent Skill?</span>
          </h2>
          <div className="space-y-4 text-zinc-300 font-medium text-lg leading-relaxed content-text">
            <p>
              Imagine if every time you cooked a new dish, you didn't just learn the recipe—you magically downloaded the muscle memory, the tools, and the exact timing required to make it perfectly every single time.
            </p>
            <p>
              An <strong>Agent Skill</strong> is exactly that for an AI. 
            </p>
            <p>
              Instead of just giving an AI a general "cookbook" (like a giant prompt), a skill is a modular package that gives the AI the specific tools (API connections), the exact context (documentation), and the explicit recipes (workflows) to achieve a highly specific goal—like pushing a repo, designing a UI, or auditing a smart contract.
            </p>
          </div>
        </div>

        <div className="flex-1 glass-panel p-8 w-full">
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-2xl bg-black/40 border border-white/10 glow-text shadow-[0_0_20px_rgba(251,146,60,0.2)]">
                <BookOpen className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">The Old Way (Cookbook)</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Pasting a massive, generic prompt into the context window. The AI has to "read the cookbook" every time and guess which tools to use. It frequently hallucinates or gets confused by complex workflows.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start relative">
              <div className="p-3 rounded-2xl bg-white/10 border border-white/20 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                <Code2 className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">The New Way (Skills)</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Providing a structured folder with an exact `SKILL.md` file, validated examples, and tied directly to MCP servers or local functions. The AI acts deterministically because it inherently "knows" the tool architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
