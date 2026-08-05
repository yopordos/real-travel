'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

/** Activa el revelado por scroll de los elementos `.reveal` que contiene. */
export function RevealRoot({ children }: { children: React.ReactNode }) {
  const ref = useScrollReveal()
  return <div ref={ref}>{children}</div>
}
