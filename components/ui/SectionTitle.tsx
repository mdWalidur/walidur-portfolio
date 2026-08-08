"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  eyebrow: string;
  title: string | ReactNode;
  description?: string | ReactNode;
  children: ReactNode;
  contentClassName?: string;
  className?: string;
};

export default function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  contentClassName = "",
  className = "",
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-28 py-24 sm:py-32 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.2,
            ease: [0.19, 1, 0.22, 1],
          }}
          className="mb-16 max-w-4xl"
        >
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-4">
            <span
              className="h-px w-12"
              style={{
                background: "var(--accent)",
              }}
            />

            <span
              className="text-[10px] font-semibold uppercase tracking-[0.3em]"
              style={{
                color: "var(--accent)",
              }}
            >
              {eyebrow}
            </span>
          </div>

          {/* Title */}
          <h2
            className="max-w-4xl text-4xl font-light tracking-[-0.045em] sm:text-5xl lg:text-6xl"
            style={{
              color: "var(--text-primary)",
            }}
          >
            {title}
          </h2>

          {/* Description */}
          {description && (
            <p
              className="mt-6 max-w-2xl text-base leading-7 sm:text-lg"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              {description}
            </p>
          )}
        </motion.div>

        {/* Section content */}
        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  );
}