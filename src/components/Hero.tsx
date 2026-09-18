import { Download, Eye, LocateFixed } from "lucide-react";
import { LinkedInIcon } from "../assets/linkedinIcon.tsx";
import { useLanguage } from "../context/LanguageContext";
import { TypingEffect } from "./TypingEffect";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="mx-auto flex max-md:flex-col max-md:py-16 items-center gap-12 max-w-6xl px-6 py-24"
    >
      {/* Profile picture */}
      <ScrollReveal direction="left" className="shrink-0">
        <div className="relative mx-auto w-fit">
          <motion.div
            className="mx-auto size-56 max-md:size-44 rounded-full overflow-hidden ring-2 ring-accent/20 ring-offset-4 ring-offset-color-bg"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/profileb.JPG"
              alt="Gianni Gabriel"
              className="size-full object-cover"
              onError={(e) => {
                const t = e.currentTarget;
                t.style.display = "none";
                t.parentElement!.classList.add("profile-placeholder");
              }}
            />
          </motion.div>
          <motion.div
            className="absolute -bottom-1 -right-1 bg-accent rounded-full px-3 py-1 flex items-center gap-1.5 text-white text-xs font-medium ring-4 ring-color-bg"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="size-2 bg-green-400 rounded-full animate-pulse"></span>
            Open to work
          </motion.div>
        </div>
      </ScrollReveal>

      <div className="flex flex-col gap-6">
        <ScrollReveal direction="right">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-text-strong md:text-5xl leading-tight">
              {t.hero.greeting}{" "}
              <TypingEffect
                text="Gianni Gabriel"
                speed={80}
                className="text-accent"
              />
            </h1>
            <p className="mt-3 text-xl font-semibold text-accent md:text-2xl tracking-tight">
              <TypingEffect text={t.hero.role} speed={60} />
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-text-muted">
              <LocateFixed size={16} className="text-accent/70" />
              {t.hero.location}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.15}>
          <div className="flex flex-col max-md:flex-col-reverse gap-3 w-full">
            <div className="grid grid-cols-2 gap-2.5 max-md:grid-cols-1">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl flex items-center justify-center gap-2 bg-accent px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-hover transition-all duration-300 hover:shadow-md"
              >
                <Eye className="size-4" />
                {t.hero.viewCv}
              </a>

              <a
                href="/cv.pdf"
                download
                className="rounded-xl flex items-center justify-center gap-2 bg-accent px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-hover transition-all duration-300 hover:shadow-md"
              >
                <Download className="size-4" />
                {t.hero.downloadCv}
              </a>

              <a
                href="https://github.com/GianniGabriel-dev"
                target="_blank"
                className="rounded-xl flex items-center justify-center gap-2 border border-border bg-bg-card px-4 py-2.5 text-sm font-medium text-text-strong hover:border-accent hover:text-accent transition-all duration-300 hover:shadow-sm"
              >
                <SiGithub className="size-4" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/giannicl/"
                target="_blank"
                className="rounded-xl flex items-center justify-center gap-2 border border-border bg-bg-card px-4 py-2.5 text-sm font-medium text-text-strong hover:border-accent hover:text-accent transition-all duration-300 hover:shadow-sm"
              >
                <LinkedInIcon size="16px" />
                LinkedIn
              </a>
            </div>

            <a
              href="#contact"
              className="w-full rounded-xl flex items-center justify-center gap-2 border border-border px-4 py-2.5 text-sm font-medium text-text-muted hover:border-accent hover:text-accent transition-all duration-300"
            >
              {t.hero.cta_contact}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
