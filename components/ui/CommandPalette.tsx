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
  const { setTheme } = useTheme();

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
      label: "Switch Theme: Signal (Warm Dark)",
      category: "Theme",
      detail: "Warm obsidian, parchment ivory, and amber gold",
      icon: Palette,
      action: () => {
        setTheme("signal");
        setIsOpen(false);
      },
    },
    {
      id: "theme-paper",
      label: "Switch Theme: Paper (Warm Light)",
      category: "Theme",
      detail: "Soft warm sandstone, espresso ink, and terracotta",
      icon: Palette,
      action: () => {
        setTheme("paper");
        setIsOpen(false);
      },
    },
    {
      id: "theme-midnight",
      label: "Switch Theme: Midnight (Deep Slate)",
      category: "Theme",
      detail: "Deep slate navy, luminous sky, and warm gold",
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
        window.open(
          "https://github.com/mdWalidur",
          "_blank",
          "noopener,noreferrer"
        );
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

    const handleCustomOpen = () => {
      setQuery("");
      setSelectedIndex(0);
      setIsOpen(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, []);

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
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Command Palette"
          className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 sm:pt-28"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -16 }}
            transition={{ duration: 0.22, ease: [0.19, 1, 0.22, 1] }}
            className="glass-card-strong relative w-full max-w-xl overflow-hidden rounded-3xl"
          >
            <div
              className="flex items-center gap-3 border-b px-5 py-4"
              style={{ borderColor: "var(--border)" }}
            >
              <Search size={16} style={{ color: "var(--accent)" }} />
              <input
                ref={inputRef}
                type="text"
                aria-label="Search commands"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDownInput}
                placeholder="Type a command or jump to section..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--text-muted)]"
                style={{ color: "var(--text-primary)" }}
              />
              <button
                type="button"
                aria-label="Close command palette"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              >
                <X size={15} />
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto p-2.5">
              {filteredCommands.length === 0 ? (
                <div className="py-8 text-center">
                  <p
                    className="font-mono text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
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
                      className={`group flex w-full items-center justify-between rounded-2xl border px-3.5 py-2.5 text-left transition-all ${
                        isSelected
                          ? "border-[var(--glass-border-glow)]"
                          : "border-transparent"
                      }`}
                      style={{
                        background: isSelected
                          ? "var(--surface-soft)"
                          : "transparent",
                      }}
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <span
                          className="grid h-8 w-8 shrink-0 place-items-center rounded-xl border"
                          style={{
                            borderColor: isSelected
                              ? "var(--accent)"
                              : "var(--border)",
                            background: "var(--surface)",
                            color: isSelected
                              ? "var(--accent)"
                              : "var(--text-muted)",
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
                          color: isSelected
                            ? "var(--accent)"
                            : "var(--text-muted)",
                        }}
                      >
                        {isSelected ? "↵" : item.category}
                      </span>
                    </button>
                  );
                })
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
