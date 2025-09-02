import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/logo.png"
                  alt="Elektryk Toruń Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">Elektryk Toruń</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Profesjonalne usługi elektryczne dla domów i firm. Doświadczenie, 
              gwarancja i szybka realizacja to nasze priorytety.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <a href="tel:+48697146300" className="hover:text-yellow-500 transition-colors">
                  697 146 300
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <a href="mailto:umalego1@wp.pl" className="hover:text-yellow-500 transition-colors">
                  umalego1@wp.pl
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>Toruń i okolice</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Szybkie linki</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link href="/uslugi" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Nasze usługi
                </Link>
              </li>
              <li>
                <Link href="/cennik" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Cennik
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Godziny pracy</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Pon - Nd: 24/7</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Całodobowo</span>
              </div>
              <div className="mt-4 p-3 bg-red-500 rounded-lg">
                <p className="text-sm font-semibold">Awaria 24/7</p>
                <a href="tel:+48697146300" className="text-lg font-bold">
                  697 146 300
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Elektryk Toruń. Wszystkie prawa zastrzeżone.</p>
          <p className="mt-2 text-sm">
            Strona została zrobiona przez{' '}
            <a 
              href="https://www.lunolab.pl/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 transition-colors font-bold"
            >
              LunoLab
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
