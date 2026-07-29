import type { Metadata } from 'next';
import PrivacyClient from './PrivacyClient';

export const metadata: Metadata = {
  title: 'Política de Tratamiento de Datos Personales (Ley 1581) | Protección Familiar',
  description: 'Política oficial de privacidad y tratamiento de datos personales conforme a la Ley 1581 de 2012 y Decreto 1377 de 2013 en Colombia. Protección Familiar.',
  alternates: {
    canonical: 'https://proteccionfamiliar.co/politica-de-privacidad',
  }
};

export default function PrivacyPolicyPage() {
  return <PrivacyClient />;
}
