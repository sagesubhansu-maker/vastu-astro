import { Eyebrow } from './ui.jsx'
import { IconHeart, IconUsers, IconGrowth, IconPeace } from '../icons.jsx'

const items = [
  { icon: IconHeart, title: 'Health & Wellbeing', text: 'Enhance physical and mental health with balanced energies.' },
  { icon: IconGrowth, title: 'Career & Growth', text: 'Unlock new opportunities and achieve your professional goals.' },
  { icon: IconUsers, title: 'Relationships', text: 'Strengthen bonds and create harmonious relationships.' },
  { icon: IconPeace, title: 'Peace & Prosperity', text: 'Attract abundance, peace and long-lasting prosperity.' },
]

function Item({ icon: Icon, title, text }) {
  return (
    <div className="flex items-center gap-5 rounded-2xl border border-gold-300/15 bg-white/[0.03] p-5 transition-colors hover:border-gold-300/40 hover:bg-white/[0.06]">
      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-gold-300/40 text-gold-300">
        <Icon width={26} height={26} />
      </span>
      <div>
        <h4 className="text-lg font-semibold text-cream-50">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-cream-100/65">{text}</p>
      </div>
    </div>
  )
}

export default function Balance() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-maroon-800 via-maroon-900 to-maroon-800 py-20 lg:py-24">
      <div className="mandala-bg pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-2xl px-5 lg:px-8">
        <div className="text-center">
          <Eyebrow dark>Complete Harmony</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl leading-tight text-cream-50 sm:text-4xl">
            Balance Every Direction of Your Life
          </h2>
        </div>

        {/* Items stacked one above another */}
        <div className="mt-12 space-y-4">
          {items.map((it) => <Item key={it.title} {...it} />)}
        </div>
      </div>
    </section>
  )
}
