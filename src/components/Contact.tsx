import { useState } from "react";
import { Copy, Check, Mail, Send } from "lucide-react";
import { LinkedInIcon } from "../assets/linkedinIcon.tsx";
import { useLanguage } from "../context/LanguageContext";
import { Button } from "./ui/button";
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
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-black text-text-strong">
          {t.contact.title}
        </h2>
        <p className="mt-3 text-text">{t.contact.bio}</p>

        <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <Mail size={24} className="text-accent" />
            <span className=" text-text">{t.contact.email}</span>
            <button
              type="button"
              onClick={copyEmail}
              className="rounded-md p-1.5 text-text-muted transition-colors hover:bg-accent-subtle hover:text-accent"
              aria-label="Copy email"
            >
              {copied ? (
                <Check size={20} className="text-green-500" />
              ) : (
                <Copy size={20} />
              )}
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className=" text-accent">
              <LinkedInIcon fill-color="currentColor" size="24px" />
            </span>
            <a
              href="https://www.linkedin.com/in/giannicl/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-4"
          noValidate
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <input
                type="text"
                name="name"
                placeholder={t.contact.form.name}
                className="rounded-lg border border-border bg-bg-card px-4 py-2.5 text-sm text-text-strong outline-none transition-colors placeholder:text-text-muted focus:border-accent"
              />
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name}</p>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <input
                type="email"
                name="email"
                placeholder={t.contact.form.email}
                className="rounded-lg border border-border bg-bg-card px-4 py-2.5 text-sm text-text-strong outline-none transition-colors placeholder:text-text-muted focus:border-accent"
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <textarea
              name="message"
              rows={5}
              placeholder={t.contact.form.message}
              className="resize-none rounded-lg border border-border bg-bg-card px-4 py-2.5 text-sm text-text-strong outline-none transition-colors placeholder:text-text-muted focus:border-accent"
            />
            {errors.message && (
              <p className="text-xs text-red-500">{errors.message}</p>
            )}
          </div>
          <Button type="submit" disabled={sending} className="self-start">
            <Send size={14} />
            {sending ? t.contact.form.sending : t.contact.form.submit}
          </Button>
        </form>
      </div>
    </section>
  );
}
