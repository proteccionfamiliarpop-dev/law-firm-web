'use client';

import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  ChevronRight, 
  Scale, 
  Users, 
  MessageSquare 
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingSection from '@/components/BookingSection';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import { FIRM_INFO, ATTORNEYS } from '@/lib/data';

interface PopayanFaq {
  q: string;
  a: string;
}

interface PopayanClientProps {
  popayanFaqs: PopayanFaq[];
}

export default function PopayanClient({ popayanFaqs }: PopayanClientProps) {
  const scrollToBooking = () => {
    const el = document.getElementById('agendar');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] flex flex-col font-sans selection:bg-[#0B2818] selection:text-white">
      <Navbar onOpenConsultation={scrollToBooking} />

      <main className="flex-1">
        {/* BREADCRUMBS BAR */}
        <div className="bg-[#F3EFEA] border-b border-[#E5DFD5] py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#666666]">
            <Link href="/" className="hover:text-[#0B2818] transition-colors">Inicio</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#888888]" />
            <Link href="/#servicios" className="hover:text-[#0B2818] transition-colors">Servicios</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#888888]" />
            <span className="font-bold text-[#0B2818]">Abogado de Familia en Popayán</span>
          </div>
        </div>

        {/* HERO LOCAL POPAYAN */}
        <section className="py-16 lg:py-24 border-b border-[#E5DFD5] bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2818]/10 text-[#0B2818] text-xs font-bold uppercase tracking-wider font-serif">
                  <MapPin className="w-3.5 h-3.5" /> Sede Principal • Centro Histórico de Popayán
                </div>

                <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1A1A1A] leading-tight">
                  Abogado Especialista en Derecho de Familia en Popayán
                </h1>

                <p className="text-base text-[#444444] leading-relaxed">
                  Asesoría jurídica de alta gama y litigio experto en la Ciudad Blanca. Gestionamos disoluciones notariales expresas, protección patrimonial, custodia y sucesiones ante las Notarías 1, 2 y 3 y el Palacio de Justicia de Popayán.
                </p>

                <div className="p-4 rounded-2xl bg-[#F3EFEA] border border-[#E5DFD5] space-y-2">
                  <div className="text-xs font-bold text-[#0B2818] uppercase tracking-wider font-serif flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#0B2818]" /> Dirección del Despacho Principal
                  </div>
                  <p className="text-sm font-serif font-bold text-[#1A1A1A]">
                    {FIRM_INFO.address}
                  </p>
                  <p className="text-xs text-[#555555]">
                    Atención presencial de Lunes a Viernes (8:00 AM - 6:00 PM) previa reserva confidencial.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={scrollToBooking}
                    className="px-8 py-4 bg-[#0B2818] hover:bg-[#071C11] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-amber-300" />
                    Agendar Cita en Popayán
                  </button>
                  <a
                    href="https://wa.me/573153540285?text=Hola%20Dr.%20Alexander%20Solano,%20deseo%20agendar%20cita%20presencial%20en%20Popay%C3%A1n"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-4 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp Directo Popayán
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="bg-[#FAF8F5] border border-[#E5DFD5] p-4 rounded-3xl shadow-2xl space-y-4 w-full max-w-md">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden relative border border-[#E5DFD5]">
                    <img
                      src="https://proteccionfamiliar.co/wp-content/uploads/2026/07/Alexander-Solano-Abogado.jpeg"
                      alt="Dr. Alexander Solano Abogado Popayán"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2818]/90 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] uppercase font-bold tracking-widest bg-[#0B2818]/80 px-2.5 py-1 rounded text-amber-200 border border-amber-300/30">
                        Atención Presencial Popayán
                      </span>
                      <h3 className="text-xl font-serif font-bold text-white mt-1">Dr. Alexander Solano</h3>
                      <p className="text-[11px] text-amber-100/90">Cand. Doctor en Derecho • Conciliador</p>
                    </div>
                  </div>
                  <div className="text-center text-xs text-[#555555] font-serif font-bold">
                    T.P. Nº. 182.354 del Consejo Superior de la Judicatura
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* NOTARIAL & JUDICIAL DIRECTORY POPAYAN */}
        <section className="py-20 bg-[#F3EFEA] border-b border-[#E5DFD5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-xs font-bold text-[#0B2818] uppercase tracking-widest font-serif">
                Gestión Institucional Local
              </h2>
              <h3 className="text-3xl font-serif font-bold text-[#1A1A1A]">
                Cobertura ante Entidades Jurídicas de Popayán
              </h3>
              <p className="text-xs text-[#555555]">
                Representación directa ante los centros de decisión notarial y judicial del departamento del Cauca.
              </p>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#FAF8F5] border border-[#E5DFD5] p-6 rounded-2xl space-y-3">
                <Building2 className="w-8 h-8 text-[#0B2818]" />
                <h4 className="text-lg font-serif font-bold text-[#1A1A1A]">Notarías 1, 2 y 3 de Popayán</h4>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Tramitación express de escrituras públicas de divorcio por mutuo acuerdo, capitulaciones y liquidación voluntaria de bienes.
                </p>
              </div>

              <div className="bg-[#FAF8F5] border border-[#E5DFD5] p-6 rounded-2xl space-y-3">
                <Scale className="w-8 h-8 text-[#0B2818]" />
                <h4 className="text-lg font-serif font-bold text-[#1A1A1A]">Palacio de Justicia de Popayán</h4>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Litigio contencioso en Juzgados de Familia para regulación de custodia, fijación de cuota de alimentos y demandas de sucesión.
                </p>
              </div>

              <div className="bg-[#FAF8F5] border border-[#E5DFD5] p-6 rounded-2xl space-y-3">
                <Users className="w-8 h-8 text-[#0B2818]" />
                <h4 className="text-lg font-serif font-bold text-[#1A1A1A]">ICBF Seccional Cauca</h4>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Conciliación formal en derecho para acuerdos de restablecimiento de derechos y custodia compartida de menores.
                </p>
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* EMBEDDED BOOKING SECTION */}
        <BookingSection />

        {/* POPAYAN FAQS */}
        <section itemScope itemType="https://schema.org/FAQPage" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-xs font-bold text-[#0B2818] uppercase tracking-widest font-serif">
              Preguntas Frecuentes en Popayán
            </h2>
            <h3 className="text-3xl font-serif font-bold text-[#1A1A1A]">
              Dudas sobre Trámites Legales en el Cauca
            </h3>
          </div>

          <div className="space-y-4">
            {popayanFaqs.map((faq, idx) => (
              <div key={idx} itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-[#FAF8F5] border border-[#E5DFD5] p-6 rounded-2xl space-y-2">
                <h4 itemProp="name" className="text-base font-serif font-bold text-[#1A1A1A]">{faq.q}</h4>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text" className="text-xs text-[#555555] leading-relaxed">{faq.a}</p></div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA onScrollToBooking={scrollToBooking} />
    </div>
  );
}
