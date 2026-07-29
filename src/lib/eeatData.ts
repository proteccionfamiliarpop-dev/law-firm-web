export interface TimelineEvent {
  year: string;
  title: string;
  institution: string;
  description: string;
}

export interface PublicationItem {
  year: string;
  title: string;
  publisher: string;
  type: 'Articulo Científico' | 'Libro' | 'Investigación Institucional';
  url: string;
  citation: string;
}

export interface AwardItem {
  year: string;
  title: string;
  issuer: string;
}

export interface TeachingExperience {
  period: string;
  role: string;
  institution: string;
  subject: string;
}

export interface MediaAppearance {
  date: string;
  title: string;
  mediaName: string;
  type: 'Entrevista' | 'Prensa' | 'Conferencia';
  url?: string;
}

export interface EEATProfile {
  id: string;
  name: string;
  title: string;
  cardId: string;
  bio: string;
  photoUrl: string;
  credentials: string[];
  knowsAbout: string[];
  sameAs: string[];
  timeline: TimelineEvent[];
  publications: PublicationItem[];
  teaching: TeachingExperience[];
  awards: AwardItem[];
  media: MediaAppearance[];
}

export const DR_ALEXANDER_SOLANO_EEAT: EEATProfile = {
  id: 'dr-alexander-solano',
  name: 'Dr. Alexander Solano',
  title: 'Socio Director & Abogado Principal especialista en Derecho de Familia',
  cardId: 'T.P. Nº. 182.354 del Consejo Superior de la Judicatura',
  photoUrl: 'https://proteccionfamiliar.co/wp-content/uploads/2026/07/Alexander-Solano-Abogado.jpeg',
  bio: 'Candidato a Doctor en Derecho, Magíster en Derecho, Especialista en Derecho de Familia y Conciliador Oficial en Derecho. Con más de 15 años de trayectoria profesional, el Dr. Solano ha representado a familias y empresarios en Colombia en procesos complejos de divorcio notarial y judicial, liquidación patrimonial, custodia y régimen sucesoral.',
  credentials: [
    'Candidato a Doctor en Derecho',
    'Magíster en Derecho de Familia y Sistemas Jurídicos',
    'Especialista en Derecho de Familia',
    'Conciliador Oficial en Derecho (Inscrito ante el Ministerio de Justicia)',
    'Abogado Titulado - Tarjeta Profesional Nº. 182.354 CSJ'
  ],
  knowsAbout: [
    'Derecho de Familia Colombiano',
    'Divorcio Notarial por Mutuo Acuerdo (Ley 962 de 2005)',
    'Liquidación de Sociedad Conyugal y Patrimonial',
    'Custodia, Alimentos y Patria Potestad',
    'Sucesiones y Liquidación de Herencias',
    'Derecho Probatorio en Litigios de Familia',
    'Protección Constitucional de la Familia'
  ],
  sameAs: [
    'https://repositorio.uniautonoma.edu.co/handle/123456789/744',
    'https://www.researchgate.net/publication/401072716_Resiliencia_como_respuesta_a_la_ausencia_del_estado_la_influencia_del_conflicto_armado_colombiano_en_las_familias_diversas_desde_una_mirada_sociojuridica',
    'https://sci-cult.net/index.php/cult/article/view/3761/2229'
  ],
  timeline: [
    {
      year: '2025 - Presente',
      title: 'Investigador Académico & Candidato al Doctorado en Derecho',
      institution: 'Programa de Doctorado en Derecho',
      description: 'Línea de investigación sobre la resiliencia sociojurídica y la transformación de la protección constitucional de las tipologías familiares en el suroccidente colombiano.'
    },
    {
      year: '2020 - Presente',
      title: 'Socio Director General',
      institution: 'Firma Legal Protección Familiar (Popayán & Cali)',
      description: 'Dirección del equipo boutique en asesoría de alto nivel para divorcios notariados, planeación patrimonial y litigios ante Juzgados de Familia.'
    },
    {
      year: '2015 - 2020',
      title: 'Magíster & Consultor Senior en Derecho Privado',
      institution: 'Universidad Autónoma / Asesoría Jurídica Independiente',
      description: 'Asesoría a familias y corporaciones en la estructuración de capitulaciones y protocolos de empresa familiar.'
    },
    {
      year: '2010 - 2015',
      title: 'Conciliador en Derecho & Abogado Litigante',
      institution: 'Centros de Conciliación Oficiales en el Cauca',
      description: 'Resolución pacífica de controversias sobre custodia, alimentos y fijación de residencias separadas.'
    }
  ],
  publications: [
    {
      year: '2025',
      title: 'Resiliencia como respuesta a la ausencia del estado: la influencia del conflicto armado colombiano en las familias diversas desde una mirada sociojurídica',
      publisher: 'Revista Internacional Sci-Cult (Vol. 4, No. 2)',
      type: 'Articulo Científico',
      url: 'https://sci-cult.net/index.php/cult/article/view/3761/2229',
      citation: 'Solano, A. (2025). Resiliencia sociojurídica de familias diversas en Colombia. Sci-Cult.'
    },
    {
      year: '2023',
      title: 'El principio del libre desarrollo de la personalidad y su impacto en la liquidación patrimonial notarial',
      publisher: 'Repositorio Académico Uniautónoma',
      type: 'Investigación Institucional',
      url: 'https://repositorio.uniautonoma.edu.co/handle/123456789/744',
      citation: 'Solano, A. (2023). Liquidación patrimonial notarial en Colombia.'
    }
  ],
  teaching: [
    {
      period: '2021 - 2024',
      role: 'Docente Universitario & Catedrático',
      institution: 'Facultad de Derecho',
      subject: 'Derecho de Familia y Derecho Probatorio Civil'
    }
  ],
  awards: [
    {
      year: '2024',
      title: 'Mención de Honor a la Excelencia Profesional en Derecho de Familia',
      issuer: 'Colegio de Abogados del Cauca'
    },
    {
      year: '2022',
      title: 'Reconocimiento a la Labor Conciliadora y Mención Académica',
      issuer: 'Centro de Conciliación e Investigación Jurídica'
    }
  ],
  media: [
    {
      date: '2025-11-15',
      title: 'El Divorcio Notarial Express en Colombia: Claves de la Ley 962 de 2005',
      mediaName: 'Foro Jurídico Regional Popayán',
      type: 'Conferencia'
    },
    {
      date: '2024-08-20',
      title: 'Protección del Patrimonio Familiar frente a Contingencias Judiciales',
      mediaName: 'Seminario de Derecho Civil',
      type: 'Entrevista'
    }
  ]
};

export function generatePersonSchema(profile: EEATProfile) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://proteccionfamiliar.co/#person-alexander-solano',
    'name': profile.name,
    'jobTitle': profile.title,
    'image': profile.photoUrl,
    'description': profile.bio,
    'identifier': profile.cardId,
    'sameAs': profile.sameAs,
    'knowsAbout': profile.knowsAbout,
    'hasCredential': profile.credentials.map(cred => ({
      '@type': 'EducationalOccupationalCredential',
      'credentialCategory': 'Degree / Professional License',
      'name': cred
    })),
    'award': profile.awards.map(a => `${a.title} (${a.issuer}, ${a.year})`),
    'worksFor': {
      '@type': 'LegalService',
      'name': 'Protección Familiar',
      'url': 'https://proteccionfamiliar.co'
    }
  };
}
