import type { Metadata } from 'next'
import { Landing } from '@/components/landing/Landing'
import { es } from '@/lib/landing-copy'

export const metadata: Metadata = {
  title: 'Real Travel — Plataforma de destino',
  description: es.hero.lead,
  alternates: {
    canonical: '/',
    languages: { es: '/', en: '/en' },
  },
}

export default function LandingES() {
  return <Landing copy={es} />
}
