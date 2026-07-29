'use client';
import { X, Mail, Phone, GraduationCap, Award, Calendar, BookOpen, ExternalLink } from 'lucide-react';
import { Attorney } from '@/lib/data';

interface AttorneyModalProps {
  attorney: Attorney | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export default function AttorneyModal({ attorney, onClose, onOpenConsultation }: AttorneyModalProps) {
  if (!attorney) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
        {/* Header banner */}
        <div className="relative h-32 bg-gradient-to-r from-amber-600/30 via-slate-900 to-amber-700/20 p-6 flex justify-end shrink-0">
          <button onClick={onClose} className="text-slate-400 hover:text-white p-2 rounded-lg bg-slate-950/50 backdrop-blur-sm h-fit">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Details */}
        <div className="px-6 pb-6 relative -mt-16 overflow-y-auto space-y-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4">
            <img
              src={attorney.image}
              alt={attorney.name}
              className="w-28 h-28 rounded-2xl object-cover border-4 border-slate-900 shadow-xl"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-white font-serif">{attorney.name}</h3>
              <p className="text-xs font-semibold text-amber-400">{attorney.role}</p>
              <div className="flex items-center justify-center sm:justify-start gap-2 mt-1">
                <span className="text-[11px] bg-amber-500/10 border border-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full font-medium">
                  {attorney.experience}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-xs text-slate-300">
            <div>
              <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-1 font-serif flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" /> Especialidad
              </h4>
              <p className="bg-slate-950/60 border border-slate-800 p-2.5 rounded-lg text-slate-200">{attorney.specialty}</p>
            </div>

            <div>
              <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-1 font-serif flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-amber-400" /> Formación Académica & Títulos
              </h4>
              <p className="bg-slate-950/60 border border-slate-800 p-2.5 rounded-lg text-slate-200 font-medium">{attorney.education}</p>
            </div>

            <div>
              <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-1 font-serif">
                Perfil & Trayectoria
              </h4>
              <p className="leading-relaxed text-slate-300">{attorney.bio}</p>
            </div>

            {/* Publications */}
            {attorney.publications && attorney.publications.length > 0 && (
              <div>
                <h4 className="font-bold text-amber-400 uppercase tracking-wider text-[11px] mb-2 font-serif flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" /> Obras Académicas & Publicaciones Jurídicas
                </h4>
                <div className="space-y-2">
                  {attorney.publications.map((pub, idx) => (
                    <div key={idx} className="bg-slate-950/80 border border-slate-800 p-3 rounded-xl space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                          {pub.type}
                        </span>
                        {pub.url && (
                          <a
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] text-amber-300 hover:underline flex items-center gap-1 font-semibold"
                          >
                            Ver Publicación <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                      <p className="text-xs text-slate-200 font-medium leading-normal">{pub.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <a href={'mailto:' + attorney.email} className="hover:text-amber-400 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> Directo
              </a>
              <span>•</span>
              <a href={'tel:' + attorney.phone.replace(/\s+/g, '')} className="hover:text-amber-400 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" /> {attorney.phone}
              </a>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-full sm:w-auto px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-lg shadow-md flex items-center justify-center gap-1.5 transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" /> Agendar Consulta con Abogado
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
