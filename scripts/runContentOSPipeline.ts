import { ContentOSValidator } from '../src/lib/contentOS/validator';

function runContentOSAudit() {
  console.log('=== EJECUTANDO AUDITORIA CONTENT OS ===');

  const report = ContentOSValidator.runFullQualityAudit();

  console.log('REPORTE DE AUDITORIA (' + report.timestamp + '):');
  console.log('- Total de Activos Registrados: ' + report.totalAssetsCount);
  console.log('- Activos Publicados para SSG: ' + report.publishedAssetsCount);
  console.log('- Enlaces Internos Rotos: ' + report.brokenLinksCount);
  console.log('- Riesgos de Canibalizacion Semantica: ' + report.cannibalizationRisks.length);
  console.log('- Errores de Esquema/Metadatos: ' + report.schemaValidationErrorsCount);
  console.log('SALUD GENERAL DEL CONTENT OS: ' + report.overallSystemHealth);

  if (report.overallSystemHealth === 'CRITICAL') {
    console.error('AUDITORIA FALLIDA: El Content OS tiene errores criticos.');
    process.exit(1);
  } else {
    console.log('AUDITORIA APROBADA: Content OS listo a escala.');
    process.exit(0);
  }
}

runContentOSAudit();
