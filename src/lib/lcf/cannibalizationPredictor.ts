import { CannibalizationPrediction } from './types';
import { CONTENT_ASSETS_MASTER } from '../contentOS/registry';

export class CannibalizationPredictorAI {
  public static predictCannibalization(candidateTitle: string, candidateKeywords: string[]): CannibalizationPrediction {
    let maxOverlap = 0;
    let dominantKeyword = candidateKeywords[0] || candidateTitle;
    let dominantEntity = 'Derecho de Familia';

    const candKwSet = new Set(candidateKeywords.map(k => k.toLowerCase()));

    CONTENT_ASSETS_MASTER.forEach(asset => {
      const matchCount = asset.keywords.filter(k => candKwSet.has(k.toLowerCase())).length;
      const overlapRatio = (matchCount / (candKwSet.size || 1)) * 100;
      if (overlapRatio > maxOverlap) {
        maxOverlap = overlapRatio;
        dominantKeyword = asset.keywords[0] || asset.title;
        dominantEntity = asset.cluster;
      }
    });

    let recommendation: CannibalizationPrediction['recommendation'] = 'PUBLICAR';
    if (maxOverlap > 80) {
      recommendation = 'ELIMINAR';
    } else if (maxOverlap > 50) {
      recommendation = 'FUSIONAR';
    } else if (maxOverlap > 30) {
      recommendation = 'REDIRECCIONAR';
    }

    return {
      similarityScore: Math.round(maxOverlap),
      overlapPercentage: Math.round(maxOverlap),
      dominantEntity,
      dominantKeyword,
      recommendation
    };
  }
}
