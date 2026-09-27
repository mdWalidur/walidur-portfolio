"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, OrbitControls } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

type ThemeColors = {
  accent: string;
  accentSoft: string;
  accentDark: string;
};

const FALLBACK_COLORS: ThemeColors = {
  accent: "#c5a059",
  accentSoft: "#e8d0a3",
  accentDark: "#b8860b",
};

/* =========================================================
   THEME COLORS
   ========================================================= */

function readThemeColors(): ThemeColors {
  if (typeof document === "undefined") {
    return FALLBACK_COLORS;
  }

  const styles = getComputedStyle(document.documentElement);

  return {
    accent:
      styles.getPropertyValue("--accent").trim() ||
      FALLBACK_COLORS.accent,

    accentSoft:
      styles.getPropertyValue("--accent-soft").trim() ||
      FALLBACK_COLORS.accentSoft,

    accentDark:
      styles.getPropertyValue("--accent-dark").trim() ||
      FALLBACK_COLORS.accentDark,
  };
}

/* =========================================================
   LIVE THEME COLORS
   ========================================================= */

function useThemeColors() {
  const [colors, setColors] =
    useState<ThemeColors>(FALLBACK_COLORS);

  useEffect(() => {
    const updateColors = () => {
      setColors(readThemeColors());
    };

    updateColors();

    const observer = new MutationObserver((mutations) => {
      const themeChanged = mutations.some(
        (mutation) =>
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
      );

      if (themeChanged) {
        updateColors();
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return colors;
}

/* =========================================================
   COLOR LERP
   ========================================================= */

function useSmoothColor(
  color: string,
  duration = 0.8
) {
  const current = useMemo(
    () => new THREE.Color(color),
    [color]
  );

  const target = useMemo(
    () => new THREE.Color(color),
    [color]
  );

  useFrame((_, delta) => {
    current.lerp(
      target,
      1 - Math.exp(-delta / duration)
    );
  });

  return current;
}

/* =========================================================
   RESPONSIVE DEVICE DETECTION
   ========================================================= */

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(max-width: 767px)"
    );

    const update = () => {
      setIsMobile(mediaQuery.matches);
    };

    update();

    mediaQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, []);

  return isMobile;
}

/* =========================================================
   NETWORK STRUCTURE
   ========================================================= */

function NetworkStructure({
  colors,
  isMobile,
}: {
  colors: ThemeColors;
  isMobile: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);

  const accent = useSmoothColor(colors.accent);
  const accentSoft = useSmoothColor(colors.accentSoft);
  const accentDark = useSmoothColor(colors.accentDark);

  const nodes = [
    [-2.2, 0.8, 0],
    [-1.1, 1.5, -0.2],
    [0, 1, 0.1],
    [1.2, 1.6, -0.2],
    [2.2, 0.7, 0],
    [-1.8, -0.4, -0.2],
    [-0.6, -1.1, 0],
    [0.7, -0.8, -0.2],
    [1.8, -0.3, 0],
  ] as [number, number, number][];

  const connections: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [0, 5],
    [1, 6],
    [2, 6],
    [2, 7],
    [3, 7],
    [4, 8],
    [5, 6],
    [6, 7],
    [7, 8],
  ];

  useFrame((state) => {
    if (!groupRef.current) return;

    const targetX = state.pointer.y * 0.12;
    const targetY = state.pointer.x * 0.18;

    groupRef.current.rotation.x =
      THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetX,
        0.025
      );

    groupRef.current.rotation.y =
      THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetY,
        0.025
      );

    groupRef.current.rotation.z =
      Math.sin(
        state.clock.elapsedTime * 0.18
      ) * 0.015;
  });

  return (
    <group
      ref={groupRef}
      scale={isMobile ? 0.78 : 1.15}
      position={isMobile ? [0, 0.15, 0] : [0, 0, 0]}
    >
      {/* Connection lines */}

      {connections.map(([from, to], index) => (
        <Line
          key={`${from}-${to}-${index}`}
          points={[nodes[from], nodes[to]]}
          color={accent}
          transparent
          opacity={isMobile ? 0.12 : 0.2}
          lineWidth={isMobile ? 0.5 : 0.7}
        />
      ))}

      {/* Nodes */}

      {nodes.map((position, index) => (
        <Float
          key={index}
          speed={0.7 + index * 0.03}
          rotationIntensity={isMobile ? 0.08 : 0.15}
          floatIntensity={isMobile ? 0.16 : 0.25}
        >
          <mesh position={position}>
            <sphereGeometry
              args={[
                isMobile ? 0.035 : 0.045,
                16,
                16,
              ]}
            />

            <meshStandardMaterial
              color={accentSoft}
              emissive={accent}
              emissiveIntensity={isMobile ? 1.1 : 1.5}
              roughness={0.25}
              metalness={0.85}
            />
          </mesh>
        </Float>
      ))}

      {/* Central architectural core */}

      <mesh position={[0, 0, 0.05]}>
        <icosahedronGeometry
          args={[
            isMobile ? 0.13 : 0.16,
            1,
          ]}
        />

        <meshStandardMaterial
          color={accent}
          emissive={accentDark}
          emissiveIntensity={isMobile ? 1.1 : 1.5}
          metalness={1}
          roughness={0.18}
          wireframe
        />
      </mesh>

      {/* Inner core */}

      <mesh position={[0, 0, 0]}>
        <sphereGeometry
          args={[
            isMobile ? 0.055 : 0.07,
            24,
            24,
          ]}
        />

        <meshBasicMaterial
          color={accentSoft}
          transparent
          opacity={isMobile ? 0.55 : 0.7}
        />
      </mesh>
    </group>
  );
}

