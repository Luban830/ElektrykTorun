import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import ContactInfo from '@/components/sections/ContactInfo';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Kontakt - Elektryk Toruń',
  description: 'Skontaktuj się z nami! Formularz kontaktowy, dane kontaktowe, mapa. Profesjonalne usługi elektryczne w Warszawie i okolicach.',
  keywords: 'kontakt elektryk, formularz kontaktowy, usługi elektryczne Warszawa, naprawy elektryczne',
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Skontaktuj się z nami"
        subtitle="Masz pytania lub potrzebujesz pomocy elektryka? Skontaktuj się z nami już dziś!"
        backgroundImage="/images/tlo_kontakt.jpeg"
        showButtons={false}
      />
      
      <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      
      {/* Full-width satellite map section */}
      <section className="py-0">
        <div className="w-full h-80 lg:h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2398.1234567890123!2d18.6042!3d53.0138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDAwJzQ5LjciTiAxOMKwMzYnMTUuMSJF!5e0!3m2!1spl!2spl!4v1234567890123!5m2!1spl!2spl&t=k"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokalizacja Elektryk Toruń - Kołłątaja 87-100, Toruń - Widok satelitarny"
          />
        </div>
      </section>
      
      <CTA
        title="Awaria elektryczna?"
        subtitle="W przypadku nagłej awarii elektrycznej jesteśmy dostępni 24/7. Zadzwoń natychmiast!"
        buttonText="Zadzwoń teraz"
        buttonHref="tel:+48697146300"
        variant="emergency"
      />
    </>
  );
}
