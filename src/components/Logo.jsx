import { Link } from 'react-router-dom'

const asset = (file) => `${import.meta.env.BASE_URL}${file}`

/**
 * Brand lockup: the BL compass mark + wordmark.
 * The source artwork sits on a near-white card, so `mix-blend-multiply`
 * drops that backdrop out cleanly over light surfaces.
 */
export default function Logo({ dark = false, className = '' }) {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`} aria-label="Vastu Astro by BL Gour — home">
      {/* On the dark footer the mark sits in a cream badge so its colours stay legible */}
      <span
        className={`grid shrink-0 place-items-center ${
          dark ? 'h-11 w-11 rounded-full bg-cream-100 p-1 ring-1 ring-gold-400/40' : ''
        }`}
      >
        <picture>
          <source srcSet={asset('logo-mark.webp')} type="image/webp" />
          <img
            src={asset('logo-mark.png')}
            alt=""
            width={48}
            height={48}
            className={`shrink-0 object-contain mix-blend-multiply ${dark ? 'h-9 w-9' : 'h-11 w-11'}`}
          />
        </picture>
      </span>
      <span className="leading-none">
        <span className={`block font-display text-lg tracking-[0.14em] ${dark ? 'text-cream-50' : 'text-maroon-800'}`}>
          VASTU ASTRO
        </span>
        <span className={`mt-1 block text-[10px] font-medium uppercase tracking-[0.34em] ${dark ? 'text-gold-300' : 'text-gold-600'}`}>
          by BL Gour
        </span>
      </span>
    </Link>
  )
}
