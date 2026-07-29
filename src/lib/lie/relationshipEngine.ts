import { CONTENT_ASSETS_MASTER, getAssetById } from '../contentOS/registry';

export interface GraphNodeEdge {
  sourceId: string;
  targetId: string;
  relationType: 'NORMADA_POR' | 'LIQUIDA' | 'REGULA' | 'ORIENTA' | 'EXIGE' | 'CIUDAD_ATENDIDA' | 'AUTOR_DE';
}

export class RelationshipEngine {
  public static getAllEdges(): GraphNodeEdge[] {
    const edges: GraphNodeEdge[] = [];
    const idSet = new Set(CONTENT_ASSETS_MASTER.map(a => a.id));

    CONTENT_ASSETS_MASTER.forEach(asset => {
      asset.relatedAssetIds.forEach(targetId => {
        if (idSet.has(targetId)) {
          let relationType: GraphNodeEdge['relationType'] = 'ORIENTA';
          if (targetId.startsWith('juris-') || targetId.startsWith('src-')) relationType = 'NORMADA_POR';
          else if (targetId.startsWith('concepto-')) relationType = 'REGULA';
          else if (targetId.startsWith('herramienta-')) relationType = 'EXIGE';
          else if (targetId.startsWith('ciudad-')) relationType = 'CIUDAD_ATENDIDA';

          edges.push({
            sourceId: asset.id,
            targetId,
            relationType
          });
        }
      });
    });

    return edges;
  }

  public static getBidirectionalLinks(assetId: string): { inbound: string[]; outbound: string[] } {
    const outbound = getAssetById(assetId)?.relatedAssetIds || [];
    const inbound = CONTENT_ASSETS_MASTER
      .filter(a => a.relatedAssetIds.includes(assetId))
      .map(a => a.id);

    return { inbound, outbound };
  }
}
