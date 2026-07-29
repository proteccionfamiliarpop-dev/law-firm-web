export type ResourceType = 
  | 'plantilla' 
  | 'modelo-minuta' 
  | 'guia' 
  | 'checklist' 
  | 'infografia' 
  | 'cronologia' 
  | 'pdf' 
  | 'calculadora';

export interface JuridicalResource {
  id: string;
  slug: string;
  type: ResourceType;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  author: string;
  version: string;
  datePublished: string;
  dateModified: string;
  fileFormat: 'PDF' | 'DOCX' | 'Herramienta Interactiva';
  fileSize: string;
  downloadUrl: string;
  sections: { heading: string; body: string }[];
  legalBasis: string[];
  bibliography: string[];
  relatedNodeIds: string[];
}

export const PREMIUM_RESOURCES: JuridicalResource[] = [
  {
    id: 'res-minuta-divorcio',
    slug: 'minuta-divorcio-mutuo-acuerdo-notaria',
    type: 'modelo-minuta',
    title: 'Modelo de Minuta de Divorcio por Mutuo Acuerdo en Notaría',
    subtitle: 'Plantilla oficial de solicitud y acuerdo regulatorio de divorcio en Escritura Pública',
    metaTitle: 'Minuta de Divorcio Notarial por Mutuo Acuerdo | Descarga PDF/DOCX',
    metaDescription: 'Descargue la minuta modelo oficial de divorcio notarial en Colombia regulada por la Ley 962 de 2005. Revisada por el Dr. Alexander Solano.',
    keywords: ['Minuta divorcio notarial Colombia', 'Modelo acuerdo divorcio mutuo acuerdo', 'Plantilla divorcio notaria word pdf'],
    author: 'Dr. Alexander Solano (T.P. 182.354 CSJ)',
    version: 'v2026.1 (Conforme a Ley 962/2005 y Decreto 4436/2005)',
    datePublished: '2026-01-15',
    dateModified: '2026-07-29',
    fileFormat: 'DOCX',
    fileSize: '45 KB',
    downloadUrl: '#agendar',
    sections: [
      {
        heading: 'Estructura Jurídica del Documento',
        body: 'Contiene las cláusulas de manifestación libre de voluntad, disolución del vínculo matrimonial, liquidación o suspensión de la sociedad conyugal y fijación de residencia separada.'
      },
      {
        heading: 'Instrucciones de Uso Notarial',
        body: 'El modelo debe ser diligenciado por el abogado apoderado indicando los datos exactos del Registro Civil de Matrimonio y presentado con los paz y salvos notariales.'
      }
    ],
    legalBasis: ['Ley 962 de 2005 (Art. 34)', 'Decreto 4436 de 2005', 'Decreto 960 de 1970'],
    bibliography: [
      'Superintendencia de Notariado y Registro - Protocolos Notariales de Familia (2026)',
      'Solano, A. (2025). Manual de Práctica Notarial en Derecho de Familia. Popayán.'
    ],
    relatedNodeIds: ['area-divorcio-notarial', 'guia-divorcio-notarial', 'concepto-sociedad-conyugal']
  },
  {
    id: 'res-checklist-documentos',
    slug: 'checklist-documentos-divorcio-notarial',
    type: 'checklist',
    title: 'Checklist Oficial de Documentos para Divorcio Notarial',
    subtitle: 'Lista de verificación previa para evitar devoluciones y demoras en Notaría',
    metaTitle: 'Checklist de Documentos para Divorcio Notarial | Descarga Gratuita',
    metaDescription: 'Descargue la lista de chequeo imprescindible para tramitar su divorcio notarial sin errores en Popayán, Cali o cualquier notaría de Colombia.',
    keywords: ['Checklist documentos divorcio notarial', 'Requisitos divorcio notario lista'],
    author: 'Dr. Alexander Solano (T.P. 182.354 CSJ)',
    version: 'v2026.1',
    datePublished: '2026-02-01',
    dateModified: '2026-07-29',
    fileFormat: 'PDF',
    fileSize: '120 KB',
    downloadUrl: '#agendar',
    sections: [
      {
        heading: 'Verificación de Registros Civiles',
        body: 'Comprobar que las copias de los Registros Civiles de Nacimiento contengan la nota marginal de soltería/matrimonio y su expedición sea reciente (inferior a 90 días).'
      }
    ],
    legalBasis: ['Decreto 1260 de 1970', 'Ley 962 de 2005'],
    bibliography: ['Registraduría Nacional del Estado Civil - Guía de Registros Civiles'],
    relatedNodeIds: ['area-divorcio-notarial', 'guia-divorcio-notarial']
  },
  {
    id: 'res-cronologia-flujograma',
    slug: 'cronologia-flujograma-divorcio-colombia',
    type: 'cronologia',
    title: 'Cronología & Flujograma del Divorcio Notarial vs Judicial',
    subtitle: 'Esquema gráfico del paso a paso y tiempos estimados de resolución en Colombia',
    metaTitle: 'Cronología del Divorcio Notarial vs Judicial | Infografía PDF',
    metaDescription: 'Infografía descargable del flujo de trabajo del divorcio en Colombia. Diferencias de tiempo entre trámite notarial (10 días) y demanda judicial (12 meses).',
    keywords: ['Cronologia divorcio Colombia', 'Flujograma divorcio notarial vs juez'],
    author: 'Dr. Alexander Solano (T.P. 182.354 CSJ)',
    version: 'v2026.1',
    datePublished: '2026-03-01',
    dateModified: '2026-07-29',
    fileFormat: 'PDF',
    fileSize: '350 KB',
    downloadUrl: '#agendar',
    sections: [
      {
        heading: 'Ruta Notarial (5 a 10 Días)',
        body: 'Fase 1: Acopio -> Fase 2: Poder -> Fase 3: Radicación -> Fase 4: Firma Escritura Pública.'
      },
      {
        heading: 'Ruta Judicial Contenciosa (6 a 18 Meses)',
        body: 'Demanda -> Auto Admisorio -> Contestación -> Audiencia Art. 372 CGP -> Sentencia de Familia.'
      }
    ],
    legalBasis: ['Código General del Proceso (Art. 388)', 'Ley 962 de 2005'],
    bibliography: ['Consejo Superior de la Judicatura - Reportes de Tiempos Procesales en Familia'],
    relatedNodeIds: ['herramienta-notaria-o-juez', 'caso-sin-consentimiento']
  }
];

export function getResourceBySlug(slug: string): JuridicalResource | undefined {
  return PREMIUM_RESOURCES.find(r => r.slug === slug);
}
