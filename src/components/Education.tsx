import { GraduationCap } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

export function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="section-spacing bg-bg-subtle/50">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-text-strong tracking-tight">
            {t.education.title}
          </h2>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 mt-10">
          {t.education.items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                className="group rounded-xl border border-border/60 bg-bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-sm"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-accent-subtle">
                  <GraduationCap size={18} className="text-accent" />
                </div>
                <h3 className="text-base font-semibold text-text-strong">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {item.institution}
                </p>
                <p className="mt-1 text-xs text-text-muted">{item.period}</p>
                <p className="mt-3 text-sm leading-relaxed text-text">
                  {item.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
