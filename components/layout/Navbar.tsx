"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import ThemeSwitcher from "@/components/theme/ThemeSwitcher";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Credentials", href: "#credentials" },
  { label: "About", href: "#about" },
];

const transition = {
  duration: 1.2,
  ease: [0.19, 1, 0.22, 1] as const,
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10 xl:px-16">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
        className="mx-auto max-w-7xl"
      >
        <div
          className="relative flex items-center justify-between border px-4 py-3.5 sm:px-5"
          style={{
            background: isScrolled || isOpen
              ? "var(--header-background)"
              : "color-mix(in srgb, var(--background) 18%, transparent)",

            borderColor: isScrolled || isOpen
              ? "var(--border)"
              : "var(--border-soft)",

            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",

            boxShadow: isScrolled
              ? "0 20px 70px var(--shadow-color)"
              : "none",
          }}
        >
          {/* =================================================
              BRAND
              ================================================= */}

          <a
            href="#home"
            aria-label="Walidur Rahman — Home"
            onClick={closeMenu}
            className="group flex items-center gap-3"
            style={{
              color: "var(--text-primary)",
            }}
          >
            {/* Diamond logo */}
            <span
              className="relative grid h-9 w-9 rotate-45 place-items-center border transition-transform duration-700 group-hover:-rotate-[25deg]"
              style={{
                borderColor: "var(--accent)",
                background: "var(--surface-soft)",
              }}
            >
              <span
                className="-rotate-45 text-[9px] font-semibold tracking-tight"
                style={{
                  color: "var(--accent)",
                }}
              >
                WR
              </span>
            </span>

            {/* Name */}
            <span className="hidden sm:block">
              <span
                className="block text-[10px] font-semibold uppercase tracking-[0.28em]"
                style={{
                  color: "var(--header-text)",
                }}
              >
                Walidur Rahman
              </span>

              <span
                className="mt-1 block text-[8px] uppercase tracking-[0.22em]"
                style={{
                  color: "var(--text-muted)",
                }}
              >
                Cloud · DevOps · AI
              </span>
            </span>

            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                background: "var(--accent)",
                boxShadow:
                  "0 0 12px color-mix(in srgb, var(--accent) 60%, transparent)",
              }}
            />
          </a>

          {/* =================================================
              DESKTOP NAVIGATION
              ================================================= */}

          <div className="hidden items-center md:flex">
            <nav aria-label="Primary navigation">
              <ul className="flex items-center">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group relative px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.24em]"
                      style={{
                        color: "var(--header-text)",
                      }}
                    >
                      <span className="transition-colors duration-700 group-hover:text-[var(--accent)]">
                        {link.label}
                      </span>

                      {/* Gold underline */}
                      <span
                        className="absolute bottom-1 left-4 right-4 h-px origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"
                        style={{
                          background: "var(--accent)",
                        }}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* =================================================
              RIGHT SIDE
              ================================================= */}

          <div className="flex items-center gap-2">
            {/* Theme */}
            <ThemeSwitcher />

            {/* Contact */}
            <a
              href="#contact"
              className="group hidden items-center gap-2 border-b px-2 py-2 text-[9px] font-semibold uppercase tracking-[0.25em] sm:inline-flex"
              style={{
                borderColor: "var(--accent)",
                color: "var(--header-text)",
              }}
            >
              <span className="transition-colors duration-700 group-hover:text-[var(--accent)]">
                Contact
              </span>

              <ArrowUpRight
                size={13}
                className="transition-transform duration-700 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                style={{
                  color: "var(--accent)",
                }}
              />
            </a>

            {/* Mobile menu */}
            <button
              type="button"
              aria-label={
                isOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((value) => !value)}
              className="grid h-9 w-9 place-items-center border md:hidden"
              style={{
                borderColor: "var(--border)",
                background: "var(--surface-soft)",
                color: "var(--header-text)",
              }}
            >
              {isOpen ? (
                <X size={17} />
              ) : (
                <Menu size={18} />
              )}
            </button>
          </div>
        </div>

        {/* ===================================================
            MOBILE NAVIGATION
            =================================================== */}

        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.button
                type="button"
                aria-label="Close navigation menu"
                onClick={closeMenu}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={transition}
                className="fixed inset-0 -z-10 md:hidden"
                style={{
                  background: "rgba(0, 0, 0, 0.35)",
                  backdropFilter: "blur(8px)",
                }}
              />

              {/* Menu */}
              <motion.div
                id="mobile-navigation"
                initial={{
                  opacity: 0,
                  y: -18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -18,
                }}
                transition={transition}
                className="mt-2 border p-3 md:hidden"
                style={{
                  background: "var(--header-background)",
                  borderColor: "var(--border)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  boxShadow: "0 30px 90px var(--shadow-color)",
                }}
              >
                <nav aria-label="Mobile navigation">
                  <ul className="space-y-1">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={{
                          opacity: 0,
                          x: -12,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          ...transition,
                          delay: index * 0.04,
                        }}
                      >
                        <a
                          href={link.href}
                          onClick={closeMenu}
                          className="group flex items-center justify-between px-4 py-3.5"
                          style={{
                            color: "var(--header-text)",
                          }}
                        >
                          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] transition-colors duration-700 group-hover:text-[var(--accent)]">
                            {link.label}
                          </span>

                          <ArrowUpRight
                            size={15}
                            className="transition-transform duration-700 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            style={{
                              color: "var(--accent)",
                            }}
                          />
                        </a>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Mobile contact */}
                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className="mt-2 flex items-center justify-center gap-2 px-4 py-4 text-[10px] font-bold uppercase tracking-[0.22em]"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--accent), var(--accent-dark))",
                      color: "var(--accent-contrast)",
                    }}
                  >
                    Let's work together
                    <ArrowUpRight size={15} />
                  </a>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}