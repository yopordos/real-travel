import type { LandingCopy } from '@/lib/landing-copy'
import { CONTAINER, Kicker } from './primitives'

/**
 * Cierre del argumento, en franja compacta: el título a la izquierda y los
 * cuatro motivos en columnas sin caja. Encajonarlos duplicaba la altura sin
 * añadir información.
 */
export function WhyUs({ copy }: { copy: LandingCopy['why'] }) {
  return (
    <section id="por-que" className="py-14 md:py-20 scroll-mt-20" style={{ background: 'var(--rt-sunken)' }}>
      <div className={CONTAINER}>
        <div className="grid gap-8 lg:gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <Kicker>{copy.kicker}</Kicker>
            <h2
              className="mt-4 font-semibold max-w-[16ch]"
              style={{ fontSize: 'clamp(24px, 2.8vw, 30px)', lineHeight: 1.12 }}
            >
              {copy.title}
            </h2>
          </div>

          <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {copy.items.map(item => (
              <div key={item.title}>
                <dt className="font-semibold" style={{ fontSize: '16px', lineHeight: 1.3 }}>
                  {item.title}
                </dt>
                <dd
                  className="mt-1.5 text-[14px]"
                  style={{ lineHeight: 1.5, color: 'var(--rt-slate-60)' }}
                >
                  {item.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
