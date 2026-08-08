"use client";

import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const easing = [0.19, 1, 0.22, 1] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        relative
        w-full
        px-5
        pb-7
        pt-5

        sm:px-8
        sm:pb-8

        lg:px-12

        xl:px-20
      "
      style={{
        background: "var(--background)",
        color: "var(--text-primary)",
      }}
    >
      <div
        className="
          relative
          mx-auto
          max-w-7xl
          border-t
        "
        style={{
          borderColor: "var(--border)",
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 8,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            ease: easing,
          }}
          className="
            flex
            flex-col
            gap-5
            pt-6

            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:gap-6
            sm:pt-5
          "
        >
          {/* =================================================
              LEFT — COPYRIGHT
              ================================================= */}

          <p
            className="
              text-[10px]
              leading-none

              sm:text-xs
            "
            style={{
              color: "var(--accent-readable)",
            }}
          >
            © {currentYear} Walidur Rahman.
            <span className="hidden sm:inline">
              {" "}
              All rights reserved.
            </span>
          </p>

          {/* =================================================
              CENTER — CRAFTED IN FINLAND
              ================================================= */}

          <div
            className="
              flex
              items-center
              gap-3

              sm:absolute
              sm:left-1/2
              sm:top-1/2
              sm:-translate-x-1/2
              sm:-translate-y-1/2
            "
          >
            <span
              aria-hidden="true"
              className="
                h-1.5
                w-1.5
                shrink-0
                rounded-full
              "
              style={{
                background: "var(--accent)",
                boxShadow:
                  "0 0 8px color-mix(in srgb, var(--accent) 35%, transparent)",
              }}
            />

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.3em]

                sm:text-[9px]
                sm:tracking-[0.34em]
              "
              style={{
                color: "var(--accent-readable)",
              }}
            >
              Crafted in Finland
            </span>
          </div>

          {/* =================================================
              RIGHT — BACK TO TOP
              ================================================= */}

          <a
            href="#home"
            aria-label="Back to top"
            className="
              group
              inline-flex
              min-h-9
              items-center
              gap-2
              self-start
              border-b
              pb-1
              text-[9px]
              font-medium
              uppercase
              tracking-[0.14em]
              transition-all
              duration-500

              sm:self-auto
              sm:text-[10px]
            "
            style={{
              borderColor:
                "color-mix(in srgb, var(--accent) 35%, transparent)",
              color: "var(--accent-readable)",
            }}
          >
            <span
              className="
                transition-colors
                duration-300
                group-hover:text-[var(--accent)]
              "
            >
              Back to top
            </span>

            <ArrowUp
              size={14}
              strokeWidth={1.5}
              className="
                transition-transform
                duration-500
                group-hover:-translate-y-1
              "
              style={{
                color: "var(--accent)",
              }}
            />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}