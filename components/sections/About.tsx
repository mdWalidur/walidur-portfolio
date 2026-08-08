"use client";

import {
  ArrowDownRight,
  BrainCircuit,
  Code2,
  Globe2,
  MapPin,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "REST APIs",
  "Git & GitHub",
];

const principles = [
  {
    icon: Code2,
    number: "01",
    title: "Built with intent",
    text: "Clean implementation, thoughtful details, and interfaces made to last.",
  },
  {
    icon: Globe2,
    number: "02",
    title: "Human first",
    text: "Technology should feel useful, clear, accessible, and easy to trust.",
  },
  {
    icon: BrainCircuit,
    number: "03",
    title: "Always learning",
    text: "I stay curious about emerging tools, AI, and better ways to solve problems.",
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const revealTransition = (delay = 0) => ({
  duration: 1.2,
  delay,
  ease: [0.19, 1, 0.22, 1] as const,
});

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-28 overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-12 xl:px-20"
      style={{
        background: "var(--background)",
        color: "var(--text-primary)",
      }}
    >
      {/* =====================================================
          AMBIENT ARCHITECTURE
          ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-56 top-1/4 h-[36rem] w-[36rem] rounded-full blur-[150px]"
        style={{
          background: "var(--accent)",
          opacity: 0.035,
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-full w-px opacity-20"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--accent), transparent)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-px opacity-10"
        style={{
          background:
            "linear-gradient(to bottom, var(--accent), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* ===================================================
            SECTION LABEL
            =================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={reveal}
          transition={revealTransition()}
          className="mb-14 flex items-center gap-4 sm:mb-20"
        >
          <span
            className="h-px w-12"
            style={{
              background: "var(--accent)",
            }}
          />

          <p
            className="text-[10px] font-semibold uppercase tracking-[0.3em]"
            style={{
              color: "var(--accent)",
            }}
          >
            About me
          </p>

          <span
            className="hidden h-px flex-1 max-w-40 sm:block"
            style={{
              background: "var(--border)",
            }}
          />
        </motion.div>

        {/* ===================================================
            MAIN INTRO
            =================================================== */}

        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:gap-20">
          {/* =================================================
              LEFT — INTRO
              ================================================= */}

          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={reveal}
              transition={revealTransition()}
            >
              <p
                className="mb-6 text-[9px] font-semibold uppercase tracking-[0.25em]"
                style={{
                  color: "var(--text-muted)",
                }}
              >
                A little context
              </p>

              <h2
                id="about-heading"
                className="max-w-4xl text-4xl font-light leading-[1.04] tracking-[-0.055em] sm:text-5xl lg:text-6xl xl:text-7xl"
                style={{
                  color: "var(--text-primary)",
                }}
              >
                I turn ambitious ideas into{" "}
                <span
                  className="font-serif italic"
                  style={{
                    color: "var(--accent)",
                  }}
                >
                  useful digital experiences.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={reveal}
              transition={revealTransition(0.12)}
              className="mt-10 max-w-2xl space-y-5 text-base leading-relaxed sm:text-lg"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              <p>
                I&apos;m Walidur, a Cloud/DevOps + AI Engineer with a
                particular interest in the meeting point between design,
                technology, and real human needs. I enjoy making complex
                ideas feel simple.
              </p>

              <p>
                My approach balances careful engineering with a strong
                visual point of view. Whether I&apos;m building a product
                interface, experimenting with AI, or refining a small
                interaction, I care about the experience behind every
                decision.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.a
              href="#contact"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              variants={reveal}
              transition={revealTransition(0.22)}
              className="group mt-10 inline-flex items-center gap-3 border-b pb-2 text-sm font-semibold focus:outline-none"
              style={{
                color: "var(--accent-dark)",
                borderColor:
                  "color-mix(in srgb, var(--accent) 50%, transparent)",
              }}
            >
              Let&apos;s make something meaningful

              <ArrowDownRight
                size={17}
                className="transition-transform duration-700 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </motion.a>
          </div>

          {/* =================================================
              RIGHT — CURRENTLY
              ================================================= */}

          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={reveal}
            transition={revealTransition(0.12)}
            whileHover={{
              y: -6,
              rotateX: 1.5,
              rotateY: -1.5,
            }}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1200px",
            }}
            className="group relative overflow-hidden border backdrop-blur-[20px]"
          >
            {/* Accent glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl transition-opacity duration-700 group-hover:opacity-100"
              style={{
                background: "var(--accent)",
                opacity: 0.045,
              }}
            />

            {/* Technical corner */}
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-12 w-12 border-b border-l"
              style={{
                borderColor: "var(--border)",
              }}
            />

            <div
              className="relative p-6 sm:p-8"
              style={{
                background: "var(--surface-soft)",
                borderColor: "var(--border)",
                boxShadow:
                  "0 25px 90px var(--shadow-color)",
              }}
            >
              {/* Top */}
              <div className="flex items-center justify-between">
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.3em]"
                  style={{
                    color: "var(--accent-dark)",
                  }}
                >
                  Currently
                </p>

                <span
                  className="grid h-11 w-11 place-items-center rounded-full border"
                  style={{
                    borderColor:
                      "color-mix(in srgb, var(--accent) 30%, var(--border))",
                    background:
                      "color-mix(in srgb, var(--accent) 8%, transparent)",
                    color: "var(--accent)",
                  }}
                >
                  <Sparkles size={18} />
                </span>
              </div>

              <p
                className="mt-7 text-2xl font-medium leading-tight tracking-[-0.04em] sm:text-3xl"
                style={{
                  color: "var(--text-primary)",
                }}
              >
                Exploring the future of web experiences with AI.
              </p>

              {/* Location */}
              <div
                className="mt-9 border-t pt-6"
                style={{
                  borderColor: "var(--border)",
                }}
              >
                <p
                  className="text-[10px] uppercase tracking-[0.25em]"
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
                  Based in
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <MapPin
                    size={15}
                    style={{
                      color: "var(--accent)",
                    }}
                  />

                  <p
                    className="text-sm font-medium"
                    style={{
                      color: "var(--text-secondary)",
                    }}
                  >
                    Finland · Working worldwide
                  </p>
                </div>
              </div>

              {/* Availability */}
              <div
                className="mt-6 flex items-center gap-3 border p-4"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface-soft)",
                }}
              >
                <span
                  className="h-2.5 w-2.5 animate-pulse rounded-full"
                  style={{
                    background: "var(--accent)",
                    boxShadow:
                      "0 0 14px color-mix(in srgb, var(--accent) 60%, transparent)",
                  }}
                />

                <p
                  className="text-sm"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  Available for selected projects
                </p>
              </div>

              {/* Decorative coordinates */}
              <div className="mt-7 flex items-center justify-between">
                <span
                  className="font-mono text-[8px] tracking-[0.2em]"
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
                  61°N / 025°E
                </span>

                <span
                  className="font-mono text-[8px] tracking-[0.2em]"
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
                  ONLINE
                </span>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* ===================================================
            TOOLKIT
            =================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={reveal}
          transition={revealTransition()}
          className="mt-20 border-t pt-10 sm:mt-28"
          style={{
            borderColor: "var(--border)",
          }}
        >
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.3em]"
                style={{
                  color: "var(--accent-dark)",
                }}
              >
                Toolkit
              </p>

              <p
                className="mt-4 max-w-xs text-sm leading-relaxed"
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                The tools I use to design, develop, and ship polished
                digital products.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.04,
                    duration: 0.7,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  whileHover={{
                    y: -3,
                  }}
                  className="border px-4 py-2.5 text-sm font-medium transition-all duration-700"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--surface-soft)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            PRINCIPLES
            =================================================== */}

        <div
          className="mt-14 grid gap-px overflow-hidden border sm:grid-cols-3"
          style={{
            borderColor: "var(--border)",
            background: "var(--border)",
          }}
        >
          {principles.map(
            ({ icon: Icon, number, title, text }, index) => (
              <motion.div
                key={title}
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 1.2,
                  ease: [0.19, 1, 0.22, 1],
                }}
                whileHover={{
                  y: -3,
                }}
                className="group relative p-6 transition-all duration-700 sm:p-7"
                style={{
                  background: "var(--surface)",
                }}
              >
                {/* Hover atmosphere */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at top left, color-mix(in srgb, var(--accent) 7%, transparent), transparent 55%)",
                  }}
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <Icon
                      size={20}
                      style={{
                        color: "var(--accent)",
                      }}
                    />

                    <span
                      className="font-mono text-[9px] tracking-[0.2em]"
                      style={{
                        color: "var(--text-muted)",
                      }}
                    >
                      {number}
                    </span>
                  </div>

                  <h3
                    className="mt-6 text-lg font-medium tracking-[-0.025em]"
                    style={{
                      color: "var(--text-primary)",
                    }}
                  >
                    {title}
                  </h3>

                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{
                      color: "var(--text-secondary)",
                    }}
                  >
                    {text}
                  </p>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}