"use client";

import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { Zap, Sun, Moon } from "lucide-react";
import { useTheme, type ThemeName } from "./ThemeProvider";

function emptySubscribe() {
  return () => {};
}

export const themes: {
  id: ThemeName;
  label: string;
  shortLabel: string;
  icon: typeof Zap;
  accent: string;
  tagline: string;
}[] = [
  {
    id: "signal",
    label: "Signal",
    shortLabel: "Signal",
    icon: Zap,
    accent: "#c8ff3d",
    tagline: "Graphite / Lime",
  },
  {
    id: "paper",
    label: "Paper",
    shortLabel: "Paper",
    icon: Sun,
    accent: "#315efb",
    tagline: "Editorial / Ink",
  },
  {
    id: "midnight",
    label: "Midnight",
    shortLabel: "Midnight",
    icon: Moon,
    accent: "#6c8dff",
    tagline: "Deep Navy / Ice",
  },
];

interface ThemeSwitcherProps {
  variant?: "segmented" | "compact" | "drawer";
  className?: string;
}

export default function ThemeSwitcher({
  variant = "segmented",
  className = "",
}: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div
        className={`flex h-8 items-center border border-[var(--border)] bg-[var(--surface-soft)] px-2 ${className}`}
        aria-hidden="true"
      >
        <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-muted)]">
          Theme
        </span>
      </div>
    );
  }

  // Drawer variant for mobile dropdown menu
  if (variant === "drawer") {
    return (
      <div className={`w-full ${className}`}>
        <div className="mb-2.5 flex items-center justify-between px-1">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Color Theme
          </span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--accent)]">
            Current: {theme}
          </span>
        </div>

        <div
          role="radiogroup"
          aria-label="Theme selection"
          className="grid grid-cols-3 gap-1.5 border border-[var(--border)] bg-[var(--surface-soft)] p-1.5"
        >
          {themes.map((t) => {
            const isActive = theme === t.id;
            const Icon = t.icon;

            return (
              <button
                key={t.id}
                type="button"
                role="radio"
                aria-checked={isActive}
                onClick={() => setTheme(t.id)}
                className={`relative flex flex-col items-center justify-center gap-1.5 px-2 py-2.5 transition-all duration-200 focus-visible:outline-none ${
                  isActive
                    ? "border border-[var(--border-strong)] bg-[var(--surface-raised)] shadow-sm text-[var(--text-primary)]"
                    : "border border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span
                    className="h-2 w-2 rounded-full border border-black/20"
                    style={{ backgroundColor: t.accent }}
                  />
                  <Icon size={14} className={isActive ? "text-[var(--accent)]" : ""} />
                </div>
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.14em]">
                  {t.label}
                </span>
                <span className="text-[8px] text-[var(--text-faint)] tracking-tight">
                  {t.tagline}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Segmented toggle variant in the Navbar
  return (
    <div
      role="radiogroup"
      aria-label="Theme toggle"
      className={`relative inline-flex items-center border border-[var(--border)] bg-[var(--surface-soft)] p-0.5 backdrop-blur-md ${className}`}
    >
      {themes.map((t) => {
        const isActive = theme === t.id;
        const Icon = t.icon;

        return (
          <button
            key={t.id}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={`Switch to ${t.label} theme`}
            onClick={() => setTheme(t.id)}
            className={`group relative z-10 flex h-7 items-center gap-1.5 px-2 text-[10px] font-medium uppercase tracking-[0.16em] transition-colors duration-200 focus-visible:outline-none sm:px-2.5 ${
              isActive
                ? "text-[var(--text-primary)]"
                : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="theme-active-indicator"
                className="absolute inset-0 z-0 border border-[var(--border-strong)] bg-[var(--surface-raised)] shadow-sm"
                transition={{ type: "spring", stiffness: 450, damping: 35 }}
              />
            )}

            <span className="relative z-10 flex items-center gap-1.5">
              <span
                className="h-1.5 w-1.5 rounded-full transition-transform group-hover:scale-125"
                style={{
                  backgroundColor: t.accent,
                  boxShadow: isActive ? `0 0 6px ${t.accent}` : "none",
                }}
              />
              <Icon
                size={12}
                strokeWidth={1.75}
                className={isActive ? "text-[var(--accent)]" : "opacity-70 group-hover:opacity-100"}
              />
              <span className="hidden sm:inline">{t.shortLabel}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
