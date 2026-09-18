import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedThemeToggleButton } from "./animated-theme-toggle-button";
import { LanguageToggleButton } from "./LanguageToggleButton";
import { useLanguage } from "../context/LanguageContext";

export function Navbar() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#tech-stack", label: t.techStack.title },
    { href: "#experience", label: t.nav.experience },
    { href: "#education", label: t.nav.education },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/70 backdrop-blur-xl supports-[backdrop-filter]:bg-bg/50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" className="group flex items-center" onClick={closeMenu}>
          <p className="flex items-center text-text font-bold text-2xl tracking-tight">
            <span className="text-accent text-2xl transform inline-block select-none mr-0.5">
              {"{"}
            </span>
            <span className="text-text group-hover:text-accent transition-colors duration-300">
              G
            </span>
            <span className="text-accent text-2xl transform inline-block select-none ml-0.5">
              {"}"}
            </span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-1 text-sm text-text-muted">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative px-3 py-2 rounded-lg hover:text-accent transition-colors duration-300 hover:bg-accent-subtle"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-1.5">
          <LanguageToggleButton />
          <AnimatedThemeToggleButton type="circular" />

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-accent-subtle hover:text-accent transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.25 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.25 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden border-t border-border/60 bg-bg/95 backdrop-blur-xl overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="flex flex-col gap-0.5 px-6 py-3 text-sm text-text-muted">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    className="block py-2.5 px-3 rounded-lg hover:text-accent hover:bg-accent-subtle transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      closeMenu();
                      setTimeout(() => {
                        document
                          .getElementById(link.href.slice(1))
                          ?.scrollIntoView({ behavior: "smooth" });
                      }, 300);
                    }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
