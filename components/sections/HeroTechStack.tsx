"use client";

import { motion } from "framer-motion";
import { BrainCircuit, ShieldCheck } from "lucide-react";

import {
  SiDocker,
  SiGithubactions,
  SiKubernetes,
  SiNextdotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";

const techStack = [
  {
    name: "Docker",
    href: "https://www.docker.com/",
    icon: SiDocker,
    external: true,
  },
  {
    name: "Kubernetes",
    href: "https://kubernetes.io/",
    icon: SiKubernetes,
    external: true,
  },
  {
    name: "React",
    href: "https://react.dev/",
    icon: SiReact,
    external: true,
  },
  {
    name: "Next.js",
    href: "https://nextjs.org/",
    icon: SiNextdotjs,
    external: true,
  },
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
    icon: SiTypescript,
    external: true,
  },
  {
    name: "GitHub Actions",
    href: "https://github.com/features/actions",
    icon: SiGithubactions,
    external: true,
  },
  {
    name: "Cybersecurity",
    href: "#work",
    icon: ShieldCheck,
    external: false,
  },
  {
    name: "AI / Machine Learning",
    href: "#work",
    icon: BrainCircuit,
    external: false,
  },
];

export default function HeroTechStack() {
  return (
    <div
      className="flex flex-wrap items-center gap-2.5 sm:gap-3"
      style={{
        perspective: "1000px",
      }}
    >
      {techStack.map((tech, index) => {
        const Icon = tech.icon;

        return (
          <motion.a
            key={tech.name}
            href={tech.href}
            target={tech.external ? "_blank" : undefined}
            rel={tech.external ? "noreferrer" : undefined}
            aria-label={tech.name}
            title={tech.name}
            initial={{
              opacity: 0,
              y: 14,
              scale: 0.88,
              rotateX: -8,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
            }}
            transition={{
              delay: index * 0.07,
              duration: 0.9,
              ease: [0.19, 1, 0.22, 1],
            }}
            whileHover={{
              scale: 1.08,
              y: -5,
              rotateX: 7,
              rotateY: -7,
            }}
            whileTap={{
              scale: 0.96,
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
            className="group relative shrink-0 rounded-full border p-3 backdrop-blur-[20px] transition-all duration-700 focus-visible:outline-none"
          >
            {/* =================================================
                OUTER GOLD GLOW
                ================================================= */}

            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-3 rounded-full opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in srgb, var(--accent) 28%, transparent), transparent 70%)",
              }}
            />

            {/* =================================================
                ROTATING GOLD RING
                ================================================= */}

            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent, var(--accent), transparent, var(--accent), transparent)",
                mask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                maskComposite: "exclude",
                padding: "1px",
              }}
            />

            {/* =================================================
                GLASS SURFACE
                ================================================= */}

            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full border transition-all duration-700"
              style={{
                borderColor: "var(--border)",
                background: "var(--surface-soft)",
                boxShadow: "0 10px 35px var(--shadow-color)",
              }}
            />

            {/* =================================================
                INNER ACCENT HIGHLIGHT
                ================================================= */}

            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-[3px] rounded-full opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at 35% 25%, color-mix(in srgb, var(--accent) 14%, transparent), transparent 55%)",
              }}
            />

            {/* =================================================
                TOOLTIP
                ================================================= */}

            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-10 left-1/2 z-30 -translate-x-1/2 translate-y-1 whitespace-nowrap border px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] opacity-0 shadow-xl transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
              style={{
                borderColor: "var(--border)",
                background: "var(--surface)",
                color: "var(--text-primary)",
              }}
            >
              {tech.name}
            </span>

            {/* =================================================
                ICON
                ================================================= */}

            <Icon
              aria-hidden="true"
              className="relative z-10 h-6 w-6 transition-all duration-700 sm:h-7 sm:w-7"
              style={{
                color: "var(--text-secondary)",
                filter:
                  "drop-shadow(0 4px 8px color-mix(in srgb, var(--shadow-color) 45%, transparent))",
              }}
            />

            {/* =================================================
                HOVER GOLD CORE
                ================================================= */}

            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 grid place-items-center rounded-full opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            >
              <span
                className="h-1.5 w-1.5 rounded-full blur-[2px]"
                style={{
                  background: "var(--accent)",
                  boxShadow:
                    "0 0 16px color-mix(in srgb, var(--accent) 75%, transparent)",
                }}
              />
            </span>

            {/* =================================================
                3D DEPTH
                ================================================= */}

            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-1 rounded-full opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              style={{
                boxShadow:
                  "inset 0 1px 0 color-mix(in srgb, var(--text-primary) 12%, transparent), inset 0 -6px 12px color-mix(in srgb, var(--shadow-color) 25%, transparent)",
              }}
            />
          </motion.a>
        );
      })}
    </div>
  );
}