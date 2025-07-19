'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import cover1 from '../../../public/cover1.jpg';

function Guide() {
  const router = useRouter();
    
  return (
    <div className="min-h-screen bg-white text-black mt-20">
      {/* Full-width banner - optimized for mobile */}

      {/* Hero Section */}
      <div className="relative h-[70vh] bg-black text-white">
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
<div style={{ backgroundImage: `url(${cover1})` }} className="absolute inset-0 bg-cover bg-center z-0"></div>
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6"><span className="text-red-600">Consultation Services</span></h1>
          <p className="text-xl max-w-3xl text-gray-300 mb-8">
            Expert guidance for all your vehicle needs - from selection to registration
          </p>
          {/* <div className="flex space-x-4">
            <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition">
              Our Services
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </div> */}
        </div>
      </div>



      {/* Main content container */}
      <div className="px-2 sm:px-4 py-4"> 
        <div className="max-w-6xl mx-auto">
          {/* Page title */}
          {/* <h1 className="text-2xl md:text-3xl font-bold text-black mb-4 md:mb-8 text-center">Consultations</h1> */}

          {/* Consultation Cards - improved mobile layout */}
          <div className="space-y-6">
            {consultationData.map((service) => (
              <div 
                key={service.id}
                onClick={() => router.push(service.path)}
                className="bg-white rounded-xl shadow-md border border-gray-200 p-4 sm:p-6 md:p-8 cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Image - full width on mobile, half on desktop */}
                  <div className="md:w-5/12">
                    <div className="relative h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden">
                      <Image 
                        src={service.image}
                        fill
                        alt={service.title}
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Content - full width on mobile, half on desktop */}
                  <div className="md:w-7/12">
                    <h4 className="text-xl sm:text-2xl font-bold text-black mb-3">{service.title}</h4>
                    <p className="text-gray-700 text-sm sm:text-base">
                      {service.description}
                    </p>
                    <button
                      type="button"
                      className="w-full sm:w-40 mt-4 py-2 sm:py-3 px-4 bg-red-800 text-white rounded-lg hover:bg-red-900 transition-all text-center"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Data for consultations
const consultationData = [
  {
    id: 1,
    title: "Full Consultation",
    path: "/consultation/full-consultation",
    image: "/consultant1.jpg",
    description: "Complete vehicle consultation program that helps you through every step—from finding the right car to registration, leasing, and insurance. Backed by a highly experienced team."
  },
  {
    id: 2,
    title: "Insurance Consultation",
    path: "/consultation/insurance-consultation",
    image: "/consultant2.jpg",
    description: "Expert guidance to help you choose the right insurance plan for your vehicle. We compare options, explain coverage, and ensure you get the best protection at competitive rates."
  },
  {
    id: 3,
    title: "Vehicle Registration Consultation",
    path: "/consultation/registration-consultation",
    image: "/consultant3.jpg",
    description: "Expert help with the entire registration process. From documentation to legal compliance, our team ensures your vehicle is properly registered without hassle or delays."
  },
  {
    id: 4,
    title: "Leasing Consultation",
    path: "/consultation/leasing-consultation",
    image: "/consultant4.jpg",
    description: "Helps you find the best vehicle lease options tailored to your needs and budget. Our experienced team compares plans and explains terms for transparent leasing solutions."
  }
];

export default Guide;