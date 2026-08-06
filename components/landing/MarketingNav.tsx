'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import type { LandingCopy } from '@/lib/landing-copy'
import { CONTAINER } from './primitives'

export function MarketingNav({ copy }: { copy: LandingCopy }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const home = copy.locale === 'es' ? '/' : '/en'

  // Sobre el hero oscuro el nav va en claro; al hacer scroll vuelve al papel
  const onDark = !scrolled
  const linkColor = onDark ? 'rgba(242,243,247,0.9)' : 'var(--rt-slate)'

  const links = [
    { href: '#problema', label: copy.nav.problem },
    { href: '#como-funciona', label: copy.nav.how },
    { href: '#productos', label: copy.nav.products },
    { href: '#por-que', label: copy.nav.why },
  ]

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-200"
      style={{
        background: scrolled ? 'rgba(242, 243, 239, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--rt-border-soft)' : 'transparent'}`,
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
              href={link.href}
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
            href="#contacto"
            className="hidden sm:inline text-[14px] font-medium"
            style={{ color: linkColor }}
          >
            {copy.nav.contact}
          </a>

          <Link
            href={copy.altHref}
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
            href="#contacto"
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
