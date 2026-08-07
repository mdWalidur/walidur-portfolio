"use client";

import { motion } from "framer-motion";
import {
  SiAmazonaws,
  SiAzure,
  SiDocker,
  SiGithubactions,
  SiKubernetes,
  SiNextdotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";

const techStack = [
  {
    name: "AWS",
    href: "https://aws.amazon.com/",
    icon: SiAmazonaws,
    hoverClass: "group-hover:text-[#FF9900]",
  },
  {
    name: "Azure",
    href: "https://azure.microsoft.com/",
    icon: SiAzure,
    hoverClass: "group-hover:text-[#0089D6]",
  },
  {
    name: "Docker",
    href: "https://www.docker.com/",
    icon: SiDocker,
    hoverClass: "group-hover:text-[#2496ED]",
  },
  {
    name: "Kubernetes",
    href: "https://kubernetes.io/",
    icon: SiKubernetes,
    hoverClass: "group-hover:text-[#326CE5]",
  },
  {
    name: "React",
    href: "https://react.dev/",
    icon: SiReact,
    hoverClass: "group-hover:text-[#61DAFB]",
  },
  {
    name: "Next.js",
    href: "https://nextjs.org/",
    icon: SiNextdotjs,
    hoverClass: "group-hover:text-white",
  },
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
    icon: SiTypescript,
    hoverClass: "group-hover:text-[#3178C6]",
  },
  {
    name: "GitHub Actions",
    href: "https://github.com/features/actions",
    icon: SiGithubactions,
    hoverClass: "group-hover:text-[#2088FF]",
  },
];

export default function HeroTechStack() {
  return (
    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
      {techStack.map((tech, index) => {
        const Icon = tech.icon;

        return (
          <motion.a
            key={tech.name}
            href={tech.href}
            target="_blank"
            rel="noreferrer"
            aria-label={tech.name}
            title={tech.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.08,
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 1.02 }}
            className="group relative shrink-0 rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-slate-400 shadow-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_0_18px_rgba(45,212,191,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#091210]"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-[-6px] rounded-full bg-gradient-to-br from-teal-300/20 via-cyan-400/10 to-transparent opacity-0 blur-xl transition-all duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full border border-transparent transition-all duration-300 group-hover:border-teal-300/30 group-focus-within:border-teal-300/30"
            />

            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-[#0f1716]/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-200 opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
            >
              {tech.name}
            </span>

            <Icon
              className={`h-6 w-6 transition-all duration-300 sm:h-7 sm:w-7 ${tech.hoverClass}`}
              aria-hidden="true"
            />
          </motion.a>
        );
      })}
    </div>
  );
}