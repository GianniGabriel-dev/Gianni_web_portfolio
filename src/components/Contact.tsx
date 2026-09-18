import { useState } from "react";
import { Copy, Check, Mail, Send } from "lucide-react";
import { LinkedInIcon } from "../assets/linkedinIcon.tsx";
import { useLanguage } from "../context/LanguageContext";
import { Button } from "./ui/button";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";
import { toast } from "sonner";

export function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const copyEmail = async () => {
    await navigator.clipboard.writeText(t.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validate = (form: FormData) => {
    const newErrors: typeof errors = {};

    const name = form.get("name") as string;
    const email = form.get("email") as string;
    const message = form.get("message") as string;

    if (!name.trim()) {
      newErrors.name = t.contact.form.nameRequired;
    }

    if (!email.trim()) {
      newErrors.email = t.contact.form.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = t.contact.form.emailInvalid;
    }

    if (!message.trim()) {
      newErrors.message = t.contact.form.messageRequired;
    }

    setErrors(newErrors);

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.currentTarget;
    const form = new FormData(formElement);

    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
      if (validationErrors.name) {
        (formElement.elements.namedItem("name") as HTMLInputElement).value =
          form.get("name") as string;
      }

      if (validationErrors.email) {
        (formElement.elements.namedItem("email") as HTMLInputElement).value =
          form.get("email") as string;
      }

      if (validationErrors.message) {
        (
          formElement.elements.namedItem("message") as HTMLTextAreaElement
        ).value = form.get("message") as string;
      }

      return;
    }

    setSending(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_ACCESS_KEY,
          name: form.get("name"),
          email: form.get("email"),
          message: form.get("message"),
        }),
      });

      const data = await res.json();

      if (data.success) {
        console.log("Form submitted successfully:", data);
        toast.success(t.contact.form.success);

        formElement.reset();
        setErrors({});
      } else {
        console.error("Form submission error:", data);
        toast.error(t.contact.form.error);
      }
    } catch {
      toast.error(t.contact.form.error);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-spacing">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-text-strong tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-text">{t.contact.bio}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-accent/70" />
              <span className="text-sm text-text">{t.contact.email}</span>
              <motion.button
                type="button"
                onClick={copyEmail}
                className="rounded-lg p-1.5 text-text-muted transition-colors duration-300 hover:bg-accent-subtle hover:text-accent"
                aria-label="Copy email"
                whileTap={{ scale: 0.9 }}
              >
                {copied ? (
                  <Check size={16} className="text-green-500" />
                ) : (
                  <Copy size={16} />
                )}
              </motion.button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent/70">
                <LinkedInIcon fill-color="currentColor" size="18px" />
              </span>
              <a
                href="https://www.linkedin.com/in/giannicl/"
                target="_blank"
                rel="noreferrer"
                className="text-sm inline-flex items-center transition-colors duration-300 hover:text-accent"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-4"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className="sr-only">{t.contact.form.name}</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder={t.contact.form.name}
                  className="rounded-xl border border-border/60 bg-bg-card px-4 py-3 text-sm text-text-strong outline-none transition-all duration-300 placeholder:text-text-muted focus:border-accent focus:ring-2 focus:ring-accent/10"
                />
                {errors.name && (
                  <p className="text-xs text-red-500">{errors.name}</p>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className="sr-only">{t.contact.form.email}</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder={t.contact.form.email}
                  className="rounded-xl border border-border/60 bg-bg-card px-4 py-3 text-sm text-text-strong outline-none transition-all duration-300 placeholder:text-text-muted focus:border-accent focus:ring-2 focus:ring-accent/10"
                />
                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="sr-only">{t.contact.form.message}</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder={t.contact.form.message}
                className="resize-none rounded-xl border border-border/60 bg-bg-card px-4 py-3 text-sm text-text-strong outline-none transition-all duration-300 placeholder:text-text-muted focus:border-accent focus:ring-2 focus:ring-accent/10"
              />
              {errors.message && (
                <p className="text-xs text-red-500">{errors.message}</p>
              )}
            </div>
            <Button type="submit" disabled={sending} className="self-start rounded-xl">
              <Send size={14} />
              {sending ? t.contact.form.sending : t.contact.form.submit}
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
