import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Scale, Award, GraduationCap, Clock, ChevronRight, FileText, ExternalLink, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import { KNOWLEDGE_CATEGORIES, KNOWLEDGE_ARTICLES } from '@/lib/knowledgeCenter';

export const metadata: Metadata = {
  title: 'Centro de Conocimiento Jurídico | Protección Familiar | Investigaciones & Doctrina',
  description: 'Repositorio de conocimiento jurídico en Derecho de Familia, Sucesiones y Derecho Probatorio en Colombia. Investigaciones, jurisprudencia y doctrina por el Dr. Alexander Solano.',
  alternates: {
    canonical: 'https://proteccionfamiliar.co/centro-de-conocimiento',
  }
};

export default function KnowledgeCenterIndex() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] flex flex-col font-sans selection:bg-[#0B2818] selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#E5DFD5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2818]/10 text-[#0B2818] text-xs font-bold uppercase tracking-wider font-serif">
              <BookOpen className="w-4 h-4 text-[#0B2818]" /> Repositorio Doctrinario & Jurisprudencial
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1A1A1A]">
              Centro de Conocimiento Jurídico
            </h1>
            <p className="text-base text-[#555555] leading-relaxed">
              Publicaciones académicas, análisis de la Corte Constitucional y estudios sobre derecho de familia y régimen patrimonial bajo la dirección del Dr. Alexander Solano.
            </p>
          </div>
        </section>

        {/* CATEGORIES GRID */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {KNOWLEDGE_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/centro-de-conocimiento/${cat.slug}`}
                className="p-6 bg-[#FAF8F5] hover:bg-[#F3EFEA] border-2 border-[#E5DFD5] hover:border-[#0B2818] rounded-3xl transition-all space-y-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0B2818] text-amber-200 flex items-center justify-center font-serif font-bold">
                  <Scale className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-serif font-bold text-[#1A1A1A] group-hover:text-[#0B2818]">
                  {cat.name}
                </h2>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {cat.description}
                </p>
                <div className="text-xs font-bold text-[#0B2818] flex items-center gap-1 pt-2">
                  <span>Explorar Doctrina</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* FEATURED ARTICLES LIST */}
          <div className="space-y-6 pt-6">
            <h2 className="text-2xl font-serif font-bold text-[#1A1A1A]">Investigaciones Destacadas</h2>
            <div className="space-y-4">
              {KNOWLEDGE_ARTICLES.map((art) => (
                <div key={art.id} className="p-6 bg-[#FAF8F5] border border-[#E5DFD5] rounded-2xl space-y-3">
                  <div className="flex items-center gap-3 text-xs text-[#666666]">
                    <span className="font-bold text-[#0B2818] uppercase font-serif bg-[#0B2818]/10 px-2.5 py-0.5 rounded">
                      {art.category.name}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {art.readingTimeMinutes} min de lectura</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#1A1A1A]">
                    <Link href={`/centro-de-conocimiento/${art.category.slug}/${art.slug}`} className="hover:text-[#0B2818] transition-colors">
                      {art.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-[#555555] leading-relaxed max-w-3xl">
                    {art.subtitle}
                  </p>
                  <div className="flex items-center justify-between pt-2 text-xs">
                    <span className="text-[#555555]">Por <strong className="text-[#0B2818]">{art.author.name}</strong> ({art.author.cardId})</span>
                    <Link href={`/centro-de-conocimiento/${art.category.slug}/${art.slug}`} className="font-bold text-[#0B2818] flex items-center gap-1 hover:underline">
                      Leer Artículo Completo <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
