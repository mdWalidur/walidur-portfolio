"use client";

import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Globe2,
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
    title: "Built with intent",
    text: "Clean implementation, thoughtful details, and interfaces made to last.",
  },
  {
    icon: Globe2,
    title: "Human first",
    text: "Technology should feel useful, clear, accessible, and easy to trust.",
  },
  {
    icon: BrainCircuit,
    title: "Always learning",
    text: "I stay curious about emerging tools, AI, and better ways to solve problems.",
  },
];

const easing = [0.19, 1, 0.22, 1] as const;

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="
        relative
        scroll-mt-28
        overflow-hidden
        px-5
        py-24

        sm:px-8
        sm:py-28

        lg:px-12
        lg:py-32

        xl:px-20
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
        <div
          className="
            absolute
            -right-48
            top-1/4
            h-[32rem]
            w-[32rem]
            rounded-full
            blur-[150px]
          "
          style={{
            background: "var(--accent)",
            opacity: 0.035,
          }}
        />

        <div
          className="
            absolute
            -left-40
            bottom-1/4
            h-[24rem]
            w-[24rem]
            rounded-full
            blur-[130px]
          "
          style={{
            background: "var(--accent)",
            opacity: 0.018,
          }}
        />

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
      </div>

      {/* =====================================================
          CONTAINER
          ===================================================== */}

      <div className="relative mx-auto max-w-7xl">
        {/* ===================================================
            SECTION LABEL
            =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
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
            duration: 0.7,
            ease: easing,
          }}
          className="
            mb-14
            flex
            items-center
            gap-4

            sm:mb-20
          "
        >
          <span
            className="
              h-px
              w-10

              sm:w-12
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
            About me
          </span>
        </motion.div>

        {/* ===================================================
            INTRO
            =================================================== */}

        <div
          className="
            grid
            gap-12

            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-20
          "
        >
          {/* =================================================
              STORY
              ================================================= */}

          <div>
            <motion.h2
              id="about-heading"
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
                max-w-5xl
                text-[clamp(2.8rem,7vw,5.8rem)]
                font-light
                leading-[0.92]
                tracking-[-0.065em]
              "
              style={{
                color: "var(--text-primary)",
              }}
            >
              I turn ambitious ideas into{" "}
              <span
                className="
                  font-serif
                  italic
                "
                style={{
                  color: "var(--accent)",
                }}
              >
                useful digital experiences.
              </span>
            </motion.h2>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
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
                delay: 0.1,
                duration: 0.8,
                ease: easing,
              }}
              className="
                mt-9
                max-w-2xl
                space-y-5
                text-sm
                leading-7

                sm:mt-10
                sm:text-base
                sm:leading-8

                lg:text-lg
              "
              style={{
                color: "var(--text-secondary)",
              }}
            >
              <p>
                I&apos;m Walidur, a Cloud/DevOps + AI
                Engineer with a particular interest
                in the meeting point between design,
                technology, and real human needs. I
                enjoy making complex ideas feel simple.
              </p>

              <p>
                My approach balances careful engineering
                with a strong visual point of view.
                Whether I&apos;m building a product
                interface, experimenting with AI, or
                refining a small interaction, I care
                about the experience behind every
                decision.
              </p>
            </motion.div>

            {/* CTA */}

            <motion.a
              href="#contact"
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.18,
                duration: 0.7,
                ease: easing,
              }}
              className="
                group
                mt-9
                inline-flex
                items-center
                gap-3
                border-b
                pb-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.16em]
                outline-none
                transition-all
                duration-500

                sm:mt-10
                sm:text-[11px]

                focus-visible:ring-2
                focus-visible:ring-[var(--accent)]
                focus-visible:ring-offset-4
              "
              style={{
                borderColor:
                  "color-mix(in srgb, var(--accent) 50%, transparent)",
                color: "var(--accent)",
              }}
            >
              Let&apos;s make something meaningful

              <ArrowDownRight
                size={16}
                strokeWidth={1.5}
                className="
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                  group-hover:translate-y-1
                "
              />
            </motion.a>
          </div>

          {/* =================================================
              CURRENTLY
              ================================================= */}

          <motion.aside
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
              amount: 0.15,
            }}
            transition={{
              delay: 0.1,
              duration: 0.8,
              ease: easing,
            }}
            className="
              relative
              overflow-hidden
              border
              p-6

              sm:p-8
            "
            style={{
              borderColor: "var(--border)",
              background: "var(--surface-soft)",
              boxShadow:
                "0 30px 90px var(--shadow-color)",
            }}
          >
            <div
              aria-hidden="true"
              className="
                absolute
                right-0
                top-0
                h-24
                w-24
                opacity-20
              "
              style={{
                background:
                  "linear-gradient(135deg, var(--accent), transparent 65%)",
              }}
            />

            <div className="relative">
              <div className="flex items-center gap-3">
                <span
                  className="
                    grid
                    h-10
                    w-10
                    place-items-center
                    border
                  "
                  style={{
                    borderColor:
                      "color-mix(in srgb, var(--accent) 35%, var(--border))",
                    background:
                      "color-mix(in srgb, var(--accent) 8%, transparent)",
                    color: "var(--accent)",
                  }}
                >
                  <Sparkles
                    size={17}
                    strokeWidth={1.5}
                  />
                </span>

                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                  "
                  style={{
                    color: "var(--accent)",
                  }}
                >
                  Currently
                </p>
              </div>

              <p
                className="
                  mt-8
                  max-w-md
                  text-2xl
                  font-medium
                  leading-[1.05]
                  tracking-[-0.045em]

                  sm:text-3xl
                "
                style={{
                  color: "var(--text-primary)",
                }}
              >
                Exploring the future of web
                experiences with AI.
              </p>

              <div
                className="
                  mt-8
                  border-t
                  pt-6
                "
                style={{
                  borderColor: "var(--border)",
                }}
              >
                <p
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.22em]
                  "
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
                  Based in
                </p>

                <p
                  className="
                    mt-2
                    text-sm
                    font-medium
                  "
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  Finland · Working worldwide
                </p>
              </div>

              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-3
                  border
                  p-4
                "
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                }}
              >
                <span
                  className="
                    relative
                    flex
                    h-2.5
                    w-2.5
                    shrink-0
                  "
                >
                  <span
                    className="
                      absolute
                      inset-0
                      animate-ping
                      rounded-full
                    "
                    style={{
                      background: "var(--accent)",
                      opacity: 0.3,
                    }}
                  />

                  <span
                    className="
                      relative
                      h-2.5
                      w-2.5
                      rounded-full
                    "
                    style={{
                      background: "var(--accent)",
                      boxShadow:
                        "0 0 14px var(--accent)",
                    }}
                  />
                </span>

                <p
                  className="text-xs sm:text-sm"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  Available for selected projects
                </p>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* ===================================================
            TOOLKIT
            =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
            ease: easing,
          }}
          className="
            mt-20
            border-t
            pt-10

            sm:mt-28
            sm:pt-12
          "
          style={{
            borderColor: "var(--border)",
          }}
        >
          <div
            className="
              grid
              gap-8

              lg:grid-cols-[0.65fr_1.35fr]
              lg:gap-14
            "
          >
            {/* Toolkit heading */}

            <div>
              <div className="flex items-center gap-3">
                <span
                  className="
                    h-px
                    w-8
                  "
                  style={{
                    background: "var(--accent)",
                  }}
                />

                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                  "
                  style={{
                    color: "var(--accent)",
                  }}
                >
                  Toolkit
                </p>
              </div>

              <p
                className="
                  mt-4
                  max-w-sm
                  text-sm
                  leading-7
                "
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                The tools I use to design, develop,
                and ship polished digital products.
              </p>
            </div>

            {/* Skill boxes */}

            <div
              className="
                flex
                flex-wrap
                content-start
                gap-2.5

                sm:gap-3
              "
            >
              {skills.map((skill, index) => (
                <motion.div
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
                    duration: 0.5,
                    ease: easing,
                  }}
                  className="
                    border
                    px-4
                    py-3
                    transition-all
                    duration-500
                    hover:-translate-y-0.5
                  "
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--surface-soft)",
                  }}
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
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ===================================================
    PRINCIPLES
    =================================================== */}

