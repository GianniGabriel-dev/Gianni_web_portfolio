import { useLanguage } from "../context/LanguageContext";

export function About() {
  const { t } = useLanguage();
  const paragraphs = [t.about.p1, t.about.p2, t.about.p3, t.about.p4, t.about.p5];

  return (
    <section id="about-me" className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-text-strong mb-8">{t.about.title}</h2>
        <div className="space-y-4 text-lg text-text leading-relaxed">
          {paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
