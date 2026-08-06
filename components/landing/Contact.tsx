import type { LandingCopy } from '@/lib/landing-copy'
import { CONTAINER, Kicker } from './primitives'

const FIELD: React.CSSProperties = {
  background: 'var(--rt-surface)',
  border: '1px solid var(--rt-border)',
  borderRadius: 'var(--rt-radius-sm)',
  fontFamily: 'var(--rt-font)',
  fontSize: '15px',
  color: 'var(--rt-ink)',
  width: '100%',
}

const LABEL = 'block mb-2 text-[13px] font-medium'

export function Contact({ copy }: { copy: LandingCopy['contact'] }) {
  return (
    <section id="contacto" className="py-16 md:py-24 scroll-mt-20">
      <div className={CONTAINER}>
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <Kicker>{copy.kicker}</Kicker>
            <h2
              className="mt-4 font-semibold"
              style={{ fontSize: 'clamp(26px, 3.2vw, 36px)', lineHeight: 1.1 }}
            >
              {copy.title}
            </h2>
            <p
              className="mt-4 max-w-[46ch]"
              style={{ fontSize: '16px', lineHeight: 1.6, color: 'var(--rt-slate-60)' }}
            >
              {copy.lead}
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {copy.bullets.map(bullet => (
                <li key={bullet} className="flex gap-3 text-[15px]" style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'var(--rt-red-700)' }} aria-hidden="true">
                    →
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-[15px]">
              <span style={{ color: 'var(--rt-slate-60)' }}>{copy.fallbackLead} </span>
              <a
                href={`mailto:${copy.fallbackEmail}`}
                className="font-semibold underline underline-offset-4"
                style={{ color: 'var(--rt-red-700)' }}
              >
                {copy.fallbackEmail}
              </a>
            </p>
          </div>

          {/* TODO: conectar endpoint del formulario (Formspree u otro) en `action`.
              Mientras no exista, el envío no confirma nada: un falso "gracias"
              haría creer al visitante que su mensaje llegó. */}
          <form
            action=""
            method="post"
            className="p-6 md:p-8"
            style={{
              background: 'var(--rt-surface)',
              border: '1px solid var(--rt-border-soft)',
              borderRadius: 'var(--rt-radius-lg)',
              boxShadow: 'var(--rt-shadow-sm)',
            }}
          >
            <div className="flex flex-col gap-5">
              <div>
                <label htmlFor="nombre" className={LABEL}>
                  {copy.fields.name}
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder={copy.placeholders.name}
                  className="px-4 py-3"
                  style={FIELD}
                />
              </div>

              <div>
                <label htmlFor="correo" className={LABEL}>
                  {copy.fields.email}
                </label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder={copy.placeholders.email}
                  className="px-4 py-3"
                  style={FIELD}
                />
              </div>

              <div>
                <label htmlFor="tipo" className={LABEL}>
                  {copy.fields.subject}
                </label>
                <select id="tipo" name="tipo" className="px-4 py-3" style={FIELD} defaultValue={copy.subjectOptions[0]}>
                  {copy.subjectOptions.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className={LABEL}>
                  {copy.fields.message}
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  required
                  placeholder={copy.placeholders.message}
                  className="px-4 py-3 resize-y"
                  style={FIELD}
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3.5 text-[15px] font-semibold"
                style={{
                  background: 'var(--rt-red-700)',
                  color: 'var(--rt-white-text)',
                  borderRadius: 'var(--rt-radius)',
                  border: 'none',
                }}
              >
                {copy.submit}
              </button>

              <p className="text-center text-[12px]" style={{ color: 'var(--rt-slate-40)' }}>
                {copy.reply} · Real Travel
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
