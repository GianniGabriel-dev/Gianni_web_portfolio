import { useEffect, useRef, useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { useLanguage } from "../context/LanguageContext";
import { projects, type MediaVideo, type Project, type ProjectSection } from "../lib/projects";
import { cn } from "../lib/utils";
import { ScrollReveal } from "./ScrollReveal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

function DialogPreviewVideo({ preview, label }: { preview: MediaVideo; label?: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative mt-2 aspect-video overflow-hidden rounded-xl">
      {!loaded && <Skeleton className="absolute inset-0 z-10 rounded-xl" />}
      <video
        src={preview.src}
        poster={preview.poster}
        autoPlay
        loop
        muted
        playsInline
        aria-label={label}
        onLoadedData={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}

function DialogSectionMedia({ section, label }: { section: ProjectSection; label?: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative aspect-video overflow-hidden rounded-xl border border-border">
      {!loaded && <Skeleton className="absolute inset-0 z-10 rounded-none" />}
      {section.video ? (
        <video
          src={section.video.src}
          poster={section.video.poster}
          autoPlay
          loop
          muted
          playsInline
          aria-label={section.alt ?? label}
          onLoadedData={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          className={cn(
            "h-full w-full object-cover transition-opacity duration-500",
            loaded ? "opacity-100" : "opacity-0",
          )}
        />
      ) : (
        <img
          src={section.image}
          alt={section.alt ?? label ?? ""}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          className={cn(
            "h-full w-full object-cover transition-opacity duration-500",
            loaded ? "opacity-100" : "opacity-0",
          )}
        />
      )}
    </div>
  );
}

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
  const [loadedCards, setLoadedCards] = useState<Record<string, boolean>>({});
  const activeCopy = activeProject ? t.projects.items[activeProject.id] : undefined;
  const previewRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (connection?.saveData) return;

    const posters = new Set<string>();
    const videos = new Set<string>();
    for (const project of projects) {
      if (project.preview) {
        posters.add(project.preview.poster);
        videos.add(project.preview.src);
      }
      for (const section of project.sections ?? []) {
        if (section.video) {
          posters.add(section.video.poster);
          videos.add(section.video.src);
        } else if (section.image) {
          posters.add(section.image);
        }
      }
    }

    const nodes: HTMLElement[] = [];
    let cancelled = false;

    const preload = () => {
      if (cancelled) return;
      posters.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
      videos.forEach((src) => {
        const video = document.createElement("video");
        video.preload = "auto";
        video.muted = true;
        video.src = src;
        video.setAttribute("aria-hidden", "true");
        video.tabIndex = -1;
        video.style.cssText = "position:fixed;left:-9999px;width:0;height:0;opacity:0;pointer-events:none";
        video.addEventListener("canplaythrough", () => video.remove(), { once: true });
        document.body.appendChild(video);
        nodes.push(video);
      });
    };

    // Esperar a que la página termine de cargar y a que el navegador esté idle
    const start = () => {
      const requestIdle = (window as unknown as {
        requestIdleCallback?: (cb: () => void, opts?: { timeout?: number }) => number;
      }).requestIdleCallback;
      if (requestIdle) requestIdle(preload, { timeout: 4000 });
      else window.setTimeout(preload, 1500);
    };

    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener("load", start);
      nodes.forEach((node) => node.remove());
    };
  }, []);

  const playPreview = (id: string) => {
    const video = previewRefs.current[id];
    if (video) void video.play().catch(() => {});
  };

  const stopPreview = (id: string) => {
    const video = previewRefs.current[id];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const openProject = (project: Project) => {
    stopPreview(project.id);
    setActiveProject(project);
  };

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-text-strong mb-12">{t.projects.title}</h2>
        </ScrollReveal>

        {projects.length === 0 ? (
          <p className="text-text-muted">{t.projects.empty}</p>
        ) : (
          <div className="flex flex-col gap-8">
            {projects.map((project, idx) => {
              const copy = t.projects.items[project.id];
              return (
                <ScrollReveal key={project.id} delay={idx * 0.08}>
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => openProject(project)}
                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openProject(project); } }}
                    onPointerEnter={() => playPreview(project.id)}
                    onPointerLeave={() => stopPreview(project.id)}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-card transition-all hover:border-accent/50 hover:shadow-md md:flex-row"
                  >
                    {project.image && (
                      <div className="relative aspect-[550/336] w-full shrink-0 overflow-hidden md:aspect-auto md:w-99">
                        {!loadedCards[project.id] && (
                          <Skeleton className="absolute inset-0 z-10 rounded-none" />
                        )}
                        <img
                          src={project.image}
                          alt={copy?.title ?? project.id}
                          loading="lazy"
                          decoding="async"
                          onLoad={() => setLoadedCards((prev) => ({ ...prev, [project.id]: true }))}
                          onError={() => setLoadedCards((prev) => ({ ...prev, [project.id]: true }))}
                          className={cn(
                            "h-full w-full object-cover transition-opacity duration-500",
                            loadedCards[project.id] ? "opacity-100 group-hover:opacity-0" : "opacity-0",
                          )}
                        />
                        {project.preview && (
                          <video
                            ref={(el) => { previewRefs.current[project.id] = el; }}
                            src={project.preview.src}
                            poster={project.preview.poster}
                            muted
                            loop
                            playsInline
                            preload="none"
                            aria-hidden="true"
                            tabIndex={-1}
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
                          onClick={() => openProject(project)}
                          className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                        >
                          {t.projects.viewMore}
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        )}
      </div>

      <Dialog
        open={activeProject !== null}
        onOpenChange={(open) => !open && setActiveProject(null)}
      >
        <DialogContent className="sm:max-w-4xl" header={
          <DialogHeader>
            <DialogTitle className="text-2xl font-black text-text-strong">
              {activeCopy?.title ?? activeProject?.id}
            </DialogTitle>
          </DialogHeader>
        } footer={
          activeProject && (activeProject.github || activeProject.demo) ? (
            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
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
            </div>
          ) : undefined
        }>
          {activeProject && (
            <div className="space-y-4">

              {activeProject.preview && (
                <DialogPreviewVideo
                  key={activeProject.id}
                  preview={activeProject.preview}
                  label={activeCopy?.title ?? activeProject.id}
                />
              )}

              <div className="space-y-4  text-sm leading-relaxed text-text">
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

              {activeProject.sections?.map((section, i) => {
                const translated = activeCopy?.sections?.[i];
                return (
                  <div key={i} className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                      {translated?.title ?? ""}
                    </p>
                    <DialogSectionMedia
                      key={`${activeProject.id}-${i}`}
                      section={section}
                      label={translated?.title}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
