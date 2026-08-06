import Image from 'next/image'
import type { LandingCopy } from '@/lib/landing-copy'
import { CONTAINER, SectionHead } from './primitives'

/**
 * Fotografía de viaje con el tratamiento que fija el design system: imágenes
 * cálidas a 12px de radio, texto blanco siempre sobre scrim, nunca directo
 * sobre la foto.
 */
export function Showcase({ copy }: { copy: LandingCopy['showcase'] }) {
  return (
    <section className="pb-16 md:pb-24">
      <div className={CONTAINER}>
        <SectionHead kicker={copy.kicker} title={copy.title} lead={copy.lead} />

        <div className="mt-10 grid gap-4 grid-cols-2 lg:grid-cols-4">
          {copy.items.map(item => (
            <figure
              key={item.src}
              className="relative m-0 overflow-hidden"
              style={{
                borderRadius: 'var(--rt-radius)',
                aspectRatio: '4 / 5',
                boxShadow: 'var(--rt-shadow-sm)',
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(12,12,19,0.78) 0%, rgba(12,12,19,0.35) 40%, rgba(12,12,19,0) 78%)',
                }}
                aria-hidden="true"
              />
              <figcaption className="absolute left-3.5 bottom-3.5">
                <span
                  className="inline-flex px-2.5 py-1 text-[11px] font-semibold"
                  style={{
                    background: 'var(--rt-red-700)',
                    color: 'var(--rt-white-text)',
                    borderRadius: 'var(--rt-radius-pill)',
                    boxShadow: 'var(--rt-shadow-brand)',
                  }}
                >
                  {item.label}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
