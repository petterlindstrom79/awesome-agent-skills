"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";

const trendData = [
  { name: "Autonomous Execution", value: 95, icon: "⚡" },
  { name: "Multi-Agent Teams", value: 88, icon: "🤝" },
  { name: "Agentic IDEs", value: 82, icon: "💻" },
  { name: "MCP Standard", value: 90, icon: "📡" },
  { name: "Hierarchical Memory", value: 75, icon: "🧠" },
  { name: "Context Compression", value: 70, icon: "🗜️" },
];

export default function Trends() {
  const d3Container = useRef(null);

  useEffect(() => {
    if (d3Container.current) {
      const svg = d3.select(d3Container.current);
      svg.selectAll("*").remove();

      const width = 800;
      const height = 400;
      const margin = { top: 20, right: 30, bottom: 40, left: 200 };
      const chartWidth = width - margin.left - margin.right;
      const chartHeight = height - margin.top - margin.bottom;

      const g = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      const x = d3.scaleLinear()
        .domain([0, 100])
        .range([0, chartWidth]);

      const y = d3.scaleBand()
        .domain(trendData.map(d => d.name))
        .range([0, chartHeight])
        .padding(0.4);

      g.append("g")
        .attr("class", "text-zinc-400 font-bold uppercase tracking-widest text-[10px]")
        .call(d3.axisLeft(y).tickSize(0).tickPadding(20))
        .select(".domain").remove();

      const bars = g.selectAll(".bar")
        .data(trendData)
        .join("g")
        .attr("class", "bar");

      bars.append("rect")
        .attr("y", (d: any) => y(d.name)!)
        .attr("height", y.bandwidth())
        .attr("fill", "#e4e4e7")
        .attr("rx", 4)
        .attr("width", chartWidth);

      bars.append("rect")
        .attr("y", (d: any) => y(d.name)!)
        .attr("height", y.bandwidth())
        .attr("fill", "#000")
        .attr("rx", 4)
        .attr("width", 0)
        .transition()
        .duration(1500)
        .attr("width", (d: any) => x(d.value));

      bars.append("text")
        .attr("x", (d: any) => x(d.value) + 10)
        .attr("y", (d: any) => y(d.name)! + y.bandwidth() / 2 + 4)
        .text((d: any) => `${d.value}% Adoption`)
        .attr("class", "text-[9px] font-bold uppercase tracking-widest text-zinc-400 opacity-0")
        .transition()
        .delay(1000)
        .attr("opacity", 1);
    }
  }, []);

  return (
    <section id="trends" className="py-24 bg-white dark:bg-black transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Trends & Capabilities (2026)</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
              The AI agent ecosystem has shifted from simple chat interfaces to autonomous, goal-driven systems. We're entering the era of the "Agent Leap."
            </p>
          </div>

          <div className="grid gap-4">
            {trendData.slice(0, 3).map((trend, i) => (
              <div key={trend.name} className="flex items-center gap-4 p-4 glass rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm">
                <span className="text-2xl">{trend.icon}</span>
                <div>
                  <h4 className="font-bold tracking-tight">{trend.name}</h4>
                  <p className="text-xs text-zinc-500 font-medium">Core adoption driver for 2026 agentic architectures.</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative glass-darker p-8 rounded-[3rem] border border-zinc-100 dark:border-zinc-800 aspect-video lg:aspect-auto h-full"
        >
          <div className="flex items-center gap-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-black dark:bg-white" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Projected Capability Adoption Index</span>
          </div>
          
          <svg
            ref={d3Container}
            width="100%"
            height="100%"
            viewBox="0 0 800 400"
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
