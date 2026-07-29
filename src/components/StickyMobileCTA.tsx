'use client';

import { useState, useEffect } from 'react';
import { Calendar, MessageSquare, ArrowRight } from 'lucide-react';

interface StickyMobileCTAProps {
  onScrollToBooking: () => void;
}

export default function StickyMobileCTA({ onScrollToBooking }: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#FAF8F5]/95 backdrop-blur-lg border-t border-[#E5DFD5] shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom-5">
      <div className="flex items-center gap-2">
        <button
          onClick={onScrollToBooking}
          className="flex-1 py-3 px-4 bg-[#0B2818] active:bg-[#071C11] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-95"
        >
          <Calendar className="w-4 h-4 text-amber-300" />
          <span>Agendar Cita Privada</span>
          <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
        </button>

        <a
          href="https://wa.me/573153540285?text=Hola%20Dr.%20Alexander%20Solano,%20deseo%20solicitar%20asesor%C3%ADa%20legal%20urgente"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-emerald-700 active:bg-emerald-800 text-white rounded-xl shadow-lg flex items-center justify-center shrink-0"
          title="WhatsApp Directo"
          aria-label="Contactar por WhatsApp Directo con el Dr. Alexander Solano"
        >
          <MessageSquare className="w-5 h-5 fill-white text-white" />
        </a>
      </div>
    </div>
  );
}
