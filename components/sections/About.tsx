"use client";

import {
  ArrowDownRight,
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

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-[#080a0a] px-5 py-24 text-slate-100 sm:px-8 sm:py-32 lg:px-12 xl:px-20"
    >
      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-teal-400/[0.07] blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 flex items-center gap-3 sm:mb-20"
        >
          <span className="h-px w-10 bg-teal-300" />
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
            About me
          </p>
        </motion.div>

        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:gap-20">
          <div>
            <motion.h2
              id="about-heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl text-4xl font-semibold leading-[1.06] tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl"
            >
              I turn ambitious ideas into{" "}
              <span className="text-teal-300">useful digital experiences.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: 0.12,
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-10 max-w-2xl space-y-5 text-base leading-relaxed text-slate-400 sm:text-lg"
            >
              <p>
                I&apos;m Walidur, a Cloud/DevOps + AI Engineer with a particular interest
                in the meeting point between design, technology, and real human
                needs. I enjoy making complex ideas feel simple.
              </p>

              <p>
                My approach balances careful engineering with a strong visual
                point of view. Whether I&apos;m building a product interface,
                experimenting with AI, or refining a small interaction, I care
                about the experience behind every decision.
              </p>
            </motion.div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.22, duration: 0.55 }}
              className="group mt-10 inline-flex items-center gap-3 border-b border-teal-300/50 pb-2 text-sm font-semibold text-teal-300 transition-colors hover:border-teal-200 hover:text-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              Let&apos;s make something meaningful
              <ArrowDownRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </motion.a>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm sm:p-8"
          >
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-teal-300/10 blur-3xl"
            />

            <div className="relative">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
                  Currently
                </p>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-teal-300/20 bg-teal-300/10 text-teal-200">
                  <Sparkles size={18} />
                </span>
              </div>

              <p className="mt-6 text-2xl font-semibold leading-tight tracking-[-0.04em] text-white">
                Exploring the future of web experiences with AI.
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Based in
                </p>
                <p className="mt-2 text-sm font-medium text-slate-200">
                  Finland · Working worldwide
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-teal-300 shadow-[0_0_14px_rgba(45,212,191,0.8)]" />
                <p className="text-sm text-slate-300">
                  Available for selected projects
                </p>
              </div>
            </div>
          </motion.aside>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mt-20 border-t border-white/10 pt-10 sm:mt-28"
        >
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
                Toolkit
              </p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
                The tools I use to design, develop, and ship polished digital
                products.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-teal-300/40 hover:bg-teal-300/10 hover:text-teal-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {principles.map(({ icon: Icon, title, text }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="bg-[#080a0a] p-6 sm:p-7"
            >
              <Icon size={20} className="text-teal-300" />
              <h3 className="mt-6 text-lg font-semibold tracking-[-0.025em] text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}