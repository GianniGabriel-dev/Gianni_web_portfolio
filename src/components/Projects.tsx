import { useLanguage } from "../context/LanguageContext"

const PROJECTS = [
  { title: 'Project one', tags: ['React', 'TypeScript'] },
  { title: 'Project two', tags: ['Node', 'PostgreSQL'] },
  { title: 'Project three', tags: ['Next.js', 'Tailwind'] },
]

export function Projects() {
  const { t } = useLanguage()
  return (
    <section id="projects" className="bg-bg-subtle py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold text-text-strong mb-10">{t.projects.title}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map(p => (
            <article
              key={p.title}
              className="rounded-xl border border-border bg-bg-card p-6"
              style={{ boxShadow: 'var(--shadow-sm)' }}
            >
              <h3 className="text-lg font-semibold text-text-strong">{p.title}</h3>
              <p className="mt-2 text-sm text-text">{t.projects.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(tag => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent-subtle px-3 py-1 text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
