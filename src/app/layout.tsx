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
  title: 'Abogado de Familia en Popayán y Cali | Dr. Alexander Solano | Protección Familiar',
  description: 'Bufete de Abogados especialista en Derecho de Familia, Sucesiones, Divorcios, Custodia y Contratos Civiles en Popayán (Cra 8 #2-44 Of 313) y Cali. Dirigido por el Dr. Alexander Solano, Cand. Doctor en Derecho. Atención y WhatsApp 24/7 +57 315 354 0285.',
  keywords: [
    'Abogado de familia Popayán',
    'Abogado de familia Cali',
    'Dr. Alexander Solano',
    'Abogados Popayán',
    'Abogados Cali',
    'Sucesiones Popayán',
    'Divorcios Popayán',
    'Divorcios Cali',
    'Derecho de Familia Cauca',
    'Contratos Civiles Popayán',
    'Testamentos y Sucesiones Cali',
    'Conciliador en derecho Popayán',
    'Protección Familiar Popayán'
  ],
  authors: [{ name: 'Dr. Alexander Solano - Protección Familiar & Asociados' }],
  creator: 'Dr. Alexander Solano',
  publisher: 'Protección Familiar & Asociados',
  metadataBase: new URL('https://proteccionfamiliar.law'),
  alternates: {
    canonical: 'https://proteccionfamiliar.law',
  },
  openGraph: {
    title: 'Abogado de Familia en Popayán y Cali | Dr. Alexander Solano',
    description: 'Bufete especializado en Derecho de Familia, Sucesiones, Divorcios y Contratos Civiles en Popayán (Cra 8 #2-44 Of 313) y Cali. Dirigido por el Dr. Alexander Solano.',
    url: 'https://proteccionfamiliar.law',
    siteName: 'Protección Familiar & Asociados',
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abogado de Familia Popayán & Cali | Dr. Alexander Solano',
    description: 'Defensa legal especializada en Familia, Sucesiones y Contratos Civiles en Popayán y Cali.',
  },
  other: {
    'geo.region': 'CO-CAU',
    'geo.placename': 'Popayán',
    'geo.position': '2.4419;-76.6063',
    'ICBM': '2.4419, -76.6063',
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
    'name': 'Protección Familiar & Asociados - Dr. Alexander Solano',
    'description': 'Bufete especializado en Derecho de Familia, Sucesiones, Divorcios, Custodia y Contratos Civiles en Popayán y Cali.',
    'url': 'https://proteccionfamiliar.law',
    'telephone': '+573153540285',
    'email': 'contacto@proteccionfamiliar.law',
    'founder': {
      '@type': 'Person',
      'name': 'Dr. Alexander Solano',
      'jobTitle': 'Socio Director General',
      'description': 'Abogado, Conciliador, Especialista en Derecho de Familia, Magíster en Derecho y Candidato a Doctor en Derecho.'
    },
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Cra 8 #2-44, Oficina 313, Centro',
      'addressLocality': 'Popayán',
      'addressRegion': 'Cauca',
      'addressCountry': 'CO'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '2.4419',
      'longitude': '-76.6063'
    },
    'areaServed': [
      { '@type': 'City', 'name': 'Popayán' },
      { '@type': 'City', 'name': 'Cali' },
      { '@type': 'AdministrativeArea', 'name': 'Cauca' },
      { '@type': 'AdministrativeArea', 'name': 'Valle del Cauca' },
      { '@type': 'Country', 'name': 'Colombia' }
    ],
    'priceRange': '$$',
    'openingHours': 'Mo-Fr 08:00-19:00, Sa 08:00-13:00'
  };

  return (
    <html lang="es" className={`${inter.variable} ${merriweather.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-950 text-slate-100 font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
