export interface SearchMetric {
  url: string;
  impressions: number;
  clicks: number;
  ctr: number;
  averagePosition: number;
  queries: string[];
  device: 'mobile' | 'desktop' | 'tablet';
  country: string;
  city: string;
  date: string;
}

export interface AIMention {
  id: string;
  platform: 'Google AI Overviews' | 'ChatGPT' | 'Gemini' | 'Claude' | 'Perplexity' | 'Copilot';
  question: string;
  responseSnippet: string;
  date: string;
  citedSourceUrl: string;
  citationPosition: number;
  confidenceScore: number; // 0 - 100
}

export interface JourneyStep {
  stepName: 'Landing' | 'Scroll' | 'Calculator' | 'FAQ' | 'WhatsApp' | 'LeadForm' | 'Conversion';
  timestamp: string;
  durationSeconds: number;
}

export interface UserJourney {
  sessionId: string;
  landingUrl: string;
  steps: JourneyStep[];
  isConverted: boolean;
  dropoffStep?: string;
}

export interface StrategicKPI {
  name: string;
  score: number; // 0 - 100
  formula: string;
  trend: 'UP' | 'DOWN' | 'STABLE';
}

export interface StrategicDecision {
  question: string;
  recommendation: string;
  evidence: string[];
  variablesConsidered: string[];
  confidenceLevel: number; // 0 - 100
  expectedImpact: string;
}
