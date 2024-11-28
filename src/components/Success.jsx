'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Skeleton } from "@/components/ui/skeleton"


const CountUp = ({ target }) => {
  const [count, setCount] = useState(0); // Initial count
  const [hasStarted, setHasStarted] = useState(false); // To track if animation has started
  const duration = 2; // Duration in seconds for the count-up
  const countRef = useRef(null); // Ref for the component

  useEffect(() => {
    // Intersection Observer to detect when the element enters the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return; // Don't start animation if not in viewport

    const startTime = Date.now(); // Track the start time
    const endTime = startTime + duration * 1000; // Calculate the end time

    const interval = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (endTime - startTime), 1); // Calculate progress

      const currentCount = Math.floor(progress * target); // Calculate the current count
      setCount(currentCount);

      if (progress === 1) {
        clearInterval(interval); // Stop the interval when target is reached
      }
    }, 50);

    return () => clearInterval(interval); // Clean up interval when the component unmounts
  }, [target, hasStarted]);

  return (
    <div ref={countRef} className="text-3xl font-bold">
      {count}
    </div>
  );
};

const Success = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-100">
      <div className="bg-white p-8 rounded-lg w-[80%] shadow-lg max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-500 mb-6">Our Success</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <span className="text-3xl font-bold">

              <CountUp target={100} />
            </span>
          </div>
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Top Clients</h2>
            <span className="text-3xl font-bold">

              <CountUp target={50} />
            </span>
          </div>
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Commercial Projects</h2>
            <span className="text-3xl font-bold">

              <CountUp target={25} />
            </span>
          </div>
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Passionate Employees</h2>
            <span className="text-3xl font-bold">

              <CountUp target={20} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
