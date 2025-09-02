import { Clock, Shield, Truck, Zap } from 'lucide-react';
import { MotionDiv } from '@/components/ui/MotionWrapper';

const features = [
  {
    icon: Clock,
    title: 'Szybkość',
    description: 'Szybka realizacja zleceń - często tego samego dnia'
  },
  {
    icon: Shield,
    title: 'Gwarancja',
    description: 'Pełna gwarancja na wszystkie wykonane prace'
  },
  {
    icon: Truck,
    title: 'Dojazd',
    description: 'Dojazd na terenie Warszawy i okolic - bezpłatnie'
  },
  {
    icon: Zap,
    title: 'Nowoczesność',
    description: 'Najnowsze technologie i materiały najwyższej jakości'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-yellow-600 to-amber-600 bg-clip-text text-transparent mb-4">
              Dlaczego warto nam zaufać?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nasze doświadczenie i profesjonalizm to gwarancja wysokiej jakości usług
            </p>
          </MotionDiv>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <MotionDiv 
              key={index} 
              className="text-center group bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <MotionDiv 
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 shadow-lg ${
                  index === 0 ? 'bg-gradient-to-r from-green-500 to-green-600 group-hover:from-green-600 group-hover:to-green-700' :
                  index === 1 ? 'bg-gradient-to-r from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700' :
                  index === 2 ? 'bg-gradient-to-r from-purple-500 to-purple-600 group-hover:from-purple-600 group-hover:to-purple-700' :
                  'bg-gradient-to-r from-yellow-500 to-yellow-600 group-hover:from-yellow-600 group-hover:to-yellow-700'
                }`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </MotionDiv>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
