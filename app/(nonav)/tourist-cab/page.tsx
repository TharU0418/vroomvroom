"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomePage() {

  const images = ["/1433.jpg", "/1434.jpg", "/1435.jpg"];
const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, 4000); // change every 4 seconds

  return () => clearInterval(interval);
}, []);


  return (
    <main className="min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-red-700 flex flex-col items-center px-4 py-12 md:py-16 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>
      
      {/* Title with Gradient */}
      <div className="relative z-10 text-center mb-8">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-white to-red-300 animate-gradient">
            Vroom Vroom Tourist
          </span>
        </h1>
        <div className="w-48 h-1 bg-gradient-to-r from-yellow-400 to-red-400 mx-auto rounded-full mb-2"></div>
        {/* <p className="text-white/80 text-lg font-medium">Premium Cab Services Across Sri Lanka</p> */}
      </div>

      {/* CTA Button with Hover Effects */}
      <button className="relative z-10 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 text-black font-bold text-lg px-10 py-4 rounded-full shadow-2xl mb-10 transform transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/50 hover:shadow-xl active:scale-95 group overflow-hidden animate-bounce-slow">
        <span className="relative z-20">EXPLORE SRI LANKA – RESERVE YOUR CAB EARLY</span>
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full animate-ping opacity-75"></div>
      </button>

      {/* Text Box with Modern Design */}
      <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 max-w-4xl rounded-2xl p-8 text-center mb-12 transform transition-all duration-500 hover:bg-white/15 hover:scale-[1.02]">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-red-400 text-black font-bold px-6 py-1 rounded-full">
          ✨ Why Choose Us?
        </div>
        {/* <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-white font-bold text-lg md:text-xl">
          <span className="flex items-center gap-2"><div className="w-2 h-2 bg-yellow-400 rounded-full"></div>24/7 Service</span>
          <span className="flex items-center gap-2"><div className="w-2 h-2 bg-cyan-400 rounded-full"></div>Luxury Fleet</span>
          <span className="flex items-center gap-2"><div className="w-2 h-2 bg-green-400 rounded-full"></div>Best Rates</span>
          <span className="flex items-center gap-2"><div className="w-2 h-2 bg-purple-400 rounded-full"></div>English Speaking</span>
        </div> */}
        <p className="mt-6 text-white/90 text-base md:text-lg leading-relaxed">
          From ancient heritage sites and sacred landmarks to the legendary Ramayana trails, Sri Lanka promises unforgettable memories for every traveler. As you plan your journey, VroomVroom Tourist ensures seamless and reliable transportation throughout your stay.
        </p>
      </div>

      {/* Image Card with Enhanced Effects */}
      <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl max-w-5xl w-full transform transition-all duration-700 hover:scale-[1.01] group">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
        
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <Image
    src={images[currentIndex]}
    alt="Luxury cab service in Sri Lanka"
    width={1400}
    height={800}
    className="object-cover w-full h-[500px] md:h-[600px] transition-opacity duration-1000"
    priority
  />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          
          {/* Floating Badge */}
          {/* <div className="absolute top-6 right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-extrabold px-5 py-2 rounded-full shadow-xl transform rotate-3 animate-float">
            🚗 Book Now & Get 15% Off!
          </div> */}
          
          {/* Bottom Info Card */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between">
              <div className="text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Premium Tourism Experience</h3>
                {/* <p className="text-white/80">Airport Transfers • City Tours • Long Distance • Daily Rentals</p> */}
              </div>
              <a
  href="https://wa.me/94717505090?text=Hello%20VroomVroom%20Tourist!%20I%20would%20like%20to%20book%20a%20cab.%20Please%20share%20details."
  target="_blank"
onClick={() =>
    gtag_report_conversion("https://wa.me/94717505090")
  }
   // class="whatsapp-btn"
  rel="noopener noreferrer"
  className="mt-4 md:mt-0 bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
>
  <span>Book Now</span>
  <span className="text-xl">→</span>
</a>

            </div>
          </div>
        </div>
      </div>

      {/* Floating Icons */}
<div className="fixed bottom-10 right-10 flex flex-col gap-4 z-20">
  
  {/* WhatsApp */}
  <a
    href="https://wa.me/94717505090"
    target="_blank"
onClick={() =>
    gtag_report_conversion("https://wa.me/94717505090")
  }
      rel="noopener noreferrer"
    className="bg-green-500 text-white p-3 rounded-full shadow-xl cursor-pointer hover:scale-110 transition-transform duration-300 animate-bounce"
    aria-label="Chat on WhatsApp"
  >
    <span className="text-2xl">💬</span>
  </a>

  {/* Email */}
  <a
    href="mailto:hellovroomvroom@outlook.com"
    className="bg-blue-500 text-white p-3 rounded-full shadow-xl cursor-pointer hover:scale-110 transition-transform duration-300 animate-bounce delay-100"
    aria-label="Send Email"
  >
    <span className="text-2xl">📧</span>
  </a>

</div>


    </main>
  );
}