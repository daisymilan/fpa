"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const LANG_MAP: Record<string, string> = {
  en: "en",
  fil: "fil",
  zh: "zh-Hans",
  ja: "ja",
  ko: "ko",
  ar: "ar",
  es: "es",
};

export default function HtmlLangSync() {
  const { lang } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = LANG_MAP[lang] ?? "en";
  }, [lang]);

  return null;
}
