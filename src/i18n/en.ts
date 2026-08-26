const en = {
  nav: {
    about: "About",
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I'm",
    role: "Full-Stack web Developer",
    location: "Currently based in Alicante, Spain",
    bio: "Full-stack developer (TypeScript) specializing in backend development with Express.js. Experience with React and Next.js. Exploring cloud and DevOps.",
    cta_projects: "View projects",
    cta_contact: "Contact me",
    cta_resume: "Download Resume",
  },
  about: {
    title: "About me",
    p1: "I'm a full stack developer with training in web development and over 3 years of self-taught experience building projects.",
    p2: "I started with a more traditional foundation, but I've specialized in the modern JavaScript / TypeScript ecosystem, working with technologies like Node.js, React and Next.js.",
    p3: "I'm especially interested in backend — I enjoy understanding how applications work from the inside.",
    p4: "Currently I'm focused on continuing to grow in backend and moving towards cloud and DevOps, which is the direction I want to take my career.",
    p5: "When I'm not coding or learning, I like to play videogames, spend time with family/friends, exercise, and watch movies and anime 🎥.",
    skillsTitle: "Technologies",
  },
  techStack: {
    title: "Tech Stack",
    filterLabel: "Filter by category:",
    all: "All",
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    tools: "Tools",
    devops: "DevOps",
  },
  projects: {
    title: "Projects",
    empty: "Projects coming soon.",
    viewCode: "View code",
    viewDemo: "Live demo",
    viewMore: "View more",
    // Keyed by Project.id from src/lib/projects.ts — add one entry per project.
    // `description` is the short blurb always shown on the card.
    // `details` are the longer paragraphs shown in the project dialog.
    items: {
      "project-one": {
        title: "PingUp",
        description:
          "Full-stack social media platform inspired by Twitter/X with AI integrations for sentiment analysis and translation of posts, infinite scroll, and media handling.",
        details: [
          "SPA built with React + TypeScript on the frontend and Express.js + Prisma + PostgreSQL on the backend. Implements JWT authentication, cursor-based pagination, and TanStack Query for caching and infinite scrolling.",
          "Features include post creation with image/video support, client-side image cropping, likes, comments, follows, and a notification system. Integrates Google Cloud Translation API with a database-backed translation cache and Google NLP for AI sentiment filtering on the main feed.",
          "User profiles support editable avatars and banners uploaded to Cloudinary. The feed system offers chronological, following-only, and sentiment-filtered views. Frontend validated with Zod, backend with Express Validator.",
        ],
      },
      "project-two": {
        title: "Project two",
        description: "Short description of project two.",
        details: [
          "Longer description of project two.",
          "Additional details about project two.",
        ],
      },
      "project-three": {
        title: "Project three",
        description: "Short description of project three.",
        details: [
          "Longer description of project three.",
          "Additional details about project three.",
        ],
      },
    } as Record<
      string,
      { title: string; description: string; details?: string[] }
    >,
  },
  contact: {
    title: "Get in touch",
    bio: "Open to new opportunities — reach out anytime.",
    cta: "Say hello",
  },
  experience: {
    title: "Experience",
    items: [
      {
        role: "Full-Stack Developer",
        company: "Company Name",
        period: "2023 - Present",
        description: "Description of your role and responsibilities goes here.",
        tags: ["React", "Node.js", "TypeScript"],
      },
      {
        role: "Frontend Developer",
        company: "Company Name",
        period: "2022 - 2023",
        description: "Description of your role and responsibilities goes here.",
        tags: ["React", "TypeScript", "Tailwind"],
      },
      {
        role: "Web Developer",
        company: "Company Name",
        period: "2021 - 2022",
        description: "Description of your role and responsibilities goes here.",
        tags: ["JavaScript", "HTML", "CSS"],
      },
    ] as {
      role: string;
      company: string;
      period: string;
      description: string;
      tags: string[];
    }[],
  },
  education: {
    title: "Education",
    items: [
      {
        degree: "Higher Vocational Training in Web Development",
        institution: "IES Torrevigía",
        period: "2024 - 2026",
        description:
          "In this higher vocational training program, I learned advanced web development skills, including both frontend and backend technologies, as well as best practices in software engineering.",
      },
      {
        degree: "Cloud Computing Specialization",
        institution: "IES Mare Nostrum",
        period: "Currently enrolled - 2027",
        description:
          "In this specialization, I am focusing on cloud computing technologies, learning about cloud architecture, deployment strategies, and DevOps practices to enhance my skills in building scalable and efficient applications.",
      },
    ] as {
      degree: string;
      institution: string;
      period: string;
      description: string;
    }[],
  },
} as const;

export default en
