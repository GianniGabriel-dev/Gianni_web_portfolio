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
        "flex items-center justify-center rounded-full border border-border-strong bg-bg-subtle cursor-pointer transition-colors hover:border-accent hover:text-accent text-text-strong text-xs font-semibold",
        className
      )}
      style={{ width: 44, height: 44 }}
    >
      {lang === "en" ? "ES" : "EN"}
    </button>
  )
}
