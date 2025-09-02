import Image from 'next/image';
import Link from 'next/link';
import { MotionDiv } from '@/components/ui/MotionWrapper';

const specializations = [
  {
    id: 1,
    title: 'Fotowoltaika',
    image: '/images/Fotowoltaika.png',
    description: 'Instalacja paneli słonecznych i systemów fotowoltaicznych'
  },
  {
    id: 2,
    title: 'Montaż instalacji elektrycznej',
    image: '/images/Montaż instalacji elektrycznej.png',
    description: 'Kompleksowy montaż instalacji elektrycznych'
  },
  {
    id: 3,
    title: 'Montaż instalacji ogrzewania',
    image: '/images/Montaż instalacji ogrzewania.jpeg',
    description: 'Profesjonalny montaż systemów ogrzewania'
  },
  {
    id: 4,
    title: 'Projekt instalacji elektrycznej',
    image: '/images/Projekt instalacji elektrycznej.png',
    description: 'Projektowanie instalacji elektrycznych'
  },
  {
    id: 5,
    title: 'Projekt instalacji ogrzewania',
    image: '/images/projekt instalacji grzewczej.jpeg',
    description: 'Projektowanie systemów ogrzewania'
  }
];

export default function OurWork() {
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
              Specjalizacje
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nasze główne obszary specjalizacji w dziedzinie elektryki i ogrzewania
            </p>
          </MotionDiv>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {specializations.map((specialization, index) => (
            <MotionDiv 
              key={specialization.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 w-full sm:w-80 lg:w-96"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="relative h-48 overflow-hidden">
                <MotionDiv
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={specialization.image}
                    alt={specialization.title}
                    fill
                    className="object-cover"
                  />
                </MotionDiv>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  {specialization.title}
                </h3>
                <p className="text-gray-600">
                  {specialization.description}
                </p>
                <Link 
                  href="/uslugi"
                  className="mt-4 text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors duration-300 flex items-center hover:underline"
                >
                  <span>Zobacz więcej</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
