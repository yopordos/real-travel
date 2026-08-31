import Link from 'next/link'
import type React from 'react'
import type { LandingCopy } from '@/lib/landing-copy'
import type { LegalBlock, LegalCopy, LegalDoc } from '@/lib/legal-copy'
import { MarketingNav } from './MarketingNav'
import { MarketingFooter } from './MarketingFooter'
import { CONTAINER, Kicker } from './primitives'

/**
 * Texto enriquecido del copy legal: `**negrita**` y `[texto](destino)`.
 * Es deliberadamente mínimo —dos marcas, sin anidamiento— para no traer un
 * parser de Markdown ni recurrir a dangerouslySetInnerHTML por dos negritas.
 */
const INLINE = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g

function renderInline(text: string): React.ReactNode[] {
  const out: React.ReactNode[] = []
  let last = 0

  for (const m of text.matchAll(INLINE)) {
    const at = m.index ?? 0
    if (at > last) out.push(text.slice(last, at))

    if (m[1]) {
      out.push(
        <strong key={at} style={{ color: 'var(--rt-ink)', fontWeight: 600 }}>
          {m[1]}
        </strong>,
      )
    } else {
      const [label, href] = [m[2], m[3]]
      const style = { color: 'var(--rt-red-700)', textDecoration: 'underline', textUnderlineOffset: '2px' }
      // Las rutas del propio sitio pasan por el router; mailto y externos, no.
      out.push(
        href.startsWith('/') ? (
          <Link key={at} href={href} style={style}>
            {label}
          </Link>
        ) : (
          <a key={at} href={href} style={style}>
            {label}
          </a>
        ),
      )
    }
    last = at + m[0].length
  }

  if (last < text.length) out.push(text.slice(last))
  return out
}

function Blocks({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <>
      {blocks.map((block, i) =>
        'ul' in block ? (
          <ul key={i} className="mt-4 grid gap-2.5 pl-6 list-disc">
            {block.ul.map((item, j) => (
              <li key={j} className="text-[15px]" style={{ lineHeight: 1.7 }}>
                {renderInline(item)}
              </li>
            ))}
          </ul>
        ) : (
          <p key={i} className="mt-4 text-[15px]" style={{ lineHeight: 1.7 }}>
            {renderInline(block.p)}
          </p>
        ),
      )}
    </>
  )
}

/**
 * Una página legal: cabecera, índice que acompaña el scroll y articulado.
 * Recibe el idioma por props igual que la landing; no conoce el diccionario.
 */
export function LegalPage({
  copy,
  legal,
  doc,
}: {
  copy: LandingCopy
  legal: LegalCopy
  doc: LegalDoc
}) {
  return (
    <div className="rt-scope" lang={copy.locale}>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:m-4 focus:px-4 focus:py-2"
        style={{
          background: 'var(--rt-red-700)',
          color: 'var(--rt-white-text)',
          borderRadius: 'var(--rt-radius)',
        }}
      >
        {copy.nav.skipToContent}
      </a>

      {/* `inner`: el nav arranca en papel y los enlaces de sección vuelven al home */}
      <MarketingNav copy={copy} variant="inner" altHref={doc.altHref} />

      <main id="contenido">
        <div
          className="pt-26 pb-10"
          style={{ background: 'var(--rt-surface)', borderBottom: '1px solid var(--rt-border-soft)' }}
        >
          <div className={CONTAINER}>
            <Kicker>{copy.locale === 'es' ? 'Legal' : 'Legal'}</Kicker>
            <h1
              className="mt-3.5 font-semibold max-w-[20ch]"
              style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
            >
              {doc.title}
            </h1>
            <p className="mt-4 text-[13px]" style={{ color: 'var(--rt-slate-60)' }}>
              {renderInline(doc.meta)}
            </p>
          </div>
        </div>

        <div className={`${CONTAINER} grid gap-10 pt-12 pb-20 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16`}>
          <details className="text-[13px] lg:sticky lg:top-22 lg:self-start" open>
            <summary
              className="py-3 font-semibold lg:hidden"
              style={{ color: 'var(--rt-ink)' }}
            >
              {legal.tocLabel}
            </summary>
            <ol className="grid gap-2.5 pt-1">
              {doc.sections.map(section => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="leading-snug"
                    style={{ color: 'var(--rt-slate-60)' }}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </details>

          <article className="max-w-[68ch]">
            {doc.intro.length > 0 && <Blocks blocks={doc.intro} />}

            {doc.sections.map(section => (
              <section key={section.id}>
                <h2
                  id={section.id}
                  className="mt-11 font-semibold scroll-mt-22"
                  style={{ fontSize: 'clamp(18px, 2vw, 22px)' }}
                >
                  {section.title}
                </h2>
                <Blocks blocks={section.blocks} />
              </section>
            ))}
          </article>
        </div>
      </main>

      <MarketingFooter copy={copy} />
    </div>
  )
}
