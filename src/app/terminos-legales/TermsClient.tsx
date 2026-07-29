'use client';

import Link from 'next/link';
import { Scale, Lock, ChevronRight, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsClient() {
  const scrollToBooking = () => {
    window.location.href = '/#agendar';
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] flex flex-col font-sans selection:bg-[#0B2818] selection:text-white">
      <Navbar onOpenConsultation={scrollToBooking} />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-10">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-[#666666]">
          <Link href="/" className="hover:text-[#0B2818] transition-colors">Inicio</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="font-bold text-[#0B2818]">Términos Legales & Ética Profesional</span>
        </div>

        {/* Header */}
        <div className="space-y-4 border-b border-[#E5DFD5] pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2818]/10 text-[#0B2818] text-xs font-bold uppercase tracking-wider font-serif">
            <Scale className="w-4 h-4 text-[#0B2818]" /> Ley 1123 de 2007 & Secreto Profesional
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1A1A1A]">
            Términos Legales & Código de Ética
          </h1>
          <p className="text-xs text-[#666666] font-mono">
            Vigencia Constitucional • Consejo Superior de la Judicatura de Colombia
          </p>
        </div>

        {/* Content Body */}
        <div className="prose prose-stone max-w-none text-xs sm:text-sm text-[#444444] space-y-8 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#1A1A1A]">1. Titularidad y Tarjeta Profesional</h2>
            <p>
              Los servicios jurídicos exhibidos en <strong>proteccionfamiliar.co</strong> son dirigidos y prestados bajo la responsabilidad personal del <strong>Dr. Alexander Solano</strong>, Abogado titulado, Conciliador Oficial en Derecho, Especialista en Familia, Magíster en Derecho y Candidato a Doctor en Derecho, titular de la <strong>Tarjeta Profesional Nº. 182.354 del Consejo Superior de la Judicatura de Colombia</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#1A1A1A]">2. Secreto Profesional Inviolable</h2>
            <p>
              En virtud del <strong>Artículo 74 de la Constitución Política de Colombia</strong> y del Código Disciplinario del Abogado (Ley 1123 de 2007), el secreto profesional es inviolable. Toda la información enviada mediante los formularios de este sitio web o durante las videollamadas y reuniones presenciales queda legalmente protegida por el deber constitucional de reserva.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#1A1A1A]">3. Naturaleza de la Orientación Inicial</h2>
            <p>
              La información contenida en este sitio web y el resultado arrojado por la calculadora de orientación legal son de carácter estrictamente informativo y preliminar. No constituyen formalización de contrato de mandato o apoderamiento judicial hasta tanto no se firme el correspondiente contrato de servicios profesionales o se otorgue el poder formal regulado por el Código General del Proceso.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#1A1A1A]">4. Propiedad Intelectual</h2>
            <p>
              Los diseños visuales, marca registrada Protección Familiar, textos estratégicos y esquemas metodológicos son propiedad exclusiva de la firma y están protegidos por las leyes de derechos de autor en Colombia e internacionales.
            </p>
          </section>

        </div>

        <div className="pt-6 border-t border-[#E5DFD5]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B2818] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#071C11] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al Inicio
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
