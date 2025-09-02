import Image from 'next/image';
import { Phone, MessageCircle } from 'lucide-react';
import { MotionH1, MotionP, MotionDiv, MotionA } from '@/components/ui/MotionWrapper';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  showButtons?: boolean;
}

export default function Hero({ title, subtitle, backgroundImage, showButtons = true }: HeroProps) {
  return (
    <section className="relative h-[65vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Elektryk w pracy"
          fill
          className="object-cover object-[center_50%]"
          priority
          quality={95}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionH1 
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </MotionH1>
        <MotionP 
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {subtitle}
        </MotionP>
        
        {showButtons && (
          <MotionDiv 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <MotionA
              href="tel:+48697146300"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              <span>Zadzwoń teraz</span>
            </MotionA>
            <MotionA
              href="/kontakt"
              className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 px-6 rounded-lg border border-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span>Wyślij wiadomość</span>
            </MotionA>
          </MotionDiv>
        )}
      </div>
    </section>
  );
}
