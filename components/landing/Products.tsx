import type { LandingCopy } from '@/lib/landing-copy'
import { CONTAINER, Card, Kicker, SectionHead } from './primitives'

export function Products({ copy }: { copy: LandingCopy['products'] }) {
  return (
    <section id="productos" className="py-16 md:py-24 scroll-mt-20" style={{ background: 'var(--rt-surface)' }}>
      <div className={CONTAINER}>
        <SectionHead kicker={copy.kicker} title={copy.title} lead={copy.lead} />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {copy.items.map(product => (
            <article
              key={product.id}
              className="flex flex-col p-6"
              style={{
                background: 'var(--rt-surface)',
                border: '1px solid var(--rt-border-soft)',
                borderRadius: 'var(--rt-radius-lg)',
                boxShadow: 'var(--rt-shadow-xs)',
              }}
            >
              <Kicker>{product.segment}</Kicker>

              <h3 className="mt-3 font-semibold" style={{ fontSize: '20px', lineHeight: 1.24 }}>
                {product.name}
              </h3>
              <p className="mt-2 text-[13px]" style={{ color: 'var(--rt-slate-40)', lineHeight: 1.45 }}>
                {product.audience}
              </p>
              <p className="mt-4 text-[15px]" style={{ color: 'var(--rt-slate-60)', lineHeight: 1.5 }}>
                {product.pitch}
              </p>

              <a
                href={`#${product.id}`}
                className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold"
                style={{ color: 'var(--rt-red-700)' }}
              >
                {copy.seeDetail} <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}

          <Card className="flex flex-col justify-center" >
            <div style={{ background: 'transparent' }}>
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
          </Card>
        </div>
      </div>
    </section>
  )
}
