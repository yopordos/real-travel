import type { LandingCopy } from '@/lib/landing-copy'
import { CONTAINER, SectionHead } from './primitives'

/**
 * Los tres puntos van como lista con reglas, no como tarjetas: son una línea
 * cada uno y encajonarlos solo añadía altura.
 */
export function Problem({ copy }: { copy: LandingCopy['problem'] }) {
  return (
    <section id="problema" className="py-14 md:py-20 scroll-mt-20" style={{ background: 'var(--rt-surface)' }}>
      <div
        className={`${CONTAINER} grid gap-10 lg:gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center`}
      >
        <SectionHead kicker={copy.kicker} title={copy.title} lead={copy.lead} />

        <dl className="flex flex-col">
          {copy.items.map(item => (
            <div key={item.title} className="py-5" style={{ borderTop: '1px solid var(--rt-border-soft)' }}>
              <dt className="font-semibold" style={{ fontSize: '17px', lineHeight: 1.3 }}>
                {item.title}
              </dt>
              <dd
                className="mt-1.5 text-[15px]"
                style={{ lineHeight: 1.5, color: 'var(--rt-slate-60)' }}
              >
                {item.body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
