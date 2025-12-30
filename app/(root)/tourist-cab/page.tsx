'use client';

import { useEffect, useState } from 'react';

function Page() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Button appears with fade-in animation after page load
    const appearTimer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => {
      clearTimeout(appearTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/94701505090?text=Hi%20VroomVroom%2C%20I%27d%20like%20to%20book%20a%20cab%20for%20my%20holiday%20in%20Sri%20Lanka', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-500 to-red-600 opacity-95"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 px-4 py-16 text-center max-w-6xl mx-auto">

          {/* Main Content Card */}
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/30 shadow-2xl max-w-3xl mx-auto mb-10 mt-10">
            <div className="mb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                </div>
                <p className="text-2xl font-bold text-white">
                  Trusted Cab Services for Tourists in Sri Lanka
                </p>
              </div>

              
              <div className="bg-white/10 p-4 rounded-2xl mb-6">
                <p className="text-white/90">
                  Explore ancient heritage sites, wildlife sanctuaries, and breathtaking landscapes 
                  with our professional tourist chauffeurs who know Sri Lanka best.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Contact Us Now</h3>
              
              <div className="grid md:grid-cols-1 gap-4 mb-6">
                {/* Phone */}
                {/* WhatsApp Button */}
          <div className={`
            transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <button
              onClick={handleWhatsAppClick}
              className="group relative bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-5 px-10 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 animate-float"
            >
              <div className="flex items-center justify-center gap-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-current"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="text-lg">Book on WhatsApp Now</span>
              </div>
              
              <span className="
                absolute right-14 top-1/2 -translate-y-1/2
                bg-gray-800 text-white text-sm font-medium px-3 py-2 rounded
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                whitespace-nowrap shadow-md z-50
              ">
                Quick response & instant booking
              </span>
            </button>
            
            <p className="text-white/80 mt-4 text-sm">
              Get instant quotes, custom itineraries, and expert travel advice
            </p>
          </div>

                
              </div>

              {/* Availability */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-medium">Available 24/7</span>
              </div>
            </div>
          </div>

          
        </div>
      </div>

     
    </div>
  );
}

export default Page;