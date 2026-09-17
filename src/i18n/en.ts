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
    bio: "Full-stack (TypeScript) developer specializing in backend with Express.js. Experienced in React and Next.js. Exploring cloud and DevOps.",
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
          "Full-stack social media platform inspired by Twitter/X with AI integrations for sentiment analysis and translation of posts, infinite scroll, media handling, typical social interactions like likes, comments and follows, and a notification system.",
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
    email: "clondireanug@gmail.com",
    linkedin: "LinkedIn",
    form: {
      name: "Your name",
      email: "Your email",
      message: "Your message",
      sending: "Sending...",
      submit: "Send message",
      nameRequired: "Name is required.",
      emailRequired: "Email is required.",
      emailInvalid: "Please enter a valid email.",
      messageRequired: "Message is required.",
      success: "Message sent! I'll get back to you soon.",
      error: "Something went wrong. Please try again later.",
    },
  },
  experience: {
    title: "Experience",
    items: [
      {
        role: "Frontend Web Developer & SEO Analyst",
        company: "Cerrajerocasi24h",
        period: "March 2, 2026 - June 5, 2026",
        description: "During my professional internship, I migrated the website from WordPress to Next.js and Tailwind CSS, improving page load speed and overall performance by 60%, while also optimizing its technical structure and local SEO. These improvements contributed to a 94% increase in impressions and a 31% increase in organic clicks on the main page.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind"],
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

export default en;
