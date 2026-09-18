import { GraduationCap } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

export function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="bg-bg-subtle py-20">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-text-strong mb-12">
            {t.education.title}
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {t.education.items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div
                className="group rounded-xl border border-border bg-bg-card p-6 transition-all hover:border-accent/50 hover:shadow-md"
              >
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-accent-subtle">
                  <GraduationCap size={20} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-text-strong">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {item.institution}
                </p>
                <p className="mt-1 text-xs text-text-muted">{item.period}</p>
                <p className="mt-3 text-sm leading-relaxed text-text">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
