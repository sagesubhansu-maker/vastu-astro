// Lightweight inline SVG icon set (stroke-based, currentColor)
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const IconHome = (p) => (
  <svg {...base} {...p}><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /><path d="M9.5 21v-6h5v6" /></svg>
)
export const IconBuilding = (p) => (
  <svg {...base} {...p}><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" /><path d="M10 21v-3h4v3" /></svg>
)
export const IconStars = (p) => (
  <svg {...base} {...p}><path d="M12 3v18M3 12h18" /><path d="M6.5 6.5 17.5 17.5M17.5 6.5 6.5 17.5" opacity=".5" /><circle cx="12" cy="12" r="3.2" /></svg>
)
export const IconLeaf = (p) => (
  <svg {...base} {...p}><path d="M4 20C4 11 11 4 20 4c0 9-7 16-16 16Z" /><path d="M4 20C8 16 12 12 16 8" /></svg>
)
export const IconHeart = (p) => (
  <svg {...base} {...p}><path d="M12 20s-7-4.6-9.2-9C1.3 8 3 4.8 6.2 4.8c1.9 0 3.2 1.1 3.8 2.2.6-1.1 1.9-2.2 3.8-2.2 3.2 0 4.9 3.2 3.4 6.2C19 15.4 12 20 12 20Z" /></svg>
)
export const IconUsers = (p) => (
  <svg {...base} {...p}><circle cx="9" cy="8" r="3.2" /><path d="M3.5 20a5.5 5.5 0 0 1 11 0" /><path d="M16 5.2a3.2 3.2 0 0 1 0 6.1M17 20a5.5 5.5 0 0 0-3-4.9" /></svg>
)
export const IconGrowth = (p) => (
  <svg {...base} {...p}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /><path d="M3 8l5-4 4 3 6-5" opacity=".6" /></svg>
)
export const IconPeace = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 3v18M12 12 5.6 18.4M12 12l6.4 6.4" /></svg>
)
export const IconCalendar = (p) => (
  <svg {...base} {...p}><rect x="3" y="4.5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v3M16 3v3" /></svg>
)
export const IconNote = (p) => (
  <svg {...base} {...p}><path d="M5 3h9l5 5v13H5Z" /><path d="M14 3v5h5" /><path d="M8 13h7M8 17h5" /></svg>
)
export const IconChart = (p) => (
  <svg {...base} {...p}><path d="M12 3a9 9 0 1 0 9 9h-9Z" /><path d="M12 3v9h9A9 9 0 0 0 12 3Z" opacity=".55" /></svg>
)
export const IconSparkle = (p) => (
  <svg {...base} {...p}><path d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6Z" /><path d="M18 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7Z" opacity=".7" /></svg>
)
export const IconPhone = (p) => (
  <svg {...base} {...p}><path d="M6.5 3.5 9 4l1 3.5-2 1.4a12 12 0 0 0 5.6 5.6L15 12.5l3.5 1 .5 2.5c0 1-1 2-2 2A15 15 0 0 1 4.5 5.5c0-1 1-2 2-2Z" /></svg>
)
export const IconMail = (p) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 6.5 8.5 6 8.5-6" /></svg>
)
export const IconPin = (p) => (
  <svg {...base} {...p}><path d="M12 21c4-4.5 7-7.7 7-11a7 7 0 1 0-14 0c0 3.3 3 6.5 7 11Z" /><circle cx="12" cy="10" r="2.6" /></svg>
)
export const IconGlobe = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.6 2.4 4 5.6 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.6-4-9s1.4-6.6 4-9Z" /></svg>
)
export const IconStar = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2.5l2.9 6.2 6.6.7-4.9 4.5 1.3 6.6L12 17.9 6.1 20.9l1.3-6.6L2.5 9.4l6.6-.7Z" /></svg>
)
export const IconArrow = (p) => (
  <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
export const IconPlus = (p) => (
  <svg {...base} {...p}><path d="M12 5v14M5 12h14" /></svg>
)
export const IconQuote = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M9 6c-3 1-5 3.5-5 7v5h6v-6H6.5C6.7 9.5 8 8 10 7.2ZM20 6c-3 1-5 3.5-5 7v5h6v-6h-3.5c.2-2.5 1.5-4 3.5-4.8Z" /></svg>
)
export const IconChevron = (p) => (
  <svg {...base} {...p}><path d="m9 6 6 6-6 6" /></svg>
)
