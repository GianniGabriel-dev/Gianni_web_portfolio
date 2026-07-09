const es = {
  nav: {
    about: "Sobre mí",
    projects: "Proyectos",
    contact: "Contacto",
  },
  hero: {
    greeting: "Hola, soy",
    role: "Desarrollador web Full-Stack",
    bio: "Desarrollador full-stack (TypeScript) especializado en backend con Express.js. Experiencia en React y Next.js. Explorando cloud y DevOps.",
    cta_projects: "Ver proyectos",
    cta_contact: "Contáctame",
    cta_resume: "Descargar currículum",
  },
  about: {
    title: "Sobre mí",
    p1: "Soy un desarrollador full stack con formación en DAW y más de 3 años de experiencia aprendiendo y construyendo proyectos por mi cuenta.",
    p2: "Empecé con una base más tradicional, pero me he especializado en el ecosistema moderno de JavaScript / TypeScript, trabajando con tecnologías como Node.js, React y Next.js.",
    p3: "Me interesa especialmente el backend — disfruto entendiendo cómo funcionan las aplicaciones por dentro.",
    p4: "Actualmente estoy enfocado en seguir creciendo en backend y avanzar hacia cloud y DevOps, que es la dirección en la que quiero desarrollar mi carrera.",
    p5: "Cuando no estoy programando o aprendiendo, me gusta jugar videojuegos, pasar tiempo con familia/amigos, hacer ejercicio, y ver películas y anime 🎥.",
    skillsTitle: "Tecnologías",
  },
  techStack: {
    title: "Mi Stack",
    filterLabel: "Filtrar por categoría:",
    all: "Todos",
    frontend: "Frontend",
    backend: "Backend",
    database: "Base de Datos",
    tools: "Herramientas",
    devops: "DevOps",
  },
  projects: {
    title: "Proyectos",
    empty: "Proyectos próximamente.",
    viewCode: "Ver código",
    viewDemo: "Ver demo",
    // Con clave según Project.id de src/lib/projects.ts — agrega una entrada por proyecto.
    // `description` es el resumen corto que siempre se ve en la tarjeta.
    // `details` son los párrafos más largos que se muestran en el diálogo del proyecto.
    items: {} as Record<string, { title: string; description: string; details?: string[] }>,
  },
  contact: {
    title: "Hablemos",
    bio: "Abierto a nuevas oportunidades — escríbeme cuando quieras.",
    cta: "Saludar",
  },
} as const

export default es
