import { 
  TopicOpportunityEngine, 
  ContentBlueprintGenerator, 
  SemanticCoverageAnalyzer, 
  EntityDensityAnalyzer, 
  CitationCompletenessChecker, 
  InternalLinkingOptimizerV2, 
  GEOAnswerEvaluator, 
  CannibalizationPredictorAI, 
  AuthorityGrowthSimulator 
} from '../../src/lib/lcf';
import { CONTENT_ASSETS_MASTER } from '../../src/lib/contentOS/registry';

function runLcfUnitTests() {
  console.log('--- INICIANDO PRUEBAS UNITARIAS DE LEGAL CONTENT FACTORY (LCF) ---');
  let failures = 0;

  // Test 1: TopicOpportunityEngine
  const opps = TopicOpportunityEngine.scanOpportunities();
  if (opps.length >= 1) {
    console.log('✓ Test 1 Passed: TopicOpportunityEngine detecto oportunidades.');
  } else {
    console.error('❌ Test 1 Failed: Oportunidades no detectadas.');
    failures++;
  }

  // Test 2: ContentBlueprintGenerator
  const blueprint = ContentBlueprintGenerator.generateBlueprint('Divorcio Notarial');
  if (blueprint.h2Headings.length >= 4) {
    console.log('✓ Test 2 Passed: ContentBlueprintGenerator genero la estructura.');
  } else {
    console.error('❌ Test 2 Failed: Blueprint incompleto.');
    failures++;
  }

  // Test 3: SemanticCoverageAnalyzer
  const sampleAsset = CONTENT_ASSETS_MASTER[0];
  const coverage = SemanticCoverageAnalyzer.analyzeAssetCoverage(sampleAsset);
  if (coverage.coveragePercentage >= 50) {
    console.log('✓ Test 3 Passed: SemanticCoverageAnalyzer calculo la cobertura (' + coverage.coveragePercentage + '%).');
  } else {
    console.error('❌ Test 3 Failed: Cobertura invalida.');
    failures++;
  }

  // Test 4: EntityDensityAnalyzer
  const density = EntityDensityAnalyzer.analyzeEntityDensity(sampleAsset);
  if (density.densityStatus === 'OPTIMAL') {
    console.log('✓ Test 4 Passed: EntityDensityAnalyzer estado OPTIMAL.');
  } else {
    console.error('❌ Test 4 Failed: Estado de densidad invalido.');
    failures++;
  }

  // Test 5: CitationCompletenessChecker
  const citationCheck = CitationCompletenessChecker.validateCitations(sampleAsset);
  if (citationCheck.isComplete) {
    console.log('✓ Test 5 Passed: CitationCompletenessChecker valido citas de ley.');
  } else {
    console.error('❌ Test 5 Failed: Citas invalidas.');
    failures++;
  }

  // Test 6: InternalLinkingOptimizerV2
  const linkStrategy = InternalLinkingOptimizerV2.optimizeAssetLinks(sampleAsset);
  if (linkStrategy.idealLinkCount >= 3) {
    console.log('✓ Test 6 Passed: InternalLinkingOptimizerV2 estrategia recomendada.');
  } else {
    console.error('❌ Test 6 Failed: Estrategia invalida.');
    failures++;
  }

  // Test 7: GEOAnswerEvaluator
  const geoScore = GEOAnswerEvaluator.evaluateAsset(sampleAsset);
  if (geoScore.score >= 70) {
    console.log('✓ Test 7 Passed: GEOAnswerEvaluator score RAG (' + geoScore.score + '/100).');
  } else {
    console.error('❌ Test 7 Failed: Score GEO invalido.');
    failures++;
  }

  // Test 8: CannibalizationPredictorAI
  const pred = CannibalizationPredictorAI.predictCannibalization('Divorcio en Colombia', ['Divorcio', 'Notaria']);
  if (pred.recommendation) {
    console.log('✓ Test 8 Passed: CannibalizationPredictorAI recomendacion (' + pred.recommendation + ').');
  } else {
    console.error('❌ Test 8 Failed: Predictor de canibalizacion fallo.');
    failures++;
  }

  // Test 9: AuthorityGrowthSimulator
  const impact = AuthorityGrowthSimulator.simulatePublishImpact(sampleAsset);
  if (impact.projectedDomainAuthorityIncrease > 0) {
    console.log('✓ Test 9 Passed: AuthorityGrowthSimulator impacto proyectado.');
  } else {
    console.error('❌ Test 9 Failed: Simulador de autoridad fallo.');
    failures++;
  }

  console.log('------------------------------------------------------------');
  if (failures > 0) {
    console.error('❌ PRUEBAS UNITARIAS LCF FALLIDAS (' + failures + ' errores)');
    process.exit(1);
  } else {
    console.log('✅ TODAS LAS PRUEBAS UNITARIAS LCF PASARON EXITOSAMENTE (9/9)');
    process.exit(0);
  }
}

runLcfUnitTests();
