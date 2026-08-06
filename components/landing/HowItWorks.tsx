import type { LandingCopy } from '@/lib/landing-copy'
import { CONTAINER, SectionHead } from './primitives'

/** Los pasos van numerados porque el orden es real: primero te sumas, luego se carga, luego apareces. */
export function HowItWorks({ copy }: { copy: LandingCopy['how'] }) {
  return (
    <section id="como-funciona" className="py-14 md:py-20 scroll-mt-20">
      <div className={CONTAINER}>
        <SectionHead kicker={copy.kicker} title={copy.title} lead={copy.lead} />

        <ol className="mt-10 grid gap-8 md:gap-10 md:grid-cols-3">
          {copy.steps.map((step, i) => (
            <li key={step.title} className="pt-5" style={{ borderTop: '2px solid var(--rt-red-700)' }}>
              <div className="flex items-baseline gap-3">
                <span
                  className="text-[13px] font-semibold"
                  style={{ color: 'var(--rt-red-700)', fontVariantNumeric: 'tabular-nums' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-semibold" style={{ fontSize: '18px', lineHeight: 1.28 }}>
                  {step.title}
                </h3>
              </div>
              <p
                className="mt-2.5 text-[15px] max-w-[38ch]"
                style={{ lineHeight: 1.5, color: 'var(--rt-slate-60)' }}
              >
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
