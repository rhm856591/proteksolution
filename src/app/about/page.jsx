import React from 'react'

const page = () => {
  return (
    <div className="py-20 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Welcome to our professional pest control services. We specialize in providing effective, eco-friendly, and
          reliable solutions to tackle a wide range of pest problems. Our team of experts is dedicated to keeping
          your homes and workplaces safe and hygienic, free from pests that pose risks to health and property.
        </p>
      </div>
      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our mission is to deliver top-notch pest management services while prioritizing the safety of our customers
          and the environment. We aim to use innovative techniques and sustainable practices to ensure long-lasting
          results and peace of mind for all our clients.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-left text-lg text-gray-600">
          <li>Experienced and certified pest control professionals.</li>
          <li>Environmentally-friendly and safe pest management solutions.</li>
          <li>Customized plans tailored to your specific pest issues.</li>
          <li>Quick and efficient service with guaranteed satisfaction.</li>
          <li>Comprehensive services covering a wide range of pests.</li>
        </ul>
      </div>
      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Vision</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          We envision a pest-free world where families and businesses can thrive without worrying about the threats
          and damages caused by pests. Through innovation, dedication, and unparalleled service, we aim to become
          the trusted name in pest management across the region.
        </p>
      </div>
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h2>
        <p className="text-lg text-gray-600">
          Have questions or need assistance? We’re here to help! Reach out to us anytime, and let’s work together to
          create a pest-free environment for you.
        </p>
      </div>
    </div>
  );
};
export default page