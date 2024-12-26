import React from 'react';
import { Briefcase, Wrench, Truck, Package, Users } from 'lucide-react';

const trades = [
  {
    icon: Briefcase,
    title: 'Services administratifs',
  },
  {
    icon: Wrench, // Changed from Tool to Wrench
    title: 'Maintenance industrielle',
  },
  {
    icon: Truck,
    title: 'Logistique',
  },
  {
    icon: Package,
    title: 'Conditionnement',
  },
  {
    icon: Users,
    title: 'Services aux entreprises',
  },
];

const TradeCard = ({ icon: Icon, title }: { icon: any; title: string }) => (
  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
    <Icon className="h-8 w-8 text-blue-600 animate-bounce" />
    <p className="mt-2 text-sm font-medium text-center text-gray-900">
      {title}
    </p>
  </div>
);

const Trades = () => {
  return (
    <section id="les-metiers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              Nos Métiers
            </h2>
            <p className="text-lg text-gray-600">
              Découvrez notre expertise dans différents domaines d'activité. 
              Nous proposons des solutions adaptées aux besoins de nos clients 
              tout en favorisant l'insertion professionnelle.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
            {trades.map((trade) => (
              <TradeCard key={trade.title} {...trade} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trades;