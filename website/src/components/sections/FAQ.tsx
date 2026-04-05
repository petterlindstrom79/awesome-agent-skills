"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is a 'skill'?",
    answer: "A skill is a high-level instruction file (SKILL.md) that teaches an AI agent how to perform a specific workflow. It's like a recipe card—the AI reads it on-the-fly to gain new capabilities without needing full model retraining or fine-tuning."
  },
  {
    question: "Is a skill the same as a prompt?",
    answer: "Not exactly. While it contains prompts, a skill also includes situational metadata, structure, and potentially linked scripts or templates. It's a standardized, portable way to package a capability for reuse across different agents."
  },
  {
    question: "When should I create a new skill?",
    answer: "Create a skill when you find yourself repeating the same complex instructions to an agent across different sessions. If it's a re-usable logic pattern or a specific domain workflow, it belongs in a skill."
  },
  {
    question: "Can skills call external tools?",
    answer: "Yes. Skills often define the *logic* for when and how to call tools via protocols like MCP (Model Context Protocol). They act as the orchestration layer between the agent's reasoning and the tool's execution."
  },
  {
    question: "How do I know if a skill is 'high quality'?",
    answer: "A high-quality skill has clear success criteria, defined failure modes, zero ambiguity, and works reliably in long-context sessions. Check our Quality Standards section for the full checklist."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#fafafa] dark:bg-[#111] transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <p className="text-zinc-600 dark:text-zinc-400 font-medium">
            Everything you need to know about the modern agentic ecosystem.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass rounded-[2rem] border border-zinc-100 dark:border-zinc-800 p-2"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white dark:bg-black rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-800">
                    <HelpCircle className="w-5 h-5 text-black dark:text-white" />
                  </div>
                  <span className="font-bold tracking-tight">{faq.question}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center transition-transform duration-300">
                  {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-14 pb-8 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
