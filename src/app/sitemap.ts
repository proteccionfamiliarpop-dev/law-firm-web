import { MetadataRoute } from 'next';
import { KNOWLEDGE_NODES } from '@/lib/knowledgeGraph';

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

  // Dynamic Knowledge Graph Nodes (Scalable to 500+ pages)
  const knowledgeRoutes: MetadataRoute.Sitemap = KNOWLEDGE_NODES.map((node) => {
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

  return [...staticRoutes, ...knowledgeRoutes];
}
