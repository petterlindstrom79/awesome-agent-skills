"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows, Sphere, Trail } from "@react-three/drei";
import * as THREE from "three";

function SkillDocument() {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={meshRef}>
        {/* Core Skill Representation */}
        <mesh>
          <boxGeometry args={[1.4, 1.8, 0.1]} />
          <meshPhysicalMaterial 
            color="#ffffff"
            transmission={0.9}
            opacity={1}
            metalness={0}
            roughness={0}
            ior={1.5}
            thickness={0.5}
            specularIntensity={1}
            emissive="#ffffff"
            emissiveIntensity={0.1}
          />
        </mesh>
        
        {/* Glowing edge wireframe */}
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(1.4, 1.8, 0.1)]} />
          <lineBasicMaterial color="#3b82f6" transparent opacity={0.6} />
        </lineSegments>

        {/* Inner lines representing code/instructions */}
        {[-0.5, -0.2, 0.1, 0.4].map((y, i) => (
          <mesh key={i} position={[-0.3 + (i%2)*0.1, y, 0.06]}>
            <boxGeometry args={[0.6 - (i%2)*0.2, 0.04, 0.02]} />
            <meshBasicMaterial color="#60a5fa" />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function DataPacket({ target, delay, color }: { target: THREE.Vector3, delay: number, color: string }) {
  const ref = useRef<THREE.Group>(null);
  const startPos = new THREE.Vector3(0, 0, 0);
  
  useFrame((state) => {
    if (!ref.current) return;
    const t = (state.clock.elapsedTime * 0.5 + delay) % 1;
    // Ease-in-out curve
    const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    
    // Interpolate from center to target
    ref.current.position.lerpVectors(startPos, target, ease);
    
    // Fade at ends
    const opacity = ease < 0.1 ? ease * 10 : ease > 0.9 ? (1 - ease) * 10 : 1;
    ref.current.scale.setScalar(opacity);
  });

  return (
    <group ref={ref}>
      <Trail width={0.5} length={4} color={new THREE.Color(color)} attenuation={(t) => t * t}>
        <mesh>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshBasicMaterial color={color} />
        </mesh>
      </Trail>
    </group>
  );
}

function AgentNode({ position, color, label }: { position: [number, number, number], color: string, label: string }) {
  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        <Sphere args={[0.35, 32, 32]}>
          <meshStandardMaterial 
            color={color} 
            emissive={color} 
            emissiveIntensity={0.4} 
            roughness={0.2} 
            metalness={0.8} 
          />
        </Sphere>
        {/* Subtle halo */}
        <Sphere args={[0.5, 16, 16]}>
          <meshBasicMaterial color={color} transparent opacity={0.1} wireframe />
        </Sphere>
      </group>
    </Float>
  );
}

export default function SkillVisualization() {
  const agents = useMemo(() => [
    { pos: new THREE.Vector3(-3, 1.5, -1), color: "#10b981", delay: 0 },
    { pos: new THREE.Vector3(3, 1, 0), color: "#f59e0b", delay: 0.3 },
    { pos: new THREE.Vector3(-2, -2, 1), color: "#8b5cf6", delay: 0.6 },
    { pos: new THREE.Vector3(2.5, -1.5, -2), color: "#ec4899", delay: 0.9 },
  ], []);

  return (
    <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 relative shadow-inner">
      {/* Overlay Text */}
      <div className="absolute inset-0 pointer-events-none flex items-start justify-center pt-6">
        <div className="bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-xs font-semibold text-neutral-600 dark:text-neutral-400 tracking-wide uppercase shadow-sm">
          Dynamic Skill Loading
        </div>
      </div>

      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} intensity={1} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <SkillDocument />
        
        {agents.map((agent, i) => (
          <group key={i}>
            <AgentNode position={[agent.pos.x, agent.pos.y, agent.pos.z]} color={agent.color} label={`Agent ${i+1}`} />
            <DataPacket target={agent.pos} delay={agent.delay} color={agent.color} />
          </group>
        ))}

        <Environment preset="city" />
        <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2} far={4} />
      </Canvas>
    </div>
  );
}
