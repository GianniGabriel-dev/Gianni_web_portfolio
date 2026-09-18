export interface ProjectSection {
  src: string;
  alt?: string;
}

export interface Project {
  /** Must match a key under `projects.items` in both src/i18n/en.ts and src/i18n/es.ts */
  id: string;
  image?: string;
  hoverImage?: string;
  sections?: ProjectSection[];
  tags: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "project-one",
    image: "/projects/project1/logo.png",
    hoverImage: "/projects/project1/main.gif",
    sections: [
      { src: "/projects/project1/erd.png" },
      { src: "/projects/project1/auth.gif" },
    ],
    tags: ["Express.js", "React", "TypeScript","PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/GianniGabriel-dev/PingUp",
    demo: "https://pingup-social.vercel.app/",
  },
  {
    id: "project-two",
    image: "/projects/project2/logo.png",
    hoverImage: "/projects/project2/main.gif",
    tags: ["Next.js","React", "TypeScript", "Tailwind CSS"],
    demo: "https://cerrajerocasi24h.com/",
  },
];
