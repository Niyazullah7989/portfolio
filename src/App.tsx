import { About } from './components/About'
import { ChatBot } from './components/ChatBot'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
  return (
    <>
      <div className="atmosphere" aria-hidden>
        <div className="atmosphere__mesh" />
        <div className="atmosphere__grid" />
        <div className="atmosphere__grain" />
      </div>
      <div className="relative z-10 min-h-svh text-ink">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
        <ChatBot />
      </div>
    </>
  )
}

export default App
