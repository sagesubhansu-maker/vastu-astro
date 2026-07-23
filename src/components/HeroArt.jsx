// Rich hero composition: Vastu blueprint + zodiac wheel + colourful brass compass + sun.
// All inline SVG — no external image assets.

// U+FE0E (variation selector) forces text glyphs instead of colour-emoji tiles
const VS_TEXT = String.fromCharCode(0xfe0e) // force text glyphs, not colour-emoji
const zodiac = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'].map((g) => g + VS_TEXT)

function MainPoint({ rotate, dark, light, radius = 150 }) {
  return (
    <g transform={`rotate(${rotate})`}>
      <polygon points={`0,${-radius} 0,22 -15,0`} fill={dark} />
      <polygon points={`0,${-radius} 0,22 15,0`} fill={light} />
    </g>
  )
}

export default function HeroArt({ className = '' }) {
  const cx = 300
  const cy = 300
  return (
    <svg viewBox="0 0 600 600" className={className} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Compass on a Vastu blueprint with zodiac wheel and sun">
      <defs>
        <radialGradient id="ha-face" cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#fdf7e9" />
          <stop offset="72%" stopColor="#f4e8c8" />
          <stop offset="100%" stopColor="#e6d3a4" />
        </radialGradient>
        <linearGradient id="ha-brass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0d68f" />
          <stop offset="35%" stopColor="#c99a3e" />
          <stop offset="65%" stopColor="#9a6f24" />
          <stop offset="100%" stopColor="#e4c374" />
        </linearGradient>
        <linearGradient id="ha-brass2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e9c877" />
          <stop offset="100%" stopColor="#8a6220" />
        </linearGradient>
        <radialGradient id="ha-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffe9a8" />
          <stop offset="55%" stopColor="#f2b333" />
          <stop offset="100%" stopColor="#d98b1c" />
        </radialGradient>
        <linearGradient id="ha-paper" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6efe0" />
          <stop offset="100%" stopColor="#eadfc6" />
        </linearGradient>
      </defs>

      {/* Blueprint sheet (rotated) */}
      <g transform="rotate(-9 300 340)">
        <rect x="120" y="250" width="420" height="300" rx="4" fill="url(#ha-paper)" stroke="#c9a24b" strokeOpacity="0.5" />
        <g stroke="#9c7b3e" strokeWidth="1.4" fill="none" opacity="0.7">
          <rect x="150" y="285" width="360" height="235" />
          <rect x="150" y="285" width="150" height="120" />
          <rect x="300" y="285" width="210" height="120" />
          <rect x="150" y="405" width="220" height="115" />
          <rect x="370" y="405" width="140" height="115" />
          <line x1="230" y1="285" x2="230" y2="230" />
          <line x1="150" y1="460" x2="110" y2="460" />
        </g>
        <g fill="#8a6b32" fontFamily="Poppins, sans-serif" fontSize="12" opacity="0.75">
          <text x="160" y="305">NW</text>
          <text x="470" y="305">NE</text>
          <text x="160" y="510">SW</text>
          <text x="470" y="510">SE</text>
          <text x="245" y="222">NORTH</text>
          <text x="70" y="464">ENTRY</text>
        </g>
      </g>

      {/* Zodiac wheel (behind compass) */}
      <g opacity="0.55">
        <circle cx={cx} cy={cy - 6} r="238" fill="none" stroke="#c9a24b" strokeWidth="1.2" />
        <circle cx={cx} cy={cy - 6} r="210" fill="none" stroke="#c9a24b" strokeWidth="0.8" />
        {zodiac.map((g, i) => {
          const a = (i / 12) * Math.PI * 2 - Math.PI / 2
          const r = 224
          const x = cx + r * Math.cos(a)
          const y = cy - 6 + r * Math.sin(a)
          return (
            <text key={i} x={x} y={y + 6} textAnchor="middle" fontSize="20" fill="#b08a34">{g}</text>
          )
        })}
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={'t' + i} x1={cx} y1={cy - 6} x2={cx} y2={cy - 6 - 210}
            transform={`rotate(${i * 30} ${cx} ${cy - 6})`} stroke="#c9a24b" strokeWidth="0.5" opacity="0.4" />
        ))}
      </g>

      {/* Sun (top-right) */}
      <g transform="translate(508 150)">
        <g className="animate-spin-slow" style={{ transformOrigin: '0px 0px' }}>
          {Array.from({ length: 24 }).map((_, i) => (
            <polygon key={i} points="0,-70 6,-46 -6,-46" fill="#f2b333"
              transform={`rotate(${i * 15})`} opacity="0.9" />
          ))}
        </g>
        <circle r="46" fill="url(#ha-sun)" />
        <circle r="46" fill="none" stroke="#fff2d0" strokeWidth="1.5" opacity="0.6" />
      </g>

      {/* Compass */}
      <g transform={`translate(${cx} ${cy})`}>
        <circle r="176" fill="url(#ha-brass)" />
        <circle r="158" fill="url(#ha-brass2)" />
        <circle r="150" fill="url(#ha-face)" stroke="#a8801f" strokeWidth="1.5" />

        {/* tick ring */}
        <g stroke="#8a6b28">
          {Array.from({ length: 72 }).map((_, i) => (
            <line key={i} x1="0" y1="-146" x2="0" y2={i % 9 === 0 ? -132 : -140}
              strokeWidth={i % 9 === 0 ? 1.6 : 0.7} transform={`rotate(${i * 5})`} opacity="0.7" />
          ))}
        </g>

        {/* diagonal points */}
        <g>
          {[45, 135, 225, 315].map((d) => (
            <MainPoint key={d} rotate={d} radius={104} dark="#b0872f" light="#e6cf94" />
          ))}
        </g>
        {/* main coloured points */}
        <MainPoint rotate={0} dark="#8a1c2e" light="#c0455a" />   {/* N */}
        <MainPoint rotate={90} dark="#1c6f80" light="#37a0b4" />  {/* E */}
        <MainPoint rotate={180} dark="#9c2a54" light="#cf5a82" /> {/* S */}
        <MainPoint rotate={270} dark="#367336" light="#5aa35a" /> {/* W */}

        {/* centre hub */}
        <circle r="26" fill="url(#ha-brass)" stroke="#8a6220" strokeWidth="1.5" />
        <circle r="10" fill="#6d1a2d" />
        <circle r="4" fill="#e6cf94" />

        {/* cardinal letters */}
        {[['N', 0], ['E', 90], ['S', 180], ['W', 270]].map(([l, d]) => (
          <text key={l} x="0" y="-120" transform={`rotate(${d})`} textAnchor="middle"
            fontFamily="Marcellus, serif" fontSize="22" fill="#8a1c2e" fontWeight="600">{l}</text>
        ))}
      </g>
    </svg>
  )
}
