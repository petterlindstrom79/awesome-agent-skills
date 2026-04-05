"use client";

import { Copy, ChevronDown, Command, ArrowUp } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full max-w-4xl px-8 py-12 pb-32">
      {/* Header Area */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-zinc-900 dark:text-zinc-50">Overview</h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            A simple, open format for giving agents new capabilities and expertise.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
            <Copy className="w-4 h-4" /> Copy page
          </button>
          <button className="hidden sm:flex items-center justify-center p-1.5 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300">
        <p className="text-base leading-relaxed mb-10">
          Agent Skills are folders of instructions, scripts, and resources that agents can discover and use to do things more accurately and efficiently.
        </p>

        <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6 text-zinc-900 dark:text-zinc-50" id="what-are-skills">Why Agent Skills?</h2>
        <p className="text-base leading-relaxed mb-6">
          Agents are increasingly capable, but often don't have the context they need to do real work reliably. Skills solve this by giving agents access to procedural knowledge and company-, team-, and user-specific context they can load on demand. Agents with access to a set of skills can extend their capabilities based on the task they're working on.
        </p>
        
        <p className="text-base leading-relaxed mb-6">
          <strong className="text-zinc-900 dark:text-zinc-50">For skill authors</strong>: Build capabilities once and deploy them across multiple agent products.
        </p>
        <p className="text-base leading-relaxed mb-6">
          <strong className="text-zinc-900 dark:text-zinc-50">For compatible agents</strong>: Support for skills lets end users give agents new capabilities out of the box.
        </p>
        <p className="text-base leading-relaxed mb-10">
          <strong className="text-zinc-900 dark:text-zinc-50">For teams and enterprises</strong>: Capture organizational knowledge in portable, version-controlled packages.
        </p>

        <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6 text-zinc-900 dark:text-zinc-50">What can Agent Skills enable?</h2>
        <ul className="space-y-3 list-disc pl-5 mb-10">
          <li className="text-base leading-relaxed">
            <strong className="text-zinc-900 dark:text-zinc-50">Domain expertise</strong>: Package specialized knowledge into reusable instructions, from legal review processes to data analysis pipelines.
          </li>
          <li className="text-base leading-relaxed">
            <strong className="text-zinc-900 dark:text-zinc-50">Tool orchestration</strong>: Define complex multi-step workflows that coordinate multiple API calls, CLI tools, or external services.
          </li>
          <li className="text-base leading-relaxed">
            <strong className="text-zinc-900 dark:text-zinc-50">Context delivery</strong>: Inject vital project-specific standards, code styles, and environment constraints directly into the agent's context window exactly when needed.
          </li>
        </ul>
      </div>

      {/* Floating Chat Input */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 md:left-[calc(50%+9rem)] w-[calc(100%-4rem)] max-w-3xl z-40">
        <div className="relative bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-lg flex items-center p-2">
          <input 
            type="text" 
            placeholder="Ask a question..." 
            className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-4 py-2 outline-none placeholder:text-zinc-400"
          />
          <div className="flex items-center gap-2 px-2 text-zinc-400">
            <kbd className="hidden sm:flex items-center gap-1 font-sans text-[10px] font-bold"><Command className="w-3 h-3" /></kbd>
            <button className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 flex items-center justify-center transition-colors">
              <ArrowUp className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
