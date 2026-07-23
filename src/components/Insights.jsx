import { SectionHeading, LinkArrow } from './ui.jsx'

function ArticleArt({ variant }) {
  const scenes = {
    home: (
      <svg viewBox="0 0 400 240" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="240" fill="#2a1a12" />
        <rect y="170" width="400" height="70" fill="#3a2418" />
        <ellipse cx="130" cy="150" rx="55" ry="18" fill="#1f130d" opacity="0.5" />
        <rect x="105" y="70" width="50" height="90" rx="8" fill="#c9a24b" />
        <rect x="118" y="45" width="24" height="30" rx="12" fill="#e6cf94" />
        <circle cx="130" cy="40" r="9" fill="#f0b429" />
        <rect x="250" y="95" width="90" height="70" rx="6" fill="#8a5a34" />
        <ellipse cx="295" cy="90" rx="40" ry="16" fill="#6d8f5a" />
      </svg>
    ),
    workspace: (
      <svg viewBox="0 0 400 240" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="240" fill="#e7ecf0" />
        <rect y="175" width="400" height="65" fill="#cdd6dd" />
        <rect x="120" y="70" width="160" height="105" rx="6" fill="#3a4a58" />
        <rect x="132" y="82" width="136" height="80" fill="#6b8299" />
        <circle cx="200" cy="122" r="26" fill="#c9a24b" opacity="0.85" />
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i} x1="200" y1="122" x2={200 + 26 * Math.cos(i * 0.785)} y2={122 + 26 * Math.sin(i * 0.785)} stroke="#e6cf94" strokeWidth="1" />
        ))}
      </svg>
    ),
    astro: (
      <svg viewBox="0 0 400 240" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="240" fill="#1c1226" />
        <circle cx="200" cy="120" r="80" fill="none" stroke="#c9a24b" strokeWidth="1.5" />
        <circle cx="200" cy="120" r="55" fill="none" stroke="#c9a24b" strokeWidth="1" opacity="0.6" />
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 30} 200 120)`}>
            <line x1="200" y1="40" x2="200" y2="65" stroke="#e6cf94" strokeWidth="1" opacity="0.7" />
          </g>
        ))}
        <circle cx="200" cy="120" r="8" fill="#e6cf94" />
        {Array.from({ length: 24 }).map((_, i) => (
          <circle key={'s' + i} cx={(i * 71) % 400} cy={(i * 53) % 240} r={i % 3 ? 1 : 1.8} fill="#f4ede0" opacity="0.5" />
        ))}
      </svg>
    ),
  }
  return scenes[variant]
}

const posts = [
  { variant: 'home', tag: 'Vastu Tips', title: '5 Vastu Tips for a Peaceful Home', text: 'Simple and practical tips to bring positivity and harmony to your home.' },
  { variant: 'workspace', tag: 'Workspace', title: 'Choosing the Right Direction for Your Workspace', text: 'Understand directions and their impact on productivity and success.' },
  { variant: 'astro', tag: 'Astrology', title: 'How Astrology Supports Better Decisions', text: 'Learn how your birth chart can guide you toward better choices.' },
]

export default function Insights() {
  return (
    <section id="insights" className="bg-cream-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="From the Journal" title="Insights & Guidance" subtitle="Practical wisdom on Vastu and Astrology to help you live in balance." />

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {posts.map(({ variant, tag, title, text }) => (
            <article key={title} className="group overflow-hidden rounded-2xl border border-maroon-700/10 bg-cream-50 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(109,26,45,0.4)]">
              <div className="relative h-48 overflow-hidden">
                <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                  <ArticleArt variant={variant} />
                </div>
                <span className="absolute left-4 top-4 rounded-full bg-cream-50/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-maroon-700 backdrop-blur">
                  {tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg leading-snug text-maroon-800 group-hover:text-maroon-700">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-maroon-900/60">{text}</p>
                <div className="mt-5 group">
                  <LinkArrow href="#">Read Article</LinkArrow>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
