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
  badge?: string
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
    proof: {
      id: string
      tab: string
      title: string
      blurb: string
      bullets: string[]
      src: string
      alt: string
      badge?: string
    }[]
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
    kicker: 'La plataforma por dentro',
    title: 'Esto es lo que recibe tu destino.',
    lead: 'No es una maqueta: son pantallas de Real Travel funcionando hoy, con destinos, lugares y comercios ya publicados.',
    hint: 'Elige qué quieres ver',
    proof: [
      {
        id: 'destino',
        tab: 'Un destino',
        title: 'El territorio, con su portada y sus datos.',
        blurb: 'Así queda publicado un destino completo dentro de Real Travel.',
        bullets: [
          'Galería de portada del destino',
          'Clima, moneda y mejor época para visitarlo',
          'Descripción editorial de la región',
          'Todos sus lugares, rutas y prestadores enlazados',
        ],
        src: '/img/plataforma-destino.png',
        alt: 'Ficha del destino Noroeste México en la plataforma: foto de portada, clima, moneda, mejor época y descripción.',
      },
      {
        id: 'lugar',
        tab: 'Un lugar',
        title: 'Cada punto con todo lo que el viajero necesita.',
        blurb: 'La ficha de un punto de interés, con contenido que un mapa común no da.',
        bullets: [
          'Fotografías y categoría del lugar',
          'Descripción, más información y consejos prácticos',
          'Audioguía',
          'Botón «¿Cómo llego?» con la ruta hasta el punto',
        ],
        src: '/img/plataforma-lugar.png',
        alt: 'Ficha del Parque Santa Rosa en la plataforma: foto, categoría, pestañas de descripción, consejos y audioguía, y botón cómo llego.',
      },
      {
        id: 'comercios',
        tab: 'Tus comercios',
        title: 'Los prestadores del territorio, con beneficio visible.',
        blurb: 'Red Travel: la vitrina de comercios y servicios adheridos al destino.',
        bullets: [
          'Perfil de cada comercio con foto y categoría',
          'Descuento del prestador visible en la tarjeta',
          'Filtro por beneficio y por ubicación',
          'Buscador dentro de la red',
        ],
        src: '/img/plataforma-comercios.png',
        alt: 'Vista Red Travel de la plataforma: tarjetas de comercios con etiquetas de descuento y filtros.',
      },
      {
        id: 'rutas',
        tab: 'Rutas',
        badge: 'En desarrollo',
        title: 'El recorrido completo, parada por parada.',
        blurb: 'Una ruta del destino sobre el mapa, con sus paradas ordenadas y quién la creó. En desarrollo: ya funciona, todavía no está abierto a todos los destinos.',
        bullets: [
          'Duración, distancia y número de paradas',
          'Cada parada con foto, categoría y valoración',
          'Trazado sobre el mapa, en orden de recorrido',
          'Crédito al operador que arma la ruta',
        ],
        src: '/img/plataforma-ruta.png',
        alt: 'Ruta Naturaleza y volcán de Puerto Varas en la plataforma: panel con duración, distancia y paradas, junto al mapa con el recorrido trazado.',
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
        name: 'Prestador con rutas y servicios',
        audience: 'Operadores, guías y prestadores que quieren más que una ficha.',
        pitch: 'Todo lo del registro gratuito, más rutas propias, multimedia, WhatsApp, servicios y eventos.',
        detailTitle: 'Prestador con rutas y servicios',
        detailAudience: 'Para prestadores que ya tienen registro y quieren ampliarlo.',
        includes: [
          'Rutas y recorridos propios',
          'Archivos multimedia: fotografías y video',
          'Contacto directo por WhatsApp',
          'Servicios y actividades publicados',
          'Eventos y cartelera del prestador',
          'Alojamiento y soporte',
        ],
        benefits: [
          'Tus recorridos, mostrados de forma atractiva y navegable',
          'El viajero te escribe sin salir de la plataforma',
          'Cartelera siempre actualizable',
          'Sin desarrollo ni gestión técnica de por medio',
        ],
        note: 'Se suma sobre el registro gratuito: cada función se contrata según lo que necesites.',
      },
      {
        id: 'prestador-registro',
        badge: 'Gratis',
        segment: 'Prestadores',
        name: 'Registro del prestador',
        audience: 'Alojamientos, restaurantes, comercios y servicios.',
        pitch: 'Crea tu perfil sin costo y aparece ante los viajeros que ya están recorriendo el destino.',
        detailTitle: 'Registro del prestador — gratuito',
        detailAudience: 'Para cualquier prestador turístico del territorio.',
        includes: [
          'Perfil propio dentro de la web-app de Real Travel',
          'Ficha con nombre, categoría y ubicación en el mapa',
          'Visible en el destino y en las búsquedas del viajero',
          'Alta sin costo y sin gestión técnica',
        ],
        benefits: [
          'Existir digitalmente sin invertir nada',
          'Aparecer donde el viajero ya está buscando',
          'Punto de partida para sumar funciones cuando quieras',
        ],
        note: 'Se contratan aparte: rutas propias, archivos multimedia, contacto por WhatsApp, servicios y eventos.',
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
    kicker: 'Inside the platform',
    title: 'This is what your destination gets.',
    lead: 'Not a mockup: these are screens of Real Travel running today, with destinations, places and providers already published.',
    hint: 'Choose what to see',
    proof: [
      {
        id: 'destino',
        tab: 'A destination',
        title: 'The territory, with its cover and its facts.',
        blurb: 'This is how a whole destination is published inside Real Travel.',
        bullets: [
          'Cover gallery for the destination',
          'Climate, currency and best time to visit',
          'Editorial description of the region',
          'All its places, routes and providers linked',
        ],
        src: '/img/plataforma-destino.png',
        alt: 'Destination page for Noroeste México on the platform: cover photo, climate, currency, best season and description.',
      },
      {
        id: 'lugar',
        tab: 'A place',
        title: 'Every point with everything travellers need.',
        blurb: 'The page for a point of interest, with content an ordinary map never gives.',
        bullets: [
          'Photographs and category of the place',
          'Description, more information and practical tips',
          'Audio guide',
          '“How do I get there?” button with directions',
        ],
        src: '/img/plataforma-lugar.png',
        alt: 'Page for Parque Santa Rosa on the platform: photo, category, tabs for description, tips and audio guide, and a directions button.',
      },
      {
        id: 'comercios',
        tab: 'Your providers',
        title: 'The territory’s providers, with their offer visible.',
        blurb: 'Red Travel: the showcase of businesses and services signed up to the destination.',
        bullets: [
          'A profile per business with photo and category',
          'The provider’s discount visible on the card',
          'Filter by offer and by location',
          'Search inside the network',
        ],
        src: '/img/plataforma-comercios.png',
        alt: 'Red Travel view on the platform: business cards with discount labels and filters.',
      },
      {
        id: 'rutas',
        tab: 'Routes',
        badge: 'In development',
        title: 'The full itinerary, stop by stop.',
        blurb: 'A route of the destination on the map, with its stops in order and credit to whoever built it. In development: it already works, it is not open to every destination yet.',
        bullets: [
          'Duration, distance and number of stops',
          'Each stop with photo, category and rating',
          'Drawn on the map, in walking order',
          'Credit to the operator that builds the route',
        ],
        src: '/img/plataforma-ruta.png',
        alt: 'Naturaleza y volcán route for Puerto Varas on the platform: a panel with duration, distance and stops next to the map with the drawn itinerary.',
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
        name: 'Provider with routes and services',
        audience: 'Operators, guides and providers that want more than a listing.',
        pitch: 'Everything in the free registration, plus your own routes, media, WhatsApp, services and events.',
        detailTitle: 'Provider with routes and services',
        detailAudience: 'For providers that are already registered and want more.',
        includes: [
          'Your own routes and itineraries',
          'Media files: photographs and video',
          'Direct WhatsApp contact',
          'Published services and activities',
          'Events and provider noticeboard',
          'Hosting and support',
        ],
        benefits: [
          'Your itineraries shown in an appealing, browsable way',
          'Travellers write to you without leaving the platform',
          'A noticeboard you can always update',
          'No development or technical management involved',
        ],
        note: 'Added on top of the free registration: each feature is contracted as you need it.',
      },
      {
        id: 'prestador-registro',
        badge: 'Free',
        segment: 'Providers',
        name: 'Provider registration',
        audience: 'Hotels, restaurants, shops and services.',
        pitch: 'Create your profile at no cost and appear to travellers already exploring the destination.',
        detailTitle: 'Provider registration — free',
        detailAudience: 'For any tourism provider in the territory.',
        includes: [
          'Your own profile inside the Real Travel web app',
          'A page with name, category and location on the map',
          'Visible in the destination and in traveller searches',
          'Free to join, with no technical management',
        ],
        benefits: [
          'Exist online without investing anything',
          'Show up where travellers are already looking',
          'A starting point to add features whenever you want',
        ],
        note: 'Contracted separately: your own routes, media files, WhatsApp contact, services and events.',
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
