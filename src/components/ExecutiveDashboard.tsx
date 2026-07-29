'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  BarChart3, 
  TrendingUp, 
  Brain, 
  Award, 
  CheckCircle2, 
  Zap, 
  Globe, 
  HelpCircle, 
  ArrowRight,
  ShieldCheck,
  Target
} from 'lucide-react';
import { StrategicKPIEngine } from '@/lib/intelligence/strategicKpis';
import { EnterpriseDecisionEngine } from '@/lib/intelligence/decisionEngine';
import { QuarterlyReportGenerator } from '@/lib/intelligence/quarterlyReport';
import { AIVisibilityTracker } from '@/lib/intelligence/aiVisibilityTracker';
import { SearchIntelligenceEngine } from '@/lib/intelligence/searchIntelligence';

export default function ExecutiveDashboard() {
  const [activeTab, setActiveTab] = useState<'kpis' | 'decisions' | 'report'>('kpis');

  const kpis = StrategicKPIEngine.calculateAllKpis();
  const decisions = EnterpriseDecisionEngine.getStrategicDecisions();
  const report = QuarterlyReportGenerator.generateReport();
  const mentions = AIVisibilityTracker.getAllMentions();
  const searchHealth = SearchIntelligenceEngine.getOverallSearchHealth();

  return (
    <div className="space-y-8 my-8">
      {/* TOP KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-6 bg-[#FAF8F5] border-2 border-[#E5DFD5] rounded-3xl space-y-2">
          <div className="flex items-center justify-between text-[#0B2818]">
            <span className="text-xs font-bold uppercase tracking-wider font-serif">Impresiones Orgánicas</span>
            <Globe className="w-5 h-5 text-emerald-700" />
          </div>
          <p className="text-3xl font-serif font-bold text-[#1A1A1A]">{searchHealth.totalImpressions.toLocaleString()}</p>
          <p className="text-[11px] text-[#666666]">CTR Promedio: {searchHealth.avgCtr}% | Pos: {searchHealth.avgPos}</p>
        </div>

        <div className="p-6 bg-[#FAF8F5] border-2 border-[#E5DFD5] rounded-3xl space-y-2">
          <div className="flex items-center justify-between text-[#0B2818]">
            <span className="text-xs font-bold uppercase tracking-wider font-serif">Visibilidad en Motores IA</span>
            <Brain className="w-5 h-5 text-amber-600" />
          </div>
          <p className="text-3xl font-serif font-bold text-amber-700">{AIVisibilityTracker.calculateAIVisibilityScore()}/100</p>
          <p className="text-[11px] text-[#666666]">{mentions.length} Menciones Registradas en RAG</p>
        </div>

        <div className="p-6 bg-[#FAF8F5] border-2 border-[#E5DFD5] rounded-3xl space-y-2">
          <div className="flex items-center justify-between text-[#0B2818]">
            <span className="text-xs font-bold uppercase tracking-wider font-serif">Índice EEAT de Autoridad</span>
            <ShieldCheck className="w-5 h-5 text-emerald-700" />
          </div>
          <p className="text-3xl font-serif font-bold text-[#1A1A1A]">99/100</p>
          <p className="text-[11px] text-[#666666]">Citas Académicas Verificadas</p>
        </div>

        <div className="p-6 bg-[#FAF8F5] border-2 border-[#E5DFD5] rounded-3xl space-y-2">
          <div className="flex items-center justify-between text-[#0B2818]">
            <span className="text-xs font-bold uppercase tracking-wider font-serif">Decision Engine Status</span>
            <Zap className="w-5 h-5 text-amber-600" />
          </div>
          <p className="text-3xl font-serif font-bold text-emerald-700">OPTIMAL</p>
          <p className="text-[11px] text-[#666666]">Decisiones Justificadas por Evidencia</p>
        </div>
      </div>

      {/* DASHBOARD TAB NAVIGATION */}
      <div className="flex items-center gap-2 border-b border-[#E5DFD5] pb-3">
        <button
          onClick={() => setActiveTab('kpis')}
          className={`px-4 py-2 rounded-xl text-xs font-bold font-serif transition-all ${
            activeTab === 'kpis'
              ? 'bg-[#0B2818] text-white shadow'
              : 'bg-[#F3EFEA] text-[#444444] hover:bg-[#E5DFD5]'
          }`}
        >
          KPIs Estratégicos ({kpis.length})
        </button>
        <button
          onClick={() => setActiveTab('decisions')}
          className={`px-4 py-2 rounded-xl text-xs font-bold font-serif transition-all ${
            activeTab === 'decisions'
              ? 'bg-[#0B2818] text-white shadow'
              : 'bg-[#F3EFEA] text-[#444444] hover:bg-[#E5DFD5]'
          }`}
        >
          Decisiones Estratégicas ({decisions.length})
        </button>
        <button
          onClick={() => setActiveTab('report')}
          className={`px-4 py-2 rounded-xl text-xs font-bold font-serif transition-all ${
            activeTab === 'report'
              ? 'bg-[#0B2818] text-white shadow'
              : 'bg-[#F3EFEA] text-[#444444] hover:bg-[#E5DFD5]'
          }`}
        >
          Informe Trimestral ({report.quarter})
        </button>
      </div>

      {/* TAB CONTENTS */}
      {activeTab === 'kpis' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {kpis.map((kpi, idx) => (
            <div key={idx} className="p-5 bg-[#FAF8F5] border border-[#E5DFD5] rounded-2xl space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#0B2818]">{kpi.name}</span>
                <span className="text-emerald-700 font-bold font-mono">[{kpi.trend}]</span>
              </div>
              <p className="text-2xl font-serif font-bold text-[#1A1A1A]">{kpi.score}/100</p>
              <p className="text-[11px] text-[#666666] font-mono">Fórmula: {kpi.formula}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'decisions' && (
        <div className="space-y-4">
          {decisions.map((dec, idx) => (
            <div key={idx} className="p-6 bg-[#FAF8F5] border-2 border-[#E5DFD5] rounded-3xl space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-serif font-bold text-base text-[#1A1A1A]">{dec.question}</h4>
                <span className="bg-amber-100 text-amber-900 font-bold text-xs px-2.5 py-0.5 rounded border border-amber-200">
                  Confianza: {dec.confidenceLevel}%
                </span>
              </div>

              <div className="p-4 bg-[#F3EFEA] rounded-xl border border-[#E5DFD5] space-y-2 text-xs">
                <p><strong>Recomendación:</strong> {dec.recommendation}</p>
                <p><strong>Impacto Esperado:</strong> <span className="text-emerald-700 font-bold">{dec.expectedImpact}</span></p>
                <p><strong>Evidencia:</strong> {dec.evidence.join(' | ')}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'report' && (
        <div className="p-8 bg-[#FAF8F5] border-2 border-[#E5DFD5] rounded-3xl space-y-6">
          <h3 className="text-2xl font-serif font-bold text-[#1A1A1A]">Informe Ejecutivo {report.quarter}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-bold text-emerald-800 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Fortalezas Estratégicas
              </h4>
              <ul className="list-disc list-inside text-xs text-[#555555] space-y-1">
                {report.strengths.map((s, idx) => <li key={idx}>{s}</li>)}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-amber-800 text-sm flex items-center gap-2">
                <Target className="w-4 h-4" /> Oportunidades & Quick Wins
              </h4>
              <ul className="list-disc list-inside text-xs text-[#555555] space-y-1">
                {report.quickWins.map((q, idx) => <li key={idx}>{q}</li>)}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
