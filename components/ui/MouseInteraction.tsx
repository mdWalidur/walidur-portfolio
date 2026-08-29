"use client";

import { useEffect, useRef } from "react";

export default function MouseInteraction() {
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const dot = dotRef.current;

    if (!glow || !dot) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;

    let currentX = targetX;
    let currentY = targetY;

    let animationFrame = 0;

    const handleMouseMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;

      // Small dot follows immediately.
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      // Large glow follows with soft delay.
      glow.style.transform = `
        translate3d(
          ${currentX}px,
          ${currentY}px,
          0
        )
      `;

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {/* Large soft glow */}
      <div
        ref={glowRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          left: 0,
          top: 0,

          width: "320px",
          height: "320px",

          marginLeft: "-160px",
          marginTop: "-160px",

          borderRadius: "50%",

          pointerEvents: "none",

          zIndex: 9998,

          background:
            "radial-gradient(circle, rgba(197,160,89,0.18) 0%, rgba(197,160,89,0.08) 30%, rgba(197,160,89,0.025) 55%, transparent 72%)",

          filter: "blur(18px)",

          opacity: 1,

          willChange: "transform",

          mixBlendMode: "screen",
        }}
      />

      {/* Small cursor point */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          left: 0,
          top: 0,

          width: "8px",
          height: "8px",

          marginLeft: "-4px",
          marginTop: "-4px",

          borderRadius: "50%",

          pointerEvents: "none",

          zIndex: 9999,

          background: "#c5a059",

          boxShadow:
            "0 0 12px rgba(197,160,89,0.9)",

          willChange: "transform",
        }}
      />
    </>
  );
}