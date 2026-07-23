# Vastu Astro — by BL Gour

A modern, responsive marketing website for a Vastu Shastra & Vedic Astrology consultant,
built with **React + Vite + Tailwind CSS v4**. All artwork (compass rose, mandalas, sun,
scenes, portrait) is hand-drawn inline SVG — no external image assets or paid stock.

## Tech stack
- React 18 + Vite 6
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Google Fonts: Marcellus / Cormorant Garamond (display & serif), Poppins (body)

## Getting started
```bash
npm install
npm run dev      # http://localhost:5173
```

Build for production:
```bash
npm run build
npm run preview
```

## Sections
Navbar (sticky, mobile menu) · Hero · Our Services · Why Choose BL Gour · About ·
How Your Consultation Works · Solutions for Every Space · Balance Every Direction ·
Testimonials (carousel) · Insights & Guidance · FAQ (accordion) · Final CTA · Footer
(quick links, services, contact, newsletter).

## Project structure
```
src/
  App.jsx                # assembles all sections + scroll-reveal
  index.css              # Tailwind theme tokens (maroon/gold/cream) + animations
  icons.jsx              # inline SVG icon set
  components/
    Decor.jsx            # CompassRose, Mandala, SunMotif SVG art
    ui.jsx               # Button, SectionHeading, Eyebrow, LinkArrow
    Navbar.jsx  Hero.jsx  Services.jsx  WhyChoose.jsx  About.jsx
    Process.jsx  Solutions.jsx  Balance.jsx  Testimonials.jsx
    Insights.jsx  FAQ.jsx  CTA.jsx  Footer.jsx
```

## Customising
- **Colors / fonts:** edit the `@theme` block in `src/index.css`.
- **Content:** each section keeps its data in a small array at the top of its file.
- **Portrait / branding:** swap the SVG placeholder in `About.jsx` and the logo mark in
  `Navbar.jsx` / `Footer.jsx` with real assets when available.
