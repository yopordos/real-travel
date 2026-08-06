# Landing de plataforma — Real Travel

**Fecha:** 2026-08-05
**Estado:** superado el 2026-08-06 — ver "Actualización" al final

> **Actualización 2026-08-06.** Apareció material de origen que reemplaza las
> hipótesis de este spec: `Dropbox/WIP/01. Real Travel/WebApp/02. Landing/Real_Travel_Landing.pdf`
> (estructura y copy comercial reales) y `.../01. Design System/` (tokens de marca).
> La landing implementada sigue ese material, no las secciones descritas aquí.
> Lo que sí sobrevive de este documento: la arquitectura de route groups, la
> estrategia de i18n con diccionario tipado y el criterio del formulario sin
> falso mensaje de éxito. Ver la sección final para el detalle de qué cambió.

## Contexto

Real Travel cambió de foco. Ya no se presenta como app de guía editorial para el viajero, sino como **plataforma web de visualización de destinos** (`webapp.realtravelapp.com`): el visitante consulta qué hay en un territorio — lugares, rutas, prestadores —, ese uso devuelve datos al gestor del destino, y la plataforma genera páginas personalizadas para cada prestador turístico.

La raíz de este repo hoy es `redirect('/explorar')`. Un intento previo de landing B2B (commit `98ccead`) fue revertido porque el mensaje era el equivocado: hablaba de "inteligencia turística", observatorio y ChatRT. Este spec conserva su decisión estructural correcta (route groups) y reemplaza el argumento.

## Objetivo

Landing institucional que consiga una conversación comercial. El visitante objetivo es un decisor que evalúa proveedores con escepticismo profesional.

**Comprador, en orden de foco:**

1. **Municipio / DMO / gobierno regional** — dueño del hero. No sabe qué hace el visitante en su territorio ni logra que el gasto llegue a los prestadores. Compra con presupuesto público y debe justificarlo.
2. **Gremio / cámara de turismo** — sus socios pequeños no tienen presencia digital.
3. **Hotel / operador ancla** — quiere mostrar el entorno a sus huéspedes y saber qué hacen fuera.

**Conversión:** formulario de contacto. Se entrega maquetado y funcional en el cliente, **sin endpoint conectado** — el `action` queda documentado como punto de conexión.

## Alcance

La landing pasa a ser el foco del repo. La app demo existente (`explorar`, `mapa`, `destinos`, `red-travel`, `favoritos`, `perfil`) se conserva intacta y accesible por URL directa, pero deja de ser el destino de la raíz.

**Fuera de alcance:** cambios funcionales dentro de la app demo, backend de contacto, CMS, analítica.

## Arquitectura

```
app/
  (marketing)/
    layout.tsx        nav + footer propios, sin AppShell
    page.tsx          landing en español  →  /
    en/page.tsx       landing en inglés   →  /en
  (app)/
    layout.tsx        AppShell + PwaRegister
    explorar/ mapa/ destinos/ red-travel/ favoritos/ perfil/ offline/
  layout.tsx          html, fuentes y metadata globales
components/
  landing/            componentes nuevos, aislados
lib/
  landing-copy.ts     diccionario tipado es/en
```

Las páginas de la app se **mueven de carpeta sin editarse**. `app/page.tsx` (el redirect) se elimina.

`app/layout.tsx` cede `AppShell` y `PwaRegister` a `app/(app)/layout.tsx` y se queda solo con `<html>`, las fuentes y la metadata: hoy envuelve toda la aplicación, y la landing no debe heredar la navegación de la app ni registrar el service worker.

### Internacionalización

Sin librería de i18n. `lib/landing-copy.ts` exporta un tipo `LandingCopy` y dos objetos, `es` y `en`, que lo satisfacen — el compilador garantiza que ninguna clave quede sin traducir. Ambas rutas renderizan el mismo componente `<Landing copy={...} />`.

El selector del nav es un enlace entre `/` y `/en`, no un toggle con estado: no hay flash de idioma, cada versión es indexable y no se carga copy que no se usa.

**Sobre `lang`:** Next solo permite declarar `<html lang>` en el layout raíz, que es único y compartido. La ruta `/en` envuelve su contenido en `<div lang="en">` — válido y respetado por lectores de pantalla — y declara `alternates.languages` en su metadata para el `hreflang`. La alternativa purista (dos layouts raíz, uno por idioma) obliga a recarga completa al cambiar de idioma y duplica la configuración de fuentes; no compensa para dos páginas.

### Componentes

