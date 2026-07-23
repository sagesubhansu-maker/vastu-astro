import { Link } from 'react-router-dom'
import { Mandala } from './Decor.jsx'
import { Eyebrow } from './ui.jsx'

export default function PageHero({ eyebrow, title, subtitle, crumb }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-100 to-cream-50 pt-32 pb-14 lg:pt-40 lg:pb-16">
      <Mandala className="pointer-events-none absolute -right-32 -top-20 h-[420px] w-[420px] text-gold-500/12" />
      <Mandala className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 text-maroon-700/5" />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="mt-4 font-display text-4xl leading-tight text-maroon-800 sm:text-5xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-maroon-900/65">{subtitle}</p>}
        <nav className="mt-6 flex items-center justify-center gap-2 text-xs font-medium text-maroon-900/50">
          <Link to="/" className="transition-colors hover:text-gold-600">Home</Link>
          <span className="text-gold-500">/</span>
          <span className="text-maroon-700">{crumb || title}</span>
        </nav>
      </div>
    </section>
  )
}
