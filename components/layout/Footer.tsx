"use client";

import { ArrowUp, ArrowUpRight, Heart } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/",
    icon: FaLinkedin,
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
    <footer className="relative overflow-hidden bg-[#050505] px-5 pb-7 pt-12 text-slate-100 sm:px-8 sm:pb-8 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl border-t border-white/10 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]"
        >
          <div>
            <a
              href="#home"
              aria-label="Back to home"
              className="group inline-flex items-center gap-2 text-2xl font-black tracking-[-0.1em] text-white focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              <span className="text-teal-300 transition-transform duration-300 group-hover:-rotate-12">
                WR
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
            </a>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-500">
              Building thoughtful web experiences with modern technology and
              careful attention to detail.
            </p>

            <a
              href="mailto:ratul087@gmail.com"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-300 transition-colors hover:text-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              ratul087@gmail.com
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.19em] text-slate-500">
              Navigate
            </p>

            <nav aria-label="Footer navigation" className="mt-5">
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-slate-300 transition-colors hover:text-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.19em] text-slate-500">
              Elsewhere
            </p>

            <div className="mt-5 flex items-center gap-2.5">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300/50 hover:bg-teal-300 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-teal-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Walidur Rahman. All rights reserved.</p>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-teal-800" />
            <p className="text-sm text-slate-1000">Designed and built in Finland</p>
          </div>

          <a
            href="#home"
            className="group inline-flex items-center gap-2 self-start font-medium text-slate-400 transition-colors hover:text-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300 sm:self-auto"
          >
            Back to top
            <span className="grid h-7 w-7 place-items-center rounded-full border border-white/10 transition-colors group-hover:border-teal-300/50">
              <ArrowUp
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}