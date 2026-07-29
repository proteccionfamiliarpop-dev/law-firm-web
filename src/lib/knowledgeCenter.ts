export interface Author {
  id: string;
  name: string;
  role: string;
  credentials: string;
  cardId: string;
  avatar: string;
  sameAs: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface TocItem {
  id: string;
  title: string;
  level: number;
}

export interface BibliographyItem {
  citation: string;
  doiOrUrl?: string;
}

export interface JurisprudenceItem {
  tribunal: string;
  sentenceOrLaw: string;
  summary: string;
}

export interface ArticleSection {
  id: string;
  heading: string;
  body: string;
}

export interface ArticleFAQ {
  question: string;
  answer: string;
}

export interface ArticleEntity {
  id: string;
  slug: string;
  category: Category;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  author: Author;
  datePublished: string;
  dateModified: string;
  readingTimeMinutes: number;
  tags: string[];
  tableOfContents: TocItem[];
  bibliography: BibliographyItem[];
  jurisprudence: JurisprudenceItem[];
  sections: ArticleSection[];
  faqs?: ArticleFAQ[];
  relatedArticleIds: string[];
}

export const AUTHORS: Record<string, Author> = {
  'alexander-solano': {
    id: 'alexander-solano',
    name: 'Dr. Alexander Solano',
    role: 'Socio Director & Principal Research Lead',
    credentials: 'Abogado, Conciliador Oficial en Derecho, Especialista en Familia, Magíster en Derecho y Candidato a Doctor en Derecho',
    cardId: 'T.P. Nº. 182.354 CSJ',
    avatar: 'https://proteccionfamiliar.co/wp-content/uploads/2026/07/Alexander-Solano-Abogado.jpeg',
    sameAs: [
      'https://repositorio.uniautonoma.edu.co/handle/123456789/744',
      'https://www.researchgate.net/publication/401072716_Resiliencia_como_respuesta_a_la_ausencia_del_estado_la_influencia_del_conflicto_armado_colombiano_en_las_familias_diversas_desde_una_mirada_sociojuridica',
      'https://sci-cult.net/index.php/cult/article/view/3761/2229'
    ]
  }
};

export const KNOWLEDGE_CATEGORIES: Category[] = [
  {
    id: 'derecho-de-familia',
    name: 'Derecho de Familia',
    slug: 'derecho-de-familia',
    description: 'Doctrina y análisis normativo de la institución familiar en Colombia.'
  },
  {
    id: 'patrimonio-y-sucesiones',
    name: 'Patrimonio & Sucesiones',
    slug: 'patrimonio-y-sucesiones',
    description: 'Gestión patrimonial, liquidaciones de sociedad conyugal y particiones de herencia.'
  },
  {
    id: 'derecho-probatorio',
    name: 'Derecho Probatorio',
    slug: 'derecho-probatorio',
    description: 'Rigor técnico de los medios de prueba en litigios contenciosos de familia.'
  }
];

export const KNOWLEDGE_ARTICLES: ArticleEntity[] = [
  {
    id: 'art-resiliencia-familias-diversas',
    slug: 'resiliencia-familias-diversas-conflicto-armado-colombia',
    category: KNOWLEDGE_CATEGORIES[0],
    title: 'Resiliencia como respuesta a la ausencia del Estado: Familias Diversas en el Conflicto Armado',
    subtitle: 'Estudio sociojurídico sobre la protección constitucional de las tipologías familiares ante omisiones estatales en Colombia',
    metaTitle: 'Resiliencia & Familias Diversas en Colombia | Dr. Alexander Solano',
    metaDescription: 'Investigación académica del Dr. Alexander Solano publicada en Sci-Cult sobre la resiliencia sociojurídica de las familias diversas en Colombia.',
    keywords: ['Familias diversas Colombia', 'Resiliencia sociojuridica', 'Derecho de familia conflicto armado', 'Dr Alexander Solano investigacion'],
    author: AUTHORS['alexander-solano'],
    datePublished: '2025-11-10',
    dateModified: '2026-07-29',
    readingTimeMinutes: 12,
    tags: ['Derecho Constitucional', 'Familias Diversas', 'Sociología Jurídica', 'Conflictos de Familia'],
    tableOfContents: [
      { id: 'sec-introduccion', title: '1. Introducción al Marco Sociojurídico', level: 2 },
      { id: 'sec-ausencia-estatal', title: '2. Ausencia Estatal y Vulnerabilidad de Derechos', level: 2 },
      { id: 'sec-jurisprudencia-cc', title: '3. Doctrina Constitucional y Tipologías Familiares', level: 2 },
      { id: 'sec-conclusiones', title: '4. Conclusiones y Recomendaciones de Política Pública', level: 2 }
    ],
    bibliography: [
      {
        citation: 'Solano, A. (2025). Resiliencia como respuesta a la ausencia del estado: la influencia del conflicto armado colombiano en las familias diversas desde una mirada sociojurídica. Revista Sci-Cult, Vol. 4, No. 2.',
        doiOrUrl: 'https://sci-cult.net/index.php/cult/article/view/3761/2229'
      },
      {
        citation: 'Corte Constitucional de Colombia. Sentencia C-577 de 2011. M.P. Gabriel Eduardo Mendoza Martelo.',
        doiOrUrl: 'https://www.corteconstitucional.gov.co'
      }
    ],
    jurisprudence: [
      {
        tribunal: 'Corte Constitucional de Colombia',
        sentenceOrLaw: 'Sentencia C-577/11',
        summary: 'Reconocimiento de la familia diversa y pluralista como sujeto protegido constitucionalmente bajo el Art. 42 de la Carta Política.'
      },
      {
        tribunal: 'Congreso de la República',
        sentenceOrLaw: 'Constitución Política de 1991 (Art. 42)',
        summary: 'Definición de la familia por vínculos naturales o jurídicos y compromiso del Estado con su protección integral.'
      }
    ],
    sections: [
      {
        id: 'sec-introduccion',
        heading: '1. Introducción al Marco Sociojurídico',
        body: 'El estudio analiza las dinámicas de adaptación y resistencia legal desarrolladas por núcleos familiares diversos en zonas afectadas por el conflicto armado en Colombia, donde la respuesta del aparato institucional ha sido históricamente diferida o insuficiente.'
      },
      {
        id: 'sec-ausencia-estatal',
        heading: '2. Ausencia Estatal y Vulnerabilidad de Derechos',
        body: 'La falta de mecanismos notariados o judiciales ágiles impuso a las comunidades la necesidad de apelar a consensos probatorios y mediaciones de hecho para el amparo del patrimonio y la custodia afectiva de los menores.'
      },
      {
        id: 'sec-jurisprudencia-cc',
        heading: '3. Doctrina Constitucional y Tipologías Familiares',
        body: 'A partir de la Sentencia C-577 de 2011 y pronunciamientos posteriores de la Corte Constitucional, la definición de familia en Colombia trascendió el modelo monogámico tradicional para acoger configuraciones patrimoniales y afectivas complejas.'
      },
      {
        id: 'sec-conclusiones',
        heading: '4. Conclusiones y Recomendaciones de Política Pública',
        body: 'Se requiere fortalecer los centros de conciliación notarial y judicial descentralizados en municipios intermedios como Popayán para brindar seguridad jurídica efectiva.'
      }
    ],
    faqs: [
      {
        question: '¿Qué protección tienen las familias diversas en la legislación colombiana?',
        answer: 'Tienen plena protección constitucional conforme al Art. 42 y la jurisprudencia unificada de la Corte Constitucional, garantizando derechos de afiliación, salud, herencia y custodia.'
      }
    ],
    relatedArticleIds: ['art-resiliencia-familias-diversas']
  }
];

export function getArticleBySlug(categorySlug: string, articleSlug: string): ArticleEntity | undefined {
  return KNOWLEDGE_ARTICLES.find(a => a.category.slug === categorySlug && a.slug === articleSlug);
}

export function getArticlesByCategory(categorySlug: string): ArticleEntity[] {
  return KNOWLEDGE_ARTICLES.filter(a => a.category.slug === categorySlug);
}

export function getAllArticles(): ArticleEntity[] {
  return KNOWLEDGE_ARTICLES;
}
