'use client';

import React, { useEffect, useState } from 'react';
type Particle = {
  top: string
  left: string
  delay: string
  duration: string
}

function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
const [particles] = useState<Particle[]>([])

const WHATSAPP_URL = 'https://wa.me/947717505090';


  useEffect(() => {
    setIsVisible(true);
  }, []);

  // const handleWhatsAppClick = () => {
  //   window.open('https://wa.me/94717505090?text=Hi%20VroomVroom%2C%20I%27d%20like%20to%20book%20a%20cab%20for%20my%20holiday%20in%20Sri%20Lanka', '_blank');
  // };

  const handleWhatsAppClick = () => {
  // Google Ads conversion tracking
  if (typeof window !== 'undefined' && typeof window.gtag_report_conversion === 'function') {
    window.gtag_report_conversion(WHATSAPP_URL);
  }

  // Open WhatsApp
  window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
};


  const features = [
    {
      id: 1,
      title: "Expert Tourist Chauffeurs",
      description: "Professional drivers specially trained to serve tourists, ensuring a comfortable and informative journey.",
      icon: "👨‍✈️",
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-br"
    },
    {
      id: 2,
      title: "Local Expertise",
      description: "Drivers who know both popular attractions and hidden gems across Sri Lanka.",
      icon: "🗺️",
      color: "from-green-500 to-emerald-500",
      gradient: "bg-gradient-to-br"
    },
    {
      id: 3,
      title: "Island-Wide Coverage",
      description: "Smooth travel to Galle, Trinco, Dambulla, Sigiriya, Kandy, Nuwara Eliya, Ella, and beyond.",
      icon: "🚗",
      color: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-br"
    },
    {
      id: 4,
      title: "Wildlife Sanctuary Transfers",
      description: "Expert transfers to Yala, Minneriya, Wilpattu, and other wildlife parks with experienced drivers.",
      icon: "🐘",
      color: "from-yellow-500 to-orange-500",
      gradient: "bg-gradient-to-br"
    },
    {
      id: 5,
      title: "Flexible Vehicle Options",
      description: "Perfect vehicles for couples, families, groups, and corporate travel needs.",
      icon: "🚙",
      color: "from-red-500 to-rose-500",
      gradient: "bg-gradient-to-br"
    },
    {
      id: 6,
      title: "Custom Itinerary Design",
      description: "Let us design or refine your travel plans using our years of tourism expertise in Sri Lanka.",
      icon: "📋",
      color: "from-indigo-500 to-violet-500",
      gradient: "bg-gradient-to-br"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-red-500/20 rounded-full animate-pulse"
          style={{
            top: p.top,
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-red-700 animate-gradient-x"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float-slow-reverse"></div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center mt-36">
          {/* Animated Title */}
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block mb-6 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <span className="text-white font-semibold tracking-wider">🚗 PREMIUM TOURIST TRANSPORT</span>
            </div>
            
            <h1 className="text-5xl md:text-5xl lg:text-8xl font-bold mb-6">
              <span className="block bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                Explore Sri Lanka
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-light mt-4 text-white/90">
                In Comfort & Style
              </span>
            </h1>

            <p className="text-xl md:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
                From ancient heritage sites and sacred landmarks to the legendary Ramayana trails, Sri Lanka promises unforgettable memories for every traveler. As you plan your journey, VroomVroom Tourist ensures seamless and reliable transportation throughout your stay.
            </p>
          </div>

          {/* Interactive Action Cards */}
          <div className={`grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {/* WhatsApp Card */}
            <div
  className="group bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 backdrop-blur-sm border border-white/20 shadow-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-3xl"
  onClick={handleWhatsAppClick}
  role="button"
  aria-label="Chat on WhatsApp"
>
  <div className="relative">
    <div className="absolute -top-4 -left-4 w-12 h-12 bg-white/20 rounded-full animate-ping"></div>
    <div className="relative z-10 flex flex-col items-center">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
        <span className="text-3xl">💬</span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">WhatsApp</h3>
      <p className="text-white/90 mb-4">Instant Booking</p>
      <div className="text-white font-mono text-lg font-semibold">
        071 750 5090
      </div>
    </div>
  </div>
</div>


            {/* Call Card */}
            {/* <a 
              href="tel:0701505090"
              className="group bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-8 backdrop-blur-sm border border-white/20 shadow-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-3xl"
            >
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/20 rounded-full animate-ping animation-delay-1000"></div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-3xl">📞</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Call Now</h3>
                  <p className="text-white/90 mb-4">24/7 Available</p>
                  <div className="text-white font-mono text-lg font-semibold">
                    070 150 5090
                  </div>
                </div>
              </div>
            </a> */}

            {/* Email Card */}
            <a 
              href="mailto:hellovroomvroom@outlook.com"
              className="group bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-8 backdrop-blur-sm border border-white/20 shadow-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-3xl"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-3xl">✉️</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-white/90 mb-4">Quick Response</p>
                <div className="text-white text-center text-sm font-medium">
                  hellovroomvroom@outlook.com
                </div>
              </div>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className={`animate-bounce mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col items-center text-white/60">
              <span className="mb-2 text-sm tracking-widest">SCROLL TO EXPLORE</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className={`inline-block mb-4 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="text-red-500 font-bold tracking-wider">WHY CHOOSE US</span>
          </div>
          <h2 className={`text-5xl md:text-6xl font-bold text-gray-900 mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Your Journey,
            <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Our Expertise
            </span>
          </h2>
        </div>

        {/* Interactive Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
    const isActive = activeFeature === feature.id
console.log(isActive)
    return (
            <div
              key={feature.id}
              className={`group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveFeature(feature.id)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 ${feature.gradient} ${feature.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
              
              {/* Icon with Animation */}
              <div className="relative z-10 p-8">
                <div className={`w-20 h-20 ${feature.gradient} ${feature.color} rounded-2xl flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>
                
                {/* Hover Indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-0 translate-x-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
)})}
        </div>

        {/* Stats Section */}
        <div className={`mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {[
            { value: "500+", label: "Happy Tourists" },
            { value: "24/7", label: "Service Available" },
            { value: "50+", label: "Destinations" },
            { value: "100%", label: "Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium tracking-wider">
                {stat.label}
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      \
          

     

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:scale-110 hover:rotate-12"
        >
          <div className="relative">
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping"></div>
            <span className="text-2xl">💬</span>
          </div>
        </button>
      </div>

      

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes float-slow-reverse {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(20px) rotate(-180deg);
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        .animate-float-slow-reverse {
          animation: float-slow-reverse 20s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}

export default Page;