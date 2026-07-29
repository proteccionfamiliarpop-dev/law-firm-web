import { Shield, Phone, Mail, MapPin, Calendar, ExternalLink, ArrowUpRight } from 'lucide-react';
import { FIRM_INFO } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-[#FAF8F5] text-[#1A1A1A] border-t border-[#E5DFD5]">
      {/* Top Banner - Deep Emerald Accent */}
      <div className="bg-[#0B2818] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-[#071C11]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl font-bold font-serif text-amber-100">
              Dr. Alexander Solano — Tarjeta Profesional Nº. 182.354 CSJ
            </h3>
            <p className="text-xs text-amber-200/80 leading-relaxed font-sans">
              Abogado, Conciliador, Especialista en Derecho de Familia, Magíster en Derecho y Candidato a Doctor en Derecho. Litigio de alta complejidad en Popayán, Cali y Colombia.
            </p>
          </div>
          <a
            href="https://wa.me/573153540285?text=Hola%20Dr.%20Alexander%20Solano,%20deseo%20solicitar%20asesor%C3%ADa%20legal%20en%20Popay%C3%A1n/Cali"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#FAF8F5] hover:bg-[#F3EFEA] text-[#0B2818] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all shrink-0 flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#0B2818]" />
            Agendar Consulta Privada
          </a>
        </div>
      </div>

      {/* Main Footer Info Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0B2818] flex items-center justify-center text-amber-200 font-serif font-bold text-xl">
                PF
              </div>
              <span className="font-serif text-xl font-bold text-[#1A1A1A]">
                Protección Familiar
              </span>
            </div>
            <p className="text-xs text-[#555555] leading-relaxed">
              Firma boutique especializada en la gestión patrimonial y emocional de la familia en el Cauca y Valle del Cauca.
            </p>
            <div className="text-[11px] font-semibold text-[#0B2818]">
              Dominio Oficial: <span className="underline">proteccionfamiliar.co</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#0B2818] uppercase tracking-wider font-serif">
              Nuestra Especialidad
            </h4>
            <ul className="space-y-2 text-xs text-[#555555]">
              <li><a href="#servicios" className="hover:text-[#0B2818] transition-colors">Divorcio por Mutuo Acuerdo</a></li>
              <li><a href="#servicios" className="hover:text-[#0B2818] transition-colors">Protección Patrimonial & Capitulaciones</a></li>
              <li><a href="#servicios" className="hover:text-[#0B2818] transition-colors">Custodia & Régimen de Alimentos</a></li>
              <li><a href="#servicios" className="hover:text-[#0B2818] transition-colors">Sucesiones & Impugnación Judicial</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#0B2818] uppercase tracking-wider font-serif">
              Sede Principal Popayán
            </h4>
            <div className="space-y-2.5 text-xs text-[#555555]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0B2818] shrink-0 mt-0.5" />
                <span>{FIRM_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0B2818] shrink-0" />
                <span>{FIRM_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0B2818] shrink-0" />
                <span>contacto@proteccionfamiliar.co</span>
              </div>
            </div>
          </div>

          {/* Legal Directory Popayán */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#0B2818] uppercase tracking-wider font-serif">
              Entidades de Popayán
            </h4>
            <ul className="space-y-2 text-xs text-[#555555]">
              <li className="flex items-center justify-between">
                <span>Palacio de Justicia Popayán</span>
                <span className="text-[10px] bg-[#E5DFD5] text-[#1A1A1A] px-2 py-0.5 rounded font-semibold">Juzgados</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Notarías 1, 2 y 3 de Popayán</span>
                <span className="text-[10px] bg-[#E5DFD5] text-[#1A1A1A] px-2 py-0.5 rounded font-semibold">Notarial</span>
              </li>
              <li className="flex items-center justify-between">
                <span>ICBF Seccional Cauca</span>
                <span className="text-[10px] bg-[#E5DFD5] text-[#1A1A1A] px-2 py-0.5 rounded font-semibold">Menores</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div className="mt-12 pt-8 border-t border-[#E5DFD5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666]">
          <p>© 2026 Protección Familiar. Todos los derechos reservados. Abogados de Familia en Popayán y Cali, Colombia.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#0B2818]">Aviso Legal</a>
            <a href="#" className="hover:text-[#0B2818]">Política de Privacidad</a>
            <a href="#" className="hover:text-[#0B2818]">Sucursal Cali</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
