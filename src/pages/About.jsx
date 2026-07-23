import PageHero from '../components/PageHero.jsx'
import About from '../components/About.jsx'
import WhyChoose from '../components/WhyChoose.jsx'
import Balance from '../components/Balance.jsx'
import Testimonials from '../components/Testimonials.jsx'
import CTA from '../components/CTA.jsx'

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About BL Gour"
        title="Guidance Rooted in Wisdom"
        subtitle="Over two decades of helping homes, families and businesses create harmonious spaces and meaningful lives."
        crumb="About"
      />
      <About />
      <WhyChoose />
      <Balance />
      <Testimonials />
      <CTA />
    </>
  )
}
