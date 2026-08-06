'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { LandingCopy } from '@/lib/landing-copy'
import { CONTAINER, SectionHead, Tick } from './primitives'

/**
 * Prueba de producto: capturas de la plataforma en funcionamiento, no un
 * diagrama. Cada pestaña muestra una pantalla real y qué aporta al territorio.
 */
export function PlatformProof({ copy }: { copy: LandingCopy['mapExplorer'] }) {
  const [active, setActive] = useState(0)
  const item = copy.proof[active]

  return (
    <section className="pt-20 pb-14 md:pt-28 md:pb-20">
      <div className={CONTAINER}>
        <SectionHead kicker={copy.kicker} title={copy.title} lead={copy.lead} />

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label={copy.hint}>
          {copy.proof.map((p, i) => {
            const isActive = i === active
            return (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${p.id}`}
                id={`tab-${p.id}`}
                onClick={() => setActive(i)}
                className="px-5 py-2.5 text-[14px] font-semibold transition-colors duration-200"
                style={{
                  borderRadius: 'var(--rt-radius-pill)',
                  background: isActive ? 'var(--rt-red-700)' : 'var(--rt-surface)',
                  color: isActive ? 'var(--rt-white-text)' : 'var(--rt-slate)',
                  border: `1px solid ${isActive ? 'var(--rt-red-700)' : 'var(--rt-border-soft)'}`,
                  boxShadow: isActive ? 'var(--rt-shadow-brand)' : 'none',
                }}
              >
                {p.tab}
                {p.badge && (
                  <span
                    className="ml-2 px-2 py-0.5 text-[10px] font-semibold uppercase align-middle"
                    style={{
                      letterSpacing: '0.06em',
                      borderRadius: 'var(--rt-radius-pill)',
                      background: isActive ? 'rgba(242,243,247,0.22)' : 'var(--rt-amber-100)',
                      color: isActive ? 'var(--rt-white-text)' : 'var(--rt-amber-600, #d9882e)',
                    }}
                  >
                    {p.badge}
                  </span>
                )}
              </button>
            )
          })}
        </div>

        <div
          id={`panel-${item.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${item.id}`}
          className="mt-8 grid gap-8 lg:gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:items-center"
        >
          <div
            className="relative overflow-clip"
            style={{
              borderRadius: 'var(--rt-radius-lg)',
              boxShadow: 'var(--rt-shadow-card)',
              border: '1px solid var(--rt-border-soft)',
              aspectRatio: '16 / 11',
              background: 'var(--rt-surface)',
            }}
          >
            {copy.proof.map((p, i) => (
              <Image
                key={p.id}
                src={p.src}
                alt={i === active ? p.alt : ''}
                fill
                sizes="(min-width: 1024px) 62vw, 100vw"
                className="object-cover object-top transition-opacity duration-300"
                style={{ opacity: i === active ? 1 : 0 }}
                aria-hidden={i !== active}
              />
            ))}

            {item.badge && (
              <span
                className="absolute left-4 top-4 px-3 py-1.5 text-[11px] font-semibold uppercase"
                style={{
                  letterSpacing: '0.08em',
                  borderRadius: 'var(--rt-radius-pill)',
                  background: 'var(--rt-amber-500)',
                  color: 'var(--rt-ink)',
                  boxShadow: 'var(--rt-shadow-sm)',
                }}
              >
                {item.badge}
              </span>
            )}
          </div>

          <div>
            <h3
              className="font-semibold"
              style={{ fontSize: 'clamp(20px, 2.2vw, 24px)', lineHeight: 1.2 }}
            >
              {item.title}
            </h3>
            <p
              className="mt-3 text-[15px]"
              style={{ lineHeight: 1.55, color: 'var(--rt-slate-60)' }}
            >
              {item.blurb}
            </p>

            <ul className="mt-6 flex flex-col gap-3">
              {item.bullets.map(bullet => (
                <li key={bullet} className="flex gap-2.5 text-[15px]" style={{ lineHeight: 1.45 }}>
                  <Tick />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://webapp.realtravelapp.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-1.5 text-[14px] font-semibold"
              style={{ color: 'var(--rt-red-700)' }}
            >
              {copy.platformCta} ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
