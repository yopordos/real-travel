import type { LandingCopy } from '@/lib/landing-copy'
import { CONTAINER, SectionHead, Tick } from './primitives'

/**
 * Qué es y qué no: sin esto, "puntos, rutas y prestadores en una app" se lee
 * como marketplace. La columna de lo que no somos va en tono apagado — es
 * aclaración, no argumento de venta.
 */
export function Identity({ copy }: { copy: LandingCopy['identity'] }) {
  return (
    <section id="que-es" className="py-14 md:py-20 scroll-mt-20" style={{ background: 'var(--rt-surface)' }}>
      <div className={CONTAINER}>
        <SectionHead kicker={copy.kicker} title={copy.title} lead={copy.lead} />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div
            className="p-6"
            style={{
              background: 'var(--rt-surface)',
              border: '1px solid var(--rt-border-soft)',
              borderRadius: 'var(--rt-radius-lg)',
              boxShadow: 'var(--rt-shadow-xs)',
            }}
          >
            <h3 className="font-semibold" style={{ fontSize: '18px' }}>
              {copy.weAreTitle}
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {copy.weAre.map(item => (
                <li key={item} className="flex gap-2.5 text-[15px]" style={{ lineHeight: 1.45 }}>
                  <Tick />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="p-6"
            style={{
              background: 'var(--rt-sunken)',
              border: '1px solid var(--rt-border)',
              borderRadius: 'var(--rt-radius-lg)',
            }}
          >
            <h3 className="font-semibold" style={{ fontSize: '18px' }}>
              {copy.weAreNotTitle}
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {copy.weAreNot.map(item => (
                <li
                  key={item}
                  className="flex gap-2.5 text-[15px]"
                  style={{ lineHeight: 1.45, color: 'var(--rt-slate-60)' }}
                >
                  <span
                    className="shrink-0 text-[17px] font-bold leading-tight"
                    style={{ color: 'var(--rt-slate-40)' }}
                    aria-hidden="true"
                  >
                    ×
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
