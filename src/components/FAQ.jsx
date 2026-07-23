import { useState } from 'react'
import { Eyebrow } from './ui.jsx'
import { IconPlus } from '../icons.jsx'
import { CompassRose } from './Decor.jsx'

const faqs = [
  { q: 'What is Vastu Shastra and how does it help?', a: 'Vastu Shastra is an ancient Indian science of architecture that helps create balanced and harmonious spaces. It improves health, wealth, relationships and overall well-being by aligning your environment with natural energies.' },
  { q: 'How is an astrology consultation conducted?', a: 'Your birth details are analysed to prepare a personalised chart. BL Gour then interprets planetary positions to offer clarity on career, relationships, health and timing of important decisions.' },
  { q: 'Can Vastu defects be corrected without major construction?', a: 'Yes. Most Vastu doshas can be corrected with simple, practical remedies — placement changes, colours, symbols and energy corrections — without demolition or costly renovation.' },
  { q: 'Do you offer online consultations?', a: 'Absolutely. Consultations are available both online and in-person. Online sessions are equally effective and convenient for clients across India and abroad.' },
  { q: 'How long does it take to see results?', a: 'Many clients notice positive shifts within a few weeks of applying the remedies. Lasting transformation typically unfolds gradually as the corrected energies settle in.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="bg-cream-100 py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 lg:grid-cols-[1fr_0.8fr] lg:px-8">
        <div>
          <div className="flex justify-start">
            <Eyebrow>Good to Know</Eyebrow>
          </div>
          <h2 className="mt-4 font-display text-3xl leading-tight text-maroon-800 sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i
              return (
                <div key={f.q} className={`overflow-hidden rounded-xl border transition-colors ${isOpen ? 'border-gold-400/50 bg-cream-50' : 'border-maroon-700/10 bg-cream-50'}`}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className={`text-[15px] font-medium ${isOpen ? 'text-maroon-700' : 'text-maroon-800'}`}>{f.q}</span>
                    <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 bg-maroon-700 text-cream-50' : 'bg-cream-200 text-maroon-700'}`}>
                      <IconPlus width={16} height={16} />
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-maroon-900/65">{f.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="sticky top-28 grid place-items-center">
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-full bg-gold-500/10 blur-2xl" />
              <CompassRose className="h-80 w-80 animate-floaty" />
            </div>
            <p className="mt-8 max-w-xs text-center font-serif-c text-lg italic text-maroon-900/60">
              “When your space is aligned, your life finds its true direction.”
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
