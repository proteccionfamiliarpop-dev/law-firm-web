export type LegalSourceType = 
  | 'Ley'
  | 'Decreto'
  | 'Sentencia'
  | 'Concepto'
  | 'Circular'
  | 'Resolución'
  | 'Doctrina'
  | 'Libro'
  | 'Artículo científico'
  | 'Investigación'
  | 'Publicación institucional';

export type CitationAuthority =
  | 'Constitución Política'
  | 'Leyes'
  | 'Decretos'
  | 'Corte Constitucional'
  | 'Corte Suprema'
  | 'Consejo de Estado'
  | 'ICBF'
  | 'Superintendencias'
  | 'Ministerio de Justicia'
  | 'Registraduría'
  | 'Doctrina'
  | 'Publicaciones Académicas';

export interface LegalSource {
  id: string;
  type: LegalSourceType;
  title: string;
  jurisdiction: string;
  issuingAuthority: string;
  date: string;
  validityStatus: 'Vigente' | 'Derogada' | 'Modificada' | 'En Revisión';
  keywords: string[];
  topics: string[];
  relatedArticles: string[];
  crossReferences: string[];
  officialUrl?: string;
}

export interface LegalCitation {
  id: string;
  type: LegalSourceType;
  authority: CitationAuthority;
  date: string;
  validityStatus: 'Vigente' | 'Derogada' | 'Modificada';
  officialUrl?: string;
  citedArticle: string;
  relevantSnippet: string;
  lastValidationDate: string;
}

export interface AssetExtractionSuggestion {
  targetFormat: 
    | 'area-de-practica'
    | 'concepto'
    | 'guia'
    | 'faq'
    | 'caso-frecuente'
    | 'jurisprudencia'
    | 'checklist'
    | 'recurso'
    | 'calculadora'
    | 'comparativa'
    | 'cronologia'
    | 'glosario'
    | 'tabla-resumen'
    | 'paso-a-paso'
    | 'riesgos'
    | 'errores-frecuentes';
  suggestedTitle: string;
  reasoning: string;
  priority: 'ALTA' | 'MEDIA' | 'BAJA';
}

export interface SemanticAuthorityReport {
  score: number; // 0 - 100
  strengths: string[];
  opportunities: string[];
  metricBreakdown: {
    depth: number;
    coverage: number;
    internalLinks: number;
    citations: number;
    resources: number;
    faqs: number;
  };
}

export interface GapAnalysisItem {
  id: string;
  topic: string;
  missingFormats: string[];
  priority: 'CRÍTICA' | 'ALTA' | 'MEDIA';
  recommendedAction: string;
}
