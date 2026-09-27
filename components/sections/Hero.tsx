"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
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
        }).format(new Date());
        setTime(formatted);
      } catch {
        setTime("18:00:00");
      }
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}

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
      y: shouldReduceMotion ? 0 : 24,
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
      className="relative min-h-[100svh] overflow-hidden border-b border-[var(--border)]"
    >
      {/* =====================================================
          BACKGROUND / ARCHITECTURAL GRID
          ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="page-shell h-full">
          <div className="editorial-grid h-full">
            <div className="col-span-1 border-r border-[var(--border-soft)]" />

            <div className="col-span-10 border-r border-[var(--border-soft)]" />
          </div>
        </div>

        {/* Large background coordinate */}
        <div className="absolute right-[-0.08em] top-[10%] select-none font-mono text-[clamp(8rem,22vw,24rem)] font-semibold leading-none tracking-[-0.08em] text-[var(--text-primary)] opacity-[0.025]">
          01
        </div>

        {/* Horizontal structural line */}
        <div className="absolute bottom-[18%] left-0 h-px w-full bg-[var(--border-soft)]" />

        {/* Signal indicator */}
        <div className="absolute right-[12%] top-[28%] h-2 w-2 bg-[var(--accent)] shadow-[0_0_40px_var(--accent)]" />
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
          className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-4 font-mono text-[10px] uppercase tracking-[0.14em]"
        >
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-[var(--accent)] opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-[var(--accent)]" />
            </span>
            <span className="font-semibold text-[var(--text-primary)]">Tampere, Finland</span>
            <span className="text-[var(--text-muted)]">
              {tampereTime ? `${tampereTime} EET` : "EET (UTC+3)"}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[var(--text-muted)]">
            <span className="hidden sm:inline">
              REGION: <span className="text-[var(--text-primary)]">eu-north-1</span>
            </span>
            <span className="hidden md:inline">
              LATENCY: <span className="text-[var(--accent)]">~24ms</span>
            </span>
            <span className="border border-[var(--accent)]/40 bg-[var(--surface-soft)] px-2 py-0.5 text-[9px] font-semibold text-[var(--accent)]">
              Status: Available
            </span>
          </div>
        </motion.div>

        {/* ===================================================
            MAIN HERO COMPOSITION
            =================================================== */}

        <div className="editorial-grid flex-1 items-center py-16 sm:py-20">
          {/* Main identity */}
          <div className="col-span-4 md:col-span-10 md:col-start-2">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.1,
                    duration: shouldReduceMotion ? 0 : 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
              className="mb-6 font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] text-[var(--text-muted)] sm:mb-8"
            >
              Software / Cloud / Systems
            </motion.p>

            {/* WALIDUR */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 80,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.15,
                  duration: shouldReduceMotion ? 0 : 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-semibold leading-[0.82] tracking-[-0.07em] text-[clamp(4.4rem,13vw,13rem)] text-[var(--text-primary)]"
              >
                WALIDUR
              </motion.h1>
            </div>

            {/* RAHMAN */}
            <div className="overflow-hidden md:ml-[12%]">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 80,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.27,
                  duration: shouldReduceMotion ? 0 : 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-semibold leading-[0.82] tracking-[-0.07em] text-[clamp(4.4rem,13vw,13rem)] text-[var(--text-primary)]"
              >
                RAHMAN
              </motion.h1>
            </div>
          </div>

          {/* =================================================
              DESCRIPTION
              ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.45,
              duration: shouldReduceMotion ? 0 : 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="col-span-4 mt-14 md:col-span-4 md:col-start-2 md:mt-20"
          >
            <p className="max-w-md text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl">
              I explore how software, cloud infrastructure, AI, and
              modern systems can become useful, reliable products.
            </p>
          </motion.div>

          {/* =================================================
              CURRENT SIGNAL
              ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.55,
              duration: shouldReduceMotion ? 0 : 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="col-span-4 mt-10 md:col-span-3 md:col-start-9 md:mt-20"
          >
            <div className="border-t border-[var(--border)] pt-4">
              <p className="meta">Current signal</p>

              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                Learning, building, and exploring practical solutions
                across software engineering and cloud technologies.
              </p>
            </div>
          </motion.div>

          {/* =================================================
              CORE STACK & CLOUD INFRASTRUCTURE
              ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.65,
              duration: shouldReduceMotion ? 0 : 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="col-span-4 mt-8 md:col-span-10 md:col-start-2"
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

        {/* ===================================================
            BOTTOM INTERACTION BAR
            =================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: shouldReduceMotion ? 0 : 0.6,
          }}
          className="editorial-grid border-t border-[var(--border)] py-5 sm:py-6"
        >
          {/* Social links */}
          <div className="col-span-2 flex items-center gap-5 md:col-span-3">
            <a
              href={portfolioProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
              className="interactive text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            >
              <FaGithub size={18} />
            </a>

            <a
              href={portfolioProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
              className="interactive text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            >
              <FaLinkedin size={18} />
            </a>
          </div>

          {/* Explore work */}
          <div className="col-span-2 flex justify-end md:col-span-3 md:col-start-10">
            <button
              type="button"
              onClick={scrollToWork}
              className="interactive group flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              Explore work

              <ArrowDownRight
                size={17}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </button>
          </div>
        </motion.div>

        {/* ===================================================
            DESKTOP CONTACT ACTION
            =================================================== */}

        <button
          type="button"
          onClick={scrollToContact}
          className="interactive absolute bottom-24 right-[var(--page-padding)] hidden items-center gap-3 border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-[var(--text-secondary)] backdrop-blur-sm hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)] lg:flex"
        >
          Start a conversation

          <ArrowUpRight
            size={15}
            strokeWidth={1.7}
          />
        </button>
      </div>
    </section>
  );
}