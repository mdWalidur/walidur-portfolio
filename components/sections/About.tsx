"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Python",
  "AWS",
  "Docker",
  "Framer Motion",
  "Node.js",
  "REST APIs",
  "Git & GitHub",
];

const easing = [0.19, 1, 0.22, 1] as const;

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-28 overflow-hidden border-t px-5 py-24 sm:px-8 sm:py-28 lg:py-32"
      style={{
        background:
          "color-mix(in oklab, var(--background) 76%, transparent)",
        borderColor: "var(--border)",
        color: "var(--text-primary)",
      }}
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* STORY */}
          <div>
            <motion.h2
              id="about-heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: easing }}
              className="max-w-4xl text-[clamp(2.4rem,5.5vw,4.6rem)] font-light leading-[1.14] tracking-[-0.03em]"
            >
              I turn ambitious ideas into{" "}
              <span
                className="inline-block pr-1 font-serif italic tracking-normal"
                style={{ color: "var(--accent)" }}
              >
                useful digital experiences.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1, duration: 0.8, ease: easing }}
              className="mt-8 max-w-2xl space-y-5 text-sm leading-7 sm:text-base sm:leading-8"
              style={{ color: "var(--text-secondary)" }}
            >
              <p>
                I&apos;m Walidur, a Cloud/DevOps + AI Engineer with a
                particular interest in the meeting point between design,
                technology, and real human needs. I enjoy making complex
                ideas feel simple.
              </p>

              <p>
                My approach balances careful engineering with a strong
                visual point of view. Whether I&apos;m building a product
                interface, experimenting with AI, or refining a small
                interaction, I care about the experience behind every
                decision.
              </p>
            </motion.div>

            {/* TOOLKIT PILLS */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: 0.18, duration: 0.75, ease: easing }}
              className="mt-10 flex flex-wrap gap-2.5"
            >
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="glass-pill rounded-full px-4 py-2 text-xs font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>

          {/* CURRENTLY CARD */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.12, duration: 0.8, ease: easing }}
            className="glass-card-strong relative overflow-hidden rounded-3xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span
                className="grid h-10 w-10 place-items-center rounded-xl border"
                style={{
                  borderColor: "var(--glass-border)",
                  background: "var(--surface-soft)",
                  color: "var(--accent)",
                }}
              >
                <Sparkles size={17} strokeWidth={1.5} />
              </span>

              <p
                className="text-[9px] font-semibold uppercase tracking-[0.28em]"
                style={{ color: "var(--accent)" }}
              >
                Currently
              </p>
            </div>

            <p className="mt-7 text-2xl font-medium leading-[1.1] tracking-[-0.04em] sm:text-3xl">
              Exploring the future of web experiences with AI.
            </p>

            <div
              className="mt-7 border-t pt-6"
              style={{ borderColor: "var(--border)" }}
            >
              <p
                className="text-[9px] uppercase tracking-[0.22em]"
                style={{ color: "var(--text-muted)" }}
              >
                Based in
              </p>

              <p
                className="mt-1.5 text-sm font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                Finland · Working worldwide
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}