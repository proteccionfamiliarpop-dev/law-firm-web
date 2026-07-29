import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://proteccionfamiliar.co'),
  title: 'Abogado de Familia en Popayán & Cali | Dr. Alexander Solano | Protección Familiar',
  description: 'Firma jurídica especializada en Derecho de Familia, Divorcios, Sucesiones, Custodia y Protección Patrimonial en Popayán (Cra 8 #2-44 Of 313) y Cali. Dirección del Dr. Alexander Solano, Cand. Doctor en Derecho.',
  keywords: [
    'Abogado de Familia Popayán',
    'Abogado de Divorcios Popayán',
    'Dr. Alexander Solano',
    'Protección Familiar Popayán',
    'Abogado Sucesiones Popayán',
    'Notarías Popayán Divorcio',
    'Abogado de Familia Cali',
    'Liquidación Sociedad Conyugal Cauca'
  ],
  authors: [{ name: 'Dr. Alexander Solano', url: 'https://proteccionfamiliar.co' }],
  creator: 'Protección Familiar',
  publisher: 'Protección Familiar',
  openGraph: {
    title: 'Protección Familiar | Abogados de Familia en Popayán y Cali',
    description: 'Defensa legal con autoridad y empatía. Dirigida por el Dr. Alexander Solano, especialista en derecho de familia y sucesiones.',
    url: 'https://proteccionfamiliar.co',
    siteName: 'Protección Familiar',
    images: [
      {
        url: 'https://proteccionfamiliar.co/wp-content/uploads/2026/07/Alexander-Solano-Abogado.jpeg',
        width: 1200,
        height: 630,
        alt: 'Dr. Alexander Solano - Abogado de Familia Popayán',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://proteccionfamiliar.co',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    'name': 'Protección Familiar - Firma de Abogados',
    'image': 'https://proteccionfamiliar.co/wp-content/uploads/2026/07/Alexander-Solano-Abogado.jpeg',
    '@id': 'https://proteccionfamiliar.co',
    'url': 'https://proteccionfamiliar.co',
    'telephone': '+573153540285',
    'email': 'contacto@proteccionfamiliar.co',
    'priceRange': '$$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Cra 8 #2-44, Oficina 313, Centro',
      'addressLocality': 'Popayán',
      'addressRegion': 'Cauca',
      'postalCode': '190001',
      'addressCountry': 'CO',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 2.4419,
      'longitude': -76.6063,
    },
    'founder': {
      '@type': 'Person',
      'name': 'Dr. Alexander Solano',
      'jobTitle': 'Socio Director & Abogado Especialista en Familia',
      'alumniOf': 'Universidad del Cauca',
      'sameAs': [
        'https://repositorio.uniautonoma.edu.co/handle/123456789/744',
        'https://www.researchgate.net/publication/401072716_Resiliencia_como_respuesta_a_la_ausencia_del_estado_la_influencia_del_conflicto_armado_colombiano_en_las_familias_diversas_desde_una_mirada_sociojuridica',
        'https://sci-cult.net/index.php/cult/article/view/3761/2229'
      ]
    },
    'areaServed': [
      {
        '@type': 'AdministrativeArea',
        'name': 'Popayán, Cauca, Colombia'
      },
      {
        '@type': 'AdministrativeArea',
        'name': 'Cali, Valle del Cauca, Colombia'
      }
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Servicios Jurídicos de Familia y Protección Patrimonial',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Divorcio por Mutuo Acuerdo Notarial'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Protección Patrimonial y Capitulaciones'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Custodia de Menores y Régimen de Alimentos'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Litigio de Sucesiones e Impugnación de Paternidad'
          }
        }
      ]
    }
  };

  return (
    <html lang="es" className={`${inter.variable} ${merriweather.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#FAF8F5] text-[#1A1A1A] antialiased selection:bg-[#0B2818] selection:text-white">
        {children}
      </body>
    </html>
  );
}
