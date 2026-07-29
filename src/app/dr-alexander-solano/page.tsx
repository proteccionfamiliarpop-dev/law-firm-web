import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Award, 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  Scale, 
  Video, 
  Mic, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingSection from '@/components/BookingSection';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import { DR_ALEXANDER_SOLANO_EEAT, generatePersonSchema } from '@/lib/eeatData';

export const metadata: Metadata = {
  title: 'Dr. Alexander Solano | Director & Especialista en Derecho de Familia',
  description: 'Perfil profesional, credenciales académicas, publicaciones e investigaciones del Dr. Alexander Solano. Candidato a Doctor en Derecho, Magíster en Derecho y Conciliador Oficial.',
  keywords: [
    'Dr Alexander Solano',
    'Abogado especialista derecho de familia Popayán Cali',
    'Investigador derecho de familia Colombia',
    'Tarjeta profesional 182354 CSJ'
  ],
  alternates: {
    canonical: 'https://proteccionfamiliar.co/dr-alexander-solano',
  },
  openGraph: {
    title: 'Dr. Alexander Solano | Director & Especialista en Derecho de Familia',
    description: 'Perfil académico y profesional del Dr. Alexander Solano. Candidato a Doctor en Derecho, Magíster y Conciliador Oficial.',
    url: 'https://proteccionfamiliar.co/dr-alexander-solano',
    siteName: 'Protección Familiar',
    images: [{
      url: DR_ALEXANDER_SOLANO_EEAT.photoUrl,
      width: 1200,
      height: 630,
      alt: 'Dr. Alexander Solano',
    }],
    locale: 'es_CO',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Alexander Solano | Perfil Académico & Profesional',
    description: 'Candidato a Doctor en Derecho, Magíster y Conciliador Oficial.',
    images: [DR_ALEXANDER_SOLANO_EEAT.photoUrl],
  }
};

