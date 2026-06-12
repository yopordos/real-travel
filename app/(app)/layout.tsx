import { AppShell } from '@/components/layout/AppShell'

// La app del viajero vive bajo el shell (sidebar + header móvil).
// La landing de plataforma en (marketing) tiene su propio layout.
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <AppShell>{children}</AppShell>
}
