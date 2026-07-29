import { ContentAsset } from '../contentOS/types';
import { SemanticAuthorityReport } from './types';

export class SemanticAuthorityEngine {
  public static calculateAuthorityScore(asset: ContentAsset): SemanticAuthorityReport {
    let score = 50; // Base score
    const strengths: string[] = [];
    const opportunities: string[] = [];

    // 1. Legal & Academic Citations (Max +15)
    const citationCount = asset.legalBasis.length + asset.bibliography.length;
    if (citationCount >= 3) {
      score += 15;
      strengths.push('Soporte normativo y jurisprudencial completo (EEAT)');
    } else {
      score += citationCount * 4;
      opportunities.push('Agregar 2 citas de leyes o jurisprudencia adicionales');
    }

    // 2. Internal Linking (Max +15)
    const linkCount = asset.relatedAssetIds.length;
    if (linkCount >= 3) {
      score += 15;
      strengths.push('Excelente interconexión dentro del Topic Cluster');
    } else {
      score += linkCount * 4;
      opportunities.push('Agregar 3 enlaces internos a conceptos o recursos relacionados');
    }

    // 3. FAQs & GEO 10 Golden Questions (Max +10)
    const faqCount = (asset.faqs?.length || 0) + (asset.aiQaList?.length || 0);
    if (faqCount >= 5) {
      score += 10;
      strengths.push('Optimizado para Google AI Overviews y Motores RAG (GEO)');
    } else {
      score += faqCount * 2;
      opportunities.push('Agregar 2 FAQs adicionales para Generative Engine Optimization');
    }

    // 4. Content Depth & Structure (Max +10)
    if (asset.sections.length >= 2) {
      score += 10;
      strengths.push('Profundidad temática y estructura clara de secciones');
    } else {
      opportunities.push('Expandir la profundidad del activo con 1 sección temática más');
    }

    const finalScore = Math.min(100, Math.max(0, score));

    return {
      score: finalScore,
      strengths,
      opportunities,
      metricBreakdown: {
        depth: asset.sections.length,
        coverage: asset.topicalAuthorityScore,
        internalLinks: linkCount,
        citations: citationCount,
        resources: asset.fileDetails ? 1 : 0,
        faqs: faqCount
      }
    };
  }
}
