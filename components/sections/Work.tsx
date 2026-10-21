"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  ExternalLink,
  Network,
  ShieldCheck,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import SectionShell from "@/components/ui/SectionTitle";

type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
};

const projects: Project[] = [
  {
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
    liveUrl: "https://wokwi.com/projects/460027800656399361",
    githubUrl: "https://github.com/mdWalidur/Internet-of-things",
    icon: Activity,
  },
  {
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
    liveUrl: "https://network-calculator-suite.vercel.app/",
    icon: Network,
  },
  {
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
    icon: ShieldCheck,
  },
];

export default function Work() {
  return (
    <SectionShell
      id="work"
      title="Projects made to solve real problems."
      description="A selection of projects spanning IoT, web development, networking, and cybersecurity."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => {
          const Icon = project.icon;

          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.75,
                delay: index * 0.08,
                ease: [0.19, 1, 0.22, 1],
              }}
              whileHover={{ y: -6 }}
              className="glass-card group relative flex flex-col justify-between rounded-3xl p-6 sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-2xl border"
                    style={{
                      borderColor: "var(--glass-border)",
                      background: "var(--surface-soft)",
                      color: "var(--accent)",
                    }}
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </span>

                  <span
                    className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: "var(--accent)" }}
                  >
                    {project.category}
                  </span>
                </div>

                <h3
                  className="mt-7 text-2xl font-medium tracking-[-0.035em] sm:text-3xl"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.title}
                </h3>

                <p
                  className="mt-4 text-sm leading-7"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--border)]">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="glass-pill rounded-full px-3 py-1 text-[9px] font-medium uppercase tracking-[0.1em]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em]"
                      style={{ color: "var(--accent)" }}
                    >
                      View project
                      <ExternalLink
                        size={14}
                        strokeWidth={1.6}
                        className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group/github inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <FaGithub
                        size={15}
                        className="transition-colors duration-300 group-hover/github:text-[var(--accent)]"
                      />
                      {project.liveUrl ? "Source" : "GitHub"}
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <motion.a
        href="https://github.com/mdWalidur"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
        className="glass-card group mt-8 flex items-center justify-between gap-4 rounded-2xl px-6 py-4 outline-none transition-all duration-500 focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        style={{ color: "var(--text-primary)" }}
      >
        <span className="flex items-center gap-3">
          <FaGithub size={16} style={{ color: "var(--accent)" }} />
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
            Explore more work on GitHub
          </span>
        </span>

        <ArrowUpRight
          size={18}
          strokeWidth={1.5}
          style={{ color: "var(--accent)" }}
          className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </motion.a>
    </SectionShell>
  );
}