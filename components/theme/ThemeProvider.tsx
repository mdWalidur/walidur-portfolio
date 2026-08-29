"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type ThemeName = "signal" | "paper" | "midnight";

type ThemeContextValue = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
};

const STORAGE_KEY = "walidur-portfolio-theme";

const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined
);

const validThemes: ThemeName[] = [
  "signal",
  "paper",
  "midnight",
];

function isValidTheme(value: string | null): value is ThemeName {
  return value !== null && validThemes.includes(value as ThemeName);
}

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setThemeState] = useState<ThemeName>("signal");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(STORAGE_KEY);

    if (isValidTheme(savedTheme)) {
      setThemeState(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const setTheme = useCallback((nextTheme: ThemeName) => {
    const root = document.documentElement;

    root.classList.add("is-theme-changing");

    setThemeState(nextTheme);

    window.setTimeout(() => {
      root.classList.remove("is-theme-changing");
    }, 250);
  }, []);

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