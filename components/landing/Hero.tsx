import Image from 'next/image'
import type { LandingCopy } from '@/lib/landing-copy'
import { CONTAINER, Kicker, PrimaryButton, SecondaryButton } from './primitives'

export function Hero({ copy }: { copy: LandingCopy }) {
  return (
    <section className="pt-12 pb-16 md:pt-20 md:pb-24">
      <div className={`${CONTAINER} grid gap-12 lg:gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center`}>
        <div>
          <Kicker>{copy.hero.kicker}</Kicker>

          <h1
            className="mt-5 font-bold"
            style={{ fontSize: 'clamp(34px, 4.4vw, 50px)', lineHeight: 1.08, textWrap: 'balance' }}
          >
            {copy.hero.title}
          </h1>

          <p
            className="mt-6 max-w-[52ch]"
            style={{ fontSize: '17px', lineHeight: 1.6, color: 'var(--rt-slate-60)' }}
          >
            {copy.hero.lead}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <PrimaryButton href="#contacto">{copy.hero.ctaPrimary}</PrimaryButton>
            <SecondaryButton href="#productos">{copy.hero.ctaSecondary}</SecondaryButton>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {copy.hero.chips.map(chip => (
              <li
                key={chip}
                className="flex items-center gap-2 text-[13px] font-medium"
                style={{ color: 'var(--rt-slate-60)' }}
              >
                <span
                  className="block w-2 h-2 rounded-full"
                  style={{ background: 'var(--rt-red-700)' }}
                  aria-hidden="true"
                />
                {chip}
              </li>
            ))}
          </ul>
        </div>

        {/* La plataforma real sobre un panel fotográfico: textura detrás, producto delante */}
        <figure className="relative m-0 p-4 md:p-7">
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ borderRadius: 'var(--rt-radius-xl)' }}
            aria-hidden="true"
          >
            <Image
              src="/img/arenal-costa-rica.jpeg"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(140deg, rgba(12,12,19,0.55), rgba(181,9,51,0.45))' }}
            />
          </div>

          <Image
            src="/img/plataforma-explorar.png"
            alt={copy.showcase.platformAlt}
            width={1280}
            height={860}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="relative w-full h-auto"
            style={{ borderRadius: 'var(--rt-radius)', boxShadow: 'var(--rt-shadow-lg, 0 14px 38px rgba(12,12,19,0.16))' }}
          />

          <figcaption
            className="relative mt-3 text-[11px] font-semibold uppercase"
            style={{ letterSpacing: '0.08em', color: 'var(--rt-white-text)' }}
          >
            {copy.showcase.platformCaption}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
