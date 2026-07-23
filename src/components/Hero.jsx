import { Button } from './ui.jsx'
import { CompassRose, SunMotif, Mandala } from './Decor.jsx'
import { IconSparkle, IconArrow } from '../icons.jsx'

const trust = ['Trusted Guidance', 'Personalised Solutions', 'Online & In-Person']

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-cream-100 to-cream-50 pt-28 pb-16 lg:pt-36 lg:pb-24">
      <Mandala className="pointer-events-none absolute -right-40 -top-24 h-[520px] w-[520px] text-gold-500/15" />
      <Mandala className="pointer-events-none absolute -left-48 bottom-0 h-[420px] w-[420px] text-maroon-700/5" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/50 bg-cream-50/70 px-4 py-1.5 text-xs font-medium tracking-wide text-maroon-700">
            <IconSparkle width={15} height={15} className="text-gold-600" />
            Vastu Shastra & Vedic Astrology
          </div>

          <h1 className="mt-6 font-display text-4xl leading-[1.08] text-maroon-800 sm:text-5xl lg:text-6xl">
            Align Your Space.
            <span className="mt-1 block bg-gradient-to-r from-gold-600 to-maroon-700 bg-clip-text text-transparent">
              Transform Your Life.
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-maroon-900/65">
            Personalised Vastu and Astrology guidance for harmony, clarity and success —
            rooted in over two decades of experience helping homes, families and businesses thrive.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="primary" href="/contact" icon={<IconSparkle width={16} height={16} />}>
              Book a Consultation
            </Button>
            <Button variant="outline" href="/services" icon={<IconArrow width={16} height={16} />}>
              Explore Services
            </Button>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2">
            {trust.map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-maroon-900/60">
                <span className="grid h-4 w-4 place-items-center rounded-full bg-gold-500/20 text-gold-600">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative reveal" style={{ animationDelay: '0.15s' }}>
          <div className="relative mx-auto aspect-square max-w-md">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-cream-200 via-cream-100 to-cream-200 shadow-[0_40px_80px_-30px_rgba(109,26,45,0.4)]" />
            {/* Blueprint grid */}
            <svg className="absolute inset-6 rounded-3xl opacity-40" viewBox="0 0 300 300" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M20 0H0V20" fill="none" stroke="#b08a34" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="300" height="300" fill="url(#grid)" />
              <rect x="40" y="40" width="120" height="90" fill="none" stroke="#7d2036" strokeWidth="1" opacity="0.5" />
              <rect x="180" y="40" width="80" height="90" fill="none" stroke="#7d2036" strokeWidth="1" opacity="0.5" />
              <rect x="40" y="150" width="220" height="110" fill="none" stroke="#7d2036" strokeWidth="1" opacity="0.5" />
            </svg>

            <SunMotif className="absolute -right-4 -top-6 h-28 w-28 animate-floaty" />
            <CompassRose spin className="absolute inset-x-0 bottom-6 mx-auto h-64 w-64 drop-shadow-[0_20px_40px_rgba(109,26,45,0.35)]" />
          </div>

          {/* Floating stat card */}
          <div className="absolute -bottom-4 left-0 flex items-center gap-3 rounded-2xl border border-gold-400/40 bg-cream-50/95 px-4 py-3 shadow-xl backdrop-blur">
            <span className="font-display text-2xl text-maroon-700">20+</span>
            <span className="text-xs leading-tight text-maroon-900/60">Years of<br />Experience</span>
          </div>
        </div>
      </div>
    </section>
  )
}
