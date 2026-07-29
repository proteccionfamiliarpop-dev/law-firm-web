'use client';

import Link from 'next/link';
import { ChevronRight, Scale, BookOpen, ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';
import { KnowledgeNode, getRelatedNodes, getClusterPath } from '@/lib/knowledgeGraph';

interface InternalLinkEngineProps {
  currentNode: KnowledgeNode;
}

export function KnowledgeBreadcrumbs({ currentNode }: InternalLinkEngineProps) {
  const clusterNames: Record<string, string> = {
    'areas-de-practica': 'Áreas de Práctica',
    'guias': 'Guías Jurídicas',
    'conceptos': 'Conceptos Jurídicos',
    'jurisprudencia': 'Jurisprudencia & Normativa',
    'casos-frecuentes': 'Casos Frecuentes',
    'preguntas-frecuentes': 'Preguntas Frecuentes',
    'recursos': 'Recursos Descargables',
    'herramientas': 'Calculadoras & Herramientas',
    'servicios': 'Directorio Local'
  };

  return (
    <nav aria-label="Breadcrumb" className="bg-[#F3EFEA] border-b border-[#E5DFD5] py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-xs text-[#666666]">
        <Link href="/" className="hover:text-[#0B2818] transition-colors">Inicio</Link>
        <ChevronRight className="w-3.5 h-3.5 text-[#888888]" />
        <span className="text-[#555555]">
          {clusterNames[currentNode.cluster] || currentNode.cluster}
        </span>
        <ChevronRight className="w-3.5 h-3.5 text-[#888888]" />
        <span className="font-bold text-[#0B2818] truncate max-w-xs">{currentNode.title}</span>
      </div>
    </nav>
  );
}

export default function InternalLinkEngine({ currentNode }: InternalLinkEngineProps) {
  const relatedNodes = getRelatedNodes(currentNode);

  return (
    <aside className="my-12 p-6 sm:p-8 bg-[#FAF8F5] border-2 border-[#E5DFD5] rounded-3xl space-y-6 shadow-sm">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B2818] font-serif border-b border-[#E5DFD5] pb-3">
        <Scale className="w-4 h-4 text-[#0B2818]" />
        <span>Grafo Jurídico Relacionado • Topic Clusters</span>
      </div>

      <p className="text-xs text-[#555555] leading-relaxed">
        Explore los conceptos, jurisprudencia y guías jurídicas interconectadas con <strong className="text-[#1A1A1A]">{currentNode.title}</strong>:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {relatedNodes.map((node) => (
          <Link
            key={node.id}
            href={getClusterPath(node.cluster, node.slug)}
            className="group p-4 rounded-2xl bg-[#FAF8F5] hover:bg-[#F3EFEA] border border-[#E5DFD5] hover:border-[#0B2818] transition-all space-y-2 flex flex-col justify-between"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#0B2818] bg-[#0B2818]/10 px-2 py-0.5 rounded">
                {node.cluster.replace('-', ' ')}
              </span>
              <h4 className="text-xs font-serif font-bold text-[#1A1A1A] group-hover:text-[#0B2818] transition-colors line-clamp-2">
                {node.title}
              </h4>
            </div>
            <div className="text-[11px] font-bold text-[#0B2818] flex items-center gap-1 pt-2">
              <span>Ver Análisis Legal</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      {currentNode.legalBasis.length > 0 && (
        <div className="pt-4 border-t border-[#E5DFD5] space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#0B2818] flex items-center gap-1.5 font-serif">
            <BookOpen className="w-3.5 h-3.5" /> Fundamento Normativo en Colombia
          </div>
          <div className="flex flex-wrap gap-2">
            {currentNode.legalBasis.map((basis, idx) => (
              <span key={idx} className="text-[11px] font-semibold bg-[#E5DFD5]/60 text-[#1A1A1A] px-2.5 py-1 rounded-lg border border-[#D8D1C5]">
                {basis}
              </span>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
