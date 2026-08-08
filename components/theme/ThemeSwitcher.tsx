"use client";

import { useState } from "react";
import { Check, Palette } from "lucide-react";
import {
  useTheme,
  type ThemeName,
} from "./ThemeProvider";

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
      {/* Trigger */}

      <button
        type="button"
        aria-label="Change website theme"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="
          relative
          z-50
          flex
          h-10
          w-10
          items-center
          justify-center
          border
          bg-[var(--surface-soft)]
          text-[var(--text-secondary)]
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-[var(--accent)]
          hover:text-[var(--accent)]
        "
        style={{
          borderColor: "var(--border)",
        }}
      >
        <Palette
          size={16}
          strokeWidth={1.5}
        />
      </button>

      {/* Backdrop */}

      {open && (
        <button
          type="button"
          aria-label="Close theme menu"
          onClick={() => setOpen(false)}
          className="
            fixed
            inset-0
            z-40
            cursor-default
            bg-transparent
          "
        />
      )}

      {/* Menu */}

      {open && (
        <div
          className="
            absolute
            right-0
            top-12
            z-50
            w-[290px]
            overflow-hidden
            border
            p-2
            shadow-[0_30px_100px_var(--shadow-color)]
            backdrop-blur-2xl
          "
          style={{
            background: "var(--header-background)",
            borderColor: "var(--border)",
          }}
        >
          {/* Header */}

          <div
            className="border-b px-3 py-3"
            style={{
              borderColor: "var(--border)",
            }}
          >
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.3em]
              "
              style={{
                color: "var(--accent)",
              }}
            >
              Appearance
            </p>

            <p
              className="
                mt-1
                text-[10px]
              "
              style={{
                color: "var(--text-muted)",
              }}
            >
              Select your visual environment
            </p>
          </div>

          {/* Themes */}

          <div className="mt-2 space-y-1">
            {themes.map((item) => {
              const active =
                theme === item.name;

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => {
                    setTheme(item.name);
                    setOpen(false);
                  }}
                  className="
                    flex
                    w-full
                    items-center
                    gap-3
                    border
                    px-3
                    py-3
                    text-left
                    transition-all
                    duration-300
                  "
                  style={{
                    borderColor: active
                      ? "var(--accent)"
                      : "transparent",

                    background: active
                      ? "var(--surface)"
                      : "transparent",
                  }}
                >
                  {/* Color */}

                  <span
                    className="
                      h-8
                      w-8
                      shrink-0
                      rounded-full
                      border
                    "
                    style={{
                      backgroundColor: item.color,
                      borderColor:
                        "var(--border)",
                    }}
                  />

                  {/* Text */}

                  <span className="min-w-0 flex-1">
                    <span
                      className="
                        block
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                      "
                      style={{
                        color: active
                          ? "var(--text-primary)"
                          : "var(--text-secondary)",
                      }}
                    >
                      {item.label}
                    </span>

                    <span
                      className="
                        mt-1
                        block
                        text-[9px]
                      "
                      style={{
                        color:
                          "var(--text-muted)",
                      }}
                    >
                      {item.description}
                    </span>
                  </span>

                  {/* Check */}

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
        </div>
      )}
    </div>
  );
}