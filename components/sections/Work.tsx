"use client";

import type { ReactNode } from "react";

import {
  ArrowUpRight,
  ExternalLink,
  ShieldCheck,
  Activity,
  Calculator,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import SectionShell from "@/components/ui/SectionTitle";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  visual: "iot" | "calculator" | "security";
};

const projects: Project[] = [
  {
    number: "01",
    title: "Smart Room Monitor",
    category: "Real-Time IoT Dashboard",
    description:
      "A real-time environmental monitoring system that reads temperature and humidity from a DHT22 sensor, transmits data through MQTT, and visualizes live readings in a browser dashboard.",
    tags: [
      "ESP32",
      "DHT22",
      "MQTT",
      "Flask",
      "Socket.IO",
      "Chart.js",
    ],
    liveUrl:
      "https://wokwi.com/projects/460027800656399361",
    githubUrl:
      "https://github.com/mdWalidur/Internet-of-things",
    visual: "iot",
  },

  {
    number: "02",
    title: "Network Calculator Suite",
    category: "Networking Web Tool",
    description:
      "A practical browser-based toolkit for working through common network calculations in a clear, accessible interface.",
    tags: [
      "Networking",
      "Web Tools",
      "GitHub Pages",
      "Responsive Design",
    ],
    liveUrl:
      "https://mdwalidur.github.io/Network-Calculator-Suite/",
    visual: "calculator",
  },

  {
    number: "03",
    title: "System Security Assessment",
    category: "Application Security Testing",
    description:
      "A two-phase security assessment of a Docker-deployed booking system. Used OWASP ZAP to identify, retest, document, and communicate web-security findings.",
    tags: [
      "OWASP ZAP",
      "Docker",
      "Web Security",
      "Penetration Testing",
      "Security Reporting",
    ],
    githubUrl:
      "https://github.com/mdWalidur/Introduction-to-Cybersecurity",
    visual: "security",
  },
];

/* =========================================================
   SHARED VISUAL WRAPPER
   ========================================================= */

