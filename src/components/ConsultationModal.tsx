'use client';
import { useState } from 'react';
import { X, Calendar, CheckCircle2, Send, Lock, MessageSquare, ExternalLink } from 'lucide-react';
import { PRACTICE_AREAS } from '@/lib/data';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultAreaId?: string;
}

export default function ConsultationModal({ isOpen, onClose, defaultAreaId }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    area: defaultAreaId || PRACTICE_AREAS[0].id,
    date: '',
    notes: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const selectedPractice = PRACTICE_AREAS.find(a => a.id === formData.area) || PRACTICE_AREAS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setSuccess(false);
    onClose();
  };

  // Build Google Calendar Event URL
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`Consulta Legal: ${selectedPractice.title} - Protección Familiar`);
    const details = encodeURIComponent(
      `Consulta jurídica especializada con Protección Familiar & Asociados.\n` +
      `Cliente: ${formData.name || 'Cliente'}\n` +
      `Teléfono/WhatsApp: ${formData.phone || '+57 315 354 0285'}\n` +
      `Área: ${selectedPractice.title}\n` +
      `Notas: ${formData.notes || 'Consulta General'}`
    );
    const location = encodeURIComponent('Virtual (Google Meet/WhatsApp) o Presencial');

    let startDateStr = '';
    let endDateStr = '';

    if (formData.date) {
      const d = new Date(formData.date);
      d.setHours(10, 0, 0); // Default to 10:00 AM
      const endD = new Date(d);
      endD.setHours(11, 0, 0); // 1 hour duration

      const formatIso = (dateObj: Date) => dateObj.toISOString().replace(/-|:|\.\d\d\d/g, '');
      startDateStr = formatIso(d);
      endDateStr = formatIso(endD);
    } else {
      // Tomorrow 10 AM default
      const d = new Date();
      d.setDate(d.getDate() + 1);
      d.setHours(10, 0, 0);
      const endD = new Date(d);
      endD.setHours(11, 0, 0);
      const formatIso = (dateObj: Date) => dateObj.toISOString().replace(/-|:|\.\d\d\d/g, '');
      startDateStr = formatIso(d);
      endDateStr = formatIso(endD);
    }

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startDateStr}/${endDateStr}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden relative">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-serif">Agendar Consulta Jurídica</h3>
              <p className="text-xs text-slate-400">Sincronización directa con Google Calendar o WhatsApp</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {success ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-white font-serif">Solicitud Recibida con Éxito</h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Un abogado especialista se comunicará al teléfono <span className="text-amber-400 font-semibold">{formData.phone}</span> para confirmar tu horario.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={getGoogleCalendarUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-lg shadow-md flex items-center justify-center gap-2 transition-colors"
                >
                  <Calendar className="w-4 h-4" /> Agregar a mi Google Calendar <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-lg transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Dr. Carlos Rodríguez"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Teléfono de Contacto / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. +57 315 354 0285"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ejemplo@correo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Área Jurídica de Interés
                  </label>
                  <select
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    {PRACTICE_AREAS.map((area) => (
                      <option key={area.id} value={area.id}>
                        {area.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Fecha Preferida para la Cita
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Resumen del Caso (Confidencial)
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe brevemente la situación jurídica para asignar al especialista..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 py-1">
                <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Protegido por Secreto Profesional Abogado-Cliente.</span>
              </div>

              <div className="space-y-2 pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm rounded-lg shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <span className="inline-block animate-spin font-bold">Procesando...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Enviar Solicitud de Cita
                    </>
                  )}
                </button>

                <div className="relative flex py-1 items-center">
                  <div className="flex-grow border-t border-slate-800"></div>
                  <span className="flex-shrink mx-3 text-[10px] text-slate-500 font-semibold uppercase">O Agendar Directamente</span>
                  <div className="flex-grow border-t border-slate-800"></div>
                </div>

                <a
                  href={getGoogleCalendarUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-slate-950 hover:bg-slate-850 border border-blue-500/40 text-blue-300 hover:text-white font-bold text-xs rounded-lg shadow-md flex items-center justify-center gap-2 transition-colors"
                >
                  <Calendar className="w-4 h-4 text-blue-400" />
                  Agendar Cita en Google Calendar <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
