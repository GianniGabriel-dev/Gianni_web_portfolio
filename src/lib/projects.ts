export interface Project {
  /** Must match a key under `projects.items` in both src/i18n/en.ts and src/i18n/es.ts */
  id: string;
  image?: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "project-one",
    image: "/projects/project-one.png",
    tags: ["React", "TypeScript"],
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
