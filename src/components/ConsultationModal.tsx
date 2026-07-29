'use client';
import { useState } from 'react';
import { X, Calendar, CheckCircle2, Send, Lock, MessageSquare, ExternalLink, Sparkles } from 'lucide-react';
import { PRACTICE_AREAS } from '@/lib/data';
import GoogleCalendarWidget from '@/components/GoogleCalendarWidget';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultAreaId?: string;
}

export default function ConsultationModal({ isOpen, onClose, defaultAreaId }: ConsultationModalProps) {
  const [activeTab, setActiveTab] = useState<'google' | 'form'>('google');
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden relative max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-5 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-amber-500/20 border border-blue-500/30 flex items-center justify-center text-amber-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-serif flex items-center gap-2">
                Agendar Consulta Jurídica
              </h3>
              <p className="text-xs text-slate-400">Sincronización en tiempo real con Google Calendar y WhatsApp</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="px-6 pt-4 shrink-0 bg-slate-950/50 border-b border-slate-800/80">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('google')}
              className={`py-2.5 px-4 text-xs font-bold rounded-t-xl transition-all border-t border-x flex items-center gap-2 ${
                activeTab === 'google'
                  ? 'bg-slate-900 border-slate-800 text-amber-300 shadow-md'
                  : 'bg-transparent border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              Sincronización Google Calendar (Tiempo Real)
            </button>
            <button
              onClick={() => setActiveTab('form')}
              className={`py-2.5 px-4 text-xs font-bold rounded-t-xl transition-all border-t border-x flex items-center gap-2 ${
                activeTab === 'form'
                  ? 'bg-slate-900 border-slate-800 text-amber-300 shadow-md'
                  : 'bg-transparent border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Send className="w-3.5 h-3.5 text-amber-400" />
              Formulario de Contacto Directo
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto flex-1">
          {activeTab === 'google' ? (
            <GoogleCalendarWidget selectedAreaTitle={selectedPractice.title} onSuccess={() => setSuccess(true)} />
          ) : success ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-white font-serif">Solicitud Recibida con Éxito</h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Un abogado especialista se comunicará al teléfono <span className="text-amber-400 font-semibold">{formData.phone}</span> para confirmar tu horario.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-lg transition-colors"
              >
                Cerrar
              </button>
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
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-amber-400 outline-none"
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
                    placeholder="+57 315 354 0285"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-amber-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ejemplo@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-amber-400 outline-none"
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
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:border-amber-400 outline-none"
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
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:border-amber-400 outline-none"
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
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-amber-400 outline-none resize-none"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 py-1">
                <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Protegido por Secreto Profesional Abogado-Cliente.</span>
              </div>

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
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
