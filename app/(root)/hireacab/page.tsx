'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function HireaCab() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  
  const welcomeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const appearTimer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const hideTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 5000);

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
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-black">
      {/* Enhanced Hero Section */}
      <div className="relative h-[100vh] bg-red-600 to-black overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-red-700 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          {/* Animated Title */}
          <div className="mb-2 transform transition-all duration-1000 hover:scale-105">
                      <h1 className="text-4xl md:text-6xl font-bold mb-4 mt-2"><span className="text-white">Hire a Cab</span></h1>

          </div>

          {/* Enhanced Content Card */}
          <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-8 max-w-4xl border border-white/10 shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
            <p className="text-m  text-white mb-2 leading-relaxed font-light">
              When you need a professional cab service provider in Sri Lanka, VroomVroom Rolling is your trusted partner.
            </p>

            <p className="text-m text-white mb-2 leading-relaxed font-light mb-4">
              Speak to us, and we will arrange a clean, comfortable, and value-for-money chauffeur-driven cab tailored to any requirement—be it personal travel, 
              corporate appointments, business meetings, or everyday mobility.
              With VroomVroom Rolling, booking a cab is always fast, simple, and hassle-free.
              Our reliable chauffeurs, well-maintained vehicles, and seamless service ensure that your journey is smooth from start to finish.
              Choose VroomVroom Rolling where professionalism, comfort, and dependability come standard.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-center mb-2 mt-2">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-white font-medium">Wedding Car Services</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-white font-medium">Corporate Trips </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-white font-medium">Airport Pickup & Drop</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-white font-medium"> Family Trips </span>
                </div>
                
              </div>
              
            </div>

            {/* Call to Action */}
            <div className="bg-red-600/20 rounded-2xl p-6 border border-red-500/30 mt-6">
              <p className="text-white text-lg font-semibold mb-3">
                📞 Call Now: <span className="text-2xl font-black bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">0701505090 / 0701780780</span>
              </p>
              <p className="text-gray-300">
                Book your cab in minutes! Enjoy a smooth, hassle-free ride every time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scrolling Cards Section */}
      <div className="py-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden">
            {/* Gradient Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-100 to-transparent z-10"></div>
            
            <div className="flex space-x-6 animate-scroll hover:pause">
              {[
                { img: "/hire1.png", title: "Wedding Car", desc: "Professional hourly driver", badge: "Popular" },
                { img: "/hire2.jpeg", title: "Cab for Personal Use", desc: "Multi-day hire available", badge: "Flexible" },
                { img: "/hirecab7.png", title: "Cab for Corporate Meeting", desc: "Safe and responsible travel", badge: "Popular" },
                { img: "/hirecab6.png", title: "Family Trip", desc: "Safe and responsible travel", badge: "Popular" },
                { img: "/hirecab5.png", title: "Corporate  Trip", desc: "Long-term driver contracts", badge: "Premium" },
                { img: "/hire1.png", title: "Air Port pickup/drop", desc: "Premium comfort experience", badge: "Luxury" },
                { img: "/hire2.jpeg", title: "Cab for events", desc: "Explore the city in style", badge: "Explore" }
              ].map((service, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-80 group cursor-pointer transform hover:scale-105 transition-all duration-500"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl hover:border-red-500/20 transition-all duration-300">
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={service.img}
                        fill
                        alt={service.title}
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      
                      {/* Badge */}
                      {/* <div className="absolute top-4 right-4">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                          {service.badge}
                        </span>
                      </div>
                       */}
                      {/* Title */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white text-2xl font-bold mb-1">{service.title}</h3>
                        <p className="text-gray-200 text-sm">{service.desc}</p>
                      </div>
                    </div>
                    
                    {/* Hover Action */}
                    <div className="p-4 bg-gradient-to-r from-white to-gray-50">
                      <div className="flex items-center justify-between">
                        {/* <span className="text-gray-600 text-sm">Book now</span>
                        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <span className="text-white font-bold">→</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced WhatsApp Components */}
      {showWelcome && (
        <div 
          ref={welcomeRef}
          className="fixed bottom-24 right-6 z-50 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-2xl p-4 max-w-xs border border-red-500/30 backdrop-blur-sm"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)'
          }}
        >
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              {isLoading ? (
                <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"></div>
              ) : (
                <div className="bg-white/20 p-2 rounded-full">
                  <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                </div>
              )}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-white text-sm">
                {isLoading ? 'Setting up WhatsApp booking...' : 'Ready to book your ride?'}
              </p>
              <p className="text-red-100 text-xs mt-1">
                Click the button below to chat with us instantly!
              </p>
            </div>
          </div>
          {/* Speech bubble tail */}
          <div className="absolute bottom-0 right-6 transform translate-y-3 rotate-45 w-4 h-4 bg-red-600"></div>
        </div>
      )}
      
      {/* Enhanced WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 group">
        <button
          onClick={() => window.open('https://wa.me/701780780?text=Welcome', '_blank')}
          aria-label="Chat on WhatsApp"
          className={`
            relative bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-2xl p-5 shadow-2xl
            transition-all duration-700 ease-out
            hover:scale-110 hover:shadow-3xl hover:rotate-12
            focus:outline-none focus:ring-4 focus:ring-green-500/50
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            ${isPulsing ? 'animate-pulse-slow' : 'animate-float'}
            before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity
          `}
        >
          <div className="relative">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24"
              className="h-7 w-7 fill-current drop-shadow-lg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          
          {/* Enhanced Tooltip - Fixed string issue */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-gray-900 to-black text-white text-sm font-semibold px-4 py-3 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-2 whitespace-nowrap shadow-2xl border border-gray-700 before:absolute before:left-full before:top-1/2 before:-translate-y-1/2 before:border-8 before:border-transparent before:border-l-black">
            Hire Driver through WhatsApp
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent rounded-xl"></div>
          </div>
        </button>
      </div>

      {/* Add custom animations to tailwind config */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}