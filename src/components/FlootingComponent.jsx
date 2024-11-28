'use client'
import { ArrowUp, PhoneIcon } from 'lucide-react'
import { FaWhatsapp } from "react-icons/fa";
import React from 'react'
import Link from 'next/link';

const FlootingComponent = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scroll
        });
    };

    return (
        <div>
            <div className="fixed bottom-0 right-0 p-4 z-20">
                <div className="flex flex-col items-center space-y-4">
                    {/* Phone Icon (Click to make a call) */}
                    <Link href="tel:+1234567890" aria-label="Call us">
                        <PhoneIcon className="h-10 w-10 text-[var(--Green)] cursor-pointer hover:scale-110  transition-all duration-110" />
                    </Link>

                    {/* WhatsApp Icon (Click to open WhatsApp chat) */}
                    <Link
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat with us on WhatsApp"
                    >
                        <FaWhatsapp className="h-10 w-10 text-[var(--Green)] cursor-pointer hover:scale-110  transition-all duration-110" />
                    </Link>

                    {/* Scroll-to-Top Arrow (Using Link for internal navigation, if needed) */}
                    
                        <div
                            className="rounded-full bg-[var(--Green)] p-2 text-white cursor-pointer hover:scale-110 hover:text-[var(--Olive-Green)] transition-all duration-110"
                            onClick={scrollToTop} // Attach the scroll function to the click event
                            aria-label="Scroll to top"
                        >
                            <ArrowUp />
                        </div>
                </div>
            </div>
        </div>
    );
};

export default FlootingComponent