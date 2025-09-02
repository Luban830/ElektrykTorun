'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import { AnimatePresence, MotionDiv } from '@/components/ui/MotionWrapper';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  // Zamykanie modala po naciśnięciu Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleScroll = (e: Event) => {
      e.preventDefault();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Blokowanie scrollowania body gdy modal jest otwarty
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
      
      // Dodatkowe blokowanie scrollowania
      document.addEventListener('wheel', handleScroll, { passive: false });
      document.addEventListener('touchmove', handleScroll, { passive: false });
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('wheel', handleScroll);
      document.removeEventListener('touchmove', handleScroll);
      
      // Przywracanie scrollowania
      const scrollY = document.body.style.top;
      document.body.style.overflow = 'unset';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <MotionDiv
            className="absolute inset-0 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <MotionDiv
            className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">{title}</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-all duration-300 hover:scale-110 hover:rotate-90"
                aria-label="Zamknij modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6">
              {children}
            </div>
          </MotionDiv>
        </div>
      )}
    </AnimatePresence>
  );
}
