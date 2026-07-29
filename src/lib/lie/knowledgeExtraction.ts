import { LegalSource, AssetExtractionSuggestion } from './types';

export class KnowledgeExtractionEngine {
  public static extractAssetSuggestions(source: LegalSource): AssetExtractionSuggestion[] {
    const suggestions: AssetExtractionSuggestion[] = [];

    // Rule 1: Extract Area de Práctica & Guía
    suggestions.push({
      targetFormat: 'area-de-practica',
      suggestedTitle: `Trámite Notarial bajo ${source.title}`,
      reasoning: `Sugerido a partir de la fuente ${source.type} ${source.id} para atención directa al cliente.`,
      priority: 'ALTA'
    });

    suggestions.push({
      targetFormat: 'guia',
      suggestedTitle: `Guía Definitiva de Aplicación de ${source.title}`,
      reasoning: 'Guía paso a paso para usuarios buscando entendimiento normativo.',
      priority: 'ALTA'
    });

    // Rule 2: Extract Concepto Jurídico
    source.topics.forEach(topic => {
      suggestions.push({
        targetFormat: 'concepto',
        suggestedTitle: `Concepto de ${topic} según ${source.title}`,
        reasoning: `Definición dogmática de ${topic} en el marco de la fuente ${source.id}.`,
        priority: 'MEDIA'
      });
    });

    // Rule 3: Extract FAQ & Caso Frecuente
    suggestions.push({
      targetFormat: 'faq',
      suggestedTitle: `¿Cómo afecta la norma ${source.title} en un divorcio en Colombia?`,
      reasoning: 'Extracción de respuesta rápida para Generative Engine Optimization (GEO).',
      priority: 'ALTA'
    });

    suggestions.push({
      targetFormat: 'caso-frecuente',
      suggestedTitle: `Implicaciones prácticas de ${source.title} en caso de conflicto entre cónyuges`,
      reasoning: 'Caso de uso contencioso vs voluntario.',
      priority: 'MEDIA'
    });

    // Rule 4: Extract Checklist & Recurso Descargable
    suggestions.push({
      targetFormat: 'checklist',
      suggestedTitle: `Checklist de Requisitos según ${source.title}`,
      reasoning: 'Lista de verificación documental.',
      priority: 'ALTA'
    });

    suggestions.push({
      targetFormat: 'recurso',
      suggestedTitle: `Modelo de Minuta ajustado a ${source.title}`,
      reasoning: 'Recurso premium descargable.',
      priority: 'MEDIA'
    });

    // Rule 5: Extract Comparativa & Cronología
    suggestions.push({
      targetFormat: 'cronologia',
      suggestedTitle: `Línea de Tiempo y Etapas de ${source.title}`,
      reasoning: 'Diagrama procedimental.',
      priority: 'BAJA'
    });

    return suggestions;
  }
}