<div
  className="
    mt-12
    grid
    overflow-hidden
    border

    sm:grid-cols-3
  "
  style={{
    borderColor: "var(--border)",
    background: "var(--border)",
  }}
>
  {principles.map(
    ({ icon: Icon, title, text }, index) => (
      <motion.div
        key={title}
        initial={{
          opacity: 0,
          y: 12,
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
          delay: index * 0.06,
          duration: 0.6,
          ease: easing,
        }}
        className={`
          group
          relative
          min-h-[180px]
          p-6

          sm:min-h-[182px]
          sm:p-7

          lg:p-8

          ${index < principles.length - 1
            ? "border-b sm:border-b-0 sm:border-r"
            : ""}
        `}
        style={{
          background: "var(--surface)",
          borderColor: "var(--border)",
        }}
      >
        {/* Number */}

        <span
          className="
            absolute
            right-7
            top-7
            font-mono
            text-[7px]
            tracking-[0.18em]

            lg:right-8
            lg:top-8
          "
          style={{
            color: "var(--text-muted)",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Icon */}

        <span
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            border
          "
          style={{
            borderColor: "var(--border)",
            background: "var(--surface-soft)",
            color: "var(--accent)",
          }}
        >
          <Icon
            size={17}
            strokeWidth={1.5}
          />
        </span>

        {/* Content */}

        <div className="mt-6">
          <h3
            className="
              text-base
              font-medium
              tracking-[-0.025em]

              sm:text-lg
            "
            style={{
              color: "var(--text-primary)",
            }}
          >
            {title}
          </h3>

          <p
            className="
              mt-2
              max-w-sm
              text-xs
              leading-6

              sm:text-sm
              sm:leading-6
            "
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

        {/* ===================================================
            BOTTOM STATEMENT
            =================================================== */}

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
            duration: 0.8,
            delay: 0.15,
            ease: easing,
          }}
          className="
            mt-10
            flex
            items-center
            gap-3

            sm:mt-12
          "
        >
          <span
            className="
              h-px
              w-8
            "
            style={{
              background: "var(--accent)",
            }}
          />

          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.24em]

              sm:text-[9px]
              sm:tracking-[0.28em]
            "
            style={{
              color: "var(--text-muted)",
            }}
          >
            Curiosity → engineering → impact
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