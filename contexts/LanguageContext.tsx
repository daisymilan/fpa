"use client";

import { createContext, useContext, useSyncExternalStore, type ReactNode } from "react";
import { type Language } from "@/lib/translations";

const VALID_LANGS: Language[] = ["en", "fil", "zh", "ja", "ko", "ar", "es"];
const STORAGE_KEY = "fpa-lang";
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function getSnapshot(): Language {
  const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
  return stored && VALID_LANGS.includes(stored) ? stored : "en";
}

const getServerSnapshot = (): Language => "en";

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLang = (l: Language) => {
    localStorage.setItem(STORAGE_KEY, l);
    listeners.forEach((listener) => listener());
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
