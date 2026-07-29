'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import { FIRM_INFO } from '@/lib/data';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps = {}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5DFD5]">
      <div className="bg-[#0B2818] text-[#FAF8F5] text-[11px] py-2 px-4 font-sans tracking-wide border-b border-[#071C11]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
            <span>Sede Principal Popayán: {FIRM_INFO.address}</span>
          </div>
          <div className="flex items-center gap-4 font-semibold">
            <span>Atención Jurídica Especializada</span>
            <a 
              href={`tel:${FIRM_INFO.phone.replace(/\s+/g, '')}`} 
              className="hover:text-[#C5A880] transition-colors flex items-center gap-1 text-[#C5A880]"
            >
              <Phone className="w-3 h-3 text-[#C5A880]" /> {FIRM_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#0B2818] flex items-center justify-center text-[#C5A880] font-serif font-bold text-xl border border-[#C5A880]/30 transition-colors">
            PF
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#0B2818]">
              Protección Familiar
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#666666] font-medium font-serif">
              Popayán • Cali • Colombia
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-xs font-serif font-bold text-[#1A1A1A]">
          <Link href="/" className="hover:text-[#0B2818] transition-colors">La Firma</Link>
          <Link href="/dr-alexander-solano" className="hover:text-[#0B2818] transition-colors">Dr. Alexander Solano</Link>
          <Link href="/centro-de-conocimiento" className="hover:text-[#0B2818] transition-colors">Conocimiento</Link>
          <Link href="/grafo-de-conocimiento" className="hover:text-[#0B2818] transition-colors">Grafo Jurídico</Link>
          <Link href="/contacto" className="hover:text-[#0B2818] transition-colors">Contacto</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/agendar"
            className="px-6 py-3 bg-[#0B2818] hover:bg-[#133A24] text-white font-serif font-bold text-xs rounded-xl transition-all border border-[#C5A880] shadow-sm flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#C5A880]" />
            <span>Agendar Consulta</span>
          </Link>
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
          <nav className="flex flex-col space-y-3 text-sm font-serif font-bold text-[#1A1A1A]">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-[#E5DFD5]/60">La Firma</Link>
            <Link href="/dr-alexander-solano" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-[#E5DFD5]/60">Dr. Alexander Solano</Link>
            <Link href="/centro-de-conocimiento" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-[#E5DFD5]/60">Centro de Conocimiento</Link>
            <Link href="/grafo-de-conocimiento" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-[#E5DFD5]/60">Grafo de Conocimiento</Link>
            <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-[#E5DFD5]/60">Contacto & Instalaciones</Link>
          </nav>
          <div className="pt-2">
            <Link
              href="/agendar"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3 bg-[#0B2818] text-white font-serif font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md border border-[#C5A880]"
            >
              <Calendar className="w-4 h-4 text-[#C5A880]" />
              <span>Agendar Consulta Privada</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
