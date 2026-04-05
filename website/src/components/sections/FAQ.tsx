"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What exactly is a 'skill'?",
    answer: "A skill is a structured SKILL.md instruction file that teaches an AI agent how to perform a specific workflow. Think of it like a recipe card — the agent reads it on-the-fly to gain new capabilities without needing full model retraining or fine-tuning."
  },
  {
    question: "Is a skill the same as a prompt?",
    answer: "Not quite. A skill contains prompts, but it also includes situational metadata, folder structure, and optionally linked scripts or templates. It's a standardized, portable way to package a capability for reuse across different agents and IDEs."
  },
  {
    question: "When should I create a new skill vs just prompting?",
    answer: "Create a skill when you find yourself repeating the same complex instructions to an agent across different sessions. If it's a reusable logic pattern or a specific domain workflow, it belongs in a skill so you don't have to re-explain it every time."
  },
  {
    question: "Can skills call external tools or APIs?",
    answer: "Yes! Skills often define the logic for when and how to call tools via protocols like MCP (Model Context Protocol). They act as the orchestration layer between the agent's reasoning and the tool's execution."
  },
  {
    question: "How do I know if a skill is high quality?",
    answer: "A high-quality skill has clear success criteria, defined failure modes, zero ambiguity in language, and includes at least two real-world usage examples. It should work reliably even in long 50,000-token context sessions."
  },
  {
    question: "Do skills work in all AI coding tools?",
    answer: "Most modern agentic IDEs (Cursor, Claude Code, Windsurf, GitHub Copilot) support skill-like constructs. The SKILL.md format from this repo is specifically designed to be framework-agnostic and readable by any MCP-compatible agent."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-32">
      <div className="mb-12">
        <div className="inline-block px-3 py-1 rounded-full border border-white/20 bg-white/10 text-sm font-bold tracking-wider text-zinc-400 mb-4">
          COMMON QUESTIONS
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 glow-text text-white">Frequently Asked</h2>
        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
          New to agent skills? These are the questions everyone has when they're starting out.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`glass-panel p-2 transition-all duration-300 ${openIndex === i ? "border-white/10" : "border-transparent"}`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left group"
            >
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-xl border transition-colors ${openIndex === i ? "bg-white/10 border-white/20" : "bg-black/40 border-white/10"}`}>
                  <HelpCircle className={`w-5 h-5 transition-colors ${openIndex === i ? "text-white" : "text-zinc-500"}`} />
                </div>
                <span className={`font-bold tracking-tight transition-colors ${openIndex === i ? "text-white" : "text-zinc-300 group-hover:text-white"}`}>
                  {faq.question}
                </span>
              </div>
              <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all flex-shrink-0 ml-4 ${openIndex === i ? "bg-white/10 border-white/20" : "bg-white/5 border-white/10"}`}>
                {openIndex === i ? <Minus className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4 text-zinc-400" />}
              </div>
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="px-16 pb-8 text-sm text-zinc-400 leading-relaxed font-medium">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
