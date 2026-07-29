'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Scale, Search, Filter, Share2, Award, ArrowRight, Layers, Eye } from 'lucide-react';
import { CONTENT_ASSETS_MASTER } from '@/lib/contentOS/registry';
import { RelationshipEngine } from '@/lib/lie/relationshipEngine';
import { SemanticAuthorityEngine } from '@/lib/lie/semanticAuthority';

export default function KnowledgeGraphVisualizer() {
  const [selectedCluster, setSelectedCluster] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const edges = RelationshipEngine.getAllEdges();

  const filteredAssets = CONTENT_ASSETS_MASTER.filter((asset) => {
    const matchesCluster = selectedCluster === 'ALL' || asset.cluster === selectedCluster;
    const matchesSearch = searchQuery === '' || 
      asset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCluster && matchesSearch;
  });

  return (
    <div className="space-y-8 my-8">
      {/* FILTER & SEARCH BAR */}
      <div className="p-6 bg-[#F3EFEA] border-2 border-[#0B2818] rounded-3xl space-y-4 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#0B2818] text-amber-300 flex items-center justify-center font-serif font-bold">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-serif font-bold text-[#1A1A1A]">Visualizador Interactivo del Grafo Jurídico</h2>
              <p className="text-xs text-[#555555]">Explorador de nodos, enlaces bidireccionales y métricas de autoridad temática.</p>
            </div>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#888888] absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Buscar por concepto o ley..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#FAF8F5] border border-[#E5DFD5] rounded-xl text-xs text-[#1A1A1A] focus:outline-none focus:border-[#0B2818]"
            />
          </div>
        </div>

        {/* CLUSTER FILTER CHIPS */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#E5DFD5]">
          <span className="text-xs font-serif font-bold text-[#0B2818] flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filtrar Cluster:
          </span>
          {['ALL', 'areas-de-practica', 'guias', 'conceptos', 'jurisprudencia', 'casos-frecuentes', 'recursos', 'herramientas', 'servicios'].map((cl) => (
            <button
              key={cl}
              onClick={() => setSelectedCluster(cl)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                selectedCluster === cl
                  ? 'bg-[#0B2818] text-white shadow'
                  : 'bg-[#FAF8F5] text-[#444444] border border-[#E5DFD5] hover:border-[#0B2818]'
              }`}
            >
              {cl === 'ALL' ? 'Todos los Clusters' : cl.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* NODES VISUAL GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssets.map((asset) => {
          const links = RelationshipEngine.getBidirectionalLinks(asset.id);
          const authorityReport = SemanticAuthorityEngine.calculateAuthorityScore(asset);

          return (
            <div
              key={asset.id}
              className="p-6 bg-[#FAF8F5] border-2 border-[#E5DFD5] hover:border-[#0B2818] rounded-3xl transition-all space-y-4 flex flex-col justify-between shadow-sm group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider bg-[#0B2818]/10 text-[#0B2818] px-2.5 py-0.5 rounded font-serif">
                    {asset.cluster.replace('-', ' ')}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-[#0B2818] bg-amber-100/60 px-2 py-0.5 rounded border border-amber-200">
                    <Award className="w-3.5 h-3.5 text-[#0B2818]" />
                    <span>Score: {authorityReport.score}/100</span>
                  </div>
                </div>

                <h3 className="text-base font-serif font-bold text-[#1A1A1A] group-hover:text-[#0B2818] transition-colors leading-snug">
                  {asset.title}
                </h3>

                <p className="text-xs text-[#555555] line-clamp-2 leading-relaxed">
                  {asset.subtitle}
                </p>

                {/* GRAPH EDGES STATS */}
                <div className="p-3 bg-[#F3EFEA] rounded-xl border border-[#E5DFD5] flex items-center justify-between text-[11px] text-[#555555] font-mono">
                  <span>Enlaces Salientes: <strong className="text-[#0B2818]">{links.outbound.length}</strong></span>
                  <span>Enlaces Entrantes: <strong className="text-[#0B2818]">{links.inbound.length}</strong></span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E5DFD5] flex items-center justify-between text-xs font-bold text-[#0B2818]">
                <span className="text-[10px] text-[#666666] font-normal">{asset.version}</span>
                <Link
                  href={`/${asset.cluster}/${asset.slug}`}
                  className="flex items-center gap-1 hover:underline"
                >
                  <span>Explorar Nodo</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
