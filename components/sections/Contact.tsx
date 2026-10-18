"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

import { portfolioProfile, socialLinks } from "../data/portfolio";

const easing = [0.19, 1, 0.22, 1] as const;

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
};

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copyTimeoutRef = useRef<number | null>(null);

  const email = portfolioProfile.email;

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current !== null) {
        window.clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      if (copyTimeoutRef.current !== null) {
        window.clearTimeout(copyTimeoutRef.current);
      }

      copyTimeoutRef.current = window.setTimeout(() => {
        setCopied(false);
      }, 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-28 overflow-hidden border-t px-5 py-24 sm:px-8 sm:py-28 lg:py-32"
      style={{
        background:
          "color-mix(in oklab, var(--background) 76%, transparent)",
        color: "var(--text-primary)",
        borderColor: "var(--border)",
      }}
    >
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: easing }}
          className="max-w-3xl"
        >
          <h2
            id="contact-heading"
            className="text-[clamp(2.6rem,7vw,5.6rem)] font-light leading-[0.92] tracking-[-0.06em]"
          >
            Let&apos;s build{" "}
            <span
              className="font-serif italic"
              style={{ color: "var(--accent)" }}
            >
              something good.
            </span>
          </h2>

          <p
            className="mt-5 max-w-xl text-sm leading-7 sm:text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            Have a project, an idea, or an opportunity you think we
            should talk about? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.1, duration: 0.8, ease: easing }}
          className="glass-card-strong mt-10 overflow-hidden rounded-3xl sm:mt-12"
        >
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span
                      className="absolute inset-0 animate-ping rounded-full"
                      style={{
                        background: "var(--accent)",
                        opacity: 0.35,
                      }}
                    />
                    <span
                      className="relative h-2 w-2 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                  </span>

                  <span
                    className="font-mono text-[9px] font-semibold uppercase tracking-[0.22em]"
                    style={{ color: "var(--accent)" }}
                  >
                    Available for opportunities
                  </span>
                </div>

                <a
                  href={`mailto:${email}`}
                  className="block break-all text-xl font-medium tracking-[-0.03em] transition-colors duration-200 hover:text-[var(--accent)] sm:text-2xl lg:text-3xl"
                >
                  {email}
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="glass-pill inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-[10px] font-semibold uppercase tracking-[0.14em]"
                  style={{
                    color: copied
                      ? "var(--accent)"
                      : "var(--text-secondary)",
                  }}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? "Copied" : "Copy email"}
                </button>

                <a
                  href={`mailto:${email}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-[10px] font-semibold uppercase tracking-[0.14em] transition-transform duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "var(--accent)",
                    color: "var(--accent-contrast)",
                  }}
                >
                  Send email
                  <Send size={14} strokeWidth={1.7} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="grid border-t sm:grid-cols-2"
            style={{ borderColor: "var(--border)" }}
          >
            {socialLinks.map(({ label, href }, index) => {
              const Icon =
                socialIcons[label as keyof typeof socialIcons];

              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex min-h-14 items-center justify-between gap-4 px-6 py-4 transition-colors duration-200 hover:bg-[var(--surface-soft)] sm:px-8 ${
                    index === 0 ? "border-b sm:border-b-0 sm:border-r" : ""
                  }`}
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="flex items-center gap-3">
                    {Icon && (
                      <Icon size={16} style={{ color: "var(--accent)" }} />
                    )}
                    <span
                      className="text-xs font-medium"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {label}
                    </span>
                  </span>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    style={{ color: "var(--text-muted)" }}
                  />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}