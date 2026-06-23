import { Download, MailIcon } from "lucide-react";
import { LinkedInIcon } from "../assets/linkedinIcon.tsx";
import { useLanguage } from "../context/LanguageContext";
import { TypingEffect } from "./TypingEffect";
import { SiGithub } from "@icons-pack/react-simple-icons";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="mx-auto flex max-md:flex-col max-md:py-12 items-center gap-6 max-w-5xl px-6 py-24 "
    >
      {/* Profile picture */}
      <div className="relative mx-auto w-fit">
        <div className="mx-auto size-50 max-md:size-40 rounded-full overflow-hidden ring-4 ring-accent/30 ring-offset-4 ring-offset-color-bg">
          <img
            src="/profile.jpg"
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
          <h1 className="text-5xl font-bold tracking-tight text-text-strong md:text-6xl">
            {t.hero.greeting}{" "}
            <TypingEffect text="Gianni" speed={80} className="text-accent" />
          </h1>
          <p className="mt-3 text-3xl font-semibold text-accent md:text-3xl">
            <TypingEffect text={t.hero.role} speed={60} />
          </p>
        </div>
        <p className="text-lg text-text max-w-2xl">{t.hero.bio}</p>
        <div className="flex flex-col gap-3 w-full">
          <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
            <a
              href="https://github.com/GianniGabriel-dev"
              target="_blank"
              className="rounded-lg flex items-center justify-center gap-2 bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
            >
              <SiGithub className="size-5" />
              Github
            </a>
            <a
              href="mailto:tuemail@correo.com"
              target="_blank"
              className="rounded-lg flex items-center justify-center gap-2 bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
            >
              <MailIcon className="size-5" />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/giannicl/"
              target="_blank"
              className="rounded-lg flex items-center justify-center gap-2 bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
            >
              <LinkedInIcon size="20px" />
              LinkedIn
            </a>
            <a
              href="#projects"
              className="rounded-lg flex items-center justify-center gap-2 bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
            > 
              <Download className="size-5" />
              {t.hero.cta_resume}
            </a>
          </div>
          <a
            href="#contact"
            className="w-full rounded-lg flex items-center justify-center gap-2 border border-border-strong px-4 py-2 text-sm font-medium text-text-strong hover:border-accent hover:text-accent transition-colors"
          >
            {t.hero.cta_contact}
          </a>
        </div>
      </div>
    </section>
  );
}
