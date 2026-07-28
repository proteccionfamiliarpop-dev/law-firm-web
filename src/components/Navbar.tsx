'use client';
import { useState } from 'react';
import { Shield, PhoneCall, Menu, X, Calendar, Scale } from 'lucide-react';
import { FIRM_INFO } from '@/lib/data';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-950/85 border-b border-slate-800/80 shadow-2xl transition-all">
      <div className="bg-gradient-to-r from-amber-600/20 via-amber-500/10 to-amber-600/20 border-b border-amber-500/20 py-1.5 px-4 text-xs font-medium text-amber-200/90 text-center flex items-center justify-center gap-3">
        <span className="flex items-center gap-1.5 font-semibold text-amber-300">
          <PhoneCall className="w-3.5 h-3.5 animate-pulse text-amber-400" />
          Urgencias Penales 24/7:
        </span>
        <a href={'tel:' + FIRM_INFO.emergencyPhone} className="underline hover:text-white transition-colors font-bold tracking-wide">
          {FIRM_INFO.emergencyPhone}
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-800 p-0.5 shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Scale className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight text-white group-hover:text-amber-300 transition-colors font-serif">
              PROTECCIÓN FAMILIAR
            </span>
            <span className="text-[10px] font-semibold text-amber-400/90 tracking-widest uppercase">
              Abogados & Asesores Jurídicos
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#servicios" className="hover:text-amber-400 transition-colors py-2">Servicios Legal</a>
          <a href="#nosotros" className="hover:text-amber-400 transition-colors py-2">La Firma</a>
          <a href="#abogados" className="hover:text-amber-400 transition-colors py-2">Especialistas</a>
          <a href="#testimonios" className="hover:text-amber-400 transition-colors py-2">Casos de Éxito</a>
          <a href="#faq" className="hover:text-amber-400 transition-colors py-2">Preguntas</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-lg shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 font-sans gap-2"
          >
            <Calendar className="w-4 h-4" />
            Agendar Consulta
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
          aria-label="Menú de navegación"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 font-medium hover:text-amber-400">Servicios Legal</a>
          <a href="#nosotros" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 font-medium hover:text-amber-400">La Firma</a>
          <a href="#abogados" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 font-medium hover:text-amber-400">Especialistas</a>
          <a href="#testimonios" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 font-medium hover:text-amber-400">Casos de Éxito</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 font-medium hover:text-amber-400">Preguntas Frecuentes</a>
          <div className="pt-3 border-t border-slate-800">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenConsultation(); }}
              className="w-full py-3 text-center text-slate-950 font-bold bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Agendar Consulta Gratuita
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
