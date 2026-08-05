// ─── Copy de la landing institucional ─────────────────────────────────────────
// Una sola fuente por idioma. El tipo LandingCopy es la garantía de paridad:
// si falta una clave en `en`, el build falla.

export interface LandingCopy {
  locale: 'es' | 'en'
  altHref: string
  altLabel: string
  nav: { platform: string; audience: string; cta: string; skipToContent: string }
  hero: {
    kicker: string
    title: string
    lead: string
    ctaPrimary: string
    ctaSecondary: string
    ctaNote: string
    mapDescription: string
    mapCaption: string
  }
  evidence: { label: string; items: { value: string; label: string }[] }
  layers: {
    sectionKicker: string
    sectionTitle: string
    sectionLead: string
    items: {
      id: string
      layer: string
      title: string
      body: string
      mock: 'destino' | 'panel' | 'prestador'
    }[]
  }
  audience: {
    sectionKicker: string
    sectionTitle: string
    items: { role: string; pain: string; gain: string }[]
  }
  steps: {
    sectionKicker: string
    sectionTitle: string
    items: { title: string; body: string }[]
  }
  contact: {
    kicker: string
    title: string
    lead: string
    fields: { name: string; org: string; email: string; message: string }
    submit: string
    fallbackLead: string
    fallbackEmail: string
  }
  mocks: {
    destino: {
      place: string
      region: string
      counters: { value: string; label: string }[]
      routesTitle: string
      routes: { name: string; meta: string }[]
    }
    panel: {
      title: string
      period: string
      chartLabel: string
      topTitle: string
      top: { name: string; value: string }[]
      originTitle: string
      origin: { name: string; value: string }[]
    }
    prestador: {
      kind: string
      name: string
      place: string
      fields: { label: string; value: string }[]
      cta: string
    }
  }
  footer: { tagline: string; demoLink: string; platformLink: string; rights: string }
}

const territory = {
  place: 'Puerto Varas',
  region: 'Región de Los Lagos, Chile',
}

