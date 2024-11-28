'use client';

import Loading from '@/components/Loading'; // Make sure this component exists
import { toast } from '@/hooks/use-toast'; // Ensure the toast hook is correctly implemented
import { useState } from 'react';
import axios from 'axios';


const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(formData); // Print formData to check its contents when submitting
    //     // Submit the form or process the data...

    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('/api/contact', formData);

            alert('Form submitted successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
            // Error toast
            alert('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="py-20 px-8 bg-gray-100">
            <div className="max-w-7xl mx-auto flex flex-col sm:pb-10 md:flex-row gap-12">
                <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-8">
                    <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Contact Us</h2>
                    <p className="text-lg text-center text-gray-600 mb-8">
                        Have questions, concerns, or need assistance? Fill out the form below, and we’ll get back to you as soon as possible.
                    </p>
                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 space-y-6">
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email address"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Write your message here..."
                                rows="5"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full flex justify-center items-center bg-yellow-400 text-white px-6 py-3 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {loading ? <Loading /> : "Submit"}
                        </button>
                    </form>
                </div>
                <div className="w-full md:w-1/2 md:top-20 h-96 relative">
                    <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Find Us Here</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7008.202098988409!2d77.28640620000002!3d28.566728200000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1732721784965!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
