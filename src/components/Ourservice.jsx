'use client';
import Link from "next/link";

import services from "@/utiles";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

const Ourservice = () => {
    return (
        <div className="py-8 px-6">
            <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.slice(0, 6).map((service, index) => (
                    <div
                        key={index}
                        className="border rounded-lg shadow-lg overflow-hidden  "
                    >
                        <div className="w-full flex justify-center items-center">
                            <img
                                src={service.imageUrl}
                                alt={service.name}
                                className="w-[50%] mix-blend-multiply aspect-3/2 object-contain"
                            />
                           
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{service.name}</h2>
                            <p className="text-gray-600 mt-2">{service.description.slice(0, 50)}...</p>
                            <Link href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-yellow-400 hover:text-yellow-500 mt-4 inline-block">
                                Read More
                            </Link>
                        </div>
                    </div>

                ))}
            </div>
            <div className="flex justify-center items-center pt-10">
                <Link href={"/services"}>
                    <Button className="text-[#000] hover:bg-black hover:text-[#EAB541] hover:scale-125 transition-all duration-200 bg-[#EAB541] text-2xl font-semibold px-8 py-5 shadow-lg hover:"> View All Services </Button>
                </Link>

            </div>
        </div>
    );
};

export default Ourservice;
