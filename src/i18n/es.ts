const es = {
  nav: {
    about: "Sobre mí",
    experience: "Experiencia",
    education: "Educación",
    projects: "Proyectos",
    contact: "Contacto",
  },
  hero: {
    greeting: "Hola, soy",
    role: "Desarrollador Full-Stack",
    location: "Actualmente ubicado en Alicante, España",
    bio: "Desarrollador full-stack (TypeScript) especializado en backend con Express.js. Experiencia en React y Next.js. Explorando cloud y DevOps.",
    viewCv: "Ver CV",
    downloadCv: "Descargar CV",
    cvLink:"/Gianni_Gabriel_Clondireanu_CV.pdf",
    cta_projects: "Ver proyectos",
    cta_contact: "Contáctame",
    cta_resume: "Descargar currículum",
  },
  about: {
    title: "Sobre mí",

    p1: "Soy desarrollador full-stack especializado en el ecosistema moderno de JavaScript y TypeScript, con más de 3 años de experiencia creando proyectos de forma autodidacta.",

    p2: "Trabajo principalmente con tecnologías como Node.js, React y Next.js, construyendo aplicaciones web completas y escalables.",

    p3: "Mi fuerte y mayor interés está en el desarrollo backend. Disfruto entendiendo la arquitectura interna de las aplicaciones, optimizando su rendimiento y construyendo APIs sólidas.",

    p4: "Actualmente estoy ampliando mis conocimientos en Cloud y DevOps, con el objetivo de seguir creciendo como desarrollador full-stack con una sólida orientación al backend.",

    p5: "Fuera del desarrollo, me mantengo activo estudiando japonés y explorando los avances en IA. En mi tiempo libre también disfruto de los videojuegos y el entrenamiento.",

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
    viewDemo: "Ver Página",
    viewMore: "Ver más",
    // Con clave según Project.id de src/lib/projects.ts — agrega una entrada por proyecto.
    // `description` es el resumen corto que siempre se ve en la tarjeta.
    // `details` son los párrafos más largos que se muestran en el diálogo del proyecto.
    items: {
      "project-one": {
        title: "PingUp",
        description:
          "Red social full-stack inspirada en Twitter/X con integración de IA para análisis de sentimiento y traducción automática, scroll infinito, contenido multimedia e interacciones sociales.",
        details: [
          "SPA desarrollada con React + TypeScript en el frontend y Express.js + Prisma + PostgreSQL en el backend. Implementa autenticación mediante JWT y Google OAuth, paginación basada en cursor, TanStack Query para la caché y el scroll infinito, y validación de peticiones con Zod y Express Validator.",
          "Incluye creación de publicaciones con imágenes y vídeos mediante Cloudinary, likes, comentarios, follows, reposts, notificaciones y búsqueda de usuarios con debounce, además de actualizaciones optimistas de la interfaz. El feed permite visualizar publicaciones cronológicamente, únicamente de usuarios seguidos o filtradas por sentimiento.",
          "Integra Google Cloud Natural Language para el análisis automático de sentimiento y Google Cloud Translation para contenido multilingüe. Las traducciones se almacenan en caché en la base de datos para evitar peticiones repetidas a la API, mientras que los idiomas no compatibles se traducen al inglés antes de realizar el análisis de sentimiento.",
        ],
        sections: [
          { title: "Modelo Entidad-Relación" },
          { title: "Proceso de autenticación" },
        ],
      },

      "project-two": {
        title: "Cerrajerocasi24h",
        description:
          "Web para un negocio de cerrajería, desarrollada durante mis prácticas con Next.js y TypeScript, enfocada en captación de clientes, SEO local y contenido dinámico adaptado a diferentes ciudades.",
        details: [
          "Migración y desarrollo de la web desde WordPress a Next.js (React) + TypeScript, utilizando Tailwind CSS y componentes reutilizables para construir una landing orientada a la captación de clientes.",
          "Implementación de una estrategia de SEO local mediante páginas específicas para distintas ciudades de la Vega Baja, con metadatos, headings, Schema Markup y contenido adaptado a cada localidad.",
          "Las páginas utilizan datos dinámicos como mapas de la ciudad, tiempos estimados de llegada, zonas de servicio y textos específicos de cada localidad. También se adaptan elementos como las preguntas frecuentes para ofrecer contenido relevante para cada ciudad.",
          "Implementación de enlaces internos entre las diferentes páginas de localidades para mejorar la navegación y la estructura de enlazado interno, junto con optimizaciones orientadas al rendimiento y a la experiencia de usuario.",
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
    title: "Hablemos",
    bio: "Abierto a nuevas oportunidades — escríbeme cuando quieras.",
    email: "clondireanug@gmail.com",
    emailCopied: "Correo copiado al portapapeles",
    linkedin: "LinkedIn",
    form: {
      name: "Tu nombre",
      email: "Tu correo",
      message: "Tu mensaje",
      sending: "Enviando...",
      submit: "Enviar mensaje",
      nameRequired: "El nombre es obligatorio.",
      emailRequired: "El correo es obligatorio.",
      emailInvalid: "Ingresa un correo válido.",
      messageRequired: "El mensaje es obligatorio.",
      success: "¡Mensaje enviado! Te responderé pronto.",
      error: "Algo salió mal. Inténtalo de nuevo más tarde.",
    },
  },
  experience: {
    title: "Experiencia",
    items: [
      {
        role: "Desarrollador web frontend y analista de SEO",
        company: "Cerrajerocasi24h",
        period: "2 marzo 2026 - 5 junio 2026",
        description:
          "Durante mis prácticas profesionales gestioné de forma autónoma el desarrollo y la migración del sitio web de WordPress a Next.js y Tailwind CSS, mejorando la velocidad de carga y el rendimiento general en un 60%, además de optimizar la estructura técnica y el SEO local. Estas mejoras contribuyeron a aumentar un 94% las impresiones y un 31% los clics orgánicos de la página principal. Mantuve comunicación directa con el cliente para comprender sus necesidades, proponer mejoras y adaptar el diseño y las funcionalidades a sus preferencias.",
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
    title: "Educación",
    items: [
      {
        degree: "Técnico Superior en Desarrollo de Aplicaciones Web",
        institution: "IES Torrevigía",
        period: "2024 - 2026",
        description:
          "En este ciclo formativo adquirí conocimientos avanzados de desarrollo web, incluyendo tecnologías frontend y backend, así como buenas prácticas de ingeniería de software.",
      },
      {
        degree: "Especialización en Cloud Computing",
        institution: "IES Mare Nostrum",
        period: "Actualmente cursando - 2027",
        description:
          "En esta especialización me estoy formando en tecnologías cloud, arquitectura en la nube, estrategias de despliegue y prácticas de DevOps para desarrollar aplicaciones escalables y eficientes.",
      },
    ] as {
      degree: string;
      institution: string;
      period: string;
      description: string;
    }[],
  },
} as const;

export default es;
