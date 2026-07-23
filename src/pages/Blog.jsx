import PageHero from '../components/PageHero.jsx'
import Insights from '../components/Insights.jsx'
import CTA from '../components/CTA.jsx'

export default function Blog() {
  return (
    <>
      <PageHero
        eyebrow="From the Journal"
        title="Insights & Guidance"
        subtitle="Practical wisdom on Vastu and Astrology to help you live in balance."
        crumb="Blog"
      />
      <Insights />
      <CTA />
    </>
  )
}
