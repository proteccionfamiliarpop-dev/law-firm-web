import { LegalCitation, CitationAuthority } from './types';

export const CITATION_REGISTRY: LegalCitation[] = [
  {
    id: 'cit-ley-962-art-34',
    type: 'Ley',
    authority: 'Leyes',
    date: '2005-07-08',
    validityStatus: 'Vigente',
    officialUrl: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=1667794',
    citedArticle: 'Artículo 34 de la Ley 962 de 2005',
    relevantSnippet: 'Podrá solicitarse ante notario el divorcio del matrimonio civil o la cesación de los efectos civiles de los matrimonios religiosos por mutuo acuerdo de los cónyuges a través de apoderado.',
    lastValidationDate: '2026-07-29'
  },
  {
    id: 'cit-cp-art-42',
    type: 'Ley',
    authority: 'Constitución Política',
    date: '1991-07-07',
    validityStatus: 'Vigente',
    officialUrl: 'https://www.secretariasenado.gov.co/senado/basedoc/constitucion_politica_1991.html',
    citedArticle: 'Artículo 42 de la Constitución Política de Colombia',
    relevantSnippet: 'La familia es el núcleo fundamental de la sociedad. Se constituye por vínculos naturales o jurídicos, por la decisión libre de un hombre y una mujer de contraer matrimonio o por la voluntad responsable de conformarla.',
    lastValidationDate: '2026-07-29'
  },
  {
    id: 'cit-sentencia-c-577',
    type: 'Sentencia',
    authority: 'Corte Constitucional',
    date: '2011-07-26',
    validityStatus: 'Vigente',
    officialUrl: 'https://www.corteconstitucional.gov.co/relatoria/2011/C-577-11.htm',
    citedArticle: 'Ratio Decidendi Sentencia C-577/11',
    relevantSnippet: 'La protección constitucional a la familia ampara las diversas formas de asociación afectiva y libre en Colombia.',
    lastValidationDate: '2026-07-29'
  }
];

export class CitationEngine {
  public static getCitationsByAuthority(authority: CitationAuthority): LegalCitation[] {
    return CITATION_REGISTRY.filter(c => c.authority === authority);
  }

  public static addCitation(citation: LegalCitation): void {
    const exists = CITATION_REGISTRY.some(c => c.id === citation.id);
    if (!exists) {
      CITATION_REGISTRY.push(citation);
    }
  }

  public static getAllCitations(): LegalCitation[] {
    return CITATION_REGISTRY;
  }
}
