// ─── Copy legal ───────────────────────────────────────────────────────────────
// Mismo contrato que landing-copy: una fuente por idioma y un tipo que obliga a
// la paridad. Si a `legalEn` le falta una sección que `legalEs` tiene, el build
// no falla por sí solo —son arrays—, pero sí lo hace ante cualquier documento o
// campo ausente.
//
// La política de privacidad reproduce el texto que Real Travel publica en
// realtravelapp.com. Los términos se redactaron a partir de la descripción
// pública del servicio y no han pasado revisión jurídica; ver README.

/** Un párrafo o una lista. El texto admite `**negrita**` y `[enlace](destino)`. */
export type LegalBlock = { p: string } | { ul: string[] }

export interface LegalSection {
  /** Ancla de la sección; debe ser estable, se enlaza desde el índice. */
  id: string
  title: string
  blocks: LegalBlock[]
}

export interface LegalDoc {
  /** Ruta propia de este documento. */
  href: string
  /** El mismo documento en el otro idioma. */
  altHref: string
  title: string
  description: string
  /** Línea de identificación bajo el título. */
  meta: string
  /** Texto antes del articulado. */
  intro: LegalBlock[]
  sections: LegalSection[]
}

export interface LegalCopy {
  locale: 'es' | 'en'
  tocLabel: string
  terms: LegalDoc
  privacy: LegalDoc
}

// ─── Español ─────────────────────────────────────────────────────────────────

