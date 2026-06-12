import Link from 'next/link'
import {
  MapTrifold, Monitor, QrCode, ChatTeardropText,
  Buildings, Bed, Handshake, AirplaneTakeoff, Globe,
  ArrowRight, CloudArrowDown, UsersThree, TrendUp,
} from '@phosphor-icons/react/dist/ssr'
import { Card } from '@/components/ui/Card'
import { LUGARES } from '@/lib/data'

export const metadata = {
  title: 'Real Travel — Inteligencia turística',
  description:
    'Plataforma de inteligencia turística: mide qué hacen los visitantes para que destinos, municipios y comercios decidan con datos empíricos. 14 países, 21.000+ POIs, WSA 2024.',
}

const STATS = [
  { value: '14', label: 'Países en operación' },
  { value: '21.000+', label: 'Puntos de interés digitalizados' },
  { value: 'WSA 2024', label: 'Tourism & Culture, ganadora' },
]

const HERRAMIENTAS = [
  {
    Icon: MapTrifold,
    title: 'Mapas interactivos',
    body: 'Cartografía viva del destino: cada interacción del visitante queda registrada y alimenta el observatorio.',
  },
  {
    Icon: Monitor,
    title: 'Kioscos táctiles',
    body: 'Puntos de información física en plazas, terminales y centros de visitantes, conectados a la misma base de datos.',
  },
  {
    Icon: QrCode,
    title: 'Códigos QR',
    body: 'Señalética inteligente en monumentos y comercios. Cada escaneo es un dato de comportamiento georreferenciado.',
  },
  {
    Icon: ChatTeardropText,
    title: 'ChatRT',
    body: 'Asistente de IA entrenado con el contenido del destino. Responde al visitante y revela qué pregunta el turista.',
  },
]

const AUDIENCIAS = [
  { Icon: Buildings, label: 'Municipios' },
  { Icon: Globe, label: 'Destinos y DMOs' },
  { Icon: Bed, label: 'Hoteles' },
  { Icon: Handshake, label: 'Gremios' },
  { Icon: AirplaneTakeoff, label: 'Aeropuertos' },
]

const MUESTRA_RETENCION = [
  { zona: 'Centro histórico', visitas: '12.480', retencion: '64%', delta: '+8,2' },
  { zona: 'Barrio del puerto', visitas: '7.912', retencion: '51%', delta: '+3,1' },
  { zona: 'Mercado municipal', visitas: '5.347', retencion: '72%', delta: '+11,4' },
  { zona: 'Mirador norte', visitas: '3.165', retencion: '38%', delta: '−2,7' },
]

