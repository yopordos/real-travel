import Image from 'next/image'
import type { LandingCopy } from '@/lib/landing-copy'
import { CONTAINER, Kicker } from './primitives'

/** El único bloque en rojo pleno de la página: marca el argumento comercial. */
export function Model({ copy }: { copy: LandingCopy['model'] }) {
  return (
    <section className="pb-14 md:pb-20">
      <div className={CONTAINER}>
        <div
          className="relative overflow-clip px-8 py-10 md:px-16 md:py-14 text-center"
          style={{ background: 'var(--rt-red-700)', borderRadius: 'var(--rt-radius-xl)' }}
        >
          {/* Fotografía apenas visible bajo el rojo: da materia sin restar contraste */}
          <Image
            src="/img/foto-1.jpeg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover rt-parallax-slow"
            style={{ opacity: 0.16 }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(181,9,51,0.35), rgba(125,6,36,0.85))' }}
            aria-hidden="true"
          />

          <div className="relative">
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
      </div>
    </section>
  )
}
