import { UserJourney } from './types';

export const USER_JOURNEYS_SAMPLE: UserJourney[] = [
  {
    sessionId: 'sess-8812',
    landingUrl: 'https://proteccionfamiliar.co/guias/guia-definitiva-divorcio-notarial-colombia',
    isConverted: true,
    steps: [
      { stepName: 'Landing', timestamp: '2026-07-28T10:14:02Z', durationSeconds: 45 },
      { stepName: 'Scroll', timestamp: '2026-07-28T10:14:47Z', durationSeconds: 60 },
      { stepName: 'Calculator', timestamp: '2026-07-28T10:15:47Z', durationSeconds: 90 },
      { stepName: 'FAQ', timestamp: '2026-07-28T10:17:17Z', durationSeconds: 30 },
      { stepName: 'LeadForm', timestamp: '2026-07-28T10:17:47Z', durationSeconds: 40 },
      { stepName: 'Conversion', timestamp: '2026-07-28T10:18:27Z', durationSeconds: 0 }
    ]
  },
  {
    sessionId: 'sess-8813',
    landingUrl: 'https://proteccionfamiliar.co/areas-de-practica/divorcio-notarial-mutuo-acuerdo',
    isConverted: true,
    steps: [
      { stepName: 'Landing', timestamp: '2026-07-28T11:02:10Z', durationSeconds: 30 },
      { stepName: 'Scroll', timestamp: '2026-07-28T11:02:40Z', durationSeconds: 25 },
      { stepName: 'WhatsApp', timestamp: '2026-07-28T11:03:05Z', durationSeconds: 15 },
      { stepName: 'Conversion', timestamp: '2026-07-28T11:03:20Z', durationSeconds: 0 }
    ]
  }
];

export class UserJourneyAnalyzer {
  public static calculateConversionRate(): number {
    if (USER_JOURNEYS_SAMPLE.length === 0) return 0;
    const converted = USER_JOURNEYS_SAMPLE.filter(j => j.isConverted).length;
    return Math.round((converted / USER_JOURNEYS_SAMPLE.length) * 100);
  }

  public static getAverageJourneyTimeSeconds(): number {
    const totalTime = USER_JOURNEYS_SAMPLE.reduce((acc, j) => {
      return acc + j.steps.reduce((sum, s) => sum + s.durationSeconds, 0);
    }, 0);
    return Math.round(totalTime / (USER_JOURNEYS_SAMPLE.length || 1));
  }
}
