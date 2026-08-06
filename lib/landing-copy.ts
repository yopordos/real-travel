// ─── Copy de la landing ───────────────────────────────────────────────────────
// Fuente: Dropbox/WIP/01. Real Travel/WebApp/02. Landing/Real_Travel_Landing.pdf
// Una sola fuente por idioma. El tipo LandingCopy es la garantía de paridad:
// si falta una clave en `en`, el build falla.

export interface Feature {
  title: string
  body: string
}

export interface Product {
  id: string
  segment: string
  name: string
  audience: string
  pitch: string
  detailTitle: string
  detailAudience: string
  includes: string[]
  benefits: string[]
  note?: string
}

export interface LandingCopy {
  locale: 'es' | 'en'
  altHref: string
  altLabel: string
  nav: {
    problem: string
    how: string
    products: string
    why: string
    contact: string
    platform: string
    cta: string
    skipToContent: string
  }
  hero: {
    kicker: string
    title: string
    lead: string
    ctaPrimary: string
    ctaSecondary: string
    chips: string[]
    illustrationAlt: string
  }
  mapExplorer: {
    kicker: string
    title: string
    lead: string
    hint: string
    points: { id: string; label: string; blurb: string; src: string; alt: string }[]
    platformCaption: string
    platformAlt: string
    platformCta: string
  }
  problem: { kicker: string; title: string; lead: string; items: Feature[] }
  how: { kicker: string; title: string; lead: string; steps: Feature[] }
  model: { kicker: string; title: string; lead: string }
  products: {
    kicker: string
    title: string
    lead: string
    items: Product[]
    helpTitle: string
    helpBody: string
    helpCta: string
    detailIncludes: string
    detailBenefits: string
    interested: string
  }
  why: { kicker: string; title: string; lead: string; items: Feature[] }
  contact: {
    kicker: string
    title: string
    lead: string
    bullets: string[]
    fields: { name: string; email: string; subject: string; message: string }
    placeholders: { name: string; email: string; message: string }
    subjectUnsure: string
    submit: string
    reply: string
    fallbackLead: string
    fallbackEmail: string
  }
  footer: { tagline: string; appLink: string; platformLink: string; rights: string }
}

