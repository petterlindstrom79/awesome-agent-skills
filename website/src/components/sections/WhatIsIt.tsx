"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";

export default function WhatIsIt() {
  const d3Container = useRef(null);

  useEffect(() => {
    if (d3Container.current) {
      const svg = d3.select(d3Container.current);
      svg.selectAll("*").remove();

      const width = 800;
      const height = 400;
      const nodes = [
        { id: "User", group: 1, label: "User" },
        { id: "Agent", group: 2, label: "Agent" },
        { id: "Tools", group: 3, label: "Tools" },
        { id: "Skills", group: 4, label: "Skills" },
        { id: "Context", group: 5, label: "Context" },
      ];

      const links = [
        { source: "User", target: "Agent" },
        { source: "Agent", target: "Tools" },
        { source: "Agent", target: "Skills" },
        { source: "Agent", target: "Context" },
        { source: "Skills", target: "Tools" },
      ];

      const simulation = d3.forceSimulation(nodes as any)
        .force("link", d3.forceLink(links).id((d: any) => d.id).distance(150))
        .force("charge", d3.forceManyBody().strength(-300))
        .force("center", d3.forceCenter(width / 2, height / 2));

      const link = svg.append("g")
        .attr("stroke", "#e4e4e7")
        .attr("stroke-opacity", 0.6)
        .selectAll("line")
        .data(links)
        .join("line")
        .attr("stroke-width", 1.5);

      const node = svg.append("g")
        .selectAll("g")
        .data(nodes)
        .join("g");

      node.append("circle")
        .attr("r", 12)
        .attr("fill", (d: any) => d.group === 4 ? "#000" : "#fff")
        .attr("stroke", "#000")
        .attr("stroke-width", 2);

      node.append("text")
        .text((d: any) => d.label)
        .attr("x", 0)
        .attr("y", 25)
        .attr("text-anchor", "middle")
        .attr("class", "text-[10px] uppercase tracking-tighter font-bold dark:fill-white fill-black");

      simulation.on("tick", () => {
        link
          .attr("x1", (d: any) => d.source.x)
          .attr("y1", (d: any) => d.source.y)
          .attr("x2", (d: any) => d.target.x)
          .attr("y2", (d: any) => d.target.y);

        node
          .attr("transform", (d: any) => `translate(${d.x},${d.y})`);
      });
    }
  }, []);

  return (
    <section id="what-is-it" className="py-24 bg-white dark:bg-black transition-colors">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white">
              What This Repository Is
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
              Think of **Agent Skills** as a high-fidelity "how-to guide" for AI assistants. Instead of requiring the AI to memorize every workflow upfront, skills provide situational capabilities as they are needed—reducing noise and increasing reliability.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 glass rounded-2xl border border-zinc-100 dark:border-zinc-800">
              <h3 className="font-bold text-lg mb-2 uppercase tracking-widest text-[10px] text-zinc-500">The Problem</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Generic agents hallucinate when performing complex, multi-step engineering tasks. They lack the specific domain knowledge of your project's architecture, dependencies, and style guides.
              </p>
            </div>
            
            <div className="p-6 glass rounded-2xl border border-zinc-100 dark:border-zinc-800">
              <h3 className="font-bold text-lg mb-2 uppercase tracking-widest text-[10px] text-zinc-500">The Solution</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Skills are modular instruction sets (SKILL.md) that teach an agent how to execute specific workflows seamlessly across Claude, Antigravity, and other modern agentic environments.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative glass-darker rounded-[2.5rem] p-8 aspect-square flex items-center justify-center border border-zinc-100 dark:border-zinc-800"
        >
          <svg
            ref={d3Container}
            width="100%"
            height="100%"
            viewBox="0 0 800 400"
            className="w-full h-full"
          />
          <div className="absolute top-8 left-8 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-black dark:bg-white animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Agentic Interoperability Map</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
