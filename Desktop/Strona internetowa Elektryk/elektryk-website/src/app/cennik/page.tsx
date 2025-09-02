import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import PricingTable from '@/components/sections/PricingTable';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Cennik - Elektryk Toruń',
  description: 'Orientacyjne ceny usług elektrycznych. Montaż gniazdek, włączników, instalacje, modernizacje. Wycena indywidualna.',
  keywords: 'cennik elektryk, ceny usług elektrycznych, montaż gniazdek, instalacje elektryczne, wycena',
};

export default function PricingPage() {
  return (
    <>
      <Hero
        title="Cennik usług elektrycznych"
        subtitle="Przejrzyste i konkurencyjne ceny za profesjonalne usługi elektryczne. Każdy projekt wyceniamy indywidualnie."
        backgroundImage="/images/tlo_cennik.jpeg"
      />
      
      <PricingTable />
      
      <CTA
        title="Potrzebujesz indywidualnej wyceny?"
        subtitle="Skontaktuj się z nami, aby otrzymać szczegółową wycenę dla Twojego projektu."
        buttonText="Zapytaj o wycenę"
        buttonHref="/kontakt"
      />
    </>
  );
}
