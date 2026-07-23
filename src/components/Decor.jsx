// Decorative SVG graphics used across the site

export function CompassRose({ className = '', spin = false }) {
  return (
    <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="cr-face" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#fbf4e4" />
          <stop offset="70%" stopColor="#f0e2c2" />
          <stop offset="100%" stopColor="#d9c58c" />
        </radialGradient>
        <linearGradient id="cr-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e6cf94" />
          <stop offset="100%" stopColor="#b08a34" />
        </linearGradient>
      </defs>
      <circle cx="150" cy="150" r="146" fill="url(#cr-face)" stroke="#b08a34" strokeWidth="2" />
      <circle cx="150" cy="150" r="128" fill="none" stroke="#c9a24b" strokeWidth="1" opacity="0.6" />
      <g className={spin ? 'animate-spin-slow' : ''} style={{ transformOrigin: '150px 150px' }}>
        {Array.from({ length: 72 }).map((_, i) => (
          <line key={i} x1="150" y1="24" x2="150" y2={i % 6 === 0 ? 36 : 30}
            stroke="#8a6b28" strokeWidth={i % 6 === 0 ? 1.4 : 0.6}
            transform={`rotate(${i * 5} 150 150)`} opacity="0.7" />
        ))}
      </g>
      {/* 8-point star */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <polygon key={deg} points="150,40 160,150 150,150 140,150"
          fill={i % 2 === 0 ? 'url(#cr-gold)' : '#7d2036'}
          transform={`rotate(${deg} 150 150)`} opacity={i % 2 === 0 ? 1 : 0.85} />
      ))}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <polygon key={'b' + deg} points="150,60 156,150 150,150 144,150"
          fill="#fdfaf4" transform={`rotate(${deg} 150 150)`} opacity="0.55" />
      ))}
      <circle cx="150" cy="150" r="16" fill="#7d2036" stroke="url(#cr-gold)" strokeWidth="3" />
      <circle cx="150" cy="150" r="5" fill="#e6cf94" />
      {['N', 'E', 'S', 'W'].map((d, i) => (
        <text key={d} x="150" y="20" fill="#6d1a2d" fontSize="16" fontFamily="Marcellus, serif"
          textAnchor="middle" transform={`rotate(${i * 90} 150 150)`}>{d}</text>
      ))}
    </svg>
  )
}

export function Mandala({ className = '' }) {
  return (
    <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="200" cy="200" r="190" />
        <circle cx="200" cy="200" r="150" />
        <circle cx="200" cy="200" r="110" />
        <circle cx="200" cy="200" r="70" />
        {Array.from({ length: 24 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 15} 200 200)`}>
            <path d="M200 10 C 215 60, 215 90, 200 130 C 185 90, 185 60, 200 10 Z" />
            <circle cx="200" cy="50" r="4" />
          </g>
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <path key={'p' + i} d="M200 90 C 220 140, 220 170, 200 200 C 180 170, 180 140, 200 90 Z"
            transform={`rotate(${i * 30} 200 200)`} />
        ))}
      </g>
    </svg>
  )
}

// A soft "sun" motif for the hero
export function SunMotif({ className = '' }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="sun-g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffe8a3" />
          <stop offset="55%" stopColor="#f0b429" />
          <stop offset="100%" stopColor="#d97706" />
        </radialGradient>
      </defs>
      <g className="animate-spin-slow" style={{ transformOrigin: '100px 100px' }}>
        {Array.from({ length: 24 }).map((_, i) => (
          <polygon key={i} points="100,8 105,40 95,40" fill="#f0b429"
            transform={`rotate(${i * 15} 100 100)`} opacity="0.8" />
        ))}
      </g>
      <circle cx="100" cy="100" r="52" fill="url(#sun-g)" />
      <circle cx="100" cy="100" r="52" fill="none" stroke="#fff3d6" strokeWidth="1.5" opacity="0.7" />
    </svg>
  )
}