export const es: LandingCopy = {
  locale: 'es',
  altHref: '/en',
  altLabel: 'EN',
  nav: {
    problem: 'El problema',
    how: 'Cómo funciona',
    products: 'Productos',
    why: 'Por qué nosotros',
    contact: 'Contacto',
    platform: 'Ver la plataforma',
    cta: 'Sumarme',
    skipToContent: 'Saltar al contenido',
  },
  hero: {
    kicker: 'Turismo + tecnología',
    title: 'La infraestructura digital de tu destino, ya construida.',
    lead: 'Suma tu destino o tu servicio turístico a una plataforma que ya existe y gana visibilidad ante viajeros de toda Latinoamérica. Sin desarrollar nada desde cero.',
    ctaPrimary: 'Quiero sumarme',
    ctaSecondary: 'Ver productos',
    chips: ['Destinos', 'Prestadores turísticos', 'Ferias y congresos'],
    illustrationAlt:
      'Mapa esquemático con puntos de interés conectados por una ruta, dentro de la interfaz de Real Travel.',
  },
  mapExplorer: {
    kicker: 'El mapa',
    title: 'Cada lugar es un punto en el mapa.',
    lead: 'Así se ordena un territorio dentro de Real Travel: puntos de interés con su ficha, rutas que los conectan y prestadores alrededor.',
    hint: 'Toca un punto del mapa',
    points: [
      {
        id: 'destino',
        label: 'Destino',
        blurb: 'El territorio completo: su identidad, sus zonas y todo lo que contiene.',
        src: '/img/foto-6.jpeg',
        alt: 'Plaza de una ciudad al atardecer con un edificio colonial iluminado.',
      },
      {
        id: 'lugares',
        label: 'Lugares',
        blurb: 'Cada punto de interés con su ficha: qué es, dónde queda y cómo llegar.',
        src: '/img/foto-1.jpeg',
        alt: 'Pasarela de madera sobre un lago turquesa entre montañas boscosas.',
      },
      {
        id: 'comercios',
        label: 'Comercios',
        blurb: 'Alojamientos, restaurantes, operadores y servicios, cada uno con su página.',
        src: '/img/foto-4.jpeg',
        alt: 'Lancha de paseo amarrada en un muelle, con un volcán al fondo.',
      },
      {
        id: 'rutas',
        label: 'Rutas',
        blurb: 'Recorridos que ordenan varios lugares en una secuencia: qué ver y qué sigue.',
        src: '/img/foto-5.jpeg',
        alt: 'Ciclista recorriendo un camino de ripio junto a un río glaciar rodeado de montañas nevadas.',
      },
    ],
    platformCaption: 'La plataforma, hoy',
    platformAlt: 'Vista Explorar de la plataforma de Real Travel: buscador, destino recomendado y listado de lugares.',
    platformCta: 'Abrir la plataforma',
  },
  problem: {
    kicker: 'El problema',
    title: 'Existes en el mundo real, pero no en el digital.',
    lead: 'Muchos destinos y prestadores turísticos tienen mucho para ofrecer y muy poca forma de mostrarlo. Y armar una solución propia es caro, lento y difícil de mantener.',
    items: [
      {
        title: 'Falta de visibilidad',
        body: 'El viajero no te encuentra porque no estás donde busca: en lo digital.',
      },
      {
        title: 'Sin infraestructura propia',
        body: 'No tienes una web-app, ni el equipo para desarrollarla y sostenerla.',
      },
      {
        title: 'Costo y complejidad',
        body: 'Hacer algo a medida desde cero implica tiempo, dinero y gestión técnica.',
      },
    ],
  },
  how: {
    kicker: 'Cómo funciona',
    title: 'Tres pasos para estar online.',
    lead: 'No construimos desde cero cada vez: te sumas a una infraestructura que ya funciona.',
    steps: [
      {
        title: 'Te sumas',
        body: 'Eliges el producto que se ajusta a tu destino o servicio y te integras a la plataforma Real Travel.',
      },
      {
        title: 'Cargamos tu contenido',
        body: 'Sumamos tus puntos de interés, rutas y prestadores. Tú pones el contenido; nosotros, la tecnología.',
      },
      {
        title: 'Apareces ante viajeros',
        body: 'Tu destino o servicio queda visible dentro de Real Travel, listo para que te descubran.',
      },
    ],
  },
  model: {
    kicker: 'Nuestro modelo',
    title: 'Pagas por lo que usas.',
    lead: 'La infraestructura ya está construida. Tu presencia se arma con tu propio contenido y creces cuando quieras: sumas puntos, rutas o prestadores en cualquier momento. Sin gestión técnica de tu lado.',
  },
  products: {
    kicker: 'Productos',
    title: 'Una solución para cada caso.',
    lead: 'Desde el destino completo hasta el prestador individual y el evento puntual.',
    detailIncludes: 'Qué infraestructura incluye',
    detailBenefits: 'Beneficios',
    interested: '¡Me interesa!',
    helpTitle: '¿No sabes cuál elegir?',
    helpBody: 'Cuéntanos tu caso y te recomendamos el producto ideal.',
    helpCta: 'Hablemos',
    items: [
      {
        id: 'web-app-destino',
        segment: 'Destinos',
        name: 'Web App Destino',
        audience: 'Municipios, oficinas de turismo, cámaras y regiones.',
        pitch: 'Tu destino online y visible dentro de Real Travel, con puntos, rutas y prestadores.',
        detailTitle: 'Web App Destino',
        detailAudience: 'Para municipios, oficinas de turismo, cámaras y regiones.',
        includes: [
          'Web-app propia del destino, integrada a la app de Real Travel',
          'Diseño y desarrollo completo (interfaz + funcionamiento interno)',
          'Alojamiento en servidor',
          'Puesta en marcha y configuración inicial',
          'Carga profesional de puntos, rutas y prestadores',
        ],
        benefits: [
          'Presencia digital inmediata, sin inversión en desarrollo propio',
          'Visibilidad frente a viajeros reales dentro de la app',
          'Contenido turístico organizado y navegable',
          'Todo administrado por Real Travel: no gestionas tecnología',
        ],
        note: 'Crece cuando quieras: suma puntos, rutas y prestadores en cualquier momento.',
      },
      {
        id: 'web-destino-personalizado',
        segment: 'Destinos',
        name: 'Web Destino Personalizado',
        audience: 'Destinos que quieren identidad propia y más contenido.',
        pitch: 'Una web-app a medida, diferenciada, con mayor capacidad de puntos, rutas y prestadores.',
        detailTitle: 'Web Destino Personalizado',
        detailAudience: 'Para destinos que quieren identidad propia y más volumen.',
        includes: [
          'Web-app personalizada, a medida del destino',
          'Trabajo profesional de diseño y desarrollo',
          'Alojamiento en servidor',
          'Puesta en marcha más completa',
          'Capacidad inicial, intermedia o amplia según el tamaño del destino',
        ],
        benefits: [
          'Imagen y experiencia propias, diferenciadas',
          'Mayor capacidad de contenido',
          'Real Travel se encarga de la tecnología y la mantención',
        ],
        note: 'Crece cuando quieras: suma puntos, rutas y prestadores en cualquier momento.',
      },
      {
        id: 'prestador-con-rutas',
        segment: 'Prestadores',
        name: 'Prestador con rutas',
        audience: 'Operadores, guías y experiencias con recorridos.',
        pitch: 'Perfil propio con puntos, rutas y cartelera de actividades dentro de la plataforma.',
        detailTitle: 'Prestador turístico — con rutas',
        detailAudience: 'Para operadores, guías y experiencias con recorridos.',
        includes: [
          'Perfil digital propio dentro de la web-app de Real Travel',
          'Puntos de interés asociados al prestador',
          'Rutas y recorridos propios',
          'Cartelera de actividades',
          'Alojamiento y soporte',
        ],
        benefits: [
          'Visibilidad ante viajeros dentro de la plataforma',
          'Tus recorridos, mostrados de forma atractiva y navegable',
          'Cartelera siempre actualizable',
          'Sin desarrollo ni gestión técnica de por medio',
        ],
      },
      {
        id: 'prestador-sin-rutas',
        segment: 'Prestadores',
        name: 'Prestador sin rutas',
        audience: 'Alojamientos, restaurantes, comercios y servicios.',
        pitch: 'Presencia digital simple con cartelera de actividades, sin recorridos.',
        detailTitle: 'Prestador turístico — sin rutas',
        detailAudience: 'Para alojamientos, restaurantes, comercios y servicios.',
        includes: [
          'Perfil digital propio dentro de la web-app de Real Travel',
          'Cartelera de actividades',
          'Alojamiento y soporte',
        ],
        benefits: [
          'La forma más simple de tener presencia digital en la plataforma',
          'Comunicación siempre al día a través de la cartelera',
          'Sin desarrollo ni gestión técnica de por medio',
        ],
        note: 'Ideal como puerta de entrada para prestadores que luego quieran sumar rutas.',
      },
      {
        id: 'mapa-ferias',
        segment: 'Eventos',
        name: 'Mapa Interactivo Ferias/Congresos',
        audience: 'Organizadores de ferias, congresos y eventos.',
        pitch: 'Un mapa interactivo del evento con informe de datos, listo para un evento acotado.',
        detailTitle: 'Mapa interactivo para ferias y congresos',
        detailAudience: 'Para organizadores de ferias, congresos y eventos.',
        includes: [
          'Mapa interactivo del evento (diseño y desarrollo completos)',
          'Alojamiento durante los días del evento',
          'Carga de puntos de interés y rutas',
          'Informe de datos del evento',
        ],
        benefits: [
          'Mejor experiencia para el asistente: se ubica y encuentra todo rápido',
          'Herramienta lista para un evento acotado, sin infraestructura permanente',
          'Datos concretos para medir y mejorar próximas ediciones',
        ],
      },
    ],
  },
  why: {
    kicker: 'Por qué Real Travel',
    title: 'Tú pones el turismo. Nosotros, la tecnología.',
    lead: 'Una plataforma pensada para que destinos y prestadores estén online sin complicaciones.',
    items: [
      {
        title: 'Integrado a la app',
        body: 'Tu presencia vive dentro de Real Travel, donde el viajero ya está buscando.',
      },
      {
        title: 'Rápido de activar',
        body: 'La infraestructura ya existe: te sumas y cargamos tu contenido.',
      },
      {
        title: 'Sin gestión técnica',
        body: 'Nos ocupamos del desarrollo, el alojamiento y la mantención.',
      },
      {
        title: 'Escalable',
        body: 'Sumas puntos, rutas y prestadores a medida que creces.',
      },
    ],
  },
  contact: {
    kicker: 'Súmate',
    title: 'Cuéntanos tu caso.',
    lead: 'Déjanos tus datos y te contactamos para armar la mejor solución para tu destino, servicio o evento.',
    bullets: [
      'Te recomendamos el producto ideal',
      'Te explicamos cómo se carga tu contenido',
      'Coordinamos la puesta en marcha',
    ],
    fields: {
      name: 'Nombre y apellido',
      email: 'Email',
      subject: '¿Qué quieres digitalizar?',
      message: 'Cuéntanos brevemente',
    },
    placeholders: {
      name: 'Tu nombre',
      email: 'tu@email.com',
      message: 'Tu destino, servicio o evento...',
    },
    subjectUnsure: 'Todavía no lo sé',
    submit: 'Enviar',
    reply: 'Te respondemos a la brevedad',
    fallbackLead: 'O escríbenos directamente a',
    fallbackEmail: 'hola@realtravelapp.com',
  },
  footer: {
    tagline: 'Tecnología aplicada al turismo · Latinoamérica y Centroamérica',
    appLink: 'Ver la app del viajero',
    platformLink: 'Plataforma en vivo',
    rights: 'Real Travel. Todos los derechos reservados.',
  },
}

