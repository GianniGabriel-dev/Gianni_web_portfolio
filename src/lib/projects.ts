export interface Project {
  /** Must match a key under `projects.items` in both src/i18n/en.ts and src/i18n/es.ts */
  id: string;
  image?: string;
  hoverImage?: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "project-one",
    image: "/projects/project1/logo.png",
    hoverImage: "/projects/project1/main.gif",
    tags: ["Express.js", "React", "TypeScript","PostgreSQL"],
    github: "https://github.com/yourname/project-one",
    demo: "https://project-one.example.com",
  },
  {
    id: "project-two",
    image: "/projects/project-two.png",
    tags: ["React", "TypeScript"],
    github: "https://github.com/yourname/project-one",
    demo: "https://project-one.example.com",
  },
  {
    id: "project-three",
    image: "/projects/project-three.png",
    tags: ["React", "TypeScript"],
    github: "https://github.com/yourname/project-one",
    demo: "https://project-one.example.com",
  },
];
