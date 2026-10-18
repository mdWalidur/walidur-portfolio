"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  CloudCog,
  Code2,
  MapPin,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioProfile } from "@/components/data/portfolio";
import HeroTechStack from "@/components/sections/HeroTechStack";

const heroCapabilities = [
  {
    eyebrow: "Full-Stack Web Engineering",
    title: "Scalable Web Applications",
    description:
      "Production-grade interfaces, real-time dashboards, and responsive TypeScript & Next.js architectures built for speed and clarity.",
    icon: Code2,
    href: "#work",
  },
  {
    eyebrow: "Cloud · DevOps · AI",
    title: "Resilient Cloud Infrastructure",
    description:
      "Automated CI/CD pipelines, containerized Docker & Kubernetes workloads, and AWS cloud solutions engineered for reliability.",
    icon: CloudCog,
    href: "#credentials",
  },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToWork = () => {
    document
      .getElementById("work")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] select-none overflow-hidden border-b border-[var(--border)]"
    >
      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-between px-5 pb-10 pt-28 sm:px-8 sm:pb-12 sm:pt-32">
        {/* ===================================================
            MAIN HERO IDENTITY (LEFT) + OPEN 3D GLOBE STAGE (RIGHT)
            =================================================== */}
        <div className="my-auto py-6 sm:py-10">
          <div className="max-w-2xl">
            {/* STATUS & LOCATION EYEBROW */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.06,
                duration: shouldReduceMotion ? 0 : 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-7 flex flex-wrap items-center gap-3"
            >
              <span className="glass-pill inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--text-primary)]">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    background: "var(--accent)",
                    boxShadow: "0 0 10px var(--accent)",
                  }}
                />
                Web App &amp; Cloud Engineer
              </span>

              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                <MapPin
                  size={11}
                  strokeWidth={1.7}
                  style={{ color: "var(--accent)" }}
                />
                {portfolioProfile.location}
              </span>
            </motion.div>

            {/* PRIMARY DISPLAY HEADLINE */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.14,
                duration: shouldReduceMotion ? 0 : 0.85,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display text-[clamp(2.4rem,4.9vw,4.35rem)] font-semibold leading-[1.18] tracking-[-0.025em] text-[var(--text-primary)]"
            >
              Building{" "}
              <span
                className="inline-block pr-1 font-serif italic font-normal tracking-normal"
                style={{ color: "var(--accent)" }}
              >
                cloud-native
              </span>{" "}
              systems &amp; modern{" "}
              <span className="inline-block pr-1 font-serif italic font-normal tracking-normal text-[var(--text-primary)]">
                web applications.
              </span>
            </motion.h1>

            {/* STRUCTURED EXECUTIVE LEAD COPY */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.24,
                duration: shouldReduceMotion ? 0 : 0.75,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-8 max-w-xl text-base font-normal leading-[1.85] tracking-[0.005em] text-[var(--text-secondary)] sm:text-[1.0625rem]"
            >
              I’m{" "}
              <span className="font-semibold text-[var(--text-primary)]">
                {portfolioProfile.name}
              </span>
              , a{" "}
              <span className="font-medium text-[var(--text-primary)]">
                Full-Stack &amp; Cloud Engineer
              </span>{" "}
              crafting resilient AWS infrastructure, automated DevOps workflows,
              and high-performance digital products.
            </motion.p>

            {/* CORE STACK & CLOUD INFRASTRUCTURE ICONS */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.32,
                duration: shouldReduceMotion ? 0 : 0.75,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-9"
            >
              <div className="mb-4 flex items-center gap-2.5">
                <span
                  className="h-px w-5"
                  style={{ background: "var(--accent)" }}
                />
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--text-muted)]">
                  Core Stack &amp; Cloud Infrastructure
                </span>
              </div>
              <HeroTechStack />
            </motion.div>

            {/* PRIMARY ACTIONS & SOCIAL LINKS */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.42,
                duration: shouldReduceMotion ? 0 : 0.75,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-10 flex flex-wrap items-center gap-3.5"
            >
              <button
                type="button"
                onClick={scrollToWork}
                className="group inline-flex h-11 items-center gap-2.5 rounded-full px-6 font-display text-xs font-semibold tracking-[0.03em] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-95"
                style={{
                  background: "var(--accent)",
                  color: "var(--accent-contrast)",
                }}
              >
                View Selected Work
                <ArrowDownRight
                  size={15}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </button>

              <button
                type="button"
                onClick={scrollToContact}
                className="glass-pill group inline-flex h-11 items-center gap-2.5 rounded-full px-6 font-display text-xs font-medium tracking-[0.03em] text-[var(--text-primary)]"
              >
                Start a Conversation
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.7}
                  style={{ color: "var(--accent)" }}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>

              <div className="ml-1 flex items-center gap-2.5">
                <a
                  href={portfolioProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit GitHub profile"
                  className="glass-pill inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--text-secondary)] hover:text-[var(--accent)]"
                >
                  <FaGithub size={16} />
                </a>

                <a
                  href={portfolioProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit LinkedIn profile"
                  className="glass-pill inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--text-secondary)] hover:text-[var(--accent)]"
                >
                  <FaLinkedin size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ===================================================
            BOTTOM FLOATING GLASSMORPHIC CAPABILITY CARDS
            Clean vertical hierarchy: Eyebrow -> Title -> Description
            =================================================== */}
        <div className="grid gap-5 pt-8 sm:grid-cols-2">
          {heroCapabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.52 + index * 0.1,
                  duration: shouldReduceMotion ? 0 : 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -3 }}
                className="glass-card group relative flex items-start justify-between gap-4 rounded-2xl p-5 sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <span
                    className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl border transition-colors duration-300 group-hover:border-[var(--glass-border-glow)]"
                    style={{
                      borderColor: "var(--glass-border)",
                      background: "var(--surface-soft)",
                      color: "var(--accent)",
                    }}
                  >
                    <Icon size={17} strokeWidth={1.6} />
                  </span>

                  <div className="min-w-0">
                    <p
                      className="font-mono text-[9.5px] font-medium uppercase tracking-[0.2em]"
                      style={{ color: "var(--accent)" }}
                    >
                      {item.eyebrow}
                    </p>

                    <h2 className="mt-1.5 font-display text-base font-semibold tracking-[-0.015em] text-[var(--text-primary)]">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-xs leading-[1.7] text-[var(--text-secondary)] sm:text-[13px]">
                      {item.description}
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.6}
                  className="mt-1 shrink-0 text-[var(--text-muted)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}