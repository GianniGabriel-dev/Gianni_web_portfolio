import { useLanguage } from "../context/LanguageContext"
import { cn } from "../lib/utils"

export function LanguageToggleButton({ className }: { className?: string }) {
  const { lang, toggleLang } = useLanguage()

  return (
    <button
      onClick={toggleLang}
      aria-label="Toggle language"
      type="button"
      className={cn(
        "flex items-center justify-center rounded-xl border border-border/60 bg-bg-subtle cursor-pointer transition-all duration-300 hover:border-accent/40 hover:text-accent text-text-strong text-xs font-semibold",
        className
      )}
      style={{ width: 40, height: 40 }}
    >
      {lang === "en" ? "ES" : "EN"}
    </button>
  )
}
