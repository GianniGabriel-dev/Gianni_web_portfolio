import { useState, useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";
import { stack } from "../lib/techStack";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";
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
    <section id="tech-stack" className="section-spacing mx-auto max-w-6xl px-6">
      <ScrollReveal>
        <h2 className="text-3xl font-bold text-text-strong tracking-tight">{t.techStack.title}</h2>
      </ScrollReveal>

      {/* Ticker */}
      <ScrollReveal delay={0.1}>
        <div className="w-full overflow-hidden border-y border-border/60 py-4 mt-10 mb-10">
          <div className="ticker-track">
            {[...stack, ...stack].map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div key={`${tech.name}-${idx}`} className="ticker-item">
                  <Icon className="w-4 h-4 text-accent/70 shrink-0" />
                  <span className="text-[11px] font-semibold text-text-muted uppercase tracking-widest">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {allTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              aria-pressed={filter === type}
              aria-label={`${getFilterLabel(type)} (${counts[type]})`}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                filter === type
                  ? "bg-accent text-white border-accent shadow-sm"
                  : "bg-transparent text-text-muted border-border hover:border-accent hover:text-accent"
              }`}
            >
              <span className="tracking-wide">{getFilterLabel(type)}</span>
              <span className={`text-xs ${filter === type ? "text-white/70" : "text-text-muted/60"}`}>
                {counts[type]}
              </span>
            </button>
          ))}
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
          {filteredStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                className="flex items-center bg-bg-subtle/50 gap-3 px-4 py-3 rounded-xl border border-border/60 hover:border-accent/40 hover:bg-bg-card transition-all duration-300 group cursor-default"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <Icon className="w-4 h-4 text-accent/70 shrink-0 group-hover:text-accent transition-colors duration-300" />
                <span className="text-sm font-medium text-text group-hover:text-text-strong transition-colors duration-300">{tech.name}</span>
              </motion.div>
            );
          })}
        </div>
      </ScrollReveal>
    </section>
  );
}
