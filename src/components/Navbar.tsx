import { useTheme } from '../context/ThemeContext'

export function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <span className="text-lg font-semibold text-text-strong">
          Portfolio
        </span>

        <ul className="flex gap-6 text-sm text-text">
          <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
          <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
        </ul>

        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="rounded-md border border-border p-2 text-text hover:border-accent hover:text-accent transition-colors"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  )
}
