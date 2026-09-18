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
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Toaster position="bottom-right" richColors />
        <ScrollToTop />
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
          <footer className="border-t border-border py-6 text-center text-sm text-text-muted">
            © {new Date().getFullYear()} Gianni Gabriel
          </footer>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
