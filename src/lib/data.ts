export interface PracticeArea {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  casesHandled: number;
}

export interface Publication {
  title: string;
  type: string;
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
  tagline: 'Abogados Especialistas en Derecho de Familia & Civil en Popayán, Cali y Colombia',
  description: 'Firma jurídica líder en el Suroccidente colombiano dirigida por el Dr. Alexander Solano. Asesoría jurídica estratégica, representación de alto nivel y soluciones definitivas en derecho familiar, sucesiones, divorcios y contratos civiles.',
  phone: '+57 315 354 0285',
  emergencyPhone: '+57 315 354 0285',
  email: 'contacto@proteccionfamiliar.law',
  address: 'Cra 8 #2-44, Oficina 313, Centro, Popayán, Cauca',
  secondaryAddress: 'Cobertura en Cali (Valle del Cauca) y Nivel Nacional en Colombia',
  workingHours: 'Lunes a Viernes: 8:00 AM - 7:00 PM | Atención y WhatsApp 24/7',
  stats: [
    { label: 'Casos Exitosos', value: '2,500+' },
    { label: 'Tasa de Éxito', value: '98.4%' },
    { label: 'Años de Experiencia', value: '18+' },
    { label: 'Atención WhatsApp', value: '24/7' }
  ]
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'derecho-familiar',
    title: 'Derecho de Familia & Sucesiones en Popayán y Cali',
    iconName: 'Users',
    shortDesc: 'Sucesiones, testamentos, divorcios, uniones maritales de hecho, alimentos, custodia y adopciones.',
    fullDesc: 'Representación legal de alto nivel dirigida por el Dr. Alexander Solano en disputas y procesos de familia en Popayán y Cali: Juicios sucesorios, Testamentos, Donaciones, Fijación y Reclamo de Alimentos, Impugnación e Investigación de Paternidad/Maternidad, Capitulaciones, Nupcias, Divorcios Incausados o de Mutuo Acuerdo, Liquidación de Sociedad Conyugal y Patrimonial, y Adopción.',
    benefits: [
      'Juicios Sucesorios e Impugnación de Testamentos',
      'Divorcio y Liquidación de Sociedad Conyugal / Patrimonial',
      'Investigación e Impugnación de Paternidad o Maternidad',
      'Fijación, Cuota y Reclamo de Alimentos, Custodia y Adopciones'
    ],
    casesHandled: 980
  },
  {
    id: 'proteccion-patrimonial-contratos',
    title: 'Contratos Civiles & Asuntos Inmobiliarios',
    iconName: 'ShieldCheck',
    shortDesc: 'Protección, negociación y defensa en contratos de compraventa, arrendamiento, hipotecas y servidumbres.',
    fullDesc: 'Consultoría e intervención jurídica en protección, elaboración, negociación y defensa de contratos civiles: Compraventa, permuta, arrendamiento, mutuo, depósito, mandato, hipoteca, anticresis, prenda y transacción. Consultoría Inmobiliaria en Popayán y Cali: Derechos de uso y habitación, servidumbres, acciones reivindicatorias y de simulación.',
    benefits: [
      'Auditoría y Blindaje de Contratos Civiles y Comerciales',
      'Derechos de uso, habitación y servidumbres inmobiliarias',
      'Acciones Reivindicatorias y de Simulación Inmobiliaria',
      'Blindaje patrimonial contra embargos y controversias'
    ],
    casesHandled: 720
  },
  {
    id: 'litigio-civil',
    title: 'Litigio Civil & Representación Jurisdiccional',
    iconName: 'FileText',
    shortDesc: 'Representación técnica en procesos civiles ante juzgados y tribunales de Popayán, Cali y Colombia.',
    fullDesc: 'Defensa estratégica ante la jurisdicción civil y de familia garantizando resultados favorables según las necesidades concretas del cliente en el Cauca y Valle del Cauca.',
    benefits: [
      'Litigio ante Juzgados Civiles y de Familia',
      'Acciones de Simulación y Nulidad de Contratos',
      'Resolución de Conflictos Patrimoniales',
      'Representación integral en procesos judiciales'
    ],
    casesHandled: 540
  },
  {
    id: 'defensa-penal',
    title: 'Defensa Penal 24/7 & Acciones de Tutela',
    iconName: 'Gavel',
    shortDesc: 'Atención penal inmediata ante fiscalías, audiencias de control de garantías y tutelas urgentes.',
    fullDesc: 'Brindamos una defensa técnica rigurosa e inmediata. Nuestros abogados penalistas acuden al instante para garantizar el debido proceso y la libertad de nuestros representados en Popayán y Cali.',
    benefits: [
      'Asistencia técnica inmediata 24 horas',
      'Audiencias de Control de Garantías y Juicio',
      'Tramitación de Acciones de Tutela y Amparos',
      'Representación a víctimas'
    ],
    casesHandled: 310
  },
  {
    id: 'derecho-corporativo',
    title: 'Corporativo & Empresa Familiar',
    iconName: 'Briefcase',
    shortDesc: 'Estructuración jurídica de empresas familiares, gobierno corporativo y acuerdos entre socios.',
    fullDesc: 'Asesoramos a empresas y familias empresarias de Popayán y Cali en su crecimiento, garantizando el cumplimiento normativo, la protección de marcas y la resolución de disputas entre socios.',
    benefits: [
      'Constitución de Sociedades (S.A.S., S.A., S.C.)',
      'Protocolos de Familia y Gobierno Corporativo',
      'Registro de Marcas y Propiedad Intelectual',
      'Contratación Civil y Comercial'
    ],
    casesHandled: 410
  },
  {
    id: 'conciliacion-mediacion',
    title: 'Conciliación en Derecho & Mediación',
    iconName: 'Award',
    shortDesc: 'Mecanismos alternativos de solución de conflictos dirigidos por conciliadores oficiales en derecho.',
    fullDesc: 'Resolución pacífica y vinculante de controversias familiares y civiles a través de procesos de conciliación en derecho con plena validez de cosa juzgada.',
    benefits: [
      'Actas de Conciliación con fuerza de Cosa Juzgada',
      'Acuerdos compositivos de liquidación y alimentos',
      'Solución ágil y económica de disputas',
      'Asesoría técnica previa a la audiencia'
    ],
    casesHandled: 470
  }
];

