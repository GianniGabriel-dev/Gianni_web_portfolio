import { useLanguage } from "../context/LanguageContext"

export function Hero() {
  const { t } = useLanguage()
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 text-center">
      <h1 className="text-5xl font-bold tracking-tight text-text-strong md:text-6xl">
        {t.hero.greeting}{' '}
        <span className="text-accent">Gianni</span>
      </h1>
      <p className="mt-6 text-lg text-text max-w-xl mx-auto">
        {t.hero.bio}
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <a
          href="#projects"
          className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
        >
          {t.hero.cta_projects}
        </a>
        <a
          href="#contact"
          className="rounded-lg border border-border-strong px-6 py-3 text-sm font-medium text-text-strong hover:border-accent hover:text-accent transition-colors"
        >
          {t.hero.cta_contact}
        </a>
      </div>
    </section>
  )
}
