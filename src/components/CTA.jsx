import { Button } from './ui.jsx'
import { Mandala } from './Decor.jsx'
import { IconSparkle, IconPhone } from '../icons.jsx'

export default function CTA() {
  return (
    <section id="contact" className="bg-cream-50 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-gold-400/30 bg-gradient-to-br from-cream-100 via-cream-50 to-cream-100 px-6 py-14 text-center shadow-[0_30px_70px_-40px_rgba(109,26,45,0.4)] lg:py-16">
          <Mandala className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 text-gold-500/15" />
          <Mandala className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 text-maroon-700/10" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/50 bg-cream-50 px-4 py-1.5 text-xs font-medium tracking-wide text-maroon-700">
              <IconSparkle width={15} height={15} className="text-gold-600" />
              Begin Your Journey
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl leading-tight text-maroon-800 sm:text-4xl md:text-[2.7rem]">
              Ready to Create a More Balanced Life?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-maroon-900/65">
              Take the first step towards a harmonious space and a brighter future.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button variant="primary" href="#" icon={<IconSparkle width={16} height={16} />}>Book a Consultation</Button>
              <Button variant="outline" href="tel:+919876543210" icon={<IconPhone width={16} height={16} />}>Call Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
