"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What exactly is a 'skill'?",
    answer: "A skill is a structured SKILL.md instruction file that teaches an AI agent how to perform a specific workflow. Think of it like a recipe card — the agent reads it on launch to gain new, reliable capabilities without model retraining or fine-tuning.",
  },
  {
    question: "Is a skill the same as a prompt?",
    answer: "Not quite. A skill contains prompts, but it also includes situational metadata, folder structure, and optionally linked scripts or templates. It is a standardized, portable way to package a capability for reuse across different agents and IDEs.",
  },
  {
    question: "When should I create a new skill instead of just prompting?",
    answer: "Create a skill when you keep repeating the same complex instructions to an agent across different sessions. If it is a reusable logic pattern or a specific domain workflow, it belongs in a skill so you never have to re-explain it.",
  },
  {
    question: "Can skills call external tools or APIs?",
    answer: "Yes. Skills often define the logic for when and how to call tools via the Model Context Protocol (MCP). They act as the orchestration layer between the agent's reasoning and the tool's execution.",
  },
  {
    question: "How do I evaluate if a skill is high quality?",
    answer: "A high-quality skill has clear success criteria, defined failure modes, zero ambiguity in language, and at least two real-world usage examples. It should work reliably even in long 50,000-token context sessions.",
  },
  {
    question: "Do skills work across all AI coding tools?",
    answer: "Most modern agentic IDEs — Cursor, Claude Code, Windsurf, GitHub Copilot — support skill-like constructs. The SKILL.md format in this repo is designed to be framework-agnostic and readable by any MCP-compatible agent.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 py-16 border-b border-neutral-200 dark:border-neutral-800">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">Frequently Asked</h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl text-base leading-relaxed">
        New to agent skills? These are the most common questions.
      </p>

      <div className="divide-y divide-neutral-200 dark:divide-neutral-800 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white dark:bg-neutral-900">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
            >
              <span className={`text-sm font-medium ${openIndex === i ? "text-neutral-900 dark:text-white" : "text-neutral-700 dark:text-neutral-300"}`}>
                {faq.question}
              </span>
              <div className="ml-4 shrink-0 w-5 h-5 flex items-center justify-center text-neutral-400">
                {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-4 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
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
