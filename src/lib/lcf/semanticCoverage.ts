import { CoverageAnalysisResult } from './types';
import { ContentAsset } from '../contentOS/types';

export class SemanticCoverageAnalyzer {
  private static DIMENSIONS = [
    { key: 'que_es', label: 'Qué es (Definición)', keywords: ['es el', 'definicion', 'consiste en', 'concepto'] },
    { key: 'quien', label: 'Quién (Perfil de persona)', keywords: ['quien', 'conyuges', 'padres', 'partes', 'persona'] },
    { key: 'cuando', label: 'Cuándo (Presupuesto de hecho)', keywords: ['cuando', 'momento', 'plazo', 'oportunidad'] },
    { key: 'como', label: 'Cómo (Procedimiento)', keywords: ['como', 'procedimiento', 'paso a paso', 'tramite'] },
    { key: 'costos', label: 'Costos (Tarifas y honorarios)', keywords: ['costo', 'tarifa', 'derechos notariales', 'honorarios'] },
    { key: 'requisitos', label: 'Requisitos (Documentos)', keywords: ['requisitos', 'documentos', 'registros', 'paz y salvo'] },
    { key: 'riesgos', label: 'Riesgos (Consecuencias)', keywords: ['riesgos', 'consecuencias', 'sancion', 'embargo'] },
    { key: 'excepciones', label: 'Excepciones (No aplica)', keywords: ['excepcion', 'no aplica', 'improcedente', 'salvo'] },
    { key: 'normativa', label: 'Normativa (Leyes)', keywords: ['ley', 'decreto', 'codigo', 'articulo'] },
    { key: 'jurisprudencia', label: 'Jurisprudencia (Cortes)', keywords: ['sentencia', 'corte constitucional', 'corte suprema', 'precedente'] },
    { key: 'casos_reales', label: 'Casos Reales', keywords: ['caso', 'ejemplo', 'situacion', 'práctica'] },
    { key: 'errores_frecuentes', label: 'Errores Frecuentes', keywords: ['error', 'equivocacion', 'devolucion', 'rechazo'] }
  ];

  public static analyzeAssetCoverage(asset: ContentAsset): CoverageAnalysisResult {
    const fullText = (
      asset.title + ' ' +
      asset.summary + ' ' +
      asset.sections.map(s => s.heading + ' ' + s.body).join(' ') + ' ' +
      (asset.aiQaList?.map(q => q.question + ' ' + q.answer).join(' ') || '')
    ).toLowerCase();

    const answeredDimensions: string[] = [];
    const missingDimensions: string[] = [];

    this.DIMENSIONS.forEach(dim => {
      const found = dim.keywords.some(kw => fullText.includes(kw));
      if (found) {
        answeredDimensions.push(dim.label);
      } else {
        missingDimensions.push(dim.label);
      }
    });

    const coveragePercentage = Math.round((answeredDimensions.length / this.DIMENSIONS.length) * 100);

    return {
      coveragePercentage,
      answeredDimensions,
      missingDimensions
    };
  }
}
