export interface PracticeArea {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  casesHandled: number;
}

export interface Publication {
  title: string;
  type: string;
  publisher: string;
  url?: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  url?: string;
}

export interface Attorney {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  education: string;
  image: string;
  bio: string;
  email: string;
  phone: string;
  publications?: Publication[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  caseType: string;
  comment: string;
  rating: number;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface LocalDirectoryItem {
  name: string;
  desc: string;
  address: string;
  category: string;
}

export const FIRM_INFO = {
  name: 'Protección Familiar',
  founder: 'Dr. Alexander Solano',
  domain: 'proteccionfamiliar.co',
  tagline: 'Defensa legal con autoridad y empatía en Popayán y Cali',
  description: 'Firma jurídica boutique especializada en Derecho de Familia, Sucesiones, Divorcios y Protección Patrimonial dirigida por el Dr. Alexander Solano. Acompañamiento humano, rigor académico e intervención judicial de alto nivel.',
  phone: '+57 315 354 0285',
  emergencyPhone: '+57 315 354 0285',
  email: 'contacto@proteccionfamiliar.co',
  address: 'Cra 8 #2-44, Oficina 313, Centro, Popayán, Cauca',
  secondaryAddress: 'Sede y Cobertura Directa en Cali (Valle del Cauca) & Servicios Virtuales en Colombia',
  workingHours: 'Lunes a Viernes: 8:00 AM - 7:00 PM | Guardia 24/7',
  stats: [
    { label: 'Casos Exitosos', value: '15+' },
    { label: 'Casos Eficaces', value: '450+' },
    { label: 'Guía Preferente', value: '03' }
  ]
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'divorcio-mutuo-acuerdo',
    title: 'Divorcio por Mutuo Acuerdo',
    category: 'Familia',
    shortDesc: 'Trámites ágiles ante notaría para disoluciones consensuadas, garantizando un proceso sin fricciones y con absoluta reserva.',
    fullDesc: 'Disolución del vínculo matrimonial e inventario de bienes de forma pacífica y notarial en Popayán y Cali. Redacción de acuerdos equitativos sin desgaste emocional.',
    benefits: [
      'Trámite notarial rápido en 5-10 días hábiles',
      'Acuerdos compositivos de sociedad conyugal',
      'Convenio regulador para tranquilidad de los cónyuges'
    ],
    casesHandled: 480
  },
  {
    id: 'proteccion-patrimonial',
    title: 'Protección Patrimonial',
    category: 'Patrimonio',
    shortDesc: 'Liquidación previa de sociedad conyugal y defensa de activos adquiridos antes del matrimonio o unión marital.',
    fullDesc: 'Blindaje jurídico de bienes inmuebles, empresas familiares, capitulaciones matrimoniales y prevención de embargos o contingencias legales.',
    benefits: [
      'Capitulaciones matrimoniales y patrimoniales',
      'Separación preventiva de bienes',
      'Blindaje inmobiliario y corporativo'
    ],
    casesHandled: 390
  },
  {
    id: 'custodia-alimentos',
    title: 'Custodia y Alimentos',
    category: 'Familia',
    shortDesc: 'Estructuramos acuerdos de bienestar que protegen el futuro de sus hijos bajo los más altos estándares legales.',
    fullDesc: 'Fijación, aumento, disminución y reclamo ejecutivo de cuota alimentaria, custodia compartida, patria potestad y régimen de visitas.',
    benefits: [
      'Interés superior de niños, niñas y adolescentes',
      'Conciliaciones con fuerza ejecutiva y cosa juzgada',
      'Acompañamiento ante ICBF y Defensorías'
    ],
    casesHandled: 520
  },
  {
    id: 'litigio-contencioso',
    title: 'Litigio Contencioso y Sucesiones',
    category: 'Litigio',
    shortDesc: 'Representación rigurosa ante juzgados de familia cuando el acuerdo no es una opción, fundamentada en derecho probatorio.',
    fullDesc: 'Procesos de sucesión testamentaria e intestada, impugnación y filiación de paternidad, y divorcios contenciosos ante tribunales del Cauca y Valle.',
    benefits: [
      'Liquidación sucesoria y adjudicación de inmuebles',
      'Defensa técnica en audiencias judiciales',
      'Impugnación o investigación de paternidad'
    ],
    casesHandled: 310
  }
];

export const RESOLUTION_STEPS = [
  {
    step: '01',
    title: 'Consulta Inicial',
    desc: 'Análisis exhaustivo de su situación jurídica y objetivos personales en una sesión privada presencial o virtual.'
  },
  {
    step: '02',
    title: 'Diseño Estratégico',
    desc: 'Elaboración de la hoja de ruta legal, ya sea conciliación notarial o preparación de demanda judicial.'
  },
  {
    step: '03',
    title: 'Ejecución y Cierre',
    desc: 'Formalización ante Notaría o Juzgado y liquidación definitiva de vínculos e inmuebles con plena validez.'
  }
];

export const POPAYAN_DIRECTORY: LocalDirectoryItem[] = [
  {
    name: 'Notarías de Popayán',
    desc: 'Notaría Primera, Segunda y Tercera de Popayán para divorcios y escrituras.',
    address: 'Centro Histórico, Popayán',
    category: 'Notarías'
  },
  {
    name: 'Palacio de Justicia (Juzgados de Familia)',
    desc: 'Tribunales y Juzgados de Familia del Circuito de Popayán.',
    address: 'Calle 4 # 2-01, Centro, Popayán',
    category: 'Judicial'
  },
  {
    name: 'ICBF Seccional Cauca',
    desc: 'Centro Zonal Popayán para conciliaciones y derechos de menores.',
    address: 'Carrera 6 # 3-45, Popayán',
    category: 'Protección Infantil'
  }
];

export const ATTORNEYS: Attorney[] = [
  {
    id: 'alexander-solano',
    name: 'Dr. Alexander Solano',
    role: 'Socio Director & Fundador',
    specialty: 'Derecho de Familia, Conciliador & Litigante Civil',
    experience: '18+ Años de Trayectoria | Magíster & Cand. Doctor en Derecho',
    education: 'Abogado, Conciliador | Especialista en Derecho de Familia | Magíster en Derecho | Candidato a Doctor en Derecho',
    image: 'https://proteccionfamiliar.co/wp-content/uploads/2026/07/Alexander-Solano-Abogado.jpeg',
    bio: 'El Dr. Alexander Solano es Abogado, Conciliador, Especialista en Derecho de Familia, Magíster en Derecho y Candidato a Doctor en Derecho. Litigante de alto nivel, docente e investigador en instituciones de educación superior del Suroccidente colombiano. Autor y jurista de reconocidos libros académicos y artículos científicos en derecho familiar e identidad sociojurídica.',
    email: 'contacto@proteccionfamiliar.co',
    phone: '+57 315 354 0285',
    publications: [
      {
        title: 'La construcción de la identidad al interior de la familia asistida: pugnas históricas, sociales y jurídicas colombianas (2da Edición)',
        type: 'Libro de Investigación',
        publisher: 'Editorial Uniautónoma',
        url: 'https://repositorio.uniautonoma.edu.co/handle/123456789/744'
      },
      {
        title: 'La investigación jurídica en perspectiva multidisciplinar: aportes para la comprensión de realidades sociales, políticas y jurídicas',
        type: 'Libro Académico',
        publisher: 'Editorial Uniautónoma',
        url: 'https://repositorio.uniautonoma.edu.co/xmlui/handle/123456789/664'
      },
      {
        title: 'Resiliencia como respuesta a la ausencia del estado: la influencia del conflicto armado colombiano en las familias diversas desde una mirada sociojurídica',
        type: 'Artículo de Investigación',
        publisher: 'ResearchGate',
        url: 'https://www.researchgate.net/publication/401072716_Resiliencia_como_respuesta_a_la_ausencia_del_estado_la_influencia_del_conflicto_armado_colombiano_en_las_familias_diversas_desde_una_mirada_sociojuridica'
      },
      {
        title: 'Conceptual Reconfiguration of the Family in Postmodern Law: A Look at the Colombian Case',
        type: 'Artículo Internacional',
        publisher: 'Sci-Cult Journal',
        url: 'https://sci-cult.net/index.php/cult/article/view/3761/2229'
      }
    ]
  }
];

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'La Ley de Divorcio en Colombia: Lo que debe saber',
    excerpt: 'Análisis paso a paso de las causales y el divorcio sin culpa de mutuo acuerdo según la legislación vigente.',
    category: 'Guía Legal',
    readTime: '5 min de lectura',
    author: 'Dr. Alexander Solano',
    date: 'Julio 2026',
    url: '#'
  },
  {
    id: '2',
    title: 'Sociedad Conyugal vs. Unión Marital de Hecho',
    excerpt: 'Diferencias patrimoniales, capitulaciones y derechos sucesorios en parejas casadas o en convivencia.',
    category: 'Patrimonio',
    readTime: '6 min de lectura',
    author: 'Dr. Alexander Solano',
    date: 'Junio 2026',
    url: '#'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'M. Valencia',
    location: 'Popayán, Cauca',
    caseType: 'Divorcio & Liquidación de Bienes',
    comment: 'La discreción y autoridad del Dr. Alexander Solano permitieron cerrar una negociación compleja en notarías de Popayán de forma pacífica y justa.',
    rating: 5,
    date: 'Hace 1 mes'
  },
  {
    id: '2',
    clientName: 'Carlos A.',
    location: 'Cali, Valle del Cauca',
    caseType: 'Custodia & Regulación de Alimentos',
    comment: 'Excelente rigor académico y humano. El acuerdo de custodia compartida fue perfecto para la estabilidad emocional de mis hijos.',
    rating: 5,
    date: 'Hace 3 semanas'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'Divorcio',
    question: '¿Cuánto tarda un divorcio express por mutuo acuerdo en Popayán?',
    answer: 'Si hay acuerdo total entre las partes, el trámite notarial en Popayán o Cali se completa habitualmente en un lapso de 5 a 10 días hábiles, dependiendo de la firma de la escritura pública.'
  },
  {
    category: 'Patrimonio',
    question: '¿Qué sucede con los bienes comprados antes del matrimonio?',
    answer: 'Los bienes adquiridos con anterioridad al matrimonio no forman parte de la sociedad conyugal. Sin embargo, los frutos o valorizaciones requieren una adecuada liquidación y prueba jurídica para evitar confusiones patrimoniales.'
  },
  {
    category: 'Representación',
    question: '¿Es obligatoria la presencia de un abogado en Notaría?',
    answer: 'Sí. Para la firma del acuerdo notarial de divorcio y la liquidación de la sociedad conyugal, la ley colombiana exige la asistencia y firma de un Abogado titulado.'
  }
];
