import type { Metadata } from 'next';
import TermsPage from './TermsPage';

export const metadata: Metadata = {
  title: "Terms & Conditions / Términos y Condiciones — El Patio de Chicho",
  description: "Rental policies, payment terms, and conditions for booking El Patio de Chicho.",
};

export default function Page() {
  return <TermsPage />;
}
