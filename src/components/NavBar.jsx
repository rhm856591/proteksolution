'use client';

import { useState } from "react";
import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown toggle state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-[var(--Olive-Green)] text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link href="/" className="text-2xl font-bold hover:text-yellow-400">
          Proteksolution
        </Link>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Navbar Links */}
        <ul
          className={`lg:flex flex-col lg:flex-row lg:space-x-8 lg:items-center transition-all duration-300 ${isOpen ? "block" : "hidden"
            } absolute lg:static top-16 left-0 w-full lg:w-auto bg-[var(--Olive-Green)] lg:bg-transparent`}
        >
          <li>
            <Link
              href="/"
              className="block px-4 py-2 lg:p-0 hover:text-yellow-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block px-4 py-2 lg:p-0 hover:text-yellow-400"
            >
              About
            </Link>
          </li>
          {/* Services with Dropdown */}
          <li className="relative group">
            <button
              onClick={toggleDropdown}
              className="flex items-center group gap-1 px-4 py-2 lg:p-0 hover:text-yellow-400 focus:outline-none"
            >
              Services
              <IoIosArrowUp
                className={`transition-transform duration-300 group-hover:rotate-180`}
              />
            </button>
            <ul
              className={`absolute left-0 mt-2 w-60 bg-[var(--Olive-Green)] text-white rounded-md shadow-lg overflow-hidden transition-all duration-300 ${isDropdownOpen ? "max-h-screen" : "max-h-0"
                } lg:group-hover:max-h-screen`}
            >
              {[
                "Fly Management",
                "Rodent Management",
                "Cockroach Management",
                "Termite Management",
                "Lizard Management",
                "Mosquito Management",
                "Ant Management",
                "Bed Bug Management",
                "Spider Management",
                "Wood Borer Management",
                "Weed Management",
                "Bee Management",
                "Tick Management",
                "Microbial Management",
              ].map((service, index) => (
                <li key={index} className="px-4 py-2 hover:bg-yellow-400">
                  <Link href={`/services/${service.toLowerCase().replace(/\s/g, "-")}`}>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link
              href="/contact"
              className="block px-4 py-2 lg:p-0 hover:text-yellow-400"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
