export function Hero() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 text-center">
      <h1 className="text-5xl font-bold tracking-tight text-text-strong)] md:text-6xl">
        Hi, I'm{' '}
        <span className="text-accent">Gianni</span>
      </h1>
      <p className="mt-6 text-lg text-text max-w-xl mx-auto">
        Full-stack developer building clean, performant web applications.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <a
          href="#projects"
          className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-hovertransition-colors"
        >
          View projects
        </a>
        <a
          href="#contact"
          className="rounded-lg border border-border-strong px-6 py-3 text-sm font-medium text-text-strong hover:border-accent hover:text-accent transition-colors"
        >
          Contact me
        </a>
      </div>
    </section>
  )
}
