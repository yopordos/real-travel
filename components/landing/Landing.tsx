import type { LandingCopy } from '@/lib/landing-copy'
import { MarketingNav } from './MarketingNav'
import { Hero } from './Hero'
import { EvidenceBar } from './EvidenceBar'
import { Layers } from './Layers'
import { Audience } from './Audience'
import { Steps } from './Steps'
import { Contact } from './Contact'
import { MarketingFooter } from './MarketingFooter'
import { RevealRoot } from './RevealRoot'

/** La landing completa. Recibe su idioma por props; no conoce el diccionario. */
export function Landing({ copy }: { copy: LandingCopy }) {
  return (
    <div lang={copy.locale}>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:m-4 focus:px-4 focus:py-2 focus:rounded-full"
        style={{ background: 'var(--color-crimson)', color: 'white' }}
      >
        {copy.nav.skipToContent}
      </a>

      <MarketingNav copy={copy} />

      <main id="contenido">
        <Hero copy={copy} />
        <RevealRoot>
          <EvidenceBar copy={copy.evidence} />
          <Layers copy={copy} />
          <Audience copy={copy.audience} />
          <Steps copy={copy.steps} />
        </RevealRoot>
        <Contact copy={copy.contact} />
      </main>

      <MarketingFooter copy={copy} />
    </div>
  )
}
