'use client';

import { useState } from 'react';
import { Sparkles, HelpCircle, FileText, Clock, DollarSign, CheckSquare, Scale, AlertTriangle, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

export interface AIQuestionAnswer {
  question: string;
  answer: string;
  category: 'definicion' | 'aplicacion' | 'perfil' | 'tiempo' | 'costos' | 'requisitos' | 'procedimiento' | 'normas' | 'excepciones' | 'abogado';
}

interface AIGenerativeEngineCardProps {
  topicTitle: string;
  qaList: AIQuestionAnswer[];
}

export default function AIGenerativeEngineCard({ topicTitle, qaList }: AIGenerativeEngineCardProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const getIcon = (category: string) => {
    switch (category) {
      case 'definicion': return <HelpCircle className="w-4 h-4 text-[#0B2818]" />;
      case 'aplicacion': return <CheckSquare className="w-4 h-4 text-[#0B2818]" />;
      case 'perfil': return <FileText className="w-4 h-4 text-[#0B2818]" />;
      case 'tiempo': return <Clock className="w-4 h-4 text-[#0B2818]" />;
      case 'costos': return <DollarSign className="w-4 h-4 text-[#0B2818]" />;
      case 'requisitos': return <CheckSquare className="w-4 h-4 text-[#0B2818]" />;
      case 'procedimiento': return <FileText className="w-4 h-4 text-[#0B2818]" />;
      case 'normas': return <Scale className="w-4 h-4 text-[#0B2818]" />;
      case 'excepciones': return <AlertTriangle className="w-4 h-4 text-[#0B2818]" />;
      case 'abogado': return <ShieldCheck className="w-4 h-4 text-[#0B2818]" />;
      default: return <Sparkles className="w-4 h-4 text-[#0B2818]" />;
    }
  };

  return (
    <section 
      itemScope 
      itemType="https://schema.org/FAQPage" 
      className="my-12 p-6 sm:p-8 bg-[#FAF8F5] border-2 border-[#0B2818] rounded-3xl space-y-6 shadow-md"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5DFD5] pb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#0B2818] text-amber-300 flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#0B2818] font-mono">
              Generative Engine Optimization (GEO) • AI Ready
            </span>
            <h3 className="text-lg font-serif font-bold text-[#1A1A1A]">
              Preguntas Clave para Sistemas de IA Generativa & Usuarios ({topicTitle})
            </h3>
          </div>
        </div>
        <span className="text-[10px] bg-[#E5DFD5] text-[#1A1A1A] font-semibold px-2.5 py-1 rounded-full w-fit">
          10 Respuestas Semánticas Únicas
        </span>
      </div>

      <div className="space-y-3">
        {qaList.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx} 
              itemScope 
              itemProp="mainEntity" 
              itemType="https://schema.org/Question"
              className="border border-[#E5DFD5] rounded-2xl bg-[#F3EFEA] overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-4 flex items-center justify-between gap-3 text-left font-serif font-bold text-xs sm:text-sm text-[#1A1A1A] hover:text-[#0B2818]"
              >
                <div className="flex items-center gap-2.5">
                  {getIcon(item.category)}
                  <span itemProp="name">{item.question}</span>
                </div>
                {isOpen ? <ChevronUp className="w-4 h-4 text-[#0B2818]" /> : <ChevronDown className="w-4 h-4 text-[#888888]" />}
              </button>

              {isOpen && (
                <div 
                  itemScope 
                  itemProp="acceptedAnswer" 
                  itemType="https://schema.org/Answer"
                  className="px-4 pb-4 pt-1 text-xs text-[#444444] leading-relaxed border-t border-[#E5DFD5]/60"
                >
                  <p itemProp="text">{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
