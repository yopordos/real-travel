import type { LandingCopy } from '@/lib/landing-copy'

/** Aquí sí hay secuencia — el orden es información, y por eso van numerados. */
export function Steps({ copy }: { copy: LandingCopy['steps'] }) {
  return (
    <section className="mx-auto max-w-[1180px] px-6 pt-24 md:pt-32">
      <p
        className="text-[11px] font-semibold uppercase mb-5"
        style={{ color: 'var(--color-text-muted)', letterSpacing: '0.14em' }}
      >
        {copy.sectionKicker}
      </p>
      <h2
        className="font-bold max-w-[18ch]"
        style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', lineHeight: 1.08, letterSpacing: '-0.025em' }}
      >
        {copy.sectionTitle}
      </h2>

      <ol className="mt-14 grid gap-10 md:gap-8 md:grid-cols-3">
        {copy.items.map((item, i) => (
          <li key={item.title} className="reveal" data-delay={i * 80}>
            <span
              className="block font-bold mb-3"
              style={{
                fontFamily: 'var(--font-family-display)',
                fontSize: '15px',
                color: 'var(--color-crimson)',
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3
              className="font-bold mb-2.5"
              style={{ fontSize: '19px', letterSpacing: '-0.015em' }}
            >
              {item.title}
            </h3>
            <p
              className="text-[15px] max-w-[34ch]"
              style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}
            >
              {item.body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}
