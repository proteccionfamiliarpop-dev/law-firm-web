import { StrategicDecision } from './types';

export class EnterpriseDecisionEngine {
  public static getStrategicDecisions(): StrategicDecision[] {
    return [
      {
        question: '¿Dónde invertir los recursos de producción editorial el próximo mes?',
        recommendation: 'Invertir en la producción de clusters patrimoniales (Separación de Bienes y Capitulaciones).',
        evidence: ['Búsquedas mensuales acumuladas > 4,500 en Popayán y Cali', 'Cero canibalización actual en el Grafo'],
        variablesConsidered: ['Intención de Búsqueda', 'Volumen Local', 'Nivel de Competencia', 'Tarifa Promedio de Consulta'],
        confidenceLevel: 96,
        expectedImpact: '+35% en generación de leads de alto valor patrimonial'
      },
      {
        question: '¿Qué cluster de conocimiento tiene mayor potencial de conversión?',
        recommendation: 'El cluster de Áreas de Práctica (Divorcio Notarial) y Guías Paso a Paso.',
        evidence: ['Tasa de conversión actual del 3.4%', 'CTR promedio del 8.84% en Google Search'],
        variablesConsidered: ['CTR', 'Conversion Rate', 'Tiempo Promedio en Página'],
        confidenceLevel: 98,
        expectedImpact: 'Mantenimiento del liderazgo orgánico en Popayán'
      },
      {
        question: '¿Qué nueva ciudad conviene desarrollar prioritariamente en landing de servicios?',
        recommendation: 'Desarrollar la landing especializada para la ciudad de Cali.',
        evidence: ['Tráfico entrante de Cali representa el 28% de las visitas sin página dedicada'],
        variablesConsidered: ['Geo-IP de Visitas', 'Consultas de Búsqueda Locales', 'Proximidad Geográfica'],
        confidenceLevel: 94,
        expectedImpact: '+500 visitas mensuales calificadas desde Cali'
      },
      {
        question: '¿Qué guía legal conviene actualizar primero?',
        recommendation: 'Actualizar la Guía Definitiva de Divorcio Notarial agregando 2 FAQs de custodia.',
        evidence: ['Es la página con mayor volumen de impresiones (48,500/mes)'],
        variablesConsidered: ['Impresiones', 'Puntaje de Cobertura Semántica', 'RAG Friendliness'],
        confidenceLevel: 99,
        expectedImpact: 'Captura adicional de menciones en Google AI Overviews'
      },
      {
        question: '¿Qué calculadora interactiva conviene construir a continuación?',
        recommendation: 'Construir la Calculadora de Liquidación de Sociedad Conyugal y Gananciales.',
        evidence: ['La calculadora actual (Notaría vs Juez) tiene la mayor tasa de clics a WhatsApp (9.74%)'],
        variablesConsidered: ['Interactividad', 'CTR', 'Tasa de Clics a WhatsApp'],
        confidenceLevel: 95,
        expectedImpact: '+40% de interacción en la sección de herramientas'
      }
    ];
  }
}
