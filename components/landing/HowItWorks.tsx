import type { LandingCopy } from '@/lib/landing-copy'
import { CONTAINER, Card, SectionHead } from './primitives'

/** Los pasos van numerados porque el orden es real: primero te sumas, luego se carga, luego apareces. */
export function HowItWorks({ copy }: { copy: LandingCopy['how'] }) {
  return (
    <section id="como-funciona" className="py-16 md:py-24 scroll-mt-20">
      <div className={CONTAINER}>
        <SectionHead kicker={copy.kicker} title={copy.title} lead={copy.lead} />

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {copy.steps.map((step, i) => (
            <li key={step.title}>
              <Card className="h-full">
                <span
                  className="flex items-center justify-center w-9 h-9 text-[15px] font-semibold"
                  style={{
                    background: 'var(--rt-red-50)',
                    color: 'var(--rt-red-700)',
                    borderRadius: 'var(--rt-radius-pill)',
                  }}
                >
                  {i + 1}
                </span>
                <h3 className="mt-5 font-semibold" style={{ fontSize: '18px', lineHeight: 1.28 }}>
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px]" style={{ lineHeight: 1.5, color: 'var(--rt-slate-60)' }}>
                  {step.body}
                </p>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
