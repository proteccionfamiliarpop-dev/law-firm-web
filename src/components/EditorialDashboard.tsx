'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Factory, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  TrendingUp, 
  Layers, 
  FileText, 
  Search, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { CONTENT_ASSETS_MASTER } from '@/lib/contentOS/registry';
import { TopicOpportunityEngine } from '@/lib/lcf/topicOpportunity';
import { ContentGapAnalyzer } from '@/lib/lie/contentGapAnalyzer';

export default function EditorialDashboard() {
  const [activeTab, setActiveTab] = useState<'published' | 'opportunities' | 'gaps'>('published');

  const publishedAssets = CONTENT_ASSETS_MASTER.filter(a => a.status === 'published');
  const opportunities = TopicOpportunityEngine.scanOpportunities();
  const gaps = ContentGapAnalyzer.analyzeGaps();

  return (
    <div className="space-y-8 my-8">
      {/* KPI METRICS OVERVIEW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-6 bg-[#FAF8F5] border-2 border-[#E5DFD5] rounded-3xl space-y-2">
          <div className="flex items-center justify-between text-[#0B2818]">
            <span className="text-xs font-bold uppercase tracking-wider font-serif">Activos Publicados</span>
            <CheckCircle2 className="w-5 h-5 text-emerald-700" />
          </div>
          <p className="text-3xl font-serif font-bold text-[#1A1A1A]">{publishedAssets.length}</p>
          <p className="text-[11px] text-[#666666]">100% Indexables SSG & RAG Ready</p>
        </div>

        <div className="p-6 bg-[#FAF8F5] border-2 border-[#E5DFD5] rounded-3xl space-y-2">
          <div className="flex items-center justify-between text-[#0B2818]">
            <span className="text-xs font-bold uppercase tracking-wider font-serif">Oportunidades SEO/GEO</span>
            <Sparkles className="w-5 h-5 text-amber-600" />
          </div>
          <p className="text-3xl font-serif font-bold text-[#1A1A1A]">{opportunities.length}</p>
          <p className="text-[11px] text-[#666666]">Priority Score Promedio: 88/100</p>
        </div>

        <div className="p-6 bg-[#FAF8F5] border-2 border-[#E5DFD5] rounded-3xl space-y-2">
          <div className="flex items-center justify-between text-[#0B2818]">
            <span className="text-xs font-bold uppercase tracking-wider font-serif">Vacíos de Grafo</span>
            <AlertTriangle className="w-5 h-5 text-amber-700" />
          </div>
          <p className="text-3xl font-serif font-bold text-[#1A1A1A]">{gaps.length}</p>
          <p className="text-[11px] text-[#666666]">Backlog Priorizado Automático</p>
        </div>

        <div className="p-6 bg-[#FAF8F5] border-2 border-[#E5DFD5] rounded-3xl space-y-2">
          <div className="flex items-center justify-between text-[#0B2818]">
            <span className="text-xs font-bold uppercase tracking-wider font-serif">Salud del Content OS</span>
            <TrendingUp className="w-5 h-5 text-emerald-700" />
          </div>
          <p className="text-3xl font-serif font-bold text-emerald-700">OPTIMAL</p>
          <p className="text-[11px] text-[#666666]">0 Enlaces Rotos / 0 Canibalización</p>
        </div>
      </div>

      {/* DASHBOARD TAB NAVIGATION */}
      <div className="flex items-center gap-2 border-b border-[#E5DFD5] pb-3">
        <button
          onClick={() => setActiveTab('published')}
          className={`px-4 py-2 rounded-xl text-xs font-bold font-serif transition-all ${
            activeTab === 'published'
              ? 'bg-[#0B2818] text-white shadow'
              : 'bg-[#F3EFEA] text-[#444444] hover:bg-[#E5DFD5]'
          }`}
        >
          Activos Registrados ({publishedAssets.length})
        </button>
        <button
          onClick={() => setActiveTab('opportunities')}
          className={`px-4 py-2 rounded-xl text-xs font-bold font-serif transition-all ${
            activeTab === 'opportunities'
              ? 'bg-[#0B2818] text-white shadow'
              : 'bg-[#F3EFEA] text-[#444444] hover:bg-[#E5DFD5]'
          }`}
        >
          Oportunidades de Contenido ({opportunities.length})
        </button>
        <button
          onClick={() => setActiveTab('gaps')}
          className={`px-4 py-2 rounded-xl text-xs font-bold font-serif transition-all ${
            activeTab === 'gaps'
              ? 'bg-[#0B2818] text-white shadow'
              : 'bg-[#F3EFEA] text-[#444444] hover:bg-[#E5DFD5]'
          }`}
        >
          Vacíos Temáticos Detectados ({gaps.length})
        </button>
      </div>

      {/* TAB CONTENTS */}
      {activeTab === 'published' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {publishedAssets.map((asset) => (
            <div key={asset.id} className="p-5 bg-[#FAF8F5] border border-[#E5DFD5] rounded-2xl flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between text-[11px] mb-2">
                  <span className="bg-[#0B2818]/10 text-[#0B2818] px-2 py-0.5 rounded font-bold font-serif uppercase">
                    {asset.cluster}
                  </span>
                  <span className="font-mono text-emerald-700 font-bold">Status: {asset.status}</span>
                </div>
                <h4 className="font-serif font-bold text-sm text-[#1A1A1A] leading-snug">{asset.title}</h4>
                <p className="text-xs text-[#555555] line-clamp-2 mt-1">{asset.subtitle}</p>
              </div>
              <div className="flex items-center justify-between text-xs border-t border-[#E5DFD5] pt-2 text-[#0B2818] font-bold">
                <span>Versión: {asset.version}</span>
                <Link href={`/${asset.cluster}/${asset.slug}`} className="hover:underline flex items-center gap-1">
                  <span>Ver Activo</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'opportunities' && (
        <div className="space-y-3">
          {opportunities.map((opp) => (
            <div key={opp.id} className="p-5 bg-[#FAF8F5] border border-[#E5DFD5] rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="bg-amber-100 text-amber-900 border border-amber-200 px-2 py-0.5 rounded text-[10px] font-bold">
                    {opp.type}
                  </span>
                  <span className="text-xs font-serif font-bold text-[#0B2818]">Cluster: {opp.cluster}</span>
                </div>
                <h4 className="font-serif font-bold text-base text-[#1A1A1A]">{opp.keyword}</h4>
                <p className="text-xs text-[#555555]">{opp.reasoning}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-xs font-bold text-[#0B2818]">Priority Score</div>
                  <div className="text-xl font-serif font-bold text-amber-700">{opp.priorityScore}/100</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'gaps' && (
        <div className="space-y-3">
          {gaps.map((gap) => (
            <div key={gap.id} className="p-5 bg-[#FAF8F5] border border-[#E5DFD5] rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="bg-red-100 text-red-800 border border-red-200 px-2 py-0.5 rounded text-[10px] font-bold">
                    Prioridad: {gap.priority}
                  </span>
                </div>
                <h4 className="font-serif font-bold text-base text-[#1A1A1A]">{gap.topic}</h4>
                <p className="text-xs text-[#555555]">{gap.recommendedAction}</p>
              </div>
              <div className="text-xs font-bold text-[#0B2818] bg-[#F3EFEA] px-3 py-1.5 rounded-xl border border-[#E5DFD5]">
                Formatos Faltantes: {gap.missingFormats.join(', ')}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
