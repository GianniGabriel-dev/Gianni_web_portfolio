import { useLanguage } from "../context/LanguageContext";

const H = ({ children }: { children: React.ReactNode }) => (
  <span className="text-accent font-bold">
    {children}
  </span>
);

export function About() {
  const { t, lang } = useLanguage();

  const paragraphs =
    lang === "es" ? (
      <>
        <p>
          Soy un <H>desarrollador full stack</H> con formación en DAW y más de{" "}
          <H>3 años</H> de experiencia aprendiendo y construyendo proyectos por mi cuenta.
        </p>
        <p>
          Empecé con una base más tradicional, pero me he especializado en el ecosistema moderno de{" "}
          <H>JavaScript / TypeScript</H>, trabajando con tecnologías como{" "}
          <H>Node.js</H>, <H>React</H> y <H>Next.js</H>.
        </p>
        <p>
          Me interesa especialmente el <H>backend</H> — disfruto entendiendo cómo
          funcionan las aplicaciones por dentro.
        </p>
        <p>
          Actualmente estoy enfocado en seguir creciendo en <H>backend</H> y avanzar
          hacia <H>cloud</H> y <H>DevOps</H>, que es la dirección en la que quiero
          desarrollar mi carrera.
        </p>
        <p>
          Cuando no estoy programando o aprendiendo, me gusta jugar videojuegos, pasar
          tiempo con familia/amigos, hacer ejercicio, y ver películas y anime 🎥.
        </p>
      </>
    ) : (
      <>
        <p>
          I'm a <H>full stack developer</H> with training in web development and over{" "}
          <H>3 years</H> of self-taught experience building projects.
        </p>
        <p>
          I started with a more traditional foundation, but I've specialized in the modern{" "}
          <H>JavaScript / TypeScript</H> ecosystem, working with technologies like{" "}
          <H>Node.js</H>, <H>React</H> and <H>Next.js</H>.
        </p>
        <p>
          I'm especially interested in <H>backend</H> — I enjoy understanding how
          applications work from the inside.
        </p>
        <p>
          Currently I'm focused on continuing to grow in <H>backend</H> and moving
          towards <H>cloud</H> and <H>DevOps</H>, which is the direction I want to take
          my career.
        </p>
        <p>
          When I'm not coding or learning, I like to play videogames, spend time with
          family/friends, exercise, and watch movies and anime 🎥.
        </p>
      </>
    );

  return (
    <section id="about-me" className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-text-strong mb-8">{t.about.title}</h2>
        <div className="space-y-4 text-lg text-text leading-relaxed">{paragraphs}</div>
      </div>
    </section>
  );
}
