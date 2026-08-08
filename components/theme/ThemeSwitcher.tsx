"use client";

import { useState } from "react";
import { Check, Palette } from "lucide-react";
import { useTheme, type ThemeName } from "./ThemeProvider";

const themes: {
  name: ThemeName;
  label: string;
  description: string;
  color: string;
}[] = [
  {
    name: "obsidian",
    label: "Obsidian Gold",
    description: "Luxury / Cinematic",
    color: "#c5a059",
  },
  {
    name: "spectral",
    label: "Spectral Black",
    description: "Futuristic / Technical",
    color: "#2dd4bf",
  },
  {
    name: "cream",
    label: "Cream",
    description: "Editorial / Warm",
    color: "#8b5e3c",
  },
  {
    name: "chocolate",
    label: "Chocolate",
    description: "Warm / Sophisticated",
    color: "#c98b5b",
  },
  {
    name: "graphite",
    label: "Graphite",
    description: "Technical / Modern",
    color: "#7dd3fc",
  },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* =====================================================
          THEME BUTTON
          ===================================================== */}

      <button
        type="button"
        aria-label="Change website theme"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
        className="group flex h-9 w-9 items-center justify-center border backdrop-blur-[20px] transition-all duration-700 hover:-translate-y-0.5"
        style={{
          background: "var(--glass-background)",
          borderColor: "var(--border)",
          color: "var(--header-text)",
        }}
      >
        <Palette
          size={15}
          strokeWidth={1.5}
          className="transition-transform duration-700 group-hover:rotate-12"
          style={{
            color: "var(--accent)",
          }}
        />
      </button>

      {/* =====================================================
          THEME MENU
          ===================================================== */}

      {open && (
        <>
          {/* Invisible backdrop */}
          <button
            type="button"
            aria-label="Close theme menu"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 cursor-default"
          />

          {/* Menu */}
          <div
            role="menu"
            className="absolute right-0 top-12 z-50 w-72 border p-3 shadow-2xl backdrop-blur-[20px]"
            style={{
              background: "var(--background)",
              borderColor: "var(--border)",
              boxShadow: `0 30px 100px ${"var(--shadow-color)"}`,
            }}
          >
            {/* Header */}
            <div
              className="mb-3 border-b px-3 pb-3"
              style={{
                borderColor: "var(--border)",
              }}
            >
              <p
                className="text-[9px] font-semibold uppercase tracking-[0.3em]"
                style={{
                  color: "var(--accent)",
                }}
              >
                Appearance
              </p>

              <p
                className="mt-1 text-[10px]"
                style={{
                  color: "var(--text-muted)",
                }}
              >
                Select your visual environment
              </p>
            </div>

            {/* Theme options */}
            <div className="space-y-1">
              {themes.map((item) => {
                const active = theme === item.name;

                return (
                  <button
                    key={item.name}
                    type="button"
                    role="menuitem"
                    aria-current={active ? "true" : undefined}
                    onClick={() => {
                      setTheme(item.name);
                      setOpen(false);
                    }}
                    className="group flex w-full items-center gap-3 border px-3 py-3 text-left transition-all duration-700 hover:-translate-y-0.5"
                    style={{
                      borderColor: active
                        ? "color-mix(in srgb, var(--accent) 45%, var(--border))"
                        : "transparent",

                      background: active
                        ? "var(--surface-hover)"
                        : "transparent",
                    }}
                  >
                    {/* Theme preview */}
                    <span
                      className="relative h-8 w-8 shrink-0 overflow-hidden border"
                      style={{
                        borderColor: "var(--border)",
                        backgroundColor: item.color,
                      }}
                    >
                      <span
                        className="absolute bottom-0 left-0 h-1/2 w-full"
                        style={{
                          background: "var(--background)",
                          opacity: 0.85,
                        }}
                      />
                    </span>

                    {/* Theme information */}
                    <span className="min-w-0 flex-1">
                      <span
                        className="block text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors duration-700"
                        style={{
                          color: active
                            ? "var(--text-primary)"
                            : "var(--text-secondary)",
                        }}
                      >
                        {item.label}
                      </span>

                      <span
                        className="mt-1 block text-[9px] transition-colors duration-700"
                        style={{
                          color: "var(--text-muted)",
                        }}
                      >
                        {item.description}
                      </span>
                    </span>

                    {/* Active indicator */}
                    {active && (
                      <Check
                        size={15}
                        className="shrink-0"
                        style={{
                          color: "var(--accent)",
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Footer */}
            <div
              className="mt-3 border-t px-3 pt-3"
              style={{
                borderColor: "var(--border)",
              }}
            >
              <p
                className="text-[8px] uppercase tracking-[0.25em]"
                style={{
                  color: "var(--text-faint)",
                }}
              >
                Lumina Theme System
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}