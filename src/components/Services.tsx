import React from 'react';
import { Wrench, Briefcase, Users, Clock } from 'lucide-react';

const services = [
  {
    icon: Wrench, // Changed from Tool to Wrench
    title: 'Expertise Technique',
    description: 'Solutions techniques innovantes adaptées à vos projets',
  },
  {
    icon: Briefcase,
    title: 'Conseil Professionnel',
    description: 'Accompagnement personnalisé pour votre développement',
  },
  {
    icon: Users,
    title: 'Formation',
    description: 'Programmes de formation sur mesure pour vos équipes',
  },
  {
    icon: Clock,
    title: 'Support 24/7',
    description: 'Une équipe disponible pour répondre à vos besoins',
  },
];

const Services = () => {
  return (
    <section id="nos-services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Nos Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Des solutions adaptées à vos besoins professionnels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;