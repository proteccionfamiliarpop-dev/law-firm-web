import { ContentAsset, CannibalizationResult, QualityAuditReport } from './types';
import { CONTENT_ASSETS_MASTER } from './registry';

export class ContentOSValidator {
  public static detectBrokenLinks(): { assetId: string; brokenTargetId: string }[] {
    const brokenLinks: { assetId: string; brokenTargetId: string }[] = [];
    const validAssetIds = new Set(CONTENT_ASSETS_MASTER.map(a => a.id));

    CONTENT_ASSETS_MASTER.forEach(asset => {
      asset.relatedAssetIds.forEach(targetId => {
        if (!validAssetIds.has(targetId)) {
          brokenLinks.push({ assetId: asset.id, brokenTargetId: targetId });
        }
      });
    });

    return brokenLinks;
  }

  public static detectSemanticCannibalization(): CannibalizationResult[] {
    const risks: CannibalizationResult[] = [];
    const keywordMap = new Map<string, string>(); // keyword -> assetId

    CONTENT_ASSETS_MASTER.forEach(asset => {
      asset.keywords.forEach(kw => {
        const normalizedKw = kw.toLowerCase().trim();
        if (keywordMap.has(normalizedKw) && keywordMap.get(normalizedKw) !== asset.id) {
          risks.push({
            assetId: asset.id,
            collidingAssetId: keywordMap.get(normalizedKw)!,
            collidingKeyword: normalizedKw,
            riskLevel: 'HIGH'
          });
        } else {
          keywordMap.set(normalizedKw, asset.id);
        }
      });
    });

    return risks;
  }

  public static runFullQualityAudit(): QualityAuditReport {
    const brokenLinks = this.detectBrokenLinks();
    const cannibalizationRisks = this.detectSemanticCannibalization();

    let schemaErrors = 0;
    CONTENT_ASSETS_MASTER.forEach(asset => {
      if (!asset.title || asset.title.length < 10) schemaErrors++;
      if (!asset.metaDescription || asset.metaDescription.length < 30) schemaErrors++;
      if (!asset.legalBasis || asset.legalBasis.length === 0) schemaErrors++;
    });

    const isOptimal = brokenLinks.length === 0 && cannibalizationRisks.length === 0 && schemaErrors === 0;

    return {
      timestamp: new Date().toISOString(),
      totalAssetsCount: CONTENT_ASSETS_MASTER.length,
      publishedAssetsCount: CONTENT_ASSETS_MASTER.filter(a => a.status === 'published').length,
      brokenLinksCount: brokenLinks.length,
      cannibalizationRisks,
      schemaValidationErrorsCount: schemaErrors,
      overallSystemHealth: isOptimal ? 'OPTIMAL' : brokenLinks.length > 0 ? 'CRITICAL' : 'DEGRADED'
    };
  }
}
