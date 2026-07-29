import { ContentAsset } from '../contentOS/types';
import { SemanticAuthorityEngine } from './semanticAuthority';

export interface QualityGateAuditResult {
  assetId: string;
  isPublishable: boolean;
  score: number;
  criticalErrors: string[];
  warnings: string[];
}

export class QualityGateAI {
  public static auditAsset(asset: ContentAsset): QualityGateAuditResult {
    const criticalErrors: string[] = [];
    const warnings: string[] = [];

    // 1. EEAT Verification
    if (!asset.author || !asset.authorCardId) {
      criticalErrors.push('Falta acreditación de autoría o Tarjeta Profesional CSJ.');
    }

    // 2. Legal Support (EEAT)
    if (!asset.legalBasis || asset.legalBasis.length === 0) {
      criticalErrors.push('Falta fundamentación normativa o jurisprudencial obligatoria.');
    }

    // 3. Metadata Compliance
    if (!asset.metaTitle || asset.metaTitle.length < 15) {
      criticalErrors.push('Título meta demasiado corto para SEO.');
    }

    if (!asset.metaDescription || asset.metaDescription.length < 40) {
      criticalErrors.push('Descripción meta insuficiente para motores de búsqueda.');
    }

    // 4. GEO 10 Questions check
    if (!asset.aiQaList || asset.aiQaList.length < 5) {
      warnings.push('Se recomienda agregar al menos 5 respuestas estructurales GEO.');
    }

    const authorityReport = SemanticAuthorityEngine.calculateAuthorityScore(asset);

    const isPublishable = criticalErrors.length === 0;

    return {
      assetId: asset.id,
      isPublishable,
      score: authorityReport.score,
      criticalErrors,
      warnings
    };
  }
}
