"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { useTranslations } from "@/lib/i18n";

const trendData = [
  { name: "Autonomous Execution", value: 95, description: "Agents complete multi-step goals without human intervention. Expected in 40% of enterprise apps by late 2026." },
  { name: "MCP Standard", value: 90, description: "Model Context Protocol (a shared language for AI tools) is becoming the universal adapter, seeing 8,000% growth." },
  { name: "Multi-Agent Teams", value: 88, description: "Specialized agents collaborate and delegate, moving from monolithic systems to orchestrator-worker patterns." },
  { name: "Agentic IDEs", value: 82, description: "Cursor, Windsurf, and Claude Code have redefined software development workflows with multi-file edit autonomy." },
  { name: "Hierarchical Memory", value: 75, description: "Agents maintain structured context, separating episodic recent history from long-term semantic graphing." },
  { name: "Context Compression", value: 70, description: "Techniques like semantic pruning and dynamic relevance filtering manage massive context windows affordably." },
];

export default function Trends() {
  const d3Container = useRef(null);
  const [isDark, setIsDark] = useState(false);
  const t = useTranslations();

  // Watch for dark mode changes
  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!d3Container.current) return;
    const svg = d3.select(d3Container.current);
    svg.selectAll("*").remove();

    const width = 700;
    const height = 360;
    const margin = { top: 8, right: 80, bottom: 8, left: 200 };
    const W = width - margin.left - margin.right;
    const H = height - margin.top - margin.bottom;

    const textColor = isDark ? "#9ca3af" : "#6b7280";
    const trackFill = isDark ? "#1f2937" : "#f3f4f6";
    const barFill = isDark ? "#e5e7eb" : "#111827";
    const labelColor = isDark ? "#9ca3af" : "#9ca3af";

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);
    const x = d3.scaleLinear().domain([0, 100]).range([0, W]);
    const y = d3.scaleBand().domain(trendData.map(d => d.name)).range([0, H]).padding(0.42);

    g.append("g")
      .call(d3.axisLeft(y).tickSize(0).tickPadding(12))
      .select(".domain").remove();
    g.selectAll(".tick text")
      .attr("fill", textColor)
      .attr("font-size", "12")
      .attr("font-family", "inherit");

    // Track
    g.selectAll(".track").data(trendData).join("rect")
      .attr("y", (d: any) => y(d.name)!)
      .attr("height", y.bandwidth())
      .attr("fill", trackFill)
      .attr("rx", 4)
      .attr("width", W);

    // Bar
    g.selectAll(".bar").data(trendData).join("rect")
      .attr("class", "bar")
      .attr("y", (d: any) => y(d.name)!)
      .attr("height", y.bandwidth())
      .attr("fill", barFill)
      .attr("rx", 4)
      .attr("width", 0)
      .transition().duration(1000).ease(d3.easeCubicOut)
      .delay((_: any, i: number) => i * 80)
      .attr("width", (d: any) => x(d.value));

    // Labels
    g.selectAll(".label").data(trendData).join("text")
      .attr("x", (d: any) => x(d.value) + 8)
      .attr("y", (d: any) => y(d.name)! + y.bandwidth() / 2 + 4)
      .text((d: any) => `${d.value}%`)
      .attr("fill", labelColor)
      .attr("font-size", "11")
      .attr("font-weight", "600")
      .attr("font-family", "inherit")
      .attr("opacity", 0)
      .transition().delay((_: any, i: number) => 500 + i * 80)
      .attr("opacity", 1);
  }, [isDark]);

  return (
    <section id="trends" className="scroll-mt-20 py-16 border-b border-neutral-200 dark:border-neutral-800">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">{t.trends.title}</h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl text-base leading-relaxed">
        The AI agent ecosystem has shifted from chat interfaces to autonomous, goal-driven systems. Here is what defines the landscape today.
      </p>

      <div className="grid lg:grid-cols-5 gap-8 items-start">
        {/* Descriptions */}
        <div className="lg:col-span-2 space-y-3">
          {trendData.map((trend) => (
            <div key={trend.name} className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900">
              <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-0.5">{trend.name}</h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{trend.description}</p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="lg:col-span-3 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900 p-6">
          <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-4">{t.trends.chartLabel}</p>
          <svg ref={d3Container} width="100%" viewBox={`0 0 700 360`} className="w-full" />
        </div>
      </div>
    </section>
  );
}
