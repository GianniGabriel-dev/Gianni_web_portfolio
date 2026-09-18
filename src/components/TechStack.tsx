import { useState, useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";
import { stack } from "../lib/techStack";
import "../styles/techStack.css";

type FilterType = "all" | "frontend" | "backend" | "database" | "tools" | "devops";

export function TechStack() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<FilterType>("all");

  const allTypes: FilterType[] = ["all", "frontend", "backend", "database", "tools", "devops"];

  const counts: Record<FilterType, number> = {
    all: stack.length,
    frontend: stack.filter((tech) => {
      const types = Array.isArray(tech.type) ? tech.type : [tech.type];
      return types.includes("frontend");
    }).length,
    backend: stack.filter((tech) => {
      const types = Array.isArray(tech.type) ? tech.type : [tech.type];
      return types.includes("backend");
    }).length,
    database: stack.filter((tech) => {
      const types = Array.isArray(tech.type) ? tech.type : [tech.type];
      return types.includes("database");
    }).length,
    tools: stack.filter((tech) => {
      const types = Array.isArray(tech.type) ? tech.type : [tech.type];
      return types.includes("tools");
    }).length,
    devops: stack.filter((tech) => {
      const types = Array.isArray(tech.type) ? tech.type : [tech.type];
      return types.includes("devops");
    }).length,
  };

  const filteredStack = useMemo(() => {
    if (filter === "all") return stack;
    return stack.filter((tech) => {
      const types = Array.isArray(tech.type) ? tech.type : [tech.type];
      return types.includes(filter);
    });
  }, [filter]);

  const getFilterLabel = (type: FilterType) => {
    const labels: Record<FilterType, string> = {
      all: t.techStack.all,
      frontend: t.techStack.frontend,
      backend: t.techStack.backend,
      database: t.techStack.database,
      tools: t.techStack.tools,
      devops: t.techStack.devops,
    };
    return labels[type];
  };

  return (
    <section id="tech-stack" className="w-full mx-auto max-w-5xl py-20 px-6">
      <h2 className="text-3xl font-bold text-text-strong mb-10">{t.techStack.title}</h2>


      <div className="mx-auto max-w-5xl">
              {/* Infinite Ticker — always all technologies */}
      <div className="w-full bg-bg-card overflow-hidden mb-12 border-y border-border py-3">
        <div className="ticker-track">
          {[...stack, ...stack].map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div key={`${tech.name}-${idx}`} className="ticker-item">
                <Icon className="w-4 h-4 text-accent shrink-0" />
                <span className="text-xs  font-bold text-text-strong uppercase tracking-widest">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {allTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              aria-pressed={filter === type}
              aria-label={`${getFilterLabel(type)} (${counts[type]})`}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                filter === type
                  ? "bg-accent-subtle text-accent border-accent"
                  : "bg-bg-subtle text-text border-border hover:border-accent"
              }`}
            >
              <span className="uppercase tracking-wide">{getFilterLabel(type)}</span>
              <span
                className={`text-xs ${
                  filter === type ? "text-bg-primary/70" : "text-text-muted"
                }`}
              >
                {counts[type]}
              </span>
            </button>
          ))}
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filteredStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="flex items-center bg-bg-subtle gap-3 px-4 py-3 rounded-lg border border-border hover:border-text-muted transition-all duration-200 group cursor-default"
              >
                <Icon className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm font-medium text-text">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
