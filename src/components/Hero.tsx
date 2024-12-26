import React from 'react';
import ContactForm from './ContactForm';
import { CircleDot } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gray-50 pt-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left relative">
            {/* Decorative dots */}
            <div className="absolute -left-8 -top-8 text-blue-600 opacity-20">
              <CircleDot className="w-16 h-16" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Ateliers du Val de Sambre
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Je choisis le Travail Protégé et valorise mon territoire
            </p>
            {/* Decorative dots */}
            <div className="absolute -right-8 -bottom-8 text-blue-600 opacity-20">
              <CircleDot className="w-16 h-16" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-8 relative">
            {/* Decorative border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg -z-10 transform -rotate-1"></div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;