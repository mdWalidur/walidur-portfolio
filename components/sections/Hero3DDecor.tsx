"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import * as THREE from "three";

type ThemeColors = {
  accent: string;
  accentSoft: string;
  accentDark: string;
  secondaryAccent: string;
};

const FALLBACK_COLORS: ThemeColors = {
  accent: "#c8ff3d",
  accentSoft: "#ddff85",
  accentDark: "#94c520",
  secondaryAccent: "#7c9cff",
};

function emptySubscribe() {
  return () => {};
}

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
    secondaryAccent:
      styles.getPropertyValue("--secondary-accent").trim() ||
      FALLBACK_COLORS.secondaryAccent,
  };
}

function useThemeColors() {
  const [colors, setColors] = useState<ThemeColors>(FALLBACK_COLORS);

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

function useSmoothColor(color: string, duration = 0.8) {
  const current = useMemo(() => new THREE.Color(color), [color]);
  const target = useMemo(() => new THREE.Color(color), [color]);

  useFrame((_, delta) => {
    current.lerp(target, 1 - Math.exp(-delta / duration));
  });

  return current;
}

/* =========================================================
   RESPONSIVE DEVICE DETECTION
   ========================================================= */

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

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
   DETERMINISTIC PSEUDO-RANDOM
   ========================================================= */

function pseudoRandom(seed: number): number {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453123;
  return x - Math.floor(x);
}

/* =========================================================
   INTERACTIVE GEOMETRIC 3D PARTICLE GLOBE
   Reacts to mouse movement, drag inertia, and page scroll
   ========================================================= */

type InteractionState = {
  pointerX: number;
  pointerY: number;
  dragYaw: number;
  dragPitch: number;
  velocityX: number;
  velocityY: number;
  isDragging: boolean;
  lastClientX: number;
  lastClientY: number;
  scrollProgress: number;
};

function ParticleGlobe({
  colors,
  isMobile,
  interactionRef,
}: {
  colors: ThemeColors;
  isMobile: boolean;
  interactionRef: React.MutableRefObject<InteractionState>;
}) {
  const outerGroupRef = useRef<THREE.Group>(null);
  const globeSpinRef = useRef<THREE.Group>(null);
  const innerCoreRef = useRef<THREE.Mesh>(null);
  const ringARef = useRef<THREE.Group>(null);
  const ringBRef = useRef<THREE.Group>(null);

  const accent = useSmoothColor(colors.accent);
  const accentSoft = useSmoothColor(colors.accentSoft);
  const accentDark = useSmoothColor(colors.accentDark);
  const secondaryAccent = useSmoothColor(colors.secondaryAccent);

  const radius = isMobile ? 1.38 : 1.72;
  const particleCount = isMobile ? 680 : 1380;

  // Fibonacci sphere particle distribution for a crisp geometric globe
  const spherePositions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < particleCount; i++) {
      const y = 1 - (i / (particleCount - 1)) * 2;
      const radial = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = goldenAngle * i;

      // Subtle layered shell jitter for volumetric depth
      const layerOffset =
        i % 9 === 0
          ? 1.06
          : i % 5 === 0
          ? 0.94
          : 1.0 + (pseudoRandom(i + 17) - 0.5) * 0.025;

      const r = radius * layerOffset;

      positions[i * 3] = Math.cos(theta) * radial * r;
      positions[i * 3 + 1] = y * r;
      positions[i * 3 + 2] = Math.sin(theta) * radial * r;
    }

    return positions;
  }, [particleCount, radius]);

  // Secondary inner particle shell
  const innerParticleCount = isMobile ? 220 : 420;
  const innerSpherePositions = useMemo(() => {
    const positions = new Float32Array(innerParticleCount * 3);
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    const innerR = radius * 0.68;

    for (let i = 0; i < innerParticleCount; i++) {
      const y = 1 - (i / (innerParticleCount - 1)) * 2;
      const radial = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = goldenAngle * i * 1.5;

      positions[i * 3] = Math.cos(theta) * radial * innerR;
      positions[i * 3 + 1] = y * innerR;
      positions[i * 3 + 2] = Math.sin(theta) * radial * innerR;
    }

    return positions;
  }, [innerParticleCount, radius]);

  // Surface constellation nodes & geodesic arcs
  const { surfaceNodes, surfaceConnections } = useMemo(() => {
    const nodeCount = 18;
    const nodes: [number, number, number][] = [];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < nodeCount; i++) {
      const y = 1 - ((i + 0.5) / nodeCount) * 2;
      const radial = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = goldenAngle * i * 7;
      const r = radius * 1.02;

      nodes.push([
        Math.cos(theta) * radial * r,
        y * r,
        Math.sin(theta) * radial * r,
      ]);
    }

    const connections: [number, number][] = [
      [0, 2],
      [2, 5],
      [5, 8],
      [8, 11],
      [11, 14],
      [14, 17],
      [1, 4],
      [4, 7],
      [7, 10],
      [10, 13],
      [13, 16],
      [3, 6],
      [6, 9],
      [9, 12],
      [12, 15],
      [0, 4],
      [5, 9],
      [8, 12],
      [11, 15],
    ];

    return { surfaceNodes: nodes, surfaceConnections: connections };
  }, [radius]);

  // Orbital ring points
  const orbitalRingPoints = useMemo(() => {
    const segments = 96;
    const pts: [number, number, number][] = [];
    const ringRadius = radius * 1.24;

    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      pts.push([
        Math.cos(angle) * ringRadius,
        0,
        Math.sin(angle) * ringRadius,
      ]);
    }
    return pts;
  }, [radius]);

  const outerOrbitalRingPoints = useMemo(() => {
    const segments = 96;
    const pts: [number, number, number][] = [];
    const ringRadius = radius * 1.42;

    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      pts.push([
        Math.cos(angle) * ringRadius,
        0,
        Math.sin(angle) * ringRadius,
      ]);
    }
    return pts;
  }, [radius]);

  useFrame((state, delta) => {
    const interaction = interactionRef.current;

    // Apply drag inertia decay when not actively dragging
    if (!interaction.isDragging) {
      interaction.dragYaw += interaction.velocityX;
      interaction.dragPitch = THREE.MathUtils.clamp(
        interaction.dragPitch + interaction.velocityY,
        -1.1,
        1.1
      );
      interaction.velocityX *= Math.pow(0.92, delta * 60);
      interaction.velocityY *= Math.pow(0.92, delta * 60);
    }

    // Continuous autonomous spin + scroll-driven acceleration + drag yaw
    if (globeSpinRef.current) {
      const baseSpin = state.clock.elapsedTime * 0.16;
      const scrollSpin = interaction.scrollProgress * Math.PI * 2.2;
      const targetRotationY =
        baseSpin + scrollSpin + interaction.dragYaw;
      const targetRotationX =
        interaction.dragPitch +
        Math.sin(state.clock.elapsedTime * 0.25) * 0.08 +
        interaction.scrollProgress * 0.45;

      globeSpinRef.current.rotation.y = THREE.MathUtils.lerp(
        globeSpinRef.current.rotation.y,
        targetRotationY,
        0.08
      );
      globeSpinRef.current.rotation.x = THREE.MathUtils.lerp(
        globeSpinRef.current.rotation.x,
        targetRotationX,
        0.08
      );
    }

    // Mouse parallax tilt & subtle scroll position shift on outer group
    if (outerGroupRef.current) {
      const targetTiltX = interaction.pointerY * 0.28;
      const targetTiltY = interaction.pointerX * 0.36;

      outerGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        outerGroupRef.current.rotation.x,
        targetTiltX,
        0.045
      );
      outerGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        outerGroupRef.current.rotation.y,
        targetTiltY,
        0.045
      );

      // Shift globe slightly toward center as user scrolls down sections
      const basePosX = isMobile ? 0 : 0.95;
      const scrollShiftX = isMobile
        ? 0
        : basePosX * (1 - Math.min(1, interaction.scrollProgress * 1.8));
      outerGroupRef.current.position.x = THREE.MathUtils.lerp(
        outerGroupRef.current.position.x,
        scrollShiftX,
        0.05
      );
    }

    // Counter-rotating inner core
    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y =
        -state.clock.elapsedTime * 0.24 - interaction.dragYaw * 0.5;
      innerCoreRef.current.rotation.z =
        state.clock.elapsedTime * 0.14;
    }

    // Orbital rings rotation
    if (ringARef.current) {
      ringARef.current.rotation.z =
        0.42 + Math.sin(state.clock.elapsedTime * 0.2) * 0.06;
      ringARef.current.rotation.y =
        state.clock.elapsedTime * 0.12 + interaction.scrollProgress * 1.5;
    }

    if (ringBRef.current) {
      ringBRef.current.rotation.x =
        1.05 + Math.cos(state.clock.elapsedTime * 0.18) * 0.05;
      ringBRef.current.rotation.y =
        -state.clock.elapsedTime * 0.09 - interaction.scrollProgress * 1.2;
    }
  });

  return (
    <group
      ref={outerGroupRef}
      position={isMobile ? [0, 0.15, 0] : [0.95, 0.05, 0]}
    >
      <group ref={globeSpinRef}>
        {/* Primary Fibonacci Particle Globe */}
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[spherePositions, 3]}
            />
          </bufferGeometry>
          <pointsMaterial
            color={accent}
            size={isMobile ? 0.024 : 0.028}
            transparent
            opacity={isMobile ? 0.78 : 0.88}
            sizeAttenuation
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </points>

        {/* Secondary Inner Volumetric Particle Shell */}
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[innerSpherePositions, 3]}
            />
          </bufferGeometry>
          <pointsMaterial
            color={secondaryAccent}
            size={isMobile ? 0.018 : 0.022}
            transparent
            opacity={0.48}
            sizeAttenuation
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </points>

        {/* Outer Geometric Geodesic Wireframe Shell */}
        <mesh>
          <icosahedronGeometry args={[radius * 0.992, 3]} />
          <meshStandardMaterial
            color={accentSoft}
            emissive={accent}
            emissiveIntensity={0.45}
            wireframe
            transparent
            opacity={isMobile ? 0.11 : 0.15}
          />
        </mesh>

        {/* Inner Counter-Rotating Geometric Core */}
        <mesh ref={innerCoreRef}>
          <icosahedronGeometry args={[radius * 0.66, 1]} />
          <meshStandardMaterial
            color={accent}
            emissive={accentDark}
            emissiveIntensity={1.1}
            metalness={0.9}
            roughness={0.2}
            wireframe
            transparent
            opacity={0.32}
          />
        </mesh>

        {/* Luminous Energy Core Sphere */}
        <mesh>
          <sphereGeometry args={[radius * 0.18, 28, 28]} />
          <meshBasicMaterial
            color={accentSoft}
            transparent
            opacity={0.24}
          />
        </mesh>

        {/* Geodesic Constellation Lines */}
        {surfaceConnections.map(([from, to], idx) => (
          <Line
            key={`arc-${from}-${to}-${idx}`}
            points={[surfaceNodes[from], surfaceNodes[to]]}
            color={accent}
            transparent
            opacity={isMobile ? 0.22 : 0.34}
            lineWidth={isMobile ? 0.7 : 0.95}
          />
        ))}

        {/* Glowing Constellation Nodes on Globe Surface */}
        {surfaceNodes.map((pos, idx) => (
          <Float
            key={`node-${idx}`}
            speed={1.1 + (idx % 5) * 0.12}
            rotationIntensity={0.05}
            floatIntensity={0.08}
          >
            <mesh position={pos}>
              <sphereGeometry
                args={[
                  idx % 3 === 0
                    ? isMobile
                      ? 0.036
                      : 0.044
                    : isMobile
                    ? 0.024
                    : 0.03,
                  14,
                  14,
                ]}
              />
              <meshStandardMaterial
                color={accentSoft}
                emissive={accent}
                emissiveIntensity={1.8}
                roughness={0.2}
                metalness={0.85}
              />
            </mesh>
          </Float>
        ))}
      </group>

      {/* Tilted Orbital Ring A */}
      <group ref={ringARef} rotation={[0.35, 0.2, 0.42]}>
        <Line
          points={orbitalRingPoints}
          color={accent}
          transparent
          opacity={isMobile ? 0.22 : 0.32}
          lineWidth={0.85}
        />
        <mesh position={[radius * 1.24, 0, 0]}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <meshStandardMaterial
            color={accentSoft}
            emissive={accent}
            emissiveIntensity={2.2}
          />
        </mesh>
      </group>

      {/* Tilted Orbital Ring B */}
      <group ref={ringBRef} rotation={[1.05, -0.35, -0.28]}>
        <Line
          points={outerOrbitalRingPoints}
          color={secondaryAccent}
          transparent
          opacity={isMobile ? 0.14 : 0.22}
          lineWidth={0.7}
        />
        <mesh position={[0, 0, radius * 1.42]}>
          <sphereGeometry args={[0.035, 16, 16]} />
          <meshStandardMaterial
            color={secondaryAccent}
            emissive={secondaryAccent}
            emissiveIntensity={1.8}
          />
        </mesh>
      </group>
    </group>
  );
}

