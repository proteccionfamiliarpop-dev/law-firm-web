import { SearchMetric } from './types';

export const SEARCH_METRICS_REGISTRY: SearchMetric[] = [
  {
    url: 'https://proteccionfamiliar.co/guias/guia-definitiva-divorcio-notarial-colombia',
    impressions: 48500,
    clicks: 3920,
    ctr: 8.08,
    averagePosition: 1.4,
    queries: ['divorcio notarial colombia', 'requisitos divorcio notaria', 'cuanto tarda divorcio notarial'],
    device: 'mobile',
    country: 'Colombia',
    city: 'Popayán',
    date: '2026-07-28'
  },
  {
    url: 'https://proteccionfamiliar.co/areas-de-practica/divorcio-notarial-mutuo-acuerdo',
    impressions: 32100,
    clicks: 2840,
    ctr: 8.84,
    averagePosition: 1.2,
    queries: ['abogado divorcio popayan', 'abogados de familia popayan'],
    device: 'mobile',
    country: 'Colombia',
    city: 'Popayán',
    date: '2026-07-28'
  },
  {
    url: 'https://proteccionfamiliar.co/herramientas/calculadora-notaria-o-juez',
    impressions: 19400,
    clicks: 1890,
    ctr: 9.74,
    averagePosition: 1.1,
    queries: ['divorcio notaria o juez diferencias', 'calculadora divorcio colombia'],
    device: 'desktop',
    country: 'Colombia',
    city: 'Cali',
    date: '2026-07-28'
  }
];

export class SearchIntelligenceEngine {
  public static getMetricsForUrl(url: string): SearchMetric | undefined {
    return SEARCH_METRICS_REGISTRY.find(m => m.url === url);
  }

  public static getOverallSearchHealth(): { totalImpressions: number; totalClicks: number; avgCtr: number; avgPos: number } {
    const totalImpressions = SEARCH_METRICS_REGISTRY.reduce((acc, m) => acc + m.impressions, 0);
    const totalClicks = SEARCH_METRICS_REGISTRY.reduce((acc, m) => acc + m.clicks, 0);
    const avgCtr = Number((totalClicks / (totalImpressions || 1) * 100).toFixed(2));
    const avgPos = Number((SEARCH_METRICS_REGISTRY.reduce((acc, m) => acc + m.averagePosition, 0) / SEARCH_METRICS_REGISTRY.length).toFixed(1));

    return { totalImpressions, totalClicks, avgCtr, avgPos };
  }
}
