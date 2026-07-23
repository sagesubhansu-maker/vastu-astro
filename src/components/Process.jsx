import { SectionHeading } from './ui.jsx'
import { IconCalendar, IconNote, IconChart, IconSparkle } from '../icons.jsx'

const steps = [
  { icon: IconCalendar, title: 'Book Your Session', text: 'Choose a convenient time and book your consultation online.' },
  { icon: IconNote, title: 'Share Your Details', text: 'Provide your space details and birth information securely.' },
  { icon: IconChart, title: 'Personalised Analysis', text: 'BL Gour studies and analyses your details using Vedic principles.' },
  { icon: IconSparkle, title: 'Receive Your Guidance', text: 'Get practical recommendations and remedies for a balanced life.' },
]

export default function Process() {
  return (
    <section id="process" className="bg-cream-100 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Simple Process" title="How Your Consultation Works" subtitle="Four thoughtful steps from booking to lasting transformation." />

        <div className="relative mt-16">
          {/* Connector line */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <div key={title} className="relative text-center">
                <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-full border border-gold-400/50 bg-cream-50 text-maroon-700 shadow-[0_10px_30px_-12px_rgba(109,26,45,0.4)]">
                  <Icon width={30} height={30} />
                  <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-b from-gold-400 to-gold-600 text-xs font-semibold text-maroon-900">
                    {i + 1}
                  </span>
                </div>
                <h4 className="mt-5 text-lg text-maroon-800">{title}</h4>
                <p className="mx-auto mt-2 max-w-[15rem] text-sm leading-relaxed text-maroon-900/60">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
