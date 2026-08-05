import type { LandingCopy } from '@/lib/landing-copy'
import { HeroMapFrame } from './HeroMapFrame'

const WEBAPP = 'https://webapp.realtravelapp.com/'

export function Hero({ copy }: { copy: LandingCopy }) {
  const [first, ...rest] = copy.hero.title.split('. ')

  return (
    <section className="pt-14 pb-16 md:pt-24 md:pb-24 overflow-hidden">
      <div className="mx-auto max-w-[1180px] px-6 grid gap-10 lg:gap-14 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-center">

        <div>
          <p
            className="text-[11px] font-semibold uppercase mb-6"
            style={{ color: 'var(--color-text-muted)', letterSpacing: '0.14em' }}
          >
            {copy.hero.kicker}
          </p>

          <h1
            className="font-bold"
            style={{
              fontSize: 'clamp(38px, 5.6vw, 66px)',
              lineHeight: 1.02,
              letterSpacing: '-0.032em',
              textWrap: 'balance',
            }}
          >
            {first}.{' '}
            <span style={{ color: 'var(--color-crimson)' }}>{rest.join('. ')}</span>
          </h1>

          <p
            className="mt-6 max-w-[46ch]"
            style={{ color: 'var(--color-text-muted)', fontSize: '17px', lineHeight: 1.6 }}
          >
            {copy.hero.lead}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contacto"
              className="px-6 py-3.5 text-[14px] font-semibold rounded-full"
              style={{ background: 'var(--color-crimson)', color: 'white' }}
            >
              {copy.hero.ctaPrimary}
            </a>
            <a
              href={WEBAPP}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 text-[14px] font-semibold rounded-full"
              style={{ border: '1px solid var(--color-border)' }}
            >
              {copy.hero.ctaSecondary} ↗
            </a>
          </div>
        </div>

        {/* El mapa sale del contenedor hacia el borde derecho de la ventana */}
        <div
          className="relative h-[300px] md:h-[380px] lg:h-[520px] lg:mr-[calc(50%-50vw)] overflow-hidden"
          style={{ borderRadius: '10px' }}
        >
          <HeroMapFrame description={copy.hero.mapDescription} caption={copy.hero.mapCaption} />
        </div>
      </div>
    </section>
  )
}
