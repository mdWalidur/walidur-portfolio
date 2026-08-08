"use client";

import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { motion, Variants } from "framer-motion";

import HeroTechStack from "./HeroTechStack";
import Hero3DDecor from "./Hero3DDecor";

type HeroProps = {
  name?: string;
  role?: string;
  tagline?: string;
  portraitSrc?: string;
};

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/mdWalidur",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/md-walidur-rahman-b86453264/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:ratul087@gmail.com",
    icon: Mail,
  },
];

const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

const transition = (delay = 0) => ({
  delay,
  duration: 1.2,
  ease: [0.19, 1, 0.22, 1] as const,
});

export default function Hero({
  name = "Walidur Rahman",
  role = "Cloud / DevOps + AI Engineer",
  tagline = "Building cloud-native applications, automating infrastructure, and creating AI-powered solutions.",
  portraitSrc = "/profile/profile.PNG",
}: HeroProps) {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="
        relative
        isolate
        min-h-screen
        overflow-hidden
      "
      style={{
        background: "var(--background)",
        color: "var(--text-primary)",
      }}
    >
      {/* =====================================================
          3D BACKGROUND
          ===================================================== */}

      <Hero3DDecor />

      {/* =====================================================
          BACKGROUND ATMOSPHERE
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
        "
      >
        {/* Accent glow */}

        <div
          className="
            absolute
            inset-0
          "
          style={{
            background:
              "radial-gradient(circle at 50% 42%, color-mix(in srgb, var(--accent) 9%, transparent), transparent 34%)",
          }}
        />

        {/* Technical grid */}

        <div
          className="
            absolute
            inset-0
          "
          style={{
            backgroundImage:
              "linear-gradient(color-mix(in srgb, var(--text-primary) 3%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--text-primary) 3%, transparent) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 90%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 90%)",
          }}
        />

        {/* Bottom fade */}

        <div
          className="
            absolute
            inset-0
          "
          style={{
            background:
              "linear-gradient(to bottom, color-mix(in srgb, var(--background) 10%, transparent), color-mix(in srgb, var(--background) 20%, transparent), var(--background))",
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
          ===================================================== */}

      <div
        className="
          mx-auto
          flex
          min-h-screen
          max-w-[1600px]
          flex-col
          px-4
          pb-6
          pt-24

          sm:px-6
          sm:pb-8
          sm:pt-28

          md:px-10

          lg:px-14
        "
      >
        <div className="flex flex-1 items-center">
          <div
            className="
              grid
              w-full
              items-center

              gap-12

              md:gap-14

              lg:grid-cols-[1fr_0.9fr]
              lg:gap-12

              xl:grid-cols-[1.05fr_0.95fr]
              xl:gap-20
            "
          >
            {/* =================================================
                LEFT CONTENT
                ================================================= */}

            <div
              className="
                relative
                z-10
                w-full
                max-w-3xl
              "
            >
              {/* -------------------------------------------------
                  ROLE
                  ------------------------------------------------- */}

              <motion.div
                initial="hidden"
                animate="visible"
                variants={reveal}
                transition={transition(0)}
                className="
                  mb-6
                  flex
                  items-center
                  gap-3

                  sm:mb-8
                  sm:gap-4
                "
              >
                <span
                  className="
                    h-px
                    w-8

                    sm:w-12
                  "
                  style={{
                    background: "var(--accent)",
                  }}
                />

                <span
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]

                    sm:text-[10px]
                    sm:tracking-[0.32em]
                  "
                  style={{
                    color: "var(--accent)",
                  }}
                >
                  {role}
                </span>
              </motion.div>

              {/* -------------------------------------------------
                  MAIN HEADING
                  ------------------------------------------------- */}

              <motion.h1
                id="hero-heading"
                initial="hidden"
                animate="visible"
                variants={reveal}
                transition={transition(0.12)}
                className="
                  font-sans
                  text-[clamp(3rem,14vw,7.5rem)]
                  font-light
                  leading-[0.9]
                  tracking-[-0.065em]

                  sm:text-[clamp(3.5rem,10vw,7.5rem)]

                  lg:text-[clamp(4.5rem,8vw,7.5rem)]
                "
                style={{
                  color: "var(--text-primary)",
                }}
              >
                <span className="block">
                  Building
                </span>

                <span
                  className="block"
                  style={{
                    color: "var(--text-primary)",
                  }}
                >
                  systems
                </span>

                <span
                  className="
                    block
                    font-serif
                    italic
                    font-light
                  "
                  style={{
                    color: "var(--accent)",
                  }}
                >
                  that scale.
                </span>
              </motion.h1>

              {/* -------------------------------------------------
                  NAME
                  ------------------------------------------------- */}

              <motion.div
                initial="hidden"
                animate="visible"
                variants={reveal}
                transition={transition(0.22)}
                className="
                  mt-6

                  sm:mt-8
                "
              >
                <p
                  className="
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.25em]

                    sm:text-xs
                    sm:tracking-[0.3em]
                  "
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
                  — {name}
                </p>
              </motion.div>

              {/* -------------------------------------------------
                  TAGLINE
                  ------------------------------------------------- */}

              <motion.p
                initial="hidden"
                animate="visible"
                variants={reveal}
                transition={transition(0.3)}
                className="
                  mt-5
                  max-w-xl
                  font-serif
                  text-base
                  italic
                  leading-relaxed

                  sm:mt-7
                  sm:text-lg

                  md:text-xl
                "
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                {tagline}
              </motion.p>

              {/* -------------------------------------------------
                  ACTION BUTTONS
                  ------------------------------------------------- */}

              <motion.div
                initial="hidden"
                animate="visible"
                variants={reveal}
                transition={transition(0.4)}
                className="
                  mt-7
                  flex
                  w-full
                  flex-col
                  gap-3

                  sm:mt-9
                  sm:flex-row
                  sm:flex-wrap
                  sm:items-center
                  sm:gap-4
                "
              >
                {/* Primary */}

                <a
                  href="#work"
                  className="
                    group
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-4
                    bg-gradient-to-br
                    from-[var(--accent)]
                    to-[var(--accent-dark)]
                    px-5
                    py-3.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    transition-all
                    duration-700
                    hover:-translate-y-0.5

                    sm:w-auto
                    sm:justify-start
                    sm:gap-5
                    sm:px-6
                    sm:py-4
                    sm:text-[11px]
                    sm:tracking-[0.2em]
                  "
                  style={{
                    color: "var(--accent-contrast)",
                    boxShadow:
                      "0 10px 35px color-mix(in srgb, var(--accent) 18%, transparent)",
                  }}
                >
                  Explore selected work

                  <ArrowDownRight
                    size={16}
                    strokeWidth={1.5}
                    className="
                      transition-transform
                      duration-700
                      group-hover:translate-x-1
                      group-hover:translate-y-1
                    "
                  />
                </a>

                {/* Resume */}

                <a
                  href="/WalidurRahmanCV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    border
                    px-5
                    py-3.5
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    backdrop-blur-[20px]
                    transition-all
                    duration-700
                    hover:-translate-y-0.5

                    sm:w-auto
                    sm:px-6
                    sm:py-4
                    sm:text-[11px]
                    sm:tracking-[0.2em]
                  "
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--surface-soft)",
                    color: "var(--text-primary)",
                  }}
                >
                  Resume

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="
                      transition-transform
                      duration-700
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </a>
              </motion.div>

              {/* -------------------------------------------------
                  SOCIAL LINKS
                  ------------------------------------------------- */}

              <motion.div
                initial="hidden"
                animate="visible"
                variants={reveal}
                transition={transition(0.5)}
                className="
                  mt-8
                  flex
                  items-center
                  gap-4

                  sm:mt-10
                  sm:gap-5
                "
              >
                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.25em]

                    sm:text-[9px]
                    sm:tracking-[0.28em]
                  "
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
                  Connect
                </span>

                {socialLinks.map(
                  ({
                    label,
                    href,
                    icon: Icon,
                  }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target={
                        href.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        href.startsWith("http")
                          ? "noreferrer"
                          : undefined
                      }
                      className="
                        group
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        transition-all
                        duration-700
                        hover:-translate-y-0.5

                        sm:h-auto
                        sm:w-auto
                      "
                      style={{
                        color:
                          "var(--text-secondary)",
                      }}
                    >
                      <Icon
                        size={17}
                        className="
                          transition-colors
                          duration-700
                          group-hover:text-[var(--accent)]
                        "
                      />
                    </a>
                  )
                )}
              </motion.div>
            </div>

            {/* =================================================
                RIGHT SIDE
                ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={transition(0.25)}
              className="
                relative
                mx-auto
                w-full
                max-w-[520px]

                lg:mx-auto
              "
            >
              {/* -------------------------------------------------
                  PORTRAIT GLOW
                  ------------------------------------------------- */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-8
                  rounded-full
                  blur-[80px]

                  sm:-inset-12
                  sm:blur-[100px]
                "
                style={{
                  background: "var(--accent)",
                  opacity: 0.07,
                }}
              />

              {/* -------------------------------------------------
                  PORTRAIT CARD
                  ------------------------------------------------- */}

              <div
                className="
                  relative
                  overflow-hidden
                  border
                  p-1.5
                  backdrop-blur-[20px]

                  sm:p-2
                "
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface-soft)",
                }}
              >
                <div
                  className="
                    relative
                    aspect-[4/5]
                    overflow-hidden
                  "
                >
                  <Image
  src={portraitSrc}
  alt={`Portrait of ${name}`}
  fill
  priority
  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 78vw, 42vw"
  className="
    object-cover
    object-center
    grayscale-[35%]
    transition-all
    duration-[1200ms]
    hover:scale-[1.025]
    hover:grayscale-0
  "
