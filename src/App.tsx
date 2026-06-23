import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-color-bg text-color-text">
          <Navbar />
          <main className="dot-grid">
            <Hero />
            <About />
            <Projects />
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
