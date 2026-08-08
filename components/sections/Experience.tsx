"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Plus,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type ExperienceItem = {
  type: "work" | "education";
  period: string;
  title: string;
  organization: string;
  location: string;
  summary: string;
  highlights: string[];
  technologies?: string[];
  link?: string;
};

const experience: ExperienceItem[] = [
  {
    type: "work",
    period: "2024 — Present",
    title: "Web and App Developer",
    organization: "Freelance",
    location: "Remote",
    summary:
      "Designing and building fast, accessible web experiences for startups, creators, and growing businesses.",
    highlights: [
      "Shipped responsive products from early concept to production.",
      "Translated complex product requirements into clear, reusable interfaces.",
      "Partnered closely with clients to improve performance and user experience.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    link: "https://linkedin.com/in/",
  },
  {
    type: "work",
    period: "Aug 2020 — Dec 2022",
    title: "Executive",
    organization: "Acsotex Ltd.",
    location: "Narayanganj District, Dhaka, Bangladesh",
    summary:
      "Supported day-to-day business operations through administration, organization, and on-site coordination.",
    highlights: [
      "Contributed to office administration and organized operational workflows.",
      "Strengthened organizational, communication, and coordination skills in a full-time on-site role.",
      "Worked collaboratively to support reliable day-to-day business activities.",
    ],
  },
  {
    type: "education",
    period: "2023 — 2027",
    title: "Bachelor of Engineering, Information Technology",
    organization: "Centria University of Applied Sciences",
    location: "Finland",
    summary:
      "Developed a foundation in software architecture, web engineering, databases, and human-centred product development.",
    highlights: [
      "Focused on modern web development and full-stack application architecture.",
      "Completed practical projects using collaborative software delivery workflows.",
    ],
    technologies: [
      "Software Design",
      "Databases",
      "Web Development",
    ],
  },
];

function TypeIcon({
  type,
}: Pick<ExperienceItem, "type">) {
  return type === "work" ? (
    <BriefcaseBusiness
      size={17}
      strokeWidth={1.6}
    />
  ) : (
    <GraduationCap
      size={18}
      strokeWidth={1.6}
    />
  );
}

export default function Experience() {
  const [expandedIndex, setExpandedIndex] =
    useState<number | null>(0);

  const toggleItem = (index: number) => {
    setExpandedIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative scroll-mt-28 overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-12 xl:px-20"
      style={{
        background: "var(--background)",
        color: "var(--text-primary)",
      }}
    >
      {/* =====================================================
          AMBIENT BACKGROUND
          ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-1/4 h-[32rem] w-[32rem] rounded-full blur-[140px]"
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

      <div className="relative mx-auto max-w-7xl">

        {/* ===================================================
            HEADER
            =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 1.2,
            ease: [0.19, 1, 0.22, 1],
          }}
          className="grid gap-8 border-b pb-10 lg:grid-cols-[1fr_0.62fr]"
          style={{
            borderColor: "var(--border)",
          }}
        >
          <div>
            <div className="mb-6 flex items-center gap-4">
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
                Experience
              </p>
            </div>

            <h2
              id="experience-heading"
              className="max-w-2xl text-4xl font-light tracking-[-0.05em] sm:text-5xl lg:text-6xl"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Building with curiosity,
              <br />

              <span
                className="font-serif italic"
                style={{
                  color: "var(--accent)",
                }}
              >
                clarity, and care.
              </span>
            </h2>
          </div>

          <p
            className="max-w-md self-end text-base leading-7"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            A growing body of work across software
            engineering, digital products, and
            collaborative problem-solving.
          </p>
        </motion.div>

        {/* ===================================================
            TIMELINE
            =================================================== */}

        <div className="relative mt-3">

          {/* Central timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[7px] top-0 hidden w-px sm:block"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--border), var(--border), transparent)",
            }}
          />

          {experience.map((item, index) => {
            const isExpanded =
              expandedIndex === index;

            return (
              <motion.article
                key={`${item.organization}-${item.period}`}
                initial={{
                  opacity: 0,
                  y: 28,
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
                className="group relative border-b"
                style={{
                  borderColor: "var(--border)",
                }}
              >
                {/* Timeline node */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-9 hidden h-[15px] w-[15px] rounded-full border sm:block"
                  style={{
                    borderColor: isExpanded
                      ? "var(--accent)"
                      : "var(--border)",
                    background:
                      "var(--background)",
                    boxShadow: isExpanded
                      ? "0 0 0 5px color-mix(in srgb, var(--accent) 8%, transparent), 0 0 20px color-mix(in srgb, var(--accent) 25%, transparent)"
                      : "none",
                  }}
                >
                  <span
                    className="absolute inset-[4px] rounded-full"
                    style={{
                      background: isExpanded
                        ? "var(--accent)"
                        : "var(--text-muted)",
                    }}
                  />
                </div>

                {/* =================================================
                    HEADER / TRIGGER
                    ================================================= */}

                <button
                  type="button"
                  onClick={() =>
                    toggleItem(index)
                  }
                  aria-expanded={isExpanded}
                  aria-controls={`experience-panel-${index}`}
                  className="group/trigger grid w-full items-start gap-5 py-7 text-left sm:grid-cols-[10rem_1fr_auto] sm:gap-8 sm:py-10 sm:pl-12"
                >
                  {/* Period */}
                  <span
                    className="hidden pt-1 font-mono text-xs sm:block"
                    style={{
                      color: "var(--accent)",
                    }}
                  >
                    {item.period}
                  </span>

                  {/* Main content */}
                  <span className="min-w-0">
                    {/* Mobile meta */}
                    <span className="mb-3 flex items-center gap-3 sm:hidden">
                      <span
                        className="grid h-8 w-8 place-items-center rounded-full border"
                        style={{
                          borderColor:
                            "var(--border)",
                          background:
                            "var(--surface-soft)",
                          color: "var(--accent)",
                        }}
                      >
                        <TypeIcon
                          type={item.type}
                        />
                      </span>

                      <span
                        className="text-[9px] font-semibold uppercase tracking-[0.2em]"
                        style={{
                          color: "var(--accent)",
                        }}
                      >
                        {item.period}
                      </span>
                    </span>

                    {/* Desktop icon + type */}
                    <span className="mb-2 hidden items-center gap-3 sm:flex">
                      <span
                        style={{
                          color: "var(--accent)",
                        }}
                      >
                        <TypeIcon
                          type={item.type}
                        />
                      </span>

                      <span
                        className="text-[9px] font-semibold uppercase tracking-[0.22em]"
                        style={{
                          color: "var(--text-muted)",
                        }}
                      >
                        {item.type ===
                        "work"
                          ? "Professional"
                          : "Education"}
                      </span>
                    </span>

                    <span
                      className="block text-xl font-medium tracking-[-0.035em] transition-colors duration-700 sm:text-2xl"
                      style={{
                        color:
                          "var(--text-primary)",
                      }}
                    >
                      {item.title}
                    </span>

                    <span
                      className="mt-2 block text-sm"
                      style={{
                        color:
                          "var(--text-secondary)",
                      }}
                    >
                      {item.organization}

                      <span
                        className="mx-2"
                        style={{
                          color:
                            "var(--text-muted)",
                        }}
                      >
                        ·
                      </span>

                      {item.location}
                    </span>
                  </span>

                  {/* =================================================
                      EXPAND CONTROL
                      ================================================= */}

                  <span
                    className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-700"
                    style={{
                      borderColor: isExpanded
                        ? "var(--accent)"
                        : "var(--border)",

                      background: isExpanded
                        ? "var(--accent)"
                        : "var(--surface-soft)",

                      color: isExpanded
                        ? "var(--accent-contrast)"
                        : "var(--text-secondary)",

                      transform: isExpanded
                        ? "rotate(45deg)"
                        : "rotate(0deg)",

                      boxShadow: isExpanded
                        ? "0 8px 30px color-mix(in srgb, var(--accent) 20%, transparent)"
                        : "none",
                    }}
                  >
                    <Plus size={17} />
                  </span>
                </button>

                {/* =================================================
                    EXPANDED CONTENT
                    ================================================= */}

                <AnimatePresence
                  initial={false}
                >
                  {isExpanded && (
                    <motion.div
                      id={`experience-panel-${index}`}
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.7,
                        ease: [
                          0.19,
                          1,
                          0.22,
                          1,
                        ],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-0 sm:ml-[10rem] sm:pl-8 sm:pr-16">

                        {/* Content card */}
                        <div
                          className="border p-5 sm:p-7"
                          style={{
                            borderColor:
                              "var(--border)",
                            background:
                              "var(--surface-soft)",
                            boxShadow:
                              "0 20px 70px var(--shadow-color)",
                          }}
                        >
                          {/* Summary */}
                          <p
                            className="max-w-2xl font-serif text-base leading-7 sm:text-lg"
                            style={{
                              color:
                                "var(--text-secondary)",
                            }}
                          >
                            {item.summary}
                          </p>

                          {/* Highlights */}
                          <ul className="mt-7 space-y-3">
                            {item.highlights.map(
                              (highlight) => (
                                <li
                                  key={
                                    highlight
                                  }
                                  className="flex gap-3 text-sm leading-6"
                                  style={{
                                    color:
                                      "var(--text-secondary)",
                                  }}
                                >
                                  <span
                                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                                    style={{
                                      background:
                                        "var(--accent)",
                                      boxShadow:
                                        "0 0 12px color-mix(in srgb, var(--accent) 35%, transparent)",
                                    }}
                                  />

                                  <span>
                                    {highlight}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>

                          {/* Technologies */}
                          {item.technologies &&
                            item.technologies
                              .length >
                              0 && (
                              <div className="mt-7">
                                <p
                                  className="mb-3 text-[9px] font-semibold uppercase tracking-[0.25em]"
                                  style={{
                                    color:
                                      "var(--accent)",
                                  }}
                                >
                                  Technologies
                                </p>

                                <div className="flex flex-wrap gap-2">
                                  {item.technologies.map(
                                    (
                                      technology
                                    ) => (
                                      <span
                                        key={
                                          technology
                                        }
                                        className="rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-700 hover:-translate-y-0.5"
                                        style={{
                                          borderColor:
                                            "var(--border)",
                                          background:
                                            "var(--surface)",
                                          color:
                                            "var(--text-secondary)",
                                        }}
                                      >
                                        {
                                          technology
                                        }
                                      </span>
                                    )
                                  )}
                                </div>
                              </div>
                            )}

                          {/* Profile link */}
                          {item.link && (
                            <a
                              href={
                                item.link
                              }
                              target="_blank"
                              rel="noreferrer"
                              className="group/link mt-8 inline-flex items-center gap-2 text-sm font-semibold"
                              style={{
                                color:
                                  "var(--accent)",
                              }}
                            >
                              View profile

                              <ArrowUpRight
                                size={
                                  16
                                }
                                className="transition-transform duration-700 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                              />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            INSTRUCTION
            ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
            ease: [0.19, 1, 0.22, 1],
          }}
          className="mt-8 flex items-center gap-3"
        >
          <span
            className="h-px w-8"
            style={{
              background: "var(--accent)",
            }}
          />

          <p
            className="text-[9px] uppercase tracking-[0.25em]"
            style={{
              color: "var(--text-muted)",
            }}
          >
            Click an entry to explore the details.
          </p>
        </motion.div>
      </div>
    </section>
  );
}