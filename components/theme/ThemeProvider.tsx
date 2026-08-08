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

const THEMES: ThemeName[] = [
  "obsidian",
  "spectral",
  "cream",
  "chocolate",
  "graphite",
];

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setThemeState] =
    useState<ThemeName>("obsidian");

  useEffect(() => {
    const savedTheme =
      localStorage.getItem(STORAGE_KEY) as ThemeName | null;

    const initialTheme =
      savedTheme && THEMES.includes(savedTheme)
        ? savedTheme
        : "obsidian";

    setThemeState(initialTheme);

    document.documentElement.setAttribute(
      "data-theme",
      initialTheme
    );
  }, []);

  const setTheme = (newTheme: ThemeName) => {
    if (!THEMES.includes(newTheme)) {
      return;
    }

    setThemeState(newTheme);

    document.documentElement.setAttribute(
      "data-theme",
      newTheme
    );

    localStorage.setItem(
      STORAGE_KEY,
      newTheme
    );
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