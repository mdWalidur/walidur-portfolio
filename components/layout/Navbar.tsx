"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

import ThemeSwitcher from "../theme/ThemeSwitcher";
import { navigationItems } from "../data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  /* =========================================================
     CLOSE MOBILE MENU WITH ESC
     ========================================================= */

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

  /* =========================================================
     PREVENT BODY SCROLL WHEN MOBILE MENU IS OPEN
     ========================================================= */

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";

      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  /* =========================================================
     RESTORE FOCUS TO MENU BUTTON
     ========================================================= */

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!isOpen) {
      menuButtonRef.current?.focus();
    }
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className="
        fixed
        inset-x-0
        top-0
        z-50
        px-2
        pt-2
        sm:px-4
        sm:pt-4
        lg:px-6
      "
    >
      <motion.nav
        initial={{
          opacity: 0,
          y: -16,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
        aria-label="Main navigation"
        className="
          relative
          mx-auto
          flex
          h-[72px]
          max-w-[1440px]
          items-center
          border
          px-4
          backdrop-blur-xl
          sm:h-[76px]
          sm:px-6
          lg:px-7
        "
        style={{
          background: "var(--header-background)",
          borderColor: "var(--border)",
          color: "var(--header-text)",
          boxShadow: "0 20px 60px var(--shadow-color)",
        }}
      >
        {/* ===================================================
            BRAND
            =================================================== */}

        <a
          href="#home"
          aria-label="Walidur Rahman — Home"
          className="
            group
            relative
            z-10
            flex
            shrink-0
            items-center
            gap-3
          "
        >
          <span
            className="
              relative
              grid
              h-11
              w-11
              shrink-0
              rotate-45
              place-items-center
              border
              transition-transform
              duration-300
              group-hover:scale-105
              group-focus-visible:scale-105
            "
            style={{
              borderColor: "var(--accent)",
            }}
          >
            <span
              className="
                -rotate-45
                text-[11px]
                font-medium
                tracking-tight
              "
              style={{
                color: "var(--accent)",
              }}
            >
              WR
            </span>
          </span>

          <span className="hidden sm:block">
            <span
              className="
                block
                text-[11px]
                font-medium
                uppercase
                tracking-[0.28em]
              "
              style={{
                color: "var(--text-primary)",
              }}
            >
              Walidur Rahman
            </span>

            <span
              className="
                mt-1
                block
                text-[8px]
                uppercase
                tracking-[0.28em]
              "
              style={{
                color: "var(--text-muted)",
              }}
            >
              Cloud · DevOps · AI
            </span>
          </span>
        </a>

        {/* ===================================================
            DESKTOP NAVIGATION
            =================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            hidden
            lg:flex
            lg:items-center
          "
        >
          <ul
            className="
              flex
              items-center
              gap-8
              xl:gap-10
            "
          >
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="
                    group
                    relative
                    inline-flex
                    items-center
                    py-2
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.28em]
                    transition-colors
                    duration-200
                    focus-visible:outline-none
                  "
                  style={{
                    color: "var(--header-text)",
                  }}
                >
                  {item.label}

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      -bottom-0.5
                      left-1/2
                      h-1
                      w-1
                      -translate-x-1/2
                      scale-0
                      rounded-full
                      transition-transform
                      duration-200
                      group-hover:scale-100
                      group-focus-visible:scale-100
                    "
                    style={{
                      background: "var(--accent)",
                    }}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ===================================================
            RIGHT SIDE
            =================================================== */}

        <div
          className="
            relative
            z-10
            ml-auto
            flex
            items-center
            gap-3
          "
        >
          <ThemeSwitcher />

          <a
            href="#contact"
            className="
              group
              hidden
              items-center
              gap-2
              border-b
              pb-1
              pl-1
              text-[10px]
              font-medium
              uppercase
              tracking-[0.28em]
              transition-colors
              duration-200
              sm:inline-flex
              focus-visible:outline-none
            "
            style={{
              color: "var(--header-text)",
              borderColor: "var(--accent)",
            }}
          >
            <span
              className="
                transition-colors
                duration-200
                group-hover:text-[var(--accent)]
                group-focus-visible:text-[var(--accent)]
              "
            >
              Contact
            </span>

            <ArrowUpRight
              size={13}
              strokeWidth={1.5}
              className="
                transition-transform
                duration-200
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-focus-visible:-translate-y-0.5
                group-focus-visible:translate-x-0.5
              "
              style={{
                color: "var(--accent)",
              }}
            />
          </a>

          {/* MOBILE MENU BUTTON */}

          <button
            ref={menuButtonRef}
            type="button"
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((value) => !value)}
            className="
              grid
              h-10
              w-10
              place-items-center
              border
              transition-colors
              duration-200
              lg:hidden
              focus-visible:outline-none
            "
            style={{
              borderColor: "var(--border)",
              background: "var(--surface-soft)",
              color: "var(--text-primary)",
            }}
          >
            {isOpen ? (
              <X
                size={18}
                strokeWidth={1.5}
              />
            ) : (
              <Menu
                size={19}
                strokeWidth={1.5}
              />
            )}
          </button>
        </div>
      </motion.nav>

      {/* =====================================================
          MOBILE MENU
          ===================================================== */}

      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}

            <motion.button
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="
                fixed
                inset-0
                z-40
                cursor-default
                lg:hidden
              "
              style={{
                background: "rgba(0, 0, 0, 0.35)",
                backdropFilter: "blur(8px)",
              }}
            />

            {/* MOBILE MENU */}

            <motion.div
              id="mobile-navigation"
              initial={{
                opacity: 0,
                y: -12,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -12,
                scale: 0.98,
              }}
              transition={{
                duration: 0.22,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative
                z-50
                mx-auto
                mt-2
                max-w-[1440px]
                overflow-hidden
                border
                p-3
                lg:hidden
              "
              style={{
                background: "var(--header-background)",
                borderColor: "var(--border)",
                boxShadow: "0 30px 80px var(--shadow-color)",
                backdropFilter: "blur(24px)",
              }}
            >
              <nav aria-label="Mobile navigation">
                <div className="flex flex-col">
                  {navigationItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      initial={{
                        opacity: 0,
                        x: -8,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.04,
                      }}
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        border-b
                        px-4
                        py-4
                        text-sm
                        font-medium
                        uppercase
                        tracking-[0.18em]
                        transition-colors
                        duration-200
                        focus-visible:outline-none
                      "
                      style={{
                        borderColor: "var(--border-soft)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <span
                        className="
                          transition-colors
                          duration-200
                          group-hover:text-[var(--accent)]
                          group-focus-visible:text-[var(--accent)]
                        "
                      >
                        {item.label}
                      </span>

                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.5}
                        className="
                          transition-transform
                          duration-200
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                        style={{
                          color: "var(--accent)",
                        }}
                      />
                    </motion.a>
                  ))}

                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className="
                      mt-3
                      flex
                      items-center
                      justify-center
                      gap-2
                      px-4
                      py-3.5
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      transition-opacity
                      duration-200
                      hover:opacity-90
                      focus-visible:outline-none
                    "
                    style={{
                      background: "var(--accent)",
                      color: "var(--accent-contrast)",
                    }}
                  >
                    Let&apos;s work together

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                    />
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}