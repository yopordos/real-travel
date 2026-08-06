import Image from 'next/image'
import type { LandingCopy } from '@/lib/landing-copy'
import { CONTAINER } from './primitives'

const WEBAPP = 'https://webapp.realtravelapp.com/'

/**
 * Hero a sangre con fotografía, como fija el design system ("full-bleed in
 * heroes, always scrim text on photos"). El texto nunca va directo sobre la
 * foto: siempre sobre un scrim que garantiza el contraste.
 */
export function Hero({ copy }: { copy: LandingCopy }) {
  return (
    <section className="relative overflow-clip" style={{ background: 'var(--rt-ink)' }}>
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/img/foto-5.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover rt-backdrop rt-parallax-slow"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(100deg, rgba(12,12,19,0.93) 0%, rgba(12,12,19,0.8) 38%, rgba(12,12,19,0.45) 70%, rgba(125,6,36,0.5) 100%)',
          }}
        />
        {/* Scrim superior: el nav va en blanco y no puede depender de qué haya en la foto */}
        <div
          className="absolute inset-x-0 top-0 h-32"
          style={{ background: 'linear-gradient(to bottom, rgba(12,12,19,0.55), rgba(12,12,19,0))' }}
        />
      </div>

      <div className={`${CONTAINER} relative pt-16 pb-16 md:pt-24 md:pb-20 lg:min-h-[86vh] flex items-center`}>
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:items-center w-full">
          <div>
            <p
              className="text-[11px] font-semibold uppercase"
              style={{ letterSpacing: '0.14em', color: 'var(--rt-amber-500)' }}
            >
              {copy.hero.kicker}
            </p>

            <h1
              className="mt-6 font-bold"
              style={{
                fontSize: 'clamp(36px, 4.6vw, 60px)',
                lineHeight: 1.02,
                letterSpacing: '-0.03em',
                color: 'var(--rt-white-text)',
                textWrap: 'balance',
              }}
            >
              {copy.hero.title}
            </h1>

            <p
              className="mt-7 max-w-[48ch]"
              style={{ fontSize: '18px', lineHeight: 1.6, color: 'rgba(242,243,247,0.86)' }}
            >
              {copy.hero.lead}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-7 py-4 text-[15px] font-semibold"
                style={{
                  background: 'var(--rt-red-700)',
                  color: 'var(--rt-white-text)',
                  borderRadius: 'var(--rt-radius)',
                  boxShadow: 'var(--rt-shadow-brand)',
                }}
              >
                {copy.hero.ctaPrimary}
              </a>
              <a
                href="#productos"
                className="inline-flex items-center justify-center px-7 py-4 text-[15px] font-semibold"
                style={{
                  color: 'var(--rt-white-text)',
                  border: '1px solid rgba(242,243,247,0.35)',
                  borderRadius: 'var(--rt-radius)',
                }}
              >
                {copy.hero.ctaSecondary}
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-2">
              {copy.hero.chips.map(chip => (
                <li
                  key={chip}
                  className="flex items-center gap-2 text-[13px] font-medium"
                  style={{ color: 'rgba(242,243,247,0.8)' }}
                >
                  <span
                    className="block w-1.5 h-1.5 rounded-full"
                    style={{ background: 'var(--rt-amber-500)' }}
                    aria-hidden="true"
                  />
                  {chip}
                </li>
              ))}
            </ul>
          </div>

          {/* La plataforma real, pinchable: lo que se ve es lo que se visita */}
          <figure className="m-0">
            <a
              href={WEBAPP}
              target="_blank"
              rel="noreferrer"
              className="block group"
              aria-label={`${copy.mapExplorer.platformCta} — ${copy.mapExplorer.platformAlt}`}
            >
              <Image
                src="/img/plataforma-explorar.png"
                alt=""
                width={1280}
                height={860}
                priority
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="w-full h-auto rt-parallax-rise"
                style={{
                  borderRadius: 'var(--rt-radius)',
                  boxShadow: '0 24px 60px rgba(12,12,19,0.45)',
                }}
              />

              <figcaption
                className="mt-4 flex items-center justify-between gap-3 text-[11px] font-semibold uppercase"
                style={{ letterSpacing: '0.08em', color: 'rgba(242,243,247,0.75)' }}
              >
                <span>{copy.mapExplorer.platformCaption}</span>
                <span className="group-hover:underline underline-offset-4">
                  {copy.mapExplorer.platformCta} ↗
                </span>
              </figcaption>
            </a>
          </figure>
        </div>
      </div>
    </section>
  )
}
