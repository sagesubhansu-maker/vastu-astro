import { useState } from 'react'
import { SectionHeading } from './ui.jsx'
import { IconStar, IconChevron } from '../icons.jsx'

const testimonials = [
  { name: 'Anjali Sharma', place: 'Mumbai', initials: 'AS', text: 'Our home feels so peaceful and positive after following BL Gour\'s Vastu guidance. We\'ve seen real improvements in health and happiness.' },
  { name: 'Rohit Mehta', place: 'Bangalore', initials: 'RM', text: 'The commercial Vastu consultation helped our business grow steadily. Highly professional and effective advice!' },
  { name: 'Priya Iyer', place: 'Chennai', initials: 'PI', text: 'Astrology consultation with BL Gour gave me clarity and confidence to make important life decisions.' },
  { name: 'Vikram Nair', place: 'Pune', initials: 'VN', text: 'Simple, practical remedies that actually worked. The positive shift in our family\'s energy has been remarkable.' },
  { name: 'Sunita Rao', place: 'Hyderabad', initials: 'SR', text: 'Warm, insightful and genuine guidance. I finally understand how to align my space with my goals.' },
]

const avatarBg = ['from-gold-400 to-gold-600', 'from-maroon-600 to-maroon-800', 'from-gold-500 to-maroon-700']

export default function Testimonials() {
  const [start, setStart] = useState(0)
  const visible = 3
  const max = testimonials.length - visible
  const prev = () => setStart((s) => Math.max(0, s - 1))
  const next = () => setStart((s) => Math.min(max, s + 1))

  return (
    <section className="bg-cream-100 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Kind Words" title="What Our Clients Say" subtitle="Real stories from families and businesses whose lives found new balance." />

        <div className="relative mt-14">
          <div className="flex items-stretch gap-6">
            <button aria-label="Previous" onClick={prev} disabled={start === 0}
              className="hidden h-11 w-11 shrink-0 place-items-center self-center rounded-full border border-maroon-700/25 text-maroon-700 transition hover:bg-maroon-700 hover:text-cream-50 disabled:opacity-30 sm:grid">
              <IconChevron width={20} height={20} className="rotate-180" />
            </button>

            <div className="grid flex-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.slice(start, start + visible).map((t, i) => (
                <article key={t.name} className="flex flex-col rounded-2xl border border-maroon-700/10 bg-cream-50 p-7 shadow-sm">
                  <div className="flex gap-1 text-gold-500">
                    {Array.from({ length: 5 }).map((_, k) => <IconStar key={k} width={16} height={16} />)}
                  </div>
                  <p className="mt-4 flex-1 font-serif-c text-[17px] italic leading-relaxed text-maroon-900/75">
                    “{t.text}”
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-maroon-700/10 pt-5">
                    <span className={`grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br ${avatarBg[(start + i) % avatarBg.length]} text-sm font-semibold text-cream-50`}>
                      {t.initials}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-maroon-800">{t.name}</div>
                      <div className="text-xs text-maroon-900/50">{t.place}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <button aria-label="Next" onClick={next} disabled={start === max}
              className="hidden h-11 w-11 shrink-0 place-items-center self-center rounded-full border border-maroon-700/25 text-maroon-700 transition hover:bg-maroon-700 hover:text-cream-50 disabled:opacity-30 sm:grid">
              <IconChevron width={20} height={20} />
            </button>
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: max + 1 }).map((_, i) => (
              <button key={i} aria-label={`Go to slide ${i + 1}`} onClick={() => setStart(i)}
                className={`h-2 rounded-full transition-all ${i === start ? 'w-6 bg-maroon-700' : 'w-2 bg-maroon-700/25'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
