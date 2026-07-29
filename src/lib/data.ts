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
  tagline: 'Defensa Legal Exclusiva y Protección Integral para Tu Familia y Patrimonio',
  description: 'Comprometidos con la excelencia e integralidad en servicios jurídicos especializados, asistencia y representación de alto nivel ante la jurisdicción civil y de familia en Colombia.',
  phone: '+57 315 354 0285',
  emergencyPhone: '+57 315 354 0285',
  email: 'contacto@proteccionfamiliar.law',
  address: 'Suroccidente Colombiano | Cobertura en Popayán, Cali y Nivel Nacional',
  workingHours: 'Lunes a Viernes: 8:00 AM - 7:00 PM | Atención y WhatsApp 24/7',
  stats: [
    { label: 'Casos Resueltos', value: '2,500+' },
    { label: 'Tasa de Éxito', value: '98.4%' },
    { label: 'Años de Trayectoria', value: '18+' },
    { label: 'Atención WhatsApp', value: '24/7' }
  ]
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'derecho-familiar',
    title: 'Derecho de Familia & Sucesiones',
    iconName: 'Users',
    shortDesc: 'Sucesiones, testamentos, divorcios, uniones maritales, alimentos, patria potestad y filiación.',
    fullDesc: 'Asistencia y representación en disputas y acuerdos familiares: Sucesiones, Testamentos, Donaciones, Derecho de Alimentos, Investigación o Impugnación de Paternidad/Maternidad, Capitulaciones, Nupcias, Divorcios, Uniones Maritales de Hecho, Liquidaciones de Sociedad Conyugal y Patrimonial, y Adopción de menores o mayores de edad.',
    benefits: [
      'Juicios Sucesorios e Impugnación de Testamentos',
      'Divorcio y Liquidación de Sociedad Conyugal / Patrimonial',
      'Investigación e Impugnación de Paternidad o Maternidad',
      'Fijación, Cuota y Reclamo de Alimentos, Adopciones'
    ],
    casesHandled: 980
  },
  {
    id: 'proteccion-patrimonial-contratos',
    title: 'Contratos Civiles & Asuntos Inmobiliarios',
    iconName: 'ShieldCheck',
    shortDesc: 'Protección y negociación en contratos de compraventa, arrendamiento, hipotecas y derechos inmobiliarios.',
    fullDesc: 'Consultoría e intervención jurídica en protección, elaboración, negociación y defensa de contratos civiles: Compraventa, permuta, arrendamiento, mutuo, depósito, mandato, hipoteca, anticresis, prenda y transacción. Consultoría Inmobiliaria: Derechos de uso y habitación, servidumbres, acciones reivindicatorias y de simulación.',
    benefits: [
      'Auditoría y Blindaje de Contratos Civiles',
      'Derechos de uso, habitación y servidumbres',
      'Acciones Reivindicatorias y de Simulación Inmobiliaria',
      'Protección contra riesgos patrimoniales'
    ],
    casesHandled: 720
  },
  {
    id: 'litigio-civil',
    title: 'Litigio Civil & Representación Jurisdiccional',
    iconName: 'FileText',
    shortDesc: 'Representación técnica en procesos civiles y de responsabilidad patrimonial ante tribunales.',
    fullDesc: 'Defensa estratégica ante la jurisdicción civil y de familia con el objetivo firme de garantizar resultados favorables según las necesidades concretas del cliente.',
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
    title: 'Defensa Penal 24/7 & Amparos',
    iconName: 'Gavel',
    shortDesc: 'Atención penal inmediata ante fiscalías, audiencias de control de garantías y tutelas.',
    fullDesc: 'Brindamos una defensa técnica rigurosa e inmediata. Nuestros abogados penalistas acuden al instante para garantizar el debido proceso y la libertad de nuestros representados.',
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
    fullDesc: 'Asesoramos a emprendedores y empresas familiares en su crecimiento, garantizando el cumplimiento normativo, la protección de marcas y la resolución de disputas entre socios.',
    benefits: [
      'Constitución de Sociedades',
      'Protocolos de Familia y Gobierno Corporativo',
      'Registro de Marcas y Propiedad Intelectual',
      'Contratación Civil y Comercial'
    ],
    casesHandled: 410
  },
  {
    id: 'conciliacion-mediacion',
    title: 'Conciliación & Resolución de Conflictos',
    iconName: 'Award',
    shortDesc: 'Mecanismos alternativos de solución de conflictos dirigidos por conciliadores certificados.',
    fullDesc: 'Resolución pacífica y vinculante de controversias familiares y civiles a través de procesos de conciliación en derecho con plena validez legal.',
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
    id: 'abogado-principal',
    name: 'Socio Director & Fundador',
    role: 'Socio Fundador & Director Jurídico',
    specialty: 'Derecho de Familia, Conciliador & Litigante Civil',
    experience: 'Magíster & Cand. Doctor en Derecho',
    education: 'Abogado, Conciliador | Especialista en Derecho de Familia | Magíster en Derecho | Candidato a Doctor en Derecho',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600',
    bio: 'Abogado, Conciliador, Especialista en Derecho de Familia, Magíster en Derecho y Candidato a Doctor en Derecho. Litigante, docente e investigador de instituciones de educación superior del Suroccidente colombiano. Autor y jurista de reconocidos libros académicos y artículos de investigación en derecho familiar e identidad sociojurídica.',
    email: 'director@proteccionfamiliar.law',
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
    bio: 'Especialista en solución de controversias familiares complejas, adopciones y mediación de custodia infantil con enfoque en el interés superior de la infancia.',
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
    bio: 'Líder del equipo de respuesta inmediata 24/7. Ha litigado con éxito en audiencias penales complejas y tramitación de acciones de tutela.',
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
    bio: 'Asesora en estructuración de contratos de arrendamiento, compraventas, hipotecas y acciones reivindicatorias de propiedad.',
    email: 'eramirez@proteccionfamiliar.law',
    phone: '+57 315 354 0285'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Roberto G. - Empresario',
    caseType: 'Sucesión Completa y Contratos Civiles',
    comment: 'El acompañamiento académico y riguroso del Doctor y su equipo garantizó una sucesión justa y la protección total de nuestros inmuebles familiares en el Suroccidente colombiano.',
    rating: 5,
    date: 'Hace 2 meses'
  },
  {
    id: '2',
    clientName: 'Mariana H.',
    caseType: 'Filiación y Cuota Alimenticia',
    comment: 'Llevaron mi caso de filiación y alimentos con un nivel de empatía, investigación académica y firmeza legal que me dio absoluta tranquilidad. Excelente representación.',
    rating: 5,
    date: 'Hace 1 mes'
  },
  {
    id: '3',
    clientName: 'Grupo Comercial Valdés',
    caseType: 'Contratos Civiles y Asuntos Inmobiliarios',
    comment: 'Protección Familiar estructuró nuestros contratos de compraventa y servidumbres inmobiliarias con un blindaje preventivo impecable.',
    rating: 5,
    date: 'Hace 3 semanas'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'General',
    question: '¿Cómo es el proceso de la primera consulta legal?',
    answer: 'En tu primera consulta (presencial o por videoconferencia), un abogado especialista o nuestro director evaluará los hechos de tu caso, revisará los contratos o documentos de familia y te presentará una hoja de ruta estratégica clara.'
  },
  {
    category: 'Especialidad',
    question: '¿En qué áreas geográficas prestan sus servicios jurídicos?',
    answer: 'Nuestra firma brinda atención directa en Popayán, Cali, el Suroccidente colombiano y representación en procesos judiciales de familia y civiles a nivel nacional en Colombia.'
  },
  {
    category: 'Urgencias',
    question: '¿Cómo puedo comunicarme inmediatamente por WhatsApp o llamadas?',
    answer: 'Puedes contactarnos las 24 horas del día al teléfono y WhatsApp +57 315 354 0285. Nuestro equipo te dará respuesta prioritaria.'
  },
  {
    category: 'Confidencialidad',
    question: '¿Mis datos e información compartida son confidenciales?',
    answer: 'Absolutamente. Toda comunicación está blindada bajo el Secreto Profesional Abogado-Cliente y protegida por nuestro estricto Aviso de Privacidad en conformidad con las leyes colombianas.'
  }
];
