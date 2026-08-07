"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const email = "ratul087@gmail.com";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/",
    icon: FaLinkedin,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-[#050505] px-5 py-24 text-slate-100 sm:px-8 sm:py-32 lg:px-12 xl:px-20"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/[0.09] blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="flex justify-center">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-teal-300" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
                Contact
              </p>
              <span className="h-px w-10 bg-teal-300" />
            </div>
          </div>

          <h2
            id="contact-heading"
            className="mt-7 text-5xl font-semibold tracking-[-0.07em] text-white sm:text-6xl lg:text-8xl"
          >
            Let&apos;s build
            <span className="block text-transparent [-webkit-text-stroke:1px_rgba(226,232,240,0.9)] sm:[-webkit-text-stroke:1.5px_rgba(226,232,240,0.9)]">
              something good.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Have a project, an idea, or a role you think we should talk about?
            I&apos;d love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-12 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:mt-16 sm:p-8"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-teal-300 shadow-[0_0_14px_rgba(45,212,191,0.9)]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal-200">
                  Available for opportunities
                </p>
              </div>

              <a
                href={`mailto:${email}`}
                className="mt-4 inline-block break-all text-xl font-semibold tracking-[-0.035em] text-white transition-colors hover:text-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300 sm:text-2xl"
              >
                {email}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={copyEmail}
                className="group inline-flex h-12 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 text-sm font-semibold text-slate-200 transition-all hover:-translate-y-0.5 hover:border-teal-300/50 hover:text-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                {copied ? <Check size={17} /> : <Copy size={17} />}
                {copied ? "Copied" : "Copy"}
              </button>

              <a
                href={`mailto:${email}`}
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-teal-300 px-5 text-sm font-bold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-[#050505]"
              >
                Send email
                <Send
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mx-auto mt-10 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-7 sm:mt-12 sm:flex-row"
        >
          <p className="text-sm text-slate-500">
            Prefer social? You can also find me here.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-300 transition-all hover:-translate-y-0.5 hover:border-teal-300/40 hover:bg-teal-300/10 hover:text-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                <Icon size={16} />
                {label}
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ))}

            <a
              href={`mailto:${email}`}
              aria-label="Send an email"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-all hover:-translate-y-0.5 hover:border-teal-300/40 hover:bg-teal-300/10 hover:text-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              <FaEnvelope size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}