import type { LandingCopy } from '@/lib/landing-copy'
import { CONTAINER, Kicker } from './primitives'

/** El único bloque en rojo pleno de la página: marca el argumento comercial. */
export function Model({ copy }: { copy: LandingCopy['model'] }) {
  return (
    <section className="pb-16 md:pb-24">
      <div className={CONTAINER}>
        <div
          className="px-8 py-12 md:px-16 md:py-16 text-center"
          style={{ background: 'var(--rt-red-700)', borderRadius: 'var(--rt-radius-xl)' }}
        >
          <Kicker onDark>{copy.kicker}</Kicker>
          <h2
            className="mt-4 font-semibold"
            style={{
              fontSize: 'clamp(26px, 3.4vw, 38px)',
              lineHeight: 1.1,
              color: 'var(--rt-white-text)',
            }}
          >
            {copy.title}
          </h2>
          <p
            className="mt-5 mx-auto max-w-[62ch]"
            style={{ fontSize: '16px', lineHeight: 1.6, color: 'rgba(242,243,247,0.88)' }}
          >
            {copy.lead}
          </p>
        </div>
      </div>
    </section>
  )
}
