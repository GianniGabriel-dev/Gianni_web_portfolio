import { createContext, useContext, useState } from "react"
import { detectLang, translations } from "../i18n"
import type { Lang, Translations } from "../i18n"

interface LanguageContextValue {
  lang: Lang
  t: Translations
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectLang)

  const toggleLang = () => {
    const next: Lang = lang === "en" ? "es" : "en"
    localStorage.setItem("lang", next)
    setLang(next)
  }

  return (
    <LanguageContext value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider")
  return ctx
}
