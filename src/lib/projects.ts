export interface MediaVideo {
  src: string;
  poster: string;
}

export interface ProjectSection {
  image?: string;
  video?: MediaVideo;
  alt?: string;
}

export interface Project {
  /** Must match a key under `projects.items` in both src/i18n/en.ts and src/i18n/es.ts */
  id: string;
  image?: string;
  preview?: MediaVideo;
  sections?: ProjectSection[];
  tags: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "project-one",
    image: "/projects/project1/logo.png",
    preview: {
      src: "/projects/project1/main.mp4",
      poster: "/projects/project1/main.jpg",
    },
    sections: [
      { image: "/projects/project1/erd.png" },
      {
        video: {
          src: "/projects/project1/auth.mp4",
          poster: "/projects/project1/auth.jpg",
        },
      },
    ],
    tags: ["Express.js", "React", "TypeScript","PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/GianniGabriel-dev/PingUp",
    demo: "https://pingup-social.vercel.app/",
  },
  {
    id: "project-two",
    image: "/projects/project2/logo.png",
    preview: {
      src: "/projects/project2/main.mp4",
      poster: "/projects/project2/main.jpg",
    },
    tags: ["Next.js","React", "TypeScript", "Tailwind CSS"],
    demo: "https://cerrajerocasi24h.com/",
  },
];
