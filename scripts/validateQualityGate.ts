import { KNOWLEDGE_NODES } from '../src/lib/knowledgeGraph';
import { KNOWLEDGE_ARTICLES } from '../src/lib/knowledgeCenter';
import { PREMIUM_RESOURCES } from '../src/lib/resourcesLibrary';
import { DR_ALEXANDER_SOLANO_EEAT, generatePersonSchema } from '../src/lib/eeatData';

function validateQualityGate() {
  console.log('--- INICIANDO AUDITORIA DE CALIDAD ENTERPRISE DE LINKS & ESQUEMAS ---');
  let errors = 0;

  // 1. Validar Nodos del Knowledge Graph
  console.log('1. Validando ' + KNOWLEDGE_NODES.length + ' Nodos del Grafo de Conocimiento...');
  KNOWLEDGE_NODES.forEach((node) => {
    if (!node.slug || !node.title || !node.metaTitle || !node.metaDescription) {
      console.error('Error en Nodo ID [' + node.id + ']: Metadatos incompletos.');
      errors++;
    }
  });

  // 2. Validar Artículos del Centro de Conocimiento
  console.log('2. Validando ' + KNOWLEDGE_ARTICLES.length + ' Articulos del Centro de Conocimiento...');
  KNOWLEDGE_ARTICLES.forEach((art) => {
    if (!art.slug || !art.title || !art.author || !art.tableOfContents) {
      console.error('Error en Articulo ID [' + art.id + ']: Estructura incompleta.');
      errors++;
    }
  });

  // 3. Validar Recursos Premium
  console.log('3. Validando ' + PREMIUM_RESOURCES.length + ' Recursos Premium...');
  PREMIUM_RESOURCES.forEach((res) => {
    if (!res.slug || !res.version || !res.fileFormat) {
      console.error('Error en Recurso ID [' + res.id + ']: Falta version o formato.');
      errors++;
    }
  });

  // 4. Validar Esquema Person EEAT
  console.log('4. Validando Esquema JSON-LD Person (Dr. Alexander Solano)...');
  const personSchema = generatePersonSchema(DR_ALEXANDER_SOLANO_EEAT);
  if (!personSchema.name || !personSchema.identifier || !personSchema.sameAs) {
    console.error('Error en Person Schema: Falta identificacion o credenciales.');
    errors++;
  } else {
    console.log('Person Schema verificado con ' + personSchema.sameAs.length + ' enlaces de autoridad verified.');
  }

  console.log('------------------------------------------------------------');
  if (errors > 0) {
    console.error('AUDITORIA FALLIDA: Se encontraron ' + errors + ' errores.');
    process.exit(1);
  } else {
    console.log('GATEKEEPER DE CALIDAD APROBADO: Todos los esquemas y enlaces son validos.');
    process.exit(0);
  }
}

validateQualityGate();
