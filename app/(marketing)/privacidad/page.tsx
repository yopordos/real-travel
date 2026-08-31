import type { Metadata } from 'next'
import { LegalPage } from '@/components/landing/LegalPage'
import { es } from '@/lib/landing-copy'
import { legalEs } from '@/lib/legal-copy'

const doc = legalEs.privacy

export const metadata: Metadata = {
  title: `${doc.title} — Real Travel`,
  description: doc.description,
  alternates: {
    canonical: doc.href,
    languages: { es: doc.href, en: doc.altHref },
  },
}

export default function PrivacidadES() {
  return <LegalPage copy={es} legal={legalEs} doc={doc} />
}
