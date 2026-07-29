import { MetadataRoute } from 'next';
import { KNOWLEDGE_NODES } from '@/lib/knowledgeGraph';
import { KNOWLEDGE_ARTICLES, KNOWLEDGE_CATEGORIES } from '@/lib/knowledgeCenter';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://proteccionfamiliar.co';

  // Base core pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date('2026-07-29'),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/centro-de-conocimiento`,
      lastModified: new Date('2026-07-29'),
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/politica-de-privacidad`,
      lastModified: new Date('2026-07-29'),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terminos-legales`,
      lastModified: new Date('2026-07-29'),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];

  // Knowledge Graph Nodes
  const knowledgeNodesRoutes: MetadataRoute.Sitemap = KNOWLEDGE_NODES.map((node) => {
    let priority = 0.8;
    if (node.cluster === 'areas-de-practica' || node.cluster === 'servicios') {
      priority = 0.9;
    } else if (node.cluster === 'herramientas' || node.cluster === 'guias') {
      priority = 0.85;
    }

    return {
      url: `${baseUrl}/${node.cluster}/${node.slug}`,
      lastModified: new Date(node.dateModified),
      changeFrequency: 'weekly',
      priority,
    };
  });

  // Knowledge Center Categories
  const kcCategoryRoutes: MetadataRoute.Sitemap = KNOWLEDGE_CATEGORIES.map((cat) => ({
    url: `${baseUrl}/centro-de-conocimiento/${cat.slug}`,
    lastModified: new Date('2026-07-29'),
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // Knowledge Center Articles (Scalable to thousands of articles)
  const kcArticleRoutes: MetadataRoute.Sitemap = KNOWLEDGE_ARTICLES.map((art) => ({
    url: `${baseUrl}/centro-de-conocimiento/${art.category.slug}/${art.slug}`,
    lastModified: new Date(art.dateModified),
    changeFrequency: 'weekly',
    priority: 0.88,
  }));

  return [...staticRoutes, ...knowledgeNodesRoutes, ...kcCategoryRoutes, ...kcArticleRoutes];
}
