export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20 text-center">
      <h2 className="text-3xl font-bold text-color-text-strong">Get in touch</h2>
      <p className="mt-4 text-color-text">
        Open to new opportunities — reach out anytime.
      </p>
      <a
        href="mailto:hello@example.com"
        className="mt-8 inline-block rounded-lg bg-color-accent px-8 py-3 text-sm font-medium text-white hover:bg-color-accent-hover transition-colors"
      >
        Say hello
      </a>
    </section>
  )
}