export const en: LandingCopy = {
  locale: 'en',
  altHref: '/',
  altLabel: 'ES',
  nav: {
    problem: 'The problem',
    how: 'How it works',
    products: 'Products',
    why: 'Why us',
    contact: 'Contact',
    platform: 'See the platform',
    cta: 'Join us',
    skipToContent: 'Skip to content',
  },
  hero: {
    kicker: 'Tourism + technology',
    title: 'Your destination’s digital infrastructure, already built.',
    lead: 'Add your destination or tourism service to a platform that already exists and reach travellers across Latin America. Nothing to build from scratch.',
    ctaPrimary: 'I want to join',
    ctaSecondary: 'See products',
    chips: ['Destinations', 'Tourism providers', 'Trade shows and conferences'],
    illustrationAlt:
      'Schematic map with points of interest connected by a route, inside the Real Travel interface.',
  },
  mapExplorer: {
    kicker: 'The map',
    title: 'Every place is a point on the map.',
    lead: 'This is how a territory is organised inside Real Travel: points of interest with their own page, routes connecting them and providers around them.',
    hint: 'Tap a point on the map',
    points: [
      {
        id: 'destino',
        label: 'Destination',
        blurb: 'The whole territory: its identity, its areas and everything it holds.',
        src: '/img/foto-6.jpeg',
        alt: 'A city square at dusk with a lit colonial building.',
      },
      {
        id: 'lugares',
        label: 'Places',
        blurb: 'Every point of interest with its own page: what it is, where it is and how to get there.',
        src: '/img/foto-1.jpeg',
        alt: 'A wooden walkway over a turquoise lake between forested mountains.',
      },
      {
        id: 'comercios',
        label: 'Providers',
        blurb: 'Hotels, restaurants, operators and services, each with its own page.',
        src: '/img/foto-4.jpeg',
        alt: 'A tour boat moored at a jetty with a volcano behind it.',
      },
      {
        id: 'rutas',
        label: 'Routes',
        blurb: 'Itineraries that put several places in order: what to see and what comes next.',
        src: '/img/foto-5.jpeg',
        alt: 'A cyclist riding a gravel road beside a glacial river surrounded by snowy mountains.',
      },
    ],
    platformCaption: 'The platform today',
    platformAlt: 'Explore view of the Real Travel platform: search, featured destination and a list of places.',
    platformCta: 'Open the platform',
  },
  problem: {
    kicker: 'The problem',
    title: 'You exist in the real world, but not in the digital one.',
    lead: 'Many destinations and tourism providers have plenty to offer and almost no way to show it. Building your own solution is expensive, slow and hard to maintain.',
    items: [
      {
        title: 'No visibility',
        body: 'Travellers don’t find you because you’re not where they look: online.',
      },
      {
        title: 'No infrastructure of your own',
        body: 'You have no web app, and no team to build and sustain one.',
      },
      {
        title: 'Cost and complexity',
        body: 'Building something custom from zero takes time, money and technical management.',
      },
    ],
  },
  how: {
    kicker: 'How it works',
    title: 'Three steps to being online.',
    lead: 'We don’t rebuild from scratch every time: you join infrastructure that already works.',
    steps: [
      {
        title: 'You join',
        body: 'Pick the product that fits your destination or service and plug into the Real Travel platform.',
      },
      {
        title: 'We load your content',
        body: 'We add your points of interest, routes and providers. You bring the content; we bring the technology.',
      },
      {
        title: 'Travellers find you',
        body: 'Your destination or service goes live inside Real Travel, ready to be discovered.',
      },
    ],
  },
  model: {
    kicker: 'Our model',
    title: 'You pay for what you use.',
    lead: 'The infrastructure is already built. Your presence is made of your own content, and you grow whenever you want: add points, routes or providers at any time. No technical management on your side.',
  },
  products: {
    kicker: 'Products',
    title: 'One solution for each case.',
    lead: 'From a whole destination to a single provider or a one-off event.',
    detailIncludes: 'What the infrastructure includes',
    detailBenefits: 'Benefits',
    interested: 'I’m interested!',
    helpTitle: 'Not sure which one?',
    helpBody: 'Tell us your case and we’ll recommend the right product.',
    helpCta: 'Let’s talk',
    items: [
      {
        id: 'web-app-destino',
        segment: 'Destinations',
        name: 'Destination Web App',
        audience: 'Municipalities, tourism offices, chambers and regions.',
        pitch: 'Your destination online and visible inside Real Travel, with points, routes and providers.',
        detailTitle: 'Destination Web App',
        detailAudience: 'For municipalities, tourism offices, chambers and regions.',
        includes: [
          'A web app of your own, integrated into the Real Travel app',
          'Full design and development (interface and inner workings)',
          'Server hosting',
          'Launch and initial setup',
          'Professional loading of points, routes and providers',
        ],
        benefits: [
          'Immediate digital presence, with no development investment',
          'Visibility to real travellers inside the app',
          'Tourism content organised and easy to browse',
          'All run by Real Travel: you don’t manage technology',
        ],
        note: 'Grow whenever you want: add points, routes and providers at any time.',
      },
      {
        id: 'web-destino-personalizado',
        segment: 'Destinations',
        name: 'Custom Destination Web',
        audience: 'Destinations that want their own identity and more content.',
        pitch: 'A tailor-made, distinct web app with greater capacity for points, routes and providers.',
        detailTitle: 'Custom Destination Web',
        detailAudience: 'For destinations that want their own identity and more volume.',
        includes: [
          'A web app customised to the destination',
          'Professional design and development work',
          'Server hosting',
          'A more complete launch',
          'Starter, intermediate or wide capacity depending on the size of the destination',
        ],
        benefits: [
          'Your own look and experience, clearly distinct',
          'Greater content capacity',
          'Real Travel handles the technology and the upkeep',
        ],
        note: 'Grow whenever you want: add points, routes and providers at any time.',
      },
      {
        id: 'prestador-con-rutas',
        segment: 'Providers',
        name: 'Provider with routes',
        audience: 'Operators, guides and experiences with itineraries.',
        pitch: 'Your own profile with points, routes and an activity board inside the platform.',
        detailTitle: 'Tourism provider — with routes',
        detailAudience: 'For operators, guides and experiences with itineraries.',
        includes: [
          'Your own digital profile inside the Real Travel web app',
          'Points of interest linked to the provider',
          'Your own routes and itineraries',
          'Activity board',
          'Hosting and support',
        ],
        benefits: [
          'Visibility to travellers inside the platform',
          'Your itineraries shown in an appealing, browsable way',
          'An activity board you can always update',
          'No development or technical management involved',
        ],
      },
      {
        id: 'prestador-sin-rutas',
        segment: 'Providers',
        name: 'Provider without routes',
        audience: 'Hotels, restaurants, shops and services.',
        pitch: 'Simple digital presence with an activity board, without itineraries.',
        detailTitle: 'Tourism provider — without routes',
        detailAudience: 'For hotels, restaurants, shops and services.',
        includes: [
          'Your own digital profile inside the Real Travel web app',
          'Activity board',
          'Hosting and support',
        ],
        benefits: [
          'The simplest way to have a digital presence on the platform',
          'Always-current communication through the activity board',
          'No development or technical management involved',
        ],
        note: 'A good entry point for providers that may add routes later.',
      },
      {
        id: 'mapa-ferias',
        segment: 'Events',
        name: 'Interactive Map for Trade Shows',
        audience: 'Organisers of trade shows, conferences and events.',
        pitch: 'An interactive event map with a data report, ready for a time-bound event.',
        detailTitle: 'Interactive map for trade shows and conferences',
        detailAudience: 'For organisers of trade shows, conferences and events.',
        includes: [
          'Interactive event map (full design and development)',
          'Hosting for the days of the event',
          'Loading of points of interest and routes',
          'Event data report',
        ],
        benefits: [
          'A better experience for attendees: they find their way fast',
          'A tool ready for a time-bound event, with no permanent infrastructure',
          'Concrete data to measure and improve future editions',
        ],
      },
    ],
  },
  why: {
    kicker: 'Why Real Travel',
    title: 'You bring the tourism. We bring the technology.',
    lead: 'A platform built so destinations and providers can be online without complications.',
    items: [
      {
        title: 'Built into the app',
        body: 'Your presence lives inside Real Travel, where travellers are already looking.',
      },
      {
        title: 'Quick to activate',
        body: 'The infrastructure already exists: you join and we load your content.',
      },
      {
        title: 'No technical management',
        body: 'We handle development, hosting and upkeep.',
      },
      {
        title: 'Scalable',
        body: 'Add points, routes and providers as you grow.',
      },
    ],
  },
  contact: {
    kicker: 'Join us',
    title: 'Tell us your case.',
    lead: 'Leave us your details and we’ll get in touch to build the best solution for your destination, service or event.',
    bullets: [
      'We recommend the right product',
      'We explain how your content gets loaded',
      'We coordinate the launch',
    ],
    fields: {
      name: 'Full name',
      email: 'Email',
      subject: 'What do you want to digitise?',
      message: 'Tell us briefly',
    },
    placeholders: {
      name: 'Your name',
      email: 'you@email.com',
      message: 'Your destination, service or event...',
    },
    subjectUnsure: 'I’m not sure yet',
    submit: 'Send',
    reply: 'We reply shortly',
    fallbackLead: 'Or write to us directly at',
    fallbackEmail: 'hola@realtravelapp.com',
  },
  footer: {
    tagline: 'Technology applied to tourism · Latin America and Central America',
    appLink: 'See the traveller app',
    platformLink: 'Live platform',
    rights: 'Real Travel. All rights reserved.',
  },
}
