import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin } from 'lucide-react';
import L from 'leaflet';

// Fix for default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Centre approximatif de la Sambre-Avesnois
const CENTER_POSITION: [number, number] = [50.2469, 3.9526];

const Territory = () => {
  return (
    <section id="un-territoire" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Nos Territoires
          </h2>
          <p className="text-lg text-gray-600">
            Découvrez notre implantation au cœur du territoire Sambre-Avesnois
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-xl p-4">
          <div className="h-[600px] rounded-lg overflow-hidden">
            <MapContainer
              center={CENTER_POSITION}
              zoom={11}
              className="h-full w-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={CENTER_POSITION}>
                <Popup>
                  <div className="text-center">
                    <h3 className="font-semibold">Ateliers Val de Sambre</h3>
                    <p className="text-sm text-gray-600">
                      Au service du territoire Sambre-Avesnois
                    </p>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Territory;