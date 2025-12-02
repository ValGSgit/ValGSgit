"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Detect device capabilities for particle count
const getParticleCount = () => {
  if (typeof window === 'undefined') return 2000;
  // Check for mobile/low-end devices
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const hasLowMemory = 'deviceMemory' in navigator && (navigator as Navigator & { deviceMemory?: number }).deviceMemory !== undefined && (navigator as Navigator & { deviceMemory?: number }).deviceMemory! < 4;
  
  if (isMobile || hasLowMemory) return 1500;
  return 3000;
};

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const [particleCount] = useState(getParticleCount);
  
  const particlesPosition = useMemo(() => {
    const count = particleCount;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [particleCount]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#10b981"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const octaRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.3;
      meshRef.current.rotation.y = t * 0.2;
      meshRef.current.position.y = Math.sin(t * 0.5) * 0.3;
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.2;
      torusRef.current.rotation.z = t * 0.3;
      torusRef.current.position.y = Math.sin(t * 0.4 + 1) * 0.2;
    }
    
    if (octaRef.current) {
      octaRef.current.rotation.y = t * 0.4;
      octaRef.current.rotation.z = t * 0.2;
      octaRef.current.position.y = Math.sin(t * 0.6 + 2) * 0.25;
    }
  });

  return (
    <>
      <mesh ref={meshRef} position={[2, 0, -2]}>
        <icosahedronGeometry args={[0.5, 1]} />
        <meshStandardMaterial
          color="#06b6d4"
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
      
      <mesh ref={torusRef} position={[-2.5, 1, -3]}>
        <torusGeometry args={[0.4, 0.15, 16, 32]} />
        <meshStandardMaterial
          color="#10b981"
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>
      
      <mesh ref={octaRef} position={[3, -1, -4]}>
        <octahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial
          color="#f59e0b"
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>
    </>
  );
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <ParticleField />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
}
