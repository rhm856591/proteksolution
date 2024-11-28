'use client';

import Image from 'next/image';

const OurClients = () => {
  const clients = [
    { id: 1, name: 'Client One', logo: '/client-1.png' },
    { id: 2, name: 'Client Two', logo: '/client-1.png' },
    { id: 3, name: 'Client Three', logo: '/client-1.png' },
    { id: 4, name: 'Client Four', logo: '/client-1.png' },
    { id: 5, name: 'Client Five', logo: '/client-1.png' },
    { id: 6, name: 'Client Six', logo: '/client-1.png' },
  ];

  return (
    <section className="py-10 px-3 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Clients</h2>
        <p className="text-gray-600 text-lg mb-12">
          Trusted by top companies for our reliable and professional pest control services.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {clients.map((client) => (
            <div
              key={client.id}
              className="bg-white relative group shadow-md p-4 rounded-lg flex justify-center items-center hover:scale-105 transform transition-all"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={120}
                className="w-full h-full object-contain filter grayscale group-hover:filter-none transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
