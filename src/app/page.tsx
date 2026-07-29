import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ShieldCheck, 
  ArrowRight, 
  Award, 
  GraduationCap, 
  Scale, 
  BookOpen, 
  CheckCircle2, 
  MapPin, 
  Calendar,
  Building2
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Protección Familiar | Despacho Jurídico Especializado - Dr. Alexander Solano',
  description: 'Despacho boutique de Derecho de Familia y Patrimonio en Colombia. Asesoría experta en divorcio notarial, liquidación conyugal y amparo familiar por el Dr. Alexander Solano.',
  alternates: {
    canonical: 'https://proteccionfamiliar.co',
  }
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    'name': 'Protección Familiar',
    'image': 'https://proteccionfamiliar.co/logo.png',
    '@id': 'https://proteccionfamiliar.co/#organization',
    'url': 'https://proteccionfamiliar.co',
    'telephone': '+573153540285',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Cra 8 #2-44, Oficina 313, Centro',
      'addressLocality': 'Popayán',
      'addressRegion': 'Cauca',
      'postalCode': '190003',
      'addressCountry': 'CO'
    },
    'priceRange': '$$$',
    'founder': {
      '@type': 'Person',
      'name': 'Dr. Alexander Solano',
      'jobTitle': 'Director Jurídico',
      'identifier': 'T.P. Nº. 182.354 CSJ'
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] flex flex-col font-sans selection:bg-[#0B2818] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="flex-1">
        {/* SECCIÓN 1: HERO EDITORIAL */}
        <section className="py-20 md:py-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2818]/10 text-[#0B2818] text-xs font-bold uppercase tracking-wider font-serif">
            <ShieldCheck className="w-4 h-4 text-[#0B2818]" /> Despacho Jurídico Boutique • Derecho de Familia
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#0B2818] leading-[1.15] tracking-tight">
            Protección Familiar & Amparo Jurídico Patrimonial en Colombia
          </h1>

          <p className="text-lg sm:text-xl text-[#555555] max-w-3xl mx-auto leading-relaxed font-sans">
            Soluciones jurídicas rigurosas, serenas y efectivas en trámites de divorcio, liquidación de bienes y custodia. Dirigido por el Dr. Alexander Solano.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/agendar"
              className="w-full sm:w-auto px-8 py-4 bg-[#0B2818] text-white rounded-xl font-serif font-bold text-sm hover:bg-[#133A24] transition-all border border-[#C5A880] shadow-sm flex items-center justify-center gap-2 group"
            >
              <Calendar className="w-4 h-4 text-[#C5A880]" />
              <span>Agendar Consulta Privada</span>
              <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#especialidades"
              className="w-full sm:w-auto px-8 py-4 bg-[#F3EFEA] text-[#1A1A1A] rounded-xl font-serif font-semibold text-sm hover:bg-[#E5DFD5] transition-all border border-[#E5DFD5] flex items-center justify-center gap-2"
            >
              <span>Explorar Especialidades</span>
            </Link>
          </div>
        </section>

        {/* SECCIÓN 2: PILARES DE ESPECIALIZACIÓN EDITORIAL */}
        <section id="especialidades" className="py-20 bg-[#F3EFEA] border-y border-[#E5DFD5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B2818]">
                Áreas de Práctica Especializada
              </h2>
              <p className="text-sm text-[#666666]">
                Representación apoderada y asesoría notarial/judicial con rigor técnico e integridad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="p-8 bg-[#FAF8F5] border border-[#E5DFD5] rounded-2xl space-y-4 hover:border-[#0B2818] transition-all flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0B2818]/10 text-[#0B2818] flex items-center justify-center">
                    <Scale className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#1A1A1A] group-hover:text-[#0B2818] transition-colors">
                    Divorcio Notarial por Mutuo Acuerdo
                  </h3>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    Trámite ágil y respetuoso ante notario bajo la Ley 962 de 2005 y Decreto 4436. Disolución cesación de efectos civiles sin juicio contencioso.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E5DFD5]">
                  <Link
                    href="/areas-de-practica/divorcio-notarial-mutuo-acuerdo"
                    className="text-xs font-bold text-[#0B2818] flex items-center gap-1 hover:underline"
                  >
                    <span>Ver Detalles de Trámite</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-8 bg-[#FAF8F5] border border-[#E5DFD5] rounded-2xl space-y-4 hover:border-[#0B2818] transition-all flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0B2818]/10 text-[#0B2818] flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#1A1A1A] group-hover:text-[#0B2818] transition-colors">
                    Liquidación de Sociedad Conyugal
                  </h3>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    Partición equitativa de bienes, gananciales y pasivos. Asesoría en capitulaciones previas y disolución patrimonial clara.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E5DFD5]">
                  <Link
                    href="/conceptos/sociedad-conyugal-definicion-y-liquidacion"
                    className="text-xs font-bold text-[#0B2818] flex items-center gap-1 hover:underline"
                  >
                    <span>Ver Fundamento Legal</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-8 bg-[#FAF8F5] border border-[#E5DFD5] rounded-2xl space-y-4 hover:border-[#0B2818] transition-all flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0B2818]/10 text-[#0B2818] flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#1A1A1A] group-hover:text-[#0B2818] transition-colors">
                    Custodia, Patria Potestad y Alimentos
                  </h3>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    Protección integral de los derechos de niños y adolescentes. Acuerdos de custodia compartida, regulación de visitas y cuota alimentaria.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E5DFD5]">
                  <Link
                    href="/conceptos/patria-potestad-definicion-y-suspension"
                    className="text-xs font-bold text-[#0B2818] flex items-center gap-1 hover:underline"
                  >
                    <span>Ver Marco Normativo</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 3: AUTORIDAD INSTITUCIONAL & CREDENCIALES DEL DR. SOLANO */}
        <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="p-10 bg-[#FAF8F5] border-2 border-[#E5DFD5] rounded-2xl space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-[#E5DFD5] pb-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-serif font-bold text-[#C5A880] uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4 text-[#0B2818]" /> Dirección Jurídica del Despacho
                </div>
                <h2 className="text-3xl font-serif font-bold text-[#0B2818]">
                  Dr. Alexander Solano
                </h2>
                <p className="text-xs text-[#666666] font-mono">
                  Tarjeta Profesional Nº. 182.354 del Consejo Superior de la Judicatura (CSJ)
                </p>
              </div>

              <Link
                href="/dr-alexander-solano"
                className="px-6 py-3 bg-[#0B2818] text-white rounded-xl text-xs font-serif font-bold hover:bg-[#133A24] transition-all border border-[#C5A880] flex items-center gap-2"
              >
                <span>Ver Perfil Académico Completo</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-4 bg-[#F3EFEA] rounded-xl border border-[#E5DFD5] space-y-1">
                <span className="font-bold text-[#0B2818] block">Candidato a Doctor</span>
                <span className="text-[#555555]">Doctorado en Derecho</span>
              </div>
              <div className="p-4 bg-[#F3EFEA] rounded-xl border border-[#E5DFD5] space-y-1">
                <span className="font-bold text-[#0B2818] block">Magíster en Derecho</span>
                <span className="text-[#555555]">Énfasis en Familia y Probatorio</span>
              </div>
              <div className="p-4 bg-[#F3EFEA] rounded-xl border border-[#E5DFD5] space-y-1">
                <span className="font-bold text-[#0B2818] block">Especialista en Familia</span>
                <span className="text-[#555555]">Derecho Notarial y Civil</span>
              </div>
              <div className="p-4 bg-[#F3EFEA] rounded-xl border border-[#E5DFD5] space-y-1">
                <span className="font-bold text-[#0B2818] block">Conciliador Oficial</span>
                <span className="text-[#555555]">Acreditado en Colombia</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 4: CTA UNIFICADO DE CIERRE */}
        <section className="py-16 bg-[#0B2818] text-white border-t border-[#C5A880]/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold leading-tight">
              Atención Presencial en Popayán y Asesoría Virtual en Toda Colombia
            </h2>
            <p className="text-sm text-[#FAF8F5]/80 max-w-2xl mx-auto leading-relaxed">
              Reserve una sesión de consulta privada y confidencial con el Dr. Alexander Solano para analizar su situación bajo el estricto marco legal colombiano.
            </p>
            <div className="pt-2">
              <Link
                href="/agendar"
                className="inline-flex items-center gap-2 px-9 py-4 bg-[#C5A880] text-[#0B2818] rounded-xl font-serif font-bold text-sm hover:bg-[#b59870] transition-all shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Iniciar Agendamiento de Consulta</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
