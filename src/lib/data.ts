export interface PracticeArea {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  casesHandled: number;
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
  description: 'Más de 18 años brindando asesoría jurídica estratégica, representación de alto nivel y soluciones definitivas en derecho familiar, civil, penal y corporativo.',
  phone: '+57 315 354 0285',
  emergencyPhone: '+57 315 354 0285',
  email: 'contacto@proteccionfamiliar.law',
  address: 'Av. Paseo de la Reforma 483, Piso 24, Juárez, Ciudad de México',
  workingHours: 'Lunes a Viernes: 8:00 AM - 7:00 PM | Emergencias 24/7',
  stats: [
    { label: 'Casos Resueltos', value: '2,500+' },
    { label: 'Tasa de Éxito', value: '98.4%' },
    { label: 'Años de Trayectoria', value: '18+' },
    { label: 'Atención de Emergencia', value: '24/7' }
  ]
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'derecho-familiar',
    title: 'Derecho de Familia & Custodia',
    iconName: 'Users',
    shortDesc: 'Protección de los derechos de tus hijos, pensiones alimenticias, divorcios y guardia y custodia.',
    fullDesc: 'Manejamos los procesos de familia con absoluta sensibilidad, firmeza y respaldo legal. Priorizamos el bienestar de los menores y la preservación de los acuerdos familiares pacíficos.',
    benefits: [
      'Juicios de Guardia y Custodia prioritarios',
      'Cálculo y reclamo de Pensiones Alimenticias',
      'Divorcio Incausado y de Mutuo Acuerdo acelerado',
      'Patria Potestad y Régimen de Visitas'
    ],
    casesHandled: 940
  },
  {
    id: 'proteccion-patrimonial',
    title: 'Protección Patrimonial & Testamentos',
    iconName: 'ShieldCheck',
    shortDesc: 'Blindaje de bienes familiares, sucesiones intestadas, testamentos y fideicomisos.',
    fullDesc: 'Aseguramos que los bienes que has construido durante toda tu vida queden protegidos contra contingencias y se transmitan ordenadamente a las futuras generaciones.',
    benefits: [
      'Estructuración de Fideicomisos Familiares',
      'Juicios Sucesorios Testamentarios e Intestamentarios',
      'Blindaje contra embargos y controversias patrimoniales',
      'Donaciones y adjudicación de inmuebles'
    ],
    casesHandled: 680
  },
  {
    id: 'derecho-civil',
    title: 'Derecho Civil & Contratos',
    iconName: 'FileText',
    shortDesc: 'Representación en litigios civiles, incumplimiento de contratos y reclamos por responsabilidad.',
    fullDesc: 'Defendemos tus intereses comerciales y personales ante cualquier incumplimiento de contrato, prescripciones de propiedad e indemnizaciones por daños y perjuicios.',
    benefits: [
      'Litigio Civil y Mercantil especializado',
      'Redacción y auditoría de Contratos de Alto Valor',
      'Recuperación de Cartera y Bienes Inmuebles',
      'Reclamación de Daño Moral y Material'
    ],
    casesHandled: 520
  },
  {
    id: 'defensa-penal',
    title: 'Defensa Penal 24/7 & Amparos',
    iconName: 'Gavel',
    shortDesc: 'Atención penal inmediata ante Ministerios Públicos, juicio oral penal y amparos urgentes.',
    fullDesc: 'Brindamos una defensa técnica rigurosa e inmediata. Nuestros abogados penalistas acuden al instante para garantizar el debido proceso y la libertad de nuestros representados.',
    benefits: [
      'Asistencia técnica inmediata ante fiscalías 24 horas',
      'Tramitación de Juicios de Amparo de emergencia',
      'Defensa en Sistema Penal Acusatorio y Oral',
      'Representación a víctimas y querellantes'
    ],
    casesHandled: 310
  },
  {
    id: 'derecho-corporativo',
    title: 'Corporativo & Negocios Familiares',
    iconName: 'Briefcase',
    shortDesc: 'Constitución de empresas, gobierno corporativo para negocios familiares y propiedad intelectual.',
    fullDesc: 'Asesoramos a emprendedores y empresas familiares en su crecimiento, garantizando el cumplimiento normativo, la protección de marcas y la resolución de disputas entre socios.',
    benefits: [
      'Constitución de Sociedades (S.A. de C.V., S.A.S., S.C.)',
      'Protocolos de Familia y Gobierno Corporativo',
      'Registro de Marcas ante el IMPI y Patentes',
      'Contratación y Cumplimiento Regulatorio'
    ],
    casesHandled: 410
  },
  {
    id: 'derecho-laboral',
    title: 'Derecho Laboral & Seguridad Social',
    iconName: 'Award',
    shortDesc: 'Asesoría en indemnizaciones por despido, negociaciones laborales y pensiones.',
    fullDesc: 'Protegemos tus derechos laborales con negociaciones objetivas o litigios ante Tribunales Laborales, logrando liquidaciones justas y el otorgamiento correcto de pensiones.',
    benefits: [
      'Defensa por Despido Injustificado',
      'Cálculo y reclamo de Liquidaciones y Finiquitos',
      'Negociación de convenios laborales',
      'Trámite de Pensiones por Invalidez o Retiro'
    ],
    casesHandled: 470
  }
];