/* =========================================================
   ATMOSPHERIC DEEP-SPACE PARTICLES
   ========================================================= */

function AtmosphericParticles({
  colors,
  isMobile,
  interactionRef,
}: {
  colors: ThemeColors;
  isMobile: boolean;
  interactionRef: React.MutableRefObject<InteractionState>;
}) {
  const particlesRef = useRef<THREE.Points>(null);
  const accent = useSmoothColor(colors.accent);

  const particleCount = isMobile ? 95 : 220;

  const positions = useMemo(() => {
    const result = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      result[i * 3] = (pseudoRandom(i * 3 + 1) - 0.5) * 14;
      result[i * 3 + 1] = (pseudoRandom(i * 3 + 2) - 0.5) * 10;
      result[i * 3 + 2] = (pseudoRandom(i * 3 + 3) - 0.5) * 7 - 1.5;
    }

    return result;
  }, [particleCount]);

  useFrame((state) => {
    if (!particlesRef.current) return;

    const { pointerX, pointerY, scrollProgress } =
      interactionRef.current;

    particlesRef.current.rotation.y =
      state.clock.elapsedTime * 0.012 +
      pointerX * 0.06 +
      scrollProgress * 0.35;

    particlesRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.08) * 0.02 +
      pointerY * 0.05;
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
        size={isMobile ? 0.016 : 0.02}
        transparent
        opacity={isMobile ? 0.22 : 0.32}
        sizeAttenuation
      />
    </points>
  );
}

