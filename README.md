# Portfolio — Gianni Gabriel

Sitio web personal de portafolio desarrollado con React, TypeScript y Vite.

## Descripción

Aplicación de una sola página que presenta mi perfil profesional como desarrollador web full-stack, incluyendo secciones de sobre mí, experiencia laboral, educación, stack tecnológico, proyectos y contacto.

## Tecnologías

- **Frontend:** React 19, TypeScript, Tailwind CSS
- **UI:** shadcn/ui, Radix UI, Lucide Icons
- **Animaciones:** Framer Motion
- **Build:** Vite 8
- **Otros:** React Router, React Compiler

## Características

- Tema claro/oscuro con persistencia en `localStorage`
- Soporte multilingüe (inglés/español)
- Diseño responsive
- Scroll suave entre secciones
- Formulario de contacto

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/portfolio.git

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Iniciar servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run lint` | Ejecutar linter |
| `npm run preview` | Previsualizar build |

## Estructura

```
src/
├── components/    # Componentes UI (Hero, About, Projects, etc.)
├── context/       # Contextos (tema, idioma)
├── i18n/          # Traducciones (en/es)
├── lib/           # Utilidades y datos
└── assets/        # Iconos y recursos estáticos
```

## Licencia

Proyecto personal — Gianni Gabriel
