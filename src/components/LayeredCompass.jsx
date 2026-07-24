const asset = (file) => `${import.meta.env.BASE_URL}${file}`

// Three transparent PNG/WebP layers stacked centre-aligned, each rotating 360°.
// Order: ring (bottom) → ticks+diagonals (middle) → cardinal cross (top).
const layers = [
  { src: 'compass-1-ring.webp', spin: '' }, // static — no rotation
  { src: 'compass-2-ticks.webp', spin: 'spin-layer-2' },
  { src: 'compass-3-cross.webp', spin: 'spin-layer-3' },
]

export default function LayeredCompass({ className = '' }) {
  return (
    <div className={`relative aspect-square ${className}`} aria-hidden="true">
      {layers.map((l, i) => (
        <img
          key={l.src}
          src={asset(l.src)}
          alt=""
          className={`absolute inset-0 h-full w-full object-contain ${l.spin}`}
          style={{ zIndex: i, transformOrigin: '50% 50%' }}
        />
      ))}
    </div>
  )
}
