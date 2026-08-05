'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'

const HeroMap = dynamic(() => import('./HeroMap'), { ssr: false })

/**
 * Reserva el espacio del mapa y solo lo monta cuando entra en viewport:
 * el LCP del hero es el titular, no Leaflet.
 */
export function HeroMapFrame({ description, caption }: { description: string; caption: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [mount, setMount] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(e => e.isIntersecting)) {
          setMount(true)
          observer.disconnect()
        }
      },
      { rootMargin: '120px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <figure className="relative w-full h-full m-0">
      <div
        ref={ref}
        className="absolute inset-0 overflow-hidden"
        style={{ background: 'var(--color-map-placeholder)' }}
        aria-hidden="true"
      >
        {mount && <HeroMap />}
      </div>

      {/* El mapa es decorativo; esto es lo que lee un lector de pantalla */}
      <figcaption className="sr-only">{description}</figcaption>

      <p
        className="absolute left-0 bottom-0 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] pointer-events-none"
        style={{ color: 'var(--color-text-primary)', background: 'var(--color-surface)' }}
      >
        {caption}
      </p>

      <p
        className="absolute right-2 bottom-1.5 text-[9px] pointer-events-none"
        style={{ color: 'var(--color-text-muted)', opacity: 0.7 }}
        aria-hidden="true"
      >
        © OpenStreetMap © CARTO
      </p>
    </figure>
  )
}
