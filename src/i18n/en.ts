const en = {
  nav: {
    about: "About",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I'm",
    role: "Full-Stack web Developer",
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
    // Keyed by Project.id from src/lib/projects.ts — add one entry per project.
    // `description` is the short blurb always shown on the card.
    // `details` are the longer paragraphs shown in the project dialog.
    items: {} as Record<string, { title: string; description: string; details?: string[] }>,
  },
  contact: {
    title: "Get in touch",
    bio: "Open to new opportunities — reach out anytime.",
    cta: "Say hello",
  },
} as const

export default en
