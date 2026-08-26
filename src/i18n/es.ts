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
    viewMore: "Ver más",
    // Con clave según Project.id de src/lib/projects.ts — agrega una entrada por proyecto.
    // `description` es el resumen corto que siempre se ve en la tarjeta.
    // `details` son los párrafos más largos que se muestran en el diálogo del proyecto.
    items: {
      "project-one": {
        title: "PingUp",
        description:
          "Plataforma de redes sociales full-stack inspirada en Twitter/X con integraciones de IA para análisis de sentimiento y traducción de posts, scroll infinito y manejo de multimedia.",
        details: [
          "SPA construida con React + TypeScript en el frontend y Express.js + Prisma + PostgreSQL en el backend. Implementa autenticación JWT, paginación basada en cursores y TanStack Query para caché e scroll infinito.",
          "Incluye creación de posts con soporte de imagen/video, recorte de imágenes del lado del cliente, likes, comentarios, follows y un sistema de notificaciones. Integra Google Cloud Translation API con caché de traducciones en base de datos y Google NLP para filtrado de sentimiento con IA en el feed principal.",
          "Los perfiles de usuario permiten avatar y banner editables subidos a Cloudinary. El feed ofrece vistas cronológicas, solo seguidos y filtradas por sentimiento. Validación frontal con Zod, backend con Express Validator.",
        ],
      },
      "project-two": {
        title: "Proyecto dos",
        description: "Descripción corta del proyecto dos.",
        details: [
          "Descripción más larga del proyecto dos.",
          "Detalles adicionales sobre el proyecto dos.",
        ],
      },
      "project-three": {
        title: "Proyecto tres",
        description: "Descripción corta del proyecto tres.",
        details: [
          "Descripción más larga del proyecto tres.",
          "Detalles adicionales sobre el proyecto tres.",
        ],
      },
    } as Record<
      string,
      { title: string; description: string; details?: string[] }
    >,
  },
  contact: {
    title: "Hablemos",
    bio: "Abierto a nuevas oportunidades — escríbeme cuando quieras.",
    cta: "Saludar",
  },
} as const;

export default es;
