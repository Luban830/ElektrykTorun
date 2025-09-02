import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefon',
    content: '697 146 300',
    href: 'tel:+48697146300',
    description: 'Zadzwoń do nas w godzinach pracy'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'umalego1@wp.pl',
    href: 'mailto:umalego1@wp.pl',
    description: 'Napisz do nas wiadomość'
  },
  {
    icon: MapPin,
    title: 'Adres',
    content: 'Kołłątaja 87-100, Toruń',
    href: 'https://maps.google.com/?q=Kołłątaja+87-100+Toruń',
    description: 'Obsługujemy Toruń i okolice'
  },
  {
    icon: Clock,
    title: 'Godziny pracy',
    content: 'Czynne całą dobę',
    href: '#',
    description: 'Awaria 24/7'
  }
];



export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Information */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Dane kontaktowe</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h4>
                <a
                  href={item.href}
                  className="text-yellow-600 hover:text-yellow-700 font-medium block mb-1"
                >
                  {item.content}
                </a>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Areas */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Obszar działania</h3>
        <div className="text-center">
          <p className="text-gray-600 mb-4 text-lg">
            Działamy w <span className="font-semibold text-yellow-600">Toruniu</span> i jego okolicy
          </p>
          <p className="text-gray-600 mb-6">
            Jeśli jesteś zainteresowany naszymi usługami i chcesz sprawdzić, czy dojedziemy do Twojej lokalizacji, 
            skontaktuj się z nami bezpośrednio lub skorzystaj z formularza kontaktowego.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+48697146300"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 text-center shadow-lg hover:shadow-xl hover:scale-105"
            >
              Zadzwoń: 697 146 300
            </a>
            <a
              href="mailto:umalego1@wp.pl"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-center shadow-lg hover:shadow-xl hover:scale-105"
            >
              Napisz: umalego1@wp.pl
            </a>
          </div>
        </div>
      </div>


    </div>
  );
}
