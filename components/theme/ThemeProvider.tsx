"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type ThemeName =
  | "obsidian"
  | "spectral"
  | "cream"
  | "chocolate"
  | "graphite";

type ThemeContextType = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const STORAGE_KEY = "walidur-portfolio-theme";

const themes: Record<
  ThemeName,
  {
    background: string;
    foreground: string;
  }
> = {
  obsidian: {
    background: "#080808",
    foreground: "#ffffff",
  },

  spectral: {
    background: "#050505",
    foreground: "#f8fafc",
  },

  cream: {
    background: "#f4f0e8",
    foreground: "#171512",
  },

  chocolate: {
    background: "#120d0a",
    foreground: "#f5ede4",
  },

  graphite: {
    background: "#0d1014",
    foreground: "#edf2f7",
  },
};

function applyTheme(newTheme: ThemeName) {
  document.documentElement.dataset.theme = newTheme;
  localStorage.setItem(STORAGE_KEY, newTheme);
}

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setThemeState] =
    useState<ThemeName>("obsidian");

  useEffect(() => {
    const savedTheme = localStorage.getItem(
      STORAGE_KEY
    ) as ThemeName | null;

    const validThemes: ThemeName[] = [
      "obsidian",
      "spectral",
      "cream",
      "chocolate",
      "graphite",
    ];

    if (
      savedTheme &&
      validThemes.includes(savedTheme)
    ) {
      setThemeState(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme("obsidian");
    }
  }, []);

  const setTheme = (newTheme: ThemeName) => {
    if (newTheme === theme) return;

    const root = document.documentElement;

    const changeTheme = () => {
      setThemeState(newTheme);
      applyTheme(newTheme);
    };

    /*
     * Use the View Transitions API when available.
     * This creates a controlled crossfade between
     * the old and new visual states.
     */
    if (
      "startViewTransition" in document &&
      typeof document.startViewTransition === "function"
    ) {
      document.startViewTransition(() => {
        changeTheme();
      });

      return;
    }

    /*
     * Fallback for browsers without View Transitions.
     */
    root.classList.add("theme-changing");

    changeTheme();

    window.setTimeout(() => {
      root.classList.remove("theme-changing");
    }, 360);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }

  return context;
}