export const ATTORNEYS: Attorney[] = [
  {
    id: 'sofia-valenzuela',
    name: 'Lic. Sofía Valenzuela R.',
    role: 'Socia Directora - Área Familiar',
    specialty: 'Derecho de Familia, Custodia y Mediación',
    experience: '16 años de experiencia',
    education: 'Licenciatura en Derecho (UNAM) | Maestría en Derecho Familiar (Universidad de Barcelona)',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    bio: 'Especialista reconocida a nivel nacional en solución de controversias familiares complejas y mediación de custodia infantil con enfoque en el interés superior de la infancia.',
    email: 'svalenzuela@proteccionfamiliar.law',
    phone: '+57 315 354 0285'
  },
  {
    id: 'alejandro-mendoza',
    name: 'Dr. Alejandro Mendoza T.',
    role: 'Socio Principal - Litigio & Patrimonial',
    specialty: 'Protección Patrimonial y Derecho Civil',
    experience: '20 años de experiencia',
    education: 'Doctorado en Derecho Civil (Escuela Libre de Derecho) | Postgrado en Fideicomisos (ITAM)',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600',
    bio: 'Experto en estructuración de patrimonios familiares, fideicomisos y controversias sucesorias de alto impacto económico para grupos familiares e inversionistas.',
    email: 'amendoza@proteccionfamiliar.law',
    phone: '+57 315 354 0285'
  },
  {
    id: 'carlos-morales',
    name: 'Lic. Carlos Morales O.',
    role: 'Director de Defensa Penal',
    specialty: 'Sistema Penal Acusatorio y Juicio de Amparo',
    experience: '14 años de experiencia',
    education: 'Licenciatura en Derecho (Iberoamericana) | Certificado en Litigación Oral (California Western School of Law)',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
    bio: 'Líder del equipo de respuesta inmediata 24/7. Ha litigado con éxito en más de 300 audiencias penales complejas y obtenido amparos definitivos estratégicos.',
    email: 'cmorales@proteccionfamiliar.law',
    phone: '+57 315 354 0285'
  },
  {
    id: 'elena-ramirez',
    name: 'Dra. Elena Ramírez S.',
    role: 'Socia Corporativa & Laboral',
    specialty: 'Derecho Corporativo y Empresas Familiares',
    experience: '11 años de experiencia',
    education: 'Licenciatura y Maestría en Derecho Mercantil (Tec de Monterrey)',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=600',
    bio: 'Asesora legal para la transición generacional de empresas familiares, fusiones corporativas y cumplimiento de normativas de trabajo y privacidad de datos.',
    email: 'eramirez@proteccionfamiliar.law',
    phone: '+57 315 354 0285'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Roberto G. - Empresario',
    caseType: 'Protección Patrimonial y Fideicomiso',
    comment: 'La intervención del Dr. Mendoza salvó el patrimonio familiar de un litigio indebido. La atención fue impecable, clara y altamente profesional desde la primera hora.',
    rating: 5,
    date: 'Hace 2 meses'
  },
  {
    id: '2',
    clientName: 'Mariana H.',
    caseType: 'Custodia y Pensión Alimenticia',
    comment: 'La Dra. Sofía Valenzuela llevó mi caso de custodia con un grado de empatía y firmeza legal que me dio tranquilidad absoluta. Logramos el mejor acuerdo para mis hijos.',
    rating: 5,
    date: 'Hace 1 mes'
  },
  {
    id: '3',
    clientName: 'Grupo Comercial Valdés',
    caseType: 'Estructuración Corporativa y Marcas',
    comment: 'Protección Familiar formalizó nuestra empresa familiar y protegió nuestros activos intangibles. Su visión preventiva nos ha ahorrado problemas legales enormes.',
    rating: 5,
    date: 'Hace 3 semanas'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'General',
    question: '¿Cómo es el proceso de la primera consulta legal?',
    answer: 'En tu primera consulta de 45 minutos (presencial o por videoconferencia), un abogado especialista evaluará los hechos de tu caso, revisará la documentación disponible y te presentará una hoja de ruta estratégica clara con los costos previstos.'
  },
  {
    category: 'Costos',
    question: '¿Cuáles son las modalidades de cobro y honorarios?',
    answer: 'Manejamos esquemas transparentes de honorarios fijos por etapa procesal, igualas mensuales para empresas o esquemas a resultado (cuota litis) según el tipo de asunto jurídico.'
  },
  {
    category: 'Urgencias',
    question: '¿Qué debo hacer en caso de una detención o emergencia penal inmediata?',
    answer: 'Puedes marcar a nuestra línea directiva de emergencias 24/7 (+57 315 354 0285). Uno de nuestros abogados penalistas de guardia se constituirá al instante en la fiscalía correspondiente.'
  },
  {
    category: 'Confidencialidad',
    question: '¿Mis datos e información compartida son confidenciales?',
    answer: 'Absolutamente. Toda comunicación está blindada bajo el Secreto Profesional Abogado-Cliente y protegida por nuestro estricto Aviso de Privacidad en conformidad con las leyes vigentes.'
  }
];
