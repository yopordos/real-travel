import Link from 'next/link'
import type { LandingCopy } from '@/lib/landing-copy'

export function MarketingFooter({ copy }: { copy: LandingCopy }) {
  return (
    <footer className="mx-auto max-w-[1180px] px-6 pb-12">
      <div
        className="pt-8 flex flex-wrap items-baseline gap-x-8 gap-y-4"
        style={{ borderTop: '1px solid var(--color-border)' }}
      >
        <p
          className="font-bold"
          style={{
            fontFamily: 'var(--font-family-display)',
            fontSize: '16px',
            letterSpacing: '-0.02em',
          }}
        >
          Real Travel
          <span className="ml-2 font-normal text-[12px]" style={{ color: 'var(--color-text-muted)' }}>
            {copy.footer.tagline}
          </span>
        </p>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[13px]">
          <a
            href="https://webapp.realtravelapp.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline underline-offset-4"
          >
            {copy.footer.platformLink} ↗
          </a>
          <Link href="/explorar" className="hover:underline underline-offset-4">
            {copy.footer.demoLink}
          </Link>
          <Link href={copy.altHref} className="hover:underline underline-offset-4">
            {copy.altLabel}
          </Link>
        </nav>

        <p className="ml-auto text-[12px]" style={{ color: 'var(--color-text-muted)' }}>
          © 2026 {copy.footer.rights}
        </p>
      </div>
    </footer>
  )
}
