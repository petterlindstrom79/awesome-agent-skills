"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Github } from "../Icons";
import Link from "next/link";
import * as THREE from "three";
import { useTranslations } from "@/lib/i18n";

function generateSpherePositions(count: number, radius: number): Float32Array {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = Math.cbrt(Math.random()) * radius;
    const sinPhi = Math.sin(phi);
    positions[i * 3] = r * sinPhi * Math.cos(theta);
    positions[i * 3 + 1] = r * sinPhi * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
}

function Starfield() {
  const ref = useRef<THREE.Points>(null);
  const sphere = useMemo(() => generateSpherePositions(2000, 1.5), []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 12;
      ref.current.rotation.y -= delta / 18;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#a1a1aa"
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="relative min-h-[80vh] flex flex-col items-start justify-center pt-12 pb-20 border-b border-neutral-200 dark:border-neutral-800">
      {/* Subtle canvas background */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-40">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Starfield />
        </Canvas>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500 inline-block" />
          <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 tracking-wide">{t.hero.badge}</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-neutral-900 dark:text-white mb-6 max-w-3xl leading-none">
          Awesome<br />Agent Skills
        </h1>

        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-xl leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-3">
          <Link
            href="#directory"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-semibold hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors"
          >
            {t.hero.browseBtn} <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://github.com/heilcheng/awesome-agent-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
          >
            <Github className="w-4 h-4" /> {t.hero.githubBtn}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
