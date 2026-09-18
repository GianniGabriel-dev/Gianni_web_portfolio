import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { TechStack } from "./components/TechStack";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Toaster } from "sonner";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Toaster position="bottom-right" richColors />
        <div className="min-h-screen bg-color-bg text-color-text">
          <Navbar />
          <main className="dot-grid">
            <Hero />
            <About />
            <Projects />
            <TechStack />
            <Education />
            <Experience />
            <Contact />
          </main>
          <footer className="border-t border-border/60 py-8 text-center text-xs text-text-muted tracking-wide">
            &copy; {new Date().getFullYear()} Gianni Gabriel
          </footer>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
