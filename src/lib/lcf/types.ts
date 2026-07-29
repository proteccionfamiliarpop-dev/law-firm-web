export interface TopicOpportunity {
  id: string;
  keyword: string;
  cluster: string;
  type: 'UNCOVERED_KEYWORD' | 'ORPHAN_ENTITY' | 'LONG_TAIL' | 'LOCAL_SEO' | 'GEO_OPPORTUNITY';
  priorityScore: number; // 0 - 100
  estimatedSearchVolume: number;
  reasoning: string;
}

export interface ContentBlueprint {
  keyword: string;
  title: string;
  metaDescription: string;
  h1: string;
  h2Headings: string[];
  h3Headings: string[];
  faqs: { question: string; targetAnswerType: string }[];
  targetEntities: string[];
  applicableNorms: string[];
  jurisprudenceReferences: string[];
  relatedResources: string[];
  relatedCalculators: string[];
  targetCities: string[];
  ctaType: string;
  requiredSchemas: string[];
}

export interface CoverageAnalysisResult {
  coveragePercentage: number;
  answeredDimensions: string[];
  missingDimensions: string[];
}

export interface EntityDensityResult {
  legalEntitiesCount: number;
  institutionsCount: number;
  lawsCount: number;
  conceptsCount: number;
  densityStatus: 'OPTIMAL' | 'KEYWORD_STUFFING' | 'LOW_DENSITY';
}

export interface GEOAnswerScore {
  score: number; // 0 - 100
  clarityScore: number;
  precisionScore: number;
  ragFriendlinessScore: number;
  citabilityScore: number;
}

export interface CannibalizationPrediction {
  similarityScore: number; // 0 - 100
  overlapPercentage: number;
  dominantEntity: string;
  dominantKeyword: string;
  recommendation: 'PUBLICAR' | 'FUSIONAR' | 'REDIRECCIONAR' | 'ELIMINAR';
}

export interface AuthorityGrowthImpact {
  projectedDomainAuthorityIncrease: number;
  clusterStrengthDelta: number;
  eeatBoostPercentage: number;
  geoVisibilityDelta: number;
}
