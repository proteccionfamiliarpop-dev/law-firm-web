import { EntityDensityResult } from './types';
import { ContentAsset } from '../contentOS/types';

export class EntityDensityAnalyzer {
  public static analyzeEntityDensity(asset: ContentAsset): EntityDensityResult {
    const fullText = (asset.title + ' ' + asset.summary + ' ' + asset.sections.map(s => s.body).join(' ')).toLowerCase();
    const words = fullText.split(/\s+/);
    const wordCount = words.length || 1;

    let legalEntitiesCount = (fullText.match(/derecho|matrimonio|divorcio|custodia|patrimonio|sociedad conyugal/g) || []).length;
    let institutionsCount = (fullText.match(/corte|notar[ií]a|juzgado|icbf|superintendencia|ministerio/g) || []).length;
    let lawsCount = (fullText.match(/ley|decreto|sentencia|código/g) || []).length;
    let conceptsCount = (fullText.match(/patria potestad|alimentos|gananciales|herencia/g) || []).length;

    const totalEntities = legalEntitiesCount + institutionsCount + lawsCount + conceptsCount;
    const entityRatio = totalEntities / wordCount;

    let densityStatus: EntityDensityResult['densityStatus'] = 'OPTIMAL';
    if (entityRatio > 0.15) {
      densityStatus = 'KEYWORD_STUFFING';
    } else if (entityRatio < 0.02) {
      densityStatus = 'LOW_DENSITY';
    }

    return {
      legalEntitiesCount,
      institutionsCount,
      lawsCount,
      conceptsCount,
      densityStatus
    };
  }
}
