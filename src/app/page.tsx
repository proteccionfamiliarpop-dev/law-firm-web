'use client';

import { useState } from 'react';
import { 
  ShieldCheck, 
  Users, 
  FileText, 
  Briefcase, 
  Award, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  Star, 
  ChevronDown, 
  Calendar,
  Sparkles,
  MessageSquare,
  MapPin,
  BookOpen,
  GraduationCap,
  ExternalLink,
  Lock,
  ArrowUpRight,
  Shield,
  Clock,
  Check,
  Building2,
  Landmark,
  Scale
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingSection from '@/components/BookingSection';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import PracticeAreaModal from '@/components/PracticeAreaModal';
import AttorneyModal from '@/components/AttorneyModal';
import { 
  FIRM_INFO, 
  PRACTICE_AREAS, 
  ATTORNEYS, 
  ARTICLES,
  TESTIMONIALS, 
  FAQS, 
  RESOLUTION_STEPS,
  POPAYAN_DIRECTORY,
  PracticeArea, 
  Attorney 
} from '@/lib/data';

export default function Home() {
  const [activePracticeModalArea, setActivePracticeModalArea] = useState<PracticeArea | null>(null);
  const [activeAttorneyModal, setActiveAttorneyModal] = useState<Attorney | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const scrollToBooking = () => {
    const el = document.getElementById('agendar');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const directorAttorney = ATTORNEYS.find(a => a.id === 'alexander-solano') || ATTORNEYS[0];

  
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': FAQS.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  const scholarlyArticlesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Obras e Investigaciones Jurídicas del Dr. Alexander Solano',
    'itemListElement': [
      {
        '@type': 'ScholarlyArticle',
        'name': 'Resiliencia como respuesta a la ausencia del estado',
        'author': {
          '@type': 'Person',
          'name': 'Dr. Alexander Solano'
        },
        'url': 'https://www.researchgate.net/publication/401072716_Resiliencia_como_respuesta_a_la_ausencia_del_estado_la_influencia_del_conflicto_armado_colombiano_en_las_familias_diversas_desde_una_mirada_sociojuridica',
        'inLanguage': 'es'
      },
      {
        '@type': 'Book',
        'name': 'Publicaciones e Investigaciones sobre Derecho Probatorio en Colombia',
        'author': {
          '@type': 'Person',
          'name': 'Dr. Alexander Solano'
        },
        'publisher': 'Editorial Uniautónoma',
        'url': 'https://repositorio.uniautonoma.edu.co/handle/123456789/744'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] flex flex-col font-sans selection:bg-[#0B2818] selection:text-white relative">
      <Navbar onOpenConsultation={scrollToBooking} />

      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(scholarlyArticlesJsonLd) }}
      />

      <main className="flex-1">
        {/* HERO SECTION — STITCH WARM IVORY & EDITORIAL PHOTO FRAMING (QUIET LUXURY REFINED) */}
        <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-36 overflow-hidden border-b border-[#E5DFD5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Pure Quiet Luxury Headline & Storytelling */}
              <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
                
                {/* 1 Single Discrete Top Badge */}
                <div>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2818]/10 text-[#0B2818] text-[11px] font-bold uppercase tracking-widest font-serif border border-[#0B2818]/20">
                    <Sparkles className="w-3.5 h-3.5 text-[#0B2818]" />
                    Firma Boutique • Popayán & Cali
                  </span>
                </div>

                {/* Main Headline: Empathy, Clarity & Authority */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1A1A1A] leading-[1.12] tracking-tight">
                  Transformamos la Incertidumbre en <br className="hidden sm:inline" />
                  <span className="italic font-normal text-[#0B2818]">Tranquilidad Patrimonial</span> & Familiar
                </h1>

                {/* Storytelling Subtitle */}
                <p className="text-base sm:text-lg text-[#444444] leading-relaxed font-normal max-w-2xl">
                  Navegamos la disolución notarial, la protección de activos y los acuerdos de custodia con el más alto rigor académico y reserva absoluta. Soluciones legales de alto nivel en el Cauca y Valle del Cauca.
                </p>

                {/* Single Refined Credential Line */}
                <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-[#0B2818] font-serif border-l-2 border-[#0B2818] pl-3 py-1 font-semibold text-left">
                  <span>Dirección del Dr. Alexander Solano</span>
                  <span className="text-[#888888]">•</span>
                  <span className="text-[#555555]">Cand. Doctor en Derecho & Conciliador Oficial</span>
                </div>

                {/* Primary Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button
                    onClick={scrollToBooking}
                    className="w-full sm:w-auto px-8 py-4 bg-[#0B2818] hover:bg-[#071C11] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-amber-300" />
                    Agendar Cita Privada
                  </button>
                  <a
                    href="https://wa.me/573153540285?text=Hola%20Dr.%20Alexander%20Solano,%20deseo%20solicitar%20asesor%C3%ADa%20legal%20en%20Popay%C3%A1n/Cali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-7 py-4 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp Directo: +57 315 354 0285
                  </a>
                </div>

                {/* Single Trust Indicator */}
                <div className="pt-1 flex items-center justify-center lg:justify-start text-xs text-[#666666] font-medium">
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-4 h-4 text-emerald-800" /> Secreto Profesional Abogado-Cliente (Art. 74 C.P. & Ley 1123 de 2007)
                  </span>
                </div>
              </div>

              {/* Right Column: Editorial Photo Framing with Aspect Ratio 4:5 */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative group w-full max-w-md">
                  <div className="relative bg-[#FAF8F5] border border-[#E5DFD5] rounded-3xl p-4 shadow-2xl space-y-4">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-inner border border-[#E5DFD5]">
                      <img
                        src="https://proteccionfamiliar.co/wp-content/uploads/2026/07/Alexander-Solano-Abogado.jpeg"
                        alt="Dr. Alexander Solano - Abogado de Familia Popayán"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2818]/90 via-[#0B2818]/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[10px] uppercase font-bold tracking-widest bg-[#0B2818]/80 px-2.5 py-1 rounded border border-amber-300/30 text-amber-200">
                          Socio Director & Fundador
                        </span>
                        <h3 className="text-xl font-serif font-bold text-white mt-1">Dr. Alexander Solano</h3>
                        <p className="text-[11px] text-amber-100/90 font-sans">
                          Abogado • Conciliador • Cand. Doctor en Derecho
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-[#555555] font-semibold font-serif">T.P. Nº. 182.354 CSJ</span>
                      <button
                        onClick={() => setActiveAttorneyModal(directorAttorney)}
                        className="text-[#0B2818] hover:underline font-bold flex items-center gap-1"
                      >
                        Ver Ficha Profesional <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* REFINED STATS STRIP WITH SAND DIVIDERS */}
            <div className="mt-20 grid grid-cols-3 gap-6 max-w-3xl mx-auto border-t border-[#E5DFD5] pt-10 text-center">
              {FIRM_INFO.stats.map((stat, idx) => (
                <div key={idx} className={`space-y-1 ${idx < 2 ? 'border-r border-[#E5DFD5] pr-4' : ''}`}>
                  <div className="text-2xl sm:text-4xl font-bold font-serif text-[#0B2818]">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-[#666666] uppercase tracking-wider font-serif">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NUESTRA ESTRATEGIA LEGAL GRID */}
        <section id="estrategia" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-[#0B2818] uppercase tracking-widest font-serif">
              Soluciones Personalizadas
            </h2>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#1A1A1A]">
              Nuestra Estrategia Legal
            </h2>
            <p className="text-sm text-[#555555]">
              Priorizamos la integridad emocional y la seguridad financiera de su patrimonio en Popayán y Cali.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: Divorcio por Mutuo Acuerdo */}
            <div className="stitch-card p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#E5DFD5]/60 border border-[#D8D1C5] flex items-center justify-center text-[#0B2818]">
                  <Scale className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-[#1A1A1A]">
                  Divorcio por Mutuo Acuerdo
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Trámites ágiles ante notaría para disoluciones consensuadas, garantizando un proceso sin fricciones y con absoluta reserva.
                </p>
              </div>
              <button
                onClick={scrollToBooking}
                className="text-xs font-bold text-[#0B2818] hover:underline flex items-center gap-1.5 self-start"
              >
                Agendar Notarial <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 2: Protección Patrimonial (HIGHLIGHTED IN DEEP EMERALD #0B2818) */}
            <div className="stitch-card-emerald p-8 flex flex-col justify-between space-y-6 shadow-2xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-400/20 border border-amber-300/30 flex items-center justify-center text-amber-200">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-white">
                  Protección Patrimonial
                </h3>
                <p className="text-xs text-amber-100/80 leading-relaxed">
                  Liquide a tiempo su sociedad conyugal y defienda de activos adquiridos antes o durante el matrimonio o unión marital.
                </p>
              </div>
              <button
                onClick={scrollToBooking}
                className="text-xs font-bold text-amber-200 hover:text-white flex items-center gap-1.5 self-start"
              >
                Blindar Patrimonio <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 3: Custodia y Alimentos */}
            <div className="stitch-card p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#E5DFD5]/60 border border-[#D8D1C5] flex items-center justify-center text-[#0B2818]">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-[#1A1A1A]">
                  Custodia y Alimentos
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Estructuramos acuerdos de bienestar que protegen el futuro de sus hijos bajo los más altos estándares legales y afectivos.
                </p>
              </div>
              <button
                onClick={scrollToBooking}
                className="text-xs font-bold text-[#0B2818] hover:underline flex items-center gap-1.5 self-start"
              >
                Consultar Custodia <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 4: Litigio Contencioso y Sucesiones */}
            <div className="stitch-card p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#E5DFD5]/60 border border-[#D8D1C5] flex items-center justify-center text-[#0B2818]">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-[#1A1A1A]">
                  Litigio Contencioso & Sucesiones
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Representación rigurosa ante juzgados de familia en Popayán y Cali cuando el acuerdo no es una opción, fundamentada en derecho probatorio.
                </p>
              </div>
              <button
                onClick={scrollToBooking}
                className="text-xs font-bold text-[#0B2818] hover:underline flex items-center gap-1.5 self-start"
              >
                Iniciar Proceso <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </section>

        {/* EL CAMINO A LA RESOLUCIÓN TIMELINE CARDS */}
        <section className="py-20 lg:py-28 bg-[#F3EFEA] border-y border-[#E5DFD5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="text-xs font-bold text-[#0B2818] uppercase tracking-widest font-serif">
                  Metodología
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#1A1A1A]">
                  El Camino a la Resolución
                </h2>
              </div>
              <button
                onClick={scrollToBooking}
                className="px-6 py-3 bg-[#0B2818] hover:bg-[#071C11] text-white font-bold text-xs uppercase tracking-wider rounded-xl shrink-0 transition-colors"
              >
                Iniciar mi proceso
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {RESOLUTION_STEPS.map((item) => (
                <div key={item.step} className="bg-[#FAF8F5] border border-[#E5DFD5] rounded-2xl p-8 space-y-4 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#0B2818] text-white font-bold text-xs flex items-center justify-center font-serif">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold font-serif text-[#1A1A1A]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EMBEDDED DEDICATED BOOKING FUNNEL SECTION (REPLACING MODAL POPUP AS REQUESTED) */}
        <BookingSection />

        {/* DIRECTORIO DE POPAYÁN CARDS */}
        <section id="directorio" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B2818] text-white rounded-3xl p-8 lg:p-12 shadow-2xl space-y-8">
            <div className="max-w-2xl space-y-2">
              <h2 className="text-xs font-bold text-amber-300 uppercase tracking-widest font-serif">
                Acceso Local Directo
              </h2>
              <h3 className="text-3xl font-serif font-bold text-white">
                Directorio Jurídico de Popayán
              </h3>
              <p className="text-xs text-amber-100/80">
                Acceso rápido y gestión ante las principales entidades notariales y judiciales del Cauca.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {POPAYAN_DIRECTORY.map((dir, idx) => (
                <div key={idx} className="bg-[#071C11] border border-amber-300/20 rounded-2xl p-6 space-y-3 hover:border-amber-300/50 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-300/30 flex items-center justify-center text-amber-200">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-amber-100">{dir.name}</h4>
                  <p className="text-xs text-amber-200/70 leading-relaxed">{dir.desc}</p>
                  <p className="text-[11px] text-amber-300 font-semibold pt-2 border-t border-amber-300/10">
                    📍 {dir.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DR. ALEXANDER SOLANO DETAILED PROFILE & ACADEMIC REPOSITORY */}
        <section id="director" itemScope itemType="https://schema.org/Person" className="py-20 bg-[#F3EFEA] border-b border-[#E5DFD5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#FAF8F5] border border-[#E5DFD5] rounded-3xl p-8 lg:p-12 shadow-xl space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative">
                    <img
                      src="https://proteccionfamiliar.co/wp-content/uploads/2026/07/Alexander-Solano-Abogado.jpeg"
                      alt="Dr. Alexander Solano"
                      className="w-72 h-96 object-cover rounded-2xl border-2 border-[#0B2818] shadow-2xl"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0B2818] via-transparent to-transparent opacity-50" />
                    <div className="absolute bottom-4 left-4 right-4 bg-[#FAF8F5]/95 backdrop-blur-md border border-[#E5DFD5] p-3 rounded-xl text-center">
                      <p className="text-xs font-bold text-[#0B2818]">Dr. Alexander Solano</p>
                      <p className="text-[10px] text-[#555555]">Cand. Doctor en Derecho • Magíster</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0B2818]/10 text-[#0B2818] text-xs font-bold uppercase tracking-wider">
                    <Award className="w-4 h-4" /> Socio Director & Fundador
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A1A1A]">
                    Dr. Alexander Solano
                  </h2>

                  <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                    {directorAttorney.bio}
                  </p>

                  <div className="bg-[#F3EFEA] border border-[#E5DFD5] p-5 rounded-2xl space-y-3">
                    <h4 className="text-xs font-bold text-[#0B2818] uppercase tracking-wider flex items-center gap-2 font-serif">
                      <BookOpen className="w-4 h-4 text-[#0B2818]" /> Obras & Investigaciones Académicas
                    </h4>

                    <div className="space-y-2 text-xs text-[#333333]">
                      {directorAttorney.publications?.map((pub, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg bg-[#FAF8F5] border border-[#E5DFD5] gap-2">
                          <div>
                            <span className="text-[10px] font-bold text-[#0B2818] bg-[#0B2818]/10 px-2 py-0.5 rounded mr-2 uppercase">
                              {pub.type}
                            </span>
                            <span className="font-medium text-[#1A1A1A]">{pub.title}</span>
                          </div>
                          {pub.url && (
                            <a
                              href={pub.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#0B2818] hover:underline font-bold text-[11px] flex items-center gap-1 shrink-0"
                            >
                              Ver Repositorio <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => setActiveAttorneyModal(directorAttorney)}
                      className="px-6 py-3 bg-[#0B2818] hover:bg-[#071C11] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-colors"
                    >
                      Ver Ficha Profesional Completa
                    </button>
                    <button
                      onClick={scrollToBooking}
                      className="px-6 py-3 bg-[#FAF8F5] hover:bg-[#E5DFD5]/50 border border-[#E5DFD5] text-[#0B2818] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
                    >
                      Agendar Consulta con el Dr. Solano
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section id="faq" itemScope itemType="https://schema.org/FAQPage" className="py-20 lg:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold text-[#0B2818] uppercase tracking-widest font-serif">
              Resuelve tus Dudas
            </h2>
            <h3 className="text-3xl font-serif font-bold text-[#1A1A1A]">
              Preguntas Frecuentes
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-[#FAF8F5] border border-[#E5DFD5] rounded-xl overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between font-serif font-bold text-[#1A1A1A] text-sm hover:text-[#0B2818] transition-colors gap-4"
                  >
                    <span itemProp="name">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-[#0B2818] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="px-5 pb-5 pt-1 text-xs text-[#555555] leading-relaxed border-t border-[#E5DFD5]"><div itemProp="text">
                      {faq.answer}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* LOCATION STRIP */}
        <section id="ubicacion" className="py-16 bg-[#F3EFEA] border-t border-[#E5DFD5]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#FAF8F5] border border-[#E5DFD5] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0B2818] uppercase tracking-wider font-serif">
                  <MapPin className="w-4 h-4" /> Oficina Principal en Popayán
                </div>
                <h3 className="text-xl font-bold font-serif text-[#1A1A1A]">
                  {FIRM_INFO.address}
                </h3>
                <p className="text-xs text-[#555555]">
                  {FIRM_INFO.secondaryAddress} • Correo: contacto@proteccionfamiliar.co
                </p>
              </div>
              <a
                href="https://wa.me/573153540285?text=Hola%20Dr.%20Alexander%20Solano,%20deseo%20coordinar%20visita%20a%20la%20oficina%20en%20Popay%C3%A1n"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#0B2818] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shrink-0 transition-transform hover:scale-[1.02] flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> Coordinar Cita Presencial
              </a>
            </div>
          </div>
        </section>
      </main>

      <StickyMobileCTA onScrollToBooking={scrollToBooking} />

      <Footer />

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/573153540285?text=Hola%20Dr.%20Alexander%20Solano,%20deseo%20solicitar%20asesor%C3%ADa%20legal"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center border-2 border-white group"
        title="Hablar por WhatsApp con el Dr. Alexander Solano (+57 315 354 0285)"
      >
        <MessageSquare className="w-7 h-7 fill-white text-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-bold text-xs pl-0 group-hover:pl-2 text-white font-sans">
          WhatsApp Dr. Alexander Solano
        </span>
      </a>

      {/* ATTORNEY MODAL FOR PUBLICATIONS AND CREDENTIALS */}
      <AttorneyModal
        attorney={activeAttorneyModal}
        onClose={() => setActiveAttorneyModal(null)}
        onOpenConsultation={scrollToBooking}
      />
    </div>
  );
}
