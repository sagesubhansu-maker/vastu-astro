import { Button } from './ui.jsx'
import { Mandala } from './Decor.jsx'
import HeroArt from './HeroArt.jsx'
import { IconCalendar, IconChevron } from '../icons.jsx'

const trust = ['Trusted Guidance', 'Personalised Solutions', 'Online & In-Person']

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-28 pb-16 lg:pt-32 lg:pb-20">
      <Mandala className="pointer-events-none absolute -left-40 top-10 h-96 w-96 text-gold-500/10" />
      <Mandala className="pointer-events-none absolute -right-48 bottom-0 h-[420px] w-[420px] text-maroon-700/[0.04]" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-6 lg:px-8">
        {/* Left: content */}
        <div className="reveal">
          <h1 className="font-display text-4xl leading-[1.05] text-maroon-800 sm:text-5xl lg:text-6xl">
            Align Your Space.
            <span className="mt-1 block">Transform Your Life.</span>
          </h1>

          {/* diamond divider */}
          <div className="mt-6 flex items-center gap-3">
            <span className="h-px w-40 bg-gradient-to-r from-gold-500 to-transparent" />
            <span className="h-2 w-2 rotate-45 border border-gold-500" />
          </div>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-maroon-900/65">
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

          <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-maroon-900/70">
            {trust.map((t, i) => (
              <span key={t} className="flex items-center gap-3">
                {i > 0 && <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />}
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right: artwork */}
        <div className="relative reveal" style={{ animationDelay: '0.15s' }}>
          <HeroArt className="mx-auto w-full max-w-xl drop-shadow-[0_30px_60px_rgba(109,26,45,0.18)]" />
        </div>
      </div>
    </section>
  )
}