/>

                  {/* Image readability overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                    "
                    style={{
                      background:
                        "linear-gradient(to top, color-mix(in srgb, var(--background) 88%, transparent), transparent 52%, color-mix(in srgb, var(--background) 10%, transparent))",
                    }}
                  />

                  {/* Theme accent overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                    "
                    style={{
                      background:
                        "linear-gradient(115deg, color-mix(in srgb, var(--accent) 12%, transparent), transparent 35%, transparent 70%, color-mix(in srgb, var(--text-primary) 3%, transparent))",
                    }}
                  />

                  {/* Portrait caption */}

                  <div
                    className="
                      absolute
                      bottom-4
                      left-4
                      right-4

                      sm:bottom-6
                      sm:left-6
                      sm:right-6
                    "
                  >
                    <div
                      className="
                        border-t
                        pt-3

                        sm:pt-4
                      "
                      style={{
                        borderColor:
                          "color-mix(in srgb, var(--text-primary) 20%, transparent)",
                      }}
                    >
                      <p
                        className="
                          text-[8px]
                          uppercase
                          tracking-[0.25em]

                          sm:text-[9px]
                          sm:tracking-[0.3em]
                        "
                        style={{
                          color: "var(--accent-soft)",
                        }}
                      >
                        Cloud / DevOps / AI
                      </p>

                      <p
                        className="
                          mt-1.5
                          max-w-sm
                          font-serif
                          text-base
                          italic

                          sm:mt-2
                          sm:text-lg
                        "
                        style={{
                          color: "var(--text-primary)",
                        }}
                      >
                        Engineering digital systems
                        with clarity, scale, and
                        purpose.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* -------------------------------------------------
                  STATUS CARD
                  ------------------------------------------------- */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-3
                  top-6
                  hidden
                  border
                  px-3
                  py-2
                  backdrop-blur-[20px]

                  sm:-left-5
                  sm:top-16
                  sm:block
                  sm:px-4
                  sm:py-3
                "
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                }}
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2

                    sm:gap-3
                  "
                >
                  <span
                    className="
                      relative
                      flex
                      h-2
                      w-2
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
                        background:
                          "var(--accent)",
                        opacity: 0.5,
                      }}
                    />

                    <span
                      className="
                        relative
                        h-2
                        w-2
                        rounded-full
                      "
                      style={{
                        background:
                          "var(--accent)",
                      }}
                    />
                  </span>

                  <div>
                    <p
                      className="
                        text-[7px]
                        uppercase
                        tracking-[0.2em]

                        sm:text-[8px]
                        sm:tracking-[0.25em]
                      "
                      style={{
                        color:
                          "var(--text-muted)",
                      }}
                    >
                      Status
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.14em]

                        sm:mt-1
                        sm:text-[10px]
                        sm:tracking-[0.16em]
                      "
                      style={{
                        color:
                          "var(--text-primary)",
                      }}
                    >
                      Available
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* -------------------------------------------------
                  TECHNOLOGY STACK
                  ------------------------------------------------- */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={transition(0.65)}
                className="
                  mt-3
                  border
                  p-3
                  backdrop-blur-[20px]

                  sm:mt-4
                  sm:p-4
                "
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface-soft)",
                }}
              >
                <div
                  className="
                    mb-2.5
                    flex
                    items-center
                    justify-between

                    sm:mb-3
                  "
                >
                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.25em]

                      sm:text-[9px]
                      sm:tracking-[0.3em]
                    "
                    style={{
                      color:
                        "var(--text-secondary)",
                    }}
                  >
                    Technology
                  </span>

                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.2em]

                      sm:text-[9px]
                      sm:tracking-[0.25em]
                    "
                    style={{
                      color: "var(--accent)",
                    }}
                  >
                    Stack
                  </span>
                </div>

                <HeroTechStack />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM TECHNICAL FOOTER
            ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={transition(0.8)}
          className="
            mt-8
            flex
            flex-col
            gap-4
            border-t
            pt-4
            text-[8px]
            uppercase
            tracking-[0.22em]

            sm:mt-10
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:gap-5
            sm:pt-5
            sm:text-[9px]
            sm:tracking-[0.28em]
          "
          style={{
            borderColor: "var(--border)",
            color: "var(--text-secondary)",
          }}
        >
          <div
            className="
              flex
              items-center
              gap-2

              sm:gap-3
            "
          >
            <span
              className="
                relative
                flex
                h-2
                w-2
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
                  opacity: 0.4,
                }}
              />

              <span
                className="
                  relative
                  h-2
                  w-2
                  rounded-full
                "
                style={{
                  background: "var(--accent)",
                }}
              />
            </span>

            <span
              style={{
                color: "var(--accent)",
              }}
            >
              Sensory engine active
            </span>

            <span
              className="hidden sm:inline"
              style={{
                color: "var(--text-muted)",
              }}
            >
              •
            </span>

            <span
              className="hidden sm:inline"
              style={{
                color: "var(--text-muted)",
              }}
            >
              Cloud / DevOps / AI
            </span>
          </div>

          <a
            href="#work"
            className="
              group
              inline-flex
              items-center
              gap-2
              transition-colors
              duration-700
            "
            style={{
              color: "var(--text-secondary)",
            }}
          >
            <span className="group-hover:text-[var(--accent)]">
              Scroll to explore
            </span>

            <ArrowDownRight
              size={13}
              strokeWidth={1.5}
              className="
                transition-transform
                duration-700
                group-hover:translate-y-1
              "
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}