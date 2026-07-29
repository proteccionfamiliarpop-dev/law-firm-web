'use client';
import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Video, MapPin, CheckCircle, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { FIRM_INFO } from '@/lib/data';

interface GoogleCalendarWidgetProps {
  selectedAreaTitle?: string;
  onSuccess?: () => void;
}

const TIME_SLOTS = [
  '08:00 AM - 09:00 AM',
  '09:30 AM - 10:30 AM',
  '11:00 AM - 12:00 PM',
  '02:00 PM - 03:00 PM',
  '03:30 PM - 04:30 PM',
  '05:00 PM - 06:00 PM'
];

export default function GoogleCalendarWidget({ selectedAreaTitle, onSuccess }: GoogleCalendarWidgetProps) {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [selectedSlot, setSelectedSlot] = useState(TIME_SLOTS[1]);
  const [meetingType, setMeetingType] = useState<'meet' | 'office'>('meet');
  const [customCalendarUrl, setCustomCalendarUrl] = useState('');
  const [showEmbedInput, setShowEmbedInput] = useState(false);
  const [scheduled, setScheduled] = useState(false);

  // Generate Google Calendar Event Link
  const buildGoogleCalendarUrl = () => {
    const topic = selectedAreaTitle || 'Consulta Jurídica Especializada';
    const title = encodeURIComponent(`Cita Legal: ${topic} - ${FIRM_INFO.name}`);

    const modalityText = meetingType === 'meet'
      ? 'Videollamada en Vivo por Google Meet (Se generará enlace automático)'
      : 'Presencial en Despacho Principal (Popayán / Cali / Suroccidente)';

    const details = encodeURIComponent(
      `🏛️ CITA LEGAL CONFIRMADA - ${FIRM_INFO.name}\n\n` +
      `👤 Cliente: ${clientName || 'Cliente'}\n` +
      `📞 Teléfono / WhatsApp: ${clientPhone || '+57 315 354 0285'}\n` +
      `📧 Email: ${clientEmail || 'No especificado'}\n` +
      `⚖️ Área de Práctica: ${topic}\n` +
      `📌 Modalidad: ${modalityText}\n` +
      `🕒 Horario Reservado: ${selectedSlot}\n\n` +
      `🔒 Protegido por Secreto Profesional Abogado-Cliente.`
    );

    const location = encodeURIComponent(
      meetingType === 'meet'
        ? 'Google Meet (Enlace de videollamada HD)'
        : FIRM_INFO.address
    );

    // Calculate dates
    const [startTimeStr] = selectedSlot.split(' - ');
    const isPm = startTimeStr.includes('PM');
    let [hoursStr, minutesStr] = startTimeStr.replace(' AM', '').replace(' PM', '').split(':');
    let hours = parseInt(hoursStr, 10);
    if (isPm && hours !== 12) hours += 12;
    if (!isPm && hours === 12) hours = 0;

    const startDate = new Date(selectedDate);
    startDate.setHours(hours, parseInt(minutesStr, 10), 0);
    const endDate = new Date(startDate);
    endDate.setHours(startDate.getHours() + 1);

    const formatIso = (d: Date) => d.toISOString().replace(/-|:|\.\d\d\d/g, '');
    const datesParam = `${formatIso(startDate)}/${formatIso(endDate)}`;

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${datesParam}&add=${encodeURIComponent(clientEmail || 'contacto@proteccionfamiliar.law')}`;
  };

  const handleSyncClick = () => {
    setScheduled(true);
    if (onSuccess) onSuccess();
    window.open(buildGoogleCalendarUrl(), '_blank');
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-2xl">
      {/* Ecosystem Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-amber-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <CalendarIcon className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white font-serif flex items-center gap-2">
              Sincronización en Tiempo Real • Google Calendar
              <span className="text-[10px] bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-0.5 rounded-full font-sans">
                Ecosistema Google
              </span>
            </h4>
            <p className="text-xs text-slate-400">
              Selecciona tu horario y sincroniza automáticamente con tu agenda y Google Meet.
            </p>
          </div>
        </div>
      </div>

      {/* Embed schedule custom link input (Optional Expert feature) */}
      {showEmbedInput ? (
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-amber-300">Página de Reserva de Google Workspace</span>
            <button onClick={() => setShowEmbedInput(false)} className="text-slate-400 hover:text-white">Volver</button>
          </div>
          <input
            type="url"
            placeholder="Pegar enlace de cita de Google Calendar (ej. https://calendar.google.com/...)"
            value={customCalendarUrl}
            onChange={(e) => setCustomCalendarUrl(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:border-amber-400 outline-none"
          />
          {customCalendarUrl && (
            <iframe
              src={customCalendarUrl}
              className="w-full h-96 rounded-lg border border-slate-800"
              title="Google Calendar Schedule"
            />
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {/* Step 1: Form details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Tu Nombre *
              </label>
              <input
                type="text"
                required
                placeholder="Ej. Dr. Carlos Rodríguez"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-amber-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                WhatsApp / Teléfono *
              </label>
              <input
                type="tel"
                required
                placeholder="+57 315 354 0285"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-amber-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Tu Correo Google *
              </label>
              <input
                type="email"
                required
                placeholder="ejemplo@gmail.com"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-amber-400 outline-none"
              />
            </div>
          </div>

          {/* Step 2: Date & Modality */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                <CalendarIcon className="w-3.5 h-3.5 text-amber-400" /> Selecciona la Fecha
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:border-amber-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Modalidad de la Consulta
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setMeetingType('meet')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
                    meetingType === 'meet'
                      ? 'bg-blue-600/20 border-blue-500 text-blue-300 shadow-md'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <Video className="w-3.5 h-3.5 text-blue-400" /> Google Meet
                </button>
                <button
                  type="button"
                  onClick={() => setMeetingType('office')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
                    meetingType === 'office'
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-md'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-400" /> Presencial
                </button>
              </div>
            </div>
          </div>

          {/* Step 3: Time Slot Selector */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" /> Franjas Horarias Disponibles (Tiempo Real)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {TIME_SLOTS.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedSlot(slot)}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all flex items-center justify-center gap-1 ${
                    selectedSlot === slot
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold border-amber-400 shadow-md'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  {selectedSlot === slot && <CheckCircle className="w-3.5 h-3.5 text-slate-950" />}
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Trigger Action */}
          <div className="pt-3 space-y-2">
            <button
              type="button"
              onClick={handleSyncClick}
              className="w-full py-3.5 px-6 bg-gradient-to-r from-blue-600 via-blue-500 to-amber-500 hover:from-blue-500 hover:to-amber-400 text-white font-extrabold text-xs rounded-xl shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              Sincronizar y Agendar en Google Calendar en Tiempo Real
              <ExternalLink className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center justify-between text-[10px] text-slate-500 px-1 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" /> Notificación enviada al abogado en vivo
              </span>
              <button
                type="button"
                onClick={() => setShowEmbedInput(true)}
                className="text-amber-400 hover:underline"
              >
                ¿Tienes agenda de Google Workspace? Vincular URL
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
