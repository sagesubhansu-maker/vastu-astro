import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import WhyChoose from './components/WhyChoose.jsx'
import About from './components/About.jsx'
import Process from './components/Process.jsx'
import Solutions from './components/Solutions.jsx'
import Balance from './components/Balance.jsx'
import Testimonials from './components/Testimonials.jsx'
import Insights from './components/Insights.jsx'
import FAQ from './components/FAQ.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

// Reveal-on-scroll for elements marked with .reveal-on-scroll
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal-on-scroll')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('reveal')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export default function App() {
  useScrollReveal()
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <About />
        <Process />
        <Solutions />
        <Balance />
        <Testimonials />
        <Insights />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
