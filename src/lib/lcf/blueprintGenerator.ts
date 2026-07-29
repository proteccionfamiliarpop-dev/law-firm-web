import { ContentBlueprint } from './types';

export class ContentBlueprintGenerator {
  public static generateBlueprint(keyword: string): ContentBlueprint {
    const cleanKw = keyword.trim();
    const capitalizedKw = cleanKw.charAt(0).toUpperCase() + cleanKw.slice(1);

    return {
      keyword: cleanKw,
      title: `${capitalizedKw}: Guía y Marco Legal en Colombia (2026)`,
      metaDescription: `Análisis legal completo sobre ${cleanKw} en Colombia. Requisitos, trámites, jurisprudencia y asesoría apoderada por el Dr. Alexander Solano.`,
      h1: capitalizedKw,
      h2Headings: [
        `1. Definición y Naturaleza Jurídica de ${capitalizedKw}`,
        `2. Presupuestos y Requisitos de Procedencia`,
        '3. Procedimiento Notarial o Judicial Paso a Paso',
        '4. Excepciones y Riesgos Legales',
        '5. Preguntas Frecuentes y Orientación de Abogado'
      ],
      h3Headings: [
        'Documentos Exigidos por la Ley',
        'Tiempos y Derechos Notariales/Judiciales',
        'Efectos Patrimoniales'
      ],
      faqs: [
        { question: `¿Qué es exactamente ${cleanKw}?`, targetAnswerType: 'Definición legal directa' },
        { question: `¿Cuáles son los costos de ${cleanKw}?`, targetAnswerType: 'Desglose de tarifa y honorarios' },
        { question: `¿Cuánto tiempo tarda el trámite de ${cleanKw}?`, targetAnswerType: 'Estimación en días hábiles' }
      ],
      targetEntities: ['Derecho de Familia', 'Código Civil Colombiano', 'Superintendencia de Notariado y Registro'],
      applicableNorms: ['Ley 962 de 2005', 'Decreto 4436 de 2005', 'Código General del Proceso'],
      jurisprudenceReferences: ['Sentencia C-577 de 2011 Corte Constitucional'],
      relatedResources: ['minuta-divorcio-mutuo-acuerdo-notaria', 'checklist-documentos-divorcio-notarial'],
      relatedCalculators: ['calculadora-notaria-o-juez'],
      targetCities: ['Popayán', 'Cali'],
      ctaType: 'Agendamiento de Consulta Privada en Ley 1581',
      requiredSchemas: ['LegalService', 'HowTo', 'FAQPage', 'BreadcrumbList']
    };
  }
}
