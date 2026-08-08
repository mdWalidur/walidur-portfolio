"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export default function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  contentClassName = "",
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`
        relative
        scroll-mt-28
        overflow-hidden
        px-5
        py-24
        sm:px-8
        sm:py-32
        lg:px-12
        xl:px-20
        ${className}
      `}
      style={{
        background: "var(--background)",
        color: "var(--text-primary)",
      }}
    >
      {/* =====================================================
          AMBIENT BACKGROUND
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/4
          h-[28rem]
          w-[28rem]
          rounded-full
          blur-[140px]
        "
        style={{
          background: "var(--accent)",
          opacity: 0.035,
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-48
          bottom-0
          h-[24rem]
          w-[24rem]
          rounded-full
          blur-[130px]
        "
        style={{
          background: "var(--accent)",
          opacity: 0.025,
        }}
      />

      {/* =====================================================
          MAIN CONTAINER
          ===================================================== */}

      <div className="relative mx-auto max-w-7xl">
        {/* ===================================================
            HEADER
            =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: [0.19, 1, 0.22, 1],
          }}
          className="
            grid
            gap-8
            border-b
            pb-10
            lg:grid-cols-[1fr_0.62fr]
          "
          style={{
            borderColor: "var(--border)",
          }}
        >
          {/* LEFT */}

          <div>
            {eyebrow && (
              <div
                className="
                  mb-6
                  flex
                  items-center
                  gap-4
                "
              >
                <span
                  className="
                    h-px
                    w-12
                    shrink-0
                  "
                  style={{
                    background:
                      "var(--accent)",
                  }}
                />

                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                  "
                  style={{
                    color:
                      "var(--accent)",
                  }}
                >
                  {eyebrow}
                </p>
              </div>
            )}

            <h2
              className="
                max-w-4xl
                text-4xl
                font-light
                leading-[1.04]
                tracking-[-0.055em]
                sm:text-5xl
                lg:text-6xl
              "
              style={{
                color:
                  "var(--text-primary)",
              }}
            >
              {title}
            </h2>
          </div>

          {/* RIGHT */}

          {description && (
            <p
              className="
                max-w-md
                self-end
                text-base
                leading-7
              "
              style={{
                color:
                  "var(--text-secondary)",
              }}
            >
              {description}
            </p>
          )}
        </motion.div>

        {/* ===================================================
            CONTENT
            =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.08,
          }}
          transition={{
            duration: 0.9,
            delay: 0.08,
            ease: [0.19, 1, 0.22, 1],
          }}
          className={`
            mt-14
            ${contentClassName}
          `}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}