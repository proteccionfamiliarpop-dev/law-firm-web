'use client';

import Link from 'next/link';
import { ShieldCheck, Lock, ChevronRight, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyClient() {
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
          <span className="font-bold text-[#0B2818]">Política de Tratamiento de Datos</span>
        </div>

        {/* Header */}
        <div className="space-y-4 border-b border-[#E5DFD5] pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2818]/10 text-[#0B2818] text-xs font-bold uppercase tracking-wider font-serif">
            <ShieldCheck className="w-4 h-4 text-[#0B2818]" /> Cumplimiento Ley 1581 de 2012
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1A1A1A]">
            Política de Tratamiento de Datos Personales
          </h1>
          <p className="text-xs text-[#666666] font-mono">
            Última actualización y entrada en vigencia: 29 de Julio de 2026 • República de Colombia
          </p>
        </div>

        {/* Content Body */}
        <div className="prose prose-stone max-w-none text-xs sm:text-sm text-[#444444] space-y-8 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#1A1A1A]">1. Identificación del Responsable del Tratamiento</h2>
            <p>
              La firma jurídica boutique <strong>Protección Familiar</strong>, bajo la dirección profesional del <strong>Dr. Alexander Solano</strong> (T.P. Nº. 182.354 del Consejo Superior de la Judicatura), con domicilio principal en la Carrera 8 #2-44, Oficina 313, Centro Histórico de Popayán, Cauca, Colombia, y correo electrónico institucional <code>contacto@proteccionfamiliar.co</code>, actúa como Responsable del Tratamiento de los datos personales recolectados a través de esta plataforma digital.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#1A1A1A]">2. Marco Legal Aplicable</h2>
            <p>
              La presente política se rige por la Constitución Política de Colombia (Artículo 15), la <strong>Ley Estatutaria 1581 de 2012</strong> (&quot;Por la cual se dictan disposiciones generales para la protección de datos personales&quot;), el Decreto Reglamentario 1377 de 2013 y demás normas que las modifiquen o adicionen.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#1A1A1A]">3. Finalidades del Tratamiento de Datos</h2>
            <p>Los datos solicitados a través del formulario de reserva y contacto (Nombre, Teléfono/WhatsApp, Correo Electrónico, Asunto Legal y Notas) son tratados con las siguientes finalidades exclusivas:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#555555]">
              <li>Gestionar la programación de consultas privadas presenciales o virtuales por Google Meet.</li>
              <li>Establecer contacto directo confidencial para la atención del caso.</li>
              <li>Verificar la identidad del solicitante y la viabilidad de la representación legal.</li>
              <li>Cumplir con los deberes éticos y disciplinarios previstos en la Ley 1123 de 2007 (Código Disciplinario del Abogado).</li>
            </ul>
          </section>

          <section className="space-y-3 bg-[#F3EFEA] border-l-4 border-[#0B2818] p-5 rounded-r-2xl">
            <h2 className="text-base font-serif font-bold text-[#0B2818] flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#0B2818]" /> Secreto Profesional y Confidencialidad Absoluta
            </h2>
            <p className="text-xs text-[#555555]">
              De conformidad con el Artículo 74 de la Constitución Política de Colombia y la Ley 1123 de 2007, toda la información compartida por el usuario antes, durante y después de la consulta se encuentra amparada por el <strong>Secreto Profesional Abogado-Cliente</strong>. Protección Familiar jamás venderá, cederá ni compartirá sus datos personales con terceros comerciales.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#1A1A1A]">4. Derechos del Titular (Derechos ARCO)</h2>
            <p>De acuerdo con la Ley 1581 de 2012, usted tiene derecho a:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#555555]">
              <li>Conocer, actualizar y rectificar sus datos personales ante Protección Familiar.</li>
              <li>Solicitar prueba de la autorización otorgada para el tratamiento.</li>
              <li>Ser informado sobre el uso que se le ha dado a sus datos.</li>
              <li>Revocar la autorización o solicitar la supresión del dato cuando no se respeten los principios constitucionales.</li>
            </ul>
            <p>
              Para ejercer estos derechos, envíe una solicitud formal al correo <code>contacto@proteccionfamiliar.co</code>.
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
