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
    accent: "#e5a965",
    tagline: "Warm Obsidian / Amber",
  },
  {
    id: "paper",
    label: "Paper",
    shortLabel: "Paper",
    icon: Sun,
    accent: "#b85630",
    tagline: "Warm Sand / Terracotta",
  },
  {
    id: "midnight",
    label: "Midnight",
    shortLabel: "Midnight",
    icon: Moon,
    accent: "#7aa2f7",
    tagline: "Deep Slate / Sky",
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
        className={`flex h-9 items-center rounded-full border border-[var(--glass-border)] bg-[var(--surface-soft)] px-3 ${className}`}
        aria-hidden="true"
      >
        <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-muted)]">
          Theme
        </span>
      </div>
    );
  }

  if (variant === "drawer") {
    return (
      <div className={`w-full ${className}`}>
        <div className="mb-2.5 flex items-center justify-between px-1">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Theme
          </span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--accent)]">
            {theme}
          </span>
        </div>

        <div
          role="radiogroup"
          aria-label="Theme selection"
          className="grid grid-cols-3 gap-1.5 rounded-2xl border border-[var(--glass-border)] bg-[var(--surface-soft)] p-1.5"
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
                className={`relative flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2.5 transition-all duration-200 focus-visible:outline-none ${
                  isActive
                    ? "border border-[var(--glass-border-glow)] bg-[var(--surface-raised)] text-[var(--text-primary)] shadow-sm"
                    : "border border-transparent text-[var(--text-muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: t.accent }}
                  />
                  <Icon
                    size={13}
                    className={isActive ? "text-[var(--accent)]" : ""}
                  />
                </div>
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.12em]">
                  {t.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div
      role="radiogroup"
      aria-label="Theme toggle"
      className={`relative inline-flex items-center rounded-full border border-[var(--glass-border)] bg-[var(--surface-soft)] p-1 backdrop-blur-xl ${className}`}
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
            title={`${t.label} (${t.tagline})`}
            onClick={() => setTheme(t.id)}
            className={`group relative z-10 flex h-7 items-center gap-1.5 rounded-full px-2.5 text-[10px] font-medium tracking-[0.08em] transition-colors duration-200 focus-visible:outline-none ${
              isActive
                ? "text-[var(--text-primary)]"
                : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="theme-active-indicator"
                className="absolute inset-0 z-0 rounded-full border border-[var(--glass-border-glow)] bg-[var(--surface-raised)] shadow-sm"
                transition={{ type: "spring", stiffness: 450, damping: 35 }}
              />
            )}

            <span className="relative z-10 flex items-center gap-1.5">
              <span
                className="h-1.5 w-1.5 rounded-full transition-transform group-hover:scale-125"
                style={{
                  backgroundColor: t.accent,
                  boxShadow: isActive ? `0 0 8px ${t.accent}` : "none",
                }}
              />
              <Icon
                size={12}
                strokeWidth={1.75}
                className={
                  isActive
                    ? "text-[var(--accent)]"
                    : "opacity-70 group-hover:opacity-100"
                }
              />
              <span className="hidden xl:inline">{t.shortLabel}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
