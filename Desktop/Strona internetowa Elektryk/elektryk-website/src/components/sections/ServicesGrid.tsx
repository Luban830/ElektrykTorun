'use client';

import { useState } from 'react';
import Image from 'next/image';
import Modal from '@/components/ui/Modal';
import { MotionDiv } from '@/components/ui/MotionWrapper';

const services = [
  {
    id: 1,
    image: '/images/Wykonawstwo instalacji elektrycznych.jpeg',
    title: 'Wykonawstwo instalacji elektrycznych',
    description: 'Kompleksowe wykonawstwo instalacji elektrycznych od projektu do realizacji',
    detailedDescription: `
      <h3 class="text-xl font-semibold mb-4">Wykonawstwo instalacji elektrycznych</h3>
      <p class="mb-4">Oferujemy pełne wykonawstwo instalacji elektrycznych dla domów, mieszkań i obiektów komercyjnych. Nasze instalacje spełniają najwyższe standardy bezpieczeństwa i są zgodne z polskimi normami.</p>
      
      <h4 class="text-lg font-semibold mb-2">Zakres usług:</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>Projektowanie instalacji elektrycznych</li>
        <li>Wykonawstwo nowych instalacji</li>
        <li>Instalacja obwodów elektrycznych</li>
        <li>Montaż rozdzielni elektrycznych</li>
        <li>Przyłącza do urządzeń AGD</li>
        <li>Instalacja gniazd i włączników</li>
      </ul>
      
      <h4 class="text-lg font-semibold mb-2">Dlaczego warto wybrać nas:</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>Doświadczeni elektrycy z uprawnieniami</li>
        <li>Materiały najwyższej jakości</li>
        <li>Zgodność z normami i przepisami</li>
        <li>Szybka realizacja zleceń</li>
        <li>Pełna dokumentacja techniczna</li>
      </ul>
      
      <p class="text-sm text-gray-600">Cena: od 1500 zł (w zależności od zakresu prac)</p>
    `
  },
  {
    id: 2,
    image: '/images/24H.webp',
    title: 'Usuwanie awarii instalacji elektrycznych',
    description: 'Pogotowie elektryczne 24h - szybka pomoc w nagłych awariach',
    detailedDescription: `
      <h3 class="text-xl font-semibold mb-4">Pogotowie elektryczne 24h</h3>
      <p class="mb-4">Jesteśmy dostępni 24 godziny na dobę, 7 dni w tygodniu. W przypadku nagłej awarii elektrycznej reagujemy szybko i profesjonalnie, zapewniając bezpieczeństwo i przywracając zasilanie.</p>
      
      <h4 class="text-lg font-semibold mb-2">Typy awarii:</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>Całkowity brak prądu</li>
        <li>Wypadanie bezpieczników</li>
        <li>Iskrzenie w gniazdkach</li>
        <li>Problemy z oświetleniem</li>
        <li>Awaria rozdzielni</li>
        <li>Problemy z ogrzewaniem elektrycznym</li>
      </ul>
      
      <h4 class="text-lg font-semibold mb-2">Nasze zalety:</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>Szybka reakcja (do 1 godziny)</li>
        <li>Doświadczeni elektrycy</li>
        <li>Kompletny sprzęt diagnostyczny</li>
        <li>Naprawy na miejscu</li>
        <li>Gwarancja na naprawy</li>
        <li>Przejrzyste ceny</li>
      </ul>
      
      <p class="text-sm text-gray-600">Cena: od 200 zł (w zależności od rodzaju awarii)</p>
    `
  },
  {
    id: 3,
    image: '/images/Naprawy instalacji elektrycznych.jpeg',
    title: 'Naprawy instalacji elektrycznych',
    description: 'Profesjonalne naprawy i serwis instalacji elektrycznych',
    detailedDescription: `
      <h3 class="text-xl font-semibold mb-4">Naprawy instalacji elektrycznych</h3>
      <p class="mb-4">Specjalizujemy się w naprawach i serwisie instalacji elektrycznych. Diagnozujemy problemy, naprawiamy usterki i przywracamy pełną funkcjonalność instalacji elektrycznych.</p>
      
      <h4 class="text-lg font-semibold mb-2">Rodzaje napraw:</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>Naprawa uszkodzonych przewodów</li>
        <li>Wymiana wadliwych gniazdek i włączników</li>
        <li>Naprawa rozdzielni elektrycznych</li>
        <li>Wymiana bezpieczników i wyłączników</li>
        <li>Naprawa instalacji oświetleniowej</li>
        <li>Serwis urządzeń elektrycznych</li>
      </ul>
      
      <h4 class="text-lg font-semibold mb-2">Proces naprawy:</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>Diagnoza problemu</li>
        <li>Wycena kosztów naprawy</li>
        <li>Wykonanie naprawy</li>
        <li>Testowanie instalacji</li>
        <li>Dokumentacja naprawy</li>
        <li>Gwarancja na wykonane prace</li>
      </ul>
      
      <p class="text-sm text-gray-600">Cena: od 150 zł (w zależności od rodzaju naprawy)</p>
    `
  },
  {
    id: 4,
    image: '/images/Modernizacja instalacji elektrycznych.png',
    title: 'Modernizacja instalacji elektrycznych',
    description: 'Przenoszenie liczników, przesunięcie oświetlenia, rozbudowa instalacji',
    detailedDescription: `
      <h3 class="text-xl font-semibold mb-4">Modernizacja instalacji elektrycznych</h3>
      <p class="mb-4">Zmodernizuj swoją starą instalację elektryczną i zwiększ bezpieczeństwo oraz funkcjonalność swojego domu. Nasze modernizacje są przeprowadzane bez zbędnych zniszczeń.</p>
      
      <h4 class="text-lg font-semibold mb-2">Usługi modernizacyjne:</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>Przenoszenie liczników elektrycznych</li>
        <li>Przesunięcie oświetlenia</li>
        <li>Przenoszenie gniazd elektrycznych</li>
        <li>Rozbudowa instalacji o dodatkowe punkty</li>
        <li>Wymiana starej rozdzielni na nowoczesną</li>
        <li>Dodanie nowych obwodów elektrycznych</li>
      </ul>
      
      <h4 class="text-lg font-semibold mb-2">Korzyści modernizacji:</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>Zwiększone bezpieczeństwo</li>
        <li>Zgodność z aktualnymi normami</li>
        <li>Możliwość podłączenia nowoczesnych urządzeń</li>
        <li>Oszczędność energii</li>
        <li>Wzrost wartości nieruchomości</li>
      </ul>
      
      <p class="text-sm text-gray-600">Cena: od 1500 zł (w zależności od zakresu modernizacji)</p>
    `
  },
  {
    id: 5,
    image: '/images/instalacja.jpeg',
    title: 'Prefabrykacja rozdzielni',
    description: 'Wykonywanie tablic mieszkalnych, modernizacja, dokładanie zabezpieczeń',
    detailedDescription: `
      <h3 class="text-xl font-semibold mb-4">Prefabrykacja rozdzielni elektrycznych</h3>
      <p class="mb-4">Specjalizujemy się w prefabrykacji rozdzielni elektrycznych. Wykonujemy tablice mieszkalne, modernizujemy istniejące rozdzielnie i dokładamy nowe zabezpieczenia.</p>
      
      <h4 class="text-lg font-semibold mb-2">Nasze usługi:</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>Wykonywanie tablic mieszkalnych</li>
        <li>Modernizacja już istniejących rozdzielni</li>
        <li>Dokładanie nowych zabezpieczeń</li>
        <li>Wymiana starych elementów</li>
        <li>Projektowanie rozdzielni</li>
        <li>Montaż i podłączenie</li>
      </ul>
      
      <h4 class="text-lg font-semibold mb-2">Typy rozdzielni:</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>Rozdzielnie domowe (1-fazowe i 3-fazowe)</li>
        <li>Rozdzielnie modułowe</li>
        <li>Rozdzielnie zewnętrzne</li>
        <li>Rozdzielnie przeciwpożarowe</li>
        <li>Rozdzielnie przemysłowe</li>
      </ul>
      
      <p class="text-sm text-gray-600">Cena: od 800 zł (w zależności od typu i rozmiaru rozdzielni)</p>
    `
  },
  {
    id: 6,
    image: '/images/podlaczanie.jpeg',
    title: 'Podłączanie płyt ceramicznych i piekarników',
    description: 'Montaż, sprawdzenie obwodu, dobór połączenia, pierwsze uruchomienie',
    detailedDescription: `
      <h3 class="text-xl font-semibold mb-4">Podłączanie płyt ceramicznych i piekarników</h3>
      <p class="mb-4">Profesjonalne podłączanie płyt ceramicznych, płyt indukcyjnych i piekarników. Zapewniamy pełny serwis od montażu po pierwsze uruchomienie i podbicie gwarancji.</p>
      
      <h4 class="text-lg font-semibold mb-2">Zakres usług:</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>Montaż płyt ceramicznych i indukcyjnych</li>
        <li>Podłączanie piekarników</li>
        <li>Sprawdzenie obwodu elektrycznego</li>
        <li>Dobór odpowiedniego połączenia</li>
        <li>Pierwsze uruchomienie urządzenia</li>
        <li>Podbicie gwarancji (pieczątka)</li>
      </ul>
      
      <h4 class="text-lg font-semibold mb-2">Dlaczego warto wybrać nas:</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>Doświadczeni elektrycy</li>
        <li>Zgodność z normami bezpieczeństwa</li>
        <li>Gwarancja na wykonane prace</li>
        <li>Pełna dokumentacja</li>
        <li>Bezpieczne podłączenia</li>
      </ul>
      
      <p class="text-sm text-gray-600">Cena: od 300 zł (w zależności od typu urządzenia)</p>
    `
  },
  {
    id: 7,
    image: '/images/naprawa.jpeg',
    title: 'Konserwacja instalacji elektrycznych',
    description: 'Regularna konserwacja i przeglądy instalacji elektrycznych',
    detailedDescription: `
      <h3 class="text-xl font-semibold mb-4">Konserwacja instalacji elektrycznych</h3>
      <p class="mb-4">Regularna konserwacja instalacji elektrycznych to klucz do bezpieczeństwa i niezawodności. Oferujemy profesjonalne przeglądy i konserwację instalacji elektrycznych.</p>
      
      <h4 class="text-lg font-semibold mb-2">Usługi konserwacyjne:</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>Przeglądy okresowe instalacji</li>
        <li>Czyszczenie rozdzielni elektrycznych</li>
        <li>Sprawdzanie połączeń</li>
        <li>Wymiana zużytych elementów</li>
        <li>Testowanie zabezpieczeń</li>
        <li>Pomiary elektryczne</li>
      </ul>
      
      <h4 class="text-lg font-semibold mb-2">Korzyści konserwacji:</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>Zwiększone bezpieczeństwo</li>
        <li>Zapobieganie awariom</li>
        <li>Dłuższa żywotność instalacji</li>
        <li>Oszczędność na naprawach</li>
        <li>Zgodność z przepisami</li>
      </ul>
      
      <p class="text-sm text-gray-600">Cena: od 200 zł (w zależności od zakresu konserwacji)</p>
    `
  },
  {
    id: 8,
    image: '/images/Montaż osprzętu elektrycznego.jpeg',
    title: 'Montaż osprzętu elektrycznego',
    description: 'Gniazd, wyłączników, przełączników, ściemniaczy - biały montaż',
    detailedDescription: `
      <h3 class="text-xl font-semibold mb-4">Montaż osprzętu elektrycznego</h3>
      <p class="mb-4">Profesjonalny montaż osprzętu elektrycznego w standardzie "biały montaż". Oferujemy montaż gniazd, wyłączników, przełączników i ściemniaczy najwyższej jakości.</p>
      
      <h4 class="text-lg font-semibold mb-2">Rodzaje osprzętu:</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>Gniazda elektryczne (różne typy)</li>
        <li>Wyłączniki światła</li>
        <li>Przełączniki (pojedyncze i podwójne)</li>
        <li>Ściemniacze</li>
        <li>Gniazda USB</li>
        <li>Gniazda 3-fazowe</li>
      </ul>
      
      <h4 class="text-lg font-semibold mb-2">Standard "biały montaż":</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>Estetyczny wygląd</li>
        <li>Łatwość czyszczenia</li>
        <li>Trwałość i niezawodność</li>
        <li>Zgodność z normami</li>
        <li>Profesjonalny montaż</li>
      </ul>
      
      <p class="text-sm text-gray-600">Cena: od 50 zł za punkt (w zależności od typu osprzętu)</p>
    `
  },
  {
    id: 9,
    image: '/images/Montaż opraw oświetleniowych.jpeg',
    title: 'Montaż opraw oświetleniowych',
    description: 'Plafoniera, żyrandol, kinkiet, LED, taśmy, naświetlacze, LED RGB',
    detailedDescription: `
      <h3 class="text-xl font-semibold mb-4">Montaż opraw oświetleniowych</h3>
      <p class="mb-4">Kompleksowy montaż wszystkich typów opraw oświetleniowych. Od tradycyjnych żyrandoli po nowoczesne systemy LED - zapewniamy profesjonalny montaż i podłączenie.</p>
      
      <h4 class="text-lg font-semibold mb-2">Typy opraw:</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>Plafoniery sufitowe</li>
        <li>Żyrandole</li>
        <li>Kinkiety ścienne</li>
        <li>Oprawy LED</li>
        <li>Taśmy LED</li>
        <li>Naświetlacze</li>
        <li>Systemy LED RGB</li>
        <li>Moduły LED</li>
      </ul>
      
      <h4 class="text-lg font-semibold mb-2">Nasze usługi:</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>Montaż opraw oświetleniowych</li>
        <li>Podłączanie systemów LED</li>
        <li>Instalacja sterowników</li>
        <li>Konfiguracja systemów RGB</li>
        <li>Testowanie i uruchomienie</li>
        <li>Gwarancja na montaż</li>
      </ul>
      
      <p class="text-sm text-gray-600">Cena: od 100 zł za oprawę (w zależności od typu)</p>
    `
  },
  {
    id: 10,
    image: '/images/Przeróbki instalacji elektrycznych.png',
    title: 'Przeróbki instalacji elektrycznych',
    description: 'Przenoszenie gniazd, przesuwanie lamp, rozbudowa tablic, dokładanie obwodów',
    detailedDescription: `
      <h3 class="text-xl font-semibold mb-4">Przeróbki instalacji elektrycznych</h3>
      <p class="mb-4">Specjalizujemy się w przeróbkach instalacji elektrycznych. Przenosimy gniazda, przesuwamy lampy, rozbudowujemy tablice i dokładamy dodatkowe obwody elektryczne.</p>
      
      <h4 class="text-lg font-semibold mb-2">Rodzaje przeróbek:</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>Przenoszenie gniazd elektrycznych</li>
        <li>Przesuwanie lamp i opraw</li>
        <li>Rozbudowa tablic rozdzielczych</li>
        <li>Dokładanie dodatkowych obwodów</li>
        <li>Zmiana układu oświetlenia</li>
        <li>Dodawanie nowych punktów zasilania</li>
      </ul>
      
      <h4 class="text-lg font-semibold mb-2">Proces przeróbki:</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>Analiza istniejącej instalacji</li>
        <li>Projekt przeróbki</li>
        <li>Wykonanie prac</li>
        <li>Testowanie nowej instalacji</li>
        <li>Dokumentacja zmian</li>
        <li>Gwarancja na wykonane prace</li>
      </ul>
      
      <p class="text-sm text-gray-600">Cena: od 200 zł (w zależności od zakresu przeróbek)</p>
    `
  }
];

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const openModal = (service: typeof services[0]) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-4">
              Nasze usługi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kompleksowe usługi elektryczne dla domów, firm i instytucji
            </p>
          </MotionDiv>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <MotionDiv
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group border border-gray-100 hover:border-blue-200"
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => openModal(service)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="text-yellow-600 font-semibold text-sm group-hover:text-blue-600 transition-colors duration-300 flex items-center">
                  <span>Kliknij, aby dowiedzieć się więcej</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <Modal
          isOpen={!!selectedService}
          onClose={closeModal}
          title={selectedService.title}
        >
          <div 
            className="prose prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: selectedService.detailedDescription }}
          />
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="/kontakt"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 text-center shadow-lg hover:shadow-xl hover:scale-105"
            >
              Zapytaj o wycenę
            </a>
            <a
              href="tel:+48697146300"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-center shadow-lg hover:shadow-xl hover:scale-105"
            >
              Zadzwoń teraz
            </a>
          </div>
        </Modal>
      )}
    </section>
  );
}