export const es: LandingCopy = {
  locale: 'es',
  altHref: '/en',
  altLabel: 'EN',
  nav: {
    platform: 'Plataforma',
    audience: 'Para quién',
    cta: 'Contáctanos',
    skipToContent: 'Saltar al contenido',
  },
  hero: {
    kicker: 'Plataforma de destino',
    title: 'Publica tu territorio. Mide quién lo recorre.',
    lead: 'Real Travel pone los lugares, rutas y prestadores de tu destino en una plataforma que el visitante usa mientras camina — y devuelve a tu gestión los datos de ese recorrido.',
    ctaPrimary: 'Ver la plataforma',
    ctaSecondary: 'Contáctanos',
    ctaNote: 'Abierta y en línea: entra sin registrarte.',
    mapDescription: `Mapa de ${territory.place} con los puntos de interés del destino y una ruta trazada entre ellos.`,
    mapCaption: `${territory.place} — 84 puntos publicados`,
  },
  evidence: {
    label: 'Real Travel hoy',
    items: [
      { value: '12', label: 'países' },
      { value: '60', label: 'destinos' },
      { value: '254', label: 'rutas' },
      { value: '14.000', label: 'puntos de interés' },
    ],
  },
  layers: {
    sectionKicker: 'La plataforma',
    sectionTitle: 'Un territorio, tres capas',
    sectionLead: 'No son etapas de un proyecto: funcionan a la vez. Lo que el visitante consulta alimenta lo que tu gestión mide, y lo que tu gestión publica es lo que el visitante encuentra.',
    items: [
      {
        id: 'publica',
        layer: 'Capa pública',
        title: 'El visitante encuentra el territorio ordenado',
        body: 'Entra desde el navegador, sin instalar nada. Ve lugares, rutas y prestadores organizados por lo que quiere hacer, no por categoría administrativa. Funciona en el teléfono, en la calle, con una mano.',
        mock: 'destino',
      },
      {
        id: 'datos',
        layer: 'Capa de datos',
        title: 'Cada consulta deja evidencia',
        body: 'Qué se busca, qué rutas se recorren, dónde se detiene el visitante y de dónde llega. Datos de uso para decidir dónde invertir y para justificar el presupuesto con algo más que intuición.',
        mock: 'panel',
      },
      {
        id: 'prestador',
        layer: 'Capa del prestador',
        title: 'Cada prestador recibe su propia página',
        body: 'La plataforma genera una página para cada hotel, restaurante y operador del territorio, con su ficha, ubicación y contacto. El prestador pequeño que nunca tuvo sitio web pasa a existir en línea.',
        mock: 'prestador',
      },
    ],
  },
  audience: {
    sectionKicker: 'Para quién',
    sectionTitle: 'Tres formas de usar la misma plataforma',
    items: [
      {
        role: 'Municipio y DMO',
        pain: 'Promocionas el destino sin saber qué hace el visitante una vez que llega.',
        gain: 'El territorio completo publicado y datos de uso para planificar y rendir cuentas.',
      },
      {
        role: 'Gremio y cámara de turismo',
        pain: 'Tus socios pequeños no aparecen en ningún buscador.',
        gain: 'Una página por socio, gestionada desde un solo lugar.',
      },
      {
        role: 'Hotel y operador',
        pain: 'El huésped sale del establecimiento y pierdes el rastro.',
        gain: 'El entorno mostrado en tu marca y visibilidad de lo que hace fuera.',
      },
    ],
  },
  steps: {
    sectionKicker: 'Implementación',
    sectionTitle: 'De la primera reunión al primer dato',
    items: [
      {
        title: 'Levantamiento',
        body: 'Digitalizamos lugares, rutas y prestadores del territorio junto a tu equipo.',
      },
      {
        title: 'Publicación',
        body: 'El destino queda en línea y cada prestador estrena su página.',
      },
      {
        title: 'Medición',
        body: 'Los datos de uso llegan desde el primer visitante, sin instalar nada.',
      },
    ],
  },
  contact: {
    kicker: 'Contacto',
    title: 'Conversemos sobre tu destino',
    lead: 'Cuéntanos qué territorio gestionas y te mostramos cómo se vería publicado.',
    fields: {
      name: 'Nombre',
      org: 'Institución',
      email: 'Correo',
      message: 'Qué territorio gestionas',
    },
    submit: 'Enviar mensaje',
    fallbackLead: 'O escríbenos directamente a',
    fallbackEmail: 'hola@realtravelapp.com',
  },
  mocks: {
    destino: {
      place: territory.place,
      region: territory.region,
      counters: [
        { value: '84', label: 'lugares' },
        { value: '6', label: 'rutas' },
        { value: '31', label: 'prestadores' },
      ],
      routesTitle: 'Rutas del destino',
      routes: [
        { name: 'Borde del lago', meta: '4,2 km · 2 h' },
        { name: 'Arquitectura alemana', meta: '2,8 km · 1 h 30' },
        { name: 'Cocina del sur', meta: '9 paradas' },
      ],
    },
    panel: {
      title: 'Uso del destino',
      period: 'Últimos 30 días',
      chartLabel: 'Consultas por día',
      topTitle: 'Rutas más recorridas',
      top: [
        { name: 'Borde del lago', value: '1.284' },
        { name: 'Cocina del sur', value: '870' },
        { name: 'Arquitectura alemana', value: '612' },
      ],
      originTitle: 'Origen del visitante',
      origin: [
        { name: 'Santiago', value: '38%' },
        { name: 'Argentina', value: '21%' },
        { name: 'Brasil', value: '12%' },
      ],
    },
    prestador: {
      kind: 'Restaurante',
      name: 'Cocinería Los Colonos',
      place: territory.place,
      fields: [
        { label: 'Horario', value: 'Mar a dom · 12:00–22:00' },
        { label: 'Ubicación', value: 'Del Salvador 210' },
        { label: 'En la ruta', value: 'Cocina del sur' },
      ],
      cta: 'Cómo llegar',
    },
  },
  footer: {
    tagline: 'Plataforma de destino',
    demoLink: 'Ver la app del viajero',
    platformLink: 'Plataforma en vivo',
    rights: 'Real Travel. Todos los derechos reservados.',
  },
}

