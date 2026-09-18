import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

export function About() {
  const { t } = useLanguage();
  const paragraphs = [t.about.p1, t.about.p2, t.about.p3, t.about.p4, t.about.p5];

  return (
    <section id="about-me" className="section-spacing mx-auto max-w-6xl px-6">
      <ScrollReveal>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-text-strong tracking-tight">{t.about.title}</h2>
          <div className="mt-8 space-y-5 text-base text-text leading-relaxed">
            {paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
