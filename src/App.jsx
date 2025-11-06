import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full scroll-smooth bg-[#0F172A] text-slate-100">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
