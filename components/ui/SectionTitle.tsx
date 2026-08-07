"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  align?: "left" | "center";
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  contentClassName = "",
  align = "left",
}: SectionShellProps) {
  const isCentered = align === "center";

  return (
    <section
      id={id}
      aria-labelledby={title ? `${id}-heading` : undefined}
      className={`relative isolate px-5 py-24 text-slate-100 sm:px-8 sm:py-28 lg:px-12 xl:px-20 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.14)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]" />
        <div className="absolute left-[12%] top-[18%] h-40 w-40 rounded-full bg-teal-400/6 blur-3xl" />
        <div className="absolute right-[10%] bottom-[12%] h-44 w-44 rounded-full bg-cyan-400/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || description) && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`max-w-3xl ${
              isCentered ? "mx-auto text-center" : ""
            }`}
          >
            {eyebrow && (
              <div
                className={`mb-6 flex items-center gap-3 ${
                  isCentered ? "justify-center" : ""
                }`}
              >
                <span className="h-px w-10 bg-teal-300" />
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
                  {eyebrow}
                </p>
              </div>
            )}

            {title && (
              <h2
                id={`${id}-heading`}
                className="text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl"
              >
                {title}
              </h2>
            )}

            {description && (
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                {description}
              </p>
            )}
          </motion.div>
        )}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={fadeUp}
          transition={{ delay: 0.08, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className={`${title || description || eyebrow ? "mt-12 sm:mt-14" : ""} ${contentClassName}`}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}