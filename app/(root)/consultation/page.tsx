'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import cover1 from '../../../public/cover1.jpg';

function Guide() {
  const router = useRouter();
    //  const [showChat, setShowChat] = useState(false); // State for chat visibility
const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);

  const [showWelcome, setShowWelcome] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
  
    
    const welcomeRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      // Button appears with fade-in animation after page load
      const appearTimer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
  
      // Loading state for the welcome message
      const loadingTimer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
  
      // Hide welcome message after 5 seconds
      const hideTimer = setTimeout(() => {
        setShowWelcome(false);
      }, 5000);
  
      // Pulse animation stops after 3 pulses
      const pulseTimer = setTimeout(() => {
        setIsPulsing(false);
      }, 3000);
  
      return () => {
        clearTimeout(appearTimer);
        clearTimeout(loadingTimer);
        clearTimeout(hideTimer);
        clearTimeout(pulseTimer);
      };
    }, []);

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
                className="bg-white rounded-xl shadow-md border border-gray-00 p-4 sm:p-6 md:p-8 cursor-pointer hover:shadow-lg transition-shadow"
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
        {/* <div className="fixed bottom-6 right-6 z-50">
       {showChat ? (
  <div className="bg-white shadow-lg rounded-lg w-80 h-96 mb-4 flex flex-col">
    <div className="bg-red-600 text-white p-3 rounded-t-lg flex justify-between">
      <h3 className="font-bold">Live Chat</h3>
      <button 
        onClick={() => setShowChat(false)}
        className="text-white hover:text-gray-200"
      >
        ✕
      </button>
    </div>
    <div className="flex-1 p-4 overflow-y-auto flex flex-col items-center justify-center space-y-4">
      <p className="text-gray-700 text-center">How can we help you?</p>
      <button 
  onClick={() => {
    window.open('https://wa.me/94740662095', '_blank');
  }}
  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md w-3/4 text-center"
>
  Hire
</button>

      <button 
        onClick={() => {
          // You can implement consultation chat logic here
              window.open('https://wa.me/94740662095', '_blank');
        }}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-3/4 text-center"
      >
        Consultation
      </button>
    </div>
  </div>
) : null}

        
        <button
          onClick={() => setShowChat(!showChat)}
          className="bg-red-600 text-white rounded-full p-4 shadow-lg hover:bg-red-700 transition-all"
          aria-label="Open chat"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
            />
          </svg>
        </button>
      </div> */}

 <div className="overflow-hidden">
      
    
      
      {/* Welcome message */}
      {showWelcome && (
        <div 
          ref={welcomeRef}
          className="fixed bottom-24 right-6 z-50 bg-white rounded-lg shadow-xl p-4 max-w-xs transition-all duration-500"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <div className="flex items-start">
            <div className="mr-3">
              {isLoading ? (
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-500"></div>
              ) : (
                <div className="bg-green-100 p-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            <div>
              <p className="font-medium text-gray-800">
                {isLoading ? 'Setting up WhatsApp booking...' : 'Click here to book through WhatsApp'}
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 right-6 transform translate-y-4 -z-10">
            <div className="w-4 h-4 bg-white rotate-45"></div>
          </div>
        </div>
      )}
      
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.open('https://wa.me/94740343095?text=Welcome', '_blank')}
          aria-label="Chat on WhatsApp"
          className={`
            bg-[#25D366] text-white rounded-full p-4 shadow-xl
            transition-all duration-700 ease-out
            hover:bg-[#128C7E] hover:scale-105 hover:shadow-2xl
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            ${isPulsing ? 'animate-pulse-slow' : 'animate-float'}
          `}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-current"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </button>
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