"use client";

import {
  ArrowUpRight,
  ExternalLink,
  Layers3,
  ShieldCheck,
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
    title: "Booking System Security Assessment",
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
   PROJECT VISUALS
   ========================================================= */

function ProjectVisual({
  visual,
}: Pick<Project, "visual">) {
  if (visual === "calculator") {
    return (
      <div
        className="relative h-full overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--surface), var(--background))",
        }}
      >
        <div
          className="absolute inset-0 opacity-25"
          style={{
            background:
              "radial-gradient(circle at 20% 15%, var(--accent), transparent 28%), radial-gradient(circle at 80% 80%, var(--accent-soft), transparent 30%)",
          }}
        />

        {/* grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(var(--border-soft) 1px, transparent 1px), linear-gradient(90deg, var(--border-soft) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        <div
          className="absolute inset-[8%] border p-4 shadow-2xl backdrop-blur-xl sm:p-6"
          style={{
            borderColor: "var(--border)",
            background: "var(--surface-soft)",
          }}
        >
          <div className="flex items-center gap-1.5">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--accent)" }}
            />
            <span
              className="h-1.5 w-1.5 rounded-full opacity-60"
              style={{ background: "var(--accent-soft)" }}
            />
            <span
              className="h-1.5 w-1.5 rounded-full opacity-40"
              style={{ background: "var(--accent)" }}
            />
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <p
                className="text-[9px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: "var(--accent)" }}
              >
                Network tools
              </p>

              <p
                className="mt-1 text-sm font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Calculator Suite
              </p>
            </div>

            <span
              className="border px-2.5 py-1 text-[9px] uppercase tracking-[0.12em]"
              style={{
                borderColor: "var(--border)",
                background: "var(--surface-soft)",
                color: "var(--accent)",
              }}
            >
              Ready
            </span>
          </div>

          <div className="mt-6 grid grid-cols-[1fr_auto] gap-3">
            <div
              className="h-10 border px-3 py-3"
              style={{
                borderColor: "var(--border)",
                background: "var(--surface-soft)",
              }}
            >
              <div
                className="h-1.5 w-2/3"
                style={{
                  background: "var(--text-muted)",
                }}
              />
            </div>

            <div
              className="grid h-10 w-12 place-items-center text-xs font-bold"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent), var(--accent-dark))",
                color: "var(--accent-contrast)",
              }}
            >
              Calc
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              ["IP", "192.168.1.0"],
              ["Mask", "/24"],
              ["Hosts", "254"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="border p-3"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface-soft)",
                }}
              >
                <p
                  className="text-[8px] uppercase tracking-[0.14em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {label}
                </p>

                <p
                  className="mt-2 truncate text-xs font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-4 h-16 border p-3"
            style={{
              borderColor: "var(--border)",
              background: "var(--surface-soft)",
            }}
          >
            <div className="flex h-full items-end gap-1.5">
              {[35, 55, 42, 75, 58, 90, 68, 80].map(
                (height, index) => (
                  <span
                    key={index}
                    className="flex-1"
                    style={{
                      height: `${height}%`,
                      background: "var(--accent)",
                      opacity: 0.35 + index * 0.05,
                    }}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (visual === "security") {
    return (
      <div
        className="relative h-full overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--background), var(--surface))",
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, var(--accent), transparent 28%), radial-gradient(circle at 80% 75%, var(--accent-soft), transparent 30%)",
          }}
        />

        <div
          className="absolute inset-[8%] border p-4 shadow-2xl backdrop-blur-xl sm:p-6"
          style={{
            borderColor: "var(--border)",
            background: "var(--surface-soft)",
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--accent)" }}
              />
              <span
                className="h-1.5 w-1.5 rounded-full opacity-60"
                style={{ background: "var(--accent-soft)" }}
              />
              <span
                className="h-1.5 w-1.5 rounded-full opacity-40"
                style={{ background: "var(--accent)" }}
              />
            </div>

            <ShieldCheck
              size={19}
              style={{ color: "var(--accent)" }}
            />
          </div>

          <div className="mt-7">
            <p
              className="text-[9px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "var(--accent)" }}
            >
              Security assessment
            </p>

            <p
              className="mt-1 text-xl font-semibold tracking-[-0.04em]"
              style={{ color: "var(--text-primary)" }}
            >
              Booking System
            </p>
          </div>

          <div className="mt-6 grid gap-2.5">
            {[
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
            ].map((finding) => (
              <div
                key={finding.label}
                className="flex items-center justify-between border px-3.5 py-3"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface-soft)",
                }}
              >
                <span
                  className="text-xs"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  {finding.label}
                </span>

                <span
                  className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.12em]"
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      background:
                        finding.status === "Resolved"
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
            className="mt-4 flex items-center justify-between border px-4 py-3"
            style={{
              borderColor: "var(--border)",
              background: "var(--surface-soft)",
            }}
          >
            <span
              className="text-[10px] uppercase tracking-[0.16em]"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              Retesting complete
            </span>

            <span
              className="text-sm font-semibold"
              style={{
                color: "var(--accent)",
              }}
            >
              Phase 02
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative h-full overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--background), var(--surface))",
      }}
    >
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(circle at 20% 15%, var(--accent), transparent 24%), radial-gradient(circle at 80% 80%, var(--accent-soft), transparent 32%)",
        }}
      />

      {/* Technical grid */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(var(--border-soft) 1px, transparent 1px), linear-gradient(90deg, var(--border-soft) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />

      <div
        className="absolute inset-[8%] border p-4 shadow-2xl backdrop-blur-xl sm:p-6"
        style={{
          borderColor: "var(--border)",
          background: "var(--surface-soft)",
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--accent)" }}
            />

            <span
              className="h-1.5 w-1.5 rounded-full opacity-60"
              style={{ background: "var(--accent-soft)" }}
            />

            <span
              className="h-1.5 w-1.5 rounded-full opacity-40"
              style={{ background: "var(--accent)" }}
            />
          </div>

          <span
            className="h-2.5 w-2.5 animate-pulse rounded-full"
            style={{
              background: "var(--accent)",
              boxShadow: "0 0 14px var(--accent)",
            }}
          />
        </div>

        <div className="mt-7">
          <p
            className="text-[9px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: "var(--accent)" }}
          >
            Smart room monitor
          </p>

          <p
            className="mt-1 text-xl font-semibold tracking-[-0.04em]"
            style={{ color: "var(--text-primary)" }}
          >
            Live sensor readings
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {[
            ["Temperature", "24.6°", "C"],
            ["Humidity", "61", "%"],
          ].map(([label, value, unit]) => (
            <div
              key={label}
              className="border p-4"
              style={{
                borderColor: "var(--border)",
                background: "var(--surface-soft)",
              }}
            >
              <p
                className="text-[9px] uppercase tracking-[0.16em]"
                style={{ color: "var(--text-muted)" }}
              >
                {label}
              </p>

              <p
                className="mt-3 text-2xl font-semibold"
                style={{
                  color: "var(--text-primary)",
                }}
              >
                {value}

                <span
                  className="ml-1 text-sm"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  {unit}
                </span>
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-4 h-20 border p-3"
          style={{
            borderColor: "var(--border)",
            background: "var(--surface-soft)",
          }}
        >
          <div className="flex h-full items-end gap-1.5">
            {[35, 42, 31, 58, 47, 72, 61, 80, 67, 88].map(
              (height, index) => (
                <span
                  key={index}
                  className="flex-1"
                  style={{
                    height: `${height}%`,
                    background: "var(--accent)",
                    opacity: 0.35 + index * 0.05,
                  }}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   WORK
   ========================================================= */

export default function Work() {
  return (
    <SectionShell
      id="work"
      eyebrow="Selected work"
      title="Projects made to solve real problems."
      description="A selection of projects spanning IoT, web development, networking, and cybersecurity."
      contentClassName="space-y-20 sm:space-y-28"
    >
      {projects.map((project, index) => {
        const destinationUrl =
          project.liveUrl ?? project.githubUrl;

        return (
          <motion.article
            key={project.title}
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
              duration: 1.2,
              delay: index * 0.08,
              ease: [0.19, 1, 0.22, 1],
            }}
            className={`group grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16 ${
              index % 2 === 1
                ? "lg:[&>*:first-child]:order-2"
                : ""
            }`}
          >
            {/* =================================================
                PROJECT VISUAL
                ================================================= */}

            {destinationUrl && (
              <motion.a
                href={destinationUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title}`}
                whileHover={{
                  rotateX: 2,
                  rotateY: index % 2 === 0 ? -2 : 2,
                  y: -6,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.19, 1, 0.22, 1],
                }}
                className="group/visual relative block aspect-[16/10] overflow-hidden border focus:outline-none"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                  boxShadow:
                    "0 25px 90px var(--shadow-color)",
                  perspective: "1200px",
                }}
              >
                {/* Accent glow */}
                <div
                  className="pointer-events-none absolute -inset-10 z-10 opacity-0 blur-3xl transition-opacity duration-700 group-hover/visual:opacity-20"
                  style={{
                    background: "var(--accent)",
                  }}
                />

                <div
                  className="h-full w-full transition-transform duration-[1200ms] ease-out group-hover/visual:scale-[1.035]"
                >
                  <ProjectVisual visual={project.visual} />
                </div>

                {/* Open button */}
                <span
                  className="absolute right-5 top-5 z-20 grid h-11 w-11 translate-y-2 place-items-center opacity-0 transition-all duration-700 group-hover/visual:translate-y-0 group-hover/visual:opacity-100"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent), var(--accent-dark))",
                    color: "var(--accent-contrast)",
                    boxShadow:
                      "0 10px 35px color-mix(in srgb, var(--accent) 25%, transparent)",
                  }}
                >
                  <ArrowUpRight size={19} />
                </span>

                {/* Category */}
                <div
                  className="absolute bottom-5 left-5 z-20 border px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] backdrop-blur-xl"
                  style={{
                    borderColor: "var(--border)",
                    background:
                      "color-mix(in srgb, var(--background) 78%, transparent)",
                    color: "var(--text-primary)",
                  }}
                >
                  {project.category}
                </div>

                {/* Project number */}
                <div
                  className="absolute left-5 top-5 z-20 text-[9px] font-semibold tracking-[0.25em]"
                  style={{
                    color: "var(--accent)",
                  }}
                >
                  / {project.number}
                </div>
              </motion.a>
            )}

            {/* =================================================
                PROJECT INFORMATION
                ================================================= */}

            <div className="lg:py-8">
              <div className="flex items-center justify-between">
                <span
                  className="font-mono text-sm"
                  style={{
                    color: "var(--accent)",
                  }}
                >
                  0{index + 1}
                </span>

                <span
                  className="text-[9px] font-medium uppercase tracking-[0.22em]"
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
                  Featured project
                </span>
              </div>

              <h3
                className="mt-6 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl xl:text-5xl"
                style={{
                  color: "var(--text-primary)",
                }}
              >
                {project.title}
              </h3>

              <p
                className="mt-4 max-w-xl font-serif text-lg leading-relaxed"
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                {project.description}
              </p>

              {/* Tags */}
              <div className="mt-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] transition-all duration-700 hover:-translate-y-0.5"
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
              <div className="mt-9 flex flex-wrap items-center gap-5">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em]"
                    style={{
                      color: "var(--accent)",
                    }}
                  >
                    View project

                    <ExternalLink
                      size={15}
                      className="transition-transform duration-700 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </a>
                )}

                {project.liveUrl && project.githubUrl && (
                  <span
                    className="h-4 w-px"
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
                    aria-label={`View ${project.title} source code on GitHub`}
                    className="group/link inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em]"
                    style={{
                      color: "var(--text-secondary)",
                    }}
                  >
                    <FaGithub
                      size={17}
                      className="transition-colors duration-700 group-hover/link:text-[var(--accent)]"
                    />

                    {!project.liveUrl && "View on GitHub"}
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        );
      })}

      {/* =====================================================
          MORE WORK
          ===================================================== */}

      <motion.a
        href="https://github.com/mdWalidur"
        target="_blank"
        rel="noreferrer"
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
        className="group mt-16 flex items-center justify-between border-y py-7 sm:mt-24"
        style={{
          borderColor: "var(--border)",
        }}
      >
        <span
          className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em]"
          style={{
            color: "var(--text-primary)",
          }}
        >
          <Layers3
            size={18}
            style={{
              color: "var(--accent)",
            }}
          />

          Explore more work on GitHub
        </span>

        <ArrowUpRight
          size={18}
          style={{
            color: "var(--accent)",
          }}
          className="transition-transform duration-700 group-hover:-translate-y-1 group-hover:translate-x-1"
        />
      </motion.a>
    </SectionShell>
  );
}