export default function DrSolanoPage() {
  const profile = DR_ALEXANDER_SOLANO_EEAT;
  const personJsonLd = generatePersonSchema(profile);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] flex flex-col font-sans selection:bg-[#0B2818] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <Navbar />

      <main className="flex-1">
        {/* BREADCRUMBS */}
        <div className="bg-[#F3EFEA] border-b border-[#E5DFD5] py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#666666]">
            <Link href="/" className="hover:text-[#0B2818]">Inicio</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-bold text-[#0B2818]">Perfil del Dr. Alexander Solano</span>
          </div>
        </div>

        {/* HERO EEAT */}
        <section className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#E5DFD5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* PHOTO CARD EDITORIAL */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF8F5] ring-1 ring-[#0B2818]/10">
                <img
                  src={profile.photoUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2818]/90 via-[#0B2818]/20 to-transparent flex flex-col justify-end p-6 text-white space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 backdrop-blur-md border border-amber-300/30 text-amber-200 text-[10px] font-bold uppercase tracking-wider font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                    <span>{profile.cardId}</span>
                  </div>
                  <h2 className="text-xl font-serif font-bold text-white">{profile.name}</h2>
                  <p className="text-xs text-amber-100/90 font-light">{profile.title}</p>
                </div>
              </div>
            </div>

            {/* BIO & CREDENTIALS BADGES */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2818]/10 text-[#0B2818] text-xs font-bold uppercase tracking-wider font-serif">
                  <Award className="w-4 h-4 text-[#0B2818]" /> Estándar de Autoridad & Excelencia EEAT
                </div>
                <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1A1A1A]">
                  {profile.name}
                </h1>
                <p className="text-base text-[#444444] leading-relaxed">
                  {profile.bio}
                </p>
              </div>

              {/* LISTA DE CREDENCIALES ACREDITADAS */}
              <div className="space-y-3 pt-4 border-t border-[#E5DFD5]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B2818] font-serif flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#0B2818]" /> Formación Académica & Titulaciones Oficiales
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-[#333333]">
                  {profile.credentials.map((cred, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F3EFEA] border border-[#E5DFD5]">
                      <CheckCircle2 className="w-4 h-4 text-[#0B2818] shrink-0" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* VERIFIED ACADEMIC LINKS */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
                <span className="font-serif font-bold text-[#0B2818]">Verificación Académica:</span>
                {profile.sameAs.map((link, idx) => (
                  <a
                    key={idx}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#0B2818] text-white hover:bg-[#071C11] font-medium text-[11px] flex items-center gap-1 transition-colors"
                  >
                    <span>{idx === 0 ? 'Repositorio Uniautónoma' : idx === 1 ? 'ResearchGate' : 'Revista Sci-Cult'}</span>
                    <ExternalLink className="w-3 h-3 text-amber-300" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 1: TIMELINE PROFESIONAL */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-[#1A1A1A]">Trayectoria & Línea de Tiempo Profesional</h2>
            <p className="text-xs text-[#555555]">Hitos de ejercicio profesional, liderazgo institucional e investigación en Colombia.</p>
          </div>

          <div className="relative border-l-2 border-[#0B2818]/30 pl-6 ml-4 sm:ml-8 space-y-8">
            {profile.timeline.map((item, idx) => (
              <div key={idx} className="relative space-y-2">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#0B2818] ring-4 ring-[#FAF8F5]" />
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-mono font-bold text-[#0B2818] bg-[#0B2818]/10 px-2.5 py-0.5 rounded">
                    {item.year}
                  </span>
                  <span className="font-semibold text-[#666666]">{item.institution}</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-[#1A1A1A]">{item.title}</h3>
                <p className="text-xs text-[#555555] leading-relaxed max-w-2xl">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: PUBLICACIONES & INVESTIGACIONES */}
        <section className="py-16 bg-[#F3EFEA] border-y border-[#E5DFD5]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-serif font-bold text-[#1A1A1A]">Publicaciones & Investigaciones Indexadas</h2>
              <p className="text-xs text-[#555555]">Producción académica en revistas científicas y repositorios institucionales.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {profile.publications.map((pub, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5] space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono font-bold text-[#0B2818]">{pub.year}</span>
                      <span className="text-[10px] uppercase tracking-wider font-bold bg-[#0B2818]/10 text-[#0B2818] px-2 py-0.5 rounded">
                        {pub.type}
                      </span>
                    </div>
                    <h3 className="text-base font-serif font-bold text-[#1A1A1A] leading-snug">{pub.title}</h3>
                    <p className="text-xs text-[#666666]">{pub.publisher}</p>
                  </div>
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#0B2818] flex items-center gap-1 hover:underline pt-2 border-t border-[#E5DFD5]"
                  >
                    <span>Consultar Publicación Oficial</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: RECONOCIMIENTOS, DOCENCIA Y CONFERENCIAS */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* RECONOCIMIENTOS */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
              <Award className="w-5 h-5 text-[#0B2818]" /> Reconocimientos & Distinciones
            </h3>
            <div className="space-y-3">
              {profile.awards.map((award, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] space-y-1 text-xs">
                  <div className="flex items-center justify-between font-bold text-[#1A1A1A]">
                    <span>{award.title}</span>
                    <span className="font-mono text-[#0B2818]">{award.year}</span>
                  </div>
                  <p className="text-[#666666]">{award.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CONFERENCIAS Y MEDIOS */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
              <Mic className="w-5 h-5 text-[#0B2818]" /> Conferencias & Ponencias
            </h3>
            <div className="space-y-3">
              {profile.media.map((med, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] space-y-1 text-xs">
                  <div className="flex items-center justify-between font-bold text-[#1A1A1A]">
                    <span>{med.title}</span>
                    <span className="text-[10px] bg-[#0B2818]/10 text-[#0B2818] px-2 py-0.5 rounded font-sans uppercase">{med.type}</span>
                  </div>
                  <p className="text-[#666666]">{med.mediaName} ({med.date})</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EMBEDDED BOOKING FUNNEL */}
        <BookingSection />
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
