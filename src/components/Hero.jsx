import { Button } from './ui.jsx'
import { Mandala } from './Decor.jsx'
import HeroArt from './HeroArt.jsx'
import { IconCalendar, IconChevron } from '../icons.jsx'

const trust = ['Trusted Guidance', 'Personalised Solutions', 'Online & In-Person']

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[92vh] items-center overflow-hidden bg-white pt-24 pb-14 lg:min-h-[88vh] lg:pt-28">
      {/* ---- Full-bleed background layer ---- */}
      <div className="pointer-events-none absolute inset-0">
        <Mandala className="absolute -left-40 top-4 h-96 w-96 text-gold-500/10" />
        <Mandala className="absolute right-10 bottom-0 h-[360px] w-[360px] text-maroon-700/[0.05]" />

        {/* Compass composition — large, bleeding off the right edge */}
        <HeroArt className="absolute right-[-14%] top-1/2 h-[135%] w-auto -translate-y-1/2 sm:right-[-8%] lg:right-[-4%] lg:h-[125%]" />

        {/* White wash so the left-side content stays readable over the art */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/30 lg:via-white/85 lg:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* ---- Content ---- */}
      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="max-w-xl reveal">
          <h1 className="font-display text-4xl leading-[1.05] text-maroon-800 sm:text-5xl lg:text-6xl">
            Align Your Space.
            <span className="mt-1 block">Transform Your Life.</span>
          </h1>

          {/* diamond divider */}
          <div className="mt-6 flex items-center gap-3">
            <span className="h-px w-40 bg-gradient-to-r from-gold-500 to-transparent" />
            <span className="h-2 w-2 rotate-45 border border-gold-500" />
          </div>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-maroon-900/70">
            Personalised Vastu and Astrology guidance for harmony, clarity and success.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="primary" href="/contact" icon={<IconCalendar width={17} height={17} />}>
              Book a Consultation
            </Button>
            <Button variant="outline" href="/services" icon={<IconChevron width={16} height={16} />}>
              Explore Services
            </Button>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-maroon-900/75">
            {trust.map((t, i) => (
              <span key={t} className="flex items-center gap-3">
                {i > 0 && <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />}
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