function VisualShell({
  children,
  label,
  icon,
}: {
  children: ReactNode;
  label: string;
  icon: ReactNode;
}) {
  return (
    <div
      className="
        relative
        h-full
        min-h-[310px]
        overflow-hidden
        border
        bg-[var(--surface)]

        sm:min-h-[390px]

        lg:min-h-[460px]
      "
      style={{
        borderColor: "var(--border)",
        boxShadow: "0 24px 80px var(--shadow-color)",
      }}
    >
      {/* Ambient glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-56
          w-56
          rounded-full
          blur-3xl
          opacity-[0.08]
        "
        style={{
          background: "var(--accent)",
        }}
      />

      {/* Technical grid */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.045]
        "
        style={{
          backgroundImage:
            "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />

      {/* Top label */}

      <div
        className="
          absolute
          left-5
          right-5
          top-5
          z-20
          flex
          items-center
          justify-between

          sm:left-7
          sm:right-7
          sm:top-7
        "
      >
        <div className="flex items-center gap-2.5">
          <span
            className="
              grid
              h-7
              w-7
              place-items-center
              border
            "
            style={{
              borderColor: "var(--border)",
              color: "var(--accent)",
              background: "var(--surface-soft)",
            }}
          >
            {icon}
          </span>

          <span
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.24em]

              sm:text-[9px]
              sm:tracking-[0.28em]
            "
            style={{
              color: "var(--text-secondary)",
            }}
          >
            {label}
          </span>
        </div>

        <span
          className="
            hidden
            text-[8px]
            uppercase
            tracking-[0.25em]

            sm:block
          "
          style={{
            color: "var(--text-muted)",
          }}
        >
          SYSTEM / 2026
        </span>
      </div>

      {children}
    </div>
  );
}

/* =========================================================
   IOT VISUAL
   ========================================================= */

function IoTVisual() {
  const bars = [
    34,
    46,
    38,
    57,
    48,
    68,
    55,
    78,
    64,
    86,
    72,
    92,
  ];

  return (
    <VisualShell
      label="Live sensor system"
      icon={
        <Activity
          size={14}
          strokeWidth={1.5}
        />
      }
    >
      <div
        className="
          absolute
          inset-x-5
          bottom-5
          top-20

          sm:inset-x-7
          sm:bottom-7
          sm:top-24
        "
      >
        {/* Main title */}

        <div>
          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
            "
            style={{
              color: "var(--accent)",
            }}
          >
            Smart room monitor
          </p>

          <p
            className="
              mt-2
              text-2xl
              font-semibold
              tracking-[-0.05em]

              sm:text-3xl
            "
            style={{
              color: "var(--text-primary)",
            }}
          >
            Live sensor readings
          </p>
        </div>

        {/* Metrics */}

        <div
          className="
            mt-6
            grid
            grid-cols-2
            gap-3

            sm:mt-8
            sm:gap-4
          "
        >
          <div
            className="
              border
              p-4

              sm:p-5
            "
            style={{
              borderColor: "var(--border)",
              background: "var(--surface-soft)",
            }}
          >
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.18em]
              "
              style={{
                color: "var(--text-muted)",
              }}
            >
              Temperature
            </p>

            <p
              className="
                mt-3
                text-2xl
                font-semibold
                tracking-[-0.04em]

                sm:text-3xl
              "
              style={{
                color: "var(--text-primary)",
              }}
            >
              24.6°
              <span
                className="
                  ml-1
                  text-sm
                  font-normal
                "
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                C
              </span>
            </p>
          </div>

          <div
            className="
              border
              p-4

              sm:p-5
            "
            style={{
              borderColor: "var(--border)",
              background: "var(--surface-soft)",
            }}
          >
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.18em]
              "
              style={{
                color: "var(--text-muted)",
              }}
            >
              Humidity
            </p>

            <p
              className="
                mt-3
                text-2xl
                font-semibold
                tracking-[-0.04em]

                sm:text-3xl
              "
              style={{
                color: "var(--text-primary)",
              }}
            >
              61
              <span
                className="
                  ml-1
                  text-sm
                  font-normal
                "
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                %
              </span>
            </p>
          </div>
        </div>

        {/* Chart */}

        <div
          className="
            mt-3
            h-28
            border
            p-4

            sm:mt-4
            sm:h-36
          "
          style={{
            borderColor: "var(--border)",
            background: "var(--surface-soft)",
          }}
        >
          <div className="flex h-full items-end gap-1.5">
            {bars.map((height, index) => (
              <motion.span
                key={index}
                initial={{
                  height: 0,
                }}
                whileInView={{
                  height: `${height}%`,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.035,
                }}
                className="
                  flex-1
                  rounded-t-[2px]
                "
                style={{
                  background: "var(--accent)",
                  opacity:
                    0.28 + index * 0.045,
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom status */}

        <div
          className="
            mt-3
            flex
            items-center
            justify-between

            sm:mt-4
          "
        >
          <div className="flex items-center gap-2">
            <span
              className="
                h-1.5
                w-1.5
                animate-pulse
                rounded-full
              "
              style={{
                background: "var(--accent)",
                boxShadow:
                  "0 0 10px var(--accent)",
              }}
            />

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.2em]
              "
              style={{
                color: "var(--text-secondary)",
              }}
            >
              MQTT connected
            </span>
          </div>

          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.18em]
            "
            style={{
              color: "var(--text-muted)",
            }}
          >
            Real time
          </span>
        </div>
      </div>
    </VisualShell>
  );
}

/* =========================================================
   CALCULATOR VISUAL
   ========================================================= */

function CalculatorVisual() {
  const values = [
    ["IP", "192.168.1.0"],
    ["MASK", "/24"],
    ["HOSTS", "254"],
  ];

  return (
    <VisualShell
      label="Network utility"
      icon={
        <Calculator
          size={14}
          strokeWidth={1.5}
        />
      }
    >
      <div
        className="
          absolute
          inset-x-5
          bottom-5
          top-20

          sm:inset-x-7
          sm:bottom-7
          sm:top-24
        "
      >
        <div
          className="
            border
            p-4
            shadow-2xl

            sm:p-6
          "
          style={{
            borderColor: "var(--border)",
            background: "var(--surface-soft)",
          }}
        >
          {/* Browser controls */}

          <div className="flex items-center gap-1.5">
            {[0, 1, 2].map((item) => (
              <span
                key={item}
                className="
                  h-2
                  w-2
                  rounded-full
                "
                style={{
                  background:
                    item === 0
                      ? "var(--accent)"
                      : "var(--accent-soft)",
                  opacity:
                    item === 0
                      ? 1
                      : item === 1
                        ? 0.6
                        : 0.35,
                }}
              />
            ))}
          </div>

          <div
            className="
              mt-7
              flex
              items-start
              justify-between
            "
          >
            <div>
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                "
                style={{
                  color: "var(--accent)",
                }}
              >
                Network tools
              </p>

              <p
                className="
                  mt-1.5
                  text-lg
                  font-semibold
                  tracking-[-0.04em]

                  sm:text-xl
                "
                style={{
                  color: "var(--text-primary)",
                }}
              >
                Calculator Suite
              </p>
            </div>

            <span
              className="
                border
                px-2.5
                py-1
                text-[8px]
                uppercase
                tracking-[0.15em]
              "
              style={{
                borderColor: "var(--border)",
                color: "var(--accent)",
              }}
            >
              Ready
            </span>
          </div>

          {/* Input */}

          <div
            className="
              mt-6
              grid
              grid-cols-[1fr_auto]
              gap-2.5
            "
          >
            <div
              className="
                border
                px-3
                py-3
              "
              style={{
                borderColor: "var(--border)",
                background: "var(--surface)",
              }}
            >
              <div
                className="
                  h-1.5
                  w-2/3
                  rounded-full
                "
                style={{
                  background: "var(--text-muted)",
                }}
              />
            </div>

            <div
              className="
                grid
                w-14
                place-items-center
                px-2
                text-[9px]
                font-bold
                uppercase
              "
              style={{
                background:
                  "linear-gradient(135deg, var(--accent), var(--accent-dark))",
                color: "var(--accent-contrast)",
              }}
            >
              Calc
            </div>
          </div>

          {/* Results */}

          <div
            className="
              mt-3
              grid
              grid-cols-3
              gap-2.5
            "
          >
            {values.map(([label, value]) => (
              <div
                key={label}
                className="
                  border
                  p-3
                "
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                }}
              >
                <p
                  className="
                    text-[7px]
                    uppercase
                    tracking-[0.14em]
                  "
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
                  {label}
                </p>

                <p
                  className="
                    mt-2
                    truncate
                    text-[10px]
                    font-medium

                    sm:text-xs
                  "
                  style={{
                    color: "var(--text-primary)",
                  }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Chart */}

          <div
            className="
              mt-3
              h-20
              border
              p-3
            "
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
            }}
          >
            <div
              className="
                flex
                h-full
                items-end
                gap-1
              "
            >
              {[35, 55, 42, 75, 58, 90, 68, 80].map(
                (height, index) => (
                  <span
                    key={index}
                    className="
                      flex-1
                      rounded-t-sm
                    "
                    style={{
                      height: `${height}%`,
                      background: "var(--accent)",
                      opacity:
                        0.32 + index * 0.055,
                    }}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

/* =========================================================
   SECURITY VISUAL
   ========================================================= */

function SecurityVisual() {
  const findings = [
    {
      label: "SQL injection",
      status: "Resolved",
    },
    {
      label: "Path traversal",
      status: "Resolved",
    },
    {
      label: "CSRF protection",
      status: "Review",
    },
  ];

  return (
    <VisualShell
      label="Security assessment"
      icon={
        <ShieldCheck
          size={14}
          strokeWidth={1.5}
        />
      }
    >
      <div
        className="
          absolute
          inset-x-5
          bottom-5
          top-20

          sm:inset-x-7
          sm:bottom-7
          sm:top-24
        "
      >
        <div
          className="
            border
            p-4
            shadow-2xl

            sm:p-6
          "
          style={{
            borderColor: "var(--border)",
            background: "var(--surface-soft)",
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {[0, 1, 2].map((item) => (
                <span
                  key={item}
                  className="
                    h-2
                    w-2
                    rounded-full
                  "
                  style={{
                    background:
                      item === 0
                        ? "var(--accent)"
                        : "var(--accent-soft)",
                    opacity:
                      item === 0
                        ? 1
                        : item === 1
                          ? 0.6
                          : 0.35,
                  }}
                />
              ))}
            </div>

            <ShieldCheck
              size={18}
              strokeWidth={1.5}
              style={{
                color: "var(--accent)",
              }}
            />
          </div>

          <div className="mt-7">
            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.2em]
              "
              style={{
                color: "var(--accent)",
              }}
            >
              Application security
            </p>

            <p
              className="
                mt-1.5
                text-xl
                font-semibold
                tracking-[-0.05em]

                sm:text-2xl
              "
              style={{
                color: "var(--text-primary)",
              }}
            >
              Booking System
            </p>
          </div>

          <div className="mt-6 space-y-2">
            {findings.map((finding) => (
              <div
                key={finding.label}
                className="
                  flex
                  items-center
                  justify-between
                  gap-3
                  border
                  px-3
                  py-3
                "
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                }}
              >
                <span
                  className="
                    text-[10px]

                    sm:text-xs
                  "
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  {finding.label}
                </span>

                <span
                  className="
                    flex
                    shrink-0
                    items-center
                    gap-1.5
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]

                    sm:text-[8px]
                  "
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                    "
                    style={{
                      background:
                        finding.status ===
                        "Resolved"
                          ? "var(--accent)"
                          : "var(--accent-soft)",
                    }}
                  />

                  {finding.status}
                </span>
              </div>
            ))}
          </div>

          <div
            className="
              mt-3
              flex
              items-center
              justify-between
              border
              px-3
              py-3

              sm:px-4
            "
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
            }}
          >
            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.15em]
              "
              style={{
                color: "var(--text-secondary)",
              }}
            >
              Retesting complete
            </span>

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.12em]
              "
              style={{
                color: "var(--accent)",
              }}
            >
              Phase 02
            </span>
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

/* =========================================================
   VISUAL SELECTOR
   ========================================================= */

function ProjectVisual({
  visual,
}: {
  visual: Project["visual"];
}) {
  if (visual === "calculator") {
    return <CalculatorVisual />;
  }

  if (visual === "security") {
    return <SecurityVisual />;
  }

  return <IoTVisual />;
}

/* =========================================================
   PROJECT CARD
   ========================================================= */

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const destinationUrl =
    project.liveUrl ?? project.githubUrl;

  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.9,
        delay: index * 0.08,
        ease: [0.19, 1, 0.22, 1],
      }}
      className="group relative"
    >
      {/* Project number line */}

      <div
        className="
          mb-5
          flex
          items-center
          justify-between

          sm:mb-7
        "
      >
        <div className="flex items-center gap-3">
          <span
            className="
              font-mono
              text-sm
              tracking-[-0.02em]
            "
            style={{
              color: "var(--accent)",
            }}
          >
            /{project.number}
          </span>

          <span
            className="
              h-px
              w-8

              sm:w-12
            "
            style={{
              background: "var(--border)",
            }}
          />

          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.22em]

              sm:text-[9px]
              sm:tracking-[0.28em]
            "
            style={{
              color: "var(--text-muted)",
            }}
          >
            Selected project
          </span>
        </div>

        <span
          className="
            hidden
            text-[8px]
            uppercase
            tracking-[0.25em]

            sm:block
          "
          style={{
            color: "var(--text-muted)",
          }}
        >
          0{index + 1} / 03
        </span>
      </div>

      {/* Main layout */}

      <div
        className={`
          grid
          items-center
          gap-8

          lg:grid-cols-[1.12fr_0.88fr]
          lg:gap-14

          xl:gap-20

          ${
            reversed
              ? "lg:[&>.project-visual]:order-2"
              : ""
          }
        `}
      >
        {/* Visual */}

        <div className="project-visual">
          {destinationUrl ? (
            <a
              href={destinationUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title}`}
              className="
                group/visual
                relative
                block
                overflow-hidden
                outline-none
                focus-visible:ring-2
                focus-visible:ring-[var(--accent)]
                focus-visible:ring-offset-4
                focus-visible:ring-offset-[var(--background)]
              "
            >
              <div
                className="
                  transition-transform
                  duration-1000
                  ease-[cubic-bezier(0.19,1,0.22,1)]
                  group-hover/visual:scale-[1.015]
                "
              >
                <ProjectVisual
                  visual={project.visual}
                />
              </div>

              {/* Hover overlay */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-700
                  group-hover/visual:opacity-100
                "
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in srgb, var(--accent) 8%, transparent), transparent 45%)",
                }}
              />

              {/* Open button */}

              <span
                className="
                  absolute
                  right-4
                  top-4
                  z-30
                  grid
                  h-10
                  w-10
                  translate-y-1
                  place-items-center
                  border
                  opacity-0
                  transition-all
                  duration-500
                  group-hover/visual:translate-y-0
                  group-hover/visual:opacity-100

                  sm:right-5
                  sm:top-5
                  sm:h-11
                  sm:w-11
                "
                style={{
                  borderColor: "var(--accent)",
                  background: "var(--accent)",
                  color: "var(--accent-contrast)",
                }}
              >
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.6}
                />
              </span>

              {/* Category */}

              <span
                className="
                  absolute
                  bottom-4
                  left-4
                  z-30
                  border
                  px-3
                  py-1.5
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  backdrop-blur-md

                  sm:bottom-5
                  sm:left-5
                  sm:text-[8px]
                "
                style={{
                  borderColor: "var(--border)",
                  background:
                    "color-mix(in srgb, var(--background) 82%, transparent)",
                  color: "var(--text-primary)",
                }}
              >
                {project.category}
              </span>
            </a>
          ) : (
            <ProjectVisual
              visual={project.visual}
            />
          )}
        </div>

        {/* Information */}

        <div
          className="
            lg:py-5

            xl:py-8
          "
        >
          <p
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.2em]

              sm:text-[9px]
              sm:tracking-[0.25em]
            "
            style={{
              color: "var(--accent)",
            }}
          >
            {project.category}
          </p>

          <h3
            className="
              mt-3
              max-w-xl
              text-3xl
              font-semibold
              leading-[0.98]
              tracking-[-0.055em]

              sm:mt-4
              sm:text-4xl

              lg:text-[clamp(2.5rem,4vw,4.4rem)]
            "
            style={{
              color: "var(--text-primary)",
            }}
          >
            {project.title}
          </h3>

          <p
            className="
              mt-5
              max-w-xl
              text-sm
              leading-7

              sm:mt-6
              sm:text-base
              sm:leading-7
            "
            style={{
              color: "var(--text-secondary)",
            }}
          >
            {project.description}
          </p>

          {/* Tags */}

          <div
            className="
              mt-6
              flex
              max-w-xl
              flex-wrap
              gap-2
            "
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="
                  border
                  px-2.5
                  py-1.5
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.1em]
                  transition-colors
                  duration-500

                  sm:px-3
                  sm:text-[9px]
                "
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface-soft)",
                  color: "var(--text-secondary)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}

          <div
            className="
              mt-7
              flex
              flex-wrap
              items-center
              gap-4

              sm:mt-8
              sm:gap-5
            "
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  group/link
                  inline-flex
                  min-h-10
                  items-center
                  gap-2
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  transition-transform
                  duration-500
                  hover:-translate-y-0.5

                  sm:text-[11px]
                "
                style={{
                  color: "var(--accent)",
                }}
              >
                View project

                <ExternalLink
                  size={15}
                  strokeWidth={1.6}
                  className="
                    transition-transform
                    duration-500
                    group-hover/link:translate-x-0.5
                    group-hover/link:-translate-y-0.5
                  "
                />
              </a>
            )}

            {project.liveUrl &&
              project.githubUrl && (
                <span
                  className="
                    h-5
                    w-px
                  "
                  style={{
                    background: "var(--border)",
                  }}
                />
              )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  group/github
                  inline-flex
                  min-h-10
                  items-center
                  gap-2
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  transition-transform
                  duration-500
                  hover:-translate-y-0.5

                  sm:text-[11px]
                "
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                <FaGithub
                  size={17}
                  className="
                    transition-colors
                    duration-500
                    group-hover/github:text-[var(--accent)]
                  "
                />

                {project.liveUrl
                  ? "Source"
                  : "View on GitHub"}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Divider */}

      {index < projects.length - 1 && (
        <div
          className="
            mt-14
            h-px
            w-full

            sm:mt-20

            lg:mt-28
          "
          style={{
            background:
              "linear-gradient(90deg, var(--border), transparent)",
          }}
        />
      )}
    </motion.article>
  );
}

/* =========================================================
   WORK SECTION
   ========================================================= */

export default function Work() {
  return (
    <SectionShell
      id="work"
      eyebrow="Selected work"
      title="Projects made to solve real problems."
      description="A selection of projects spanning IoT, web development, networking, and cybersecurity."
      contentClassName="
        space-y-14
        sm:space-y-20
        lg:space-y-28
      "
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          project={project}
          index={index}
        />
      ))}

      {/* More work */}

      <motion.a
        href="https://github.com/mdWalidur"
        target="_blank"
        rel="noreferrer"
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
        }}
        transition={{
          duration: 0.8,
          ease: [0.19, 1, 0.22, 1],
        }}
        className="
          group
          mt-12
          flex
          min-h-16
          items-center
          justify-between
          gap-4
          border-y
          px-1
          py-5
          outline-none
          transition-all
          duration-700

          sm:mt-20
          sm:min-h-20
          sm:py-6

          focus-visible:ring-2
          focus-visible:ring-[var(--accent)]
        "
        style={{
          borderColor: "var(--border)",
          color: "var(--text-primary)",
        }}
      >
        <span className="flex items-center gap-3">
          <span
            className="
              grid
              h-8
              w-8
              place-items-center
              border
            "
            style={{
              borderColor: "var(--border)",
              color: "var(--accent)",
              background: "var(--surface-soft)",
            }}
          >
            <FaGithub size={15} />
          </span>

          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.16em]

              sm:text-[10px]
              sm:tracking-[0.2em]
            "
          >
            Explore more work on GitHub
          </span>
        </span>

        <ArrowUpRight
          size={19}
          strokeWidth={1.5}
          style={{
            color: "var(--accent)",
          }}
          className="
            shrink-0
            transition-transform
            duration-500
            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
        />
      </motion.a>
    </SectionShell>
  );
}