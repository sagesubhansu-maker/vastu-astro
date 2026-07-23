import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from './ui.jsx'
import { IconSparkle } from '../icons.jsx'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Consultation', to: '/consultation' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <span className="grid h-11 w-11 place-items-center rounded-full border border-gold-400/70 bg-gradient-to-br from-maroon-700 to-maroon-900">
        <IconSparkle width={22} height={22} className="text-gold-300" />
      </span>
      <span className="leading-none">
        <span className="block font-display text-lg tracking-[0.14em] text-maroon-800">VASTU ASTRO</span>
        <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.34em] text-gold-600">by BL Gour</span>
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cream-50/90 shadow-[0_8px_30px_-15px_rgba(74,15,30,0.35)] backdrop-blur-md' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        <Logo />

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-gold-500 after:transition-all after:duration-300 hover:text-maroon-800 ${
                    isActive ? 'text-maroon-800 after:w-full' : 'text-maroon-900/75 after:w-0 hover:after:w-full'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button variant="primary" href="/contact" icon={<IconSparkle width={16} height={16} />}>
            Book Consultation
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-maroon-700/25 text-maroon-800 lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${open ? 'top-2 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition-all ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${open ? 'top-2 -rotate-45' : 'top-4'}`} />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`overflow-hidden bg-cream-50/98 backdrop-blur-md transition-all duration-300 lg:hidden ${open ? 'max-h-96 border-t border-maroon-700/10' : 'max-h-0'}`}>
        <ul className="space-y-1 px-5 py-4">
          {links.map((l) => (
            <li key={l.label}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2.5 text-sm font-medium ${isActive ? 'bg-maroon-50 text-maroon-800' : 'text-maroon-900/80 hover:bg-maroon-50'}`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <Button variant="primary" href="/contact" className="w-full" onClick={() => setOpen(false)}>Book Consultation</Button>
          </li>
        </ul>
      </div>
    </header>
  )
}
