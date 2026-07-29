import type { Metadata } from 'next';
import PopayanClient from './PopayanClient';

export const metadata: Metadata = {
  title: 'Abogado de Familia en Popayán | Dr. Alexander Solano | Divorcios & Sucesiones',
  description: 'Firma jurídica boutique líder en Derecho de Familia en Popayán. Sede principal en Cra 8 #2-44, Oficina 313, Centro. Divorcio notarial express, liquidación conyugal y custodia. Dirige Dr. Alexander Solano.',
  keywords: [
    'Abogado de familia Popayán',
    'Divorcio notarial Popayán',
    'Abogado de divorcios Popayán',
    'Notaría 1 2 3 Popayán divorcio',
    'Sucesiones Popayán Cauca',
    'Dr. Alexander Solano Popayán',
    'Juzgados de familia Popayán'
  ],
  alternates: {
    canonical: 'https://proteccionfamiliar.co/servicios/popayan',
  },
  openGraph: {
    title: 'Abogado Especialista en Derecho de Familia en Popayán | Dr. Alexander Solano',
    description: 'Atención presencial en nuestra sede principal del Centro Histórico de Popayán (Cra 8 #2-44 Of 313). Discreción, rigor académico y acuerdos notariales ágiles.',
    url: 'https://proteccionfamiliar.co/servicios/popayan',
    siteName: 'Protección Familiar',
    images: [{
      url: 'https://proteccionfamiliar.co/wp-content/uploads/2026/07/Alexander-Solano-Abogado.jpeg',
      width: 1200,
      height: 630,
      alt: 'Dr. Alexander Solano Abogado de Familia Popayán'
    }],
    locale: 'es_CO',
    type: 'website',
  }
};

export default function PopayanServicePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    'name': 'Protección Familiar Popayán — Dr. Alexander Solano',
    'image': 'https://proteccionfamiliar.co/wp-content/uploads/2026/07/Alexander-Solano-Abogado.jpeg',
    '@id': 'https://proteccionfamiliar.co/servicios/popayan',
    'url': 'https://proteccionfamiliar.co/servicios/popayan',
    'telephone': '+573153540285',
    'email': 'contacto@proteccionfamiliar.co',
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
      'name': 'Dr. Alexander Solano',
      'jobTitle': 'Abogado Especialista en Familia & Conciliador',
      'telephone': '+573153540285'
    }
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Inicio',
        'item': 'https://proteccionfamiliar.co'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Servicios',
        'item': 'https://proteccionfamiliar.co/#servicios'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Popayán',
        'item': 'https://proteccionfamiliar.co/servicios/popayan'
      }
    ]
  };

  const popayanFaqs = [
    {
      q: '¿Dónde está ubicada la oficina principal de Protección Familiar en Popayán?',
      a: 'Nuestra sede principal se encuentra en el Centro Histórico de Popayán: Carrera 8 #2-44, Oficina 313. Un espacio privado y seguro diseñado para la máxima confidencialidad de nuestros clientes.'
    },
    {
      q: '¿Cuánto tiempo tarda un divorcio por mutuo acuerdo en una notaría de Popayán?',
      a: 'Si existe mutuo acuerdo entre los cónyuges y no hay disputas complejas, la escritura pública de divorcio en Notaría (Notarías 1, 2 o 3 de Popayán) se formaliza en un plazo promedio de 5 a 10 días hábiles.'
    },
    {
      q: '¿El Dr. Alexander Solano atiende personalmente las consultas en Popayán?',
      a: 'Sí. Todas las consultas privadas son dirigidas y atendidas directamente por el Dr. Alexander Solano, Cand. Doctor en Derecho, Magíster y Conciliador Oficial en la sede de Popayán.'
    },
    {
      q: '¿Qué trámites de derecho de familia se gestionan ante el Palacio de Justicia de Popayán?',
      a: 'Gestionamos litigios contenciosos de divorcio, cesación de efectos civiles de matrimonio católico, impugnación de paternidad, regulación judicial de alimentos y fijación de custodia ante los Juzgados de Familia de Popayán.'
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <PopayanClient popayanFaqs={popayanFaqs} />
    </>
  );
}
