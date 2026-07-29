'use client';
import { useState } from 'react';
import { PhoneCall, Menu, X, Calendar, Scale, MessageSquare, ShieldCheck, MapPin } from 'lucide-react';
import { FIRM_INFO } from '@/lib/data';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 glass-header transition-all">
      {/* Top Banner - International Law Firm Status */}
      <div className="bg-gradient-to-r from-amber-950/40 via-slate-950 to-amber-950/40 border-b border-amber-500/20 py-2 px-4 text-xs font-medium text-amber-200/90 flex items-center justify-between max-w-7xl mx-auto flex-wrap gap-2">
        <div className="flex items-center gap-4 text-[11px]">
          <span className="flex items-center gap-1.5 font-bold text-amber-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Despacho Abierto • Popayán & Cali
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="hidden sm:flex items-center gap-1 text-slate-300">
            <MapPin className="w-3 h-3 text-amber-400" />
            Popayán: Cra 8 #2-44 Of 313, Centro
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <a
            href={'tel:' + FIRM_INFO.phone.replace(/\s+/g, '')}
            className="flex items-center gap-1.5 hover:text-white font-bold tracking-wide transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            {FIRM_INFO.phone}
          </a>
          <span className="text-slate-600">•</span>
          <a
            href="https://wa.me/573153540285?text=Hola%20Dr.%20Alexander%20Solano,%20deseo%20solicitar%20asesor%C3%ADa%20legal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-emerald-400 font-bold hover:underline"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            WhatsApp Directo 24/7
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-800 p-0.5 shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Scale className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight text-white group-hover:text-amber-300 transition-colors font-serif">
              PROTECCIÓN FAMILIAR
            </span>
            <span className="text-[10px] font-semibold text-amber-400/90 tracking-widest uppercase flex items-center gap-1">
              Dr. Alexander Solano & Asociados
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-300">
          <a href="#servicios" className="hover:text-amber-400 transition-colors py-2">Áreas de Práctica</a>
          <a href="#director" className="hover:text-amber-400 transition-colors py-2">Socio Director</a>
          <a href="#equipo" className="hover:text-amber-400 transition-colors py-2">Firma Legal</a>
          <a href="#testimonios" className="hover:text-amber-400 transition-colors py-2">Casos de Éxito</a>
          <a href="#ubicacion" className="hover:text-amber-400 transition-colors py-2">Sede Popayán</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-extrabold text-slate-950 gold-gradient-bg rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 uppercase tracking-wider gap-2"
          >
            <Calendar className="w-4 h-4 text-slate-950" />
            Agendar Consulta
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
          aria-label="Menú de navegación"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-amber-500/20 px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 font-medium hover:text-amber-400 text-sm">Áreas de Práctica</a>
          <a href="#director" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 font-medium hover:text-amber-400 text-sm">Socio Director (Dr. Alexander Solano)</a>
          <a href="#equipo" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 font-medium hover:text-amber-400 text-sm">Firma Legal</a>
          <a href="#testimonios" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 font-medium hover:text-amber-400 text-sm">Casos de Éxito</a>
          <a href="#ubicacion" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 font-medium hover:text-amber-400 text-sm">Sede Popayán</a>
          <div className="pt-3 border-t border-slate-800 space-y-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenConsultation(); }}
              className="w-full py-3 text-center text-slate-950 font-bold gold-gradient-bg rounded-xl shadow-md flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              Agendar Consulta en Google Calendar
            </button>
            <a
              href="https://wa.me/573153540285?text=Hola%20Dr.%20Alexander%20Solano,%20deseo%20solicitar%20asesor%C3%ADa%20legal"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center text-emerald-400 font-bold bg-slate-900 border border-emerald-500/30 rounded-xl flex items-center justify-center gap-2 text-xs"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Dr. Alexander Solano
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
