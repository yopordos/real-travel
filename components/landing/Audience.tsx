import type { LandingCopy } from '@/lib/landing-copy'

export function Audience({ copy }: { copy: LandingCopy['audience'] }) {
  return (
    <section id="para-quien" className="mx-auto max-w-[1180px] px-6 pt-24 md:pt-32 scroll-mt-20">
      <p
        className="text-[11px] font-semibold uppercase mb-5"
        style={{ color: 'var(--color-text-muted)', letterSpacing: '0.14em' }}
      >
        {copy.sectionKicker}
      </p>
      <h2
        className="font-bold max-w-[20ch]"
        style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', lineHeight: 1.08, letterSpacing: '-0.025em' }}
      >
        {copy.sectionTitle}
      </h2>

      <div className="mt-14 grid gap-10 md:gap-8 md:grid-cols-3">
        {copy.items.map((item, i) => (
          <div
            key={item.role}
            className="reveal pt-6"
            data-delay={i * 80}
            style={{ borderTop: '2px solid var(--color-crimson)' }}
          >
            <h3
              className="font-bold mb-4"
              style={{ fontSize: '20px', lineHeight: 1.2, letterSpacing: '-0.015em' }}
            >
              {item.role}
            </h3>
            <p
              className="text-[15px] mb-3"
              style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}
            >
              {item.pain}
            </p>
            <p className="text-[15px] font-medium" style={{ lineHeight: 1.6 }}>
              {item.gain}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