Cada uno tiene una responsabilidad y recibe su copy por props — ninguno importa el diccionario directamente, así se prueban y reordenan sin acoplamiento.

| Componente | Responsabilidad |
|---|---|
| `MarketingNav` | Nav sticky: logo, anclas, selector de idioma, CTA |
| `Hero` | Titular + CTAs + `HeroMap` |
| `HeroMap` | Mapa Leaflet con pins y ruta animados (cliente) |
| `EvidenceBar` | Franja de cifras en `tabular-nums` |
| `LayerSection` | Una capa numerada: texto + mock. Recibe `side` para alternar |
| `MockDestino` | Maqueta HTML de la ficha de destino |
| `MockPanel` | Maqueta HTML del panel de datos |
| `MockPrestador` | Maqueta HTML de la página de prestador |
| `AudienceColumns` | Municipio / gremio / hotel |
| `Steps` | Los tres pasos de implementación |
| `ContactSection` | Formulario maquetado + cierre |
| `MarketingFooter` | Footer |

## Secciones

### 1. Nav

Sticky, fondo crema con blur al hacer scroll. Logo · Plataforma · Para quién · ES/EN · **Agendar demo** (carmesí).

Las anclas apuntan solo a secciones que existen. No hay enlace "Casos": no tenemos casos de cliente documentados y un ancla vacía es peor que una menos.

### 2. Hero

Asimétrico, 60/40 en escritorio; apilado en móvil con el mapa debajo del texto y altura contenida (~340px).

- Kicker: `PLATAFORMA DE DESTINO` / `DESTINATION PLATFORM`
- H1 (Fraunces, `clamp` hasta ~76px): **"Todo lo que tu destino ofrece, en un solo lugar. Y todo lo que el visitante hace, en datos."** / *"Everything your destination offers, in one place. Everything visitors do, in data."*
- Subcopy, una línea: lugares, rutas y prestadores publicados en una plataforma que el visitante usa y que te devuelve evidencia.
- CTA primario **Agendar demo**; secundario **Ver la plataforma** → `webapp.realtravelapp.com`.
- Derecha: `HeroMap`.

### 3. HeroMap

Mapa Leaflet real, tiles claros (CARTO Positron), sin controles, sin scroll-zoom, no arrastrable — es una demostración, no un widget. Sobre él entran ~12 pins carmesí escalonados (~90ms) y se traza una polilínea que los conecta.

Es **decorativo**: `aria-hidden="true"` y un párrafo `sr-only` que describe lo que muestra. Con `prefers-reduced-motion` aparece en su estado final, sin animación.

### 4. Franja de evidencia

`12 países · 60 destinos · 254 rutas · 14.000 puntos de interés` — `tabular-nums`, Fraunces para la cifra, DM Sans en mayúsculas pequeñas para la etiqueta, sobre regla horizontal. Sin cifra de usuarios: 6.000 debilita el argumento ante un municipio.

### 5. Las tres capas

Columna vertebral de la landing. Numeradas, alternando lado, separadas por reglas.

**01 — El visitante ve.** Entra a la página del destino y encuentra lugares, rutas y prestadores ordenados, no una lista plana. Mock: `MockDestino`.

**02 — El destino aprende.** Cada consulta devuelve evidencia: qué se busca, qué rutas se recorren, de dónde llega el visitante. Sirve para decidir y para justificar presupuesto. Mock: `MockPanel`.

**03 — El prestador aparece.** Cada prestador del territorio recibe su propia página, generada desde la plataforma. El pequeño que no tiene sitio web pasa a existir digitalmente. Mock: `MockPrestador`.

Los mocks se construyen en **HTML y CSS con los tokens del proyecto**, no como imágenes: nítidos en cualquier densidad de pantalla, pesan casi nada, se traducen con el resto del copy y no envejecen cuando cambia la webapp.

### 6. Tres audiencias

Tres columnas separadas por reglas — sin cards con sombra, que es la estética de SaaS genérico que evitamos.

- **Municipio / DMO** — datos para planificar y justificar; el territorio completo publicado.
- **Gremio / cámara** — presencia digital para cada socio, gestionada desde un solo lugar.
- **Hotel / operador** — el entorno mostrado al huésped; qué hace fuera del establecimiento.

### 7. Cómo se implementa

Tres pasos breves: **Levantamiento** (se digitaliza lugares, rutas y prestadores) → **Publicación** (destino en línea, prestadores con página) → **Medición** (datos de uso desde el primer día).

### 8. Cierre y contacto

