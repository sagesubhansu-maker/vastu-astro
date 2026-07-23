import { Button } from '../components/ui.jsx'
import { CompassRose } from '../components/Decor.jsx'
import { IconArrow } from '../icons.jsx'

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-gradient-to-b from-cream-100 to-cream-50 px-5 pt-32 pb-20 text-center">
      <div>
        <CompassRose className="mx-auto h-40 w-40 opacity-90" />
        <p className="mt-8 font-display text-6xl text-maroon-700">404</p>
        <h1 className="mt-2 font-display text-2xl text-maroon-800">This path lost its direction</h1>
        <p className="mx-auto mt-3 max-w-sm text-sm text-maroon-900/60">
          The page you're looking for doesn't exist. Let's guide you back to a balanced space.
        </p>
        <Button variant="primary" href="/" className="mt-7" icon={<IconArrow width={16} height={16} />}>
          Back to Home
        </Button>
      </div>
    </section>
  )
}
