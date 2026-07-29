import { AuthorityGrowthImpact } from './types';
import { ContentAsset } from '../contentOS/types';

export class AuthorityGrowthSimulator {
  public static simulatePublishImpact(asset: ContentAsset): AuthorityGrowthImpact {
    const hasCitations = asset.legalBasis.length > 0;
    const hasFaqs = asset.faqs && asset.faqs.length > 0;
    const hasLinks = asset.relatedAssetIds.length > 0;

    const projectedDomainAuthorityIncrease = hasCitations && hasLinks ? 0.45 : 0.15;
    const clusterStrengthDelta = hasLinks ? 1.8 : 0.6;
    const eeatBoostPercentage = hasCitations ? 3.5 : 1.0;
    const geoVisibilityDelta = hasFaqs ? 4.2 : 1.2;

    return {
      projectedDomainAuthorityIncrease,
      clusterStrengthDelta,
      eeatBoostPercentage,
      geoVisibilityDelta
    };
  }
}
