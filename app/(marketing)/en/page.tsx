import type { Metadata } from 'next'
import { Landing } from '@/components/landing/Landing'
import { en } from '@/lib/landing-copy'

export const metadata: Metadata = {
  title: 'Real Travel — Destination platform',
  description: en.hero.lead,
  alternates: {
    canonical: '/en',
    languages: { es: '/', en: '/en' },
  },
}

export default function LandingEN() {
  return <Landing copy={en} />
}
