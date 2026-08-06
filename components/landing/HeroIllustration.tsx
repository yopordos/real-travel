/**
 * Mapa esquemático del hero: puntos de interés unidos por una ruta, dentro de
 * un panel que insinúa la interfaz. SVG puro — sin imágenes ni librería de mapas.
 */
export function HeroIllustration({ alt }: { alt: string }) {
  return (
    <figure className="m-0 w-full">
      <svg
        viewBox="0 0 520 360"
        className="w-full h-auto"
        role="img"
        aria-label={alt}
        style={{ borderRadius: 'var(--rt-radius-xl)', boxShadow: 'var(--rt-shadow-card)' }}
      >
        <rect width="520" height="360" rx="24" fill="var(--rt-surface)" />
        <rect x="1" y="1" width="518" height="358" rx="23" fill="none" stroke="var(--rt-border-soft)" />

        {/* Retícula del mapa */}
        <g stroke="var(--rt-sunken)" strokeWidth="1">
          {[60, 120, 180, 240, 300].map(y => (
            <line key={y} x1="28" y1={y} x2="492" y2={y} />
          ))}
          {[100, 180, 260, 340, 420].map(x => (
            <line key={x} x1={x} y1="28" x2={x} y2="332" />
          ))}
        </g>

        {/* Masa de agua */}
        <path
          d="M356 28 C 392 76, 404 140, 388 196 C 374 250, 400 300, 448 332 L 492 332 L 492 28 Z"
          fill="var(--rt-sunken)"
        />

        {/* Ruta que conecta los puntos */}
        <path
          d="M92 268 C 150 236, 168 176, 220 156 C 268 138, 296 168, 332 140 C 366 114, 372 78, 404 66"
          fill="none"
          stroke="var(--rt-red-700)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="2 9"
          opacity="0.85"
        />

        {/* Puntos de interés */}
        {[
          { x: 92, y: 268, r: 9 },
          { x: 220, y: 156, r: 7 },
          { x: 332, y: 140, r: 7 },
          { x: 404, y: 66, r: 9 },
        ].map(p => (
          <g key={`${p.x}-${p.y}`}>
            <circle cx={p.x} cy={p.y} r={p.r + 6} fill="var(--rt-red-100)" />
            <circle cx={p.x} cy={p.y} r={p.r} fill="var(--rt-red-700)" stroke="var(--rt-surface)" strokeWidth="2.5" />
          </g>
        ))}

        {/* Punto destacado — el único acento ámbar */}
        <g>
          <circle cx="168" cy="212" r="13" fill="var(--rt-amber-100)" />
          <circle cx="168" cy="212" r="7" fill="var(--rt-amber-500)" stroke="var(--rt-surface)" strokeWidth="2.5" />
        </g>

        {/* Ficha flotante de un punto */}
        <g>
          <rect x="240" y="228" width="184" height="72" rx="12" fill="var(--rt-surface)" stroke="var(--rt-border-soft)" />
          <rect x="256" y="246" width="40" height="40" rx="8" fill="var(--rt-sunken)" />
          <rect x="308" y="250" width="92" height="9" rx="4.5" fill="var(--rt-slate)" opacity="0.75" />
          <rect x="308" y="266" width="66" height="7" rx="3.5" fill="var(--rt-slate-40)" />
          <rect x="308" y="279" width="44" height="7" rx="3.5" fill="var(--rt-red-100)" />
        </g>

        {/* Barra de búsqueda */}
        <rect x="28" y="28" width="200" height="30" rx="15" fill="var(--rt-surface)" stroke="var(--rt-border-soft)" />
        <circle cx="46" cy="43" r="5.5" fill="none" stroke="var(--rt-slate-40)" strokeWidth="1.8" />
        <line x1="50" y1="47" x2="54" y2="51" stroke="var(--rt-slate-40)" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="64" y="39" width="96" height="8" rx="4" fill="var(--rt-sunken)" />
      </svg>
    </figure>
  )
}
