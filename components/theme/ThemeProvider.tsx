"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
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

const themeListeners = new Set<() => void>();

function notifyThemeChange() {
  for (const listener of themeListeners) {
    listener();
  }
}

function subscribeToTheme(callback: () => void) {
  themeListeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    themeListeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function getClientThemeSnapshot(): ThemeName {
  if (typeof window === "undefined") return "signal";
  try {
    const savedTheme = window.localStorage.getItem(STORAGE_KEY);
    return isValidTheme(savedTheme) ? savedTheme : "signal";
  } catch {
    return "signal";
  }
}

function getServerThemeSnapshot(): ThemeName {
  return "signal";
}

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getClientThemeSnapshot,
    getServerThemeSnapshot
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const setTheme = useCallback((nextTheme: ThemeName) => {
    const root = document.documentElement;

    root.classList.add("is-theme-changing");

    try {
      window.localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch {
      // Ignore storage write errors (e.g. private mode quota)
    }

    notifyThemeChange();

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