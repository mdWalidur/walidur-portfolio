"use client";

import { ArrowUpRight, ExternalLink, Layers3, ShieldCheck } from "lucide-react";
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
    tags: ["ESP32", "DHT22", "MQTT", "Flask", "Socket.IO", "Chart.js"],
    liveUrl: "https://wokwi.com/projects/460027800656399361",
    githubUrl: "https://github.com/mdWalidur/Internet-of-things",
    visual: "iot",
  },
  {
    number: "02",
    title: "Network Calculator Suite",
    category: "Networking Web Tool",
    description:
      "A practical browser-based toolkit for working through common network calculations in a clear, accessible interface.",
    tags: ["Networking", "Web Tools", "GitHub Pages", "Responsive Design"],
    liveUrl: "https://mdwalidur.github.io/Network-Calculator-Suite/",
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
    githubUrl: "https://github.com/mdWalidur/Introduction-to-Cybersecurity",
    visual: "security",
  },
];

function ProjectVisual({ visual }: Pick<Project, "visual">) {
  if (visual === "calculator") {
    return (
      <div className="relative h-full overflow-hidden bg-[#0b1019]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(96,165,250,0.28),transparent_26%),radial-gradient(circle_at_80%_80%,rgba(45,212,191,0.18),transparent_30%)]" />

        <div className="absolute inset-[9%] rounded-2xl border border-white/10 bg-slate-950/70 p-4 shadow-2xl backdrop-blur-xl sm:p-6">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-rose-400/80" />
            <span className="h-2 w-2 rounded-full bg-amber-300/80" />
            <span className="h-2 w-2 rounded-full bg-teal-300/80" />
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-teal-200/70">
                Network tools
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                Calculator Suite
              </p>
            </div>
            <span className="rounded-lg border border-teal-300/20 bg-teal-300/10 px-2.5 py-1 text-[10px] text-teal-200">
              Ready
            </span>
          </div>

          <div className="mt-6 grid grid-cols-[1fr_auto] gap-3">
            <div className="h-10 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-3">
              <div className="h-1.5 w-2/3 rounded-full bg-white/20" />
            </div>
            <div className="grid h-10 w-12 place-items-center rounded-lg bg-teal-300 text-xs font-bold text-slate-950">
              Calc
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {[["IP", "192.168.1.0"], ["Mask", "/24"], ["Hosts", "254"]].map(
              ([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
                >
                  <p className="text-[8px] uppercase tracking-[0.14em] text-slate-500">
                    {label}
                  </p>
                  <p className="mt-2 truncate text-xs font-medium text-slate-100">
                    {value}
                  </p>
                </div>
              ),
            )}
          </div>

          <div className="mt-4 h-16 rounded-xl border border-teal-300/10 bg-gradient-to-r from-teal-300/10 to-blue-400/10 p-3">
            <div className="flex h-full items-end gap-1.5">
              {[35, 55, 42, 75, 58, 90, 68, 80].map((height, index) => (
                <span
                  key={index}
                  className="flex-1 rounded-t-sm bg-teal-300/60"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (visual === "security") {
    return (
      <div className="relative h-full overflow-hidden bg-[#100b10]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,63,94,0.2),transparent_26%),radial-gradient(circle_at_80%_75%,rgba(168,85,247,0.18),transparent_30%)]" />

        <div className="absolute inset-[9%] rounded-2xl border border-white/10 bg-[#110d13]/80 p-4 shadow-2xl backdrop-blur-xl sm:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-rose-400/80" />
              <span className="h-2 w-2 rounded-full bg-amber-300/80" />
              <span className="h-2 w-2 rounded-full bg-teal-300/80" />
            </div>
            <ShieldCheck size={19} className="text-teal-300" />
          </div>

          <div className="mt-7">
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-rose-200/70">
              Security assessment
            </p>
            <p className="mt-1 text-xl font-semibold tracking-[-0.04em] text-white">
              Booking System
            </p>
          </div>

          <div className="mt-6 grid gap-2.5">
            {[
              { label: "SQL injection", status: "Resolved", color: "bg-teal-300" },
              { label: "Path traversal", status: "Resolved", color: "bg-teal-300" },
              { label: "CSRF protection", status: "Review", color: "bg-amber-300" },
            ].map((finding) => (
              <div
                key={finding.label}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.035] px-3.5 py-3"
              >
                <span className="text-xs text-slate-200">{finding.label}</span>
                <span className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                  <span className={`h-1.5 w-1.5 rounded-full ${finding.color}`} />
                  {finding.status}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between rounded-xl border border-teal-300/15 bg-teal-300/[0.07] px-4 py-3">
            <span className="text-[10px] uppercase tracking-[0.16em] text-teal-100/70">
              Retesting complete
            </span>
            <span className="text-sm font-semibold text-teal-200">Phase 02</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full overflow-hidden bg-[#071312]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(45,212,191,0.35),transparent_22%),radial-gradient(circle_at_80%_80%,rgba(20,184,166,0.28),transparent_32%)]" />

      <div className="absolute inset-[9%] rounded-2xl border border-white/10 bg-slate-950/60 p-4 shadow-2xl backdrop-blur-xl sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-rose-400/80" />
            <span className="h-2 w-2 rounded-full bg-amber-300/80" />
            <span className="h-2 w-2 rounded-full bg-teal-300/80" />
          </div>
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-teal-300 shadow-[0_0_14px_rgba(45,212,191,0.8)]" />
        </div>

        <div className="mt-7">
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-teal-200/70">
            Smart room monitor
          </p>
          <p className="mt-1 text-xl font-semibold tracking-[-0.04em] text-white">
            Live sensor readings
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-teal-300/15 bg-teal-300/[0.08] p-4">
            <p className="text-[9px] uppercase tracking-[0.16em] text-teal-100/60">
              Temperature
            </p>
            <p className="mt-3 text-2xl font-semibold text-teal-100">
              24.6°
              <span className="ml-1 text-sm text-teal-200/60">C</span>
            </p>
          </div>

          <div className="rounded-xl border border-blue-300/15 bg-blue-300/[0.07] p-4">
            <p className="text-[9px] uppercase tracking-[0.16em] text-blue-100/60">
              Humidity
            </p>
            <p className="mt-3 text-2xl font-semibold text-blue-100">
              61
              <span className="ml-1 text-sm text-blue-200/60">%</span>
            </p>
          </div>
        </div>

        <div className="mt-4 h-20 rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <div className="flex h-full items-end gap-1.5">
            {[35, 42, 31, 58, 47, 72, 61, 80, 67, 88].map((height, index) => (
              <span
                key={index}
                className="flex-1 rounded-t-sm bg-gradient-to-t from-teal-400/30 to-teal-200/90"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <SectionShell
      id="work"
      eyebrow="Selected work"
      title="Projects made to solve real problems."
      description="A selection of projects spanning IoT, web development, networking, and cybersecurity."
      contentClassName="space-y-16 sm:space-y-24"
    >
      {projects.map((project, index) => {
        const destinationUrl = project.liveUrl ?? project.githubUrl;

        return (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: 0.75,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`group grid gap-7 lg:grid-cols-2 lg:items-center lg:gap-14 ${
              index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {destinationUrl && (
              <a
                href={destinationUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title}`}
                className="relative block aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/20 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-4 focus:ring-offset-[#050505]"
              >
                <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                  <ProjectVisual visual={project.visual} />
                </div>

                <span className="absolute right-5 top-5 grid h-11 w-11 translate-y-2 place-items-center rounded-full bg-white text-slate-950 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={19} />
                </span>

                <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
                  {project.category}
                </div>
              </a>
            )}

            <div className="lg:py-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-teal-300">
                  /{project.number}
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.17em] text-slate-500">
                  Featured project
                </span>
              </div>

              <h3 className="mt-6 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                {project.title}
              </h3>

              <p className="mt-4 max-w-md leading-relaxed text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-teal-300 transition-colors hover:text-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-300"
                  >
                    View project
                    <ExternalLink size={16} />
                  </a>
                )}

                {project.liveUrl && project.githubUrl && (
                  <span className="h-4 w-px bg-white/15" />
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-300"
                  >
                    <FaGithub size={19} />
                    {!project.liveUrl && "View on GitHub"}
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        );
      })}

      <a
        href="https://github.com/mdWalidur"
        target="_blank"
        rel="noreferrer"
        className="group mt-16 flex items-center justify-between border-y border-white/10 py-6 text-sm font-semibold text-slate-200 transition-colors hover:text-teal-300 sm:mt-24"
      >
        <span className="flex items-center gap-3">
          <Layers3 size={18} className="text-teal-300" />
          Explore more work on GitHub
        </span>
        <ArrowUpRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </a>
    </SectionShell>
  );
}