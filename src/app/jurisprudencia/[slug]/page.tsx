import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  Building2, 
  Scale, 
  Calendar, 
  CheckCircle2, 
  BookOpen, 
  MessageSquare,
  Lock,
  ArrowRight
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingSection from '@/components/BookingSection';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import InternalLinkEngine, { KnowledgeBreadcrumbs } from '@/components/InternalLinkEngine';
import { 
  getKnowledgeNode, 
  getNodesByCluster, 
  ClusterCategory, 
  KnowledgeNode 
} from '@/lib/knowledgeGraph';

interface PageProps {
  params: { slug: string };
}

const CLUSTER_ID: ClusterCategory = 'jurisprudencia';

export async function generateStaticParams() {
  const nodes = getNodesByCluster(CLUSTER_ID);
  return nodes.map(n => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const node = getKnowledgeNode(CLUSTER_ID, params.slug);
  if (!node) return {};

  const url = `https://proteccionfamiliar.co/${CLUSTER_ID}/${node.slug}`;

  return {
    title: node.metaTitle,
    description: node.metaDescription,
    keywords: node.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: node.metaTitle,
      description: node.metaDescription,
      url,
      siteName: 'Protección Familiar',
      images: [{
        url: 'https://proteccionfamiliar.co/wp-content/uploads/2026/07/Alexander-Solano-Abogado.jpeg',
        width: 1200,
        height: 630,
        alt: node.title,
      }],
      locale: 'es_CO',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: node.metaTitle,
      description: node.metaDescription,
      images: ['https://proteccionfamiliar.co/wp-content/uploads/2026/07/Alexander-Solano-Abogado.jpeg'],
    }
  };
}

export default function KnowledgeNodePage({ params }: PageProps) {
  const node = getKnowledgeNode(CLUSTER_ID, params.slug);
  if (!node) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] flex flex-col justify-center items-center p-6 text-center space-y-4">
        <h1 className="text-3xl font-serif font-bold text-[#1A1A1A]">Página en Construcción del Grafo Jurídico</h1>
        <p className="text-xs text-[#555555]">El nodo solicitado se está procesando en la arquitectura de conocimiento.</p>
        <Link href="/" className="px-6 py-3 bg-[#0B2818] text-white text-xs font-bold uppercase rounded-xl">Volver al Inicio</Link>
      </div>
    );
  }

  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': node.schemaType === 'HowTo' ? 'HowTo' : 'Article',
    'headline': node.title,
    'description': node.metaDescription,
    'author': {
      '@type': 'Person',
      'name': node.author,
      'jobTitle': 'Socio Director & Abogado Especialista en Familia',
      'url': 'https://proteccionfamiliar.co/#person-alexander-solano'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Protección Familiar',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://proteccionfamiliar.co/wp-content/uploads/2026/07/Alexander-Solano-Abogado.jpeg'
      }
    },
    'datePublished': node.datePublished,
    'dateModified': node.dateModified,
    'mainEntityOfPage': `https://proteccionfamiliar.co/${CLUSTER_ID}/${node.slug}`
  };

  const jsonLdFaq = node.faqs ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': node.faqs.map(f => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      {jsonLdFaq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      )}

      <Navbar />

      <main className="flex-1">
        <KnowledgeBreadcrumbs currentNode={node} />

        {/* NODE HERO */}
        <section className="py-16 lg:py-20 border-b border-[#E5DFD5] bg-[#FAF8F5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2818]/10 text-[#0B2818] text-xs font-bold uppercase tracking-wider font-serif">
              <Scale className="w-3.5 h-3.5 text-[#0B2818]" />
              <span>{node.cluster.replace('-', ' ')} • Grafo de Conocimiento</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1A1A1A] leading-tight">
              {node.title}
            </h1>

            <p className="text-base text-[#444444] leading-relaxed">
              {node.summary}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-[#666666] pt-2 border-t border-[#E5DFD5]">
              <span>Autor: <strong className="text-[#0B2818]">{node.author}</strong> (T.P. 182.354 CSJ)</span>
              <span>•</span>
              <span>Revisión Legal: <time dateTime={node.dateModified}>{node.dateModified}</time></span>
            </div>
          </div>
        </section>

        {/* MAIN BODY CONTENT */}
        <article className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="prose prose-stone max-w-none space-y-8 text-xs sm:text-sm text-[#333333] leading-relaxed">
            {node.sections.map((sec, idx) => (
              <section key={idx} className="space-y-3 bg-[#FAF8F5] p-6 rounded-2xl border border-[#E5DFD5]">
                <h2 className="text-xl font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#0B2818]" /> {sec.heading}
                </h2>
                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">{sec.body}</p>
              </section>
            ))}
          </div>

          {/* FAQS IF PRESENT */}
          {node.faqs && (
            <section className="space-y-6 pt-6" itemScope itemType="https://schema.org/FAQPage">
              <h3 className="text-2xl font-serif font-bold text-[#1A1A1A]">Preguntas Frecuentes Relacionadas</h3>
              <div className="space-y-4">
                {node.faqs.map((faq, idx) => (
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

          {/* AUTOMATIC TOPIC CLUSTER INTERNAL LINK ENGINE */}
          <InternalLinkEngine currentNode={node} />
        </article>

        {/* EMBEDDED BOOKING FUNNEL */}
        <BookingSection />
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
