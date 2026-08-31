import type { Metadata } from 'next'
import { LegalPage } from '@/components/landing/LegalPage'
import { en } from '@/lib/landing-copy'
import { legalEn } from '@/lib/legal-copy'

const doc = legalEn.privacy

export const metadata: Metadata = {
  title: `${doc.title} — Real Travel`,
  description: doc.description,
  alternates: {
    canonical: doc.href,
    languages: { es: doc.altHref, en: doc.href },
  },
}

export default function PrivacyEN() {
  return <LegalPage copy={en} legal={legalEn} doc={doc} />
}
