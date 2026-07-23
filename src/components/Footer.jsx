import { useState } from 'react'
import { IconSparkle, IconPhone, IconMail, IconGlobe, IconPin, IconArrow } from '../icons.jsx'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Consultation', href: '#process' },
  { label: 'Blog', href: '#insights' },
  { label: 'Contact', href: '#contact' },
]

const services = ['Residential Vastu', 'Commercial Vastu', 'Astrology Consultation', 'Vastu Remedies', 'Online Consultation']

const contact = [
  { icon: IconPhone, text: '+91 98765-43210', href: 'tel:+919876543210' },
  { icon: IconMail, text: 'info@vastuastro.in', href: 'mailto:info@vastuastro.in' },
  { icon: IconGlobe, text: 'www.vastuastro.in', href: '#' },
  { icon: IconPin, text: 'New Delhi, India', href: '#' },
]

function Social({ label, children }) {
  return (
    <a href="#" aria-label={label} className="grid h-9 w-9 place-items-center rounded-full border border-gold-300/30 text-gold-300 transition-colors hover:bg-gold-500 hover:text-maroon-900">
      {children}
    </a>
  )
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-maroon-800 to-maroon-900 text-cream-100">
      <div className="mandala-bg pointer-events-none absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full border border-gold-400/60 bg-maroon-900">
                <IconSparkle width={22} height={22} className="text-gold-300" />
              </span>
              <span className="leading-none">
                <span className="block font-display text-lg tracking-[0.14em] text-cream-50">VASTU ASTRO</span>
                <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.34em] text-gold-300">by BL Gour</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-100/65">
              Personalised Vastu and Astrology guidance for harmony, clarity and success in your home,
              business and life.
            </p>
            <div className="mt-6 flex gap-3">
              <Social label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1Z" /></svg></Social>
              <Social label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg></Social>
              <Social label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.5 12 5.5 12 5.5s-6 0-7.9.6A3 3 0 0 0 2 8.2 31 31 0 0 0 2 12a31 31 0 0 0 .1 3.8 3 3 0 0 0 2.1 2.1c1.9.6 7.8.6 7.8.6s6 0 7.9-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.0-3.8ZM10 15V9l5 3Z" /></svg></Social>
              <Social label="WhatsApp"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2Zm5 14c-.2.6-1.2 1.1-1.7 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6a9 9 0 0 1-3.5-3.1c-.3-.4-.9-1.3-.9-2.4s.6-1.7.8-1.9c.2-.2.4-.3.6-.3h.4c.2 0 .4 0 .5.4l.7 1.6c.1.1 0 .3 0 .4l-.3.4c-.2.2-.3.3-.1.5.5.9 1 1.3 1.8 1.8.2.1.4.1.5-.1l.5-.6c.2-.2.3-.2.5-.1l1.5.7c.2.1.4.2.4.3.1.2.1.6-.1 1Z" /></svg></Social>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base tracking-wide text-cream-50">Quick Links</h4>
            <ul className="mt-5 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-cream-100/65 transition-colors hover:text-gold-300">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-base tracking-wide text-cream-50">Services</h4>
            <ul className="mt-5 space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-cream-100/65 transition-colors hover:text-gold-300">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="font-display text-base tracking-wide text-cream-50">Contact</h4>
            <ul className="mt-5 space-y-3">
              {contact.map(({ icon: Icon, text, href }) => (
                <li key={text}>
                  <a href={href} className="flex items-center gap-3 text-sm text-cream-100/70 transition-colors hover:text-gold-300">
                    <Icon width={17} height={17} className="text-gold-300" />
                    {text}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="mt-7 font-display text-base tracking-wide text-cream-50">Newsletter</h4>
            <p className="mt-2 text-xs leading-relaxed text-cream-100/60">Subscribe to get tips and insights on Vastu & Astrology.</p>
            <form
              onSubmit={(e) => { e.preventDefault(); if (email) { setSent(true); setEmail('') } }}
              className="mt-3 flex overflow-hidden rounded-full border border-gold-300/30 bg-maroon-900/50"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => { setEmail(e.target.value); setSent(false) }}
                placeholder="Enter your email"
                className="w-full bg-transparent px-4 py-2.5 text-sm text-cream-50 placeholder:text-cream-100/40 focus:outline-none"
              />
              <button type="submit" aria-label="Subscribe" className="grid w-11 shrink-0 place-items-center bg-gradient-to-b from-gold-400 to-gold-600 text-maroon-900 transition hover:from-gold-300">
                <IconArrow width={18} height={18} />
              </button>
            </form>
            {sent && <p className="mt-2 text-xs text-gold-300">Thank you for subscribing!</p>}
          </div>
        </div>

        <div className="mt-14 border-t border-gold-300/15 pt-6 text-center">
          <p className="text-xs text-cream-100/55">© 2026 Vastu Astro by BL Gour. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
