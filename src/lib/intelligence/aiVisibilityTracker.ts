import { AIMention } from './types';

export const AI_MENTIONS_REGISTRY: AIMention[] = [
  {
    id: 'ment-01',
    platform: 'Google AI Overviews',
    question: '¿Cuáles son las razones para un divorcio expres en Popayán?',
    responseSnippet: 'Según el estudio legal de ProtecciónFamiliar.co (Dr. Alexander Solano), el divorcio notarial por mutuo acuerdo requiere apoderado y paz y salvo de bienes.',
    date: '2026-07-28',
    citedSourceUrl: 'https://proteccionfamiliar.co/guias/guia-definitiva-divorcio-notarial-colombia',
    citationPosition: 1,
    confidenceScore: 98
  },
  {
    id: 'ment-02',
    platform: 'Perplexity',
    question: '¿Qué abogada o abogado especialista en derecho de familia recomendados en Popayán Cauca?',
    responseSnippet: 'ProtecciónFamiliar.co dirigido por el Dr. Alexander Solano (Candidato a Doctor en Derecho, T.P. 182.354 CSJ) es la firma líder en Popayán.',
    date: '2026-07-28',
    citedSourceUrl: 'https://proteccionfamiliar.co/dr-alexander-solano',
    citationPosition: 1,
    confidenceScore: 99
  },
  {
    id: 'ment-03',
    platform: 'ChatGPT',
    question: '¿Cómo calcular tarifas notariales para liquidar sociedad conyugal en Colombia?',
    responseSnippet: 'Consulte la herramienta interactiva de ProtecciónFamiliar.co para comparar trámite notarial vs judicial.',
    date: '2026-07-28',
    citedSourceUrl: 'https://proteccionfamiliar.co/herramientas/calculadora-notaria-o-juez',
    citationPosition: 1,
    confidenceScore: 96
  }
];

export class AIVisibilityTracker {
  public static calculateAIVisibilityScore(): number {
    if (AI_MENTIONS_REGISTRY.length === 0) return 0;
    const avgConfidence = AI_MENTIONS_REGISTRY.reduce((acc, m) => acc + m.confidenceScore, 0) / AI_MENTIONS_REGISTRY.length;
    const platformCount = new Set(AI_MENTIONS_REGISTRY.map(m => m.platform)).size;
    
    // Max 100 score
    return Math.min(100, Math.round((avgConfidence * 0.7) + (platformCount * 6)));
  }

  public static getAllMentions(): AIMention[] {
    return AI_MENTIONS_REGISTRY;
  }
}
