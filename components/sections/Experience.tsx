"use client";

import { useState } from "react";
import { ArrowUpRight, BriefcaseBusiness, GraduationCap, Plus } from "lucide-react";
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
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
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
    technologies: ["Software Design", "Databases", "Web Development"],
  },
];

function TypeIcon({ type }: Pick<ExperienceItem, "type">) {
  return type === "work" ? (
    <BriefcaseBusiness size={17} strokeWidth={1.8} />
  ) : (
    <GraduationCap size={18} strokeWidth={1.8} />
  );
}

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setExpandedIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative overflow-hidden bg-[#050505] px-5 py-24 text-slate-100 sm:px-8 sm:py-32 lg:px-12 xl:px-20"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-10rem] top-1/3 h-80 w-80 rounded-full bg-teal-400/[0.07] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[1fr_0.62fr]"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-teal-300" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
                Experience
              </p>
            </div>

            <h2
              id="experience-heading"
              className="max-w-2xl text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl"
            >
              Building with curiosity, clarity, and care.
            </h2>
          </div>

          <p className="self-end max-w-md text-base leading-relaxed text-slate-400">
            A growing body of work across software engineering, digital products,
            and collaborative problem-solving.
          </p>
        </motion.div>

        <div className="mt-3">
          {experience.map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.article
                key={`${item.organization}-${item.period}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="border-b border-white/10"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isExpanded}
                  aria-controls={`experience-panel-${index}`}
                  className="group grid w-full grid-cols-[auto_1fr_auto] items-start gap-4 py-7 text-left sm:grid-cols-[10rem_1fr_auto] sm:gap-7 sm:py-9"
                >
                  <span className="mt-1.5 hidden font-mono text-xs text-teal-300 sm:block">
                    {item.period}
                  </span>

                  <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-teal-300 sm:hidden">
                    <TypeIcon type={item.type} />
                  </span>

                  <span>
                    <span className="flex items-center gap-3">
                      <span className="hidden text-teal-300 sm:block">
                        <TypeIcon type={item.type} />
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:hidden">
                        {item.period}
                      </span>
                    </span>

                    <span className="mt-1 block text-xl font-semibold tracking-[-0.035em] text-white sm:mt-2 sm:text-2xl">
                      {item.title}
                    </span>

                    <span className="mt-1.5 block text-sm text-slate-400">
                      {item.organization}
                      <span className="mx-2 text-slate-600">·</span>
                      {item.location}
                    </span>
                  </span>

                  <span
                    className={`grid h-9 w-9 place-items-center rounded-full border transition-all duration-300 ${
                      isExpanded
                        ? "rotate-45 border-teal-300 bg-teal-300 text-slate-950"
                        : "border-white/10 bg-white/[0.03] text-slate-300 group-hover:border-teal-300/50 group-hover:text-teal-200"
                    }`}
                  >
                    <Plus size={17} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      id={`experience-panel-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-[3.25rem] pr-0 sm:ml-[10rem] sm:pl-10 sm:pr-16">
                        <p className="max-w-2xl leading-relaxed text-slate-400">
                          {item.summary}
                        </p>

                        <ul className="mt-5 space-y-2.5">
                          {item.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex gap-3 text-sm leading-relaxed text-slate-300"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300" />
                              {highlight}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 flex flex-wrap items-center gap-2">
                          {item.technologies?.map((technology) => (
                            <span
                              key={technology}
                              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-400"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>

                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-300 transition-colors hover:text-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-300"
                          >
                            View profile
                            <ArrowUpRight size={16} />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-xs uppercase tracking-[0.17em] text-slate-500"
        >
          Click an entry to explore the details.
        </motion.p>
      </div>
    </section>
  );
}