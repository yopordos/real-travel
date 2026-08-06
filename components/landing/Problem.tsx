import type { LandingCopy } from '@/lib/landing-copy'
import { CONTAINER, Card, SectionHead } from './primitives'

export function Problem({ copy }: { copy: LandingCopy['problem'] }) {
  return (
    <section id="problema" className="py-16 md:py-24 scroll-mt-20" style={{ background: 'var(--rt-surface)' }}>
      <div className={CONTAINER}>
        <SectionHead kicker={copy.kicker} title={copy.title} lead={copy.lead} />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {copy.items.map(item => (
            <Card key={item.title} className="h-full">
              <h3 className="font-semibold" style={{ fontSize: '18px', lineHeight: 1.28 }}>
                {item.title}
              </h3>
              <p className="mt-3 text-[15px]" style={{ lineHeight: 1.5, color: 'var(--rt-slate-60)' }}>
                {item.body}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
