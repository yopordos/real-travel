import type { LandingCopy } from '@/lib/landing-copy'
import { CONTAINER, Kicker, SectionHead, Tick } from './primitives'

const CARD: React.CSSProperties = {
  background: 'var(--rt-surface)',
  border: '1px solid var(--rt-border-soft)',
  borderRadius: 'var(--rt-radius-lg)',
  boxShadow: 'var(--rt-shadow-xs)',
}

/**
 * Catálogo y detalle en una sola pieza: cada producto es un <details> que se
 * abre en su propia tarjeta. Nativo — funciona con teclado y sin JavaScript.
 * El grid alinea al inicio para que abrir una tarjeta no estire a sus vecinas.
 */
export function Products({ copy }: { copy: LandingCopy['products'] }) {
  return (
    <section id="productos" className="py-16 md:py-24 scroll-mt-20" style={{ background: 'var(--rt-surface)' }}>
      <div className={CONTAINER}>
        <SectionHead kicker={copy.kicker} title={copy.title} lead={copy.lead} />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 items-start">
          {copy.items.map(product => (
            <details key={product.id} id={product.id} className="group scroll-mt-24" style={CARD}>
              <summary className="p-6 list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                <Kicker>{product.segment}</Kicker>

                <span className="block mt-3 font-semibold" style={{ fontSize: '20px', lineHeight: 1.24 }}>
                  {product.name}
                </span>
                <span
                  className="block mt-2 text-[13px]"
                  style={{ color: 'var(--rt-slate-40)', lineHeight: 1.45 }}
                >
                  {product.audience}
                </span>
                <span
                  className="block mt-4 text-[15px]"
                  style={{ color: 'var(--rt-slate-60)', lineHeight: 1.5 }}
                >
                  {product.pitch}
                </span>

                <span
                  className="flex items-center justify-center w-9 h-9 mt-6 text-[20px] font-semibold leading-none"
                  style={{
                    background: 'var(--rt-red-50)',
                    color: 'var(--rt-red-700)',
                    borderRadius: 'var(--rt-radius-pill)',
                  }}
                  aria-hidden="true"
                >
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>

              <div className="px-6 pb-6">
                <div className="pt-6 flex flex-col gap-6" style={{ borderTop: '1px solid var(--rt-border-soft)' }}>
                  {[
                    { title: copy.detailIncludes, rows: product.includes },
                    { title: copy.detailBenefits, rows: product.benefits },
                  ].map(block => (
                    <div key={block.title}>
                      <h4
                        className="text-[11px] font-semibold uppercase"
                        style={{ letterSpacing: '0.08em', color: 'var(--rt-slate-40)' }}
                      >
                        {block.title}
                      </h4>
                      <ul className="mt-3 flex flex-col gap-2.5">
                        {block.rows.map(row => (
                          <li key={row} className="flex gap-2.5 text-[14px]" style={{ lineHeight: 1.5 }}>
                            <Tick />
                            <span>{row}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {product.note && (
                  <p
                    className="mt-5 text-[13px] italic"
                    style={{ color: 'var(--rt-slate-60)', lineHeight: 1.5 }}
                  >
                    {product.note}
                  </p>
                )}
              </div>
            </details>
          ))}

          <div className="p-6" style={CARD}>
            <h3 className="font-semibold" style={{ fontSize: '20px', lineHeight: 1.24 }}>
              {copy.helpTitle}
            </h3>
            <p className="mt-3 text-[15px]" style={{ color: 'var(--rt-slate-60)', lineHeight: 1.5 }}>
              {copy.helpBody}
            </p>
            <a
              href="#contacto"
              className="mt-6 inline-flex px-5 py-2.5 text-[14px] font-semibold"
              style={{
                background: 'var(--rt-red-700)',
                color: 'var(--rt-white-text)',
                borderRadius: 'var(--rt-radius)',
              }}
            >
              {copy.helpCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