export const legalEs: LegalCopy = {
  locale: 'es',
  tocLabel: 'Índice',

  terms: {
    href: '/terminos',
    altHref: '/en/terms',
    title: 'Términos y condiciones',
    description: 'Términos y condiciones de uso de la plataforma de Real Travel SpA.',
    meta: 'Real Travel SpA · RUT 77.077.553-1 · Última actualización: 31 de agosto de 2026',
    intro: [],
    sections: [
      {
        id: 'aceptacion',
        title: '1. Identificación y aceptación',
        blocks: [
          { p: 'Este sitio y la plataforma asociada son operados por **Real Travel SpA**, RUT N°77.077.553-1, sociedad constituida y domiciliada en Chile (en adelante, “Real Travel”).' },
          { p: 'El acceso al sitio, la navegación por la plataforma y la contratación de cualquiera de los servicios implican la aceptación plena y sin reservas de estos términos y condiciones (en adelante, los “Términos”). Quien no esté de acuerdo con ellos debe abstenerse de utilizar la plataforma.' },
          { p: 'Para cualquier consulta relativa a estos Términos: [hola@realtravel.cl](mailto:hola@realtravel.cl).' },
        ],
      },
      {
        id: 'definiciones',
        title: '2. Definiciones',
        blocks: [
          {
            ul: [
              '**Plataforma:** el conjunto de sitios, mapas, fichas, paneles y servicios digitales que Real Travel pone a disposición, accesibles por navegador y sin descarga de aplicación.',
              '**Destino:** la entidad pública o privada que contrata una plataforma de gestión para su territorio.',
              '**Prestador:** la persona natural o jurídica que ofrece servicios turísticos y publica una ficha en la plataforma.',
              '**Viajero:** la persona que consulta la plataforma para informarse sobre un territorio.',
              '**Contenido:** textos, imágenes, videos, puntos de interés, rutas, fichas y datos publicados en la plataforma.',
            ],
          },
        ],
      },
      {
        id: 'objeto',
        title: '3. Objeto del servicio',
        blocks: [
          { p: 'Real Travel provee tecnología para levantar, ordenar, publicar y medir la información turística de un territorio. El servicio comprende la carga inicial de contenido, su publicación en un mapa navegable y un panel de administración con métricas de uso.' },
          { p: 'Para evitar dudas, Real Travel **no es un marketplace**. En particular, Real Travel:' },
          {
            ul: [
              'No vende ni intermedia reservas, alojamientos, pasajes ni experiencias turísticas.',
              'No cobra comisión sobre las ventas de los Prestadores ni de los Destinos.',
              'No sustituye el sitio web institucional del Destino.',
              'No es parte de la relación contractual que el Viajero establezca con un Prestador.',
            ],
          },
        ],
      },
      {
        id: 'modalidades',
        title: '4. Modalidades de contratación',
        blocks: [
          { p: 'Los servicios se ofrecen en tres modalidades, cuyo alcance específico se define en la propuesta comercial que Real Travel entregue en cada caso:' },
          {
            ul: [
              '**Destinos:** plataforma de gestión con identidad y dominio propios, carga profesional del contenido inicial, administrador autogestionado y métricas de uso. Se contrata como implementación a medida más un uso mensual.',
              '**Eventos y recintos:** mapas personalizados para congresos, ferias, centros turísticos y hoteles, con diseño y desarrollo completos, por un período acotado o de forma permanente, e informe de datos de uso.',
              '**Prestadores:** registro sin costo, que incluye perfil, ficha en el mapa y visibilidad en las búsquedas. Ciertas funciones —rutas propias, multimedia, contacto por WhatsApp, servicios y eventos— se habilitan mediante pago adicional.',
            ],
          },
          { p: 'En caso de discrepancia entre estos Términos y una propuesta comercial o contrato suscrito entre las partes, prevalecerá lo pactado en ese instrumento particular.' },
        ],
      },
      {
        id: 'registro',
        title: '5. Registro y cuentas',
        blocks: [
          { p: 'Algunas funciones exigen crear una cuenta. Quien se registra declara que los datos entregados son veraces, completos y actuales, y se obliga a mantenerlos vigentes. Quien registra a nombre de una organización declara contar con facultades suficientes para obligarla.' },
          { p: 'Las credenciales son personales e intransferibles. El titular de la cuenta es responsable de toda actividad realizada con ellas y debe informar a Real Travel ante cualquier uso no autorizado que detecte.' },
        ],
      },
      {
        id: 'uso',
        title: '6. Uso permitido y conductas prohibidas',
        blocks: [
          { p: 'La plataforma debe usarse conforme a la ley, el orden público y estos Términos. Queda prohibido, en particular:' },
          {
            ul: [
              'Publicar contenido falso, engañoso, difamatorio, discriminatorio o que infrinja derechos de terceros.',
              'Suplantar la identidad de otra persona, organización o Prestador.',
              'Extraer masivamente datos de la plataforma por medios automatizados sin autorización escrita previa.',
              'Interferir con la seguridad, integridad o disponibilidad del servicio, o intentar acceder a áreas restringidas.',
              'Usar la plataforma para enviar comunicaciones comerciales no solicitadas a otros usuarios.',
            ],
          },
          { p: 'Real Travel podrá suspender o dar de baja fichas, cuentas o contenidos que infrinjan lo anterior, informando al titular por el correo registrado.' },
        ],
      },
      {
        id: 'contenidos',
        title: '7. Contenidos publicados',
        blocks: [
          { p: '**La información del Destino sigue siendo suya.** El Destino y el Prestador conservan la titularidad sobre el contenido que aportan y otorgan a Real Travel una licencia no exclusiva, para Chile y el extranjero, limitada a alojar, procesar, adaptar técnicamente y exhibir ese contenido en la plataforma mientras dure la relación contractual, con la finalidad de prestar el servicio.' },
          { p: 'Quien publica declara contar con los derechos necesarios sobre los textos, fotografías y videos que carga, y responde frente a reclamaciones de terceros por ese contenido.' },
          { p: 'Real Travel podrá corregir errores formales, normalizar formatos y ajustar el contenido a los estándares editoriales y técnicos de la plataforma, sin alterar su sentido.' },
          { p: 'Terminada la relación contractual, el Destino podrá solicitar la exportación de su contenido en un formato de uso común, dentro de un plazo razonable contado desde el término y conforme a lo que las partes acuerden.' },
        ],
      },
      {
        id: 'propiedad',
        title: '8. Propiedad intelectual',
        blocks: [
          { p: 'El software, la arquitectura de la plataforma, el diseño de la interfaz, la cartografía elaborada por Real Travel, las marcas “Real Travel” y sus signos distintivos son de propiedad de Real Travel o de sus licenciantes, y se encuentran protegidos por la legislación chilena e internacional sobre propiedad intelectual e industrial.' },
          { p: 'Nada en estos Términos transfiere al usuario derecho alguno sobre dichos elementos, más allá de la autorización de uso necesaria para operar el servicio contratado.' },
        ],
      },
      {
        id: 'precios',
        title: '9. Precios, facturación y vigencia',
        blocks: [
          { p: 'El modelo de cobro se basa en la información publicada —puntos de interés, rutas o experiencias, cartelera y fichas de prestador— y no en la infraestructura tecnológica.' },
          { p: 'Los valores vigentes, la moneda, el tratamiento tributario, la periodicidad y la forma de pago se establecen en la propuesta comercial aceptada por el cliente, la que se entiende parte integrante de estos Términos para la respectiva contratación. Lo mismo aplica a las condiciones de renovación y de término anticipado.' },
          { p: 'La mora en el pago faculta a Real Travel para suspender la publicación, previa notificación al correo registrado y otorgando un plazo prudencial para regularizar, sin perjuicio del cobro de lo adeudado.' },
        ],
      },
      {
        id: 'disponibilidad',
        title: '10. Disponibilidad y soporte',
        blocks: [
          { p: 'Real Travel realiza sus mejores esfuerzos para mantener la plataforma disponible de forma continua, pero no garantiza la ausencia total de interrupciones. El servicio podrá suspenderse temporalmente por mantención programada, la que se informará con antelación razonable, o por causas de fuerza mayor o hechos de terceros proveedores.' },
          { p: 'El canal de soporte es [hola@realtravel.cl](mailto:hola@realtravel.cl). Los tiempos de respuesta comprometidos, cuando existan, se indican en la propuesta comercial respectiva.' },
        ],
      },
      {
        id: 'datos',
        title: '11. Datos personales',
        blocks: [
          { p: 'El tratamiento de datos personales se rige por la [Política de Privacidad](/privacidad), que forma parte integrante de estos Términos, y se sujeta a la Ley N°19.628 y a la Ley N°21.719 una vez plenamente vigente.' },
        ],
      },
      {
        id: 'responsabilidad',
        title: '12. Responsabilidad',
        blocks: [
          { p: 'Real Travel responde por la correcta prestación de los servicios contratados conforme a estos Términos y a la legislación aplicable.' },
          { p: 'Real Travel no responde por la veracidad, exactitud o vigencia del contenido que publiquen los Destinos y Prestadores, ni por las relaciones que el Viajero establezca directamente con ellos, ni por los daños derivados del uso indebido de la plataforma por parte del usuario o de fallas en su propio equipo o conexión.' },
          { p: 'La información publicada tiene carácter referencial. Corresponde al Viajero verificar horarios, condiciones de acceso y advertencias de seguridad antes de visitar un lugar.' },
        ],
      },
      {
        id: 'termino',
        title: '13. Modificación y término',
        blocks: [
          { p: 'Real Travel podrá modificar estos Términos para reflejar cambios legales, técnicos o de servicio. Las modificaciones relevantes se informarán a través del sitio web con antelación razonable a su entrada en vigor. El uso de la plataforma con posterioridad a esa fecha implica su aceptación.' },
          { p: 'El usuario puede poner término a su cuenta en cualquier momento solicitándolo a [hola@realtravel.cl](mailto:hola@realtravel.cl), sin perjuicio de las obligaciones pendientes a esa fecha.' },
        ],
      },
      {
        id: 'ley',
        title: '14. Legislación aplicable y jurisdicción',
        blocks: [
          { p: 'Estos Términos se rigen por la ley chilena. Cualquier controversia relativa a su interpretación, cumplimiento o validez será sometida a los tribunales ordinarios de justicia de la República de Chile.' },
          { p: 'Cuando el usuario tenga la calidad de consumidor, se aplicará además la Ley N°19.496 sobre protección de los derechos de los consumidores, y estos Términos se entenderán sin perjuicio de los derechos irrenunciables que dicha ley le confiere.' },
        ],
      },
    ],
  },

  privacy: {
    href: '/privacidad',
    altHref: '/en/privacy',
    title: 'Política de privacidad',
    description: 'Cómo Real Travel SpA trata la información personal recopilada a través de su sitio web.',
    meta: 'Real Travel SpA · RUT 77.077.553-1 · Contacto: [ti@realtravel.cl](mailto:ti@realtravel.cl)',
    intro: [
      { p: 'En Real Travel SpA (en adelante “Real Travel”), RUT N°77.077.553-1, respetamos la privacidad de los visitantes de nuestro sitio web [www.realtravelapp.com](https://www.realtravelapp.com).' },
      { p: 'Conforme a lo anterior, hemos desarrollado esta Política de Privacidad (en adelante la “Política”) que explica la forma en cómo tratamos la información personal recopilada a través de este sitio, que tiene carácter meramente informativo.' },
    ],
    sections: [
      {
        id: 'responsable',
        title: '1. Responsable del tratamiento',
        blocks: [
          { p: 'El responsable es Real Travel SpA, correo de contacto: [ti@realtravel.cl](mailto:ti@realtravel.cl).' },
        ],
      },
      {
        id: 'datos',
        title: '2. Datos que recolectamos en el sitio web',
        blocks: [
          { p: 'Al visitar nuestro sitio, podemos recopilar:' },
          {
            ul: [
              '**Datos de navegación:** dirección IP, navegador, dispositivo, idioma, fecha y hora de acceso.',
              '**Cookies:** el uso de cookies necesarias no requiere autorización del usuario. En el caso de cookies analíticas o de personalización, se solicitará el consentimiento previo del usuario, de conformidad con la normativa aplicable.',
              '**Formularios de contacto:** nombre, correo electrónico u otros datos ingresados voluntariamente por el usuario.',
              '**Datos para fines de CRM y marketing:** Real Travel podrá recopilar y tratar datos de contacto (como nombre, correo electrónico, teléfono y país de residencia) tanto de usuarios del sitio web como de clientes que interactúen con la empresa, con el fin de mantener actualizados los registros de su sistema de gestión de relaciones con clientes (CRM). Estos datos podrán ser utilizados para el envío de comunicaciones informativas, newsletters, campañas promocionales o encuestas de satisfacción, siempre sobre la base del consentimiento expreso y previo del titular. El usuario o cliente podrá revocar dicho consentimiento en cualquier momento mediante los mecanismos de exclusión disponibles en cada correo electrónico o contactando directamente a Real Travel.',
            ],
          },
          { p: 'No se recopilan datos sensibles ni se crean perfiles avanzados en este sitio, salvo autorización legal y consentimiento expreso.' },
        ],
      },
      {
        id: 'finalidades',
        title: '3. Finalidades',
        blocks: [
          { p: 'Los datos se utilizan únicamente para:' },
          {
            ul: [
              'Mejorar la experiencia de navegación y analizar el uso del sitio.',
              'Responder consultas enviadas a través de formularios.',
              'Cumplir con obligaciones legales aplicables.',
            ],
          },
        ],
      },
      {
        id: 'bases-legales',
        title: '4. Bases legales',
        blocks: [
          { p: 'El tratamiento se funda en:' },
          {
            ul: [
              'Consentimiento del usuario (por ejemplo, cookies no necesarias o formularios).',
              'Interés legítimo de Real Travel para mantener el funcionamiento seguro del sitio.',
              'Cumplimiento de obligaciones legales.',
            ],
          },
        ],
      },
      {
        id: 'destinatarios',
        title: '5. Destinatarios y transferencias',
        blocks: [
          { p: 'Los datos no se venden ni se comunican a terceros, salvo:' },
          {
            ul: [
              'Proveedores tecnológicos que prestan servicios de hosting, analítica o seguridad.',
              'Autoridades competentes cuando la ley lo exija.',
            ],
          },
          { p: 'Cuando existan transferencias internacionales, se aplicarán garantías adecuadas conforme a la normativa chilena y estándares internacionales.' },
        ],
      },
      {
        id: 'derechos',
        title: '6. Derechos de los usuarios',
        blocks: [
          { p: 'De acuerdo con la Ley N°19.628 y la Ley N°21.719 una vez esté plenamente vigente, los titulares pueden solicitar en cualquier momento:' },
          {
            ul: [
              'Acceso a sus datos.',
              'Rectificación de datos inexactos.',
              'Eliminación cuando corresponda.',
              'Oposición a tratamientos para fines de marketing o análisis.',
              'Portabilidad de sus datos, cuando proceda bajo la nueva normativa.',
            ],
          },
          // El texto publicado dice "ti@raltravel.cl"; se corrige el typo del dominio.
          { p: 'Las solicitudes deben dirigirse a [ti@realtravel.cl](mailto:ti@realtravel.cl).' },
        ],
      },
      {
        id: 'conservacion',
        title: '7. Conservación',
        blocks: [
          { p: 'Los datos se conservan solo por el tiempo necesario para cumplir con las finalidades descritas y luego se eliminan o anonimizan.' },
        ],
      },
      {
        id: 'seguridad',
        title: '8. Seguridad',
        blocks: [
          { p: 'Real Travel aplica medidas técnicas y organizativas razonables para proteger los datos personales contra accesos no autorizados, alteración o pérdida, conforme a la legislación vigente.' },
        ],
      },
      {
        id: 'ambito',
        title: '9. Ámbito de aplicación y actualizaciones',
        blocks: [
          { p: 'Esta Política se aplica principalmente en Chile, sin perjuicio de normas extranjeras que puedan resultar aplicables en casos específicos. Asimismo, esta Política podrá actualizarse para reflejar cambios legales, técnicos o de servicios. En caso de modificaciones relevantes, informaremos oportunamente a través del sitio web.' },
        ],
      },
    ],
  },
}

