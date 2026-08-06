import type { LandingCopy } from '@/lib/landing-copy'
import { HeroIllustration } from './HeroIllustration'
import { CONTAINER, Kicker, PrimaryButton, SecondaryButton } from './primitives'

export function Hero({ copy }: { copy: LandingCopy }) {
  return (
    <section className="pt-12 pb-16 md:pt-20 md:pb-24">
      <div className={`${CONTAINER} grid gap-12 lg:gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center`}>
        <div>
          <Kicker>{copy.hero.kicker}</Kicker>

          <h1
            className="mt-5 font-bold"
            style={{ fontSize: 'clamp(34px, 4.6vw, 52px)', lineHeight: 1.08, textWrap: 'balance' }}
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

        <HeroIllustration alt={copy.hero.illustrationAlt} />
      </div>
    </section>
  )
}
