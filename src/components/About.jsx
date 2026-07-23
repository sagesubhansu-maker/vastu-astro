import { Button, Eyebrow } from './ui.jsx'
import { Mandala } from './Decor.jsx'
import { IconStars, IconUsers, IconLeaf, IconArrow } from '../icons.jsx'

const features = [
  { icon: IconStars, title: '20+ Years of Expertise', text: 'Deep knowledge and practical experience in Vastu and Astrology.' },
  { icon: IconUsers, title: 'Trusted by Thousands', text: 'Guided 5000+ happy clients across India and abroad.' },
  { icon: IconLeaf, title: 'Holistic & Practical Solutions', text: 'Remedies and guidance that are simple, effective and lasting.' },
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream-50 py-20 lg:py-24">
      <Mandala className="pointer-events-none absolute -right-32 top-10 h-[460px] w-[460px] text-gold-500/10" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold-400/30 to-maroon-700/20 blur-sm" />
          <div className="relative overflow-hidden rounded-[1.8rem] border-4 border-cream-50 bg-gradient-to-br from-maroon-700 to-maroon-900 shadow-2xl">
            <div className="aspect-[4/5] w-full">
              {/* Stylised portrait placeholder */}
              <svg viewBox="0 0 400 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="pbg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f4ebda" />
                    <stop offset="100%" stopColor="#e6d3b0" />
                  </linearGradient>
                </defs>
                <rect width="400" height="500" fill="url(#pbg)" />
                <circle cx="200" cy="185" r="70" fill="#c99a6a" />
                <path d="M130 175 q70 -95 140 0 q6 -60 -70 -70 q-76 10 -70 70Z" fill="#3b2a24" />
                <rect x="150" y="180" width="45" height="26" rx="13" fill="none" stroke="#2b2b2b" strokeWidth="4" />
                <rect x="205" y="180" width="45" height="26" rx="13" fill="none" stroke="#2b2b2b" strokeWidth="4" />
                <path d="M195 193h10" stroke="#2b2b2b" strokeWidth="4" />
                <path d="M175 235 q25 18 50 0" stroke="#7a4a2a" strokeWidth="3" fill="none" />
                <path d="M110 500 q90 -170 180 0Z" fill="#f4ede0" />
                <path d="M150 300 q50 -34 100 0 l0 200 -100 0Z" fill="#e9dcc4" />
                <path d="M200 300 v170" stroke="#cbb488" strokeWidth="3" />
              </svg>
            </div>
          </div>
          <div className="absolute -bottom-5 -right-3 rounded-2xl border border-gold-400/40 bg-cream-50 px-5 py-3 shadow-xl">
            <div className="font-display text-2xl text-maroon-700">BL Gour</div>
            <div className="text-[11px] uppercase tracking-widest text-gold-600">Vastu & Astrology Expert</div>
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="flex justify-start">
            <Eyebrow>About BL Gour</Eyebrow>
          </div>
          <h2 className="mt-4 font-display text-3xl leading-tight text-maroon-800 sm:text-4xl">
            Guidance Rooted in Wisdom and Experience
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-maroon-900/65">
            With over two decades of experience in Vastu Shastra and Astrology, BL Gour has helped
            thousands of individuals, families and businesses create harmonious spaces and meaningful lives.
          </p>

          <div className="mt-8 space-y-5">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-gold-400/40 bg-cream-100 text-gold-600">
                  <Icon width={24} height={24} />
                </span>
                <div>
                  <h4 className="text-base font-semibold text-maroon-800">{title}</h4>
                  <p className="mt-0.5 text-sm text-maroon-900/60">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <Button variant="primary" href="/contact" className="mt-9" icon={<IconArrow width={16} height={16} />}>
            Know More
          </Button>
        </div>
      </div>
    </section>
  )
}
