'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import cover1 from '../../../public/cover1.jpg';

export default function Hire() {

  const router = useRouter();

  return (
    <div className="min-h-screen bg-white text-black mt-20">
      {/* Full-width banner - optimized for mobile */}

       {/* Hero Section */}
      <div className="relative h-[70vh] bg-black text-white">
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
<div style={{ backgroundImage: `url(${cover1})` }} className="absolute inset-0 bg-cover bg-center z-0"></div>
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6"><span className="text-red-600">Hire a Driver</span></h1>
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

    <div className="flex items-center justify-center bg-white p-4">
      
      <div className="max-w-6xl w-full mx-4 p-6">
        
        {/* <h1 className="text-4xl font-bold text-black mb-8 text-center">Hire a Driver</h1> */}
      
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 justify-center">
          {/* Card 1 */}
          <div onClick={() => router.push(`/hire/one-time-drive`)} className="glass-container bg-white bg-opacity-40 rounded-xl p-2 h-full cursor-pointer hover:scale-105 transition-transform">
            <div className="relative h-64 rounded-lg overflow-hidden">
             <Image 
  src="/hire1.jpg"
 fill
  alt="One time driver booking image"
  className="w-full h-full object-cover" 
/>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white text-xl font-bold">One Time Booking</h3>
                <p className="text-gray-200 font-small">Hire a professional driver by the hour for same-day use.</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div onClick={() => router.push(`/hire/full-day-driver`)} className="glass-container bg-white bg-opacity-40 rounded-xl p-2 h-full cursor-pointer hover:scale-105 transition-transform">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image 
src="/hire2.jpg"
  fill
  alt="Multi-day driver hire image"
  className="w-full h-full object-cover" 
/>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white text-xl font-bold">Multi-Day Hire</h3>
                <p className="text-gray-200 font-small">Book a dedicated driver for several days or even weeks—perfect for short-term travel or business needs.</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div onClick={() => router.push(`/hire/drink-drive`)} className="glass-container bg-white bg-opacity-40 rounded-xl p-2 h-full cursor-pointer hover:scale-105 transition-transform">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image 
 src="/hire3.jpg"
  fill
  alt="Drink and drive safe return service image"
  className="w-full h-full object-cover" 
/>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white text-xl font-bold">Drink and Drive</h3>
                <p className="text-gray-200 font-small">Offers a safe and responsible way to get home—our driver will drive your vehicle when you’ve been drinking.</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div onClick={() => router.push(`/hire/long-term--driver`)} className="glass-container bg-white bg-opacity-40 rounded-xl p-2 h-full cursor-pointer hover:scale-105 transition-transform">
            <div className="relative h-64 rounded-lg overflow-hidden">
             <Image 
 src="/hire4.jpg"
  fill
  alt="Long term driver contract image"
  className="w-full h-full object-cover" 
/>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white text-xl font-bold"> Long Term Driver</h3>
                <p className="text-gray-200 font-small">Allows you to hire a dedicated driver on a monthly or yearly basis through a formal agreement.</p>
              </div>
            </div>
          </div>
        </div>
        {/* New Hiring Section */}
        <div className="glass-container bg-gradient-to-r from-red-600 to-red-800 rounded-xl p-6 mt-12 border border-red-300 border-opacity-50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">We are Hiring Drivers!</h2>
              <p className="text-blue-100 max-w-2xl">
                Join our team of professional drivers. Earn competitive pay with flexible hours,
                comprehensive training, and the freedom to set your own schedule. No experience required!
              </p>
            </div>
            <button
              onClick={() => router.push('/careers')}
              className="bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-red-100 transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Apply Now
            </button>
          </div>
        </div>
    
      </div>
      </div>
       <div className="fixed bottom-6 right-6 z-50">
      
        
        <button
onClick={() => {
    window.open('https://wa.me/94740662095', '_blank');

  }}          className="bg-red-600 text-white rounded-full p-4 shadow-lg hover:bg-red-700 transition-all"
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
      </div>
    </div>
  );
}
