import type { LandingCopy } from '@/lib/landing-copy'
import { MarketingNav } from './MarketingNav'
import { Hero } from './Hero'
import { Showcase } from './Showcase'
import { Problem } from './Problem'
import { HowItWorks } from './HowItWorks'
import { Model } from './Model'
import { Products } from './Products'
import { WhyUs } from './WhyUs'
import { Contact } from './Contact'
import { MarketingFooter } from './MarketingFooter'

/**
 * La landing completa. Recibe su idioma por props; no conoce el diccionario.
 * `rt-scope` aplica el design system oficial (Poppins y tokens --rt-*) sin
 * tocar la identidad editorial de la app del viajero.
 */
export function Landing({ copy }: { copy: LandingCopy }) {
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

      <MarketingNav copy={copy} />

      <main id="contenido">
        <Hero copy={copy} />
        <Showcase copy={copy.showcase} />
        <Problem copy={copy.problem} />
        <HowItWorks copy={copy.how} />
        <Model copy={copy.model} />
        <Products copy={copy.products} />
        <WhyUs copy={copy.why} />
        <Contact copy={copy.contact} />
      </main>

      <MarketingFooter copy={copy} />
    </div>
  )
}
