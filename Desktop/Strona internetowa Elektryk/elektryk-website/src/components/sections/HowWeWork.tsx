import { Phone, Calculator, Wrench, Shield } from 'lucide-react';
import { MotionDiv } from '@/components/ui/MotionWrapper';

const steps = [
  {
    icon: Phone,
    title: 'Kontakt',
    description: 'Skontaktuj się z nami telefonicznie lub przez formularz kontaktowy'
  },
  {
    icon: Calculator,
    title: 'Wycena',
    description: 'Przygotujemy szczegółową wycenę prac i materiałów'
  },
  {
    icon: Wrench,
    title: 'Realizacja',
    description: 'Wykonujemy prace zgodnie z ustalonym harmonogramem'
  },
  {
    icon: Shield,
    title: 'Gwarancja',
    description: 'Wszystkie prace objęte są pełną gwarancją jakości'
  }
];

export default function HowWeWork() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-yellow-600 to-amber-600 bg-clip-text text-transparent mb-4">
              Jak pracujemy?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Prosty proces współpracy gwarantujący wysoką jakość usług
            </p>
          </MotionDiv>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <MotionDiv 
              key={index} 
              className="text-center relative bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transform translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10">
                <MotionDiv 
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg ${
                    index === 0 ? 'bg-gradient-to-r from-green-500 to-green-600' :
                    index === 1 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                    index === 2 ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                    'bg-gradient-to-r from-pink-500 to-pink-600'
                  }`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </MotionDiv>
                <div className={`w-8 h-8 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold shadow-md ${
                  index === 0 ? 'bg-gradient-to-r from-green-600 to-green-700' :
                  index === 1 ? 'bg-gradient-to-r from-blue-600 to-blue-700' :
                  index === 2 ? 'bg-gradient-to-r from-purple-600 to-purple-700' :
                  'bg-gradient-to-r from-pink-600 to-pink-700'
                }`}>
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
