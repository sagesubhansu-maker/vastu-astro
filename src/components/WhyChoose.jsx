import { Button } from './ui.jsx'
import { IconStar, IconQuote } from '../icons.jsx'
import { Mandala } from './Decor.jsx'

const stats = [
  { value: '20+', label: 'Years of Experience' },
  { value: '5000+', label: 'Happy Clients' },
  { value: '1000+', label: 'Projects Completed' },
]

export default function WhyChoose() {
  return (
    <section className="bg-cream-100 py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-stretch gap-6 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        {/* Left: stats + testimonial */}
        <div className="rounded-3xl border border-maroon-700/10 bg-cream-50 p-8 lg:p-10">
          <h3 className="text-center font-display text-2xl text-maroon-800 sm:text-[1.75rem]">Why Choose BL Gour</h3>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="mx-auto mb-2 flex justify-center text-gold-500">
                  <IconStar width={22} height={22} />
                </div>
                <div className="font-display text-3xl text-maroon-700 sm:text-4xl">{s.value}</div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-maroon-900/55">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-cream-100 p-6">
            <IconQuote width={30} height={30} className="text-gold-500/70" />
            <p className="mt-3 font-serif-c text-lg italic leading-relaxed text-maroon-900/80">
              “BL Gour's guidance has completely transformed our home and our lives. The changes were
              positive, visible and lasting.”
            </p>
            <div className="mt-4 flex items-center gap-2 text-gold-500">
              {Array.from({ length: 5 }).map((_, i) => <IconStar key={i} width={15} height={15} />)}
            </div>
            <p className="mt-3 text-sm font-semibold text-maroon-800">— Neha & Rajeev Malhotra <span className="font-normal text-maroon-900/50">· Delhi</span></p>
          </div>
        </div>

        {/* Right: CTA */}
        <div className="relative flex flex-col justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-maroon-700 via-maroon-800 to-maroon-900 p-8 text-center lg:p-10">
          <Mandala className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 text-gold-300/10" />
          <Mandala className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 text-gold-300/5" />
          <div className="relative">
            <div className="mx-auto mb-4 flex justify-center text-gold-300">
              <IconStar width={26} height={26} />
            </div>
            <h3 className="font-display text-2xl leading-snug text-cream-50 sm:text-[1.7rem]">
              Ready to Transform Your Space and Your Life?
            </h3>
            <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-cream-100/75">
              Connect with BL Gour for expert guidance tailored to your unique needs.
            </p>
            <Button variant="gold" href="#contact" className="mt-7">Book Your Consultation</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
