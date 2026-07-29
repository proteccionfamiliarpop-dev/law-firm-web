import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import Script from 'next/script';
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
  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://proteccionfamiliar.co/#organization',
        'name': 'Protección Familiar',
        'url': 'https://proteccionfamiliar.co',
        'logo': 'https://proteccionfamiliar.co/wp-content/uploads/2026/07/Alexander-Solano-Abogado.jpeg',
        'email': 'contacto@proteccionfamiliar.co',
        'telephone': '+573153540285',
        'sameAs': [
          'https://repositorio.uniautonoma.edu.co/handle/123456789/744',
          'https://www.researchgate.net/publication/401072716_Resiliencia_como_respuesta_a_la_ausencia_del_estado_la_influencia_del_conflicto_armado_colombiano_en_las_familias_diversas_desde_una_mirada_sociojuridica',
          'https://sci-cult.net/index.php/cult/article/view/3761/2229'
        ]
      },
      {
        '@type': 'LegalService',
        '@id': 'https://proteccionfamiliar.co/#legalservice',
        'name': 'Protección Familiar — Despacho Jurídico Dr. Alexander Solano',
        'image': 'https://proteccionfamiliar.co/wp-content/uploads/2026/07/Alexander-Solano-Abogado.jpeg',
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
          'addressCountry': 'CO'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 2.4419,
          'longitude': -76.6063
        },
        'openingHoursSpecification': {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          'opens': '08:00',
          'closes': '18:00'
        },
        'founder': {
          '@type': 'Person',
          '@id': 'https://proteccionfamiliar.co/#person-alexander-solano'
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
        ]
      },
      {
        '@type': 'Person',
        '@id': 'https://proteccionfamiliar.co/#person-alexander-solano',
        'name': 'Dr. Alexander Solano',
        'jobTitle': 'Socio Director & Abogado Especialista en Derecho de Familia',
        'description': 'Abogado, Conciliador en Derecho, Especialista en Familia, Magíster en Derecho y Candidato a Doctor en Derecho. Investigador sobre derecho probatorio y familias en Colombia.',
        'worksFor': {
          '@id': 'https://proteccionfamiliar.co/#legalservice'
        },
        'alumniOf': {
          '@type': 'EducationalOrganization',
          'name': 'Universidad del Cauca'
        },
        'sameAs': [
          'https://repositorio.uniautonoma.edu.co/handle/123456789/744',
          'https://www.researchgate.net/publication/401072716_Resiliencia_como_respuesta_a_la_ausencia_del_estado_la_influencia_del_conflicto_armado_colombiano_en_las_familias_diversas_desde_una_mirada_sociojuridica',
          'https://sci-cult.net/index.php/cult/article/view/3761/2229'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://proteccionfamiliar.co/#website',
        'url': 'https://proteccionfamiliar.co',
        'name': 'Protección Familiar',
        'publisher': {
          '@id': 'https://proteccionfamiliar.co/#organization'
        },
        'inLanguage': 'es-CO'
      }
    ]
  };

  return (
    <html lang="es" className={`${inter.variable} ${merriweather.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

      </head>
      <body className="bg-[#FAF8F5] text-[#1A1A1A] antialiased selection:bg-[#0B2818] selection:text-white">
        {children}
      </body>
    </html>
  );
}
