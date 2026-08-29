"use client";

import { useState } from "react";
import { Check, Palette } from "lucide-react";
import { useTheme, type ThemeName } from "./ThemeProvider";

const themes: {
  name: ThemeName;
  label: string;
  description: string;
  preview: string[];
}[] = [
  {
    name: "signal",
    label: "Signal",
    description: "Graphite / Ivory / Lime",
    preview: ["#121314", "#F2F0E8", "#C8FF3D"],
  },
  {
    name: "paper",
    label: "Paper",
    description: "Editorial / Ink / Cobalt",
    preview: ["#EEECE5", "#15171A", "#315EFB"],
  },
  {
    name: "midnight",
    label: "Midnight",
    description: "Blue-black / Ice / Signal",
    preview: ["#090E18", "#E8EEF8", "#6C8DFF"],
  },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-label="Change color theme"
        className="interactive flex h-10 w-10 items-center justify-center border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--text-primary)]"
      >
        <Palette size={17} strokeWidth={1.7} />
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Close theme menu"
            className="fixed inset-0 z-40 cursor-default bg-transparent"
            onClick={() => setIsOpen(false)}
          />

          <div
            className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-72 border border-[var(--border)] bg-[var(--surface-raised)] p-2 shadow-2xl"
            role="menu"
            aria-label="Choose color theme"
          >
            <div className="border-b border-[var(--border-soft)] px-3 py-3">
              <p className="meta">
                Environment
              </p>

              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Choose your viewing mode.
              </p>
            </div>

            <div className="pt-2">
              {themes.map((item) => {
                const isActive = theme === item.name;

                return (
                  <button
                    key={item.name}
                    type="button"
                    role="menuitemradio"
                    aria-checked={isActive}
                    onClick={() => {
                      setTheme(item.name);
                      setIsOpen(false);
                    }}
                    className={`interactive flex w-full items-center gap-3 px-3 py-3 text-left ${
                      isActive
                        ? "bg-[var(--surface-hover)]"
                        : ""
                    }`}
                  >
                    <div className="flex -space-x-1">
                      {item.preview.map((color) => (
                        <span
                          key={color}
                          className="h-4 w-4 rounded-full border border-black/10"
                          style={{
                            backgroundColor: color,
                          }}
                        />
                      ))}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-[var(--text-primary)]">
                        {item.label}
                      </p>

                      <p className="mt-0.5 text-xs text-[var(--text-muted)]">
                        {item.description}
                      </p>
                    </div>

                    {isActive && (
                      <Check
                        size={16}
                        className="text-[var(--accent)]"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}