import PageHero from '../components/PageHero.jsx'
import ContactForm from '../components/ContactForm.jsx'
import FAQ from '../components/FAQ.jsx'

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Take the first step towards a harmonious space and a brighter future."
        crumb="Contact"
      />
      <ContactForm />
      <FAQ />
    </>
  )
}