/* =========================================================
   ATMOSPHERIC PARTICLES
   ========================================================= */

function pseudoRandom(seed: number): number {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453123;
  return x - Math.floor(x);
}

function AtmosphericParticles({
  colors,
  isMobile,
}: {
  colors: ThemeColors;
  isMobile: boolean;
}) {
  const particlesRef =
    useRef<THREE.Points>(null);

  const accent = useSmoothColor(colors.accent);

  /*
   * Fewer particles on mobile.
   * Desktop: 140
   * Mobile: 70
   */
  const particleCount = isMobile ? 70 : 140;

  const positions = useMemo(() => {
    const result = new Float32Array(
      particleCount * 3
    );

    for (let i = 0; i < particleCount; i++) {
      result[i * 3] =
        (pseudoRandom(i * 3 + 1) - 0.5) * 9;

      result[i * 3 + 1] =
        (pseudoRandom(i * 3 + 2) - 0.5) * 6;

      result[i * 3 + 2] =
        (pseudoRandom(i * 3 + 3) - 0.5) * 4;
    }

    return result;
  }, [particleCount]);

  useFrame((state) => {
    if (!particlesRef.current) return;

    particlesRef.current.rotation.y =
      state.clock.elapsedTime * 0.008;

    particlesRef.current.rotation.x =
      Math.sin(
        state.clock.elapsedTime * 0.08
      ) * 0.015;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        color={accent}
        size={isMobile ? 0.014 : 0.018}
        transparent
        opacity={isMobile ? 0.16 : 0.24}
        sizeAttenuation
      />
    </points>
  );
}

/* =========================================================
   SCENE
   ========================================================= */

function Scene() {
  const colors = useThemeColors();
  const isMobile = useIsMobile();

  const accent = useSmoothColor(colors.accent);
  const accentSoft = useSmoothColor(
    colors.accentSoft
  );

  return (
    <>
      <ambientLight
        intensity={isMobile ? 0.14 : 0.18}
      />

      <pointLight
        position={[2, 2, 3]}
        intensity={isMobile ? 6 : 10}
        color={accent}
        distance={7}
      />

      <pointLight
        position={[-3, -1, 2]}
        intensity={isMobile ? 2.5 : 4}
        color={accentSoft}
        distance={6}
      />

      <NetworkStructure
        colors={colors}
        isMobile={isMobile}
      />

      <AtmosphericParticles
        colors={colors}
        isMobile={isMobile}
      />
    </>
  );
}

/* =========================================================
   HERO 3D DECOR
   ========================================================= */

export default function Hero3DDecor() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        -z-10
        opacity-60

        sm:opacity-65

        lg:opacity-70
      "
    >
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 45,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Scene />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>

      {/* Theme-aware readability overlay */}

      <div
        className="
          absolute
          inset-0
        "
        style={{
          background:
            "color-mix(in srgb, var(--background) 45%, transparent)",
        }}
      />

      {/* Center fade */}

      <div
        className="
          absolute
          inset-0
        "
        style={{
          background:
            "radial-gradient(circle at center, transparent 10%, var(--background) 82%)",
        }}
      />

      {/* Mobile readability layer */}

      <div
        className="
          absolute
          inset-0
          block

          sm:hidden
        "
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in srgb, var(--background) 25%, transparent), color-mix(in srgb, var(--background) 55%, transparent) 70%, var(--background))",
        }}
      />
    </div>
  );
}