export default function LandingPage() {
  const preview = LUGARES.filter(l => ['sagrada-familia', 'alhambra'].includes(l.id))

  return (
    <div className="w-full">

      {/* ════ Hero — tipográfico, evidencia a la derecha ════ */}
      <section className="px-5 sm:px-8 lg:px-12 max-w-[1400px] mx-auto pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">

          <div className="lg:col-span-7">
            <p
              className="text-xs font-bold uppercase mb-6"
              style={{ color: 'var(--color-crimson)', letterSpacing: '0.14em' }}
            >
              Plataforma de inteligencia turística
            </p>
            <h1
              className="mb-7"
              style={{
                fontFamily: 'var(--font-family-display)',
                color: 'var(--color-text-primary)',
                fontSize: 'clamp(2.75rem, 5vw, 4.5rem)',
                letterSpacing: '-0.02em',
                lineHeight: 1.02,
                fontWeight: 600,
                textWrap: 'balance',
              } as React.CSSProperties}
            >
              El destino se gestiona con evidencia, no con intuición
            </h1>
            <p
              className="text-lg leading-relaxed mb-10"
              style={{ color: 'var(--color-text-muted)', maxWidth: '52ch' }}
            >
              Real Travel mide qué hacen los visitantes: por dónde caminan, qué escanean,
              qué preguntan y dónde gastan. Municipios, destinos y comercios deciden
              con datos empíricos.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:contacto@realtravel.app?subject=Demo%20Real%20Travel"
                className="px-7 py-3.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                style={{ background: 'var(--color-crimson)' }}
              >
                Solicitar una demo
              </a>
              <Link
                href="/explorar"
                className="flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-60"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Explorar como viajero
                <ArrowRight size={15} weight="bold" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Columna de evidencia — estilo informe anual */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-0 lg:pl-8">
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                className="py-6 border-t last:border-b"
                style={{ borderColor: 'var(--color-text-primary)' }}
              >
                <p
                  className="mb-1"
                  style={{
                    fontFamily: 'var(--font-family-display)',
                    color: 'var(--color-text-primary)',
                    fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                    fontWeight: 600,
                    lineHeight: 1,
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {value}
                </p>
                <p
                  className="text-[11px] font-semibold uppercase"
                  style={{ color: 'var(--color-text-muted)', letterSpacing: '0.08em' }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ Dos frentes ════ */}
      <section id="plataforma" className="px-5 sm:px-8 lg:px-12 max-w-[1400px] mx-auto pb-28 scroll-mt-20">
        <div
          className="flex items-baseline justify-between mb-12 pb-3 border-b"
          style={{ borderColor: 'var(--color-text-primary)' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-family-display)',
              color: 'var(--color-text-primary)',
              fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
              fontWeight: 600,
              lineHeight: 1,
            }}
          >
            Una plataforma, dos caras
          </h2>
          <span
            className="text-[11px] font-semibold uppercase flex-shrink-0"
            style={{ color: 'var(--color-text-muted)', letterSpacing: '0.08em' }}
          >
            B2C · B2B
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Viajeros — con preview real de la app */}
          <div>
            <p
              className="text-xs font-bold uppercase mb-3"
              style={{ color: 'var(--color-crimson)', letterSpacing: '0.12em' }}
            >
              Para viajeros
            </p>
            <h3
              className="mb-4"
              style={{
                fontFamily: 'var(--font-family-display)',
                color: 'var(--color-text-primary)',
                fontSize: '1.5rem',
                fontWeight: 600,
              }}
            >
              Una guía que funciona sin señal
            </h3>
            <p className="text-[15px] leading-relaxed mb-5" style={{ color: 'var(--color-text-muted)', maxWidth: '48ch' }}>
              Mapas interactivos offline, rutas y atracciones con contenido editorial local,
              comercios con beneficios exclusivos y una comunidad que comparte lo que encontró.
            </p>
            <ul className="flex flex-col gap-2.5 mb-8 text-sm" style={{ color: 'var(--color-text-primary)' }}>
              <li className="flex items-center gap-2.5">
                <CloudArrowDown size={16} weight="regular" style={{ color: 'var(--color-crimson)' }} aria-hidden="true" />
                Contenido descargable para zonas sin conexión
              </li>
              <li className="flex items-center gap-2.5">
                <MapTrifold size={16} weight="regular" style={{ color: 'var(--color-crimson)' }} aria-hidden="true" />
                Rutas y puntos de interés georreferenciados
              </li>
              <li className="flex items-center gap-2.5">
                <UsersThree size={16} weight="regular" style={{ color: 'var(--color-crimson)' }} aria-hidden="true" />
                Comunidad de viajeros: reseñas y rutas compartidas
              </li>
            </ul>

            {/* Preview viva: cards reales del catálogo */}
            <div className="grid grid-cols-2 gap-5 mb-6">
              {preview.map(lugar => (
                <Card key={lugar.id} {...lugar} />
              ))}
            </div>
            <Link
              href="/explorar"
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-60"
              style={{ color: 'var(--color-crimson)' }}
            >
              Abrir la guía
              <ArrowRight size={15} weight="bold" aria-hidden="true" />
            </Link>
          </div>

          {/* Instituciones — herramientas */}
          <div>
            <p
              className="text-xs font-bold uppercase mb-3"
              style={{ color: 'var(--color-crimson)', letterSpacing: '0.12em' }}
            >
              Para organizaciones e instituciones
            </p>
            <h3
              className="mb-4"
              style={{
                fontFamily: 'var(--font-family-display)',
                color: 'var(--color-text-primary)',
                fontSize: '1.5rem',
                fontWeight: 600,
              }}
            >
              Herramientas que convierten visitas en datos
            </h3>
            <p className="text-[15px] leading-relaxed mb-8" style={{ color: 'var(--color-text-muted)', maxWidth: '48ch' }}>
              Cada punto de contacto con el visitante es también un instrumento de medición
              conectado al observatorio del destino.
            </p>

            <div className="flex flex-col">
              {HERRAMIENTAS.map(({ Icon, title, body }, i) => (
                <div
                  key={title}
                  className="flex gap-5 py-6"
                  style={{ borderTop: i > 0 ? '1px solid var(--color-border)' : 'none' }}
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--color-crimson-light)' }}
                  >
                    <Icon size={20} weight="regular" style={{ color: 'var(--color-crimson)' }} aria-hidden="true" />
                  </div>
                  <div>
                    <h4
                      className="font-bold text-base mb-1"
                      style={{ fontFamily: 'var(--font-family-display)', color: 'var(--color-text-primary)' }}
                    >
                      {title}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)', maxWidth: '46ch' }}>
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ Observatorio — sección en tinta ════ */}
      <section id="observatorio" className="scroll-mt-20" style={{ background: 'var(--color-text-primary)' }}>
        <div className="px-5 sm:px-8 lg:px-12 max-w-[1400px] mx-auto py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

            <div className="lg:col-span-5">
              <p
                className="text-xs font-bold uppercase mb-5"
                style={{ color: '#e89aa8', letterSpacing: '0.14em' }}
              >
                El observatorio
              </p>
              <h2
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-family-display)',
                  color: 'var(--color-surface)',
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 600,
                  lineHeight: 1.1,
                  letterSpacing: '-0.015em',
                }}
              >
                Lo que el turista hace, medido
              </h2>
              <p className="text-[15px] leading-relaxed mb-7" style={{ color: 'rgba(250,249,246,0.7)', maxWidth: '46ch' }}>
                El observatorio agrega cada interacción (escaneos, consultas, recorridos,
                canjes en comercios) en indicadores accionables. El Índice de Retención Local
                muestra cuánto del gasto turístico permanece en el destino.
              </p>
              <ul className="flex flex-col gap-3 text-sm" style={{ color: 'rgba(250,249,246,0.85)' }}>
                <li className="flex items-start gap-3">
                  <TrendUp size={17} weight="regular" style={{ color: '#e89aa8', flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                  Comportamiento del visitante en tiempo real, por zona y temporada
                </li>
                <li className="flex items-start gap-3">
                  <TrendUp size={17} weight="regular" style={{ color: '#e89aa8', flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                  Presupuestos justificados con evidencia, no con percepciones
                </li>
              </ul>
            </div>

            {/* Tabla de muestra — Índice de Retención Local */}
            <div className="lg:col-span-7">
              <div
                className="rounded-lg overflow-hidden"
                style={{ border: '1px solid rgba(250,249,246,0.15)' }}
              >
                <div
                  className="px-6 py-4 flex items-baseline justify-between border-b"
                  style={{ borderColor: 'rgba(250,249,246,0.15)' }}
                >
                  <span
                    className="text-sm font-bold"
                    style={{ fontFamily: 'var(--font-family-display)', color: 'var(--color-surface)' }}
                  >
                    Índice de Retención Local
                  </span>
                  <span
                    className="text-[10px] font-semibold uppercase"
                    style={{ color: 'rgba(250,249,246,0.5)', letterSpacing: '0.08em' }}
                  >
                    Datos de muestra · últimos 30 días
                  </span>
                </div>
                <table className="w-full text-sm" style={{ color: 'rgba(250,249,246,0.9)' }}>
                  <thead>
                    <tr
                      className="text-[10px] uppercase text-left"
                      style={{ color: 'rgba(250,249,246,0.5)', letterSpacing: '0.08em' }}
                    >
                      <th className="px-6 py-3 font-semibold">Zona</th>
                      <th className="px-4 py-3 font-semibold text-right">Visitas</th>
                      <th className="px-4 py-3 font-semibold text-right">Retención</th>
                      <th className="px-6 py-3 font-semibold text-right">Δ mes</th>
                    </tr>
                  </thead>
                  <tbody style={{ fontVariantNumeric: 'tabular-nums' }}>
                    {MUESTRA_RETENCION.map(row => (
                      <tr
                        key={row.zona}
                        className="border-t"
                        style={{ borderColor: 'rgba(250,249,246,0.1)' }}
                      >
                        <td className="px-6 py-3.5">{row.zona}</td>
                        <td className="px-4 py-3.5 text-right">{row.visitas}</td>
                        <td className="px-4 py-3.5 text-right font-semibold" style={{ color: 'var(--color-surface)' }}>
                          {row.retencion}
                        </td>
                        <td
                          className="px-6 py-3.5 text-right"
                          style={{ color: row.delta.startsWith('−') ? '#e89aa8' : '#9fd4a8' }}
                        >
                          {row.delta}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ ChatRT ════ */}
      <section id="chatrt" className="px-5 sm:px-8 lg:px-12 max-w-[1400px] mx-auto py-28 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Mock de conversación */}
          <div className="order-2 lg:order-1">
            <div
              className="rounded-xl p-7 flex flex-col gap-4"
              style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)' }}
            >
              <div className="flex items-center gap-2.5 pb-4 border-b" style={{ borderColor: 'var(--color-border)' }}>
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'var(--color-crimson)' }}
                >
                  <ChatTeardropText size={15} color="white" weight="fill" aria-hidden="true" />
                </span>
                <span
                  className="font-bold text-sm"
                  style={{ fontFamily: 'var(--font-family-display)', color: 'var(--color-text-primary)' }}
                >
                  ChatRT
                </span>
              </div>

              <div className="self-end max-w-[80%] px-4 py-2.5 rounded-xl rounded-br-sm text-sm" style={{ background: 'var(--color-crimson)', color: 'white' }}>
                ¿Dónde puedo almorzar cocina local cerca de la plaza, que abra los lunes?
              </div>
              <div
                className="self-start max-w-[85%] px-4 py-2.5 rounded-xl rounded-bl-sm text-sm leading-relaxed"
                style={{ background: 'var(--color-surface)', color: 'var(--color-text-primary)', border: '1px solid var(--color-border)' }}
              >
                A 4 minutos a pie está el Mercado Municipal: doce cocinerías abiertas de lunes
                a sábado hasta las 16:00. La de la señora Edith (puesto 7) lleva 30 años
                haciendo cazuela de vacuno. ¿Te trazo la ruta?
              </div>
              <p className="text-[11px] mt-1" style={{ color: 'var(--color-text-muted)' }}>
                Cada conversación revela qué busca el visitante y alimenta el observatorio.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p
              className="text-xs font-bold uppercase mb-3"
              style={{ color: 'var(--color-crimson)', letterSpacing: '0.12em' }}
            >
              Asistente de IA del destino
            </p>
            <h2
              className="mb-5"
              style={{
                fontFamily: 'var(--font-family-display)',
                color: 'var(--color-text-primary)',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: '-0.015em',
              }}
            >
              ChatRT responde como un local que sabe de datos
            </h2>
            <p className="text-[15px] leading-relaxed" style={{ color: 'var(--color-text-muted)', maxWidth: '50ch' }}>
              Entrenado con los 21.000+ puntos de interés de la plataforma y el contenido
              editorial de cada destino. Para el viajero es un concierge; para el gestor,
              la fuente más honesta de lo que el turista realmente pregunta.
            </p>
          </div>
        </div>
      </section>

      {/* ════ Para quién ════ */}
      <section className="px-5 sm:px-8 lg:px-12 max-w-[1400px] mx-auto pb-28">
        <div
          className="flex items-baseline justify-between mb-10 pb-3 border-b"
          style={{ borderColor: 'var(--color-text-primary)' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-family-display)',
              color: 'var(--color-text-primary)',
              fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
              fontWeight: 600,
              lineHeight: 1,
            }}
          >
            Hecho para quien gestiona el destino
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6">
          {AUDIENCIAS.map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-start gap-3">
              <Icon size={26} weight="regular" style={{ color: 'var(--color-crimson)' }} aria-hidden="true" />
              <span
                className="font-bold text-base"
                style={{ fontFamily: 'var(--font-family-display)', color: 'var(--color-text-primary)' }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ════ CTA final ════ */}
      <section className="px-5 sm:px-8 lg:px-12 max-w-[1400px] mx-auto pb-28">
        <div
          className="rounded-2xl px-8 sm:px-14 py-16 text-center"
          style={{ background: 'var(--color-crimson)' }}
        >
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: 'var(--font-family-display)',
              fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)',
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: '-0.015em',
              textWrap: 'balance',
            } as React.CSSProperties}
          >
            Lleva tu destino de la intuición a la evidencia
          </h2>
          <p className="text-white/75 text-[15px] mb-9 max-w-lg mx-auto leading-relaxed">
            Únete a los destinos de 14 países que ya miden lo que sus visitantes hacen.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:contacto@realtravel.app?subject=Demo%20Real%20Travel"
              className="px-7 py-3.5 rounded-lg text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
              style={{ background: 'var(--color-surface)', color: 'var(--color-crimson)' }}
            >
              Solicitar una demo
            </a>
            <Link
              href="/explorar"
              className="flex items-center gap-1.5 text-sm font-semibold text-white transition-opacity hover:opacity-70"
            >
              Probar la app del viajero
              <ArrowRight size={15} weight="bold" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
