export type AssetCluster = 
  | 'areas-de-practica'
  | 'guias'
  | 'conceptos'
  | 'jurisprudencia'
  | 'casos-frecuentes'
  | 'preguntas-frecuentes'
  | 'recursos'
  | 'herramientas'
  | 'servicios';

export type PublishStatus = 'draft' | 'under_legal_review' | 'approved' | 'published' | 'archived';

export interface AIQuestionAnswer {
  question: string;
  answer: string;
  category: 'definicion' | 'aplicacion' | 'perfil' | 'tiempo' | 'costos' | 'requisitos' | 'procedimiento' | 'normas' | 'excepciones' | 'abogado';
}

export interface ContentSection {
  id: string;
  heading: string;
  body: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContentAsset {
  id: string;
  cluster: AssetCluster;
  slug: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  summary: string;
  status: PublishStatus;
  version: string;
  author: string;
  authorCardId: string;
  dateCreated: string;
  dateModified: string;
  topicalAuthorityScore: number; // 1 to 100
  legalBasis: string[];
  bibliography: string[];
  sections: ContentSection[];
  relatedAssetIds: string[];
  faqs?: FAQItem[];
  aiQaList?: AIQuestionAnswer[];
  fileDetails?: {
    fileFormat: 'PDF' | 'DOCX' | 'Herramienta Interactiva';
    fileSize: string;
    downloadUrl: string;
  };
}

export interface CannibalizationResult {
  assetId: string;
  collidingAssetId: string;
  collidingKeyword: string;
  riskLevel: 'HIGH' | 'MEDIUM' | 'LOW';
}

export interface QualityAuditReport {
  timestamp: string;
  totalAssetsCount: number;
  publishedAssetsCount: number;
  brokenLinksCount: number;
  cannibalizationRisks: CannibalizationResult[];
  schemaValidationErrorsCount: number;
  overallSystemHealth: 'OPTIMAL' | 'DEGRADED' | 'CRITICAL';
}
