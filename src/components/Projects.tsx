import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { useLanguage } from "../context/LanguageContext";
import { projects, type Project } from "../lib/projects";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-accent-subtle px-3 py-1 text-xs font-medium text-accent"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const activeCopy = activeProject ? t.projects.items[activeProject.id] : undefined;

  return (
    <section id="projects" className="bg-bg-subtle py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold text-text-strong mb-10">{t.projects.title}</h2>

        {projects.length === 0 ? (
          <p className="text-text-muted">{t.projects.empty}</p>
        ) : (
          <div className="flex flex-col gap-6">
            {projects.map((project) => {
              const copy = t.projects.items[project.id];
              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="flex flex-col overflow-hidden rounded-xl border border-border bg-bg-card text-left transition-colors hover:border-accent md:flex-row"
                  style={{ boxShadow: "var(--shadow-sm)" }}
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt={copy?.title ?? project.id}
                      className="h-48 w-full shrink-0 object-cover md:h-auto md:w-72"
                    />
                  )}

                  <div className="flex flex-1 flex-col justify-center gap-3 p-6">
                    <h3 className="text-lg font-semibold text-text-strong">
                      {copy?.title ?? project.id}
                    </h3>
                    <p className="text-sm text-text">{copy?.description}</p>
                    <Tags tags={project.tags} />
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <Dialog
        open={activeProject !== null}
        onOpenChange={(open) => !open && setActiveProject(null)}
      >
        <DialogContent className="sm:max-w-lg">
          {activeProject && (
            <>
              <DialogHeader>
                <DialogTitle>{activeCopy?.title ?? activeProject.id}</DialogTitle>
                <DialogDescription>{activeCopy?.description}</DialogDescription>
              </DialogHeader>

              {activeProject.image && (
                <img
                  src={activeProject.image}
                  alt={activeCopy?.title ?? activeProject.id}
                  className="max-h-64 w-full rounded-lg object-cover"
                />
              )}

              <div className="space-y-3 text-sm leading-relaxed text-text">
                {(activeCopy?.details?.length
                  ? activeCopy.details
                  : activeCopy?.description
                    ? [activeCopy.description]
                    : []
                ).map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <Tags tags={activeProject.tags} />

              {(activeProject.github || activeProject.demo) && (
                <DialogFooter>
                  {activeProject.github && (
                    <Button variant="outline" asChild>
                      <a href={activeProject.github} target="_blank" rel="noreferrer">
                        <SiGithub size={16} />
                        {t.projects.viewCode}
                      </a>
                    </Button>
                  )}
                  {activeProject.demo && (
                    <Button asChild>
                      <a href={activeProject.demo} target="_blank" rel="noreferrer">
                        <ExternalLink size={16} />
                        {t.projects.viewDemo}
                      </a>
                    </Button>
                  )}
                </DialogFooter>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
