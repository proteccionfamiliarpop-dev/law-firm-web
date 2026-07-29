import { ContentAsset } from './types';
import { getAssetById, CONTENT_ASSETS_MASTER } from './registry';
import { EnterpriseLogger } from '../logger';

export class ContentOSPipeline {
  public static reviewAndApproveAsset(assetId: string, reviewerName: string): boolean {
    const asset = getAssetById(assetId);
    if (!asset) {
      EnterpriseLogger.error('Content OS Pipeline: Asset no encontrado', undefined, { assetId });
      return false;
    }

    asset.status = 'approved';
    asset.dateModified = new Date().toISOString().split('T')[0];
    
    EnterpriseLogger.info('Content OS Pipeline: Activo aprobado por abogado revisor', {
      assetId,
      reviewerName,
      title: asset.title
    });

    return true;
  }

  public static stageForProduction(assetId: string): boolean {
    const asset = getAssetById(assetId);
    if (!asset || (asset.status !== 'approved' && asset.status !== 'published')) {
      EnterpriseLogger.warn('Content OS Pipeline: El activo debe ser aprobado por revisión humana antes del despliegue', { assetId });
      return false;
    }

    asset.status = 'published';
    EnterpriseLogger.info('Content OS Pipeline: Activo listo para despliegue en producción SSG', { assetId, slug: asset.slug });
    return true;
  }

  public static generateJsonLdSchema(asset: ContentAsset) {
    const baseUrl = 'https://proteccionfamiliar.co';

    let schemaType = 'Article';
    if (asset.cluster === 'areas-de-practica' || asset.cluster === 'servicios') {
      schemaType = 'LegalService';
    } else if (asset.cluster === 'guias' || asset.cluster === 'herramientas') {
      schemaType = 'HowTo';
    } else if (asset.cluster === 'conceptos') {
      schemaType = 'DefinedTerm';
    } else if (asset.cluster === 'jurisprudencia') {
      schemaType = 'Legislation';
    } else if (asset.cluster === 'recursos') {
      schemaType = 'DigitalDocument';
    }

    return {
      '@context': 'https://schema.org',
      '@type': schemaType,
      '@id': `${baseUrl}/${asset.cluster}/${asset.slug}#entity`,
      'name': asset.title,
      'headline': asset.title,
      'description': asset.metaDescription,
      'inLanguage': 'es-CO',
      'version': asset.version,
      'dateCreated': asset.dateCreated,
      'dateModified': asset.dateModified,
      'author': {
        '@type': 'Person',
        'name': asset.author,
        'identifier': asset.authorCardId,
        'url': `${baseUrl}/dr-alexander-solano`
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Protección Familiar',
        'url': baseUrl
      },
      'mainEntityOfPage': `${baseUrl}/${asset.cluster}/${asset.slug}`
    };
  }
}
