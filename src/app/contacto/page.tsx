import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, PhoneCall, Mail, Clock, ChevronRight, Building2, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contacto & Ubicación de Instalaciones | Protección Familiar Popayán',
  description: 'Ubicación física y contacto oficial de Protección Familiar en Popayán Cauca. Cra 8 #2-44, Oficina 313, Centro. Teléfono: +57 315 354 0285.',
  alternates: {
    canonical: 'https://proteccionfamiliar.co/contacto',
  }
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] flex flex-col font-sans selection:bg-[#0B2818] selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* BREADCRUMBS */}
        <div className="bg-[#F3EFEA] border-b border-[#E5DFD5] py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#666666]">
            <Link href="/" className="hover:text-[#0B2818]">Inicio</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-bold text-[#0B2818]">Contacto & Instalaciones</span>
          </div>
        </div>

        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-4 max-w-3xl border-b border-[#E5DFD5] pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2818]/10 text-[#0B2818] text-xs font-bold uppercase tracking-wider font-serif">
              <MapPin className="w-3.5 h-3.5 text-[#0B2818]" /> Sede Principal Popayán
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#0B2818]">
              Contacto & Atención Presencial
            </h1>
            <p className="text-base text-[#555555] leading-relaxed">
              Consulte nuestros canales oficiales de atención, ubicación física en el centro histórico de Popayán y horarios de atención al usuario.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card Info 1 */}
            <div className="p-8 bg-[#FAF8F5] border-2 border-[#E5DFD5] rounded-2xl space-y-6">
              <h2 className="text-2xl font-serif font-bold text-[#0B2818] flex items-center gap-2">
                <Building2 className="w-6 h-6 text-[#C5A880]" /> Instalaciones Oficiales
              </h2>

              <div className="space-y-4 text-sm text-[#555555]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0B2818] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1A1A1A] block font-serif">Dirección Física:</strong>
                    <span>Cra 8 #2-44, Oficina 313, Edificio Centro, Popayán, Cauca, Colombia.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <PhoneCall className="w-5 h-5 text-[#0B2818] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1A1A1A] block font-serif">Línea Telefónica Directa / WhatsApp:</strong>
                    <a href="tel:+573153540285" className="text-[#0B2818] font-bold hover:underline">
                      +57 315 354 0285
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#0B2818] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1A1A1A] block font-serif">Correo Electrónico Institucional:</strong>
                    <a href="mailto:contacto@proteccionfamiliar.co" className="text-[#0B2818] font-bold hover:underline">
                      contacto@proteccionfamiliar.co
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#0B2818] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1A1A1A] block font-serif">Horario de Atención:</strong>
                    <span>Lunes a Viernes: 8:00 AM - 12:00 PM y 2:00 PM - 6:00 PM.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Info 2 */}
            <div className="p-8 bg-[#F3EFEA] border-2 border-[#E5DFD5] rounded-2xl space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-[#0B2818]">
                  Agendamiento Directo
                </h2>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Para garantizar la atención personalizada y confidencial del Dr. Alexander Solano sin tiempos de espera en sede, le sugerimos realizar el agendamiento previo de su cita.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5DFD5]">
                <Link
                  href="/agendar"
                  className="w-full py-4 bg-[#0B2818] text-white rounded-xl font-serif font-bold text-sm hover:bg-[#133A24] transition-all border border-[#C5A880] flex items-center justify-center gap-2"
                >
                  <span>Ir al Formulario de Agendamiento</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A880]" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
