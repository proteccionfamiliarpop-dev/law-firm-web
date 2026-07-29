'use client';

import { useState } from 'react';
import { 
  ShieldCheck, 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Lock,
  HeartHandshake,
  Building2,
  Video,
  Sparkles,
  ShieldAlert,
  Scale,
  MessageSquare
} from 'lucide-react';
import { FIRM_INFO, PRACTICE_AREAS } from '@/lib/data';

export default function BookingSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState('divorcio-mutuo-acuerdo');
  const [selectedModality, setSelectedModality] = useState('presencial');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('09:30 AM');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableTimes = [
    '08:00 AM', '09:30 AM', '11:00 AM', 
    '02:00 PM', '03:30 PM', '05:00 PM'
  ];

  const handleNextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const generateGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`Consulta Legal Privada - Dr. Alexander Solano (${selectedService})`);
    const details = encodeURIComponent(`Consulta legal reservada por ${formData.name}. Modalidad: ${selectedModality}. Teléfono: ${formData.phone}. Notas: ${formData.notes}`);
    const location = encodeURIComponent(selectedModality === 'presencial' ? FIRM_INFO.address : 'Videollamada Google Meet');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  return (
    <section id="agendar" className="py-20 lg:py-28 bg-[#FAF8F5] border-y border-[#E5DFD5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Title Matching Stitch Screen */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2818]/10 text-[#0B2818] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#0B2818]" />
            <span>Reserva de Cita Privada 100% Confidencial</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1A1A1A]">
            Inicie su camino hacia la tranquilidad
          </h2>

          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            Reserve una consulta privada con nuestros especialistas en Derecho de Familia. Un espacio seguro, confidencial y experto.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="bg-[#FAF8F5] border-2 border-[#E5DFD5] rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
          
          {/* Progress Bar & Step Indicators */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-serif font-bold text-[#0B2818] uppercase tracking-wider">
              <span>PASO 0{currentStep} / 04</span>
              <span>
                {currentStep === 1 && 'Especialidad'}
                {currentStep === 2 && 'Modalidad'}
                {currentStep === 3 && 'Fecha & Hora'}
                {currentStep === 4 && 'Tus Datos'}
              </span>
            </div>

            {/* Visual Step Progress Line */}
            <div className="w-full h-1.5 bg-[#E5DFD5] rounded-full overflow-hidden flex">
              <div 
                className="h-full bg-[#0B2818] transition-all duration-500 ease-out" 
                style={{ width: `${(currentStep / 4) * 100}%` }}
              />
            </div>

            <div className="grid grid-cols-4 text-center text-[10px] uppercase font-semibold text-[#666666] pt-1">
              <span className={currentStep >= 1 ? 'text-[#0B2818] font-bold' : ''}>1. Especialidad</span>
              <span className={currentStep >= 2 ? 'text-[#0B2818] font-bold' : ''}>2. Modalidad</span>
              <span className={currentStep >= 3 ? 'text-[#0B2818] font-bold' : ''}>3. Fecha</span>
              <span className={currentStep >= 4 ? 'text-[#0B2818] font-bold' : ''}>4. Confirmación</span>
            </div>
          </div>

          {!isSubmitted ? (
            <div className="pt-4 space-y-8">
              
              {/* STEP 1: ESPECIALIDAD / ASUNTO */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-serif font-bold text-[#1A1A1A] text-center sm:text-left">
                    ¿En qué área requiere orientación?
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {PRACTICE_AREAS.map((area) => {
                      const isSelected = selectedService === area.id;
                      return (
                        <div
                          key={area.id}
                          onClick={() => setSelectedService(area.id)}
                          className={`cursor-pointer p-5 rounded-2xl border-2 transition-all flex items-start gap-4 ${
                            isSelected 
                              ? 'bg-[#0B2818] border-[#0B2818] text-white shadow-lg' 
                              : 'bg-[#FAF8F5] border-[#E5DFD5] hover:border-[#0B2818] text-[#1A1A1A]'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                            isSelected ? 'border-amber-300 bg-amber-400/20 text-amber-200' : 'border-[#E5DFD5] bg-[#E5DFD5]/40 text-[#0B2818]'
                          }`}>
                            {isSelected ? <CheckCircle2 className="w-5 h-5" /> : <div className="w-2.5 h-2.5 rounded-full bg-[#0B2818]/40" />}
                          </div>
                          <div className="space-y-1">
                            <h4 className={`text-base font-serif font-bold ${isSelected ? 'text-white' : 'text-[#1A1A1A]'}`}>
                              {area.title}
                            </h4>
                            <p className={`text-xs ${isSelected ? 'text-amber-100/80' : 'text-[#555555]'}`}>
                              {area.shortDesc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: MODALIDAD (PRESENCIAL O GOOGLE MEET) */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-serif font-bold text-[#1A1A1A] text-center sm:text-left">
                    ¿Cómo prefiere llevar a cabo su consulta?
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div
                      onClick={() => setSelectedModality('presencial')}
                      className={`cursor-pointer p-6 rounded-2xl border-2 transition-all space-y-3 ${
                        selectedModality === 'presencial' 
                          ? 'bg-[#0B2818] border-[#0B2818] text-white shadow-lg' 
                          : 'bg-[#FAF8F5] border-[#E5DFD5] hover:border-[#0B2818] text-[#1A1A1A]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <Building2 className={`w-7 h-7 ${selectedModality === 'presencial' ? 'text-amber-200' : 'text-[#0B2818]'}`} />
                        <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded ${
                          selectedModality === 'presencial' ? 'bg-amber-300/20 text-amber-200 border border-amber-300/30' : 'bg-[#E5DFD5] text-[#0B2818]'
                        }`}>
                          Recomendado
                        </span>
                      </div>
                      <h4 className={`text-lg font-serif font-bold ${selectedModality === 'presencial' ? 'text-white' : 'text-[#1A1A1A]'}`}>
                        Cita Presencial en Oficina
                      </h4>
                      <p className={`text-xs ${selectedModality === 'presencial' ? 'text-amber-100/80' : 'text-[#555555]'}`}>
                        Atención personalizada en nuestro despacho principal en Popayán: Cra 8 #2-44, Oficina 313, Centro.
                      </p>
                    </div>

                    <div
                      onClick={() => setSelectedModality('virtual')}
                      className={`cursor-pointer p-6 rounded-2xl border-2 transition-all space-y-3 ${
                        selectedModality === 'virtual' 
                          ? 'bg-[#0B2818] border-[#0B2818] text-white shadow-lg' 
                          : 'bg-[#FAF8F5] border-[#E5DFD5] hover:border-[#0B2818] text-[#1A1A1A]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <Video className={`w-7 h-7 ${selectedModality === 'virtual' ? 'text-amber-200' : 'text-[#0B2818]'}`} />
                        <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded ${
                          selectedModality === 'virtual' ? 'bg-amber-300/20 text-amber-200 border border-amber-300/30' : 'bg-[#E5DFD5] text-[#0B2818]'
                        }`}>
                          Google Meet
                        </span>
                      </div>
                      <h4 className={`text-lg font-serif font-bold ${selectedModality === 'virtual' ? 'text-white' : 'text-[#1A1A1A]'}`}>
                        Videollamada 100% Online
                      </h4>
                      <p className={`text-xs ${selectedModality === 'virtual' ? 'text-amber-100/80' : 'text-[#555555]'}`}>
                        Atención directa desde Cali o cualquier ciudad de Colombia con generación automática de sala privada en Google Meet.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: FECHA & HORA */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-serif font-bold text-[#1A1A1A] text-center sm:text-left">
                    Seleccione la fecha y franja horaria de su preferencia
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    <div className="md:col-span-6 space-y-2">
                      <label className="block text-xs font-bold uppercase text-[#0B2818]">
                        Fecha de la Consulta
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full p-4 rounded-xl border border-[#E5DFD5] bg-[#FAF8F5] text-sm text-[#1A1A1A] font-semibold focus:outline-none focus:border-[#0B2818]"
                      />
                    </div>

                    <div className="md:col-span-6 space-y-2">
                      <label className="block text-xs font-bold uppercase text-[#0B2818]">
                        Horarios Disponibles (Hora Colombia)
                      </label>
                      <div className="grid grid-cols-2 gap-2.5">
                        {availableTimes.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                              selectedTime === time 
                                ? 'bg-[#0B2818] text-white border-[#0B2818] shadow-md' 
                                : 'bg-[#FAF8F5] text-[#1A1A1A] border-[#E5DFD5] hover:border-[#0B2818]'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: DATOS DEL SOLICITANTE */}
              {currentStep === 4 && (
                <form onSubmit={handleFinalSubmit} className="space-y-6">
                  <h3 className="text-xl font-serif font-bold text-[#1A1A1A] text-center sm:text-left">
                    Complete sus datos de contacto confidenciales
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase text-[#0B2818]">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. María Fernanda Valencia"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3.5 rounded-xl border border-[#E5DFD5] bg-[#FAF8F5] text-xs font-medium text-[#1A1A1A] focus:outline-none focus:border-[#0B2818]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase text-[#0B2818]">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ej. 315 354 0285"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3.5 rounded-xl border border-[#E5DFD5] bg-[#FAF8F5] text-xs font-medium text-[#1A1A1A] focus:outline-none focus:border-[#0B2818]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase text-[#0B2818]">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="contacto@ejemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3.5 rounded-xl border border-[#E5DFD5] bg-[#FAF8F5] text-xs font-medium text-[#1A1A1A] focus:outline-none focus:border-[#0B2818]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase text-[#0B2818]">
                      Breve Resumen del Caso (Opcional & Confidencial)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describa brevemente su consulta de divorcio, custodia o sucesión..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full p-3.5 rounded-xl border border-[#E5DFD5] bg-[#FAF8F5] text-xs font-medium text-[#1A1A1A] focus:outline-none focus:border-[#0B2818]"
                    />
                  </div>

                  <div className="p-4 rounded-xl bg-[#0B2818]/10 border border-[#0B2818]/20 flex items-center gap-3 text-xs text-[#0B2818]">
                    <Lock className="w-5 h-5 shrink-0" />
                    <span>Protegido bajo Secreto Profesional Abogado-Cliente según las normativas éticas del ejercicio de la abogacía en Colombia.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#0B2818] hover:bg-[#071C11] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-xl transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
                  >
                    <span>Confirmar Reservación & Sincronizar</span>
                    <ArrowRight className="w-4 h-4 text-amber-300" />
                  </button>
                </form>
              )}

              {/* Action Buttons (Anterior / Continuar) for Steps 1-3 */}
              {currentStep < 4 && (
                <div className="pt-4 border-t border-[#E5DFD5] flex items-center justify-between gap-4">
                  {currentStep > 1 ? (
                    <button
                      onClick={handlePrevStep}
                      className="px-6 py-3 bg-[#FAF8F5] hover:bg-[#E5DFD5]/50 border border-[#E5DFD5] text-[#1A1A1A] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Anterior
                    </button>
                  ) : <div />}

                  <button
                    onClick={handleNextStep}
                    className="px-8 py-3.5 bg-[#0B2818] hover:bg-[#071C11] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all hover:scale-[1.02] flex items-center gap-2"
                  >
                    <span>Siguiente Paso</span>
                    <ArrowRight className="w-4 h-4 text-amber-300" />
                  </button>
                </div>
              )}

            </div>
          ) : (
            /* Confirmation Screen */
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center text-emerald-700 mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              
              <div className="space-y-2 max-w-lg mx-auto">
                <h3 className="text-2xl font-serif font-bold text-[#1A1A1A]">
                  ¡Cita Solicitada Exitosamente!
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Estimado(a) <strong className="text-[#0B2818]">{formData.name}</strong>, su solicitud ha sido registrada para el <strong className="text-[#0B2818]">{selectedDate || 'día agendado'} a las {selectedTime}</strong> en modalidad <strong className="text-[#0B2818] uppercase">{selectedModality}</strong>.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={generateGoogleCalendarUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 bg-[#0B2818] hover:bg-[#071C11] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-amber-300" />
                  Añadir a mi Google Calendar
                </a>
                <a
                  href={`https://wa.me/573153540285?text=Hola%20Dr.%20Alexander%20Solano,%20acabo%20de%20agendar%20una%20cita%20a%20nombre%20de%20${encodeURIComponent(formData.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Confirmar por WhatsApp (+57 315 354 0285)
                </a>
              </div>
            </div>
          )}

        </div>

        {/* CONFIDENTIALITY TRUST BADGES BELOW FORM MATCHING STITCH SCREENSHOT */}
        <div className="space-y-6 pt-4 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0B2818] uppercase tracking-wider font-serif">
            <Lock className="w-4 h-4" /> Privacidad Absoluta • Su seguridad es nuestra prioridad
          </div>
          <p className="text-xs text-[#666666] max-w-xl mx-auto">
            Su información está protegida por el secreto profesional y protocolos de seguridad de alto nivel. La confidencialidad es la base de nuestra relación abogado-cliente.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-2">
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] text-center space-y-1">
              <Lock className="w-5 h-5 text-[#0B2818] mx-auto" />
              <div className="text-[10px] font-bold uppercase text-[#1A1A1A]">SSL ENCRYPTED</div>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] text-center space-y-1">
              <Scale className="w-5 h-5 text-[#0B2818] mx-auto" />
              <div className="text-[10px] font-bold uppercase text-[#1A1A1A]">SECRETO PROFESIONAL</div>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] text-center space-y-1">
              <ShieldCheck className="w-5 h-5 text-[#0B2818] mx-auto" />
              <div className="text-[10px] font-bold uppercase text-[#1A1A1A]">DATOS PROTEGIDOS</div>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] text-center space-y-1">
              <Sparkles className="w-5 h-5 text-[#0B2818] mx-auto" />
              <div className="text-[10px] font-bold uppercase text-[#1A1A1A]">ABOGADOS CERTIFICADOS</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
