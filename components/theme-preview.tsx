"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
  isThemeId,
  type ThemeId,
} from "@/lib/theme";

type ThemePreviewContextValue = {
  theme: ThemeId;
  setTheme: (id: ThemeId) => void;
  isShowcase: boolean;
};

const ThemePreviewContext = createContext<ThemePreviewContextValue | null>(null);

function applyThemeAttr(id: ThemeId) {
  document.documentElement.setAttribute("data-theme", id);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, id);
  } catch {
    /* ignore quota / private mode */
  }
}

export function ThemePreviewProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(DEFAULT_THEME);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (isThemeId(current)) {
      setThemeState(current);
      return;
    }
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (isThemeId(stored)) {
        applyThemeAttr(stored);
        setThemeState(stored);
        return;
      }
    } catch {
      /* ignore */
    }
    applyThemeAttr(DEFAULT_THEME);
  }, []);

  const setTheme = useCallback((id: ThemeId) => {
    setThemeState(id);
    applyThemeAttr(id);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      isShowcase: theme === "showcase",
    }),
    [theme, setTheme],
  );

  return (
    <ThemePreviewContext.Provider value={value}>{children}</ThemePreviewContext.Provider>
  );
}

export function useThemePreview() {
  const ctx = useContext(ThemePreviewContext);
  if (!ctx) {
    return {
      theme: DEFAULT_THEME as ThemeId,
      setTheme: (_id: ThemeId) => {},
      isShowcase: false,
    };
  }
  return ctx;
}
