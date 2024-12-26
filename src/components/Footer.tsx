import React from 'react';
import { Facebook, Twitter, Instagram, Settings } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center mb-8">
          <Settings className="h-8 w-8 text-white" />
          <span className="ml-2 text-xl font-semibold text-white">
            Ateliers Val de Sambre
          </span>
        </div>
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Ateliers Val de Sambre. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;