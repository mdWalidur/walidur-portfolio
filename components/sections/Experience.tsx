"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
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
    period: "May 2024 — Aug 2024",
    title: "Growth Hacking Intern (SEO)",
    organization: "Herizon Ry / NoOnes",
    location: "Finland",
    description:
      "Specialized in growth hacking, technical SEO, and link acquisition strategies to expand digital presence and enhance search engine visibility for NoOnes.",
    highlights: [
      "Executed targeted outreach campaigns and acquired high-quality backlinks adhering to SEO best practices.",
      "Conducted competitor analysis, keyword research, and backlink auditing using Ahrefs, SEMrush, and Google Analytics.",
      "Collaborated in a cross-functional digital marketing team with structured weekly sprints and progress reviews.",
      "Demonstrated initiative in identifying organic growth opportunities and evaluating ranking performance impact.",
    ],
    technologies: [
      "SEO",
      "Ahrefs",
      "SEMrush",
      "Google Analytics",
      "Link Building",
      "Growth Hacking",
      "Digital Marketing",
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
    item.type === "education" ? GraduationCap : BriefcaseBusiness;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.06,
        ease: easing,
      }}
      className={`overflow-hidden rounded-2xl transition-all duration-500 ${
        expanded ? "glass-card-strong" : "glass-card"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        className="group flex w-full items-start gap-4 p-5 text-left outline-none sm:gap-5 sm:p-6 lg:p-7"
      >
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border"
          style={{
            borderColor: expanded
              ? "var(--accent)"
              : "var(--glass-border)",
            background: "var(--surface-soft)",
            color: expanded ? "var(--accent)" : "var(--text-muted)",
          }}
        >
          <Icon size={17} strokeWidth={1.5} />
        </span>

        <div className="min-w-0 flex-1">
          <span
            className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--accent)" }}
          >
            {item.period}
          </span>

          <h3 className="mt-1.5 text-lg font-medium leading-tight tracking-[-0.025em] sm:text-xl">
            {item.title}
          </h3>

          <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--text-secondary)]">
            <span>{item.organization}</span>
            <span className="inline-flex items-center gap-1 text-[var(--text-muted)]">
              <MapPin size={12} strokeWidth={1.5} />
              {item.location}
            </span>
          </div>
        </div>

        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border"
          style={{
            borderColor: "var(--border)",
            color: expanded ? "var(--accent)" : "var(--text-muted)",
          }}
        >
          <ChevronDown
            size={15}
            strokeWidth={1.5}
            className={`transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: easing }}
          >
            <div
              className="border-t px-5 pb-6 pt-5 sm:px-6 lg:px-7"
              style={{ borderColor: "var(--border)" }}
            >
              <p
                className="max-w-2xl text-sm leading-7"
                style={{ color: "var(--text-secondary)" }}
              >
                {item.description}
              </p>

              <ul className="mt-5 space-y-2.5">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-6"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span
                      className="mt-2.5 h-1 w-1 shrink-0 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="glass-pill rounded-full px-3 py-1 text-[9px] font-medium uppercase tracking-[0.12em]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative scroll-mt-28 overflow-hidden border-t px-5 py-24 sm:px-8 sm:py-28 lg:py-32"
      style={{
        background:
          "color-mix(in oklab, var(--background) 76%, transparent)",
        borderColor: "var(--border)",
        color: "var(--text-primary)",
      }}
    >
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: easing }}
          className="mb-12 max-w-3xl sm:mb-16"
        >
          <h2
            id="experience-heading"
            className="text-[clamp(2.4rem,5.5vw,4.6rem)] font-light leading-[1.14] tracking-[-0.03em]"
          >
            Experience{" "}
            <span
              className="inline-block pr-1 font-serif italic tracking-normal"
              style={{ color: "var(--accent)" }}
            >
              &amp; education.
            </span>
          </h2>
        </motion.div>

        <div className="space-y-4 sm:space-y-5">
          {experiences.map((item, index) => (
            <ExperienceCard
              key={`${item.title}-${item.organization}`}
              item={item}
              index={index}
              expanded={expandedIndex === index}
              onToggle={() =>
                setExpandedIndex((current) =>
                  current === index ? null : index
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}