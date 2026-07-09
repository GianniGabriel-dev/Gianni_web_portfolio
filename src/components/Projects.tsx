import { ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { useLanguage } from "../context/LanguageContext";
import { projects } from "../lib/projects";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="bg-bg-subtle py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold text-text-strong mb-10">{t.projects.title}</h2>

        {projects.length === 0 ? (
          <p className="text-text-muted">{t.projects.empty}</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const copy = t.projects.items[project.id];
              return (
                <article
                  key={project.id}
                  className="flex flex-col overflow-hidden rounded-xl border border-border bg-bg-card"
                  style={{ boxShadow: "var(--shadow-sm)" }}
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt={copy?.title ?? project.id}
                      className="h-40 w-full object-cover"
                    />
                  )}

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold text-text-strong">
                      {copy?.title ?? project.id}
                    </h3>
                    <p className="mt-2 text-sm text-text">{copy?.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-accent-subtle px-3 py-1 text-xs font-medium text-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {(project.github || project.demo) && (
                      <div className="mt-auto flex gap-4 pt-4 text-sm font-medium">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-text hover:text-accent transition-colors"
                          >
                            <SiGithub size={16} />
                            {t.projects.viewCode}
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-text hover:text-accent transition-colors"
                          >
                            <ExternalLink size={16} />
                            {t.projects.viewDemo}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
