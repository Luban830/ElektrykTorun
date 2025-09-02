import Hero from '@/components/sections/Hero';
import AboutUs from '@/components/sections/AboutUs';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import OurWork from '@/components/sections/OurWork';
import CTA from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <>
      <Hero
        title="Profesjonalne usługi elektryczne"
        subtitle="Doświadczenie, gwarancja i szybka realizacja. Zaufaj profesjonalistom w dziedzinie elektryki."
        backgroundImage="/images/strona glowna tlo hero.jpeg"
      />
      
      <AboutUs />
      
      <WhyChooseUs />
      
      <OurWork />
      
      <CTA
        title="Potrzebujesz pomocy elektryka?"
        subtitle="Skontaktuj się z nami już dziś i otrzymaj profesjonalną pomoc w zakresie elektryki."
        variant="multi"
        showMultipleButtons={true}
      />
    </>
  );
}