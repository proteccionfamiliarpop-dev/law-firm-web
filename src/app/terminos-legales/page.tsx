import type { Metadata } from 'next';
import TermsClient from './TermsClient';

export const metadata: Metadata = {
  title: 'Términos Legales & Secreto Profesional | Protección Familiar',
  description: 'Aviso legal, código de ética y amparo del Secreto Profesional según la Ley 1123 de 2007 y Constitución Política de Colombia. Protección Familiar.',
  alternates: {
    canonical: 'https://proteccionfamiliar.co/terminos-legales',
  }
};

export default function LegalTermsPage() {
  return <TermsClient />;
}
