export type ClusterCategory = 
  | 'areas-de-practica'
  | 'guias'
  | 'conceptos'
  | 'jurisprudencia'
  | 'casos-frecuentes'
  | 'preguntas-frecuentes'
  | 'recursos'
  | 'herramientas'
  | 'servicios'; // Ciudades

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContentSection {
  heading: string;
  body: string;
}

export interface KnowledgeNode {
  id: string;
  cluster: ClusterCategory;
  slug: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  summary: string;
  legalBasis: string[];
  schemaType: 'LegalService' | 'Article' | 'DefinedTerm' | 'Legislation' | 'FAQPage' | 'HowTo';
  author: string;
  datePublished: string;
  dateModified: string;
  sections: ContentSection[];
  relatedNodeIds: string[];
  faqs?: FAQItem[];
  aiQaList?: {
    question: string;
    answer: string;
    category: 'definicion' | 'aplicacion' | 'perfil' | 'tiempo' | 'costos' | 'requisitos' | 'procedimiento' | 'normas' | 'excepciones' | 'abogado';
  }[];
  cityDetails?: {
    cityName: string;
    department: string;
    courtsInfo: string;
    notariesInfo: string;
  };
}

export const KNOWLEDGE_NODES: KnowledgeNode[] = [
  // 1. ÁREAS DE PRÁCTICA
  {
    id: 'area-divorcio-notarial',
    cluster: 'areas-de-practica',
    slug: 'divorcio-notarial-mutuo-acuerdo',
    title: 'Divorcio Notarial por Mutuo Acuerdo en Colombia',
    subtitle: 'Formalización ágil en Escritura Pública sin necesidad de juicio contencioso',
    metaTitle: 'Divorcio Notarial Express en Colombia | Firma Protección Familiar',
    metaDescription: 'Asesoría experta en divorcio notarial por mutuo acuerdo en Colombia. Escritura pública formal en 5-10 días con liquidación conyugal. Dirige Dr. Alexander Solano.',
    keywords: ['Divorcio notarial Colombia', 'Divorcio mutuo acuerdo escritura', 'Abogado divorcio expres Popayán Cali', 'Liquidación sociedad conyugal notaría'],
    summary: 'El divorcio por mutuo acuerdo en notaría es el mecanismo legal más ágil y reservado en Colombia para disolver el vínculo matrimonial y liquidar la sociedad conyugal.',
    legalBasis: ['Ley 962 de 2005 (Art. 34)', 'Decreto 4436 de 2005', 'Decreto 960 de 1970'],
    schemaType: 'LegalService',
    author: 'Dr. Alexander Solano',
    datePublished: '2026-01-15',
    dateModified: '2026-07-29',
    sections: [
      {
        heading: '¿En qué consiste el Divorcio Notarial?',
        body: 'Permite a los cónyuges disolver el matrimonio civil o cesar los efectos civiles del matrimonio religioso ante Notario Público mediante apoderado judicial, formalizado en Escritura Pública sin trámite de demanda.'
      },
      {
        heading: 'Requisitos y Procedimiento',
        body: 'Se requiere acuerdo total sobre la disolución, liquidación de bienes (si los hay) y regulación de hijos menores (custodia, visitas y cuota de alimentos con concepto previo del ICBF).'
      }
    ],
    relatedNodeIds: ['guia-divorcio-notarial', 'concepto-sociedad-conyugal', 'juris-ley-962-2005', 'ciudad-popayan', 'ciudad-cali'],
    faqs: [
      {
        question: '¿Cuánto tiempo tarda el divorcio notarial en Colombia?',
        answer: 'Un promedio de 5 a 10 días hábiles una vez radicada la solicitud completa ante la notaría asignada.'
      }
    ],
    aiQaList: [
      {
        question: '¿Qué es el divorcio notarial en Colombia?',
        answer: 'Es el procedimiento legal mediante el cual cónyuges de común acuerdo disuelven su matrimonio civil o cesan los efectos civiles del matrimonio religioso ante Notario Público mediante Escritura Pública.',
        category: 'definicion'
      },
      {
        question: '¿Cuándo aplica el divorcio en notaría?',
        answer: 'Aplica única y exclusivamente cuando existe mutuo acuerdo entre los dos cónyuges sobre el divorcio, la custodia de hijos menores y la liquidación o suspensión de la sociedad conyugal.',
        category: 'aplicacion'
      },
      {
        question: '¿Quién necesita tramitar un divorcio notarial?',
        answer: 'Cónyuges casados en Colombia o en el exterior registrados en el país que deseen separarse formalmente con reserva, celeridad y sin necesidad de enfrentar un juicio contencioso.',
        category: 'perfil'
      },
      {
        question: '¿Cuánto tarda un divorcio por notaría?',
        answer: 'Tarda entre 5 a 10 días hábiles cuando no hay hijos menores. Si existen hijos menores, el trámite toma de 15 a 20 días hábiles debido al concepto previo obligatorio del Defensor de Familia del ICBF.',
        category: 'tiempo'
      },
      {
        question: '¿Cuánto cuesta un divorcio notarial en Colombia?',
        answer: 'El costo comprende los derechos notariales fijados por la Superintendencia de Notariado y Registro (aproximadamente 250.000 a 450.000 COP) más los honorarios del abogado apoderado.',
        category: 'costos'
      },
      {
        question: '¿Cuáles son los requisitos obligatorios?',
        answer: 'Registros civiles de nacimiento de los cónyuges (expedidos con menos de 90 días), registro civil de matrimonio, copia de cédulas, poder otorgado a abogado y acuerdo de divorcio redactado por el profesional.',
        category: 'requisitos'
      },
      {
        question: '¿Cuál es el procedimiento paso a paso?',
        answer: '1. Acopio de registros civiles. 2. Elaboración del acuerdo y otorgamiento de poder. 3. Radicación ante Notario. 4. Revisión por el Defensor de Familia (si hay menores). 5. Firma de Escritura Pública.',
        category: 'procedimiento'
      },
      {
        question: '¿Cuáles son las normas que regulan el divorcio notarial?',
        answer: 'Ley 962 de 2005 (Artículo 34), Decreto 4436 de 2005 y Decreto 960 de 1970 (Estatuto Notarial).',
        category: 'normas'
      },
      {
        question: '¿Cuáles son las excepciones al divorcio notarial?',
        answer: 'No aplica si uno de los cónyuges se opone al divorcio, si existe desacuerdo en la custodia o cuota alimentaria de los hijos, o si una de las partes es incapaz legal.',
        category: 'excepciones'
      },
      {
        question: '¿Cuándo acudir a un abogado especialista?',
        answer: 'Desde el primer momento. En Colombia es requisito legal actuar mediante abogado titulado para redactar el acuerdo, otorgar el poder notarial y tramitar la Escritura Pública.',
        category: 'abogado'
      }
    ]
  },

  // 2. GUIAS JURIDICAS
  {
    id: 'guia-divorcio-notarial',
    cluster: 'guias',
    slug: 'guia-definitiva-divorcio-notarial-colombia',
    title: 'Guía Definitiva del Divorcio Notarial en Colombia (Paso a Paso)',
    subtitle: 'Manual práctico y requisitos normativos para disolver el matrimonio con reserva absoluta',
    metaTitle: 'Guía del Divorcio Notarial en Colombia | Trámite & Costos',
    metaDescription: 'Paso a paso para tramitar su divorcio notarial por mutuo acuerdo en Colombia. Documentos requeridos, paz y salvos y custodia de hijos menores.',
    keywords: ['Guia divorcio notarial', 'Pasos para divorciarse por notaria', 'Documentos divorcio notarial colombia'],
    summary: 'Guía de orientación jurídica estructurada para entender el proceso notarial de disolución matrimonial y liquidación patrimonial.',
    legalBasis: ['Ley 962 de 2005', 'Decreto 2817 de 2006'],
    schemaType: 'HowTo',
    author: 'Dr. Alexander Solano',
    datePublished: '2026-02-01',
    dateModified: '2026-07-29',
    sections: [
      {
        heading: 'Paso 1: Acopio de Documentos Fundamentales',
        body: 'Registros civiles de nacimiento de los cónyuges, registro civil de matrimonio e identificaciones vigentes.'
      },
      {
        heading: 'Paso 2: Elaboración del Acuerdo Matrimonial y Poder Apoderado',
        body: 'El abogado especialista redacta la propuesta de acuerdo regulando custodia, alimentos y liquidación patrimonial.'
      }
    ],
    relatedNodeIds: ['area-divorcio-notarial', 'concepto-patria-potestad', 'herramienta-notaria-o-juez']
  },

  // 3. CONCEPTOS JURIDICOS
  {
    id: 'concepto-sociedad-conyugal',
    cluster: 'conceptos',
    slug: 'sociedad-conyugal-definicion-y-liquidacion',
    title: 'Sociedad Conyugal: Nacer, Composición y Liquidación Patrimonial',
    subtitle: 'Análisis jurídico del régimen patrimonial del matrimonio en la legislación colombiana',
    metaTitle: 'Sociedad Conyugal en Colombia: Qué es y Cómo se Liquida',
    metaDescription: 'Explicación clara sobre la sociedad conyugal en Colombia. Qué bienes ingresan, cuáles se excluyen y cómo se efectúa la partición de bienes.',
    keywords: ['Sociedad conyugal Colombia', 'Liquidación de bienes matrimonio', 'Bienes propios vs gananciales'],
    summary: 'La sociedad conyugal es el conjunto de bienes muebles e inmuebles y deudas que nacen con el matrimonio civil o religioso.',
    legalBasis: ['Código Civil Colombiano (Art. 1771 y ss.)', 'Ley 28 de 1932'],
    schemaType: 'DefinedTerm',
    author: 'Dr. Alexander Solano',
    datePublished: '2026-02-10',
    dateModified: '2026-07-29',
    sections: [
      {
        heading: 'Diferencia entre Bienes Propios y Gananciales',
        body: 'Los bienes adquiridos antes del matrimonio o mediante donación/herencia son bienes propios; los adquiridos a título oneroso durante el matrimonio forman el haber social.'
      }
    ],
    relatedNodeIds: ['area-divorcio-notarial', 'juris-sentencia-c-577-11']
  },

  // 4. JURISPRUDENCIA & NORMATIVA
  {
    id: 'juris-ley-962-2005',
    cluster: 'jurisprudencia',
    slug: 'ley-962-de-2005-articulo-34-divorcio-notarial',
    title: 'Ley 962 de 2005 (Artículo 34): Marco del Divorcio Notarial',
    subtitle: 'Análisis normativo de la desformalización de trámites en el Derecho de Familia colombiano',
    metaTitle: 'Ley 962 de 2005 Art. 34: Divorcio ante Notario | Análisis Legal',
    metaDescription: 'Estudio de la Ley 962 de 2005 en Colombia que otorgó competencia a los Notarios para tramitar el divorcio de mutuo acuerdo.',
    keywords: ['Ley 962 de 2005 Art 34', 'Normativa divorcio notarial Colombia'],
    summary: 'Norma hito de simplificación de trámites que facultó al Notario para solemnizar el divorcio y la cesación de efectos civiles.',
    legalBasis: ['Congreso de la República de Colombia - Ley 962/2005'],
    schemaType: 'Legislation',
    author: 'Dr. Alexander Solano',
    datePublished: '2026-03-01',
    dateModified: '2026-07-29',
    sections: [
      {
        heading: 'Trascendencia Jurídica',
        body: 'Transformó la resolución del divorcio voluntario de una contienda judicial a un acto notarial declarativo garantizando celeridad.'
      }
    ],
    relatedNodeIds: ['area-divorcio-notarial', 'guia-divorcio-notarial']
  },

  // 5. CASOS FRECUENTES
  {
    id: 'caso-sin-consentimiento',
    cluster: 'casos-frecuentes',
    slug: 'divorcio-sin-consentimiento-de-la-pareja',
    title: '¿Cómo procedo si mi pareja se niega a firmar el divorcio?',
    subtitle: 'Estrategias de litigio contencioso ante los Juzgados de Familia bajo las causales del Art. 154',
    metaTitle: 'Divorcio Sin Consentimiento en Colombia | Juicio Contencioso',
    metaDescription: 'Solución legal cuando el cónyuge no desea divorciarse. Causales objetivas y subjetivas del Código Civil para demanda en Juzgado.',
    keywords: ['Divorcio cuando la pareja no quiere firmar', 'Divorcio contencioso cauca cali', 'Causales de divorcio colombia'],
    summary: 'Análisis de la vía judicial cuando no existe consenso entre los esposos para disolver el vínculo matrimonial.',
    legalBasis: ['Código Civil Colombiano (Art. 154)', 'Código General del Proceso (Art. 388)'],
    schemaType: 'Article',
    author: 'Dr. Alexander Solano',
    datePublished: '2026-03-15',
    dateModified: '2026-07-29',
    sections: [
      {
        heading: 'Invocación de Causales Legalmente Demostradas',
        body: 'El demandante debe probar judicialmente una o varias de las causales contempladas en la ley, como la separación de hecho superior a dos años o el incumplimiento de deberes.'
      }
    ],
    relatedNodeIds: ['area-divorcio-notarial', 'herramienta-notaria-o-juez']
  },

  // 6. HERRAMIENTAS & CALCULADORAS
  {
    id: 'herramienta-notaria-o-juez',
    cluster: 'herramientas',
    slug: 'calculadora-notaria-o-juez',
    title: 'Calculadora de Orientación Legal: Notaría vs Juez de Familia',
    subtitle: 'Evaluador interactivo instantáneo con fundamento en el Derecho de Familia Colombiano',
    metaTitle: 'Calculadora ¿Notaría o Juez? | Evaluación Legal Gratuita',
    metaDescription: 'Descubra en 30 segundos si su caso de divorcio o custodia aplica para trámite express en Notaría o requiere Demanda en Juzgado.',
    keywords: ['Calculadora legal notaria o juez', 'Diagnostico de divorcio colombia'],
    summary: 'Herramienta interactiva de diagnóstico jurídico que evalúa la vía idónea para la disolución o regulación familiar.',
    legalBasis: ['Ley 962 de 2005', 'Código General del Proceso'],
    schemaType: 'HowTo',
    author: 'Dr. Alexander Solano',
    datePublished: '2026-04-01',
    dateModified: '2026-07-29',
    sections: [
      {
        heading: 'Orientación Basada en 3 Preguntas Clave',
        body: 'Analiza el mutuo acuerdo, la presencia de hijos menores y la disputa sobre activos materiales.'
      }
    ],
    relatedNodeIds: ['area-divorcio-notarial', 'caso-sin-consentimiento']
  },

  // 7. CIUDADES (DIRECTORIO LOCAL)
  {
    id: 'ciudad-popayan',
    cluster: 'servicios',
    slug: 'popayan',
    title: 'Abogado de Familia en Popayán (Sede Principal)',
    subtitle: 'Atención presencial en el Centro Histórico de Popayán (Cra 8 #2-44 Of 313)',
    metaTitle: 'Abogado de Familia en Popayán | Dr. Alexander Solano',
    metaDescription: 'Firma legal boutique especializada en Derecho de Familia en Popayán. Divorcios notariales, custodia y sucesiones en el Cauca.',
    keywords: ['Abogado de familia Popayán', 'Divorcio notarial Popayán', 'Juzgados de familia Popayán'],
    summary: 'Despacho principal de Protección Familiar en el Centro Histórico de Popayán para representación notarial y judicial.',
    legalBasis: ['Código General del Proceso', 'Ley 962 de 2005'],
    schemaType: 'LegalService',
    author: 'Dr. Alexander Solano',
    datePublished: '2026-01-10',
    dateModified: '2026-07-29',
    cityDetails: {
      cityName: 'Popayán',
      department: 'Cauca',
      courtsInfo: 'Palacio de Justicia de Popayán (Juzgados de Familia del Circuito de Popayán)',
      notariesInfo: 'Notarías 1, 2 y 3 del Círculo de Popayán'
    },
    sections: [
      {
        heading: 'Atención Presencial Confidencial',
        body: 'Consulta privada con el Dr. Alexander Solano en nuestras instalaciones equipadas con el máximo estándar de reserva.'
      }
    ],
    relatedNodeIds: ['area-divorcio-notarial', 'ciudad-cali']
  },
  {
    id: 'ciudad-cali',
    cluster: 'servicios',
    slug: 'cali',
    title: 'Abogado de Familia en Cali y Valle del Cauca',
    subtitle: 'Cobertura preferencial con atención presencial y videoconferencia por Google Meet',
    metaTitle: 'Abogado de Familia en Cali | Divorcios & Sucesiones Valle',
    metaDescription: 'Asesoría jurídica de alta gama en Derecho de Familia para residentes en Cali. Trámites notariales y representación apoderada.',
    keywords: ['Abogado de familia Cali', 'Divorcio notarial Cali', 'Juzgados de familia Cali'],
    summary: 'Cobertura jurídica estratégica para clientes y empresarios en Cali y el departamento del Valle del Cauca.',
    legalBasis: ['Código General del Proceso', 'Ley 962 de 2005'],
    schemaType: 'LegalService',
    author: 'Dr. Alexander Solano',
    datePublished: '2026-01-10',
    dateModified: '2026-07-29',
    cityDetails: {
      cityName: 'Cali',
      department: 'Valle del Cauca',
      courtsInfo: 'Palacio de Justicia Pedro Elías Serrano Abadía (Tribunal Superior & Juzgados de Familia de Cali)',
      notariesInfo: 'Notarías del Círculo de Cali (Notaría 1 a 23 de Cali)'
    },
    sections: [
      {
        heading: 'Gestión Notarial y Despacho Virtual',
        body: 'Atención personalizada vía Google Meet y representación directa ante notarias del Valle del Cauca.'
      }
    ],
    relatedNodeIds: ['area-divorcio-notarial', 'ciudad-popayan']
  }
];

// Helper Utilities
export function getKnowledgeNode(cluster: ClusterCategory, slug: string): KnowledgeNode | undefined {
  return KNOWLEDGE_NODES.find(n => n.cluster === cluster && n.slug === slug);
}

export function getNodesByCluster(cluster: ClusterCategory): KnowledgeNode[] {
  return KNOWLEDGE_NODES.filter(n => n.cluster === cluster);
}

export function getRelatedNodes(node: KnowledgeNode): KnowledgeNode[] {
  return KNOWLEDGE_NODES.filter(n => node.relatedNodeIds.includes(n.id));
}

export function getClusterPath(cluster: ClusterCategory, slug: string): string {
  return `/${cluster}/${slug}`;
}
