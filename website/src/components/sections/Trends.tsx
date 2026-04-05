"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";

const trendData = [
  { name: "Autonomous Execution", value: 95, icon: "⚡", summary: "Agents complete multi-step goals without human intervention at each step." },
  { name: "Multi-Agent Teams", value: 88, icon: "🤝", summary: "Specialized agents collaborate and delegate to each other dynamically." },
  { name: "MCP Standard", value: 90, icon: "📡", summary: "The Model Context Protocol is becoming the universal adapter for tool-calling." },
  { name: "Agentic IDEs", value: 82, icon: "💻", summary: "Cursor, Windsurf, and Claude Code have redefined how developers write software." },
  { name: "Hierarchical Memory", value: 75, icon: "🧠", summary: "Agents maintain context across sessions with structured long-term memory." },
  { name: "Context Compression", value: 70, icon: "🗜️", summary: "Novel techniques that let agents process entire codebases in a single pass." },
];

export default function Trends() {
  const d3Container = useRef(null);

  useEffect(() => {
    if (d3Container.current) {
      const svg = d3.select(d3Container.current);
      svg.selectAll("*").remove();

      const width = 800;
      const height = 380;
      const margin = { top: 10, right: 100, bottom: 10, left: 220 };
      const chartWidth = width - margin.left - margin.right;
      const chartHeight = height - margin.top - margin.bottom;

      const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

      const x = d3.scaleLinear().domain([0, 100]).range([0, chartWidth]);
      const y = d3.scaleBand().domain(trendData.map(d => d.name)).range([0, chartHeight]).padding(0.45);

      // Clean Y axis labels
      g.append("g")
        .call(d3.axisLeft(y).tickSize(0).tickPadding(16))
        .select(".domain").remove();

      g.selectAll(".tick text")
        .attr("fill", "#71717a")
        .attr("font-size", "12")
        .attr("font-weight", "600");

      // Background track
      g.selectAll(".track")
        .data(trendData)
        .join("rect")
        .attr("class", "track")
        .attr("y", (d: any) => y(d.name)!)
        .attr("height", y.bandwidth())
        .attr("fill", "rgba(255,255,255,0.04)")
        .attr("rx", 6)
        .attr("width", chartWidth);

      // Animated fill bar
      g.selectAll(".bar")
        .data(trendData)
        .join("rect")
        .attr("class", "bar")
        .attr("y", (d: any) => y(d.name)!)
        .attr("height", y.bandwidth())
        .attr("fill", "rgba(255,255,255,0.8)")
        .attr("rx", 6)
        .attr("width", 0)
        .transition()
        .duration(1200)
        .ease(d3.easeCubicOut)
        .delay((_: any, i: number) => i * 80)
        .attr("width", (d: any) => x(d.value));

      // Percentage labels
      g.selectAll(".label")
        .data(trendData)
        .join("text")
        .attr("class", "label")
        .attr("x", (d: any) => x(d.value) + 12)
        .attr("y", (d: any) => y(d.name)! + y.bandwidth() / 2 + 4)
        .text((d: any) => `${d.value}%`)
        .attr("fill", "#52525b")
        .attr("font-size", "11")
        .attr("font-weight", "700")
        .attr("opacity", 0)
        .transition()
        .delay((_: any, i: number) => 600 + i * 80)
        .attr("opacity", 1);
    }
  }, []);

  return (
    <section id="trends" className="scroll-mt-32">
      <div className="mb-12">
        <div className="inline-block px-3 py-1 rounded-full border border-white/20 bg-white/10 text-sm font-bold tracking-wider text-cyan-400 mb-4">
          2026 LANDSCAPE
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 glow-text text-white">Trends & Capabilities</h2>
        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
          The AI agent ecosystem isn't just growing — it's <em>completely reshaping</em> how software gets built. Here's what matters right now.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 items-start">
        {/* Trend cards — left side */}
        <div className="lg:col-span-2 space-y-4">
          {trendData.map((trend, i) => (
            <motion.div
              key={trend.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-panel p-5 flex items-start gap-4"
            >
              <span className="text-2xl mt-0.5">{trend.icon}</span>
              <div>
                <h4 className="font-bold tracking-tight text-white text-sm mb-1">{trend.name}</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">{trend.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* D3 chart — right side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-3 glass-panel p-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-white" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Projected Adoption Index — 2026</span>
          </div>
          <svg
            ref={d3Container}
            width="100%"
            height="100%"
            viewBox="0 0 800 380"
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
