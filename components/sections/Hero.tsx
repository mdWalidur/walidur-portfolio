"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Palette,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioProfile } from "@/components/data/portfolio";
import HeroTechStack from "@/components/sections/HeroTechStack";

const heroServices = [
  {
    title: "Interactive Experience",
    subtitle: "3D Web · Motion · Real-Time Telemetry",
    description:
      "Tactile spatial interfaces, reactive WebGL scenes, and low-latency dashboards engineered for clarity and speed.",
    icon: Sparkles,
    href: "#work",
  },
  {
    title: "Visual Arts & Cloud Craft",
    subtitle: "Design Systems · AWS · Containers & AI",
    description:
      "Editorial typography and minimalist aesthetics backed by resilient cloud-native infrastructure and automated pipelines.",
    icon: Palette,
    href: "#about",
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
            Font Pairing: Space Grotesk (Display) + Playfair Display (Italic Serif)
            + Plus Jakarta Sans (Body) + JetBrains Mono (Eyebrow / Meta)
            =================================================== */}
        <div className="my-auto py-6 sm:py-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.06,
                duration: shouldReduceMotion ? 0 : 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-6 flex flex-wrap items-center gap-2.5"
            >
              <span className="glass-pill inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    background: "var(--accent)",
                    boxShadow: "0 0 10px var(--accent)",
                  }}
                />
                Walidur / Web App Developer 
              </span>

              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                {portfolioProfile.location}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.14,
                duration: shouldReduceMotion ? 0 : 0.85,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display text-[clamp(2.85rem,6.4vw,5.4rem)] font-medium leading-[0.96] tracking-[-0.045em] text-[var(--text-primary)]"
            >
              Engineering{" "}
              <span
                className="font-serif italic font-normal tracking-[-0.02em]"
                style={{ color: "var(--accent)" }}
              >
                cloud-native
              </span>{" "}
              systems &amp;{" "}
              <span className="font-serif italic font-normal tracking-[-0.02em] text-[var(--text-primary)]">
                interactive
              </span>{" "}
              craft.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.24,
                duration: shouldReduceMotion ? 0 : 0.75,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-6 max-w-xl text-base font-normal leading-relaxed text-[var(--text-secondary)] sm:text-[1.08rem]"
            >
              I’m{" "}
              <span className="font-medium text-[var(--text-primary)]">
                {portfolioProfile.name}
              </span>{" "}
              — {portfolioProfile.headline}
            </motion.p>

            {/* RESTORED PROMINENT TECH STACK ICONS (AWS, Docker, Kubernetes, React, etc.) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.32,
                duration: shouldReduceMotion ? 0 : 0.75,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-8"
            >
              <div className="mb-3.5 flex items-center gap-2.5">
                <span
                  className="h-px w-5"
                  style={{ background: "var(--accent)" }}
                />
                <span className="font-mono text-[9px] font-medium uppercase tracking-[0.22em] text-[var(--text-muted)]">
                  Core Stack &amp; Cloud Infrastructure
                </span>
              </div>
              <HeroTechStack />
            </motion.div>

            {/* CTA & SOCIAL ROW */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.42,
                duration: shouldReduceMotion ? 0 : 0.75,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <button
                type="button"
                onClick={scrollToWork}
                className="group inline-flex h-11 items-center gap-2 rounded-full px-5 font-display text-xs font-semibold tracking-[0.03em] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-95"
                style={{
                  background: "var(--accent)",
                  color: "var(--accent-contrast)",
                }}
              >
                Explore work
                <ArrowDownRight
                  size={15}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </button>

              <button
                type="button"
                onClick={scrollToContact}
                className="glass-pill group inline-flex h-11 items-center gap-2 rounded-full px-5 font-display text-xs font-medium tracking-[0.02em] text-[var(--text-primary)]"
              >
                Get in touch
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.7}
                  style={{ color: "var(--accent)" }}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>

              <div className="ml-1 flex items-center gap-2">
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
            BOTTOM FLOATING GLASSMORPHIC SHOWCASE CARDS
            Frames the 3D globe without blocking its center
            =================================================== */}
        <div className="grid gap-4 pt-4 sm:grid-cols-2">
          {heroServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={service.title}
                href={service.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.52 + index * 0.1,
                  duration: shouldReduceMotion ? 0 : 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -3 }}
                className="glass-card group relative flex items-start justify-between gap-4 rounded-2xl p-5"
              >
                <div className="flex items-start gap-3.5">
                  <span
                    className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border"
                    style={{
                      borderColor: "var(--glass-border)",
                      background: "var(--surface-soft)",
                      color: "var(--accent)",
                    }}
                  >
                    <Icon size={16} strokeWidth={1.6} />
                  </span>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="font-display text-sm font-medium tracking-[-0.02em] text-[var(--text-primary)] sm:text-base">
                        {service.title}
                      </h2>
                      <span className="hidden font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--text-muted)] xl:inline">
                        · {service.subtitle}
                      </span>
                    </div>

                    <p className="mt-1 text-xs leading-relaxed text-[var(--text-secondary)]">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={15}
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