'use client'
import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slides data
  const slides = [
    { id: 1, content: 'Carousel Slide 1 Content', imgSrc: "/carousel1.jpg" },
    { id: 2, content: 'Carousel Slide 2 Content', imgSrc: "/carousel2.jpg" },
    { id: 3, content: 'Carousel Slide 3 Content', imgSrc: "/carousel3.jpg" },
    { id: 4, content: 'Carousel Slide 4 Content', imgSrc: "/carousel4.jpg" },
  ];

  // Auto-slide logic
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 1500);

    return () => clearInterval(autoSlide);
  }, [slides.length]);

  // Next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative flex items-center justify-center w-full h-[80vh] rounded-lg overflow-hidden pt-16">
      {/* Left Arrow */}
      <FiChevronLeft
        className="absolute left-5 opacity-50 hover:opacity-100 transition-all duration-150 text-white text-3xl bg-gray-800 rounded-full p-2 cursor-pointer z-10"
        onClick={prevSlide}
      />

      {/* Slide Content */}
      <div className="w-full h-full">
        <img
          src={slides[currentSlide].imgSrc}
          alt={slides[currentSlide].content}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Arrow */}
      <FiChevronRight
        className="absolute right-5 opacity-50 hover:opacity-100 transition-all duration-150 text-white text-3xl bg-gray-800 rounded-full p-2 cursor-pointer z-10"
        onClick={nextSlide}
      />
    </div>
  );
};

export default Carousel;
