import { Button } from './ui.jsx'
import { IconCalendar, IconChevron } from '../icons.jsx'

const trust = ['Trusted Guidance', 'Personalised Solutions', 'Online & In-Person']

// Respect Vite's base so the asset resolves at a domain root *and* under a subpath
const asset = (file) => `${import.meta.env.BASE_URL}${file}`

// Matches the photo's cream backdrop so the image blends seamlessly into the section
const CREAM = '#f7f1e5'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-24 pb-14 lg:min-h-[88vh] lg:pt-28"
      style={{ backgroundColor: CREAM }}
    >
      {/* ---- Background photo ---- */}
      <div className="absolute inset-0" aria-hidden="true">
        <picture>
          <source srcSet={asset('hero-compass.webp')} type="image/webp" />
          <img
            src={asset('hero-compass.jpg')}
            alt=""
            fetchPriority="high"
            className="h-full w-full object-cover object-[75%_center] lg:object-right"
          />
        </picture>

        {/* Left-to-right wash so the copy stays readable over the artwork */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, ${CREAM} 0%, ${CREAM}f0 32%, ${CREAM}99 55%, transparent 78%)`,
          }}
        />
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

          <p className="mt-6 max-w-md text-lg leading-relaxed text-maroon-900/75">
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
