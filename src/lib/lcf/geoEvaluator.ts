import { GEOAnswerScore } from './types';
import { ContentAsset } from '../contentOS/types';

export class GEOAnswerEvaluator {
  public static evaluateAsset(asset: ContentAsset): GEOAnswerScore {
    const hasQaList = asset.aiQaList && asset.aiQaList.length >= 5;
    const hasFaqs = asset.faqs && asset.faqs.length >= 3;
    const hasClearHeadings = asset.sections.every(s => s.heading.length > 5);

    const clarityScore = hasClearHeadings ? 95 : 70;
    const precisionScore = asset.legalBasis.length > 0 ? 98 : 65;
    const ragFriendlinessScore = hasQaList ? 96 : 75;
    const citabilityScore = asset.bibliography.length > 0 ? 94 : 60;

    const overallScore = Math.round((clarityScore + precisionScore + ragFriendlinessScore + citabilityScore) / 4);

    return {
      score: overallScore,
      clarityScore,
      precisionScore,
      ragFriendlinessScore,
      citabilityScore
    };
  }
}
