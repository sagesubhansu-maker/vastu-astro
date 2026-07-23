import { useState } from 'react'
import { IconPhone, IconMail, IconPin, IconGlobe, IconArrow } from '../icons.jsx'

const details = [
  { icon: IconPhone, label: 'Phone', value: '+91 98765-43210', href: 'tel:+919876543210' },
  { icon: IconMail, label: 'Email', value: 'info@vastuastro.in', href: 'mailto:info@vastuastro.in' },
  { icon: IconGlobe, label: 'Website', value: 'www.vastuastro.in', href: '#' },
  { icon: IconPin, label: 'Location', value: 'New Delhi, India', href: '#' },
]

const services = ['Residential Vastu', 'Commercial Vastu', 'Astrology Consultation', 'Vastu Remedies', 'Online Consultation']

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: services[0], message: '' })
  const set = (k) => (e) => { setForm((f) => ({ ...f, [k]: e.target.value })); setSent(false) }

  const submit = (e) => {
    e.preventDefault()
    // No backend yet — show a friendly confirmation.
    setSent(true)
  }

  return (
    <section className="bg-cream-50 py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        {/* Contact details */}
        <div className="flex flex-col justify-center">
          <h2 className="font-display text-3xl text-maroon-800 sm:text-4xl">Let's Connect</h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-maroon-900/65">
            Have a question or ready to book your consultation? Reach out and BL Gour's team will
            get back to you within one business day.
          </p>

          <div className="mt-8 space-y-4">
            {details.map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} className="group flex items-center gap-4 rounded-2xl border border-maroon-700/10 bg-cream-100 p-4 transition-colors hover:border-gold-400/50">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-maroon-700 to-maroon-900 text-gold-300">
                  <Icon width={22} height={22} />
                </span>
                <span>
                  <span className="block text-[11px] font-medium uppercase tracking-widest text-gold-600">{label}</span>
                  <span className="block text-sm font-semibold text-maroon-800">{value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="rounded-3xl border border-maroon-700/10 bg-cream-100 p-7 shadow-sm lg:p-9">
          <h3 className="font-display text-2xl text-maroon-800">Book Your Consultation</h3>
          <p className="mt-1.5 text-sm text-maroon-900/60">Fill in your details and we'll be in touch shortly.</p>

          <form onSubmit={submit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" required>
                <input required value={form.name} onChange={set('name')} type="text" placeholder="Your name" className={inputCls} />
              </Field>
              <Field label="Phone" required>
                <input required value={form.phone} onChange={set('phone')} type="tel" placeholder="+91 …" className={inputCls} />
              </Field>
            </div>
            <Field label="Email" required>
              <input required value={form.email} onChange={set('email')} type="email" placeholder="you@example.com" className={inputCls} />
            </Field>
            <Field label="Service Interested In">
              <select value={form.service} onChange={set('service')} className={inputCls}>
                {services.map((s) => <option key={s}>{s}</option>)}
              </select>
            </Field>
            <Field label="Message">
              <textarea value={form.message} onChange={set('message')} rows={4} placeholder="Tell us a little about your space or question…" className={`${inputCls} resize-none`} />
            </Field>

            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-maroon-700 px-6 py-3 text-sm font-medium tracking-wide text-cream-50 shadow-[0_10px_30px_-10px_rgba(109,26,45,0.55)] transition-all duration-300 hover:bg-maroon-800"
            >
              Send Message
              <IconArrow width={16} height={16} className="transition-transform group-hover:translate-x-1" />
            </button>

            {sent && (
              <p className="rounded-xl bg-maroon-700/10 px-4 py-3 text-center text-sm font-medium text-maroon-700">
                🙏 Thank you, {form.name || 'friend'}! Your request has been received. We'll reach out soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

const inputCls =
  'w-full rounded-xl border border-maroon-700/15 bg-cream-50 px-4 py-2.5 text-sm text-maroon-900 placeholder:text-maroon-900/35 transition-colors focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20'

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-maroon-900/60">
        {label}{required && <span className="text-gold-600"> *</span>}
      </span>
      {children}
    </label>
  )
}
