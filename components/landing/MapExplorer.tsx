'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { LandingCopy } from '@/lib/landing-copy'
import { CONTAINER, SectionHead } from './primitives'

/**
 * El territorio como lo ordena la plataforma: puntos sobre un mapa, unidos por
 * una ruta. Al elegir un punto se abre su ficha, igual que en Real Travel.
 * Los puntos son botones reales: se recorren con Tab y se activan con Enter.
 */

// Posición de cada punto dentro del viewBox del mapa, en el orden del copy.
const SPOTS = [
  { x: 96, y: 232 },
  { x: 196, y: 128 },
  { x: 300, y: 214 },
  { x: 392, y: 96 },
]

const ROUTE = 'M96 232 C 140 206, 156 150, 196 128 C 244 102, 260 214, 300 214 C 344 214, 356 122, 392 96'

export function MapExplorer({ copy }: { copy: LandingCopy['mapExplorer'] }) {
  const [active, setActive] = useState(0)
  const point = copy.points[active]

  return (
    <section className="pb-16 md:pb-24">
      <div className={CONTAINER}>
        <SectionHead kicker={copy.kicker} title={copy.title} lead={copy.lead} />

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-stretch">
          {/* Mapa */}
          <div
            className="relative overflow-hidden"
            style={{
              background: 'var(--rt-surface)',
              border: '1px solid var(--rt-border-soft)',
              borderRadius: 'var(--rt-radius-lg)',
            }}
          >
            <svg viewBox="0 0 480 340" className="w-full h-auto" role="presentation">
              <rect width="480" height="340" fill="var(--rt-surface)" />

              <g stroke="var(--rt-sunken)" strokeWidth="1">
                {[60, 120, 180, 240, 300].map(y => (
                  <line key={y} x1="0" y1={y} x2="480" y2={y} />
                ))}
                {[80, 160, 240, 320, 400].map(x => (
                  <line key={x} x1={x} y1="0" x2={x} y2="340" />
                ))}
              </g>

              <path
                d="M0 300 C 70 292, 120 316, 190 322 C 268 328, 340 306, 480 316 L480 340 L0 340 Z"
                fill="var(--rt-sunken)"
              />
              <path
                d="M416 0 C 440 46, 428 92, 452 132 L480 132 L480 0 Z"
                fill="var(--rt-sunken)"
              />

              <path
                d={ROUTE}
                fill="none"
                stroke="var(--rt-red-700)"
                strokeWidth="2.5"
                strokeDasharray="2 9"
                strokeLinecap="round"
                opacity="0.8"
              />

              {SPOTS.map((spot, i) => {
                const isActive = i === active
                return (
                  <g
                    key={copy.points[i].id}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isActive}
                    aria-label={copy.points[i].label}
                    className="cursor-pointer focus:outline-none"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setActive(i)
                      }
                    }}
                  >
                    {/* Área de toque generosa, invisible */}
                    <circle cx={spot.x} cy={spot.y} r="26" fill="transparent" />
                    <circle
                      cx={spot.x}
                      cy={spot.y}
                      r={isActive ? 18 : 12}
                      fill="var(--rt-red-100)"
                      opacity={isActive ? 1 : 0.7}
                    />
                    <circle
                      cx={spot.x}
                      cy={spot.y}
                      r={isActive ? 9 : 6}
                      fill="var(--rt-red-700)"
                      stroke="var(--rt-surface)"
                      strokeWidth="2.5"
                    />
                    <text
                      x={spot.x}
                      y={spot.y - 28}
                      textAnchor="middle"
                      fontSize="12"
                      fontWeight="600"
                      fill={isActive ? 'var(--rt-ink)' : 'var(--rt-slate-40)'}
                      style={{ fontFamily: 'var(--rt-font)' }}
                    >
                      {copy.points[i].label}
                    </text>
                  </g>
                )
              })}
            </svg>

            <p
              className="absolute left-5 bottom-4 text-[11px] font-semibold uppercase"
              style={{ letterSpacing: '0.08em', color: 'var(--rt-slate-40)' }}
            >
              {copy.hint}
            </p>
          </div>

          {/* Ficha del punto activo */}
          <div
            className="overflow-hidden flex flex-col"
            style={{
              background: 'var(--rt-surface)',
              border: '1px solid var(--rt-border-soft)',
              borderRadius: 'var(--rt-radius-lg)',
              boxShadow: 'var(--rt-shadow-sm)',
            }}
            aria-live="polite"
          >
            <div className="relative" style={{ aspectRatio: '4 / 3' }}>
              {copy.points.map((p, i) => (
                <Image
                  key={p.id}
                  src={p.src}
                  alt={i === active ? p.alt : ''}
                  fill
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  className="object-cover transition-opacity duration-300"
                  style={{ opacity: i === active ? 1 : 0 }}
                  aria-hidden={i !== active}
                />
              ))}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(12,12,19,0.78) 0%, rgba(12,12,19,0.3) 42%, rgba(12,12,19,0) 78%)',
                }}
                aria-hidden="true"
              />
              <span
                className="absolute left-4 bottom-4 inline-flex px-3 py-1.5 text-[12px] font-semibold"
                style={{
                  background: 'var(--rt-red-700)',
                  color: 'var(--rt-white-text)',
                  borderRadius: 'var(--rt-radius-pill)',
                  boxShadow: 'var(--rt-shadow-brand)',
                }}
              >
                {point.label}
              </span>
            </div>

            <p
              className="p-6 text-[15px]"
              style={{ lineHeight: 1.55, color: 'var(--rt-slate-60)' }}
            >
              {point.blurb}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
