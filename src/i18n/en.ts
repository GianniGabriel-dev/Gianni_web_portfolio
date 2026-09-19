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
    role: "Full-Stack Developer",
    location: "Currently based in Alicante, Spain",
    bio: "Full-stack (TypeScript) developer specializing in backend with Express.js. Experienced in React and Next.js. Exploring cloud and DevOps.",
    viewCv: "View CV",
    downloadCv: "Download CV",
    cvLink:"./Gianni_Gabriel_Clondireanu_CV_EN.pdf",
    cta_projects: "View projects",
    cta_contact: "Contact me",
    cta_resume: "Download Resume",
  },
about: {
  title: "About Me",

  p1: "I'm a full-stack developer specialized in the modern JavaScript and TypeScript ecosystem, with over 3 years of self-taught experience building projects.",

  p2: "I mainly work with technologies like Node.js, React, and Next.js, building complete and scalable web applications.",

  p3: "My main focus and passion lie in backend development. I enjoy understanding the internal architecture of applications, optimizing performance, and building robust APIs.",

  p4: "I am currently expanding my knowledge in Cloud and DevOps, aiming to keep growing as a full-stack developer with a strong backend orientation.",

  p5: "Outside of coding, I stay active studying Japanese and exploring advancements in AI. In my free time, I also enjoy gaming and working out.",

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
    viewDemo: "View website",
    viewMore: "View more",
    // Keyed by Project.id from src/lib/projects.ts — add one entry per project.
    // `description` is the short blurb always shown on the card.
    // `details` are the longer paragraphs shown in the project dialog.
    items: {
      "project-one": {
        title: "PingUp",
        description:
          "FullStack social media platform inspired by Twitter/X with AI integrations for sentiment analysis and automatic translation, infinite scroll, multimedia content, and social interactions.",
        details: [
          "SPA built with React + TypeScript on the frontend and Express.js + Prisma + PostgreSQL on the backend. Implements JWT and Google OAuth authentication, cursor-based pagination, TanStack Query for caching and infinite scrolling, and request validation with Zod and Express Validator.",
          "Features include post creation with image/video support through Cloudinary, likes, comments, follows, reposts, notifications, user search with debounce, and optimistic UI updates. The feed supports chronological, following-only, and sentiment-filtered views.",
          "Integrates Google Cloud Natural Language for automatic sentiment analysis and Google Cloud Translation for multilingual content. Translations are cached in the database to avoid repeated API requests, while unsupported languages are translated to English before sentiment analysis.",
        ],
        sections: [
          { title: "Entity-Relationship Model" },
          { title: "Authentication Process" },
        ],
      },

      "project-two": {
        title: "Cerrajerocasi24h",
        description:
          "Website for a locksmith business, developed during my internship with Next.js and TypeScript, focused on customer acquisition, local SEO, and dynamic content tailored to different cities.",
        details: [
          "Migrated and developed the website from WordPress to Next.js (React) + TypeScript, using Tailwind CSS and reusable components to build a landing page focused on customer acquisition.",
          "Implemented a local SEO strategy through dedicated pages for different cities in the Vega Baja area, with city-specific metadata, headings, Schema Markup, and localized content.",
          "The pages use dynamic data such as city maps, estimated locksmith arrival times, service areas, and location-specific text. Elements such as FAQs are also adapted to provide relevant content for each city.",
          "Implemented internal links between the different city pages to improve navigation and internal linking structure, alongside optimizations focused on performance and user experience.",
        ],
      },
    } as Record<
      string,
      {
        title: string;
        description: string;
        details?: string[];
        sections?: { title: string }[];
      }
    >,
  },
  contact: {
    title: "Get in touch",
    bio: "Open to new opportunities — reach out anytime.",
    email: "clondireanug@gmail.com",
    emailCopied: "Email copied to clipboard",
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
        description:
          "During my internship, I independently managed the development and migration of the website from WordPress to Next.js and Tailwind CSS, improving loading speed and overall performance by 60%, while also optimizing its technical structure and local SEO. These improvements contributed to a 94% increase in impressions and a 31% increase in organic clicks on the main page. I communicated directly with the client to understand their needs, propose improvements, and adapt the design and functionality to their preferences.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind", "SEO"],
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
