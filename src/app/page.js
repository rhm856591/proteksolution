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
          <Skeleton className="w-full h-96" />

          {/* Skeleton for Ourservice */}
          <div className="grid grid-cols-1 py-8 px-6 md:grid-cols-3 gap-6">
            <Skeleton className="h-[280px] w-[365px]" />
            <Skeleton className="h-[280px] w-[365px]" />
            <Skeleton className="h-[280px] w-[365px]" />
            <Skeleton className="h-[280px] w-[365px]" />
            <Skeleton className="h-[280px] w-[365px]" />
            <Skeleton className="h-[280px] w-[365px]" />
          </div>

          {/* Skeleton for WhyChooseUs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Skeleton className="h-36" />
            <Skeleton className="h-36" />
            <Skeleton className="h-36" />
          </div>

          {/* Skeleton for Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
          </div>

          {/* Skeleton for OurClients */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Skeleton className="h-20 w-20 rounded-full" />
            <Skeleton className="h-20 w-20 rounded-full" />
            <Skeleton className="h-20 w-20 rounded-full" />
            <Skeleton className="h-20 w-20 rounded-full" />
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
