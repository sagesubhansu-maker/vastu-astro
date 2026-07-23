import { SectionHeading, LinkArrow } from './ui.jsx'
import { IconHome, IconBuilding, IconStars } from '../icons.jsx'

// Decorative "scene" backgrounds rendered as SVG so no external assets are needed
function RoomScene({ variant }) {
  if (variant === 'home') {
    return (
      <svg viewBox="0 0 400 260" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="260" fill="#efe6d3" />
        <rect y="185" width="400" height="75" fill="#d8c4a2" />
        <rect x="40" y="150" width="150" height="45" rx="6" fill="#b98a5e" />
        <rect x="55" y="120" width="120" height="34" rx="6" fill="#a97a4e" />
        <rect x="230" y="70" width="120" height="115" fill="#e8dcc4" stroke="#c9a24b" />
        <line x1="290" y1="70" x2="290" y2="185" stroke="#c9a24b" />
        <line x1="230" y1="127" x2="350" y2="127" stroke="#c9a24b" />
        <circle cx="360" cy="55" r="26" fill="#f0b429" opacity="0.7" />
        <rect x="60" y="60" width="10" height="90" fill="#6d8f5a" />
        <ellipse cx="65" cy="55" rx="26" ry="20" fill="#7ba86a" />
      </svg>
    )
  }
  if (variant === 'business') {
    return (
      <svg viewBox="0 0 400 260" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="260" fill="#e7ecf0" />
        <rect y="200" width="400" height="60" fill="#cdd6dd" />
        <rect x="30" y="150" width="150" height="50" fill="#7b8a99" />
        <rect x="45" y="120" width="60" height="30" fill="#93a1af" />
        <rect x="210" y="60" width="160" height="140" fill="#dfe6ec" stroke="#9fb0bd" />
        {Array.from({ length: 3 }).map((_, r) => Array.from({ length: 3 }).map((_, c) => (
          <rect key={`${r}-${c}`} x={220 + c * 48} y={72 + r * 44} width="36" height="30" fill="#b9c6d1" />
        )))}
        <circle cx="120" cy="150" r="14" fill="#5c6b78" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="260" fill="#2a1420" />
      <circle cx="200" cy="130" r="95" fill="none" stroke="#c9a24b" strokeWidth="1.5" opacity="0.7" />
      <circle cx="200" cy="130" r="65" fill="none" stroke="#c9a24b" strokeWidth="1" opacity="0.5" />
      {Array.from({ length: 12 }).map((_, i) => (
        <g key={i} transform={`rotate(${i * 30} 200 130)`}>
          <line x1="200" y1="35" x2="200" y2="60" stroke="#e6cf94" strokeWidth="1" opacity="0.6" />
          <circle cx="200" cy="48" r="8" fill="none" stroke="#e6cf94" strokeWidth="0.8" opacity="0.7" />
        </g>
      ))}
      <circle cx="200" cy="130" r="10" fill="#c9a24b" />
      {Array.from({ length: 30 }).map((_, i) => (
        <circle key={'s' + i} cx={(i * 53) % 400} cy={(i * 37) % 260} r={i % 3 ? 1 : 1.6} fill="#f4ede0" opacity="0.5" />
      ))}
    </svg>
  )
}

const items = [
  { variant: 'home', icon: IconHome, title: 'Home & Residential Vastu', text: 'Create harmony, health and happiness in your home with balanced energies and positive vibrations.', wide: false },
  { variant: 'business', icon: IconBuilding, title: 'Business & Commercial Vastu', text: 'Improve productivity, finances and growth by aligning your workspace with Vastu principles.', wide: true },
  { variant: 'astro', icon: IconStars, title: 'Personal Astrology Guidance', text: 'Gain clarity about your life path, relationships, career and future with personalised astrological insights.', wide: false },
]

export default function Solutions() {
  return (
    <section className="bg-cream-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Tailored Guidance" title="Solutions for Every Space" subtitle="Whether it's your home, your business or your life path — there is a path to balance." />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {items.map(({ variant, icon: Icon, title, text }, i) => (
            <article
              key={title}
              className={`group flex flex-col overflow-hidden rounded-2xl border border-maroon-700/10 bg-cream-50 shadow-sm transition-all duration-300 hover:shadow-[0_30px_60px_-30px_rgba(109,26,45,0.4)] sm:flex-row ${i === 2 ? 'lg:col-span-2' : ''}`}
            >
              <div className="relative h-48 overflow-hidden sm:h-auto sm:w-2/5 sm:shrink-0">
                <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                  <RoomScene variant={variant} />
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-center p-7">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-gold-400/40 bg-cream-100 text-maroon-700">
                  <Icon width={24} height={24} />
                </span>
                <h3 className="mt-4 text-xl text-maroon-800">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-maroon-900/60">{text}</p>
                <div className="mt-5 group">
                  <LinkArrow href="/contact">Learn More</LinkArrow>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
