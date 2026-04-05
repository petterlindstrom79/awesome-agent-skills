"use client";

import { motion, Easing } from "framer-motion";
import { UserCircle, Cpu, FileJson, Sparkles } from "lucide-react";

export default function AgentFlowChart() {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" as Easing, repeat: Infinity, repeatType: "loop" as const, repeatDelay: 1 }
    }
  };

  const nodeClass = "w-full h-full flex flex-col items-center justify-center rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm";
  const iconClass = "w-6 h-6 md:w-7 md:h-7 text-neutral-600 dark:text-neutral-400 mb-1.5 md:mb-2";
  const labelClass = "text-[10px] md:text-xs font-semibold text-neutral-700 dark:text-neutral-300 text-center leading-tight";

  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-square max-h-[400px] flex items-center justify-center bg-neutral-50/50 dark:bg-neutral-900/20 rounded-3xl border border-neutral-200/50 dark:border-neutral-800/50 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* SVG Path lines mapped responsive viewBox */}
      <svg viewBox="0 0 500 400" className="absolute inset-0 w-full h-full z-0 pointer-events-none" preserveAspectRatio="xMidYMid meet" style={{ filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))" }}>
        {/* User to Agent */}
        <path d="M 120,200 L 210,200" stroke="#3b82f6" strokeWidth="2.5" fill="none" strokeDasharray="4 4" className="opacity-30 dark:opacity-50" />
        <motion.path d="M 120,200 L 210,200" stroke="#3b82f6" strokeWidth="3.5" fill="none" variants={pathVariants} initial="hidden" animate="visible" />
        
        {/* Agent to Skill */}
        <path d="M 300,200 C 340,200 340,120 380,120" stroke="#8b5cf6" strokeWidth="2.5" fill="none" strokeDasharray="4 4" className="opacity-30 dark:opacity-50" />
        <motion.path d="M 300,200 C 340,200 340,120 380,120" stroke="#8b5cf6" strokeWidth="3.5" fill="none" variants={pathVariants} initial="hidden" animate="visible" transition={{ delay: 0.5 }} />

        {/* Agent to Action */}
        <path d="M 300,200 C 340,200 340,280 380,280" stroke="#10b981" strokeWidth="2.5" fill="none" strokeDasharray="4 4" className="opacity-30 dark:opacity-50" />
        <motion.path d="M 300,200 C 340,200 340,280 380,280" stroke="#10b981" strokeWidth="3.5" fill="none" variants={pathVariants} initial="hidden" animate="visible" transition={{ delay: 1 }} />
      </svg>

      {/* ForeignObjects for responsive HTML nodes */}
      <svg viewBox="0 0 500 400" className="absolute inset-0 w-full h-full z-20 pointer-events-none" preserveAspectRatio="xMidYMid meet">
        
        {/* User Node */}
        <foreignObject x="30" y="155" width="90" height="90" className="pointer-events-auto">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="w-full h-full">
            <div className={nodeClass}>
              <UserCircle className={iconClass} />
              <span className={labelClass}>User<br/>Prompt</span>
            </div>
          </motion.div>
        </foreignObject>

        {/* Agent Node */}
        <foreignObject x="210" y="155" width="90" height="90" className="pointer-events-auto">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="w-full h-full">
            <div className={`${nodeClass} border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.1)]`}>
              <Cpu className={`${iconClass} text-blue-500`} />
              <span className={labelClass}>AI Agent<br/>Router</span>
            </div>
          </motion.div>
        </foreignObject>

        {/* Skill Node */}
        <foreignObject x="380" y="75" width="90" height="90" className="pointer-events-auto">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="w-full h-full">
            <div className={`${nodeClass} border-purple-500/50 shadow-[0_0_15px_rgba(139,92,246,0.1)]`}>
               <FileJson className={`${iconClass} text-purple-500`} />
              <span className={labelClass}>SKILL.md<br/>Loaded</span>
            </div>
          </motion.div>
        </foreignObject>

        {/* Output Node */}
        <foreignObject x="380" y="235" width="90" height="90" className="pointer-events-auto">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="w-full h-full">
            <div className={`${nodeClass} border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.1)]`}>
              <Sparkles className={`${iconClass} text-emerald-500`} />
              <span className={labelClass}>Task<br/>Executed</span>
            </div>
          </motion.div>
        </foreignObject>

      </svg>
    </div>
  );
}
