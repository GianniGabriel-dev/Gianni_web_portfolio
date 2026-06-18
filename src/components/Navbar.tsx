import { Link } from "react-router-dom";
import { AnimatedThemeToggleButton } from "./animated-theme-toggle-button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center">
          <p className="flex items-center text-text font-bold text-2xl tracking-wide">
            {/* Llave izquierda: más grande, estirada verticalmente y con un leve margen */}
            <span className="text-accent text-2xl  transform inline-block select-none mr-0.5">
              {"{"}
            </span>

            {/* La letra central */}
            <span className="text-text group-hover:text-accent transition-colors duration-200">
              G
            </span>

            {/* Llave derecha: más grande, estirada verticalmente y con un leve margen */}
            <span className="text-accent text-2xl  transform inline-block select-none ml-0.5">
              {"}"}
            </span>
          </p>
        </Link>

        <ul className="flex gap-6 text-sm text-text">
          <li>
            <Link to="#about" className="hover:text-accent transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link
              to="#projects"
              className="hover:text-accent transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link to="#contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        <AnimatedThemeToggleButton type="circular" />
      </nav>
    </header>
  );
}
