"use client";

import { motion } from "framer-motion";
import { GitPullRequest, MessageSquare, Sparkles, ArrowRight } from "lucide-react";
import { Github } from "../Icons";

export default function Contributing() {
  return (
    <section id="contributing" className="scroll-mt-32">
      <div className="glass-panel p-12 md:p-16 relative overflow-hidden">
        {/* Glow orbs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 text-[10px] font-bold tracking-widest text-purple-400 uppercase">
                <Sparkles className="w-3 h-3" /> Community First
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white glow-text">
                Help build the future of agentic AI
              </h2>
              <p className="text-lg text-zinc-400 font-medium leading-relaxed">
                awesome-agent-skills is a living, breathing repository. Real people — developers, researchers, and tinkerers — discover, refine, and standardize the skills that power the next generation of AI assistants.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3 group">
                <div className="w-12 h-12 glass-panel rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GitPullRequest className="w-5 h-5 text-green-400" />
                </div>
                <h4 className="font-bold tracking-tight text-white">Open a PR</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Got a skill that's working for you? Share it. We'll review it and help you polish the instructions.
                </p>
              </div>
              <div className="space-y-3 group">
                <div className="w-12 h-12 glass-panel rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5 text-blue-400" />
                </div>
                <h4 className="font-bold tracking-tight text-white">Join Discussions</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Discuss new patterns, trends, and MCP workflows in our GitHub Discussions tab.
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-black/40 border border-white/10 rounded-[2.5rem] p-12 flex flex-col items-center text-center space-y-8 backdrop-blur-xl"
          >
            <div className="w-20 h-20 bg-white/5 rounded-[2rem] flex items-center justify-center text-4xl">
              🚀
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold tracking-tight text-white">Ready to Contribute?</h3>
              <p className="text-sm text-zinc-500 max-w-xs mx-auto">
                Check the style guide and submission template. You can go from idea to merged PR in under an hour.
              </p>
            </div>
            <div className="flex flex-col w-full gap-3">
              <a
                href="https://github.com/heilcheng/awesome-agent-skills/blob/main/CONTRIBUTING.md"
                className="w-full py-4 bg-white text-black rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors text-sm"
              >
                Read Contributing Guide <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/heilcheng/awesome-agent-skills"
                className="w-full py-4 border border-white/10 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors text-sm text-zinc-300"
              >
                <Github className="w-4 h-4" /> Go to Repository
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
