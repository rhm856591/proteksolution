// 'use client';

import services from "@/utiles";

const ServiceDetailPage = async ({ params }) => {
  const { slug } = await params; // Access the slug from dynamic route parameters

  // Find the matching service based on the slug
  const service = services.find(service =>
    service.name.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!service) {
    return (
      <div className="py-8 px-6 pt-24">
        <h1 className="text-3xl font-bold text-center mb-8">Service Not Found</h1>
        <p className="text-gray-600 text-center">
          The service you are looking for does not exist or is unavailable at the moment.
        </p>
      </div>
    );
  }

  return (
    <div className="py-8 px-6 pt-24">
      <h1 className="text-3xl font-bold text-center mb-8">{service.name}</h1>
      <div className="flex justify-center">
        <img
          src={service.imageUrl}
          alt={service.name}
          className="w-80 max-w-3xl h-80 object-cover rounded-lg shadow-md "

        />
      </div>
      <div className="text-gray-600 font-[geistSans] text-lg flex justify-center items-center leading-relaxed whitespace-pre-line"><p className="text-gray-600 font-[geistSans] mt-6 text-lg leading-relaxed">{service.description}</p></div>
    </div>
  );
};

export default ServiceDetailPage;
