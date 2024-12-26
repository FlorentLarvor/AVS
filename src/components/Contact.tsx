import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <ContactForm />
          </div>
          <div className="h-full w-full rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Équipe professionnelle en réunion"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;