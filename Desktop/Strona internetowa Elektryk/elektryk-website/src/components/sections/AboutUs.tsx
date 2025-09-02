import { MotionDiv } from '@/components/ui/MotionWrapper';
import Image from 'next/image';

export default function AboutUs() {
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
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-yellow-600 to-amber-600 bg-clip-text text-transparent mb-4">
              O nas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jesteśmy zespołem doświadczonych elektryków, którzy od lat zapewniają najwyższą jakość usług elektrycznych w Toruniu i okolicach.
            </p>
          </MotionDiv>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Lewa strona - Opis */}
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col justify-center">
              {/* Nagłówek sekcji */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  Kim jesteśmy?
                </h3>
              </div>
              
              {/* Główna treść */}
              <div className="space-y-4 mb-6">
                <p className="text-gray-600 leading-relaxed">
                  <span className="font-semibold text-yellow-600">Od ponad 10 lat</span> świadczymy profesjonalne usługi elektryczne w zakresie odbiorów oraz pomiarów instalacji. Nasze doświadczenie pozwala nam zagwarantować najwyższą jakość, terminowość oraz pełne bezpieczeństwo wykonywanych prac.
                </p>
              </div>

              {/* Lista zalet */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">Doświadczenie 10+ lat</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">Dostępność 24/7</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">Pełna gwarancja</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">Toruń i okolice</span>
                </div>
              </div>
              
              {/* Motto w specjalnym bloku */}
              <div className="p-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl border-l-4 border-yellow-500 mb-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white text-sm">💡</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Nasze motto:</h4>
                    <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                      &ldquo;Rzeczy niemożliwe robimy od ręki, na cuda trzeba chwileczkę poczekać.&rdquo;
                    </blockquote>
                  </div>
                </div>
              </div>
              
              {/* Podsumowanie */}
              <p className="text-gray-600 leading-relaxed">
                Dzięki tej filozofii wielu Klientów powierza nam swoje instalacje, wiedząc, że zawsze znajdziemy najlepsze rozwiązanie.
              </p>
            </div>
          </MotionDiv>

          {/* Prawa strona - Zdjęcie z animacją */}
          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative overflow-hidden">
              {/* Kontener z animacją iskier */}
              <div className="relative">
                            <Image 
              src="/images/zar.png" 
              alt="Profesjonalne usługi elektryczne" 
              width={800}
              height={600}
              className="w-full h-auto max-w-2xl object-cover relative z-10"
            />
                
                {/* Efekt glow/rozświetlania */}
                <div className="absolute top-1/2 left-1/2 w-3/4 h-3/4 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-400/15 via-amber-400/25 to-yellow-400/15 rounded-full blur-lg animate-pulse"></div>
                
                {/* Iskry animowane */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Iskra 1 */}
                  <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-spark-1"></div>
                  {/* Iskra 2 */}
                  <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-amber-400 rounded-full animate-spark-2"></div>
                  {/* Iskra 3 */}
                  <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-spark-3"></div>
                  {/* Iskra 4 */}
                  <div className="absolute bottom-1/4 right-1/3 w-2.5 h-2.5 bg-orange-400 rounded-full animate-spark-4"></div>
                  {/* Iskra 5 */}
                  <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-spark-5"></div>
                  {/* Iskra 6 */}
                  <div className="absolute top-2/3 right-1/6 w-1 h-1 bg-amber-300 rounded-full animate-spark-6"></div>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>


      </div>
    </section>
  );
}
