import { useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Blogs from './components/Blogs'
import Contact from './components/Contact'

function App() {
  const onConnect = useCallback(() => {
    const section = document.querySelector('#about')
    section?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar onConnect={onConnect} />
      <main className="pt-20">
        <Hero />
        <Services />
        <Blogs />
        <Contact />
        <footer className="py-10 text-center text-slate-400 bg-slate-950/80">
          © {new Date().getFullYear()} CS Portfolio • All rights reserved
        </footer>
      </main>
    </div>
  )
}

export default App
