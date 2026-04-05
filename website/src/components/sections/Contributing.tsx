"use client";

import { motion } from "framer-motion";
import { GitPullRequest, MessageSquare, Heart, Sparkles, ArrowRight } from "lucide-react";
import { Github } from "../Icons";

export default function Contributing() {
  return (
    <section id="contributing" className="py-24 bg-white dark:bg-black transition-colors rounded-t-[3rem] -mt-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[10px] font-bold tracking-widest text-zinc-600 dark:text-zinc-400 uppercase">
                <Sparkles className="w-3 h-3" /> Community First
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Help Us Build the Future of Agentic Intelligence</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
                Awesome Agent Skills is a living, breathing repository. We rely on the community to discover, refine, and standardize the skills that power the next generation of AI assistants.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4 group">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center border border-zinc-100 dark:border-zinc-800 group-hover:scale-110 transition-transform">
                  <GitPullRequest className="w-5 h-5" />
                </div>
                <h4 className="font-bold tracking-tight">Open a PR</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Have a skill that's working well for you? Share it with the community. We'll review it and help you refine the instructions.
                </p>
              </div>
              <div className="space-y-4 group">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center border border-zinc-100 dark:border-zinc-800 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h4 className="font-bold tracking-tight">Join Discussions</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Talk about new agentic patterns, trends, and the Model Context Protocol in our GitHub Discussions forum.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-12 rounded-[3.5rem] border border-zinc-100 dark:border-zinc-800 shadow-2xl relative z-10"
            >
              <div className="flex flex-col items-center text-center space-y-8">
                <div className="w-20 h-20 bg-zinc-50 dark:bg-zinc-950 rounded-[2.5rem] flex items-center justify-center text-3xl shadow-inner mb-4">
                  🚀
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tight">Ready to Contribute?</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs mx-auto">
                    Check our style guide and submission template on GitHub to get started in minutes.
                  </p>
                </div>
                <div className="flex flex-col w-full gap-4 pt-4">
                  <a
                    href="https://github.com/heilcheng/awesome-agent-skills/blob/main/CONTRIBUTING.md"
                    className="w-full py-4 bg-black text-white dark:bg-white dark:text-black rounded-full font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    Read Guide <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/heilcheng/awesome-agent-skills"
                    className="w-full py-4 border border-zinc-200 dark:border-zinc-800 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                  >
                    <Github className="w-4 h-4" /> Go to Repository
                  </a>
                </div>
              </div>
            </motion.div>
            
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-zinc-100 dark:bg-zinc-900/30 rounded-full blur-[100px] -z-10" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-zinc-100 dark:bg-zinc-900/30 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
