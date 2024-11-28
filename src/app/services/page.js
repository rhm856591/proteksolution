// src/app/services/page.js

import Link from "next/link";

import services from "@/utiles"

const ServicesPage = () => {
  return (
    <div className="py-8 px-6 pt-28">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg overflow-hidden  "
          >
            <div className="w-full flex justify-center items-center">
              <img
                src={service.imageUrl}
                alt={service.name}
                className="w-[50%] mix-blend-multiply aspect-3/2 object-contain"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{service.name}</h2>
              <p className="text-gray-600 mt-2">{service.description.slice(0, 50)}...</p>
              <Link href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-yellow-400 hover:text-yellow-500 mt-4 inline-block">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
