import type { LandingCopy } from '@/lib/landing-copy'
import { MockDestino, MockPanel, MockPrestador } from './Mocks'

/**
 * Indicador de capa: tres trazos apilados, el de esta capa marcado.
 * Encoda cuál de las tres capas del territorio se está leyendo — no son pasos,
 * por eso no van numeradas.
 */
function LayerMark({ index }: { index: number }) {
  return (
    <span className="flex flex-col gap-[3px] shrink-0 pt-[7px]" aria-hidden="true">
      {[0, 1, 2].map(i => (
        <span
          key={i}
          className="block rounded-full transition-none"
          style={{
            width: i === index ? '26px' : '16px',
            height: '2px',
            background: i === index ? 'var(--color-crimson)' : 'var(--color-text-muted)',
            opacity: i === index ? 1 : 0.35,
          }}
        />
      ))}
    </span>
  )
}

export function Layers({ copy }: { copy: LandingCopy }) {
  const mocks = {
    destino: <MockDestino copy={copy.mocks.destino} />,
    panel: <MockPanel copy={copy.mocks.panel} />,
    prestador: <MockPrestador copy={copy.mocks.prestador} />,
  }

  return (
    <section id="plataforma" className="mx-auto max-w-[1180px] px-6 pt-24 md:pt-32 scroll-mt-20">
      <div className="max-w-[52ch]">
        <p
          className="text-[11px] font-semibold uppercase mb-5"
          style={{ color: 'var(--color-text-muted)', letterSpacing: '0.14em' }}
        >
          {copy.layers.sectionKicker}
        </p>
        <h2
          className="font-bold"
          style={{
            fontSize: 'clamp(30px, 3.8vw, 44px)',
            lineHeight: 1.08,
            letterSpacing: '-0.025em',
          }}
        >
          {copy.layers.sectionTitle}
        </h2>
        <p
          className="mt-5"
          style={{ color: 'var(--color-text-muted)', fontSize: '16px', lineHeight: 1.65 }}
        >
          {copy.layers.sectionLead}
        </p>
      </div>

      <div className="mt-16 md:mt-20 flex flex-col gap-20 md:gap-28">
        {copy.layers.items.map((layer, i) => {
          const reversed = i % 2 === 1
          return (
            <article
              key={layer.id}
              className="grid gap-8 md:gap-14 md:grid-cols-2 md:items-center"
              style={{ borderTop: '1px solid var(--color-border)', paddingTop: '40px' }}
            >
              <div className={reversed ? 'md:order-2' : ''}>
                <div className="flex gap-3.5 mb-5">
                  <LayerMark index={i} />
                  <span
                    className="text-[11px] font-semibold uppercase"
                    style={{ color: 'var(--color-crimson)', letterSpacing: '0.14em' }}
                  >
                    {layer.layer}
                  </span>
                </div>

                <h3
                  className="font-bold max-w-[20ch]"
                  style={{
                    fontSize: 'clamp(24px, 2.9vw, 33px)',
                    lineHeight: 1.12,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {layer.title}
                </h3>
                <p
                  className="mt-4 max-w-[44ch]"
                  style={{ color: 'var(--color-text-muted)', fontSize: '16px', lineHeight: 1.65 }}
                >
                  {layer.body}
                </p>
              </div>

              <div className={reversed ? 'md:order-1' : ''}>
                {mocks[layer.mock]}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
