import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  BookOpen, 
  Scale, 
  Clock, 
  ChevronRight, 
  Award, 
  GraduationCap, 
  ExternalLink, 
  Calendar,
  Lock,
  ArrowRight
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingSection from '@/components/BookingSection';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import TableOfContents from '@/components/TableOfContents';
import { 
  KNOWLEDGE_ARTICLES, 
  getArticleBySlug, 
  ArticleEntity 
} from '@/lib/knowledgeCenter';

interface ArticlePageProps {
  params: { category: string; slug: string };
}

export async function generateStaticParams() {
  return KNOWLEDGE_ARTICLES.map(art => ({
    category: art.category.slug,
    slug: art.slug
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.category, params.slug);
  if (!article) return {};

  const url = `https://proteccionfamiliar.co/centro-de-conocimiento/${article.category.slug}/${article.slug}`;

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url,
      siteName: 'Protección Familiar',
      images: [{
        url: article.author.avatar,
        width: 1200,
        height: 630,
        alt: article.title,
      }],
      locale: 'es_CO',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metaTitle,
      description: article.metaDescription,
      images: [article.author.avatar],
    }
  };
}

export default function ArticleDetailPage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.category, params.slug);
  if (!article) notFound();

  const jsonLdScholarly = {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    'headline': article.title,
    'description': article.metaDescription,
    'author': {
      '@type': 'Person',
      'name': article.author.name,
      'jobTitle': article.author.role,
      'sameAs': article.author.sameAs
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Protección Familiar',
      'logo': 'https://proteccionfamiliar.co/wp-content/uploads/2026/07/Alexander-Solano-Abogado.jpeg'
    },
    'datePublished': article.datePublished,
    'dateModified': article.dateModified,
    'mainEntityOfPage': `https://proteccionfamiliar.co/centro-de-conocimiento/${article.category.slug}/${article.slug}`
  };

  const jsonLdFaq = article.faqs ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': article.faqs.map(f => ({
      '@type': 'Question',
      'name': f.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': f.answer
      }
    }))
  } : null;

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] flex flex-col font-sans selection:bg-[#0B2818] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdScholarly) }}
      />
      {jsonLdFaq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      )}

      <Navbar />

      <main className="flex-1">
        {/* BREADCRUMBS */}
        <nav aria-label="Breadcrumbs" className="bg-[#F3EFEA] border-b border-[#E5DFD5] py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-xs text-[#666666]">
            <Link href="/" className="hover:text-[#0B2818]">Inicio</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/centro-de-conocimiento" className="hover:text-[#0B2818]">Centro de Conocimiento</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href={`/centro-de-conocimiento/${article.category.slug}`} className="hover:text-[#0B2818]">
              {article.category.name}
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-bold text-[#0B2818] truncate max-w-xs">{article.title}</span>
          </div>
        </nav>

        {/* ARTICLE HEADER */}
        <section className="py-16 lg:py-20 bg-[#FAF8F5] border-b border-[#E5DFD5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#0B2818]/10 text-[#0B2818] text-xs font-bold uppercase tracking-wider font-serif">
                {article.category.name}
              </span>
              <span className="text-xs text-[#666666] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#0B2818]" /> {article.readingTimeMinutes} minutos de lectura
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1A1A1A] leading-tight">
              {article.title}
            </h1>

            <p className="text-base text-[#444444] leading-relaxed">
              {article.subtitle}
            </p>

            {/* AUTHOR EEAT BANNER */}
            <div className="p-5 rounded-2xl bg-[#F3EFEA] border border-[#E5DFD5] flex items-start gap-4">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-14 h-14 rounded-xl object-cover border border-[#E5DFD5] shrink-0"
              />
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <h3 className="font-serif font-bold text-[#1A1A1A] text-sm">{article.author.name}</h3>
                  <span className="text-[10px] bg-[#0B2818] text-white px-2 py-0.5 rounded font-mono">
                    {article.author.cardId}
                  </span>
                </div>
                <p className="text-[#555555]">{article.author.credentials}</p>
                <div className="flex items-center gap-3 pt-1 text-[11px] font-bold text-[#0B2818]">
                  {article.author.sameAs.map((link, idx) => (
                    <a key={idx} href={link} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-0.5">
                      Ver Publicación <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN ARTICLE BODY */}
        <article itemScope itemType="https://schema.org/ScholarlyArticle" className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* AUTOMATIC TABLE OF CONTENTS */}
          <TableOfContents items={article.tableOfContents} />

          {/* SECTIONS */}
          <div className="space-y-10">
            {article.sections.map((sec) => (
              <section key={sec.id} id={sec.id} className="space-y-3 bg-[#FAF8F5] p-6 rounded-2xl border border-[#E5DFD5]">
                <h2 className="text-xl font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#0B2818]" /> {sec.heading}
                </h2>
                <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">{sec.body}</p>
              </section>
            ))}
          </div>

          {/* JURISPRUDENCE BOX */}
          {article.jurisprudence.length > 0 && (
            <div className="p-6 bg-[#FAF8F5] border-2 border-[#0B2818] rounded-3xl space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B2818] font-serif border-b border-[#E5DFD5] pb-2">
                <Scale className="w-4 h-4 text-[#0B2818]" />
                <span>Jurisprudencia & Precedentes Constitucionales Vinculados</span>
              </div>
              <div className="space-y-3">
                {article.jurisprudence.map((j, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#F3EFEA] border border-[#E5DFD5] space-y-1 text-xs">
                    <div className="font-serif font-bold text-[#1A1A1A] flex items-center justify-between">
                      <span>{j.sentenceOrLaw}</span>
                      <span className="text-[10px] text-[#0B2818] bg-[#0B2818]/10 px-2 py-0.5 rounded uppercase font-sans">
                        {j.tribunal}
                      </span>
                    </div>
                    <p className="text-[#555555]">{j.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* BIBLIOGRAPHY BOX */}
          {article.bibliography.length > 0 && (
            <div className="p-6 bg-[#F3EFEA] border border-[#E5DFD5] rounded-2xl space-y-3 text-xs">
              <h3 className="font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
                <Award className="w-4 h-4 text-[#0B2818]" /> Referencias Bibliográficas & Fuentes Primarias
              </h3>
              <ul className="space-y-2 text-[#555555] pl-4 list-disc">
                {article.bibliography.map((b, idx) => (
                  <li key={idx}>
                    {b.citation}
                    {b.doiOrUrl && (
                      <a href={b.doiOrUrl} target="_blank" rel="noopener noreferrer" className="ml-2 font-bold text-[#0B2818] hover:underline inline-flex items-center gap-0.5">
                        [Ver Documento Original] <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* FAQS IF PRESENT */}
          {article.faqs && (
            <section className="space-y-6 pt-4" itemScope itemType="https://schema.org/FAQPage">
              <h3 className="text-2xl font-serif font-bold text-[#1A1A1A]">Preguntas Frecuentes del Estudio</h3>
              <div className="space-y-4">
                {article.faqs.map((faq, idx) => (
                  <div key={idx} itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-[#FAF8F5] border border-[#E5DFD5] p-5 rounded-2xl space-y-2">
                    <h4 itemProp="name" className="text-sm font-serif font-bold text-[#1A1A1A]">{faq.question}</h4>
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p itemProp="text" className="text-xs text-[#555555] leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* TAGS */}
          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#E5DFD5]">
            <span className="text-xs font-serif font-bold text-[#0B2818]">Etiquetas:</span>
            {article.tags.map((tag, idx) => (
              <span key={idx} className="text-xs font-semibold bg-[#E5DFD5]/60 text-[#1A1A1A] px-3 py-1 rounded-full">
                #{tag}
              </span>
            ))}
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
