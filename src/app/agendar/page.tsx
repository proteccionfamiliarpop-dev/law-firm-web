import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ChevronRight, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingSection from '@/components/BookingSection';

export const metadata: Metadata = {
  title: 'Agendar Consulta Jurídica Privada | Dr. Alexander Solano',
  description: 'Reserve su sesión de consulta confidencial presencial en Popayán o virtual en Colombia con el Dr. Alexander Solano. Asesoría experta en derecho de familia.',
  alternates: {
    canonical: 'https://proteccionfamiliar.co/agendar',
  }
};

export default function AgendarPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] flex flex-col font-sans selection:bg-[#0B2818] selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* BREADCRUMBS */}
        <div className="bg-[#F3EFEA] border-b border-[#E5DFD5] py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#666666]">
            <Link href="/" className="hover:text-[#0B2818]">Inicio</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-bold text-[#0B2818]">Agendamiento de Consulta</span>
          </div>
        </div>

        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto border-b border-[#E5DFD5] pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2818]/10 text-[#0B2818] text-xs font-bold uppercase tracking-wider font-serif">
              <Calendar className="w-3.5 h-3.5 text-[#0B2818]" /> Reserva Confidencial
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#0B2818]">
              Agendar Sesión de Consulta Privada
            </h1>
            <p className="text-base text-[#555555] leading-relaxed">
              Seleccione la modalidad (Presencial en Popayán o Virtual en Colombia) y el horario de su preferencia para analizar su caso directamente con el Dr. Alexander Solano.
            </p>
          </div>

          <BookingSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
