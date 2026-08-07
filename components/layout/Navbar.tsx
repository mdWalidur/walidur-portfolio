"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 pt-4 sm:px-8 lg:px-12 xl:px-20">
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-5 ${
          isScrolled || isOpen
            ? "border-white/10 bg-[#090b0b]/80 shadow-xl shadow-black/20 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a
          href="#home"
          aria-label="Back to home"
          className="group flex items-center gap-2 text-lg font-black tracking-[-0.08em] text-white focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-[#050505]"
        >
          <span className="text-teal-300 transition-transform duration-300 group-hover:-rotate-12">
            WR
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-sm font-semibold text-teal-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:bg-teal-300 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-teal-300 md:inline-flex"
        >
          Let&apos;s talk
          <ArrowUpRight size={15} />
        </a>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-slate-100 transition-colors hover:border-teal-300/50 hover:text-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-300 md:hidden"
        >
          {isOpen ? <X size={19} /> : <Menu size={20} />}
        </button>
      </motion.nav>

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
              className="fixed inset-0 -z-10 bg-black/50 backdrop-blur-sm md:hidden"
            />

            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0d0d]/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className="flex items-center justify-between rounded-xl px-4 py-4 text-base font-medium text-slate-300 transition-colors hover:bg-white/[0.06] hover:text-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
                  >
                    {link.label}
                    <ArrowUpRight size={17} className="text-teal-300/70" />
                  </motion.a>
                ))}

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-teal-300 px-4 py-3.5 text-sm font-bold text-slate-950 transition-colors hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-[#0a0d0d]"
                >
                  Let&apos;s work together
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}