import { 
  SourceIngestionEngine, 
  KnowledgeExtractionEngine, 
  CitationEngine, 
  RelationshipEngine, 
  SemanticAuthorityEngine, 
  ContentGapAnalyzer, 
  QualityGateAI 
} from '../../src/lib/lie';
import { CONTENT_ASSETS_MASTER } from '../../src/lib/contentOS/registry';

function runLieUnitTests() {
  console.log('--- INICIANDO PRUEBAS UNITARIAS DE LEGAL INTELLIGENCE ENGINE (LIE v1) ---');
  let failures = 0;

  // Test 1: Ingestion Engine
  const sources = SourceIngestionEngine.getAllSources();
  if (sources.length >= 3) {
    console.log('✓ Test 1 Passed: SourceIngestionEngine cargo fuentes correctamente.');
  } else {
    console.error('❌ Test 1 Failed: Fuentes no registradas.');
    failures++;
  }

  // Test 2: Extraction Engine
  const sampleSource = sources[0];
  const suggestions = KnowledgeExtractionEngine.extractAssetSuggestions(sampleSource);
  if (suggestions.length >= 5) {
    console.log('✓ Test 2 Passed: KnowledgeExtractionEngine genero sugerencias de activos.');
  } else {
    console.error('❌ Test 2 Failed: Fallo en la extraccion de sugerencias.');
    failures++;
  }

  // Test 3: Citation Engine
  const citations = CitationEngine.getAllCitations();
  if (citations.length >= 3) {
    console.log('✓ Test 3 Passed: CitationEngine cargo citas normativas de autoridad.');
  } else {
    console.error('❌ Test 3 Failed: Citas no cargadas.');
    failures++;
  }

  // Test 4: Relationship Engine
  const edges = RelationshipEngine.getAllEdges();
  if (edges.length >= 5) {
    console.log('✓ Test 4 Passed: RelationshipEngine genero bordes del grafo de entidades.');
  } else {
    console.error('❌ Test 4 Failed: Bordes del grafo no generados.');
    failures++;
  }

  // Test 5: Semantic Authority Engine
  const sampleAsset = CONTENT_ASSETS_MASTER[0];
  const authorityReport = SemanticAuthorityEngine.calculateAuthorityScore(sampleAsset);
  if (authorityReport.score >= 70) {
    console.log('✓ Test 5 Passed: SemanticAuthorityEngine mejo el score (' + authorityReport.score + '/100).');
  } else {
    console.error('❌ Test 5 Failed: Score de autoridad invalido.');
    failures++;
  }

  // Test 6: Gap Analyzer
  const gaps = ContentGapAnalyzer.analyzeGaps();
  if (gaps.length >= 1) {
    console.log('✓ Test 6 Passed: ContentGapAnalyzer detecto ' + gaps.length + ' vacios tematicos.');
  } else {
    console.error('❌ Test 6 Failed: No se detectaron vacios.');
    failures++;
  }

  // Test 7: Quality Gate AI
  const auditResult = QualityGateAI.auditAsset(sampleAsset);
  if (auditResult.isPublishable) {
    console.log('✓ Test 7 Passed: QualityGateAI aprobo la publicacion del activo.');
  } else {
    console.error('❌ Test 7 Failed: QualityGateAI rechazo el activo valido.');
    failures++;
  }

  console.log('------------------------------------------------------------');
  if (failures > 0) {
    console.error('❌ PRUEBAS UNITARIAS LIE FALLIDAS (' + failures + ' errores)');
    process.exit(1);
  } else {
    console.log('✅ TODAS LAS PRUEBAS UNITARIAS LIE PASARON EXITOSAMENTE (7/7)');
    process.exit(0);
  }
}

runLieUnitTests();
