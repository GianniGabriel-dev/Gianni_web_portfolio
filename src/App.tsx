import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-color-bg text-color-text">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Contact />
        </main>
        <footer className="border-t border-border py-6 text-center text-sm text-text-muted">
          © {new Date().getFullYear()} Gianni Gabriel
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
