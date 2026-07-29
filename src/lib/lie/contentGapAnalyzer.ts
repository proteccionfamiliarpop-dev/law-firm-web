import { GapAnalysisItem } from './types';
import { CONTENT_ASSETS_MASTER } from '../contentOS/registry';

export class ContentGapAnalyzer {
  private static EXPECTED_TOPIC_ECOSYSTEM = [
    { topic: 'Separación de Bienes', cluster: 'conceptos', requiredFormats: ['concepto', 'guia', 'faq'] },
    { topic: 'Capitulaciones Matrimoniales', cluster: 'guias', requiredFormats: ['guia', 'checklist'] },
    { topic: 'Impugnación de Paternidad', cluster: 'casos-frecuentes', requiredFormats: ['caso-frecuente', 'faq'] },
    { topic: 'Nulidad del Matrimonio Civil y Eclesiástico', cluster: 'conceptos', requiredFormats: ['concepto', 'jurisprudencia'] },
    { topic: 'Unión Marital de Hecho y Sociedad Patrimonial', cluster: 'conceptos', requiredFormats: ['concepto', 'guia', 'calculadora'] },
    { topic: 'Violencia Intrafamiliar y Medidas de Protección', cluster: 'areas-de-practica', requiredFormats: ['area-de-practica', 'faq'] },
    { topic: 'Restitución Internacional de Menores', cluster: 'casos-frecuentes', requiredFormats: ['caso-frecuente', 'guia'] },
    { topic: 'Filiación e Investigación de la Paternidad', cluster: 'conceptos', requiredFormats: ['concepto', 'jurisprudencia'] }
  ];

  public static analyzeGaps(): GapAnalysisItem[] {
    const gaps: GapAnalysisItem[] = [];
    const existingTitles = CONTENT_ASSETS_MASTER.map(a => a.title.toLowerCase());
    const existingKeywords = CONTENT_ASSETS_MASTER.flatMap(a => a.keywords.map(k => k.toLowerCase()));

    this.EXPECTED_TOPIC_ECOSYSTEM.forEach((item, idx) => {
      const topicNorm = item.topic.toLowerCase();
      const isCovered = existingTitles.some(t => t.includes(topicNorm)) || existingKeywords.some(k => k.includes(topicNorm));

      if (!isCovered) {
        gaps.push({
          id: `gap-${idx}`,
          topic: item.topic,
          missingFormats: item.requiredFormats,
          priority: idx < 3 ? 'CRÍTICA' : 'ALTA',
          recommendedAction: `Crear cluster completo para ${item.topic} con formatos: ${item.requiredFormats.join(', ')}.`
        });
      }
    });

    return gaps;
  }
}
