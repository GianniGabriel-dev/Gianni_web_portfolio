import { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
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
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold text-text-strong mb-12">{t.projects.title}</h2>

        {projects.length === 0 ? (
          <p className="text-text-muted">{t.projects.empty}</p>
        ) : (
          <div className="flex flex-col gap-8">
            {projects.map((project) => {
              const copy = t.projects.items[project.id];
              return (
                <div
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-card transition-all hover:border-accent/50 hover:shadow-md md:flex-row"
                >
                  {project.image && (
                    <div className="relative w-full shrink-0 overflow-hidden md:w-99">
                      <img
                        src={project.image}
                        alt={copy?.title ?? project.id}
                        className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                      />
                      {project.images && (
                        <img
                          src={project.images[0]}
                          alt=""
                          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        />
                      )}
                      <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                  )}

                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="text-xl font-semibold text-text-strong">
                      {copy?.title ?? project.id}
                    </h3>
                    <p className="text-sm leading-relaxed text-text">
                      {copy?.description}
                    </p>
                    <Tags tags={project.tags} />

                    <div className="mt-auto flex items-center gap-3 pt-4">
                      {project.github && (
                        <Button variant="outline" size="sm" asChild onClick={(e) => e.stopPropagation()}>
                          <a href={project.github} target="_blank" rel="noreferrer">
                            <SiGithub size={14} />
                            {t.projects.viewCode}
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button size="sm" asChild onClick={(e) => e.stopPropagation()}>
                          <a href={project.demo} target="_blank" rel="noreferrer">
                            <ExternalLink size={14} />
                            {t.projects.viewDemo}
                          </a>
                        </Button>
                      )}
                      <button
                        type="button"
                        onClick={() => setActiveProject(project)}
                        className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                      >
                        {t.projects.viewMore}
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Dialog
        open={activeProject !== null}
        onOpenChange={(open) => !open && setActiveProject(null)}
      >
        <DialogContent className="sm:max-w-2xl">
          {activeProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">
                  {activeCopy?.title ?? activeProject.id}
                </DialogTitle>
                <DialogDescription>{activeCopy?.description}</DialogDescription>
              </DialogHeader>

              {activeProject.image && (
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={activeProject.image}
                    alt={activeCopy?.title ?? activeProject.id}
                    className="w-full"
                  />
                </div>
              )}

              <div className="space-y-4 text-sm leading-relaxed text-text">
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
