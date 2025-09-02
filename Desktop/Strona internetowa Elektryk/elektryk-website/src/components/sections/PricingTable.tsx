import { Zap, Lightbulb, Wrench, Shield, Home, Settings, Plug, Gauge, Building, Star, CheckCircle } from 'lucide-react';

const pricingData = [
  {
    service: 'Wykonawstwo instalacji elektrycznych',
    priceRange: '1500 - 5000 zł',
    description: 'Kompleksowe wykonawstwo instalacji elektrycznych od projektu do realizacji',
    icon: Zap,
    highlight: true
  },
  {
    service: 'Usuwanie awarii - pogotowie 24h',
    priceRange: '200 - 500 zł',
    description: 'Szybka pomoc w nagłych awariach elektrycznych - dostępne 24/7',
    icon: Shield,
    highlight: true
  },
  {
    service: 'Naprawy instalacji elektrycznych',
    priceRange: '150 - 800 zł',
    description: 'Profesjonalne naprawy i serwis instalacji elektrycznych',
    icon: Wrench,
    highlight: false
  },
  {
    service: 'Modernizacja instalacji elektrycznych',
    priceRange: '1500 - 4000 zł',
    description: 'Przenoszenie liczników, przesunięcie oświetlenia, rozbudowa instalacji',
    icon: Settings,
    highlight: true
  },
  {
    service: 'Prefabrykacja rozdzielni',
    priceRange: '800 - 2000 zł',
    description: 'Wykonywanie tablic mieszkalnych, modernizacja, dokładanie zabezpieczeń',
    icon: Building,
    highlight: false
  },
  {
    service: 'Podłączanie płyt ceramicznych i piekarników',
    priceRange: '300 - 600 zł',
    description: 'Montaż, sprawdzenie obwodu, dobór połączenia, pierwsze uruchomienie',
    icon: Plug,
    highlight: false
  },
  {
    service: 'Konserwacja instalacji elektrycznych',
    priceRange: '200 - 500 zł',
    description: 'Regularna konserwacja i przeglądy instalacji elektrycznych',
    icon: Gauge,
    highlight: false
  },
  {
    service: 'Montaż osprzętu elektrycznego',
    priceRange: '50 - 150 zł',
    description: 'Gniazd, wyłączników, przełączników, ściemniaczy - biały montaż',
    icon: Plug,
    highlight: false
  },
  {
    service: 'Montaż opraw oświetleniowych',
    priceRange: '100 - 300 zł',
    description: 'Plafoniera, żyrandol, kinkiet, LED, taśmy, naświetlacze, LED RGB',
    icon: Lightbulb,
    highlight: false
  },
  {
    service: 'Przeróbki instalacji elektrycznych',
    priceRange: '200 - 800 zł',
    description: 'Przenoszenie gniazd, przesuwanie lamp, rozbudowa tablic, dokładanie obwodów',
    icon: Home,
    highlight: false
  }
];

export default function PricingTable() {
  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 via-white to-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-yellow-700 to-amber-600 bg-clip-text text-transparent mb-4">
            Cennik usług
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Orientacyjne ceny naszych usług elektrycznych
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-yellow-50 to-amber-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    <div className="flex items-center">
                      <Wrench className="w-4 h-4 mr-2 text-yellow-600" />
                      Usługa
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-2 text-yellow-600" />
                      Zakres cen
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-yellow-600" />
                      Opis
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {pricingData.map((item, index) => (
                  <tr key={index} className={`hover:bg-gradient-to-r hover:from-yellow-50 hover:to-amber-50 transition-all duration-300 hover:scale-[1.01] ${item.highlight ? 'bg-gradient-to-r from-yellow-25 to-amber-25' : ''}`}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${item.highlight ? 'bg-gradient-to-r from-yellow-500 to-amber-500' : 'bg-gradient-to-r from-gray-400 to-gray-500'}`}>
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className={item.highlight ? 'font-bold text-gray-900' : 'font-medium'}>
                          {item.service}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-yellow-600 font-semibold">
                      <span className="bg-yellow-100 px-2 py-1 rounded-full text-xs font-bold">
                        {item.priceRange}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <span className={item.highlight ? 'font-medium' : ''}>
                        {item.description}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>



        {/* Ulepszone okienko z informacjami o cenach */}
        <div className="mt-8 p-8 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 rounded-xl border-2 border-yellow-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-yellow-700 to-amber-700 bg-clip-text text-transparent">
                Ważne informacje o cenach
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-3 bg-white/50 rounded-lg hover:bg-white/70 transition-colors duration-300">
                  <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full mt-1 flex-shrink-0 shadow-sm"></div>
                  <p className="text-gray-800 text-sm font-medium">
                    Podane ceny są orientacyjne i obejmują robociznę oraz podstawowe materiały.
                  </p>
                </div>
                <div className="flex items-start space-x-4 p-3 bg-white/50 rounded-lg hover:bg-white/70 transition-colors duration-300">
                  <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full mt-1 flex-shrink-0 shadow-sm"></div>
                  <p className="text-gray-800 text-sm font-medium">
                    Każda wycena jest przygotowywana indywidualnie po oględzinach obiektu.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-3 bg-white/50 rounded-lg hover:bg-white/70 transition-colors duration-300">
                  <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full mt-1 flex-shrink-0 shadow-sm"></div>
                  <p className="text-gray-800 text-sm font-medium">
                    Wycena i dojazd na terenie miasta są bezpłatne.
                  </p>
                </div>
                <div className="flex items-start space-x-4 p-3 bg-white/50 rounded-lg hover:bg-white/70 transition-colors duration-300">
                  <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full mt-1 flex-shrink-0 shadow-sm"></div>
                  <p className="text-gray-800 text-sm font-medium">
                    Ceny mogą się różnić w zależności od stopnia skomplikowania prac.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
