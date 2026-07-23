import { IconArrow } from '../icons.jsx'

export function Button({ children, variant = 'primary', className = '', icon, href = '#', ...rest }) {
  const variants = {
    primary:
      'bg-maroon-700 text-cream-50 hover:bg-maroon-800 shadow-[0_10px_30px_-10px_rgba(109,26,45,0.55)]',
    gold:
      'bg-gradient-to-b from-gold-400 to-gold-600 text-maroon-900 hover:from-gold-300 hover:to-gold-500 shadow-[0_10px_30px_-10px_rgba(176,138,52,0.6)]',
    outline:
      'border border-maroon-700/40 text-maroon-800 hover:bg-maroon-700 hover:text-cream-50',
    ghostGold:
      'border border-gold-400/60 text-gold-300 hover:bg-gold-500 hover:text-maroon-900',
    light:
      'bg-cream-50 text-maroon-800 hover:bg-white',
  }
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 ${variants[variant]} ${className}`}
      {...rest}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </a>
  )
}

export function Eyebrow({ children, dark = false }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${dark ? 'text-gold-300' : 'text-gold-600'}`}>
      <span className="h-px w-8 bg-current opacity-60" />
      <span className="text-xs font-medium uppercase tracking-[0.28em]">{children}</span>
      <span className="h-px w-8 bg-current opacity-60" />
    </div>
  )
}

export function SectionHeading({ eyebrow, title, subtitle, dark = false, align = 'center' }) {
  return (
    <div className={`mx-auto max-w-2xl ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2 className={`mt-4 text-3xl leading-tight text-balance sm:text-4xl md:text-[2.6rem] ${dark ? 'text-cream-50' : 'text-maroon-800'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-[15px] leading-relaxed ${dark ? 'text-cream-100/80' : 'text-maroon-900/65'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export function LinkArrow({ children, href = '#', dark = false }) {
  return (
    <a href={href} className={`inline-flex items-center gap-2 text-sm font-medium ${dark ? 'text-gold-300' : 'text-maroon-700'} transition-colors hover:text-gold-600`}>
      {children}
      <IconArrow width={16} height={16} className="transition-transform group-hover:translate-x-1" />
    </a>
  )
}
