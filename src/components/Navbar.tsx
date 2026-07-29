'use client';

import { useState } from 'react';
import { Phone, Calendar, Menu, X, Shield, MapPin } from 'lucide-react';
import { FIRM_INFO } from '@/lib/data';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5DFD5]">
      <div className="bg-[#0B2818] text-amber-100/90 text-[11px] py-1.5 px-4 font-sans tracking-wide border-b border-[#071C11]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Sede Principal en Popayán: {FIRM_INFO.address}</span>
          </div>
          <div className="flex items-center gap-4 font-semibold text-white">
            <span>Atención Inmediata 24/7</span>
            <a 
              href={`tel:${FIRM_INFO.phone.replace(/\s+/g, '')}`} 
              className="hover:text-amber-300 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-emerald-400" /> {FIRM_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#0B2818] flex items-center justify-center text-amber-200 font-serif font-bold text-xl shadow-md group-hover:bg-[#071C11] transition-colors">
            PF
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A]">
              Protección Familiar
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#666666] font-medium">
              Popayán • Cali • Colombia
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-[#333333]">
          <a href="#servicios" className="hover:text-[#0B2818] transition-colors">Servicios</a>
          <a href="#estrategia" className="hover:text-[#0B2818] transition-colors">Nuestra Estrategia</a>
          <a href="#director" className="hover:text-[#0B2818] transition-colors">Dr. Alexander Solano</a>
          <a href="#directorio" className="hover:text-[#0B2818] transition-colors">Directorio Popayán</a>
          <a href="#faq" className="hover:text-[#0B2818] transition-colors">Preguntas</a>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 bg-[#0B2818] hover:bg-[#071C11] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-amber-300" />
            Agendar Consulta
          </button>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-[#1A1A1A] hover:bg-[#E5DFD5]/40 rounded-lg transition-colors"
          aria-label="Menú de navegación"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-t border-[#E5DFD5] px-4 pt-4 pb-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 text-sm font-semibold uppercase text-[#1A1A1A]">
            <a href="#servicios" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-[#E5DFD5]/60">Servicios Especializados</a>
            <a href="#estrategia" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-[#E5DFD5]/60">Nuestra Estrategia</a>
            <a href="#director" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-[#E5DFD5]/60">Dr. Alexander Solano</a>
            <a href="#directorio" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-[#E5DFD5]/60">Directorio Popayán</a>
            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-[#E5DFD5]/60">Preguntas Frecuentes</a>
          </nav>
          <div className="pt-2 space-y-2">
            <button
              onClick={() => { setIsMobileMenuOpen(false); onOpenConsultation(); }}
              className="w-full py-3 bg-[#0B2818] text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-md"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              Agendar Consulta Privada
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
