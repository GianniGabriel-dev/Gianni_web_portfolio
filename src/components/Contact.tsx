import { useLanguage } from "../context/LanguageContext"

export function Contact() {
  const { t } = useLanguage()
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20 text-center">
      <h2 className="text-3xl font-bold text-text-strong">{t.contact.title}</h2>
      <p className="mt-4 text-text">
        {t.contact.bio}
      </p>
      <a
        href="mailto:hello@example.com"
        className="mt-8 inline-block rounded-lg bg-accent px-8 py-3 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
      >
        {t.contact.cta}
      </a>
    </section>
  )
}
