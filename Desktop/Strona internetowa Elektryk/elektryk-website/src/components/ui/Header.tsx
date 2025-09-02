'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { MotionA, AnimatePresence, MotionDiv } from '@/components/ui/MotionWrapper';

const navigation = [
  { name: 'Strona główna', href: '/' },
  { name: 'Nasze Usługi', href: '/uslugi' },
  { name: 'Cennik', href: '/cennik' },
  { name: 'Kontakt', href: '/kontakt' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/logo.png"
                  alt="Elektryk Toruń Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-gray-900">Elektryk Toruń</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-yellow-500 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <MotionA
              href="tel:+48697146300"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4" />
              <span>Zadzwoń</span>
            </MotionA>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Otwórz menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <MotionDiv 
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                {navigation.map((item, index) => (
                  <MotionDiv
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-gray-600 hover:text-primary-500 font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </MotionDiv>
                ))}
                <MotionA
                  href="tel:+48697146300"
                  className="block px-3 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition-colors duration-200 text-center"
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Zadzwoń teraz
                </MotionA>
              </div>
            </MotionDiv>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