/* =========================================================
   SCENE
   ========================================================= */

function Scene({
  interactionRef,
}: {
  interactionRef: React.MutableRefObject<InteractionState>;
}) {
  const colors = useThemeColors();
  const isMobile = useIsMobile();

  const accent = useSmoothColor(colors.accent);
  const accentSoft = useSmoothColor(colors.accentSoft);
  const secondaryAccent = useSmoothColor(colors.secondaryAccent);

  return (
    <>
      <ambientLight intensity={isMobile ? 0.22 : 0.28} />

      <pointLight
        position={[3, 2.5, 4]}
        intensity={isMobile ? 8 : 14}
        color={accent}
        distance={10}
      />

      <pointLight
        position={[-3.5, -2, 3]}
        intensity={isMobile ? 4 : 7}
        color={secondaryAccent}
        distance={9}
      />

      <pointLight
        position={[0, 3, -2]}
        intensity={isMobile ? 3 : 5}
        color={accentSoft}
        distance={8}
      />

      <ParticleGlobe
        colors={colors}
        isMobile={isMobile}
        interactionRef={interactionRef}
      />

      <AtmosphericParticles
        colors={colors}
        isMobile={isMobile}
        interactionRef={interactionRef}
      />
    </>
  );
}

/* =========================================================
   HERO 3D DECOR — GLOBAL INTERACTIVE 3D PARTICLE GLOBE
   ========================================================= */

