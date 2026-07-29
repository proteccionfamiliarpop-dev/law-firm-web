'use client';

import { useState } from 'react';
import { Scale, Building2, CheckCircle2, ArrowRight, RefreshCw, HelpCircle, Lock, MessageSquare, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { trackCalculatorUse, trackWhatsAppClick } from '@/lib/analytics';

export default function LegalCalculator() {
  const [hasAgreement, setHasAgreement] = useState<boolean | null>(null);
  const [hasMinorChildren, setHasMinorChildren] = useState<boolean | null>(null);
  const [hasAssets, setHasAssets] = useState<boolean | null>(null);

  const resetCalculator = () => {
    setHasAgreement(null);
    setHasMinorChildren(null);
    setHasAssets(null);
  };

  const isComplete = hasAgreement !== null && hasMinorChildren !== null && hasAssets !== null;
  const isNotarial = hasAgreement === true;
  if (isComplete) {
    trackCalculatorUse(isNotarial ? 'notarial' : 'judicial');
  }

  const scrollToBooking = () => {
    const el = document.getElementById('agendar');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getWhatsAppMessage = () => {
    const via = isNotarial ? 'VÍA NOTARIAL EXPRESS' : 'VÍA JUDICIAL CONTENCIOSA';
    const text = `Hola Dr. Alexander Solano, realicé el diagnóstico legal en su plataforma y mi caso aplica para: *${via}*. (Acuerdo: ${hasAgreement ? 'Sí' : 'No'}, Menores: ${hasMinorChildren ? 'Sí' : 'No'}, Bienes: ${hasAssets ? 'Sí' : 'No'}). Deseo agendar consulta privada.`;
    return `https://wa.me/573153540285?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="calculadora" className="py-20 lg:py-24 bg-[#FAF8F5] border-y border-[#E5DFD5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2818]/10 text-[#0B2818] text-xs font-bold uppercase tracking-wider font-serif">
            <Scale className="w-3.5 h-3.5" /> Herramienta de Orientación Jurídica Inmediata
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A1A1A]">
            ¿Su caso debe tramitarse por Notaría o por Juez?
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] max-w-xl mx-auto">
            Responda 3 preguntas breves y obtenga un diagnóstico legal instantáneo ajustado a la legislación colombiana (Ley 962 de 2005 y CGP).
          </p>
        </div>

        {/* Interactive Container */}
        <div className="bg-[#F3EFEA] border-2 border-[#E5DFD5] rounded-3xl p-6 sm:p-8 shadow-lg space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Question 1 */}
            <div className="space-y-3 bg-[#FAF8F5] p-5 rounded-2xl border border-[#E5DFD5]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0B2818] font-serif">1. Voluntad</span>
              <h4 className="text-xs font-serif font-bold text-[#1A1A1A]">¿Existe mutuo acuerdo entre las partes?</h4>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => setHasAgreement(true)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                    hasAgreement === true ? 'bg-[#0B2818] text-white border-[#0B2818]' : 'bg-[#FAF8F5] text-[#1A1A1A] border-[#E5DFD5]'
                  }`}
                >
                  Sí, hay acuerdo
                </button>
                <button
                  onClick={() => setHasAgreement(false)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                    hasAgreement === false ? 'bg-[#0B2818] text-white border-[#0B2818]' : 'bg-[#FAF8F5] text-[#1A1A1A] border-[#E5DFD5]'
                  }`}
                >
                  No hay acuerdo
                </button>
              </div>
            </div>

            {/* Question 2 */}
            <div className="space-y-3 bg-[#FAF8F5] p-5 rounded-2xl border border-[#E5DFD5]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0B2818] font-serif">2. Menores</span>
              <h4 className="text-xs font-serif font-bold text-[#1A1A1A]">¿Existen hijos menores de edad?</h4>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => setHasMinorChildren(true)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                    hasMinorChildren === true ? 'bg-[#0B2818] text-white border-[#0B2818]' : 'bg-[#FAF8F5] text-[#1A1A1A] border-[#E5DFD5]'
                  }`}
                >
                  Sí, hay menores
                </button>
                <button
                  onClick={() => setHasMinorChildren(false)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                    hasMinorChildren === false ? 'bg-[#0B2818] text-white border-[#0B2818]' : 'bg-[#FAF8F5] text-[#1A1A1A] border-[#E5DFD5]'
                  }`}
                >
                  No hay menores
                </button>
              </div>
            </div>

            {/* Question 3 */}
            <div className="space-y-3 bg-[#FAF8F5] p-5 rounded-2xl border border-[#E5DFD5]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0B2818] font-serif">3. Patrimonio</span>
              <h4 className="text-xs font-serif font-bold text-[#1A1A1A]">¿Requieren repartición de bienes?</h4>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => setHasAssets(true)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                    hasAssets === true ? 'bg-[#0B2818] text-white border-[#0B2818]' : 'bg-[#FAF8F5] text-[#1A1A1A] border-[#E5DFD5]'
                  }`}
                >
                  Sí, hay bienes
                </button>
                <button
                  onClick={() => setHasAssets(false)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                    hasAssets === false ? 'bg-[#0B2818] text-white border-[#0B2818]' : 'bg-[#FAF8F5] text-[#1A1A1A] border-[#E5DFD5]'
                  }`}
                >
                  No hay bienes
                </button>
              </div>
            </div>

          </div>

          {/* Diagnostic Result Card */}
          {isComplete && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#FAF8F5] border-2 border-[#0B2818] p-6 rounded-2xl space-y-4 shadow-md"
            >
              <div className="flex items-center justify-between border-b border-[#E5DFD5] pb-3">
                <div className="flex items-center gap-2">
                  {isNotarial ? (
                    <Building2 className="w-6 h-6 text-emerald-800" />
                  ) : (
                    <Scale className="w-6 h-6 text-amber-800" />
                  )}
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B2818] font-serif">
                    DIAGNÓSTICO LEGAL PRELIMINAR RECOMENDADO
                  </span>
                </div>
                <button
                  onClick={resetCalculator}
                  className="text-xs text-[#555555] hover:text-[#0B2818] flex items-center gap-1 font-semibold"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Reiniciar
                </button>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-serif font-bold text-[#1A1A1A]">
                  {isNotarial ? 'Trámite Notarial Express (Escritura Pública)' : 'Proceso Judicial Contencioso (Juzgado de Familia)'}
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {isNotarial ? (
                    'Al existir mutuo acuerdo, su trámite legal puede formalizarse mediante Escritura Pública en Notaría en un tiempo récord aproximado de 5 a 10 días hábiles (Ley 962 de 2005 y Decreto 960 de 1970). ' +
                    (hasMinorChildren ? 'Al incluir menores, se requiere concepto previo del Defensor de Familia del ICBF.' : '')
                  ) : (
                    'Dado que no existe consenso total entre las partes, la vía legal requerida es una Demanda Apoderada ante los Juzgados de Familia bajo los términos del Código General del Proceso (CGP).'
                  )}
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={scrollToBooking}
                  className="w-full sm:w-auto px-6 py-3 bg-[#0B2818] hover:bg-[#071C11] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-amber-300" />
                  Agendar Cita con este Diagnóstico
                </button>
                <a
                  href={getWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Consultar vía WhatsApp
                </a>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
