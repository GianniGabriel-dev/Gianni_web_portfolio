import en from "./en"
import es from "./es"

export type Lang = "en" | "es"
export type Translations = typeof en | typeof es

export const translations: Record<Lang, Translations> = { en, es }

export function detectLang(): Lang {
  const stored = localStorage.getItem("lang") as Lang | null
  if (stored === "en" || stored === "es") return stored
  return navigator.language.startsWith("es") ? "es" : "en"
}
