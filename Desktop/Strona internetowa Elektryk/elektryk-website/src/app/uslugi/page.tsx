import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import HowWeWork from '@/components/sections/HowWeWork';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Nasze Usługi - Elektryk Toruń',
  description: 'Kompleksowe usługi elektryczne: instalacje domowe, oświetlenie LED, inteligentny dom, modernizacje, monitoring i wiele więcej.',
  keywords: 'usługi elektryczne, instalacje elektryczne, oświetlenie LED, inteligentny dom, monitoring, fotowoltaika',
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Nasze usługi elektryczne"
        subtitle="Kompleksowe rozwiązania elektryczne dla domów, firm i instytucji. Profesjonalne usługi z gwarancją jakości."
        backgroundImage="/images/tlo hero nasze uslugi.jpeg"
      />
      
      <ServicesGrid />
      
      <HowWeWork />
      
      <CTA
        title="Potrzebujesz pomocy elektryka?"
        subtitle="Skontaktuj się z nami i omówmy szczegóły Twojego projektu."
        buttonText="Skontaktuj się"
        buttonHref="/kontakt"
      />
    </>
  );
}