export default function Hero3DDecor() {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const interactionRef = useRef<InteractionState>({
    pointerX: 0,
    pointerY: 0,
    dragYaw: 0,
    dragPitch: 0,
    velocityX: 0,
    velocityY: 0,
    isDragging: false,
    lastClientX: 0,
    lastClientY: 0,
    scrollProgress: 0,
  });

  useEffect(() => {
    const state = interactionRef.current;

    const handlePointerMove = (e: PointerEvent) => {
      const nx = (e.clientX / Math.max(1, window.innerWidth)) * 2 - 1;
      const ny = -(e.clientY / Math.max(1, window.innerHeight)) * 2 + 1;
      state.pointerX = nx;
      state.pointerY = ny;

      if (state.isDragging) {
        const dx = e.clientX - state.lastClientX;
        const dy = e.clientY - state.lastClientY;
        state.lastClientX = e.clientX;
        state.lastClientY = e.clientY;

        const yawDelta = dx * 0.0065;
        const pitchDelta = dy * 0.0055;

        state.dragYaw += yawDelta;
        state.dragPitch = THREE.MathUtils.clamp(
          state.dragPitch + pitchDelta,
          -1.1,
          1.1
        );
        state.velocityX = yawDelta * 0.65;
        state.velocityY = pitchDelta * 0.65;
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      // Only initiate globe drag if user isn't clicking an interactive UI control
      const target = e.target as HTMLElement | null;
      if (
        target?.closest(
          "a, button, input, textarea, select, [role='button'], [role='radio']"
        )
      ) {
        return;
      }
      state.isDragging = true;
      state.lastClientX = e.clientX;
      state.lastClientY = e.clientY;
    };

    const handlePointerUp = () => {
      state.isDragging = false;
    };

    const handleScroll = () => {
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      state.scrollProgress = window.scrollY / maxScroll;
    };

    handleScroll();

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerdown", handlePointerDown, {
      passive: true,
    });
    window.addEventListener("pointerup", handlePointerUp, {
      passive: true,
    });
    window.addEventListener("pointercancel", handlePointerUp, {
      passive: true,
    });
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {mounted && (
        <Canvas
          camera={{
            position: [0, 0, 5.4],
            fov: 44,
          }}
          dpr={[1, 1.75]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
        >
          <Scene interactionRef={interactionRef} />
        </Canvas>
      )}

      {/* Subtle radial vignette to frame the 3D globe and keep typography crisp */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 65% 45%, transparent 18%, color-mix(in srgb, var(--background) 62%, transparent) 72%, var(--background) 96%)",
        }}
      />

      {/* Left-side editorial readability gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, color-mix(in srgb, var(--background) 78%, transparent) 0%, color-mix(in srgb, var(--background) 38%, transparent) 46%, transparent 78%)",
        }}
      />
    </div>
  );
}