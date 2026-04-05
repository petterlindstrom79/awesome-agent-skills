"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useState, useRef, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Github } from "../Icons";

function Stars(props: any) {
  const ref = useRef<any>(null);
  const [sphere] = useState(() => (random as any).inSphere(new Float32Array(5000), { radius: 1.5 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#000000"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

// Shaders for monochrome look in dark mode
function Background() {
  return (
    <div className="absolute inset-0 z-0 bg-white dark:bg-[#09090b] transition-colors">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      <Background />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-semibold tracking-wider text-zinc-600 dark:text-zinc-400 uppercase">
            <span>2026 Edition</span>
            <span className="w-1 h-1 rounded-full bg-zinc-400"></span>
            <span>Agentic Systems</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-black dark:text-white">
            awesome-agent-skills
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed">
            The definitive curated source of truth for modular AI agent capabilities. 
            Built for builders, optimized for context, and standardized for the next leap in autonomous engineering.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#skills"
              className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full font-semibold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all text-sm md:text-base shadow-xl dark:shadow-white/10"
            >
              Start Exploring <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/heilcheng/awesome-agent-skills"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white dark:bg-black text-black dark:text-white border border-zinc-200 dark:border-zinc-800 rounded-full font-semibold flex items-center gap-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-sm md:text-base"
            >
              <Github className="w-4 h-4" /> View on GitHub
            </a>
            <a
              href="#contributing"
              className="px-8 py-4 text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white font-medium transition-colors text-sm md:text-base"
            >
              Contribute
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest">Scroll to dive in</span>
        <div className="w-px h-12 bg-gradient-to-b from-zinc-200 to-transparent dark:from-zinc-800" />
      </motion.div>
    </section>
  );
}
