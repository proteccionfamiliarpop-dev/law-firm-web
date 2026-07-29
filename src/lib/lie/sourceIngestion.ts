import { LegalSource, LegalSourceType } from './types';

export const LEGAL_SOURCES_REGISTRY: LegalSource[] = [
  {
    id: 'src-ley-962-2005',
    type: 'Ley',
    title: 'Ley 962 de 2005 (Artículo 34) - Ley de Anti-trámites y Divorcio Notarial',
    jurisdiction: 'Colombia',
    issuingAuthority: 'Congreso de la República de Colombia',
    date: '2005-07-08',
    validityStatus: 'Vigente',
    keywords: ['Ley 962 de 2005', 'Divorcio notarial', 'Mutuo acuerdo notaria'],
    topics: ['Divorcio', 'Derecho Notarial', 'Derecho de Familia'],
    relatedArticles: ['Art. 34 Ley 962'],
    crossReferences: ['src-decreto-4436-2005', 'src-codigo-civil-154'],
    officialUrl: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=1667794'
  },
  {
    id: 'src-decreto-4436-2005',
    type: 'Decreto',
    title: 'Decreto 4436 de 2005 - Reglamentación del Divorcio ante Notario',
    jurisdiction: 'Colombia',
    issuingAuthority: 'Ministerio de Justicia y del Derecho',
    date: '2005-11-28',
    validityStatus: 'Vigente',
    keywords: ['Decreto 4436 de 2005', 'Reglamento divorcio notario'],
    topics: ['Divorcio', 'Derecho Notarial'],
    relatedArticles: ['Art. 1', 'Art. 2'],
    crossReferences: ['src-ley-962-2005'],
    officialUrl: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=18412'
  },
  {
    id: 'src-sentencia-c-577-11',
    type: 'Sentencia',
    title: 'Sentencia C-577 de 2011 - Protección Constitucional a Familias Diversas',
    jurisdiction: 'Colombia',
    issuingAuthority: 'Corte Constitucional de Colombia',
    date: '2011-07-26',
    validityStatus: 'Vigente',
    keywords: ['Sentencia C-577 de 2011', 'Familia diversa', 'Art 42 Constitución'],
    topics: ['Derecho Constitucional', 'Derecho de Familia'],
    relatedArticles: ['Art. 42 C.P.'],
    crossReferences: ['src-codigo-civil-154'],
    officialUrl: 'https://www.corteconstitucional.gov.co/relatoria/2011/C-577-11.htm'
  }
];

export class SourceIngestionEngine {
  public static registerSource(source: LegalSource): void {
    const exists = LEGAL_SOURCES_REGISTRY.some(s => s.id === source.id);
    if (!exists) {
      LEGAL_SOURCES_REGISTRY.push(source);
    }
  }

  public static getSourceById(id: string): LegalSource | undefined {
    return LEGAL_SOURCES_REGISTRY.find(s => s.id === id);
  }

  public static getSourcesByType(type: LegalSourceType): LegalSource[] {
    return LEGAL_SOURCES_REGISTRY.filter(s => s.type === type);
  }

  public static getAllSources(): LegalSource[] {
    return LEGAL_SOURCES_REGISTRY;
  }
}
