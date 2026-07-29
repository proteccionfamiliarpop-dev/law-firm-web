import { TopicOpportunity } from './types';
import { CONTENT_ASSETS_MASTER } from '../contentOS/registry';

export class TopicOpportunityEngine {
  public static scanOpportunities(): TopicOpportunity[] {
    const opportunities: TopicOpportunity[] = [];
    const existingKeywords = new Set(CONTENT_ASSETS_MASTER.flatMap(a => a.keywords.map(k => k.toLowerCase())));

    const CANDIDATE_KEYWORDS = [
      { kw: 'cuanto cuesta un divorcio en notaria en popayan', cluster: 'servicios', type: 'LOCAL_SEO' as const, vol: 1200 },
      { kw: 'requisitos capitulaciones matrimoniales bienes futuros', cluster: 'guias', type: 'LONG_TAIL' as const, vol: 850 },
      { kw: 'embargo de sueldo por cuota alimentaria porcentaje maximo', cluster: 'casos-frecuentes', type: 'GEO_OPPORTUNITY' as const, vol: 2400 },
      { kw: 'impugnacion de paternidad plazo legal colombia', cluster: 'conceptos', type: 'UNCOVERED_KEYWORD' as const, vol: 1800 },
      { kw: 'nulidad matrimonio eclesiastico causales tribunal rotal', cluster: 'jurisprudencia', type: 'ORPHAN_ENTITY' as const, vol: 950 }
    ];

    CANDIDATE_KEYWORDS.forEach((cand, idx) => {
      const normalized = cand.kw.toLowerCase();
      if (!existingKeywords.has(normalized)) {
        const priorityScore = Math.min(99, Math.round((cand.vol / 2500) * 40 + 55));

        opportunities.push({
          id: `opp-${idx}`,
          keyword: cand.kw,
          cluster: cand.cluster,
          type: cand.type,
          priorityScore,
          estimatedSearchVolume: cand.vol,
          reasoning: `Oportunidad detectada por alta intencion de busqueda (${cand.vol}/mes) y cero canibalizacion actual.`
        });
      }
    });

    return opportunities.sort((a, b) => b.priorityScore - a.priorityScore);
  }
}
