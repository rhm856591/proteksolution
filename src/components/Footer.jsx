'use client'
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="bg-[var(--Olive-Green)] text-white py-8 px-10">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
                {/* Logo Section */}
                <div className="space-y-4">
                    <Link href="/">
                        <div className="text-3xl font-bold hover:underline cursor-pointer">
                            Proteksolution
                        </div>
                    </Link>
                    <span className="text-sm">
                        Pest management and fumigation with pesticide supply. Your safety, our priority.
                    </span>
                </div>

                {/* Office Address Section */}
                <div className="space-y-4">
                    <h1 className="text-lg font-semibold">Office Address</h1>
                    <p className="text-sm">1234 Pest St., Solution City, PC 12345</p>

                    {/* Phone Number */}
                    <div className="text-sm">
                        <span className="font-semibold">Phone:</span> +1 (555) 123-4567
                    </div>

                    {/* Email Address */}
                    <div className="text-sm">
                        <span className="font-semibold">Email:</span>{" "}
                        <Link href="mailto:info@proteksolution.com" className="hover:text-yellow-400">
                            info@proteksolution.com
                        </Link>
                    </div>
                </div>


                {/* Quick Links Section */}
                <div className="space-y-4">
                    <h1 className="text-lg font-semibold">Quick Links</h1>
                    <ul className="space-y-2">
                        <li><Link href="/services" className="hover:text-yellow-400">Services</Link></li>
                        <li><Link href="/about" className="hover:text-yellow-400">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
                    </ul>
                </div>

                {/* Subscribe and Social Section */}
                <div className="space-y-4">
                    <h1 className="text-lg font-semibold">Subscribe and Follow</h1>
                    <div className="flex space-x-4 text-xl">
                        <Link href="https://facebook.com" target="_blank" className="hover:text-yellow-400">
                            <FaFacebook />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" className="hover:text-yellow-400">
                            <FaInstagram />
                        </Link>
                    </div>
                    <p className="text-sm">Stay updated with our latest news and offers</p>
                    <form className="mt-4 flex flex-col md:flex-row items-center gap-2 md:gap-0">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 rounded-md md:rounded-l-md md:rounded-r-none border-none text-black w-full md:w-auto"
                        />
                        <button
                            type="submit"
                            className="bg-yellow-400 text-black py-2 px-4 rounded-md md:rounded-r-md md:rounded-l-none hover:bg-yellow-500 transition-all duration-300"
                        >
                            Subscribe
                        </button>
                    </form>

                </div>
            </div>

            {/* Footer Copyright */}
            <p className="text-center text-sm mt-6">
                Copyright © {year} Proteksolution. All rights reserved.
            </p>
        </div>
    );
};

export default Footer;