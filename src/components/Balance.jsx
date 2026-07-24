import { Eyebrow } from './ui.jsx'
import LayeredCompass from './LayeredCompass.jsx'
import { IconHeart, IconUsers, IconGrowth, IconPeace } from '../icons.jsx'

const left = [
  { icon: IconHeart, title: 'Health & Wellbeing', text: 'Enhance physical and mental health with balanced energies.' },
  { icon: IconGrowth, title: 'Career & Growth', text: 'Unlock new opportunities and achieve your professional goals.' },
]
const right = [
  { icon: IconUsers, title: 'Relationships', text: 'Strengthen bonds and create harmonious relationships.' },
  { icon: IconPeace, title: 'Peace & Prosperity', text: 'Attract abundance, peace and long-lasting prosperity.' },
]

function Item({ icon: Icon, title, text, align }) {
  return (
    <div className={`flex gap-4 ${align === 'right' ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold-300/40 text-gold-300">
        <Icon width={24} height={24} />
      </span>
      <div>
        <h4 className="text-base font-semibold text-cream-50">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-cream-100/65">{text}</p>
      </div>
    </div>
  )
}

export default function Balance() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-maroon-800 via-maroon-900 to-maroon-800 py-20 lg:py-24">
      <div className="mandala-bg pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <Eyebrow dark>Complete Harmony</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl leading-tight text-cream-50 sm:text-4xl">
            Balance Every Direction of Your Life
          </h2>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          <div className="order-2 space-y-10 lg:order-1">
            {left.map((it) => <Item key={it.title} {...it} align="left" />)}
          </div>

          {/* Rotating layered compass */}
          <div className="order-1 mx-auto w-64 sm:w-72 lg:order-2 lg:w-full lg:max-w-sm">
            <LayeredCompass className="drop-shadow-[0_20px_50px_rgba(0,0,0,0.35)]" />
          </div>

          <div className="order-3 space-y-10">
            {right.map((it) => <Item key={it.title} {...it} align="right" />)}
          </div>
        </div>
      </div>
    </section>
  )
}
