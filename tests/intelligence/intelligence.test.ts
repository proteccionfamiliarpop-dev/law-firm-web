import { 
  SearchIntelligenceEngine, 
  AIVisibilityTracker, 
  UserJourneyAnalyzer, 
  ContentPerformanceEngine, 
  RecommendationEngine, 
  PredictiveContentPlanner, 
  QuarterlyReportGenerator, 
  StrategicKPIEngine, 
  EnterpriseDecisionEngine 
} from '../../src/lib/intelligence';
import { CONTENT_ASSETS_MASTER } from '../../src/lib/contentOS/registry';

function runEifUnitTests() {
  console.log('--- INICIANDO PRUEBAS UNITARIAS DE ENTERPRISE INTELLIGENCE & FEEDBACK ENGINE (EIF) ---');
  let failures = 0;

  // Test 1: SearchIntelligenceEngine
  const searchHealth = SearchIntelligenceEngine.getOverallSearchHealth();
  if (searchHealth.totalImpressions > 0) {
    console.log('✓ Test 1 Passed: SearchIntelligenceEngine calculo salud SEO (' + searchHealth.totalImpressions + ' impresiones).');
  } else {
    console.error('❌ Test 1 Failed: Salud SEO invalida.');
    failures++;
  }

  // Test 2: AIVisibilityTracker
  const aiScore = AIVisibilityTracker.calculateAIVisibilityScore();
  if (aiScore >= 50) {
    console.log('✓ Test 2 Passed: AIVisibilityTracker calculo score RAG (' + aiScore + '/100).');
  } else {
    console.error('❌ Test 2 Failed: Score RAG invalido.');
    failures++;
  }

  // Test 3: UserJourneyAnalyzer
  const convRate = UserJourneyAnalyzer.calculateConversionRate();
  if (convRate > 0) {
    console.log('✓ Test 3 Passed: UserJourneyAnalyzer tasa de conversion (' + convRate + '%).');
  } else {
    console.error('❌ Test 3 Failed: Tasa de conversion invalida.');
    failures++;
  }

  // Test 4: ContentPerformanceEngine
  const sampleAsset = CONTENT_ASSETS_MASTER[0];
  const perf = ContentPerformanceEngine.evaluatePerformance(sampleAsset);
  if (perf.views > 0) {
    console.log('✓ Test 4 Passed: ContentPerformanceEngine evaluo rendimiento (' + perf.views + ' vistas).');
  } else {
    console.error('❌ Test 4 Failed: Rendimiento invalido.');
    failures++;
  }

  // Test 5: RecommendationEngine
  const recs = RecommendationEngine.generateRecommendations();
  if (recs.length >= 1) {
    console.log('✓ Test 5 Passed: RecommendationEngine genero ' + recs.length + ' recomendaciones.');
  } else {
    console.error('❌ Test 5 Failed: Recomendaciones vacias.');
    failures++;
  }

  // Test 6: PredictiveContentPlanner
  const planned = PredictiveContentPlanner.generateTopPlannedArticles();
  if (planned.length >= 5) {
    console.log('✓ Test 6 Passed: PredictiveContentPlanner planifico ' + planned.length + ' articulos proactivos.');
  } else {
    console.error('❌ Test 6 Failed: Planificacion vacia.');
    failures++;
  }

  // Test 7: QuarterlyReportGenerator
  const report = QuarterlyReportGenerator.generateReport();
  if (report.strengths.length > 0) {
    console.log('✓ Test 7 Passed: QuarterlyReportGenerator genero reporte trimestral (' + report.quarter + ').');
  } else {
    console.error('❌ Test 7 Failed: Reporte trimestral invalido.');
    failures++;
  }

  // Test 8: StrategicKPIEngine
  const kpis = StrategicKPIEngine.calculateAllKpis();
  if (kpis.length >= 8) {
    console.log('✓ Test 8 Passed: StrategicKPIEngine calculo ' + kpis.length + ' KPIs de dominio.');
  } else {
    console.error('❌ Test 8 Failed: KPIs insuficientes.');
    failures++;
  }

  // Test 9: EnterpriseDecisionEngine
  const decisions = EnterpriseDecisionEngine.getStrategicDecisions();
  if (decisions.length >= 3) {
    console.log('✓ Test 9 Passed: EnterpriseDecisionEngine respondio ' + decisions.length + ' decisiones estrategicas.');
  } else {
    console.error('❌ Test 9 Failed: Decisiones insuficientes.');
    failures++;
  }

  console.log('------------------------------------------------------------');
  if (failures > 0) {
    console.error('❌ PRUEBAS UNITARIAS EIF FALLIDAS (' + failures + ' errores)');
    process.exit(1);
  } else {
    console.log('✅ TODAS LAS PRUEBAS UNITARIAS EIF PASARON EXITOSAMENTE (9/9)');
    process.exit(0);
  }
}

runEifUnitTests();