// ─── Inglés ──────────────────────────────────────────────────────────────────
// Traducción del original en español, que es el texto que rige: así lo declara
// el primer párrafo de cada documento.

export const legalEn: LegalCopy = {
  locale: 'en',
  tocLabel: 'Contents',

  terms: {
    href: '/en/terms',
    altHref: '/terminos',
    title: 'Terms and conditions',
    description: 'Terms and conditions of use of the Real Travel SpA platform.',
    meta: 'Real Travel SpA · Chilean tax ID 77.077.553-1 · Last updated: 31 August 2026',
    intro: [
      { p: 'This is a translation of the Spanish original. In the event of any discrepancy, the [Spanish version](/terminos) prevails.' },
    ],
    sections: [
      {
        id: 'acceptance',
        title: '1. Identification and acceptance',
        blocks: [
          { p: 'This site and the associated platform are operated by **Real Travel SpA**, Chilean tax ID No. 77.077.553-1, a company incorporated and domiciled in Chile (hereinafter, “Real Travel”).' },
          { p: 'Accessing the site, browsing the platform and contracting any of the services imply full and unreserved acceptance of these terms and conditions (hereinafter, the “Terms”). Anyone who does not agree with them must refrain from using the platform.' },
          { p: 'For any question regarding these Terms: [hola@realtravel.cl](mailto:hola@realtravel.cl).' },
        ],
      },
      {
        id: 'definitions',
        title: '2. Definitions',
        blocks: [
          {
            ul: [
              '**Platform:** the set of sites, maps, listings, dashboards and digital services made available by Real Travel, accessible through a browser and without downloading an application.',
              '**Destination:** the public or private entity that contracts a management platform for its territory.',
              '**Provider:** the individual or legal entity that offers tourism services and publishes a listing on the platform.',
              '**Traveller:** the person who consults the platform to learn about a territory.',
              '**Content:** text, images, video, points of interest, routes, listings and data published on the platform.',
            ],
          },
        ],
      },
      {
        id: 'purpose',
        title: '3. Purpose of the service',
        blocks: [
          { p: 'Real Travel provides technology to collect, organise, publish and measure the tourism information of a territory. The service covers the initial content load, its publication on a navigable map and an administration dashboard with usage metrics.' },
          { p: 'For the avoidance of doubt, Real Travel **is not a marketplace**. In particular, Real Travel:' },
          {
            ul: [
              'Does not sell or broker bookings, accommodation, tickets or tourism experiences.',
              'Does not charge commission on sales made by Providers or Destinations.',
              'Does not replace the Destination’s institutional website.',
              'Is not a party to any contractual relationship the Traveller enters into with a Provider.',
            ],
          },
        ],
      },
      {
        id: 'plans',
        title: '4. Contracting options',
        blocks: [
          { p: 'The services are offered in three forms, whose specific scope is set out in the commercial proposal Real Travel provides in each case:' },
          {
            ul: [
              '**Destinations:** a management platform with its own identity and domain, professional loading of the initial content, self-managed administration and usage metrics. Contracted as a bespoke implementation plus a monthly usage fee.',
              '**Events and venues:** custom maps for conferences, trade fairs, tourism centres and hotels, with full design and development, for a limited period or permanently, including a usage data report.',
              '**Providers:** free registration, including a profile, a listing on the map and visibility in search. Certain features — own routes, multimedia, WhatsApp contact, services and events — are enabled through additional payment.',
            ],
          },
          { p: 'In the event of any discrepancy between these Terms and a commercial proposal or contract signed between the parties, the terms of that particular instrument shall prevail.' },
        ],
      },
      {
        id: 'accounts',
        title: '5. Registration and accounts',
        blocks: [
          { p: 'Some features require creating an account. Whoever registers declares that the data provided is truthful, complete and current, and undertakes to keep it up to date. Whoever registers on behalf of an organisation declares that they have sufficient authority to bind it.' },
          { p: 'Credentials are personal and non-transferable. The account holder is responsible for all activity carried out with them and must inform Real Travel of any unauthorised use they detect.' },
        ],
      },
      {
        id: 'use',
        title: '6. Permitted use and prohibited conduct',
        blocks: [
          { p: 'The platform must be used in accordance with the law, public order and these Terms. The following is prohibited in particular:' },
          {
            ul: [
              'Publishing false, misleading, defamatory or discriminatory content, or content that infringes third-party rights.',
              'Impersonating another person, organisation or Provider.',
              'Extracting platform data in bulk by automated means without prior written authorisation.',
              'Interfering with the security, integrity or availability of the service, or attempting to access restricted areas.',
              'Using the platform to send unsolicited commercial communications to other users.',
            ],
          },
          { p: 'Real Travel may suspend or remove listings, accounts or content that breach the above, informing the holder at the registered email address.' },
        ],
      },
      {
        id: 'content',
        title: '7. Published content',
        blocks: [
          { p: '**The Destination’s information remains its own.** The Destination and the Provider retain ownership of the content they contribute and grant Real Travel a non-exclusive licence, for Chile and abroad, limited to hosting, processing, technically adapting and displaying that content on the platform for the duration of the contractual relationship, for the purpose of providing the service.' },
          { p: 'Whoever publishes declares that they hold the necessary rights over the text, photographs and video they upload, and is liable for third-party claims regarding that content.' },
          { p: 'Real Travel may correct formal errors, normalise formats and adjust content to the editorial and technical standards of the platform, without altering its meaning.' },
          { p: 'Once the contractual relationship ends, the Destination may request the export of its content in a commonly used format, within a reasonable period from termination and as agreed between the parties.' },
        ],
      },
      {
        id: 'ip',
        title: '8. Intellectual property',
        blocks: [
          { p: 'The software, the platform architecture, the interface design, the cartography produced by Real Travel, the “Real Travel” trademarks and its distinctive signs are the property of Real Travel or its licensors, and are protected by Chilean and international legislation on intellectual and industrial property.' },
          { p: 'Nothing in these Terms transfers to the user any right over those elements, beyond the authorisation of use necessary to operate the contracted service.' },
        ],
      },
      {
        id: 'pricing',
        title: '9. Pricing, billing and term',
        blocks: [
          { p: 'The pricing model is based on the information published — points of interest, routes or experiences, listings board and provider profiles — and not on the technology infrastructure.' },
          { p: 'Current prices, currency, tax treatment, billing frequency and payment method are set out in the commercial proposal accepted by the client, which is deemed an integral part of these Terms for the relevant engagement. The same applies to renewal and early termination conditions.' },
          { p: 'Late payment entitles Real Travel to suspend publication, upon prior notice to the registered email address and after granting a reasonable period to remedy, without prejudice to the collection of amounts owed.' },
        ],
      },
      {
        id: 'availability',
        title: '10. Availability and support',
        blocks: [
          { p: 'Real Travel uses its best efforts to keep the platform continuously available, but does not guarantee the complete absence of interruptions. The service may be temporarily suspended for scheduled maintenance, which will be announced with reasonable notice, or due to force majeure or acts of third-party suppliers.' },
          { p: 'The support channel is [hola@realtravel.cl](mailto:hola@realtravel.cl). Committed response times, where they exist, are stated in the relevant commercial proposal.' },
        ],
      },
      {
        id: 'data',
        title: '11. Personal data',
        blocks: [
          { p: 'The processing of personal data is governed by the [Privacy Policy](/en/privacy), which forms an integral part of these Terms, and is subject to Chilean Law No. 19,628 and Law No. 21,719 once fully in force.' },
        ],
      },
      {
        id: 'liability',
        title: '12. Liability',
        blocks: [
          { p: 'Real Travel is liable for the proper provision of the contracted services in accordance with these Terms and applicable legislation.' },
          { p: 'Real Travel is not liable for the truthfulness, accuracy or currency of the content published by Destinations and Providers, nor for the relationships the Traveller establishes directly with them, nor for damage arising from improper use of the platform by the user or from failures of their own equipment or connection.' },
          { p: 'Published information is indicative. It is the Traveller’s responsibility to verify opening hours, access conditions and safety warnings before visiting a place.' },
        ],
      },
      {
        id: 'termination',
        title: '13. Amendment and termination',
        blocks: [
          { p: 'Real Travel may amend these Terms to reflect legal, technical or service changes. Material amendments will be announced on the website with reasonable notice before they take effect. Use of the platform after that date implies acceptance.' },
          { p: 'The user may terminate their account at any time by requesting it at [hola@realtravel.cl](mailto:hola@realtravel.cl), without prejudice to obligations outstanding at that date.' },
        ],
      },
      {
        id: 'law',
        title: '14. Governing law and jurisdiction',
        blocks: [
          { p: 'These Terms are governed by Chilean law. Any dispute regarding their interpretation, performance or validity shall be submitted to the ordinary courts of justice of the Republic of Chile.' },
          { p: 'Where the user qualifies as a consumer, Law No. 19,496 on consumer protection shall also apply, and these Terms are without prejudice to the non-waivable rights that law confers on them.' },
        ],
      },
    ],
  },

  privacy: {
    href: '/en/privacy',
    altHref: '/privacidad',
    title: 'Privacy policy',
    description: 'How Real Travel SpA handles personal information collected through its website.',
    meta: 'Real Travel SpA · Chilean tax ID 77.077.553-1 · Contact: [ti@realtravel.cl](mailto:ti@realtravel.cl)',
    intro: [
      { p: 'This is a translation of the Spanish original. In the event of any discrepancy, the [Spanish version](/privacidad) prevails.' },
      { p: 'At Real Travel SpA (hereinafter “Real Travel”), Chilean tax ID No. 77.077.553-1, we respect the privacy of visitors to our website [www.realtravelapp.com](https://www.realtravelapp.com).' },
      { p: 'Accordingly, we have developed this Privacy Policy (hereinafter the “Policy”), which explains how we handle the personal information collected through this site and is purely informative in nature.' },
    ],
    sections: [
      {
        id: 'controller',
        title: '1. Data controller',
        blocks: [
          { p: 'The controller is Real Travel SpA, contact email: [ti@realtravel.cl](mailto:ti@realtravel.cl).' },
        ],
      },
      {
        id: 'data',
        title: '2. Data we collect on the website',
        blocks: [
          { p: 'When you visit our site, we may collect:' },
          {
            ul: [
              '**Browsing data:** IP address, browser, device, language, date and time of access.',
              '**Cookies:** the use of necessary cookies does not require user authorisation. For analytics or personalisation cookies, the user’s prior consent will be requested, in accordance with applicable regulations.',
              '**Contact forms:** name, email address or other data voluntarily entered by the user.',
              '**Data for CRM and marketing purposes:** Real Travel may collect and process contact data (such as name, email address, telephone number and country of residence) from both website users and clients who interact with the company, in order to keep the records of its customer relationship management (CRM) system up to date. This data may be used to send informational communications, newsletters, promotional campaigns or satisfaction surveys, always on the basis of the data subject’s express and prior consent. The user or client may withdraw that consent at any time through the opt-out mechanisms available in each email or by contacting Real Travel directly.',
            ],
          },
          { p: 'No sensitive data is collected and no advanced profiling is carried out on this site, except with legal authorisation and express consent.' },
        ],
      },
      {
        id: 'purposes',
        title: '3. Purposes',
        blocks: [
          { p: 'The data is used solely to:' },
          {
            ul: [
              'Improve the browsing experience and analyse use of the site.',
              'Respond to enquiries sent through forms.',
              'Comply with applicable legal obligations.',
            ],
          },
        ],
      },
      {
        id: 'legal-basis',
        title: '4. Legal bases',
        blocks: [
          { p: 'Processing is based on:' },
          {
            ul: [
              'The user’s consent (for example, non-necessary cookies or forms).',
              'Real Travel’s legitimate interest in maintaining the secure operation of the site.',
              'Compliance with legal obligations.',
            ],
          },
        ],
      },
      {
        id: 'recipients',
        title: '5. Recipients and transfers',
        blocks: [
          { p: 'Data is not sold or disclosed to third parties, except to:' },
          {
            ul: [
              'Technology suppliers providing hosting, analytics or security services.',
              'Competent authorities where required by law.',
            ],
          },
          { p: 'Where international transfers take place, appropriate safeguards will be applied in accordance with Chilean regulations and international standards.' },
        ],
      },
      {
        id: 'rights',
        title: '6. User rights',
        blocks: [
          { p: 'Under Law No. 19,628 and Law No. 21,719 once fully in force, data subjects may request at any time:' },
          {
            ul: [
              'Access to their data.',
              'Rectification of inaccurate data.',
              'Erasure where appropriate.',
              'Objection to processing for marketing or analytics purposes.',
              'Portability of their data, where applicable under the new regulations.',
            ],
          },
          { p: 'Requests must be addressed to [ti@realtravel.cl](mailto:ti@realtravel.cl).' },
        ],
      },
      {
        id: 'retention',
        title: '7. Retention',
        blocks: [
          { p: 'Data is kept only for as long as necessary to fulfil the purposes described, and is then deleted or anonymised.' },
        ],
      },
      {
        id: 'security',
        title: '8. Security',
        blocks: [
          { p: 'Real Travel applies reasonable technical and organisational measures to protect personal data against unauthorised access, alteration or loss, in accordance with current legislation.' },
        ],
      },
      {
        id: 'scope',
        title: '9. Scope and updates',
        blocks: [
          { p: 'This Policy applies primarily in Chile, without prejudice to foreign rules that may apply in specific cases. This Policy may also be updated to reflect legal, technical or service changes. In the event of material changes, we will give timely notice through the website.' },
        ],
      },
    ],
  },
}

/** Los títulos de cada documento son también su etiqueta en el pie. */
export const legal: Record<LegalCopy['locale'], LegalCopy> = { es: legalEs, en: legalEn }
