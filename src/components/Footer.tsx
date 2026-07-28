import { Scale, Phone, Mail, MapPin, Shield, Clock } from 'lucide-react';
import { FIRM_INFO } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950">
                <Scale className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white font-serif tracking-tight">
                PROTECCIÓN FAMILIAR
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {FIRM_INFO.description}
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400/90 font-medium bg-amber-500/10 border border-amber-500/20 px-3 py-2 rounded-lg w-fit">
              <Shield className="w-4 h-4 text-amber-400" />
              Firma Colegiada & Certificada
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4 font-serif">
              Áreas de Práctica
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#servicios" className="hover:text-amber-400 transition-colors">Derecho de Familia & Custodia</a></li>
              <li><a href="#servicios" className="hover:text-amber-400 transition-colors">Protección Patrimonial & Testamentos</a></li>
              <li><a href="#servicios" className="hover:text-amber-400 transition-colors">Derecho Civil & Contratos</a></li>
              <li><a href="#servicios" className="hover:text-amber-400 transition-colors">Defensa Penal 24/7 & Amparos</a></li>
              <li><a href="#servicios" className="hover:text-amber-400 transition-colors">Derecho Corporativo & PyMEs</a></li>
              <li><a href="#servicios" className="hover:text-amber-400 transition-colors">Derecho Laboral</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4 font-serif">
              Contacto Directo
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{FIRM_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={'tel:' + FIRM_INFO.phone} className="hover:text-white transition-colors">{FIRM_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={'mailto:' + FIRM_INFO.email} className="hover:text-white transition-colors">{FIRM_INFO.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{FIRM_INFO.workingHours}</span>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div>
              <h4 className="text-amber-400 font-bold text-sm mb-2 flex items-center gap-2">
                <Phone className="w-4 h-4 animate-bounce" /> Línea de Crisis Legal
              </h4>
              <p className="text-xs text-slate-300 mb-4">
                Atención jurídica inmediata en situaciones de detención o contingencias urgentes las 24 horas del día.
              </p>
            </div>
            <a
              href={'tel:' + FIRM_INFO.emergencyPhone}
              className="w-full py-2.5 px-4 text-center text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-colors block uppercase tracking-wide"
            >
              Llamar Ahora: {FIRM_INFO.emergencyPhone}
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {FIRM_INFO.name}. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Aviso de Privacidad</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Código de Ética</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