export const ATTORNEYS: Attorney[] = [
  {
    id: 'alexander-solano',
    name: 'Dr. Alexander Solano',
    role: 'Socio Director & Fundador del Bufete',
    specialty: 'Derecho de Familia, Conciliador & Litigante Civil',
    experience: '18+ Años | Magíster & Cand. Doctor en Derecho',
    education: 'Abogado, Conciliador | Especialista en Derecho de Familia | Magíster en Derecho | Candidato a Doctor en Derecho',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600',
    bio: 'El Dr. Alexander Solano es Abogado, Conciliador, Especialista en Derecho de Familia, Magíster en Derecho y Candidato a Doctor en Derecho. Litigante de alto nivel, docente e investigador en instituciones de educación superior del Suroccidente colombiano. Autor y jurista de reconocidos libros académicos y artículos científicos de investigación en derecho familiar e identidad sociojurídica.',
    email: 'alexandersolano@proteccionfamiliar.law',
    phone: '+57 315 354 0285',
    publications: [
      {
        title: 'Libro: La construcción de la identidad al interior de la familia asistida: pugnas históricas, sociales y jurídicas colombianas (2da Edición)',
        type: 'Libro de Investigación',
        url: 'https://repositorio.uniautonoma.edu.co/handle/123456789/744'
      },
      {
        title: 'Libro: La investigación jurídica en perspectiva multidisciplinar: aportes para la comprensión de realidades sociales, políticas y jurídicas',
        type: 'Libro Académico',
        url: 'https://repositorio.uniautonoma.edu.co/xmlui/handle/123456789/664'
      },
      {
        title: 'Artículo: Resiliencia como respuesta a la ausencia del estado: la influencia del conflicto armado colombiano en las familias diversas desde una mirada sociojurídica',
        type: 'Artículo de Investigación',
        url: 'https://www.researchgate.net/publication/401072716_Resiliencia_como_respuesta_a_la_ausencia_del_estado_la_influencia_del_conflicto_armado_colombiano_en_las_familias_diversas_desde_una_mirada_sociojuridica'
      },
      {
        title: 'Artículo: Conceptual Reconfiguration of the Family in Postmodern Law: A Look at the Colombian Case',
        type: 'Artículo Internacional',
        url: 'https://sci-cult.net/index.php/cult/article/view/3761/2229'
      }
    ]
  },
  {
    id: 'sofia-valenzuela',
    name: 'Lic. Sofía Valenzuela R.',
    role: 'Socia Directora - Área Familiar',
    specialty: 'Derecho de Familia, Custodia y Mediación',
    experience: '16 años de experiencia',
    education: 'Licenciatura en Derecho | Maestría en Derecho Familiar',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    bio: 'Especialista en solución de controversias familiares complejas, adopciones y mediación de custodia infantil con enfoque en el interés superior de la infancia en Popayán y Cali.',
    email: 'svalenzuela@proteccionfamiliar.law',
    phone: '+57 315 354 0285'
  },
  {
    id: 'carlos-morales',
    name: 'Lic. Carlos Morales O.',
    role: 'Director de Defensa Penal',
    specialty: 'Sistema Penal Acusatorio & Tutelas',
    experience: '14 años de experiencia',
    education: 'Licenciatura en Derecho | Certificado en Litigación Oral',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
    bio: 'Líder del equipo de respuesta inmediata 24/7. Ha litigado con éxito en audiencias penales complejas y tramitación de acciones de tutela en el Suroccidente colombiano.',
    email: 'cmorales@proteccionfamiliar.law',
    phone: '+57 315 354 0285'
  },
  {
    id: 'elena-ramirez',
    name: 'Dra. Elena Ramírez S.',
    role: 'Socia Corporativa & Inmobiliaria',
    specialty: 'Derecho Civil, Inmobiliario y Contratos',
    experience: '11 años de experiencia',
    education: 'Licenciatura y Maestría en Derecho Civil y Mercantil',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=600',
    bio: 'Asesora en estructuración de contratos de arrendamiento, compraventas, hipotecas y acciones reivindicatorias de propiedad en Popayán, Cali y Valle del Cauca.',
    email: 'eramirez@proteccionfamiliar.law',
    phone: '+57 315 354 0285'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Roberto G. - Empresario en Popayán',
    caseType: 'Sucesión Completa y Contratos Civiles',
    comment: 'El acompañamiento académico y riguroso del Dr. Alexander Solano y su equipo garantizó una sucesión justa y la protección total de nuestros inmuebles familiares en el centro de Popayán.',
    rating: 5,
    date: 'Hace 2 meses'
  },
  {
    id: '2',
    clientName: 'Mariana H. - Cali, Valle',
    caseType: 'Filiación y Cuota Alimenticia',
    comment: 'El Dr. Alexander Solano llevó mi caso de filiación y alimentos con un nivel de investigación académica y firmeza legal impecable. Excelente representación en Cali y Popayán.',
    rating: 5,
    date: 'Hace 1 mes'
  },
  {
    id: '3',
    clientName: 'Grupo Comercial Cauca',
    caseType: 'Contratos Civiles y Asuntos Inmobiliarios',
    comment: 'Protección Familiar estructuró nuestros contratos de compraventa y servidumbres inmobiliarias en el Cauca con un blindaje preventivo de primer nivel.',
    rating: 5,
    date: 'Hace 3 semanas'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'General',
    question: '¿Dónde está ubicada la sede principal de la firma de abogados?',
    answer: 'Nuestra oficina principal en Popayán está ubicada en la Carrera 8 # 2-44, Oficina 313, Edificio Centro, Popayán, Cauca. También brindamos atención presencial y representación judicial en Cali (Valle del Cauca) y a nivel nacional.'
  },
  {
    category: 'Especialista',
    question: '¿Quién lidera los procesos de Derecho de Familia y Sucesiones?',
    answer: 'Todos los casos estratégicos de Derecho de Familia, Sucesiones y Contratos Civiles son dirigidos supervisadamente por el Dr. Alexander Solano, Abogado, Conciliador, Magíster en Derecho y Candidato a Doctor en Derecho.'
  },
  {
    category: 'Urgencias',
    question: '¿Cómo puedo comunicarse inmediatamente por WhatsApp o llamadas?',
    answer: 'Puedes contactarnos las 24 horas del día al teléfono y WhatsApp +57 315 354 0285. Nuestro equipo te dará respuesta prioritaria.'
  },
  {
    category: 'Confidencialidad',
    question: '¿Mis datos e información compartida son confidenciales?',
    answer: 'Absolutamente. Toda comunicación está blindada bajo el Secreto Profesional Abogado-Cliente y protegida por nuestro estricto Aviso de Privacidad en conformidad con la legislación colombiana.'
  }
];
