"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function FloatingOrb() {
  const groupRef = useRef<THREE.Group | null>(null);
  const ringRef = useRef<THREE.Mesh | null>(null);
  const coreRef = useRef<THREE.Mesh | null>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.12;
      groupRef.current.rotation.x = Math.sin(t * 0.35) * 0.08;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.15;
      ringRef.current.rotation.x = Math.sin(t * 0.4) * 0.12;
    }

    if (coreRef.current) {
      const pulse = 1 + Math.sin(t * 1.6) * 0.02;
      coreRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={groupRef} position={[0.2, 0.35, 0]}>
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.15, 0.045, 14, 90]} />
        <meshPhysicalMaterial
          color="#2dd4bf"
          transparent
          opacity={0.22}
          emissive="#0f766e"
          emissiveIntensity={0.12}
          roughness={0.2}
          metalness={0.35}
        />
      </mesh>

      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.38, 1]} />
        <meshBasicMaterial color="#99f6e4" transparent opacity={0.16} />
      </mesh>

      <pointLight
        position={[0, 0, 2]}
        intensity={1.1}
        color="#2dd4bf"
        distance={6}
        decay={2}
      />
    </group>
  );
}

export default function Hero3DDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 hidden sm:block"
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 22 }}
        gl={{ antialias: true, alpha: true }}
        className="h-full w-full opacity-70"
      >
        <color attach="background" args={["#050505"]} />
        <ambientLight intensity={0.35} />
        <directionalLight position={[2, 2, 4]} intensity={0.45} color="#e2e8f0" />
        <FloatingOrb />
      </Canvas>
    </div>
  );
}