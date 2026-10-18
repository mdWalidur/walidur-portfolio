"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, Search, X } from "lucide-react";

import ThemeSwitcher from "../theme/ThemeSwitcher";
import { navigationItems } from "../data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#home");
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = [
      ...navigationItems.map((item) => item.href.replace("#", "")),
      "contact",
    ];

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const topId = visible[0].target.id;
          if (topId === "contact") {
            setActiveSection("#contact");
          } else {
            setActiveSection(`#${topId}`);
          }
        }
      },
      {
        rootMargin: "-22% 0px -55% 0px",
        threshold: [0.05, 0.2, 0.45],
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

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

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!isOpen) {
      menuButtonRef.current?.focus();
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const openCommandPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3.5 sm:px-6 sm:pt-5">
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        aria-label="Main navigation"
        className={`glass-card-strong relative mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full px-3.5 transition-all duration-300 sm:h-15 sm:px-5 ${
          scrolled
            ? "border-[var(--border-strong)] shadow-[0_24px_60px_-16px_var(--shadow-color)]"
            : ""
        }`}
      >
        {/* LEFT — BRAND MONOGRAM & NAME */}
        <a
          href="#home"
          onClick={() => setActiveSection("#home")}
          aria-label="Walidur Rahman — Home"
          className="group flex shrink-0 items-center gap-3 rounded-full py-1 pl-1 pr-2 focus-visible:outline-none"
        >
          <span
            className="relative grid h-8 w-8 place-items-center rounded-full border transition-all duration-300 group-hover:scale-105"
            style={{
              borderColor: "var(--glass-border-glow)",
              background:
                "linear-gradient(135deg, color-mix(in oklab, var(--accent) 18%, var(--surface-raised)), var(--surface))",
            }}
          >
            <span className="font-display text-[11px] font-semibold tracking-[-0.04em] text-[var(--text-primary)]">
              WR
            </span>
            <span
              className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full ring-2 ring-[var(--surface)]"
              style={{
                background: "var(--accent)",
                boxShadow: "0 0 8px var(--accent)",
              }}
            />
          </span>

          <div className="flex flex-col">
            <span className="font-display text-xs font-semibold leading-none tracking-[-0.02em] text-[var(--text-primary)] sm:text-[13px]">
              Walidur{" "}
              <span className="font-normal text-[var(--text-secondary)] transition-colors duration-200 group-hover:text-[var(--accent)]">
                Rahman
              </span>
            </span>
            <span className="mt-1 hidden font-mono text-[8px] uppercase tracking-[0.2em] text-[var(--text-muted)] sm:block">
              Cloud · DevOps · AI
            </span>
          </div>
        </a>

        {/* CENTER — SEGMENTED DESKTOP NAVIGATION WITH ACTIVE & HOVER STATES */}
        <ul
          onMouseLeave={() => setHoveredHref(null)}
          className="hidden items-center gap-0.5 rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] p-1 lg:flex"
        >
          {navigationItems.map((item) => {
            const isActive = activeSection === item.href;
            const isHovered = hoveredHref === item.href;

            return (
              <li key={item.href} className="relative">
                <a
                  href={item.href}
                  onClick={() => setActiveSection(item.href)}
                  onMouseEnter={() => setHoveredHref(item.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative z-10 inline-flex h-8 items-center gap-1.5 rounded-full px-3.5 font-display text-xs font-medium tracking-[-0.01em] transition-colors duration-200 focus-visible:outline-none ${
                    isActive
                      ? "text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 -z-10 rounded-full border border-[var(--glass-border-glow)] bg-[var(--surface-raised)] shadow-sm"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                    />
                  )}

                  {!isActive && isHovered && (
                    <motion.span
                      layoutId="navbar-hover-pill"
                      className="absolute inset-0 -z-20 rounded-full bg-[var(--surface-hover)]"
                      transition={{
                        type: "spring",
                        stiffness: 460,
                        damping: 34,
                      }}
                    />
                  )}

                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        background: "var(--accent)",
                        boxShadow: "0 0 8px var(--accent)",
                      }}
                    />
                  )}

                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* RIGHT — SEARCH, THEME SWITCHER & CONTACT CTA */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openCommandPalette}
            aria-label="Open command menu (⌘K)"
            title="Search & Commands (⌘K)"
            className="hidden h-9 items-center gap-1.5 rounded-full border border-[var(--glass-border)] bg-[var(--surface-soft)] px-3 font-mono text-[10px] font-medium text-[var(--text-secondary)] transition-all duration-200 hover:border-[var(--glass-border-glow)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)] md:inline-flex"
          >
            <Search size={12} style={{ color: "var(--accent)" }} />
            <span>⌘K</span>
          </button>

          <ThemeSwitcher />

          <a
            href="#contact"
            onClick={() => setActiveSection("#contact")}
            aria-current={activeSection === "#contact" ? "page" : undefined}
            className="group hidden h-9 items-center gap-1.5 rounded-full px-4 font-display text-xs font-semibold tracking-[-0.01em] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-95 sm:inline-flex"
            style={{
              background: "var(--accent)",
              color: "var(--accent-contrast)",
              boxShadow:
                activeSection === "#contact"
                  ? "0 0 20px color-mix(in oklab, var(--accent) 45%, transparent)"
                  : "none",
            }}
          >
            <span>Contact</span>
            <ArrowUpRight
              size={13}
              strokeWidth={1.9}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--glass-border)] bg-[var(--surface-soft)] text-[var(--text-primary)] transition-colors hover:border-[var(--glass-border-glow)] lg:hidden"
          >
            {isOpen ? (
              <X size={16} strokeWidth={1.7} />
            ) : (
              <Menu size={16} strokeWidth={1.7} />
            )}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 cursor-default bg-black/50 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card-strong relative z-50 mx-auto mt-2.5 max-w-6xl overflow-hidden rounded-3xl p-4 lg:hidden"
            >
              <nav aria-label="Mobile navigation">
                <div className="flex flex-col gap-1">
                  {navigationItems.map((item, index) => {
                    const isActive = activeSection === item.href;

                    return (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={() => {
                          setActiveSection(item.href);
                          closeMenu();
                        }}
                        aria-current={isActive ? "page" : undefined}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03 }}
                        className={`group flex items-center justify-between rounded-2xl border px-4 py-3 font-display text-sm font-medium transition-all ${
                          isActive
                            ? "border-[var(--glass-border-glow)] bg-[var(--surface-raised)] text-[var(--text-primary)]"
                            : "border-transparent text-[var(--text-secondary)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)]"
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <span
                            className={`h-1.5 w-1.5 rounded-full transition-opacity ${
                              isActive ? "opacity-100" : "opacity-0"
                            }`}
                            style={{ background: "var(--accent)" }}
                          />
                          <span>{item.label}</span>
                        </span>
                        <ArrowUpRight
                          size={15}
                          strokeWidth={1.6}
                          style={{ color: "var(--accent)" }}
                        />
                      </motion.a>
                    );
                  })}

                  <div className="mt-2 border-t border-[var(--border)] pt-3">
                    <ThemeSwitcher variant="drawer" />
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        closeMenu();
                        openCommandPalette();
                      }}
                      className="glass-pill flex items-center justify-center gap-2 rounded-2xl px-4 py-3 font-mono text-xs font-medium text-[var(--text-primary)]"
                    >
                      <Search size={14} style={{ color: "var(--accent)" }} />
                      Search (⌘K)
                    </button>

                    <a
                      href="#contact"
                      onClick={() => {
                        setActiveSection("#contact");
                        closeMenu();
                      }}
                      className="flex items-center justify-center gap-1.5 rounded-2xl px-4 py-3 font-display text-xs font-semibold transition-opacity hover:opacity-90"
                      style={{
                        background: "var(--accent)",
                        color: "var(--accent-contrast)",
                      }}
                    >
                      Contact
                      <ArrowUpRight size={14} strokeWidth={1.7} />
                    </a>
                  </div>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}