import React from 'react';

const ContactForm = () => {
  return (
    <form className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contactez-nous</h2>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nom complet
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Téléphone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
      >
        Envoyer
      </button>
    </form>
  );
};

export default ContactForm;