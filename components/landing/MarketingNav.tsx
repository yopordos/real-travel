'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import type { LandingCopy } from '@/lib/landing-copy'

export function MarketingNav({ copy }: { copy: LandingCopy }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const home = copy.locale === 'es' ? '/' : '/en'

  return (
    <header
      className="sticky top-0 z-50 transition-colors duration-200"
      style={{
        background: scrolled ? 'rgba(250, 249, 246, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
      }}
    >
      <nav className="mx-auto max-w-[1180px] px-6 h-16 flex items-center gap-6">
        <Link
          href={home}
          className="font-bold shrink-0"
          style={{
            fontFamily: 'var(--font-family-display)',
            fontSize: '18px',
            letterSpacing: '-0.02em',
          }}
        >
          Real Travel
        </Link>

        <div className="hidden md:flex items-center gap-7 ml-4">
          <a href="#plataforma" className="text-[13px] font-medium hover:underline underline-offset-4">
            {copy.nav.platform}
          </a>
          <a href="#para-quien" className="text-[13px] font-medium hover:underline underline-offset-4">
            {copy.nav.audience}
          </a>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <Link
            href={copy.altHref}
            className="text-[12px] font-semibold tracking-[0.08em] px-2 py-1"
            style={{ color: 'var(--color-text-muted)' }}
            aria-label={copy.locale === 'es' ? 'Switch to English' : 'Cambiar a español'}
          >
            {copy.altLabel}
          </Link>

          <a
            href="#contacto"
            className="text-[13px] font-semibold px-4 py-2.5 rounded-full transition-colors duration-150"
            style={{ background: 'var(--color-crimson)', color: 'white' }}
          >
            {copy.nav.cta}
          </a>
        </div>
      </nav>
    </header>
  )
}
