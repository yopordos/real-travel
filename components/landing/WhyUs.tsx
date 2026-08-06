import type { LandingCopy } from '@/lib/landing-copy'
import { CONTAINER, SectionHead } from './primitives'

export function WhyUs({ copy }: { copy: LandingCopy['why'] }) {
  return (
    <section id="por-que" className="py-16 md:py-24 scroll-mt-20" style={{ background: 'var(--rt-sunken)' }}>
      <div className={CONTAINER}>
        <SectionHead kicker={copy.kicker} title={copy.title} lead={copy.lead} />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {copy.items.map(item => (
            <div
              key={item.title}
              className="p-6"
              style={{
                background: 'var(--rt-surface)',
                borderRadius: 'var(--rt-radius-lg)',
                boxShadow: 'var(--rt-shadow-xs)',
              }}
            >
              <h3 className="font-semibold" style={{ fontSize: '17px', lineHeight: 1.28 }}>
                {item.title}
              </h3>
              <p className="mt-3 text-[15px]" style={{ lineHeight: 1.5, color: 'var(--rt-slate-60)' }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
