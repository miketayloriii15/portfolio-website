import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import CurrentRole from './components/CurrentRole'
import LLMsAndAgents from './components/LLMsAndAgents'
import AIEvaluation from './components/AIEvaluation'
import FeaturedProjects from './components/FeaturedProjects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#060b18] text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CurrentRole />
        <LLMsAndAgents />
        <AIEvaluation />
        <FeaturedProjects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  )
}