export const en: LandingCopy = {
  locale: 'en',
  altHref: '/',
  altLabel: 'ES',
  nav: {
    platform: 'Platform',
    audience: 'Who it serves',
    cta: 'Contact us',
    skipToContent: 'Skip to content',
  },
  hero: {
    kicker: 'Destination platform',
    title: 'Publish your territory. Measure who walks it.',
    lead: 'Real Travel puts your destination’s places, routes and providers on a platform visitors use while walking — and returns the data from that journey to your team.',
    ctaPrimary: 'See the platform',
    ctaSecondary: 'Contact us',
    ctaNote: 'Open and online: no sign-up needed.',
    mapDescription: `Map of ${territory.place} showing the destination’s points of interest and a route drawn between them.`,
    mapCaption: `${territory.place} — 84 points published`,
  },
  evidence: {
    label: 'Real Travel today',
    items: [
      { value: '12', label: 'countries' },
      { value: '60', label: 'destinations' },
      { value: '254', label: 'routes' },
      { value: '14,000', label: 'points of interest' },
    ],
  },
  layers: {
    sectionKicker: 'The platform',
    sectionTitle: 'One territory, three layers',
    sectionLead: 'These are not project stages — they run at once. What visitors look up feeds what your team measures, and what your team publishes is what visitors find.',
    items: [
      {
        id: 'publica',
        layer: 'Public layer',
        title: 'Visitors find the territory in order',
        body: 'They open it in a browser, nothing to install. Places, routes and providers are organised by what people want to do, not by administrative category. It works on a phone, on the street, one-handed.',
        mock: 'destino',
      },
      {
        id: 'datos',
        layer: 'Data layer',
        title: 'Every lookup leaves evidence',
        body: 'What gets searched, which routes are walked, where visitors stop and where they come from. Usage data to decide where to invest and to back a budget with more than intuition.',
        mock: 'panel',
      },
      {
        id: 'prestador',
        layer: 'Provider layer',
        title: 'Every provider gets its own page',
        body: 'The platform generates a page for each hotel, restaurant and operator in the territory, with its details, location and contact. The small provider that never had a website goes online.',
        mock: 'prestador',
      },
    ],
  },
  audience: {
    sectionKicker: 'Who it serves',
    sectionTitle: 'Three ways to use the same platform',
    items: [
      {
        role: 'Municipality and DMO',
        pain: 'You promote the destination without knowing what visitors do once they arrive.',
        gain: 'The whole territory published, and usage data to plan and account for it.',
      },
      {
        role: 'Trade association',
        pain: 'Your smaller members show up in no search result.',
        gain: 'One page per member, managed from a single place.',
      },
      {
        role: 'Hotel and operator',
        pain: 'Guests leave the building and you lose track of them.',
        gain: 'The surroundings shown under your brand, and visibility of what they do outside.',
      },
    ],
  },
  steps: {
    sectionKicker: 'Rollout',
    sectionTitle: 'From first meeting to first data point',
    items: [
      {
        title: 'Survey',
        body: 'We digitise the territory’s places, routes and providers alongside your team.',
      },
      {
        title: 'Launch',
        body: 'The destination goes live and every provider gets its page.',
      },
      {
        title: 'Measurement',
        body: 'Usage data arrives with the first visitor, nothing to install.',
      },
    ],
  },
  contact: {
    kicker: 'Contact',
    title: 'Let’s talk about your destination',
    lead: 'Tell us which territory you manage and we’ll show you how it would look published.',
    fields: {
      name: 'Name',
      org: 'Organisation',
      email: 'Email',
      message: 'Which territory you manage',
    },
    submit: 'Send message',
    fallbackLead: 'Or write to us directly at',
    fallbackEmail: 'hola@realtravelapp.com',
  },
  mocks: {
    destino: {
      place: territory.place,
      region: 'Los Lagos Region, Chile',
      counters: [
        { value: '84', label: 'places' },
        { value: '6', label: 'routes' },
        { value: '31', label: 'providers' },
      ],
      routesTitle: 'Routes in this destination',
      routes: [
        { name: 'Lake shore', meta: '4.2 km · 2 h' },
        { name: 'German architecture', meta: '2.8 km · 1 h 30' },
        { name: 'Southern kitchen', meta: '9 stops' },
      ],
    },
    panel: {
      title: 'Destination usage',
      period: 'Last 30 days',
      chartLabel: 'Lookups per day',
      topTitle: 'Most walked routes',
      top: [
        { name: 'Lake shore', value: '1,284' },
        { name: 'Southern kitchen', value: '870' },
        { name: 'German architecture', value: '612' },
      ],
      originTitle: 'Visitor origin',
      origin: [
        { name: 'Santiago', value: '38%' },
        { name: 'Argentina', value: '21%' },
        { name: 'Brazil', value: '12%' },
      ],
    },
    prestador: {
      kind: 'Restaurant',
      name: 'Cocinería Los Colonos',
      place: territory.place,
      fields: [
        { label: 'Hours', value: 'Tue–Sun · 12:00–22:00' },
        { label: 'Address', value: 'Del Salvador 210' },
        { label: 'On the route', value: 'Southern kitchen' },
      ],
      cta: 'Get directions',
    },
  },
  footer: {
    tagline: 'Destination platform',
    demoLink: 'See the traveller app',
    platformLink: 'Live platform',
    rights: 'Real Travel. All rights reserved.',
  },
}
