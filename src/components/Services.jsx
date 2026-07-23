import { SectionHeading } from './ui.jsx'
import { IconHome, IconBuilding, IconStars, IconLeaf } from '../icons.jsx'

const services = [
  {
    icon: IconHome,
    title: 'Residential Vastu',
    text: 'Create a balanced and positive living environment for you and your family.',
  },
  {
    icon: IconBuilding,
    title: 'Commercial Vastu',
    text: 'Enhance productivity, growth and prosperity in your business space.',
  },
  {
    icon: IconStars,
    title: 'Astrology Consultation',
    text: 'Personalised birth chart analysis and predictions for clarity and direction.',
  },
  {
    icon: IconLeaf,
    title: 'Vastu Remedies',
    text: 'Effective and easy remedies to remove Vastu doshas and attract positivity.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="What We Offer" title="Our Services" subtitle="Holistic, practical guidance across every dimension of Vastu and Astrology." />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text }, i) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-maroon-700/10 bg-cream-50 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/50 hover:shadow-[0_30px_60px_-30px_rgba(109,26,45,0.4)]"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold-500/10 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative grid h-14 w-14 place-items-center rounded-xl border border-gold-400/40 bg-gradient-to-br from-cream-100 to-cream-200 text-maroon-700 transition-colors group-hover:from-maroon-700 group-hover:to-maroon-800 group-hover:text-gold-300">
                <Icon width={28} height={28} />
              </div>
              <h3 className="relative mt-5 text-xl text-maroon-800">{title}</h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-maroon-900/60">{text}</p>
              <span className="relative mt-5 inline-block h-px w-10 bg-gold-500 transition-all duration-300 group-hover:w-16" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
