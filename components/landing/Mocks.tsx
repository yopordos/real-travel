import type { LandingCopy } from '@/lib/landing-copy'

/**
 * Maquetas de la plataforma construidas en HTML: nítidas en cualquier pantalla,
 * traducidas con el resto del copy y sin capturas que envejezcan.
 * Las tres muestran el mismo territorio visto desde cada capa.
 */

function MockFrame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div
      className="w-full overflow-hidden select-none"
      style={{
        background: 'var(--color-card)',
        border: '1px solid var(--color-border)',
        borderRadius: '10px',
        boxShadow: 'var(--shadow-card)',
      }}
      aria-hidden="true"
    >
      <div
        className="flex items-center gap-2 px-3.5 py-2.5"
        style={{ borderBottom: '1px solid var(--color-border)' }}
      >
        <span className="flex gap-1.5">
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className="block w-2 h-2 rounded-full"
              style={{ background: 'var(--color-border)' }}
            />
          ))}
        </span>
        <span
          className="text-[10px] truncate"
          style={{ color: 'var(--color-text-muted)', letterSpacing: '0.02em' }}
        >
          {url}
        </span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}

export function MockDestino({ copy }: { copy: LandingCopy['mocks']['destino'] }) {
  return (
    <MockFrame url="realtravelapp.com/puerto-varas">
      <p
        className="text-[10px] font-semibold uppercase mb-1.5"
        style={{ color: 'var(--color-text-muted)', letterSpacing: '0.1em' }}
      >
        {copy.region}
      </p>
      <p
        className="font-bold mb-4"
        style={{
          fontFamily: 'var(--font-family-display)',
          fontSize: '28px',
          lineHeight: 1.1,
          letterSpacing: '-0.015em',
        }}
      >
        {copy.place}
      </p>

      <div className="flex gap-6 pb-4 mb-4" style={{ borderBottom: '1px solid var(--color-border)' }}>
        {copy.counters.map(c => (
          <span key={c.label} className="flex items-baseline gap-1.5">
            <span
              className="font-bold"
              style={{
                fontFamily: 'var(--font-family-display)',
                fontSize: '17px',
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {c.value}
            </span>
            <span className="text-[11px]" style={{ color: 'var(--color-text-muted)' }}>
              {c.label}
            </span>
          </span>
        ))}
      </div>

      <p
        className="text-[10px] font-semibold uppercase mb-3"
        style={{ color: 'var(--color-text-muted)', letterSpacing: '0.1em' }}
      >
        {copy.routesTitle}
      </p>
      <ul className="flex flex-col gap-2.5">
        {copy.routes.map(r => (
          <li key={r.name} className="flex items-center gap-3">
            <span
              className="block shrink-0 rounded-full"
              style={{ width: '7px', height: '7px', background: 'var(--color-crimson)' }}
            />
            <span className="text-[13px] font-medium">{r.name}</span>
            <span
              className="text-[11px] ml-auto"
              style={{ color: 'var(--color-text-muted)', fontVariantNumeric: 'tabular-nums' }}
            >
              {r.meta}
            </span>
          </li>
        ))}
      </ul>
    </MockFrame>
  )
}

// Serie fija: 30 días de consultas. Valores deterministas, no aleatorios.
const SERIES = [38, 52, 46, 61, 57, 74, 82, 60, 55, 68, 71, 66, 84, 92, 78, 63, 59, 70, 88, 96, 81, 74, 69, 77, 90, 100, 86, 72, 79, 94]

export function MockPanel({ copy }: { copy: LandingCopy['mocks']['panel'] }) {
  return (
    <MockFrame url="realtravelapp.com/gestion/puerto-varas">
      <div className="flex items-baseline justify-between mb-4">
        <p
          className="font-bold"
          style={{ fontFamily: 'var(--font-family-display)', fontSize: '19px' }}
        >
          {copy.title}
        </p>
        <span
          className="text-[10px] font-semibold uppercase"
          style={{ color: 'var(--color-text-muted)', letterSpacing: '0.08em' }}
        >
          {copy.period}
        </span>
      </div>

      <p
        className="text-[10px] font-semibold uppercase mb-2"
        style={{ color: 'var(--color-text-muted)', letterSpacing: '0.1em' }}
      >
        {copy.chartLabel}
      </p>
      <div className="flex items-end gap-[3px] mb-5" style={{ height: '64px' }}>
        {SERIES.map((v, i) => (
          <span
            key={i}
            className="flex-1 rounded-t-[2px]"
            style={{
              height: `${v}%`,
              background: 'var(--color-crimson)',
              opacity: 0.25 + (i / SERIES.length) * 0.6,
            }}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-5">
        {[
          { title: copy.topTitle, rows: copy.top },
          { title: copy.originTitle, rows: copy.origin },
        ].map(block => (
          <div key={block.title}>
            <p
              className="text-[10px] font-semibold uppercase mb-2.5 pb-2"
              style={{
                color: 'var(--color-text-muted)',
                letterSpacing: '0.1em',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              {block.title}
            </p>
            <ul className="flex flex-col gap-2">
              {block.rows.map(row => (
                <li key={row.name} className="flex items-baseline justify-between gap-2">
                  <span className="text-[12px] truncate">{row.name}</span>
                  <span
                    className="text-[12px] font-semibold shrink-0"
                    style={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    {row.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </MockFrame>
  )
}

export function MockPrestador({ copy }: { copy: LandingCopy['mocks']['prestador'] }) {
  return (
    <MockFrame url="realtravelapp.com/puerto-varas/los-colonos">
      <p
        className="text-[10px] font-semibold uppercase mb-1.5"
        style={{ color: 'var(--color-crimson)', letterSpacing: '0.1em' }}
      >
        {copy.kind} · {copy.place}
      </p>
      <p
        className="font-bold mb-4"
        style={{
          fontFamily: 'var(--font-family-display)',
          fontSize: '24px',
          lineHeight: 1.15,
          letterSpacing: '-0.015em',
        }}
      >
        {copy.name}
      </p>

      <dl className="flex flex-col">
        {copy.fields.map(f => (
          <div
            key={f.label}
            className="flex items-baseline justify-between gap-4 py-2.5"
            style={{ borderTop: '1px solid var(--color-border)' }}
          >
            <dt
              className="text-[10px] font-semibold uppercase shrink-0"
              style={{ color: 'var(--color-text-muted)', letterSpacing: '0.08em' }}
            >
              {f.label}
            </dt>
            <dd className="text-[12px] text-right">{f.value}</dd>
          </div>
        ))}
      </dl>

      <span
        className="inline-block mt-4 px-4 py-2 text-[12px] font-semibold rounded-full"
        style={{ background: 'var(--color-crimson)', color: 'white' }}
      >
        {copy.cta}
      </span>
    </MockFrame>
  )
}
