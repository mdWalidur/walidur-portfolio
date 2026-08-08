"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronDown,
  GraduationCap,
  MapPin,
} from "lucide-react";

type ExperienceItem = {
  type: "work" | "education";
  period: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
};

const experiences: ExperienceItem[] = [
  {
    type: "work",
    period: "2024 — Present",
    title: "Web and App Developer",
    organization: "Freelance",
    location: "Remote",
    description:
      "Designing and developing modern web applications with a focus on clean interfaces, scalable architecture, cloud technologies, and practical user experiences.",
    highlights: [
      "Develop responsive web applications using modern JavaScript and React-based technologies.",
      "Build reusable components and maintain clean, structured code.",
      "Work with cloud, DevOps, automation, and deployment workflows.",
      "Explore AI-powered solutions and integrate emerging technologies into applications.",
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "AWS",
      "Docker",
    ],
  },

  {
    type: "work",
    period: "Aug 2020 — Dec 2022",
    title: "Executive",
    organization: "Acsotex Ltd.",
    location: "Narayanganj District, Dhaka, Bangladesh",
    description:
      "Professional experience in an operational business environment, developing communication, coordination, responsibility, and problem-solving skills.",
    highlights: [
      "Coordinated day-to-day operational responsibilities.",
      "Worked with teams and handled professional communication.",
      "Developed organizational and time-management skills.",
      "Handled responsibilities in a structured and deadline-driven environment.",
    ],
    technologies: [
      "Operations",
      "Communication",
      "Coordination",
      "Problem Solving",
    ],
  },

  {
    type: "education",
    period: "2023 — 2027",
    title: "Bachelor of Engineering, Information Technology",
    organization: "Centria University of Applied Sciences",
    location: "Finland",
    description:
      "Bachelor of Engineering studies focused on information technology, programming, cloud computing, DevOps, networking, databases, AI, and modern software development.",
    highlights: [
      "Studying software development and information technology.",
      "Developing practical skills in cloud computing and DevOps.",
      "Working with programming, databases, networking, and modern web technologies.",
      "Building practical projects and continuously expanding technical expertise.",
    ],
    technologies: [
      "C#",
      "C++",
      "Python",
      "JavaScript",
      "React",
      "Azure",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
  },
];

const easing = [0.19, 1, 0.22, 1] as const;

/* =========================================================
   EXPERIENCE ITEM
   ========================================================= */

function ExperienceCard({
  item,
  index,
  expanded,
  onToggle,
}: {
  item: ExperienceItem;
  index: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  const Icon =
    item.type === "education"
      ? GraduationCap
      : BriefcaseBusiness;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: easing,
      }}
      className="relative"
    >
      {/* =====================================================
          DESKTOP TIMELINE MARKER
          ===================================================== */}

      <div
        className="
          absolute
          -left-[13px]
          top-8
          z-20
          hidden
          h-6
          w-6
          items-center
          justify-center
          rounded-full
          border
          md:flex
        "
        style={{
          borderColor: expanded
            ? "var(--accent)"
            : "var(--border)",
          background: "var(--background)",
        }}
      >
        <span
          className="
            h-1.5
            w-1.5
            rounded-full
          "
          style={{
            background: expanded
              ? "var(--accent)"
              : "var(--text-muted)",
            boxShadow: expanded
              ? "0 0 10px var(--accent)"
              : "none",
          }}
        />
      </div>

      {/* =====================================================
          CARD
          ===================================================== */}

      <div
        className="
          overflow-hidden
          border
          transition-all
          duration-500
        "
        style={{
          borderColor: expanded
            ? "color-mix(in srgb, var(--accent) 32%, var(--border))"
            : "var(--border)",
          background: expanded
            ? "var(--surface)"
            : "var(--surface-soft)",
          boxShadow: expanded
            ? "0 25px 80px color-mix(in srgb, var(--shadow-color) 45%, transparent)"
            : "none",
        }}
      >
        {/* ===================================================
            HEADER
            =================================================== */}

        <button
          type="button"
          onClick={onToggle}
          aria-expanded={expanded}
          className="
            group
            flex
            w-full
            items-start
            gap-4
            p-5
            text-left
            outline-none
            transition-colors
            duration-500

            sm:gap-5
            sm:p-6

            lg:gap-7
            lg:p-7

            focus-visible:ring-2
            focus-visible:ring-inset
            focus-visible:ring-[var(--accent)]
          "
        >
          {/* Icon */}

          <span
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              border

              sm:h-12
              sm:w-12
            "
            style={{
              borderColor: expanded
                ? "var(--accent)"
                : "var(--border)",
              background: expanded
                ? "color-mix(in srgb, var(--accent) 9%, transparent)"
                : "transparent",
              color: expanded
                ? "var(--accent)"
                : "var(--text-muted)",
            }}
          >
            <Icon
              size={17}
              strokeWidth={1.5}
            />
          </span>

          {/* Main information */}

          <div className="min-w-0 flex-1">
            {/* Period + type */}

            <div
              className="
                mb-2.5
                flex
                flex-wrap
                items-center
                gap-x-3
                gap-y-1
              "
            >
              <span
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]

                  sm:text-[9px]
                "
                style={{
                  color: "var(--accent)",
                }}
              >
                {item.period}
              </span>

              <span
                className="
                  hidden
                  h-px
                  w-5

                  sm:block
                "
                style={{
                  background: "var(--border)",
                }}
              />

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.2em]

                  sm:text-[9px]
                "
                style={{
                  color: "var(--text-muted)",
                }}
              >
                {item.type === "education"
                  ? "Education"
                  : "Professional"}
              </span>
            </div>

            {/* Title */}

            <h3
              className="
                text-lg
                font-medium
                leading-tight
                tracking-[-0.025em]

                sm:text-xl

                lg:text-2xl
              "
              style={{
                color: "var(--text-primary)",
              }}
            >
              {item.title}
            </h3>

            {/* Organization + location */}

            <div
              className="
                mt-2
                flex
                flex-wrap
                items-center
                gap-x-3
                gap-y-1.5
              "
            >
              <span
                className="
                  text-xs
                  font-medium

                  sm:text-sm
                "
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                {item.organization}
              </span>

              <span
                className="
                  hidden
                  h-3
                  w-px

                  sm:block
                "
                style={{
                  background: "var(--border)",
                }}
              />

              <span
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  text-[10px]

                  sm:text-xs
                "
                style={{
                  color: "var(--text-muted)",
                }}
              >
                <MapPin
                  size={12}
                  strokeWidth={1.5}
                />

                {item.location}
              </span>
            </div>
          </div>

          {/* Expand button */}

          <span
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              border

              sm:h-10
              sm:w-10
            "
            style={{
              borderColor: "var(--border)",
              color: expanded
                ? "var(--accent)"
                : "var(--text-muted)",
            }}
          >
            <ChevronDown
              size={16}
              strokeWidth={1.5}
              className={`
                transition-transform
                duration-500
                ${expanded ? "rotate-180" : ""}
              `}
            />
          </span>
        </button>

        {/* ===================================================
            EXPANDED CONTENT
            =================================================== */}

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
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
                duration: 0.5,
                ease: easing,
              }}
            >
              <div
                className="
                  border-t
                  px-5
                  pb-7
                  pt-6

                  sm:px-6
                  sm:pb-8
                  sm:pt-7

                  lg:px-7
                "
                style={{
                  borderColor: "var(--border)",
                }}
              >
                <div
                  className="
                    grid
                    gap-8

                    lg:grid-cols-[1fr_0.72fr]
                    lg:gap-12
                  "
                >
                  {/* =================================================
                      LEFT SIDE
                      ================================================= */}

                  <div>
                    {/* Description */}

                    <div>
                      <p
                        className="
                          mb-3
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.28em]

                          sm:text-[9px]
                        "
                        style={{
                          color: "var(--accent)",
                        }}
                      >
                        Overview
                      </p>

                      <p
                        className="
                          max-w-2xl
                          text-sm
                          leading-7

                          sm:text-base
                        "
                        style={{
                          color: "var(--text-secondary)",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* Highlights */}

                    <div className="mt-8">
                      <p
                        className="
                          mb-4
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.28em]

                          sm:text-[9px]
                        "
                        style={{
                          color: "var(--accent)",
                        }}
                      >
                        Key highlights
                      </p>

                      <ul className="space-y-3.5">
                        {item.highlights.map(
                          (highlight, highlightIndex) => (
                            <motion.li
                              key={highlight}
                              initial={{
                                opacity: 0,
                                x: -8,
                              }}
                              animate={{
                                opacity: 1,
                                x: 0,
                              }}
                              transition={{
                                duration: 0.4,
                                delay:
                                  highlightIndex *
                                  0.05,
                              }}
                              className="
                                flex
                                gap-3
                                text-sm
                                leading-6
                              "
                              style={{
                                color:
                                  "var(--text-secondary)",
                              }}
                            >
                              <span
                                className="
                                  mt-[9px]
                                  h-1
                                  w-1
                                  shrink-0
                                  rounded-full
                                "
                                style={{
                                  background:
                                    "var(--accent)",
                                  boxShadow:
                                    "0 0 7px var(--accent)",
                                }}
                              />

                              <span>
                                {highlight}
                              </span>
                            </motion.li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* =================================================
                      RIGHT SIDE
                      ================================================= */}

                  <div>
                    <p
                      className="
                        mb-4
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.28em]

                        sm:text-[9px]
                      "
                      style={{
                        color: "var(--accent)",
                      }}
                    >
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="
                              border
                              px-3
                              py-2
                              text-[8px]
                              font-medium
                              uppercase
                              tracking-[0.13em]

                              sm:text-[9px]
                            "
                            style={{
                              borderColor:
                                "var(--border)",
                              background:
                                "var(--surface-soft)",
                              color:
                                "var(--text-secondary)",
                            }}
                          >
                            {technology}
                          </span>
                        )
                      )}
                    </div>

                    {/* Technical marker */}

                    <div
                      className="
                        mt-8
                        border-t
                        pt-5
                      "
                      style={{
                        borderColor:
                          "var(--border)",
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="
                            h-1.5
                            w-1.5
                            rounded-full
                          "
                          style={{
                            background:
                              "var(--accent)",
                            boxShadow:
                              "0 0 10px var(--accent)",
                          }}
                        />

                        <span
                          className="
                            text-[8px]
                            uppercase
                            tracking-[0.22em]

                            sm:text-[9px]
                          "
                          style={{
                            color:
                              "var(--text-muted)",
                          }}
                        >
                          Continuous learning
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

/* =========================================================
   EXPERIENCE SECTION
   ========================================================= */

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
      className="
        relative
        overflow-hidden
        py-24

        md:py-32
      "
      style={{
        background: "var(--background)",
        color: "var(--text-primary)",
      }}
    >
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        {/* Accent glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/4
            h-[420px]
            w-[420px]
            -translate-x-1/2
            rounded-full
            blur-[150px]

            sm:h-[520px]
            sm:w-[520px]
          "
          style={{
            background: "var(--accent)",
            opacity: 0.035,
          }}
        />

        {/* Top border */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-px
          "
          style={{
            background: "var(--border)",
          }}
        />

        {/* Subtle grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
          "
          style={{
            backgroundImage:
              "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* =====================================================
          CONTAINER
          ===================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5

          sm:px-6

          lg:px-8
        "
      >
        {/* =================================================
            HEADER
            ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: easing,
          }}
          className="
            mb-14
            max-w-3xl

            sm:mb-18

            lg:mb-20
          "
        >
          {/* Eyebrow */}

          <div className="mb-6 flex items-center gap-3">
            <span
              className="
                h-px
                w-8

                sm:w-10
              "
              style={{
                background: "var(--accent)",
              }}
            />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.28em]

                sm:text-[10px]
                sm:tracking-[0.32em]
              "
              style={{
                color: "var(--accent)",
              }}
            >
              Experience
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              max-w-4xl
              text-[clamp(2.7rem,8vw,5.8rem)]
              font-light
              leading-[0.9]
              tracking-[-0.06em]
            "
            style={{
              color: "var(--text-primary)",
            }}
          >
            Experience
            <span
              className="
                block
                font-serif
                italic
              "
              style={{
                color: "var(--accent)",
              }}
            >
              & education.
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-6
              max-w-2xl
              text-sm
              leading-7

              sm:mt-7
              sm:text-base
              sm:leading-7

              md:text-lg
            "
            style={{
              color: "var(--text-secondary)",
            }}
          >
            A combination of professional experience,
            academic development, and continuous
            technical learning.
          </p>
        </motion.div>

        {/* =================================================
            TIMELINE
            ================================================= */}

        <div className="relative">
          {/* Desktop timeline line */}

          <div
            aria-hidden="true"
            className="
              absolute
              bottom-4
              left-[11px]
              top-4
              hidden
              w-px

              md:block
            "
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--border) 8%, var(--border) 92%, transparent)",
            }}
          />

          {/* Items */}

          <div
            className="
              space-y-5

              sm:space-y-6

              lg:space-y-7
            "
          >
            {experiences.map(
              (item, index) => (
                <ExperienceCard
                  key={`${item.title}-${item.organization}`}
                  item={item}
                  index={index}
                  expanded={
                    expandedIndex === index
                  }
                  onToggle={() =>
                    toggleItem(index)
                  }
                />
              )
            )}
          </div>
        </div>

        {/* =================================================
            BOTTOM NOTE
            ================================================= */}

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
            duration: 0.9,
            delay: 0.2,
            ease: easing,
          }}
          className="
            mt-12
            flex
            items-center
            gap-3
            border-t
            pt-5

            sm:mt-16
          "
          style={{
            borderColor: "var(--border)",
          }}
        >
          <span
            className="
              h-1.5
              w-1.5
              shrink-0
              rounded-full
            "
            style={{
              background: "var(--accent)",
              boxShadow:
                "0 0 9px var(--accent)",
            }}
          />

          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.22em]

              sm:text-[9px]
              sm:tracking-[0.25em]
            "
            style={{
              color: "var(--text-muted)",
            }}
          >
            Building experience through practice
          </span>

          <ArrowUpRight
            size={13}
            strokeWidth={1.5}
            style={{
              color: "var(--accent)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}