import type React from 'react'

/**
 * Piezas compartidas de la landing, todas sobre los tokens del design system
 * (`--rt-*` en globals.css). Ningún componente escribe un color literal.
 */

export const CONTAINER = 'mx-auto w-full max-w-[1200px] px-6'

export function Kicker({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <p
      className="text-[11px] font-semibold uppercase"
      style={{
        letterSpacing: '0.08em',
        color: onDark ? 'rgba(242,243,247,0.75)' : 'var(--rt-red-700)',
      }}
    >
      {children}
    </p>
  )
}

export function SectionHead({
  kicker,
  title,
  lead,
  onDark = false,
}: {
  kicker: string
  title: string
  lead?: string
  onDark?: boolean
}) {
  return (
    <header className="max-w-[42ch]">
      <Kicker onDark={onDark}>{kicker}</Kicker>
      <h2
        className="mt-4 font-semibold"
        style={{
          fontSize: 'clamp(24px, 3vw, 32px)',
          lineHeight: 1.12,
          color: onDark ? 'var(--rt-white-text)' : 'var(--rt-ink)',
        }}
      >
        {title}
      </h2>
      {lead && (
        <p
          className="mt-4"
          style={{
            fontSize: '16px',
            lineHeight: 1.5,
            color: onDark ? 'rgba(242,243,247,0.85)' : 'var(--rt-slate-60)',
          }}
        >
          {lead}
        </p>
      )}
    </header>
  )
}

export function Card({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`p-6 ${className}`}
      style={{
        background: 'var(--rt-surface)',
        border: '1px solid var(--rt-border-soft)',
        borderRadius: 'var(--rt-radius-lg)',
        boxShadow: 'var(--rt-shadow-xs)',
      }}
    >
      {children}
    </div>
  )
}

export const BUTTON_BASE =
  'inline-flex items-center justify-center px-6 py-3 text-[15px] font-semibold transition-colors duration-200'

export function PrimaryButton({
  href,
  children,
  external = false,
}: {
  href: string
  children: React.ReactNode
  external?: boolean
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className={BUTTON_BASE}
      style={{
        background: 'var(--rt-red-700)',
        color: 'var(--rt-white-text)',
        borderRadius: 'var(--rt-radius)',
        boxShadow: 'var(--rt-shadow-brand)',
      }}
    >
      {children}
    </a>
  )
}

export function SecondaryButton({
  href,
  children,
  external = false,
}: {
  href: string
  children: React.ReactNode
  external?: boolean
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className={BUTTON_BASE}
      style={{
        background: 'var(--rt-surface)',
        color: 'var(--rt-ink)',
        border: '1px solid var(--rt-border)',
        borderRadius: 'var(--rt-radius)',
      }}
    >
      {children}
    </a>
  )
}

/** Marca de verificación de las listas de "qué incluye" y "beneficios". */
export function Tick({ tone = 'brand' }: { tone?: 'brand' | 'amber' }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0 mt-[3px]"
    >
      <path
        d="M3.2 8.4 6.3 11.4 12.8 4.9"
        stroke={tone === 'brand' ? 'var(--rt-red-700)' : 'var(--rt-amber-600, #d9882e)'}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
