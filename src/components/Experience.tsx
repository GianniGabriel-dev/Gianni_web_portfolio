import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-text-strong mb-12">
            {t.experience.title}
          </h2>
        </ScrollReveal>

        <div className="relative space-y-0">
          <div className="absolute left-4.75 top-0 bottom-0 w-px bg-border" />

          {t.experience.items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="relative flex gap-6 pb-10 last:pb-0">
                <div className="relative z-10 mt-1.5 flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-bg-card">
                  <div className="size-2.5 rounded-full bg-accent" />
                </div>

                <div className="flex-1 rounded-xl border border-border bg-bg-card p-5 transition-colors hover:border-accent/50">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold text-text-strong">
                      {item.role}
                    </h3>
                    <span className="text-sm text-text-muted">{item.period}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {item.company}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text">
                    {item.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-accent-subtle px-3 py-1 text-xs font-medium text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
