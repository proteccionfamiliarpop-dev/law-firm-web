import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BookOpen, Scale, Clock, ChevronRight, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import { KNOWLEDGE_CATEGORIES, getArticlesByCategory } from '@/lib/knowledgeCenter';

interface CategoryPageProps {
  params: { category: string };
}

export async function generateStaticParams() {
  return KNOWLEDGE_CATEGORIES.map(cat => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const cat = KNOWLEDGE_CATEGORIES.find(c => c.slug === params.category);
  if (!cat) return {};

  return {
    title: `${cat.name} | Centro de Conocimiento | Protección Familiar`,
    description: cat.description,
    alternates: {
      canonical: `https://proteccionfamiliar.co/centro-de-conocimiento/${cat.slug}`,
    }
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const cat = KNOWLEDGE_CATEGORIES.find(c => c.slug === params.category);
  if (!cat) notFound();

  const articles = getArticlesByCategory(params.category);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] flex flex-col font-sans selection:bg-[#0B2818] selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* BREADCRUMBS */}
        <div className="bg-[#F3EFEA] border-b border-[#E5DFD5] py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#666666]">
            <Link href="/" className="hover:text-[#0B2818]">Inicio</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/centro-de-conocimiento" className="hover:text-[#0B2818]">Centro de Conocimiento</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-bold text-[#0B2818]">{cat.name}</span>
          </div>
        </div>

        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2 border-b border-[#E5DFD5] pb-6">
            <h1 className="text-3xl font-serif font-bold text-[#1A1A1A]">{cat.name}</h1>
            <p className="text-xs text-[#555555]">{cat.description}</p>
          </div>

          <div className="space-y-4">
            {articles.map((art) => (
              <div key={art.id} className="p-6 bg-[#FAF8F5] border border-[#E5DFD5] rounded-2xl space-y-3">
                <h2 className="text-xl font-serif font-bold text-[#1A1A1A]">
                  <Link href={`/centro-de-conocimiento/${art.category.slug}/${art.slug}`} className="hover:text-[#0B2818]">
                    {art.title}
                  </Link>
                </h2>
                <p className="text-xs text-[#555555] leading-relaxed">{art.subtitle}</p>
                <div className="flex items-center justify-between pt-2 text-xs">
                  <span className="text-[#666666]">Por {art.author.name} • {art.readingTimeMinutes} min de lectura</span>
                  <Link href={`/centro-de-conocimiento/${art.category.slug}/${art.slug}`} className="font-bold text-[#0B2818] flex items-center gap-1">
                    Leer Publicación <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
