"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Search,
  ArrowRight,
  Download,
  Palette,
  ExternalLink,
  X,
  Code,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";

type CommandItem = {
  id: string;
  label: string;
  category: "Navigation" | "Action" | "Theme";
  detail: string;
  icon: typeof Terminal;
  action: () => void;
};

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme, setTheme } = useTheme();

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const commands: CommandItem[] = [
    {
      id: "work",
      label: "View Projects & Work",
      category: "Navigation",
      detail: "IoT, Network Calculator, Cybersecurity",
      icon: Layers,
      action: () => scrollTo("work"),
    },
    {
      id: "about",
      label: "About & Engineering Toolkit",
      category: "Navigation",
      detail: "Background, principles, and technical skills",
      icon: Code,
      action: () => scrollTo("about"),
    },
    {
      id: "experience",
      label: "Experience & Education",
      category: "Navigation",
      detail: "Centria UAS, web development, professional timeline",
      icon: Layers,
      action: () => scrollTo("experience"),
    },
    {
      id: "credentials",
      label: "Certifications & Credentials",
      category: "Navigation",
      detail: "AWS Academy, Cisco Linux Essentials",
      icon: ShieldCheck,
      action: () => scrollTo("credentials"),
    },
    {
      id: "contact",
      label: "Contact & Inquiries",
      category: "Navigation",
      detail: "Email, LinkedIn, GitHub",
      icon: ArrowRight,
      action: () => scrollTo("contact"),
    },
    {
      id: "cv",
      label: "Download Curriculum Vitae (CV)",
      category: "Action",
      detail: "PDF format · Walidur Rahman CV",
      icon: Download,
      action: () => {
        setIsOpen(false);
        const link = document.createElement("a");
        link.href = "/Walidur_Rahman_CV.pdf";
        link.download = "Walidur_Rahman_CV.pdf";
        link.click();
      },
    },
    {
      id: "theme-signal",
      label: "Switch Theme: Signal (Dark)",
      category: "Theme",
      detail: "High-contrast graphite, ivory, and lime",
      icon: Palette,
      action: () => {
        setTheme("signal");
        setIsOpen(false);
      },
    },
    {
      id: "theme-paper",
      label: "Switch Theme: Paper (Light)",
      category: "Theme",
      detail: "Warm editorial paper, ink, and cobalt",
      icon: Palette,
      action: () => {
        setTheme("paper");
        setIsOpen(false);
      },
    },
    {
      id: "theme-midnight",
      label: "Switch Theme: Midnight (OLED)",
      category: "Theme",
      detail: "Deep low-light navy, ice, and cyan",
      icon: Palette,
      action: () => {
        setTheme("midnight");
        setIsOpen(false);
      },
    },
    {
      id: "github",
      label: "Open GitHub Profile",
      category: "Action",
      detail: "github.com/mdWalidur",
      icon: ExternalLink,
      action: () => {
        setIsOpen(false);
        window.open("https://github.com/mdWalidur", "_blank", "noopener,noreferrer");
      },
    },
    {
      id: "linkedin",
      label: "Open LinkedIn Profile",
      category: "Action",
      detail: "linkedin.com/in/md-walidur-rahman-b86453264",
      icon: ExternalLink,
      action: () => {
        setIsOpen(false);
        window.open(
          "https://www.linkedin.com/in/md-walidur-rahman-b86453264/",
          "_blank",
          "noopener,noreferrer"
        );
      },
    },
  ];

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.label.toLowerCase().includes(query.toLowerCase()) ||
      cmd.detail.toLowerCase().includes(query.toLowerCase()) ||
      cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  const openPalette = () => {
    setQuery("");
    setSelectedIndex(0);
    setIsOpen(true);
  };

  /* Keyboard shortcut listener: Cmd + K or Ctrl + K */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen((prev) => {
          if (!prev) {
            setQuery("");
            setSelectedIndex(0);
            return true;
          }
          return false;
        });
      }
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  /* Focus input on open */
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleKeyDownInput = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredCommands.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredCommands.length - 1
      );
    } else if (e.key === "Enter" && filteredCommands[selectedIndex]) {
      e.preventDefault();
      filteredCommands[selectedIndex].action();
    }
  };

  return (
    <>
      {/* Floating launcher trigger button */}
      <button
        type="button"
        onClick={openPalette}
        aria-label="Open Command Palette (⌘K)"
        title="Command Palette (⌘K)"
        className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2.5 border px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.14em] backdrop-blur-md transition-all duration-300 hover:scale-[1.02] shadow-xl"
        style={{
          background: "var(--header-background)",
          borderColor: "var(--border)",
          color: "var(--text-secondary)",
          boxShadow: "0 10px 40px var(--shadow-color)",
        }}
      >
        <Terminal size={14} style={{ color: "var(--accent)" }} />
        <span>Command Menu</span>
        <kbd
          className="rounded border px-1.5 py-0.5 text-[9px] font-semibold"
          style={{
            borderColor: "var(--border)",
            background: "var(--surface)",
            color: "var(--accent)",
          }}
        >
          ⌘K
        </kbd>
      </button>

      {/* Modal Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Terminal Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -16 }}
              transition={{ duration: 0.22, ease: [0.19, 1, 0.22, 1] }}
              className="relative w-full max-w-xl overflow-hidden border shadow-2xl backdrop-blur-2xl"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border-strong)",
                boxShadow: "0 25px 80px var(--shadow-color)",
              }}
            >
              {/* Terminal Title Bar */}
              <div
                className="flex items-center justify-between border-b px-4 py-3"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface-soft)",
                }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span
                    className="font-mono text-[10px] uppercase tracking-[0.2em]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    terminal://walidur-system
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Input Area */}
              <div
                className="flex items-center gap-3 border-b px-4 py-3.5"
                style={{ borderColor: "var(--border)" }}
              >
                <Search size={16} style={{ color: "var(--accent)" }} />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                  onKeyDown={handleKeyDownInput}
                  placeholder="Type a command or jump to section..."
                  className="w-full bg-transparent font-mono text-sm outline-none placeholder:text-[var(--text-muted)]"
                  style={{ color: "var(--text-primary)" }}
                />
                <span
                  className="rounded border px-1.5 py-0.5 font-mono text-[9px] uppercase"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--text-muted)",
                  }}
                >
                  ESC to close
                </span>
              </div>

              {/* Command List */}
              <div className="max-h-80 overflow-y-auto p-2">
                {filteredCommands.length === 0 ? (
                  <div className="py-8 text-center">
                    <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                      No matching commands found.
                    </p>
                  </div>
                ) : (
                  filteredCommands.map((item, index) => {
                    const isSelected = index === selectedIndex;
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={item.action}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`group flex w-full items-center justify-between border px-3 py-2.5 text-left transition-all ${
                          isSelected ? "border-[var(--accent)]" : "border-transparent"
                        }`}
                        style={{
                          background: isSelected
                            ? "color-mix(in srgb, var(--accent) 10%, var(--surface))"
                            : "transparent",
                        }}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span
                            className="grid h-7 w-7 shrink-0 place-items-center rounded border"
                            style={{
                              borderColor: isSelected ? "var(--accent)" : "var(--border)",
                              background: "var(--surface)",
                              color: isSelected ? "var(--accent)" : "var(--text-muted)",
                            }}
                          >
                            <Icon size={14} />
                          </span>

                          <div className="min-w-0">
                            <p
                              className="truncate text-xs font-medium"
                              style={{
                                color: isSelected
                                  ? "var(--text-primary)"
                                  : "var(--text-secondary)",
                              }}
                            >
                              {item.label}
                            </p>
                            <p
                              className="truncate text-[10px]"
                              style={{ color: "var(--text-muted)" }}
                            >
                              {item.detail}
                            </p>
                          </div>
                        </div>

                        <span
                          className="shrink-0 font-mono text-[9px] uppercase tracking-wider"
                          style={{
                            color: isSelected ? "var(--accent)" : "var(--text-muted)",
                          }}
                        >
                          {isSelected ? "↵ Enter" : item.category}
                        </span>
                      </button>
                    );
                  })
                )}
              </div>

              {/* Bottom Status bar */}
              <div
                className="flex items-center justify-between border-t px-4 py-2 font-mono text-[9px] uppercase"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface-soft)",
                  color: "var(--text-muted)",
                }}
              >
                <span>↑↓ navigate</span>
                <span>Active Theme: {theme}</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