Formulario: nombre, institución, correo, mensaje. Validación nativa HTML5, `<label>` visible en cada campo, estados de foco con el anillo carmesí ya definido.

Sin backend: el `<form>` lleva `action=""` y un comentario `{/* TODO: conectar endpoint (Formspree u otro) */}`. El botón no simula un envío exitoso — mostrar un falso "gracias" sería mentirle al visitante.

## Motion

Revelado al hacer scroll con el `useScrollReveal` que ya existe. Los mocks entran con un desplazamiento corto (~16px) y opacidad. Nada de parallax ni pinning.

Todo bajo `prefers-reduced-motion: reduce`: sin animación de pins, sin revelado, contenido visible de entrada.

## Rendimiento

El LCP es el titular del hero, no el mapa. `HeroMap` se importa con `next/dynamic` y `ssr: false`, y solo monta cuando su contenedor entra en viewport (IntersectionObserver); mientras tanto ocupa su espacio con un bloque del color `--color-map-placeholder`, sin salto de layout.

Sin fotografías propias: la landing no carga imágenes. Presupuesto: LCP < 2.5s e INP ≤ 200ms en móvil, medido en el deploy de Vercel.

## Accesibilidad

WCAG 2.2 AA. Contraste ya cubierto por los tokens (`#1c1a17` sobre `#faf9f6`). Recorrido completo por teclado incluido el selector de idioma y el formulario. Jerarquía de encabezados sin saltos: un `<h1>`, secciones en `<h2>`, capas en `<h3>`. Cifras y mocks son contenido, no imágenes con texto.

## Verificación

El repo no tiene framework de pruebas y este spec no introduce uno — sería andamiaje desproporcionado para una landing estática.

1. `npm run build` sin errores de TypeScript. El tipo `LandingCopy` es la red que garantiza paridad entre idiomas.
2. Revisión visual en 375px, 768px y 1440px.
3. Recorrido por teclado completo en ambos idiomas.
4. `prefers-reduced-motion` activado: sin movimiento.
5. Lighthouse móvil en el preview de Vercel: LCP y CLS dentro de presupuesto.
6. La app demo sigue respondiendo en `/explorar`, `/mapa`, `/red-travel` tras mover las carpetas.

## Riesgos

| Riesgo | Mitigación |
|---|---|
| Mover páginas a `(app)` rompe imports relativos | Los route groups no cambian las URLs; se verifica cada ruta tras mover |
| Leaflet en el hero castiga el LCP | Carga diferida por viewport, LCP es el titular |
| Las cifras envejecen | Viven en `landing-copy.ts`, en un solo lugar por idioma |
| El formulario parece funcional y no lo es | Sin falso mensaje de éxito; el TODO queda visible en el código |

---

## Actualización 2026-08-06 — lo que reemplaza a este spec

**Origen del contenido.** `Real_Travel_Landing.pdf` define el guion comercial: el
argumento es "la infraestructura digital de tu destino, ya construida", y el
público se amplía de gestores públicos a tres segmentos — destinos, prestadores
turísticos y organizadores de ferias. Sustituye a la hipótesis de las tres capas.

**Identidad.** El design system oficial manda sobre el PDF, que está maquetado en
teal y naranja sin respaldo en ningún token. La landing usa Poppins, rojo
`#b50933`, ámbar `#f2a65a`, fondo `#f2f3ef` y radio de 12px, expuestos como
tokens `--rt-*` bajo la clase `.rt-scope`. La app del viajero conserva su
identidad editorial (Fraunces, crema): son dos registros que conviven sin
pisarse.

**Secciones implementadas.** Hero con ilustración SVG · El problema · Tres pasos ·
Pagas por lo que usas (único bloque en rojo pleno) · Cinco productos · Detalle de
cada producto en `<details>` nativo · Por qué Real Travel · Cuéntanos tu caso.

**Decisiones de criterio.**

- Los pasos van numerados porque el orden es real; las tarjetas de producto no,
  porque son alternativas, no secuencia.
- El detalle de productos usa `<details>` nativo: abre con teclado, funciona sin
  JavaScript y el navegador lo despliega solo al saltar desde "Ver qué incluye".
- El PDF escribe "Aparecés ante viajeros"; el design system fija tú informal, así
  que la landing dice "Apareces".
- Sin revelado por scroll: el contenido está visible desde el primer render.

**Pendiente.** Conectar el `action` del formulario. El correo `hola@realtravelapp.com`
es un supuesto y hay que confirmarlo.
