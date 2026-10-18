"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";

const certifications = [
  {
    title: "AWS Academy Graduate – Cloud Developing",
    issuer: "Amazon Web Services (AWS)",
    date: "March 7, 2026",
    image: "/certifications/aws-cloud-developing.png",
    credentialUrl:
      "https://www.credly.com/badges/c6f58ca3-a1d7-4dbd-a812-1e4b08e1c9d5",
    tags: ["AWS", "Cloud Development"],
  },
  {
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "October 26, 2025",
    image: "/certifications/aws-cloud-foundations.png",
    credentialUrl:
      "https://www.credly.com/badges/0d867bd2-b54c-49a2-a398-3190079c7118",
    tags: ["AWS", "Cloud Computing"],
  },
  {
    title: "AWS Academy Graduate – Cloud Operations",
    issuer: "Amazon Web Services (AWS)",
    date: "October 26, 2025",
    image: "/certifications/aws-cloud-operations.png",
    credentialUrl:
      "https://www.credly.com/badges/f730dfaa-e2f8-447b-bbee-36430e20b45d",
    tags: ["AWS", "Cloud Operations"],
  },
];

const easing = [0.19, 1, 0.22, 1] as const;

export default function Certifications() {
  return (
    <section
      id="credentials"
      aria-labelledby="credentials-heading"
      className="relative scroll-mt-28 overflow-hidden border-t px-5 py-24 sm:px-8 sm:py-28 lg:py-32"
      style={{
        background:
          "color-mix(in oklab, var(--background) 76%, transparent)",
        color: "var(--text-primary)",
        borderColor: "var(--border)",
      }}
    >
      <div className="relative mx-auto max-w-6xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: easing }}
          className="mb-12 max-w-3xl sm:mb-16"
        >
          <h2
            id="credentials-heading"
            className="text-[clamp(2.4rem,5.5vw,4.6rem)] font-light leading-[1.14] tracking-[-0.03em]"
          >
            Cloud skills &amp;{" "}
            <span
              className="inline-block pr-1 font-serif italic tracking-normal"
              style={{ color: "var(--accent)" }}
            >
              credentials.
            </span>
          </h2>
        </motion.div>

        {/* AWS BADGES */}
        <div className="grid gap-5 md:grid-cols-3">
          {certifications.map((certification, index) => (
            <motion.article
              key={certification.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.75,
                delay: index * 0.08,
                ease: easing,
              }}
              whileHover={{ y: -5 }}
              className="glass-card group flex flex-col justify-between overflow-hidden rounded-3xl p-6 sm:p-7"
            >
              <div>
                <div className="flex h-48 items-center justify-center">
                  <Image
                    src={certification.image}
                    alt={certification.title}
                    width={176}
                    height={176}
                    className="h-40 w-40 object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-6 flex items-center gap-2">
                  <Award size={14} style={{ color: "var(--accent)" }} />
                  <p
                    className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: "var(--accent)" }}
                  >
                    {certification.issuer}
                  </p>
                </div>

                <h3 className="mt-3 text-lg font-medium leading-snug tracking-[-0.025em]">
                  {certification.title}
                </h3>

                <p
                  className="mt-2 text-[10px] uppercase tracking-[0.16em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Issued {certification.date}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[var(--border)] flex items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {certification.tags.map((tag) => (
                    <span
                      key={tag}
                      className="glass-pill rounded-full px-2.5 py-1 text-[9px] font-medium"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex shrink-0 items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em]"
                  style={{ color: "var(--accent)" }}
                >
                  Verify
                  <ExternalLink
                    size={13}
                    className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CISCO / LINUX ESSENTIALS */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easing }}
          className="glass-card group mt-5 overflow-hidden rounded-3xl"
        >
          <div className="grid items-center md:grid-cols-[1.1fr_0.9fr]">
            <div
              className="relative border-b p-5 md:border-b-0 md:border-r md:p-7"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <Image
                  src="/certifications/linux-essentials.jpeg"
                  alt="Linux Essentials Certification from Cisco Networking Academy"
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10">
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={16} style={{ color: "var(--accent)" }} />
                <p
                  className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "var(--accent)" }}
                >
                  Cisco Networking Academy
                </p>
              </div>

              <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] sm:text-3xl">
                Linux Essentials{" "}
                <span
                  className="font-serif italic"
                  style={{ color: "var(--accent)" }}
                >
                  Certification
                </span>
              </h3>

              <p
                className="mt-4 max-w-xl text-sm leading-7"
                style={{ color: "var(--text-secondary)" }}
              >
                Successfully completed NDG Linux Essentials through the
                Cisco Networking Academy program.
              </p>

              <p
                className="mt-3 text-[10px] uppercase tracking-[0.16em]"
                style={{ color: "var(--text-muted)" }}
              >
                Issued June 6, 2024
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-5">
                <div className="flex flex-wrap gap-2">
                  {[
                    "Linux",
                    "Linux Administration",
                    "Embedded Linux",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="glass-pill rounded-full px-3 py-1 text-[9px] font-medium"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="/certifications/linux-essentials.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em]"
                  style={{ color: "var(--accent)" }}
                >
                  View certificate
                  <ExternalLink
                    size={13}
                    className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}