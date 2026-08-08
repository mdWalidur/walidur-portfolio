"use client";

import { ArrowUp, ArrowUpRight } from "lucide-react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { motion } from "framer-motion";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Credentials", href: "#credentials" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/mdWalidur",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/md-walidur-rahman-b86453264/",
    icon: FaLinkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100095497299140",
    icon: FaFacebook,
  },
  {
    label: "Email",
    href: "mailto:ratul087@gmail.com",
    icon: FaEnvelope,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden px-5 pb-7 pt-16 sm:px-8 sm:pb-8 lg:px-12 xl:px-20"
      style={{
        background: "var(--background)",
        color: "var(--text-primary)",
      }}
    >
      {/* Ambient gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[30rem] w-[40rem] -translate-x-1/2 rounded-full blur-[140px]"
        style={{
          background: "var(--accent)",
          opacity: 0.035,
        }}
      />

      <div
        className="relative mx-auto max-w-7xl border-t pt-10"
        style={{
          borderColor: "var(--border)",
        }}
      >
        {/* Main footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 1.2,
            ease: [0.19, 1, 0.22, 1],
          }}
          className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]"
        >
          {/* Brand */}
          <div>
            <a
              href="#home"
              aria-label="Back to home"
              className="group inline-flex items-center gap-3 focus:outline-none"
            >
              <span
                className="text-2xl font-light tracking-[-0.1em] transition-transform duration-700 group-hover:-translate-y-0.5"
                style={{
                  color: "var(--accent)",
                }}
              >
                WR
              </span>

              <span
                className="h-1.5 w-1.5 rounded-full transition-all duration-700 group-hover:scale-125"
                style={{
                  background: "var(--accent)",
                  boxShadow:
                    "0 0 12px color-mix(in srgb, var(--accent) 55%, transparent)",
                }}
              />
            </a>

            <p
              className="mt-5 max-w-xs text-sm leading-relaxed"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              Building thoughtful digital experiences with modern
              technology, careful engineering, and a human point of
              view.
            </p>

            <a
              href="mailto:ratul087@gmail.com"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-medium transition-colors duration-700"
              style={{
                color: "var(--accent-dark)",
              }}
            >
              ratul087@gmail.com

              <ArrowUpRight
                size={15}
                className="transition-transform duration-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.3em]"
              style={{
                color: "var(--accent-dark)",
              }}
            >
              Navigate
            </p>

            <nav
              aria-label="Footer navigation"
              className="mt-5"
            >
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="group inline-flex items-center gap-2 text-sm transition-all duration-700 hover:translate-x-1"
                      style={{
                        color: "var(--text-secondary)",
                      }}
                    >
                      <span>{item.label}</span>

                      <ArrowUpRight
                        size={12}
                        className="opacity-0 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                        style={{
                          color: "var(--accent)",
                        }}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social */}
          <div>
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.3em]"
              style={{
                color: "var(--accent-dark)",
              }}
            >
              Elsewhere
            </p>

            <div className="mt-5 flex items-center gap-2.5">
              {socialLinks.map(
                ({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={
                      href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      href.startsWith("http")
                        ? "noreferrer"
                        : undefined
                    }
                    aria-label={label}
                    title={label}
                    className="group grid h-11 w-11 place-items-center rounded-full border transition-all duration-700 hover:-translate-y-1"
                    style={{
                      borderColor: "var(--border)",
                      background: "var(--surface-soft)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <Icon
                      size={16}
                      className="transition-colors duration-700 group-hover:text-[var(--accent)]"
                    />
                  </a>
                )
              )}
            </div>

            <p
              className="mt-5 max-w-xs text-xs leading-relaxed"
              style={{
                color: "var(--text-muted)",
              }}
            >
              Cloud · DevOps · AI · Security · Web
            </p>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div
          className="mt-12 flex flex-col gap-5 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between"
          style={{
            borderColor: "var(--border)",
            color: "var(--text-muted)",
          }}
        >
          {/* Copyright */}
          <p>
            © {currentYear} Walidur Rahman. All rights reserved.
          </p>

          {/* Location */}
          <div className="flex items-center gap-2">
            
              
            

            
          </div>

          {/* Back to top */}
          <a
            href="#home"
            className="group inline-flex items-center gap-2 font-medium transition-colors duration-700"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Back to top

            <span
              className="grid h-8 w-8 place-items-center rounded-full border transition-all duration-700 group-hover:-translate-y-1"
              style={{
                borderColor: "var(--border)",
                background: "var(--surface-soft)",
              }}
            >
              <ArrowUp
                size={14}
                className="transition-transform duration-700 group-hover:-translate-y-0.5"
                style={{
                  color: "var(--accent)",
                }}
              />
            </span>
          </a>
        </div>

        {/* Minimal final signature */}
        <div className="mt-8 flex justify-center">
          <p
            className="text-[10px] uppercase tracking-[0.28em]"
            style={{
              color: "var(--text-muted)",
            }}
          >
            Crafted in Finland
          </p>
        </div>
      </div>
    </footer>
  );
}