import type { Metadata } from 'next';
import Link from 'next/link';
import { Factory, ChevronRight, Layers } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import EditorialDashboard from '@/components/EditorialDashboard';

export const metadata: Metadata = {
  title: 'Editorial Dashboard & Legal Content Factory | Protección Familiar',
  description: 'Consola de administración y monitoreo de la fábrica de contenido jurídico (LCF) de Protección Familiar. Control de calidad, vacíos temáticos y autoridad semántica.',
  alternates: {
    canonical: 'https://proteccionfamiliar.co/editorial-dashboard',
  }
};

export default function EditorialDashboardPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] flex flex-col font-sans selection:bg-[#0B2818] selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* BREADCRUMBS */}
        <div className="bg-[#F3EFEA] border-b border-[#E5DFD5] py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#666666]">
            <Link href="/" className="hover:text-[#0B2818]">Inicio</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-bold text-[#0B2818]">Editorial Dashboard (LCF)</span>
          </div>
        </div>

        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4 max-w-3xl border-b border-[#E5DFD5] pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2818]/10 text-[#0B2818] text-xs font-bold uppercase tracking-wider font-serif">
              <Factory className="w-3.5 h-3.5 text-[#0B2818]" /> Legal Content Factory (LCF)
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1A1A1A]">
              Editorial Dashboard Enterprise
            </h1>
            <p className="text-base text-[#555555] leading-relaxed">
              Consola industrial de monitoreo, análisis de oportunidades SEO/GEO, prevención de canibalización y aceleración del crecimiento de autoridad temática.
            </p>
          </div>

          <EditorialDashboard />
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
