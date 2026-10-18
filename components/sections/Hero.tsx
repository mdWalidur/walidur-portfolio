"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Orbit,
  Palette,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioProfile } from "@/components/data/portfolio";
import HeroTechStack from "@/components/sections/HeroTechStack";

function useTampereTime() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () => {
      try {
        const formatted = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Europe/Helsinki",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZoneName: "short",
        }).format(new Date());
        setTime(formatted);
      } catch {
        setTime("18:00:00 EET");
      }
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}

const heroServices = [
  {
    title: "Interactive Experience",
    subtitle: "3D Web · Motion · Real-Time Telemetry",
    description:
      "Tactile interfaces, reactive 3D scenes, and low-latency dashboards engineered for clarity and speed.",
    icon: Sparkles,
    href: "#work",
  },
  {
    title: "Visual Arts",
    subtitle: "Spatial UI · Design Systems · Cloud & AI",
    description:
      "Minimalist editorial typography paired with resilient cloud architecture and modern digital craft.",
    icon: Palette,
    href: "#about",
  },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const tampereTime = useTampereTime();

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

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] select-none overflow-hidden border-b border-[var(--border)]"
    >
      {/* =====================================================
          SUBTLE ARCHITECTURAL ACCENTS OVER 3D CANVAS
          ===================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="page-shell h-full">
          <div className="editorial-grid h-full opacity-40">
            <div className="col-span-1 border-r border-[var(--border-soft)]" />
            <div className="col-span-10 border-r border-[var(--border-soft)]" />
          </div>
        </div>

        {/* Horizontal structural line */}
        <div className="absolute bottom-[16%] left-0 h-px w-full bg-[var(--border-soft)]" />
      </div>

      {/* =====================================================
          CONTENT
          ===================================================== */}
      <div className="page-shell relative z-10 flex min-h-[100svh] flex-col pt-28 sm:pt-32">
        {/* ===================================================
            TOP METADATA & TELEMETRY HUD
            =================================================== */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="glass-pill flex flex-wrap items-center justify-between gap-3 rounded-2xl px-4 py-3 font-mono text-[10px] uppercase tracking-[0.14em]"
        >
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-[var(--accent)] opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-[var(--accent)]" />
            </span>
            <span className="font-semibold text-[var(--text-primary)]">
              Tampere, Finland
            </span>
            <span className="text-[var(--text-muted)]">
              {tampereTime || "Europe/Helsinki"}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[var(--text-muted)]">
            <span className="hidden items-center gap-1.5 text-[var(--accent)] lg:inline-flex">
              <Orbit size={12} className="animate-spin" style={{ animationDuration: "14s" }} />
              <span>Drag / Scroll 3D Globe</span>
            </span>
            <span className="hidden sm:inline">
              REGION:{" "}
              <span className="text-[var(--text-primary)]">eu-north-1</span>
            </span>
            <span className="hidden md:inline">
              LATENCY: <span className="text-[var(--accent)]">~24ms</span>
            </span>
            <span className="rounded-full border border-[var(--accent)]/40 bg-[var(--surface-soft)] px-2.5 py-0.5 text-[9px] font-semibold text-[var(--accent)]">
              Status: Available
            </span>
          </div>
        </motion.div>

        {/* ===================================================
            MAIN ASYMMETRIC 3D HERO COMPOSITION
            Left: Clean minimal typography & identity
            Right: Interactive 3D Globe window + floating glass cards
            =================================================== */}
        <div className="grid flex-1 items-center gap-12 py-12 sm:py-16 lg:grid-cols-12 lg:gap-8">
          {/* LEFT COLUMN — MINIMALIST EDITORIAL IDENTITY */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.08,
                duration: shouldReduceMotion ? 0 : 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-5 flex flex-wrap items-center gap-3 sm:mb-7"
            >
              <span className="glass-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
                Walidur / Creative Developer Portfolio
              </span>

              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                Software / Cloud / Systems
              </span>
            </motion.div>

            <h1 className="font-semibold leading-[0.86] tracking-[-0.065em] text-[clamp(3.6rem,10vw,9.2rem)] text-[var(--text-primary)]">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ opacity: 0, y: 72 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.14,
                    duration: shouldReduceMotion ? 0 : 0.95,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ x: 6 }}
                  className="inline-block transition-colors duration-300 hover:text-[var(--accent)]"
                >
                  WALIDUR
                </motion.span>
              </span>

              <span className="block overflow-hidden sm:ml-[8%]">
                <motion.span
                  initial={{ opacity: 0, y: 72 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.24,
                    duration: shouldReduceMotion ? 0 : 0.95,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ x: 6 }}
                  className="inline-block bg-gradient-to-r from-[var(--text-primary)] via-[var(--text-primary)] to-[var(--accent)] bg-clip-text text-transparent"
                >
                  RAHMAN
                </motion.span>
              </span>
            </h1>

            {/* Description + Current Signal in sleek glassmorphic layout */}
            <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.38,
                  duration: shouldReduceMotion ? 0 : 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -3 }}
                className="glass-card rounded-2xl p-5"
              >
                <p className="meta mb-2 text-[var(--accent)]">Mission</p>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                  I explore how software, cloud infrastructure, AI, and
                  modern systems can become useful, reliable products.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.46,
                  duration: shouldReduceMotion ? 0 : 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -3 }}
                className="glass-card rounded-2xl p-5"
              >
                <p className="meta mb-2 text-[var(--accent)]">Current signal</p>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  Learning, building, and exploring practical solutions
                  across software engineering and cloud technologies.
                </p>
              </motion.div>
            </div>

            {/* Core Stack & Cloud Infrastructure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.56,
                duration: shouldReduceMotion ? 0 : 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-7"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-6 bg-[var(--accent)]" />
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                  Core Stack & Cloud Infrastructure
                </p>
              </div>
              <HeroTechStack />
            </motion.div>
          </div>

          {/* RIGHT COLUMN — FLOATING GLASSMORPHIC SERVICE & SHOWCASE CARDS OVER THE 3D GLOBE */}
          <div className="relative flex flex-col justify-end gap-4 lg:col-span-5 lg:pl-4">
            {/* Subtle interactive 3D centerpiece caption */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35,
                duration: shouldReduceMotion ? 0 : 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-2 flex items-center justify-between px-1 lg:mb-28"
            >
              <span className="glass-pill inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                3D Particle Globe · Interactive Centerpiece
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                
              </span>
            </motion.div>

            {/* Floating Glassmorphic Service Cards (Interactive Experience & Visual Arts) */}
            {heroServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.a
                  key={service.title}
                  href={service.href}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.48 + index * 0.12,
                    duration: shouldReduceMotion ? 0 : 0.85,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="glass-card group relative overflow-hidden rounded-2xl p-5 sm:p-6"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"
                    style={{ background: "var(--accent)" }}
                  />

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span
                        className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border transition-colors duration-300"
                        style={{
                          borderColor: "var(--glass-border)",
                          background: "var(--surface-soft)",
                          color: "var(--accent)",
                        }}
                      >
                        <Icon size={17} strokeWidth={1.6} />
                      </span>

                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                          {service.subtitle}
                        </p>

                        <h2 className="mt-1 text-lg font-medium tracking-[-0.03em] text-[var(--text-primary)] sm:text-xl">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.6}
                      className="shrink-0 text-[var(--text-muted)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"
                    />
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                    {service.description}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* ===================================================
            BOTTOM INTERACTION BAR
            =================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.75,
            duration: shouldReduceMotion ? 0 : 0.6,
          }}
          className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] py-5 sm:py-6"
        >
          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={portfolioProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
              className="glass-pill inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--text-secondary)] hover:text-[var(--accent)]"
            >
              <FaGithub size={17} />
            </a>

            <a
              href={portfolioProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
              className="glass-pill inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--text-secondary)] hover:text-[var(--accent)]"
            >
              <FaLinkedin size={17} />
            </a>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={scrollToWork}
              className="glass-pill group inline-flex items-center gap-2.5 rounded-full px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              Explore work
              <ArrowDownRight
                size={15}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 text-[var(--accent)]"
              />
            </button>

            <button
              type="button"
              onClick={scrollToContact}
              className="glass-pill group inline-flex items-center gap-2.5 rounded-full px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]"
            >
              Start a conversation
              <ArrowUpRight
                size={15}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}