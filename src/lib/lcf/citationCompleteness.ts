import { ContentAsset } from '../contentOS/types';

export class CitationCompletenessChecker {
  public static validateCitations(asset: ContentAsset): { isComplete: boolean; reason: string } {
    const hasLegalBasis = asset.legalBasis && asset.legalBasis.length > 0;
    const hasBibliography = asset.bibliography && asset.bibliography.length > 0;

    if (!hasLegalBasis) {
      return { isComplete: false, reason: 'FAIL: No contiene fundamento legal normativo (Leyes, Decretos o Sentencias).' };
    }

    if (!hasBibliography) {
      return { isComplete: false, reason: 'FAIL: No contiene citas o bibliografía académica/doctrinal vinculada.' };
    }

    return { isComplete: true, reason: 'PASS: Soporte normativo y doctrinal completo.' };
  }
}
