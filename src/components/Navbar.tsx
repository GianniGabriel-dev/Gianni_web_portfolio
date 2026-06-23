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

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center" onClick={closeMenu}>
          <p className="flex items-center text-text font-bold text-2xl tracking-wide">
            <span className="text-accent text-2xl transform inline-block select-none mr-0.5">
              {"{"}
            </span>
            <span className="text-text group-hover:text-accent transition-colors duration-200">
              G
            </span>
            <span className="text-accent text-2xl transform inline-block select-none ml-0.5">
              {"}"}
            </span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm text-text">
          <li>
            <a href="#about" className="hover:text-accent transition-colors">
              {t.nav.about}
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-accent transition-colors">
              {t.nav.projects}
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-accent transition-colors">
              {t.nav.contact}
            </a>
          </li>
        </ul>

        {/* Right side - Always visible */}
        <div className="flex items-center gap-2">
          <LanguageToggleButton />
          <AnimatedThemeToggleButton type="circular" />

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden border-t border-border bg-bg/95 backdrop-blur overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ul className="flex flex-col gap-2 px-6 py-4 text-sm text-text">
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.05 }}
              >
                <a
                  href="#about"
                  className="block py-2 hover:text-accent transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenu();
                    setTimeout(() => {
                      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                  }}
                >
                  {t.nav.about}
                </a>
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <a
                  href="#projects"
                  className="block py-2 hover:text-accent transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenu();
                    setTimeout(() => {
                      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                  }}
                >
                  {t.nav.projects}
                </a>
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                <a
                  href="#contact"
                  className="block py-2 hover:text-accent transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenu();
                    setTimeout(() => {
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                  }}
                >
                  {t.nav.contact}
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
