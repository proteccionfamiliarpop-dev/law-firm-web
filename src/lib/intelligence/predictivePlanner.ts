export interface PlannedArticle {
  rank: number;
  topic: string;
  cluster: string;
  projectedRoiScore: number;
  authorityGain: number;
  geoIndex: number;
  eeatScore: number;
  recommendedFormat: string;
}

export class PredictiveContentPlanner {
  public static generateTopPlannedArticles(): PlannedArticle[] {
    const planned: PlannedArticle[] = [];

    const TOPICS = [
      'Separación de Bienes Notarial en Popayán',
      'Capitulaciones Matrimoniales en Cali',
      'Impugnación de Paternidad Plazo Legal',
      'Nulidad de Matrimonio Eclesiástico y Civil',
      'Unión Marital de Hecho y Sociedad Patrimonial',
      'Violencia Intrafamiliar Medidas de Protección',
      'Restitución Internacional de Menores ICBF',
      'Filiación e Investigación de Paternidad ADN'
    ];

    TOPICS.forEach((t, idx) => {
      planned.push({
        rank: idx + 1,
        topic: t,
        cluster: idx % 2 === 0 ? 'guias' : 'conceptos',
        projectedRoiScore: Math.round(98 - idx * 2.5),
        authorityGain: Number((2.8 - idx * 0.2).toFixed(1)),
        geoIndex: Math.round(95 - idx * 1.5),
        eeatScore: 99,
        recommendedFormat: idx % 2 === 0 ? 'Guía Completa' : 'Concepto + FAQ'
      });
    });

    return planned;
  }
}
