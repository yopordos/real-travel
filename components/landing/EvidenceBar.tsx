import type { LandingCopy } from '@/lib/landing-copy'

/** Las cifras como argumento, no como widget: sin cards, sin iconos, sobre reglas. */
export function EvidenceBar({ copy }: { copy: LandingCopy['evidence'] }) {
  return (
    <section className="mx-auto max-w-[1180px] px-6">
      <div style={{ borderTop: '1px solid var(--color-border)' }} className="pt-5">
        <p
          className="text-[10px] font-semibold uppercase mb-6"
          style={{ color: 'var(--color-text-muted)', letterSpacing: '0.14em' }}
        >
          {copy.label}
        </p>

        <dl className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
          {copy.items.map((item, i) => (
            <div
              key={item.label}
              className="px-0 md:px-6 first:pl-0"
              style={{ borderLeft: i === 0 ? 'none' : '1px solid var(--color-border)' }}
            >
              <dt className="sr-only">{item.label}</dt>
              <dd className="pl-4 md:pl-0">
                <span
                  className="block font-bold"
                  style={{
                    fontFamily: 'var(--font-family-display)',
                    fontSize: 'clamp(34px, 4.4vw, 50px)',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {item.value}
                </span>
                <span
                  className="block mt-2 text-[11px] font-semibold uppercase"
                  style={{ color: 'var(--color-text-muted)', letterSpacing: '0.12em' }}
                >
                  {item.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
