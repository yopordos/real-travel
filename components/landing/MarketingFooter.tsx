import Link from 'next/link'
import type { LandingCopy } from '@/lib/landing-copy'
import { CONTAINER } from './primitives'

export function MarketingFooter({ copy }: { copy: LandingCopy }) {
  return (
    <footer style={{ background: 'var(--rt-ink)' }}>
      <div className={`${CONTAINER} py-10 flex flex-wrap items-center gap-x-8 gap-y-4`}>
        <p
          className="flex items-center gap-2 font-semibold"
          style={{ fontSize: '16px', color: 'var(--rt-white-text)', letterSpacing: '-0.02em' }}
        >
          <span
            className="block w-2.5 h-2.5 rounded-full"
            style={{ background: 'var(--rt-red-600)' }}
            aria-hidden="true"
          />
          Real Travel
        </p>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[13px]">
          <a
            href="https://webapp.realtravelapp.com/"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'rgba(242,243,247,0.75)' }}
          >
            {copy.footer.platformLink} ↗
          </a>
          <Link href="/explorar" style={{ color: 'rgba(242,243,247,0.75)' }}>
            {copy.footer.appLink}
          </Link>
          <Link href={copy.altHref} style={{ color: 'rgba(242,243,247,0.75)' }}>
            {copy.altLabel}
          </Link>
        </nav>

        <p className="ml-auto text-[12px]" style={{ color: 'rgba(242,243,247,0.55)' }}>
          {copy.footer.tagline}
        </p>
      </div>

      <div className={CONTAINER}>
        <p
          className="py-5 text-[12px]"
          style={{ borderTop: '1px solid rgba(242,243,247,0.12)', color: 'rgba(242,243,247,0.45)' }}
        >
          © 2026 {copy.footer.rights}
        </p>
      </div>
    </footer>
  )
}
