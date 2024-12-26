import React from 'react';

const About = () => {
  return (
    <section id="à-propos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              Qui sommes-nous ?
            </h2>
            <div className="text-lg text-gray-600 space-y-4">
              <p>
                Depuis plus de 15 ans, notre entreprise s'engage à fournir des services
                de qualité supérieure à nos clients. Notre expertise et notre
                savoir-faire nous permettent de répondre aux défis les plus complexes.
              </p>
              <p>
                Nous croyons en l'innovation continue et en l'excellence
                opérationnelle. Notre équipe de professionnels qualifiés travaille
                sans relâche pour garantir votre satisfaction.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                En savoir plus
              </a>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Notre équipe au travail"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;