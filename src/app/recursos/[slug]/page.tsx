import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  FileText, 
  Download, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Scale, 
  BookOpen, 
  Award, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingSection from '@/components/BookingSection';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import { PREMIUM_RESOURCES, getResourceBySlug } from '@/lib/resourcesLibrary';
import { getKnowledgeNode } from '@/lib/knowledgeGraph';

interface ResourcePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return PREMIUM_RESOURCES.map(r => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const resource = getResourceBySlug(params.slug);
  if (!resource) return {};

  const url = `https://proteccionfamiliar.co/recursos/${resource.slug}`;

  return {
    title: resource.metaTitle,
    description: resource.metaDescription,
    keywords: resource.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: resource.metaTitle,
      description: resource.metaDescription,
      url,
      siteName: 'Protección Familiar',
      images: [{
        url: 'https://proteccionfamiliar.co/wp-content/uploads/2026/07/Alexander-Solano-Abogado.jpeg',
        width: 1200,
        height: 630,
        alt: resource.title,
      }],
      locale: 'es_CO',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: resource.metaTitle,
      description: resource.metaDescription,
      images: ['https://proteccionfamiliar.co/wp-content/uploads/2026/07/Alexander-Solano-Abogado.jpeg'],
    }
  };
}

export default function ResourceDetailPage({ params }: ResourcePageProps) {
  const resource = getResourceBySlug(params.slug);
  if (!resource) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] flex flex-col justify-center items-center p-6 text-center space-y-4">
        <h1 className="text-3xl font-serif font-bold text-[#1A1A1A]">Recurso en Proceso de Actualización</h1>
        <p className="text-xs text-[#555555]">El documento solicitado está siendo adaptado con la normativa 2026.</p>
        <Link href="/" className="px-6 py-3 bg-[#0B2818] text-white text-xs font-bold uppercase rounded-xl">Volver al Inicio</Link>
      </div>
    );
  }

  const jsonLdDocument = {
    '@context': 'https://schema.org',
    '@type': 'DigitalDocument',
    'name': resource.title,
    'description': resource.metaDescription,
    'fileFormat': resource.fileFormat,
    'version': resource.version,
    'author': {
      '@type': 'Person',
      'name': resource.author,
      'url': 'https://proteccionfamiliar.co/dr-alexander-solano'
    },
    'datePublished': resource.datePublished,
    'dateModified': resource.dateModified,
    'mainEntityOfPage': `https://proteccionfamiliar.co/recursos/${resource.slug}`
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] flex flex-col font-sans selection:bg-[#0B2818] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdDocument) }}
      />

      <Navbar />

      <main className="flex-1">
        {/* BREADCRUMBS */}
        <div className="bg-[#F3EFEA] border-b border-[#E5DFD5] py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#666666]">
            <Link href="/" className="hover:text-[#0B2818]">Inicio</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="hover:text-[#0B2818]">Biblioteca de Recursos</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-bold text-[#0B2818] truncate max-w-xs">{resource.title}</span>
          </div>
        </div>

        {/* HERO RECURSO */}
        <section className="py-16 lg:py-20 bg-[#FAF8F5] border-b border-[#E5DFD5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#0B2818]/10 text-[#0B2818] text-xs font-bold uppercase tracking-wider font-mono">
                {resource.type.replace('-', ' ')} • {resource.fileFormat} ({resource.fileSize})
              </span>
              <span className="text-xs text-[#666666] font-mono bg-[#E5DFD5] px-2.5 py-0.5 rounded">
                Versión: {resource.version}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1A1A1A] leading-tight">
              {resource.title}
            </h1>

            <p className="text-base text-[#444444] leading-relaxed">
              {resource.subtitle}
            </p>

            {/* BOX DE DESCARGA ACTION */}
            <div className="p-6 rounded-3xl bg-[#F3EFEA] border-2 border-[#0B2818] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-xs font-bold text-[#0B2818] font-serif uppercase tracking-wider flex items-center gap-1.5 justify-center sm:justify-start">
                  <ShieldCheck className="w-4 h-4 text-[#0B2818]" />
                  <span>Documento Verificado por el Dr. Alexander Solano</span>
                </div>
                <p className="text-xs text-[#555555]">
                  Última actualización legal: <time dateTime={resource.dateModified}>{resource.dateModified}</time>
                </p>
              </div>

              <a
                href="#agendar"
                className="w-full sm:w-auto px-8 py-4 bg-[#0B2818] hover:bg-[#071C11] text-white font-bold text-xs uppercase tracking-wider rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-transform active:scale-95 shrink-0"
              >
                <Download className="w-4 h-4 text-amber-300" />
                <span>Solicitar Acceso a Descarga</span>
              </a>
            </div>
          </div>
        </section>

        {/* CONTENIDO DEL RECURSO */}
        <article className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-8 text-xs sm:text-sm text-[#333333] leading-relaxed">
            {resource.sections.map((sec, idx) => (
              <section key={idx} className="space-y-3 bg-[#FAF8F5] p-6 rounded-2xl border border-[#E5DFD5]">
                <h2 className="text-xl font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#0B2818]" /> {sec.heading}
                </h2>
                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">{sec.body}</p>
              </section>
            ))}
          </div>

          {/* FUNDAMENTO NORMATIVO */}
          <div className="p-6 bg-[#FAF8F5] border border-[#E5DFD5] rounded-2xl space-y-3 text-xs">
            <h3 className="font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#0B2818]" /> Fundamento Legal del Recurso
            </h3>
            <div className="flex flex-wrap gap-2">
              {resource.legalBasis.map((basis, idx) => (
                <span key={idx} className="bg-[#E5DFD5]/60 text-[#1A1A1A] px-3 py-1 rounded-lg border border-[#D8D1C5] font-semibold">
                  {basis}
                </span>
              ))}
            </div>
          </div>

          {/* BIBLIOGRAFÍA */}
          <div className="p-6 bg-[#F3EFEA] border border-[#E5DFD5] rounded-2xl space-y-2 text-xs">
            <h3 className="font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
              <Award className="w-4 h-4 text-[#0B2818]" /> Fuentes & Referencias
            </h3>
            <ul className="space-y-1 text-[#555555] pl-4 list-disc">
              {resource.bibliography.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </div>
        </article>

        {/* EMBEDDED BOOKING FUNNEL */}
        <BookingSection />
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
