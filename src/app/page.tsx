'use client';

import { useState } from 'react';
import { 
  ShieldCheck, 
  Users, 
  FileText, 
  Gavel, 
  Briefcase, 
  Award, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  Star, 
  ChevronDown, 
  Calendar,
  Scale,
  Sparkles,
  MessageSquare,
  MapPin,
  BookOpen,
  GraduationCap
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import PracticeAreaModal from '@/components/PracticeAreaModal';
import AttorneyModal from '@/components/AttorneyModal';
import { 
  FIRM_INFO, 
  PRACTICE_AREAS, 
  ATTORNEYS, 
  TESTIMONIALS, 
  FAQS, 
  PracticeArea, 
  Attorney 
} from '@/lib/data';

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedAreaId, setSelectedAreaId] = useState<string | undefined>();
  const [activePracticeModalArea, setActivePracticeModalArea] = useState<PracticeArea | null>(null);
  const [activeAttorneyModal, setActiveAttorneyModal] = useState<Attorney | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="w-7 h-7 text-amber-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-7 h-7 text-amber-400" />;
      case 'FileText': return <FileText className="w-7 h-7 text-amber-400" />;
      case 'Gavel': return <Gavel className="w-7 h-7 text-amber-400" />;
      case 'Briefcase': return <Briefcase className="w-7 h-7 text-amber-400" />;
      case 'Award': return <Award className="w-7 h-7 text-amber-400" />;
      default: return <Scale className="w-7 h-7 text-amber-400" />;
    }
  };

  const handleOpenConsultationForArea = (areaId: string) => {
    setSelectedAreaId(areaId);
    setIsConsultationOpen(true);
  };

  const directorAttorney = ATTORNEYS.find(a => a.id === 'alexander-solano') || ATTORNEYS[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950 relative">
      <Navbar onOpenConsultation={() => { setSelectedAreaId(undefined); setIsConsultationOpen(true); }} />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden border-b border-slate-800/60">
          {/* Ambient Glowing Background Lights */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-[450px] h-[280px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-inner">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Popayán (Cra 8 #2-44 Of 313) • Cali • Cobertura Nacional</span>
              </div>

              {/* H1 SEO TARGETED */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif text-white leading-[1.15]">
                Abogado de Familia & Civil en Popayán y Cali | <span className="gold-gradient-text">Dr. Alexander Solano</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
                Protección integral para tu familia y patrimonio. Asesoría jurídica estratégica, representación de alto nivel ante juzgados de familia y civiles en Popayán, Cali y Colombia.
              </p>

              <div className="pt-2 flex flex-wrap justify-center items-center gap-3 text-xs text-amber-300 font-semibold">
                <span className="bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-md flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-amber-400" /> Cand. Doctor en Derecho
                </span>
                <span className="bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-md flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-amber-400" /> Autor e Investigador Jurídico
                </span>
                <span className="bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-md flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-400" /> Popayán (Centro) & Cali
                </span>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-sm rounded-xl shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Agendar Cita en Google Calendar
                </button>
                <a
                  href="https://wa.me/573153540285?text=Hola%20Dr.%20Alexander%20Solano,%20deseo%20solicitar%20asesor%C3%ADa%20legal%20en%20Popay%C3%A1n/Cali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp Directo: +57 315 354 0285
                </a>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Secreto Profesional Blindado
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Conciliador Oficial en Derecho
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Cra 8 #2-44 Of 313, Popayán
                </span>
              </div>
            </div>

            {/* STATS STRIP */}
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {FIRM_INFO.stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-900/70 backdrop-blur-md border border-slate-800/80 p-6 rounded-2xl text-center hover:border-amber-500/40 transition-colors shadow-lg">
                  <div className="text-3xl sm:text-4xl font-extrabold font-serif text-white gold-gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIRECTOR FEATURED SECTION */}
        <section className="py-16 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950 border-b border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900/90 border border-amber-500/30 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-4 flex justify-center">
                  <div className="relative group">
                    <img
                      src={directorAttorney.image}
                      alt={directorAttorney.name}
                      className="w-64 h-80 sm:w-72 sm:h-96 object-cover rounded-2xl border-2 border-amber-500/40 shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md border border-amber-500/30 p-3 rounded-xl text-center">
                      <p className="text-xs font-bold text-amber-300">Dr. Alexander Solano</p>
                      <p className="text-[10px] text-slate-300 font-medium">Socio Director & Fundador</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                    <Award className="w-4 h-4 text-amber-400" /> Dirección Jurídica del Bufete
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-white leading-tight">
                    Dr. Alexander Solano — <span className="gold-gradient-text">Especialista en Derecho de Familia & Conciliador</span>
                  </h2>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {directorAttorney.bio}
                  </p>

                  <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-3">
                    <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                      <BookOpen className="w-4 h-4" /> Producción Académica & Obras Destacadas
                    </h3>
                    <ul className="space-y-2 text-xs text-slate-200">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">•</span>
                        <span><strong>Libro (2ª Ed.):</strong> La construcción de la identidad al interior de la familia asistida: pugnas históricas, sociales y jurídicas colombianas (Uniautónoma).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">•</span>
                        <span><strong>Libro:</strong> La investigación jurídica en perspectiva multidisciplinar: aportes para la comprensión de realidades sociales, políticas y jurídicas.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">•</span>
                        <span><strong>Artículos Científicos:</strong> Investigaciones publicadas en ResearchGate y Sci-Cult sobre resiliencia familiar en el conflicto armado e identidad posmoderna en el derecho colombiano.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => setActiveAttorneyModal(directorAttorney)}
                      className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-lg flex items-center justify-center gap-2 transition-colors"
                    >
                      Ver Perfil Profesional & Publicaciones
                    </button>
                    <button
                      onClick={() => setIsConsultationOpen(true)}
                      className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 flex items-center justify-center gap-2 transition-colors"
                    >
                      Agendar Consulta Directa con el Dr. Solano
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRACTICE AREAS */}
        <section id="servicios" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-amber-400 uppercase tracking-widest font-serif">
              Soluciones Jurídicas en Popayán y Cali
            </h2>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">
              Nuestras Áreas de Práctica Especializada
            </h2>
            <p className="text-sm text-slate-400">
              Servicios jurídicos integrales con el sello de rigor académico e intervención estratégica ante los juzgados de Popayán, Cali y Colombia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRACTICE_AREAS.map((area) => (
              <div
                key={area.id}
                className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-7 hover:border-amber-500/40 hover:bg-slate-900 transition-all group flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300">
                    {getIconComponent(area.iconName)}
                  </div>
                  <h3 className="text-xl font-bold text-white font-serif mb-3 group-hover:text-amber-300 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {area.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <button
                    onClick={() => setActivePracticeModalArea(area)}
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
                  >
                    Ver Detalles e Inclusiones <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleOpenConsultationForArea(area.id)}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-amber-400 hover:text-slate-950 text-slate-300 text-xs font-bold transition-all"
                    title="Agendar para esta área"
                  >
                    Consultar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ATTORNEYS / TEAM */}
        <section id="abogados" className="py-20 lg:py-28 bg-slate-900/40 border-y border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-xs font-bold text-amber-400 uppercase tracking-widest font-serif">
                Equipo Especializado
              </h2>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">
                Abogados Titulares & Consultores
              </h2>
              <p className="text-sm text-slate-400">
                Profesionales certificados con amplia trayectoria ante juzgados y tribunales en el Cauca y Valle del Cauca.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {ATTORNEYS.map((attorney) => (
                <div
                  key={attorney.id}
                  className="bg-slate-950 border border-slate-800/90 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all group shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={attorney.image}
                        alt={attorney.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-3 left-4 right-4">
                        <span className="text-[10px] font-bold text-amber-300 bg-amber-500/20 border border-amber-500/30 px-2.5 py-1 rounded-md backdrop-blur-md">
                          {attorney.experience}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 space-y-2">
                      <h3 className="text-lg font-bold text-white font-serif group-hover:text-amber-300 transition-colors">
                        {attorney.name}
                      </h3>
                      <p className="text-xs text-amber-400 font-semibold">{attorney.role}</p>
                      <p className="text-xs text-slate-400 line-clamp-2">{attorney.specialty}</p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <button
                      onClick={() => setActiveAttorneyModal(attorney)}
                      className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-200 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      Ver Perfil Profesional
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonios" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-amber-400 uppercase tracking-widest font-serif">
              Respaldo en Popayán y Cali
            </h2>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">
              Testimonios de Nuestros Clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-900/60 border border-slate-800 p-7 rounded-2xl flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    "{t.comment}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-white">{t.clientName}</p>
                    <p className="text-[11px] text-amber-400">{t.caseType}</p>
                  </div>
                  <span className="text-[10px] text-slate-500">{t.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section id="faq" className="py-20 lg:py-28 bg-slate-900/40 border-t border-slate-800/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="text-xs font-bold text-amber-400 uppercase tracking-widest font-serif">
                Resuelve tus Dudas
              </h2>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">
                Preguntas Frecuentes
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between font-semibold text-white text-sm hover:text-amber-300 transition-colors gap-4"
                    >
                      <span className="font-serif">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-amber-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-900">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* LOCATION ADDRESS MAP STRIP */}
        <section className="py-16 bg-slate-950 border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 border border-amber-500/30 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <MapPin className="w-4 h-4" /> Despacho Principal en Popayán
                </div>
                <h3 className="text-xl font-bold text-white font-serif">
                  {FIRM_INFO.address}
                </h3>
                <p className="text-xs text-slate-400">
                  {FIRM_INFO.secondaryAddress} • Atención Presencial y Virtual con el Dr. Alexander Solano
                </p>
              </div>
              <a
                href="https://wa.me/573153540285?text=Hola,%20deseo%20coordinar%20visita%20a%20la%20oficina%20en%20Popay%C3%A1n"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-lg shrink-0 transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> Coordinar Cita Presencial
              </a>
            </div>
          </div>
        </section>

        {/* BANNER CTA EMERGENCY */}
        <section className="py-16 bg-gradient-to-r from-amber-600/20 via-slate-900 to-amber-700/20 border-y border-amber-500/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
              ¿Enfrentas un Conflicto de Familia o Caso Urgente en Popayán / Cali?
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mx-auto">
              Nuestra atención por WhatsApp y guardia penal opera las 24 horas del día.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/573153540285?text=Hola%20Dr.%20Alexander%20Solano,%20requiero%20asistencia%20legal%20urgente"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow-xl shadow-emerald-600/20 transition-all hover:scale-105"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp Directo 24/7: +57 315 354 0285
              </a>
              <a
                href={'tel:' + FIRM_INFO.phone.replace(/\s+/g, '')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm rounded-xl shadow-xl shadow-amber-500/20 transition-all hover:scale-105"
              >
                <PhoneCall className="w-5 h-5 animate-pulse" />
                Llamar Ahora: {FIRM_INFO.phone}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/573153540285?text=Hola%20Dr.%20Alexander%20Solano,%20deseo%20solicitar%20asesor%C3%ADa%20legal"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-400 text-slate-950 p-4 rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center border-2 border-emerald-300 group"
        title="Hablar por WhatsApp con el Dr. Alexander Solano (+57 315 354 0285)"
      >
        <MessageSquare className="w-7 h-7 fill-slate-950 text-slate-950" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-bold text-xs pl-0 group-hover:pl-2 text-slate-950 font-sans">
          WhatsApp Dr. Alexander Solano
        </span>
      </a>

      {/* MODALS */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultAreaId={selectedAreaId}
      />

      <PracticeAreaModal
        area={activePracticeModalArea}
        onClose={() => setActivePracticeModalArea(null)}
        onSelectArea={(areaId) => handleOpenConsultationForArea(areaId)}
      />

      <AttorneyModal
        attorney={activeAttorneyModal}
        onClose={() => setActiveAttorneyModal(null)}
        onOpenConsultation={() => {
          setSelectedAreaId(undefined);
          setIsConsultationOpen(true);
        }}
      />
    </div>
  );
}
