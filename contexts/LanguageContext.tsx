"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { type Language } from "@/lib/translations";
import { isFilipinoPath } from "@/lib/localeRoutes";

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

function setLang(l: Language) {
  localStorage.setItem(STORAGE_KEY, l);
  listeners.forEach((listener) => listener());
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const stored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  // /fil/... pages are Filipino on the server too, so Google indexes them in Filipino.
  const onFilipinoPage = isFilipinoPath(usePathname());
  const lang = onFilipinoPage ? "fil" : stored;

  // Keep Filipino when the visitor moves on to pages that only have one URL.
  useEffect(() => {
    if (onFilipinoPage) setLang("fil");
  }, [onFilipinoPage]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
