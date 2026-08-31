'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import type { LandingCopy } from '@/lib/landing-copy'
import { CONTAINER } from './primitives'

export function MarketingNav({
  copy,
  variant = 'home',
  altHref,
}: {
  copy: LandingCopy
  /** `inner`: páginas sin hero, donde el nav no tiene fondo oscuro debajo. */
  variant?: 'home' | 'inner'
  /** La misma página en el otro idioma. Por defecto, la landing. */
  altHref?: string
}) {
  const inner = variant === 'inner'
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (inner) return
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [inner])

  const home = copy.locale === 'es' ? '/' : '/en'

  // Sobre el hero oscuro el nav va en claro; al hacer scroll vuelve al papel.
  // Sin hero no hay nada oscuro debajo, así que arranca en papel y se queda.
  const solid = inner || scrolled
  const onDark = !solid
  const linkColor = onDark ? 'rgba(242,243,247,0.9)' : 'var(--rt-slate)'

  // Fuera del home, las anclas de sección solo funcionan volviendo a él
  const section = (hash: string) => (inner ? `${home}${hash}` : hash)

  const links = [
    { href: '#que-es', label: copy.nav.identity },
    { href: '#problema', label: copy.nav.problem },
    { href: '#como-funciona', label: copy.nav.how },
    { href: '#productos', label: copy.nav.products },
    { href: '#por-que', label: copy.nav.why },
  ]

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-200"
      style={{
        background: solid ? 'rgba(242, 243, 239, 0.9)' : 'transparent',
        backdropFilter: solid ? 'blur(10px)' : 'none',
        borderBottom: `1px solid ${solid ? 'var(--rt-border-soft)' : 'transparent'}`,
      }}
    >
      <nav className={`${CONTAINER} h-16 flex items-center gap-6`}>
        <Link
          href={home}
          className="flex items-center gap-2 shrink-0 font-semibold"
          style={{
            fontSize: '17px',
            color: onDark ? 'var(--rt-white-text)' : 'var(--rt-ink)',
            letterSpacing: '-0.02em',
          }}
        >
          <span
            className="block w-2.5 h-2.5 rounded-full"
            style={{ background: onDark ? 'var(--rt-amber-500)' : 'var(--rt-red-700)' }}
            aria-hidden="true"
          />
          Real Travel
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {links.map(link => (
            <a
              key={link.href}
              href={section(link.href)}
              className="text-[14px] font-medium"
              style={{ color: linkColor }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <a
            href="https://webapp.realtravelapp.com/"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline text-[14px] font-semibold"
            style={{ color: onDark ? 'var(--rt-amber-500)' : 'var(--rt-red-700)' }}
          >
            {copy.nav.platform} ↗
          </a>

          <a
            href={section('#contacto')}
            className="hidden sm:inline text-[14px] font-medium"
            style={{ color: linkColor }}
          >
            {copy.nav.contact}
          </a>

          <Link
            href={altHref ?? copy.altHref}
            className="text-[12px] font-semibold px-2 py-1"
            style={{
              color: onDark ? 'rgba(242,243,247,0.65)' : 'var(--rt-slate-40)',
              letterSpacing: '0.06em',
            }}
            aria-label={copy.locale === 'es' ? 'Switch to English' : 'Cambiar a español'}
          >
            {copy.altLabel}
          </Link>

          <a
            href={section('#contacto')}
            className="px-5 py-2.5 text-[14px] font-semibold"
            style={{
              background: 'var(--rt-red-700)',
              color: 'var(--rt-white-text)',
              borderRadius: 'var(--rt-radius)',
            }}
          >
            {copy.nav.cta}
          </a>
        </div>
      </nav>
    </header>
  )
}
