'use client';

import { FaLeaf, FaShieldAlt, FaClock, FaSync, FaBug, FaDollarSign } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaLeaf className="text-green-500 text-6xl mb-4" />,
      title: 'Integrated Pest Management',
      description: 'We use eco-friendly and efficient methods to ensure long-term pest control for your home or business.',
    },
    {
      icon: <FaShieldAlt className="text-blue-500 text-6xl mb-4" />,
      title: 'Protect Your Home Completely',
      description: 'Our comprehensive pest removal services cover all entry points, preventing any future infestations.',
    },
    {
      icon: <FaClock className="text-yellow-500 text-6xl mb-4" />,
      title: 'Available 24/7',
      description: 'We are available round the clock to address any urgent pest issues and provide immediate assistance.',
    },
    {
      icon: <FaSync className="text-purple-500 text-6xl mb-4" />,
      title: 'Monthly Maintenance',
      description: 'Regular visits ensure that your home stays protected year-round from potential pest invasions.',
    },
    {
      icon: <FaBug className="text-red-500 text-6xl mb-4" />,
      title: 'Full Service Pest Removal',
      description: 'We offer a complete range of pest removal services for all kinds of pests, from rodents to insects.',
    },
    {
      icon: <FaDollarSign className="text-teal-500 text-6xl mb-4" />,
      title: 'Competitive Prices',
      description: 'We offer high-quality pest control services at affordable prices, ensuring you get the best value.',
    },
  ];

  return (
    <section className="py-10 px-3 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 hover:scale-105 transform transition-all"
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-blue-600 mt-4">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
