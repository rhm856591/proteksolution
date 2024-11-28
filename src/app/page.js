'use client';

import { useState, useEffect } from 'react';
import Skeleton from "@/components/Skeleton"; // Adjust path based on your setup
import Carousel from "@/components/Carousel";
import Ourservice from "@/components/Ourservice";
import Success from "@/components/Success";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import OurClients from "@/components/OurClient";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6">
      {isLoading ? (
        <>
          {/* Skeleton for Carousel */}
          <Skeleton className="w-full h-56 sm:h-72 md:h-96" />

          {/* Skeleton for Ourservice */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            <Skeleton className="h-40 sm:h-60 md:h-[280px] w-full" />
            <Skeleton className="h-40 sm:h-60 md:h-[280px] w-full" />
            <Skeleton className="h-40 sm:h-60 md:h-[280px] w-full" />
          </div>

          {/* Skeleton for WhyChooseUs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            <Skeleton className="h-24 sm:h-28 md:h-36 w-full" />
            <Skeleton className="h-24 sm:h-28 md:h-36 w-full" />
            <Skeleton className="h-24 sm:h-28 md:h-36 w-full" />
          </div>

          {/* Skeleton for Gallery */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
            <Skeleton className="h-24 sm:h-28 md:h-32 w-full" />
            <Skeleton className="h-24 sm:h-28 md:h-32 w-full" />
            <Skeleton className="h-24 sm:h-28 md:h-32 w-full" />
            <Skeleton className="h-24 sm:h-28 md:h-32 w-full" />
          </div>

          {/* Skeleton for OurClients */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
            <Skeleton className="h-16 sm:h-20 w-16 sm:w-20 rounded-full" />
            <Skeleton className="h-16 sm:h-20 w-16 sm:w-20 rounded-full" />
            <Skeleton className="h-16 sm:h-20 w-16 sm:w-20 rounded-full" />
            <Skeleton className="h-16 sm:h-20 w-16 sm:w-20 rounded-full" />
          </div>
        </>
      ) : (
        <>
          <Carousel />
          <Ourservice />
          <WhyChooseUs />
          <Gallery />
          <Success />
          <OurClients />
        </>
      )}
    </div>
  );
}
