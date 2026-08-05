import type { LandingCopy } from '@/lib/landing-copy'

const FIELD_STYLE: React.CSSProperties = {
  background: 'var(--color-card)',
  border: '1px solid var(--color-border)',
  borderRadius: '8px',
  fontFamily: 'var(--font-family-body)',
  fontSize: '15px',
  color: 'var(--color-text-primary)',
}

export function Contact({ copy }: { copy: LandingCopy['contact'] }) {
  return (
    <section id="contacto" className="mx-auto max-w-[1180px] px-6 pt-24 md:pt-32 pb-24 scroll-mt-20">
      <div
        className="grid gap-12 md:gap-16 md:grid-cols-2 pt-12"
        style={{ borderTop: '1px solid var(--color-border)' }}
      >
        <div>
          <p
            className="text-[11px] font-semibold uppercase mb-5"
            style={{ color: 'var(--color-text-muted)', letterSpacing: '0.14em' }}
          >
            {copy.kicker}
          </p>
          <h2
            className="font-bold max-w-[16ch]"
            style={{
              fontSize: 'clamp(30px, 3.8vw, 44px)',
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
            }}
          >
            {copy.title}
          </h2>
          <p
            className="mt-5 max-w-[40ch]"
            style={{ color: 'var(--color-text-muted)', fontSize: '16px', lineHeight: 1.65 }}
          >
            {copy.lead}
          </p>

          <p className="mt-8 text-[15px]">
            <span style={{ color: 'var(--color-text-muted)' }}>{copy.fallbackLead} </span>
            <a
              href={`mailto:${copy.fallbackEmail}`}
              className="font-semibold underline underline-offset-4"
              style={{ color: 'var(--color-crimson)' }}
            >
              {copy.fallbackEmail}
            </a>
          </p>
        </div>

        {/* TODO: conectar endpoint del formulario (Formspree u otro) en `action`.
            Mientras no exista, el envío no confirma nada: un falso "gracias"
            haría creer al visitante que su mensaje llegó. */}
        <form action="" method="post" className="flex flex-col gap-5">
          {(
            [
              { id: 'nombre', label: copy.fields.name, type: 'text', autoComplete: 'name' },
              { id: 'institucion', label: copy.fields.org, type: 'text', autoComplete: 'organization' },
              { id: 'correo', label: copy.fields.email, type: 'email', autoComplete: 'email' },
            ] as const
          ).map(field => (
            <div key={field.id} className="flex flex-col gap-2">
              <label
                htmlFor={field.id}
                className="text-[11px] font-semibold uppercase"
                style={{ color: 'var(--color-text-muted)', letterSpacing: '0.1em' }}
              >
                {field.label}
              </label>
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                autoComplete={field.autoComplete}
                required
                className="px-4 py-3"
                style={FIELD_STYLE}
              />
            </div>
          ))}

          <div className="flex flex-col gap-2">
            <label
              htmlFor="mensaje"
              className="text-[11px] font-semibold uppercase"
              style={{ color: 'var(--color-text-muted)', letterSpacing: '0.1em' }}
            >
              {copy.fields.message}
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              required
              className="px-4 py-3 resize-y"
              style={FIELD_STYLE}
            />
          </div>

          <button
            type="submit"
            className="self-start px-6 py-3.5 text-[14px] font-semibold rounded-full"
            style={{ background: 'var(--color-crimson)', color: 'white' }}
          >
            {copy.submit}
          </button>
        </form>
      </div>
    </section>
  )
}
