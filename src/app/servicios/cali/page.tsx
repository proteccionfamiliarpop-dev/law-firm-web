import type { Metadata } from 'next';
import CaliClient from './CaliClient';

export const metadata: Metadata = {
  title: 'Abogado de Familia en Cali | Dr. Alexander Solano | Divorcios & Sucesiones Valle',
  description: 'Asesoría jurídica de alta gama en Derecho de Familia para Cali y el Valle del Cauca. Divorcio notarial express, liquidación de bienes y custodia. Dirección del Dr. Alexander Solano, Cand. Doctor en Derecho.',
  keywords: [
    'Abogado de familia Cali',
    'Abogado de divorcios Cali',
    'Divorcio notarial Cali',
    'Liquidación de sociedad conyugal Cali',
    'Sucesiones Cali Valle',
    'Dr. Alexander Solano Cali',
    'Juzgados de familia Cali'
  ],
  alternates: {
    canonical: 'https://proteccionfamiliar.co/servicios/cali',
  },
  openGraph: {
    title: 'Abogado Especialista en Derecho de Familia en Cali | Dr. Alexander Solano',
    description: 'Atención especializada para familias y empresarios en Cali y Valle del Cauca. Sesiones virtuales por Google Meet y representación directa ante notarías y juzgados.',
    url: 'https://proteccionfamiliar.co/servicios/cali',
    siteName: 'Protección Familiar',
    images: [{
      url: 'https://proteccionfamiliar.co/wp-content/uploads/2026/07/Alexander-Solano-Abogado.jpeg',
      width: 1200,
      height: 630,
      alt: 'Dr. Alexander Solano Abogado de Familia Cali'
    }],
    locale: 'es_CO',
    type: 'website',
  }
};

export default function CaliServicePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    'name': 'Protección Familiar Cali — Dr. Alexander Solano',
    'image': 'https://proteccionfamiliar.co/wp-content/uploads/2026/07/Alexander-Solano-Abogado.jpeg',
    '@id': 'https://proteccionfamiliar.co/servicios/cali',
    'url': 'https://proteccionfamiliar.co/servicios/cali',
    'telephone': '+573153540285',
    'email': 'contacto@proteccionfamiliar.co',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Cali',
      'addressRegion': 'Valle del Cauca',
      'addressCountry': 'CO'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 3.4516,
      'longitude': -76.5320
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
        'name': 'Cali',
        'item': 'https://proteccionfamiliar.co/servicios/cali'
      }
    ]
  };

  const caliFaqs = [
    {
      q: '¿Cómo funciona la atención de derecho de familia para clientes residentes en Cali?',
      a: 'Brindamos consultas privadas de alta dirección mediante salas seguras de Google Meet y atención coordinada en la región. Llevamos a cabo la representación directa en Notarías y Juzgados de Familia de Cali.'
    },
    {
      q: '¿Se puede tramitar un divorcio por mutuo acuerdo en Cali sin desplazarse a la oficina?',
      a: 'Sí. A través del otorgamiento de poder notarial formalizado, nuestro equipo gestiona la totalidad de la escritura de divorcio y liquidación conyugal ante las notarías de Cali sin requerir su presencia física continua.'
    },
    {
      q: '¿Qué experiencia tiene el Dr. Alexander Solano en litigios de familia en el Valle del Cauca?',
      a: 'El Dr. Alexander Solano cuenta con más de 15 años de trayectoria representando casos de alta complejidad patrimonial y custodia en Cali, Popayán y la región suroccidental de Colombia.'
    },
    {
      q: '¿Cómo puedo agendar una consulta virtual confidencial desde Cali?',
      a: 'Puede reservar directamente su espacio en nuestro embudo interactivo `#agendar` seleccionando la modalidad "Google Meet". Recibirá al instante la confirmación con enlace directo a su calendario.'
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
      <CaliClient caliFaqs={caliFaqs} />
    </>
  );
}
