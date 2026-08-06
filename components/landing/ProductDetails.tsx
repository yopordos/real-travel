import type { LandingCopy } from '@/lib/landing-copy'
import { CONTAINER, Tick } from './primitives'

/**
 * El detalle de cada producto en <details> nativo: se abre con teclado, funciona
 * sin JavaScript y el navegador lo despliega solo al saltar desde el enlace
 * "Ver qué incluye". El primero viene abierto para que la sección no parezca vacía.
 */
export function ProductDetails({ copy }: { copy: LandingCopy['products'] }) {
  return (
    <section className="pb-16 md:pb-24" style={{ background: 'var(--rt-surface)' }}>
      <div className={CONTAINER}>
        <div className="flex flex-col gap-4">
          {copy.items.map((product, i) => (
            <details
              key={product.id}
              id={product.id}
              open={i === 0}
              className="group scroll-mt-20"
              style={{
                border: '1px solid var(--rt-border-soft)',
                borderRadius: 'var(--rt-radius-lg)',
                background: 'var(--rt-surface)',
              }}
            >
              <summary className="flex items-start gap-4 p-6 list-none [&::-webkit-details-marker]:hidden">
                <span className="flex-1">
                  <span className="block font-semibold" style={{ fontSize: '18px', lineHeight: 1.28 }}>
                    {product.detailTitle}
                  </span>
                  <span
                    className="block mt-1 text-[13px]"
                    style={{ color: 'var(--rt-slate-40)', lineHeight: 1.45 }}
                  >
                    {product.detailAudience}
                  </span>
                </span>

                <span
                  className="flex items-center justify-center w-8 h-8 shrink-0 text-[18px] font-semibold leading-none"
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
                <div
                  className="grid gap-8 md:grid-cols-2 pt-6"
                  style={{ borderTop: '1px solid var(--rt-border-soft)' }}
                >
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
                      <ul className="mt-4 flex flex-col gap-3">
                        {block.rows.map(row => (
                          <li key={row} className="flex gap-3 text-[15px]" style={{ lineHeight: 1.5 }}>
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
                    className="mt-6 text-[14px] italic"
                    style={{ color: 'var(--rt-slate-60)', lineHeight: 1.5 }}
                  >
                    {product.note}
                  </p>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
