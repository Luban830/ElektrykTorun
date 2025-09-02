'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Wystąpił błąd podczas wysyłania wiadomości');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Wystąpił błąd podczas wysyłania wiadomości');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent mb-4">Wyślij wiadomość</h3>
      
      {submitStatus === 'success' && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <p className="text-green-800">Wiadomość została wysłana pomyślnie! Skontaktujemy się z Tobą wkrótce.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <p className="text-red-800">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Imię i nazwisko *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 hover:border-blue-300 focus:scale-[1.02]"
              placeholder="Jan Kowalski"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 hover:border-blue-300 focus:scale-[1.02]"
              placeholder="jan@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Wiadomość *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 hover:border-blue-300 focus:scale-[1.02] resize-vertical"
            placeholder="Opisz swoje potrzeby..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 hover:shadow-lg mt-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Wysyłanie...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Wyślij wiadomość</span>
            </>
          )}
        </button>
      </form>
      
      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">⚡</span>
          </div>
          <p className="text-sm text-gray-700 font-medium">
            Staramy się odpowiadać na wszystkie wiadomości w przeciągu 24 godzin
          </p>
        </div>
      </div>
    </div>
  );
}
