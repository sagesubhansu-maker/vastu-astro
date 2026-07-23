import PageHero from '../components/PageHero.jsx'
import Process from '../components/Process.jsx'
import WhyChoose from '../components/WhyChoose.jsx'
import FAQ from '../components/FAQ.jsx'
import CTA from '../components/CTA.jsx'

export default function Consultation() {
  return (
    <>
      <PageHero
        eyebrow="Simple Process"
        title="How Your Consultation Works"
        subtitle="Four thoughtful steps from booking to lasting transformation — online or in-person."
        crumb="Consultation"
      />
      <Process />
      <WhyChoose />
      <FAQ />
      <CTA />
    </>
  )
}
