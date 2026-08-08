"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import ThemeSwitcher from "../theme/ThemeSwitcher";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Credentials", href: "#credentials" },
  { label: "About", href: "#about" },
];

type DotPosition = {
  x: number;
  y: number;
};

function getRandomDotPosition(): DotPosition {
  return {
    x: 12 + Math.random() * 76,
    y: 18 + Math.random() * 64,
  };
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [dotPosition, setDotPosition] = useState<DotPosition>({
    x: 50,
    y: 50,
  });

  /* =========================================================
     RANDOM NAVBAR DOT
     ========================================================= */

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const moveDot = () => {
      setDotPosition(getRandomDotPosition());

      const nextDelay = 2500 + Math.random() * 2500;

      timeoutId = setTimeout(moveDot, nextDelay);
    };

    timeoutId = setTimeout(moveDot, 1800);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

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
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
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
          overflow-visible
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
            RANDOM AMBIENT DOT
            =================================================== */}

        <motion.span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            z-0
            h-1.5
            w-1.5
            rounded-full
          "
          animate={{
            left: `${dotPosition.x}%`,
            top: `${dotPosition.y}%`,
          }}
          transition={{
            duration: 2.2,
            ease: [0.19, 1, 0.22, 1],
          }}
          style={{
            background: "var(--accent)",
            boxShadow: "0 0 10px var(--accent)",
          }}
        />

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
          {/* WR DIAMOND */}

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
              duration-500
              group-hover:scale-105
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

          {/* NAME */}

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
            {navigation.map((item) => (
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
                    duration-300
                  "
                  style={{
                    color: "var(--header-text)",
                  }}
                >
                  {item.label}

                  {/* Hover dot */}

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
                      duration-300
                      group-hover:scale-100
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
          {/* THEME SWITCHER */}

          <ThemeSwitcher />

          {/* CONTACT */}

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
              duration-300
              sm:inline-flex
            "
            style={{
              color: "var(--header-text)",
              borderColor: "var(--accent)",
            }}
          >
            <span
              className="
                transition-colors
                duration-300
                group-hover:text-[var(--accent)]
              "
            >
              Contact
            </span>

            <ArrowUpRight
              size={13}
              strokeWidth={1.5}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
              style={{
                color: "var(--accent)",
              }}
            />
          </a>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="
              grid
              h-10
              w-10
              place-items-center
              border
              transition-all
              duration-300
              lg:hidden
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

      {isOpen && (
        <>
          {/* BACKDROP */}

          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
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
                {navigation.map((item, index) => (
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
                      transition-all
                      duration-300
                    "
                    style={{
                      borderColor: "var(--border-soft)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <span
                      className="
                        transition-colors
                        duration-300
                        group-hover:text-[var(--accent)]
                      "
                    >
                      {item.label}
                    </span>

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      className="
                        transition-all
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                      style={{
                        color: "var(--accent)",
                      }}
                    />
                  </motion.a>
                ))}

                {/* MOBILE CONTACT */}

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
                    transition-all
                    duration-300
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
    </header>
  );
}