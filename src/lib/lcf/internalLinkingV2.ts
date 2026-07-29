import { ContentAsset } from '../contentOS/types';
import { CONTENT_ASSETS_MASTER } from '../contentOS/registry';

export interface InternalLinkStrategy {
  idealLinkCount: number;
  recommendedAnchorTexts: { targetAssetId: string; anchorText: string }[];
  clusterDistribution: { clusterName: string; percentage: number }[];
}

export class InternalLinkingOptimizerV2 {
  public static optimizeAssetLinks(asset: ContentAsset): InternalLinkStrategy {
    const idealLinkCount = Math.max(3, Math.min(8, Math.round(asset.sections.length * 2.5)));
    const sameClusterAssets = CONTENT_ASSETS_MASTER.filter(a => a.cluster === asset.cluster && a.id !== asset.id);
    const otherClusterAssets = CONTENT_ASSETS_MASTER.filter(a => a.cluster !== asset.cluster && a.id !== asset.id);

    const recommendedAnchorTexts = [
      ...sameClusterAssets.slice(0, 3).map(a => ({ targetAssetId: a.id, anchorText: a.title })),
      ...otherClusterAssets.slice(0, 2).map(a => ({ targetAssetId: a.id, anchorText: a.title }))
    ];

    return {
      idealLinkCount,
      recommendedAnchorTexts,
      clusterDistribution: [
        { clusterName: asset.cluster, percentage: 60 },
        { clusterName: 'relacionados-cross-cluster', percentage: 40 }
      ]
    };
  }
}
