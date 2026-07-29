import type { Metadata } from 'next';
import Link from 'next/link';
import { Scale, Share2, Layers, BookOpen, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import KnowledgeGraphVisualizer from '@/components/KnowledgeGraphVisualizer';

export const metadata: Metadata = {
  title: 'Grafo de Conocimiento Jurídico Interactivo | Protección Familiar',
  description: 'Visualizador del Grafo de Conocimiento Jurídico de Protección Familiar. Nodos interconectados de leyes, decretos, divorcios, custodia y jurisprudencia.',
  alternates: {
    canonical: 'https://proteccionfamiliar.co/grafo-de-conocimiento',
  }
};

export default function KnowledgeGraphPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] flex flex-col font-sans selection:bg-[#0B2818] selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* BREADCRUMBS */}
        <div className="bg-[#F3EFEA] border-b border-[#E5DFD5] py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#666666]">
            <Link href="/" className="hover:text-[#0B2818]">Inicio</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-bold text-[#0B2818]">Grafo de Conocimiento Jurídico</span>
          </div>
        </div>

        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4 max-w-3xl border-b border-[#E5DFD5] pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2818]/10 text-[#0B2818] text-xs font-bold uppercase tracking-wider font-serif">
              <Share2 className="w-3.5 h-3.5 text-[#0B2818]" /> Ecosistema de Inteligencia Jurídica
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1A1A1A]">
              Grafo de Conocimiento Interactivo
            </h1>
            <p className="text-base text-[#555555] leading-relaxed">
              Explore las relaciones conceptuales y normativas entre nuestras áreas de práctica, decretos, jurisprudencia y calculadoras jurídicas.
            </p>
          </div>

          <KnowledgeGraphVisualizer />
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
