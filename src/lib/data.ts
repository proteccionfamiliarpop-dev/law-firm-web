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

export const FIRM_INFO = {
  name: 'Protección Familiar & Asociados',
  founder: 'Dr. Alexander Solano',
  tagline: 'Plataforma Jurídica Especializada en Derecho de Familia & Protección Patrimonial',
  description: 'Firma jurídica de referencia en Colombia dirigida por el Dr. Alexander Solano. Acompañamiento empático, rigor académico y estrategia legal de alta precisión en derecho familiar, sucesiones y contratos civiles en Popayán, Cali y a nivel nacional.',
  phone: '+57 315 354 0285',
  emergencyPhone: '+57 315 354 0285',
  email: 'contacto@proteccionfamiliar.law',
  address: 'Cra 8 #2-44, Oficina 313, Centro, Popayán, Cauca',
  secondaryAddress: 'Cobertura Directa en Cali (Valle del Cauca) & Servicios Virtuales en Colombia',
  workingHours: 'Lunes a Viernes: 8:00 AM - 7:00 PM | Atención Directa 24/7',
  stats: [
    { label: 'Casos Resueltos', value: '2,500+' },
    { label: 'Efectividad en Conciliación', value: '98.4%' },
    { label: 'Trayectoria Académica', value: '18+ Años' },
    { label: 'Atención Prioritaria', value: '24/7' }
  ]
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'derecho-familiar',
    title: 'Derecho de Familia & Sucesiones',
    category: 'Familia',
    shortDesc: 'Sucesiones, testamentos, divorcios incausados, uniones maritales de hecho, régimen de alimentos y custodia.',
    fullDesc: 'Asistencia y representación de alta discreción dirigida por el Dr. Alexander Solano en disputas y acuerdos familiares en Popayán y Cali: Juicios sucesorios, Testamentos, Donaciones, Fijación y Reclamo de Alimentos, Investigación o Impugnación de Paternidad/Maternidad, Capitulaciones, Matrimonio, Divorcios, Liquidación de Sociedad Conyugal y Patrimonial, y Adopción.',
    benefits: [
      'Estructuración de Testamentos e Impugnación Sucesoria',
      'Divorcio y Liquidación de Sociedad Conyugal / Patrimonial',
      'Investigación e Impugnación de Paternidad o Maternidad',
      'Fijación, Cuota y Reclamo de Alimentos, Adopciones'
    ],
    casesHandled: 980
  },
  {
    id: 'proteccion-patrimonial-contratos',
    title: 'Contratos Civiles & Asuntos Inmobiliarios',
    category: 'Patrimonio',
    shortDesc: 'Blindaje, negociación y defensa en contratos de compraventa, arrendamiento, hipotecas y servidumbres.',
    fullDesc: 'Consultoría e intervención jurídica en protección, elaboración, negociación y defensa de contratos civiles: Compraventa, permuta, arrendamiento, mutuo, depósito, mandato, hipoteca, anticresis, prenda y transacción. Consultoría Inmobiliaria en Popayán y Cali: Derechos de uso y habitación, servidumbres, acciones reivindicatorias y de simulación.',
    benefits: [
      'Auditoría y Blindaje de Contratos Civiles y Comerciales',
      'Derechos de uso, habitación y servidumbres inmobiliarias',
      'Acciones Reivindicatorias y de Simulación Inmobiliaria',
      'Blindaje patrimonial contra contingencias y embargo'
    ],
    casesHandled: 720
  },
  {
    id: 'litigio-civil',
    title: 'Litigio Civil & Representación Jurisdiccional',
    category: 'Litigio',
    shortDesc: 'Representación técnica en procesos civiles y de responsabilidad patrimonial ante tribunales.',
    fullDesc: 'Defensa estratégica ante la jurisdicción civil y de familia garantizando resultados favorables según las necesidades concretas del cliente en el Cauca, Valle del Cauca y Colombia.',
    benefits: [
      'Litigio ante Juzgados Civiles y de Familia',
      'Acciones de Simulación y Nulidad de Contratos',
      'Resolución de Conflictos Patrimoniales',
      'Representación integral en procesos judiciales'
    ],
    casesHandled: 540
  },
  {
    id: 'conciliacion-mediacion',
    title: 'Conciliación en Derecho & Mediación',
    category: 'MASC',
    shortDesc: 'Mecanismos alternativos de solución de conflictos dirigidos por conciliadores oficiales en derecho.',
    fullDesc: 'Resolución pacífica y vinculante de controversias familiares y civiles a través de procesos de conciliación en derecho con plena validez de cosa juzgada.',
    benefits: [
      'Actas de Conciliación con fuerza de Cosa Juzgada',
      'Acuerdos compositivos de liquidación y alimentos',
      'Solución ágil y económica de disputas',
      'Asesoría técnica previa a la audiencia'
    ],
    casesHandled: 470
  },
  {
    id: 'derecho-corporativo',
    title: 'Empresa Familiar & Gobierno Corporativo',
    category: 'Empresarial',
    shortDesc: 'Estructuración jurídica de empresas familiares, protocolos de familia y acuerdos entre socios.',
    fullDesc: 'Asesoramos a familias empresarias de Popayán y Cali en la transición generacional, ordenamiento patrimonial, gobierno corporativo y solución de disputas entre socios.',
    benefits: [
      'Protocolos de Empresa Familiar',
      'Constitución de Sociedades (S.A.S., S.A.)',
      'Registro de Marcas y Propiedad Intelectual',
      'Contratación Civil y Comercial'
    ],
    casesHandled: 410
  },
  {
    id: 'defensa-penal',
    title: 'Defensa Penal & Acciones de Tutela',
    category: 'Garantías',
    shortDesc: 'Atención penal inmediata ante fiscalías, audiencias de control de garantías y tutelas urgentes.',
    fullDesc: 'Defensa técnica rigurosa ante el sistema penal acumulativo y tramitación de Acciones de Tutela para la protección inmediata de derechos fundamentales.',
    benefits: [
      'Asistencia técnica inmediata 24 horas',
      'Audiencias de Control de Garantías y Juicio',
      'Tramitación de Acciones de Tutela y Amparos',
      'Representación a víctimas'
    ],
    casesHandled: 310
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
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600',
    bio: 'El Dr. Alexander Solano es Abogado, Conciliador, Especialista en Derecho de Familia, Magíster en Derecho y Candidato a Doctor en Derecho. Litigante de alto nivel, docente e investigador en instituciones de educación superior del Suroccidente colombiano. Autor y jurista de reconocidos libros académicos y artículos científicos de investigación en derecho familiar e identidad sociojurídica.',
    email: 'alexandersolano@proteccionfamiliar.law',
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
  },
  {
    id: 'sofia-valenzuela',
    name: 'Dra. Sofía Valenzuela R.',
    role: 'Socia Directora - Área Familiar',
    specialty: 'Derecho de Familia, Custodia y Mediación',
    experience: '16 años de experiencia',
    education: 'Licenciada en Derecho | Magistra en Derecho Familiar',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    bio: 'Especialista en solución de controversias familiares complejas, adopciones y mediación de custodia infantil con enfoque en el interés superior de la infancia en Popayán y Cali.',
    email: 'svalenzuela@proteccionfamiliar.law',
    phone: '+57 315 354 0285'
  },
  {
    id: 'carlos-morales',
    name: 'Dr. Carlos Morales O.',
    role: 'Director de Defensa Penal & Tutelas',
    specialty: 'Sistema Penal Acusatorio & Garantías Constitucionales',
    experience: '14 años de experiencia',
    education: 'Abogado | Certificación en Litigación Oral',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
    bio: 'Líder del equipo de respuesta inmediata 24/7. Ha litigado con éxito en audiencias penales complejas y tramitación de Acciones de Tutela en el Suroccidente colombiano.',
    email: 'cmorales@proteccionfamiliar.law',
    phone: '+57 315 354 0285'
  },
  {
    id: 'elena-ramirez',
    name: 'Dra. Elena Ramírez S.',
    role: 'Socia Corporativa & Inmobiliaria',
    specialty: 'Derecho Civil, Inmobiliario y Contratos',
    experience: '11 años de experiencia',
    education: 'Abogada | Magistra en Derecho Civil y Mercantil',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=600',
    bio: 'Asesora en estructuración de contratos de arrendamiento, compraventas, hipotecas y acciones reivindicatorias de propiedad en Popayán, Cali y Valle del Cauca.',
    email: 'eramirez@proteccionfamiliar.law',
    phone: '+57 315 354 0285'
  }
];

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Sucesiones en Colombia: Guía Legal para la Adjudicación de Bienes sin Conflicto Familiar',
    excerpt: 'Análisis paso a paso de los procesos sucesorios testamentarios e intestados según el Código General del Proceso en Colombia.',
    category: 'Sucesiones',
    readTime: '6 min de lectura',
    author: 'Dr. Alexander Solano',
    date: 'Julio 2026',
    url: '#'
  },
  {
    id: '2',
    title: 'Divorcio de Mutuo Acuerdo vs. Divorcio Incausado: Derechos, Tiempos y Custodia de Menores',
    excerpt: 'Aspectos legales clave para disolver el vínculo matrimonial y liquidar la sociedad conyugal de forma pacífica y protegida.',
    category: 'Familia',
    readTime: '8 min de lectura',
    author: 'Dr. Alexander Solano',
    date: 'Junio 2026',
    url: '#'
  },
  {
    id: '3',
    title: 'La Reconfiguración de la Familia en el Derecho Colombiano Contemporáneo',
    excerpt: 'Reflexión académica sobre la protección jurídica de las familias diversas y las uniones maritales de hecho en el Suroccidente colombiano.',
    category: 'Investigación Académica',
    readTime: '10 min de lectura',
    author: 'Dr. Alexander Solano',
    date: 'Mayo 2026',
    url: 'https://sci-cult.net/index.php/cult/article/view/3761/2229'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Roberto G.',
    location: 'Popayán, Cauca',
    caseType: 'Sucesión Completa & Contratos Civiles',
    comment: 'El acompañamiento riguroso y humano del Dr. Alexander Solano garantizó una sucesión justa y la preservación de nuestros inmuebles familiares en Popayán. Total discreción.',
    rating: 5,
    date: 'Hace 2 meses'
  },
  {
    id: '2',
    clientName: 'Mariana H.',
    location: 'Cali, Valle del Cauca',
    caseType: 'Filiación & Cuota Alimenticia',
    comment: 'El equipo del Dr. Solano abordó mi caso con un nivel de empatía e investigación académica brillante. Logramos el mejor acuerdo para la tranquilidad de mis hijos.',
    rating: 5,
    date: 'Hace 1 mes'
  },
  {
    id: '3',
    clientName: 'Grupo Comercial Cauca',
    location: 'Suroccidente Colombiano',
    caseType: 'Protocolo de Empresa Familiar & Contratos',
    comment: 'Protección Familiar estructuró nuestro gobierno corporativo y blindó los contratos civiles de la compañía con impecable profesionalismo.',
    rating: 5,
    date: 'Hace 3 semanas'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'Ubicación & Cobertura',
    question: '¿Dónde está ubicada la oficina principal de la firma de abogados?',
    answer: 'Nuestra sede principal en Popayán se ubica en la Carrera 8 # 2-44, Oficina 313, Edificio Centro, Popayán, Cauca. Prestamos atención presencial y representación judicial en Cali (Valle del Cauca) y asesoría virtual a nivel nacional en Colombia.'
  },
  {
    category: 'Especialista',
    question: '¿Quién coordina los casos de Derecho de Familia y Sucesiones?',
    answer: 'Todos los casos estratégicos de Derecho de Familia, Sucesiones y Contratos Civiles son dirigidos supervisadamente por el Dr. Alexander Solano, Abogado, Conciliador, Magíster en Derecho y Candidato a Doctor en Derecho.'
  },
  {
    category: 'Sincronización & Citas',
    question: '¿Cómo funciona el agendamiento en tiempo real con Google Calendar?',
    answer: 'Al hacer clic en "Agendar Consulta", nuestro sistema se conecta en vivo con Google Calendar para permitirte reservar el horario disponible de tu preferencia con generación automática de enlace de Google Meet o cita presencial.'
  },
  {
    category: 'Confidencialidad & EEAT',
    question: '¿Mis datos e información compartida están blindados?',
    answer: 'Absolutamente. Toda consulta y documento compartido está protegido bajo el Secreto Profesional Abogado-Cliente y regido por las normativas éticas del ejercicio de la abogacía en Colombia.'
  }
];
