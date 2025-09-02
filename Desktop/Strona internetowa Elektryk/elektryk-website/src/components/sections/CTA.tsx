import { Phone, MessageCircle, Star } from 'lucide-react';
import { MotionH2, MotionP, MotionDiv, MotionA } from '@/components/ui/MotionWrapper';

interface CTAProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: 'default' | 'emergency' | 'multi';
  showMultipleButtons?: boolean;
}

export default function CTA({ 
  title, 
  subtitle, 
  buttonText = "Zadzwoń teraz", 
  buttonHref = "tel:+48697146300",
  variant = 'default',
  showMultipleButtons = false
}: CTAProps) {
  const isEmergency = variant === 'emergency';
  const isMulti = variant === 'multi' || showMultipleButtons;
  
  return (
    <section className={`py-16 ${isEmergency ? 'bg-red-500' : isMulti ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <MotionH2 
          className={`text-3xl md:text-4xl font-bold mb-4 ${isEmergency ? 'text-white' : isMulti ? 'text-white' : 'text-gray-900'}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {title}
        </MotionH2>
        <MotionP 
          className={`text-xl mb-8 max-w-2xl mx-auto ${isEmergency ? 'text-red-100' : isMulti ? 'text-yellow-100' : 'text-gray-600'}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </MotionP>
        
        {isMulti ? (
          <MotionDiv 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <MotionA
              href="tel:+48697146300"
              className="bg-white text-yellow-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              <span>Zadzwoń teraz</span>
            </MotionA>
            <MotionA
              href="/kontakt"
              className="bg-yellow-600 text-white hover:bg-yellow-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span>Wyślij wiadomość</span>
            </MotionA>
            <MotionA
              href="/cennik"
              className="bg-yellow-500 text-white hover:bg-yellow-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Star className="w-5 h-5" />
              <span>Zobacz cennik</span>
            </MotionA>
          </MotionDiv>
        ) : (
          <MotionA
            href={buttonHref}
            className={`inline-flex items-center space-x-2 font-semibold py-4 px-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-lg hover:shadow-xl hover:scale-105 ${
              isEmergency 
                ? 'bg-white text-red-500 hover:bg-gray-100 focus:ring-white' 
                : 'bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-500'
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-5 h-5" />
            <span>{buttonText}</span>
          </MotionA>
        )}
      </div>
    </section>
  );
}
