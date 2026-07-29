import { ContentAsset, AssetCluster, PublishStatus } from './types';
import { KNOWLEDGE_NODES } from '../knowledgeGraph';
import { KNOWLEDGE_ARTICLES } from '../knowledgeCenter';
import { PREMIUM_RESOURCES } from '../resourcesLibrary';

// Unified Asset Master Repository
export const CONTENT_ASSETS_MASTER: ContentAsset[] = [
  // 1. Nodos del Knowledge Graph
  ...KNOWLEDGE_NODES.map(node => ({
    id: node.id,
    cluster: node.cluster as AssetCluster,
    slug: node.slug,
    title: node.title,
    subtitle: node.subtitle,
    metaTitle: node.metaTitle,
    metaDescription: node.metaDescription,
    keywords: node.keywords,
    summary: node.summary,
    status: 'published' as PublishStatus,
    version: 'v2026.1',
    author: node.author,
    authorCardId: 'T.P. Nº. 182.354 CSJ',
    dateCreated: node.datePublished,
    dateModified: node.dateModified,
    topicalAuthorityScore: node.cluster === 'areas-de-practica' ? 95 : 85,
    legalBasis: node.legalBasis,
    bibliography: [
      'Superintendencia de Notariado y Registro (2026)',
      'Código General del Proceso y Ley 962 de 2005'
    ],
    sections: node.sections.map((sec, idx) => ({
      id: `sec-${idx}`,
      heading: sec.heading,
      body: sec.body
    })),
    relatedAssetIds: node.relatedNodeIds,
    faqs: node.faqs,
    aiQaList: node.aiQaList
  })),

  // 2. Artículos del Centro de Conocimiento
  ...KNOWLEDGE_ARTICLES.map(art => ({
    id: art.id,
    cluster: 'conceptos' as AssetCluster,
    slug: art.slug,
    title: art.title,
    subtitle: art.subtitle,
    metaTitle: art.metaTitle,
    metaDescription: art.metaDescription,
    keywords: art.keywords,
    summary: art.subtitle,
    status: 'published' as PublishStatus,
    version: 'v2026.1',
    author: art.author.name,
    authorCardId: art.author.cardId,
    dateCreated: art.datePublished,
    dateModified: art.dateModified,
    topicalAuthorityScore: 98,
    legalBasis: art.jurisprudence.map(j => `${j.tribunal} - ${j.sentenceOrLaw}`),
    bibliography: art.bibliography.map(b => b.citation),
    sections: art.sections,
    relatedAssetIds: art.relatedArticleIds,
    faqs: art.faqs
  })),

  // 3. Recursos Premium
  ...PREMIUM_RESOURCES.map(res => ({
    id: res.id,
    cluster: 'recursos' as AssetCluster,
    slug: res.slug,
    title: res.title,
    subtitle: res.subtitle,
    metaTitle: res.metaTitle,
    metaDescription: res.metaDescription,
    keywords: res.keywords,
    summary: res.subtitle,
    status: 'published' as PublishStatus,
    version: res.version,
    author: res.author,
    authorCardId: 'T.P. Nº. 182.354 CSJ',
    dateCreated: res.datePublished,
    dateModified: res.dateModified,
    topicalAuthorityScore: 90,
    legalBasis: res.legalBasis,
    bibliography: res.bibliography,
    sections: res.sections.map((sec, idx) => ({
      id: `sec-res-${idx}`,
      heading: sec.heading,
      body: sec.body
    })),
    relatedAssetIds: res.relatedNodeIds,
    fileDetails: {
      fileFormat: res.fileFormat,
      fileSize: res.fileSize,
      downloadUrl: res.downloadUrl
    }
  }))
];

// Query Methods
export function getAssetById(id: string): ContentAsset | undefined {
  return CONTENT_ASSETS_MASTER.find(a => a.id === id);
}

export function getAssetBySlug(cluster: AssetCluster, slug: string): ContentAsset | undefined {
  return CONTENT_ASSETS_MASTER.find(a => a.cluster === cluster && a.slug === slug);
}

export function getAssetsByCluster(cluster: AssetCluster): ContentAsset[] {
  return CONTENT_ASSETS_MASTER.filter(a => a.cluster === cluster && a.status === 'published');
}

export function getPublishedAssets(): ContentAsset[] {
  return CONTENT_ASSETS_MASTER.filter(a => a.status === 'published');
}
