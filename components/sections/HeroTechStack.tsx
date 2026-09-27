"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  ShieldCheck,
} from "lucide-react";
import { FaAws } from "react-icons/fa";

import {
  SiDocker,
  SiGithubactions,
  SiKubernetes,
  SiReact,
  SiTypescript,
} from "react-icons/si";

const techStack = [
  {
    name: "AWS Cloud",
    href: "#credentials",
    icon: FaAws,
  },
  {
    name: "Docker",
    href: "https://www.docker.com/",
    icon: SiDocker,
  },
  {
    name: "AI / Machine Learning",
    href: "#work",
    icon: BrainCircuit,
  },
  {
    name: "Kubernetes",
    href: "https://kubernetes.io/",
    icon: SiKubernetes,
  },
  {
    name: "React",
    href: "https://react.dev/",
    icon: SiReact,
  },
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
    icon: SiTypescript,
  },
  {
    name: "GitHub Actions",
    href: "https://github.com/features/actions",
    icon: SiGithubactions,
  },
  {
    name: "Cybersecurity",
    href: "#work",
    icon: ShieldCheck,
  },
];

export default function HeroTechStack() {
  return (
    <div
      className="
        flex
        flex-wrap
        items-center
        gap-2.5
        sm:gap-3
      "
    >
      {techStack.map((tech, index) => {
        const Icon = tech.icon;

        return (
          <motion.a
            key={tech.name}
            href={tech.href}
            target={
              tech.href.startsWith("http")
                ? "_blank"
                : undefined
            }
            rel={
              tech.href.startsWith("http")
                ? "noreferrer"
                : undefined
            }
            aria-label={tech.name}
            title={tech.name}
            initial={{
              opacity: 0,
              y: 12,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              delay: index * 0.08,
              duration: 0.8,
              ease: [
                0.19,
                1,
                0.22,
                1,
              ],
            }}
            whileHover={{
              scale: 1.08,
              y: -3,
              rotateX: 3,
              rotateY: -3,
            }}
            whileTap={{
              scale: 0.98,
            }}
            style={{
              transformStyle:
                "preserve-3d",
            }}
            className="
              group
              relative
              shrink-0
              rounded-full
              border
              p-3
              outline-none
              backdrop-blur-[20px]
              transition-[background-color,border-color,box-shadow]
              duration-700
              ease-[cubic-bezier(0.19,1,0.22,1)]
              focus-visible:ring-2
              focus-visible:ring-[var(--accent)]
              focus-visible:ring-offset-2
            "
          >
            {/* =================================================
                OUTER ACCENT GLOW
                ================================================= */}

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -inset-3
                rounded-full
                opacity-0
                blur-xl
                transition-opacity
                duration-700
                group-hover:opacity-100
              "
              style={{
                background:
                  "radial-gradient(circle, color-mix(in srgb, var(--accent) 28%, transparent), transparent 70%)",
              }}
            />

            {/* =================================================
                ROTATING ACCENT RING
                ================================================= */}

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -inset-[2px]
                rounded-full
                opacity-0
                transition-opacity
                duration-700
                group-hover:opacity-100
              "
              style={{
                background:
                  "conic-gradient(from 0deg, transparent, var(--accent), transparent, var(--accent), transparent)",
                mask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                maskComposite:
                  "exclude",
                WebkitMaskComposite:
                  "xor",
                padding: "1px",
              }}
            />

            {/* =================================================
                MAIN GLASS SURFACE
                ================================================= */}

            <span
              aria-hidden="true"
              className="
                absolute
                inset-0
                rounded-full
                border
                transition-[background-color,border-color]
                duration-700
              "
              style={{
                borderColor:
                  "var(--border)",
                background:
                  "var(--surface-soft)",
              }}
            />

            {/* =================================================
                SUBTLE ACCENT HIGHLIGHT
                ================================================= */}

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-[3px]
                rounded-full
                opacity-0
                transition-opacity
                duration-700
                group-hover:opacity-100
              "
              style={{
                background:
                  "radial-gradient(circle at 35% 25%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 55%)",
              }}
            />

            {/* =================================================
                TOOLTIP
                ================================================= */}

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -top-10
                left-1/2
                z-30
                -translate-x-1/2
                translate-y-1
                whitespace-nowrap
                border
                px-3
                py-1.5
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]
                opacity-0
                shadow-xl
                transition-all
                duration-500
                group-hover:translate-y-0
                group-hover:opacity-100
              "
              style={{
                borderColor:
                  "var(--border)",
                background:
                  "var(--surface)",
                color:
                  "var(--text-primary)",
                boxShadow:
                  "0 15px 40px var(--shadow-color)",
              }}
            >
              {tech.name}
            </span>

            {/* =================================================
                ICON
                ================================================= */}

            <Icon
              aria-hidden="true"
              className="
                relative
                z-10
                h-6
                w-6
                transition-[color,filter]
                duration-700
                sm:h-7
                sm:w-7
              "
              style={{
                color:
                  "var(--text-secondary)",
              }}
            />

            {/* =================================================
                HOVER CENTER DOT
                ================================================= */}

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                grid
                place-items-center
                rounded-full
                opacity-0
                transition-opacity
                duration-700
                group-hover:opacity-100
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  blur-[2px]
                "
                style={{
                  background:
                    "var(--accent)",
                  boxShadow:
                    "0 0 14px color-mix(in srgb, var(--accent) 70%, transparent)",
                }}
              />
            </span>
          </motion.a>
        );
      })}
    </div>
  );
}