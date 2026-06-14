"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { type Language } from "@/lib/translations";

const VALID_LANGS: Language[] = ["en", "fil", "zh", "ja", "ko", "ar", "es"];

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("fpa-lang") as Language | null;
    if (stored && VALID_LANGS.includes(stored)) {
      setLangState(stored);
    }
  }, []);

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem("fpa-lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
