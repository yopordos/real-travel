import Link from 'next/link'
import { AirplaneTilt } from '@phosphor-icons/react/dist/ssr'

const NAV_LINKS = [
  { href: '#plataforma', label: 'Plataforma' },
  { href: '#observatorio', label: 'Observatorio' },
  { href: '#chatrt', label: 'ChatRT' },
]

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col" style={{ background: 'var(--color-surface)' }}>

      {/* ── Nav ── */}
      <header
        className="sticky top-0 z-40 border-b"
        style={{
          background: 'color-mix(in srgb, var(--color-surface) 92%, transparent)',
          backdropFilter: 'blur(8px)',
          borderColor: 'var(--color-border)',
        }}
      >
        <nav className="flex items-center justify-between px-5 sm:px-8 lg:px-12 h-16 max-w-[1400px] mx-auto w-full">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Real Travel — inicio">
            <span
              className="flex items-center justify-center rounded-lg"
              style={{ width: '32px', height: '32px', background: 'var(--color-crimson)' }}
            >
              <AirplaneTilt size={15} color="white" weight="fill" aria-hidden="true" />
            </span>
            <span
              className="font-bold text-base"
              style={{ fontFamily: 'var(--font-family-display)', color: 'var(--color-text-primary)' }}
            >
              Real Travel
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium transition-opacity hover:opacity-60"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {label}
              </a>
            ))}
          </div>

          <Link
            href="/explorar"
            className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
            style={{ background: 'var(--color-crimson)' }}
          >
            Abrir la app
          </Link>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      {/* ── Footer ── */}
      <footer className="border-t" style={{ borderColor: 'var(--color-border)' }}>
        <div className="px-5 sm:px-8 lg:px-12 py-14 max-w-[1400px] mx-auto w-full">
          <div className="flex flex-col sm:flex-row justify-between gap-10">
            <div className="max-w-xs">
              <p
                className="font-bold text-lg mb-2"
                style={{ fontFamily: 'var(--font-family-display)', color: 'var(--color-text-primary)' }}
              >
                Real Travel
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                Plataforma de inteligencia turística. Ganadora de los WSA 2024 en Turismo y Cultura.
              </p>
            </div>

            <div className="flex gap-14">
              <div>
                <p
                  className="text-[11px] font-semibold uppercase mb-3"
                  style={{ color: 'var(--color-text-muted)', letterSpacing: '0.08em' }}
                >
                  Plataforma
                </p>
                <ul className="flex flex-col gap-2 text-sm">
                  <li><a href="#observatorio" className="transition-opacity hover:opacity-60" style={{ color: 'var(--color-text-primary)' }}>Observatorio</a></li>
                  <li><a href="#chatrt" className="transition-opacity hover:opacity-60" style={{ color: 'var(--color-text-primary)' }}>ChatRT</a></li>
                  <li><a href="#plataforma" className="transition-opacity hover:opacity-60" style={{ color: 'var(--color-text-primary)' }}>Herramientas</a></li>
                </ul>
              </div>
              <div>
                <p
                  className="text-[11px] font-semibold uppercase mb-3"
                  style={{ color: 'var(--color-text-muted)', letterSpacing: '0.08em' }}
                >
                  Viajeros
                </p>
                <ul className="flex flex-col gap-2 text-sm">
                  <li><Link href="/explorar" className="transition-opacity hover:opacity-60" style={{ color: 'var(--color-text-primary)' }}>Explorar</Link></li>
                  <li><Link href="/mapa" className="transition-opacity hover:opacity-60" style={{ color: 'var(--color-text-primary)' }}>Mapa</Link></li>
                  <li><Link href="/red-travel" className="transition-opacity hover:opacity-60" style={{ color: 'var(--color-text-primary)' }}>Red Travel</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="mt-12 pt-6 border-t flex flex-col sm:flex-row justify-between gap-3 text-xs"
            style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
          >
            <span>© 2026 Real Travel · 14 países · 21.000+ puntos de interés</span>
            <span>Privacidad · Términos</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
