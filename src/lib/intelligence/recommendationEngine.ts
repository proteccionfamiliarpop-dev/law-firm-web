import { ContentAsset } from '../contentOS/types';
import { CONTENT_ASSETS_MASTER } from '../contentOS/registry';

export interface ActionableRecommendation {
  id: string;
  actionType: 'ACTUALIZAR' | 'ELIMINAR' | 'DIVIDIR' | 'FUSIONAR' | 'ENLAZAR' | 'CREAR';
  targetAssetId?: string;
  targetTopic: string;
  justification: string;
  priority: 'ALTA' | 'MEDIA' | 'BAJA';
}

export class RecommendationEngine {
  public static generateRecommendations(): ActionableRecommendation[] {
    const recommendations: ActionableRecommendation[] = [];

    CONTENT_ASSETS_MASTER.forEach((asset, idx) => {
      // 1. Recommendation to Update if citations < 2
      if (asset.legalBasis.length < 2) {
        recommendations.push({
          id: `rec-upd-${idx}`,
          actionType: 'ACTUALIZAR',
          targetAssetId: asset.id,
          targetTopic: asset.title,
          justification: `El activo '${asset.title}' tiene menos de 2 fuentes de respaldo legal formal.`,
          priority: 'ALTA'
        });
      }

      // 2. Recommendation to Link if internal links < 3
      if (asset.relatedAssetIds.length < 3) {
        recommendations.push({
          id: `rec-lnk-${idx}`,
          actionType: 'ENLAZAR',
          targetAssetId: asset.id,
          targetTopic: asset.title,
          justification: `El activo '${asset.title}' requiere al menos 3 enlaces cruzados para maximizar PageRank interno.`,
          priority: 'MEDIA'
        });
      }
    });

    // 3. Recommendation to Create new high demand topics
    recommendations.push({
      id: 'rec-cre-01',
      actionType: 'CREAR',
      targetTopic: 'Separación de Bienes y Capitulaciones en Popayán',
      justification: 'Alta intención de búsqueda local con cero canibalización actual en el Knowledge Graph.',
      priority: 'ALTA'
    });

    return recommendations;
  }
}
