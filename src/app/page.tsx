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
  Lock,
  Scale,
  Sparkles
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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      <Navbar onOpenConsultation={() => { setSelectedAreaId(undefined); setIsConsultationOpen(true); }} />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden border-b border-slate-800/60">
          {/* Ambient Glowing Background Lights */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-[400px] h-[250px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-inner">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Defensa Legal Strategics & Alta Eficiencia</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif text-white leading-[1.15]">
                Protegemos a Tu Familia y Blindamos Tu Patrimonio con <span className="gold-gradient-text">Excelencia Jurídica</span>
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
                Asesoría legal rigurosa, representación ética y resultados definitivos en derecho familiar, civil, penal y corporativo. Más de 18 años resolviendo controversias complejas.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-sm rounded-xl shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Agendar Primera Consulta Gratuita
                </button>
                <a
                  href={`tel:${FIRM_INFO.emergencyPhone}`}
                  className="w-full sm:w-auto px-7 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400 animate-pulse" />
                  Urgencias 24/7: {FIRM_INFO.emergencyPhone}
                </a>
              </div>

              <div className="pt-6 flex items-center justify-center gap-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Confidencialidad Absoluta
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Abogados Titulados & Certificados
                </span>
              </div>
            </div>

            {/* STATS STRIP */}
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {FIRM_INFO.stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 p-6 rounded-2xl text-center hover:border-amber-500/30 transition-colors">
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

        {/* PRACTICE AREAS */}
        <section id="servicios" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-amber-400 uppercase tracking-widest font-serif">
              Soluciones Legales Especializadas
            </h2>
            <p className="text-3xl sm:text-4xl font-bold font-serif text-white">
              Nuestras Áreas de Práctica Jurídica
            </p>
            <p className="text-sm text-slate-400">
              Respaldamos tus derechos con estrategias jurídicas probadas y atención humana de primer nivel.
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
                Equipo de Alto Nivel
              </h2>
              <p className="text-3xl sm:text-4xl font-bold font-serif text-white">
                Abogados Titulares & Especialistas
              </p>
              <p className="text-sm text-slate-400">
                Profesionales altamente capacitados con amplia trayectoria ante juzgados, tribunales y salas superiores.
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
              Respaldo & Garantía
            </h2>
            <p className="text-3xl sm:text-4xl font-bold font-serif text-white">
              Lo Que Dicen Nuestros Clientes
            </p>
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
              <p className="text-3xl sm:text-4xl font-bold font-serif text-white">
                Preguntas Frecuentes
              </p>
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

        {/* BANNER CTA EMERGENCY */}
        <section className="py-16 bg-gradient-to-r from-amber-600/20 via-slate-900 to-amber-700/20 border-y border-amber-500/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
              ¿Enfrentas una Situación Legal Urgente o Detención?
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mx-auto">
              Nuestra unidad de guardia penal y amparos opera las 24 horas del día, los 365 días del año.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${FIRM_INFO.emergencyPhone}`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm rounded-xl shadow-xl shadow-amber-500/20 transition-all hover:scale-105"
              >
                <PhoneCall className="w-5 h-5 animate-pulse" />
                Llamada Inmediata 24/7: {FIRM_INFO.emergencyPhone}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

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
