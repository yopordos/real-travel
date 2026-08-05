import { AppShell } from '@/components/layout/AppShell'
import { PwaRegister } from '@/components/pwa/PwaRegister'

/** La app del viajero: navegación lateral y service worker. La landing no hereda nada de esto. */
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PwaRegister />
      <AppShell>{children}</AppShell>
    </>
  )
}
