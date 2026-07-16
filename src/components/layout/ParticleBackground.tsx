"use client";

import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Sparkles 
          count={150} 
          scale={20} 
          size={4} 
          speed={0.4} 
          opacity={0.5} 
          color="#f5e6d3" 
        />
        <Sparkles 
          count={100} 
          scale={20} 
          size={3} 
          speed={0.2} 
          opacity={0.3} 
          color="#8b5a2b" 
        />
      </Canvas>
    </div>
  );
}
