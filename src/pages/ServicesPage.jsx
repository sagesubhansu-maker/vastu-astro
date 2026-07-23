import PageHero from '../components/PageHero.jsx'
import Services from '../components/Services.jsx'
import Solutions from '../components/Solutions.jsx'
import Process from '../components/Process.jsx'
import CTA from '../components/CTA.jsx'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Our Services"
        subtitle="Holistic, practical Vastu and Astrology guidance for every space and every stage of life."
        crumb="Services"
      />
      <Services />
      <Solutions />
      <Process />
      <CTA />
    </>
  )
}
