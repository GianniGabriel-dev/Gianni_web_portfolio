import { Download, Eye, LocateFixed } from "lucide-react";
import { LinkedInIcon } from "../assets/linkedinIcon.tsx";
import { useLanguage } from "../context/LanguageContext";
import { TypingEffect } from "./TypingEffect";
import { SiGithub } from "@icons-pack/react-simple-icons";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="mx-auto flex max-md:flex-col max-md:py-12 items-center gap-6 max-w-5xl px-6 py-16 "
    >
      {/* Profile picture */}
      <div className="relative mx-auto w-fit">
        <div className="mx-auto size-60 max-md:size-50 rounded-full overflow-hidden ring-4 ring-accent/30 ring-offset-4 ring-offset-color-bg">
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
        </div>
        <div className="absolute -bottom-2 -right-2 bg-accent rounded-full px-3 py-1 flex items-center gap-1.5 text-white text-xs font-medium ring-4 ring-color-bg">
          <span className="size-2 bg-green-400 rounded-full animate-pulse"></span>
          Open to work
        </div>
      </div>
      <div className="flex flex-col  gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-text-strong md:text-5xl">
            {t.hero.greeting}{" "}
            <TypingEffect
              text="Gianni Gabriel"
              speed={80}
              className="text-accent"
            />
          </h1>
          <p className="mt-3 text-2xl font-semibold text-accent md:text-3xl">
            <TypingEffect text={t.hero.role} speed={60} />
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm text-text-muted">
            <LocateFixed size={20} className="text-accent" />
            {t.hero.location}
          </p>
        </div>
        <div className="flex flex-col max-md:flex-col-reverse gap-3 w-full">
          <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
            {/* CV view */}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg flex items-center justify-center gap-2 bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
            >
              <Eye className="size-5" />
              Ver CV
            </a>

            {/* CV */}
            <a
              href="/cv.pdf"
              download
              className="rounded-lg flex items-center justify-center gap-2 bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
            >
              <Download className="size-5" />
              Descargar CV
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/GianniGabriel-dev"
              target="_blank"
              className="rounded-lg flex items-center justify-center gap-2 bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
            >
              <SiGithub className="size-5" />
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/giannicl/"
              target="_blank"
              className="rounded-lg flex items-center justify-center gap-2 bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
            >
              <LinkedInIcon size="20px" />
              LinkedIn
            </a>
          </div>

          {/* CTA secundaria */}
          <a
            href="#contact"
            className="w-full bg-bg-subtle rounded-lg flex items-center justify-center gap-2 border border-border-strong px-4 py-2 text-sm font-medium text-text-strong hover:border-accent hover:text-accent transition-colors"
          >
            {t.hero.cta_contact}
          </a>
        </div>
      </div>
    </section>
  );
}
