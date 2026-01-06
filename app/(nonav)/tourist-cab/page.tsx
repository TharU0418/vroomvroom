'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

type Particle = {
  left: string
  top: string
  animationDelay: string
  animationDuration: string
}
export default function Home() {

    const [particles, setParticles] = useState<Particle[]>([])
useEffect(() => {
    const generated = Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${3 + Math.random() * 4}s`,
    }))

    setParticles(generated)
  }, [])

  const images = [
  { src: "/1433.jpg", title: "Premium Experience", description: "Luxury tours & unforgettable memories" },
  { src: "/1434.jpg", title: "Adventure Trips", description: "Thrilling journeys await" },
  { src: "/1435.jpg", title: "Relaxing Retreats", description: "Peaceful escapes for everyone" },
];

  const [currentIndex, setCurrentIndex] = useState(0);
// Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // 3000ms = 3s
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);


  return (
    <main className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
{/* HERO SECTION */}
<section className="relative min-h-screen overflow-hidden px-4 md:px-6 py-20 md:py-28 flex items-center">

  {/* ANIMATED GRADIENT BACKGROUND */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-600/20 via-transparent to-transparent animate-pulse-slow"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-blue-900/30 to-transparent"></div>
      
      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, #60a5fa 1px, transparent 1px),
                            linear-gradient(to bottom, #60a5fa 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      ></div>
    </div>
  </div>

  {/* FLOATING ORBS */}
  <div className="absolute inset-0 overflow-hidden">
    {/* MAIN ORB */}
    <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/5 to-blue-600/10 rounded-full blur-3xl animate-float-slow"></div>
    <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-3xl animate-float-medium"></div>
    <div className="absolute top-40 right-1/4 w-[300px] h-[300px] bg-yellow-400/3 rounded-full blur-3xl animate-float-fast"></div>

    {/* ANIMATED PARTICLES */}
    {particles.map((p, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-cyan-300/40 to-blue-300/40 rounded-full"
          style={{
            left: p.left,
            top: p.top,
            animation: `particle-float ${p.animationDuration} ease-in-out infinite ${p.animationDelay}`,
          }}
        />
      ))}

    {/* CONNECTING LINES */}
    <div className="absolute inset-0">
      <svg className="w-full h-full opacity-20">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path
          d="M10,100 Q300,50 600,200"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-dash"
        />
        <path
          d="M800,50 Q600,300 400,400"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-dash-reverse"
        />
      </svg>
    </div>
  </div>

  {/* MAIN CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto w-full">

    {/* GLASS MORPHISM CONTAINER */}
    <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 p-1 rounded-3xl border border-white/20 shadow-2xl shadow-blue-900/40 overflow-hidden group">
      
      {/* ANIMATED BORDER GLOW */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-1000 animate-border-spin"></div>
      
      <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
        
        {/* DECORATIVE ELEMENTS */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-bl-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-yellow-400/10 to-transparent rounded-tr-3xl"></div>

        {/* CONTENT GRID */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT COLUMN */}
          <div className="space-y-8">
            
            {/* GLOWING BADGE */}
            <div className="inline-block">
              <div className="relative group/badge">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-cyan-400 rounded-full blur opacity-30 group-hover/badge:opacity-70 transition duration-500"></div>
                <div className="relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
                  </span>
                  <span className="text-cyan-100 text-sm font-semibold tracking-wider uppercase">
                    Explore Sri Lanka - Book Your Cab Today!
                  </span>
                </div>
              </div>
            </div>

            {/* MAIN HEADING WITH GLOW */}
            <div className="space-y-4 text-center">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="relative inline-block">
                  <span className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 blur-2xl opacity-30"></span>
                  <span className="relative bg-gradient-to-r from-cyan-300 via-white to-blue-200 bg-clip-text text-transparent animate-gradient">
                    VroomVroom
                  </span>
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-gradient-reverse">
                  Tourist
                </span>
              </h1>
              
              {/* ANIMATED UNDERLINE */}
              <div className="flex items-center gap-4 pt-4">
                <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
                <div className="w-10 h-1.5 bg-cyan-300/60 rounded-full"></div>
                <div className="w-5 h-1.5 bg-blue-300/40 rounded-full"></div>
              </div>
            </div>

            {/* CONTENT CARDS */}
            <div className="space-y-6">
              <div className="group/card relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur opacity-0 group-hover/card:opacity-100 transition duration-500"></div>
                <div className="relative p-6 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10 backdrop-blur-sm">
                  <p className="text-gray-200 leading-relaxed text-lg">
                    Choosing Sri Lanka for your holiday, corporate event, or annual
                    conference is always a great decision. Sri Lanka is a stunning
                    island nation known for its culture, landscapes, and hospitality.
                  </p>
                </div>
              </div>

              <div className="relative pl-8 group/quote">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-400 to-cyan-400 rounded-full"></div>
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-300 blur-sm opacity-50 rounded-full"></div>
                <p className="text-cyan-100 italic text-lg pl-6 py-4">
                  "From pristine beaches to abundant wildlife and breathtaking
                  natural beauty."
                </p>
              </div>
            </div>

            {/* INTERACTIVE BUTTONS */}
            <div className="pt-4 flex flex-col sm:flex-row gap-5">
              
              {/* WHATSAPP BUTTON WITH HOVER EFFECT */}
              <a
                href="https://wa.me/94717505090"
                className="group/btn relative overflow-hidden"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full blur opacity-30 group-hover/btn:opacity-100 transition duration-500"></div>
                <div className="relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full text-lg font-semibold text-white flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10">WhatsApp Now</span>
                  <svg className="w-5 h-5 animate-bounce-horizontal" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.05 4.91A9.816 9.816 0 0012.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 012.38 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"/>
                  </svg>
                </div>
              </a>

              {/* EMAIL BUTTON WITH HOVER EFFECT */}
              <a
                href="mailto:hellovroomvroom@outlook.com"
                className="group/btn relative overflow-hidden"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full blur opacity-30 group-hover/btn:opacity-100 transition duration-500"></div>
                <div className="relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full text-lg font-semibold text-gray-900 flex items-center justify-center gap-3 shadow-xl shadow-yellow-500/20 hover:shadow-yellow-500/40 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10">Email Us</span>
                  <svg className="w-5 h-5 animate-bounce-horizontal" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN - IMAGE WITH EFFECTS */}
          <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-3xl border-2 border-white/20 shadow-2xl">
      {/* Image */}
      <div className="relative">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          className="w-full h-auto rounded-3xl transform transition-transform duration-700"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-600/10 z-10"></div>

        {/* Text Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 rounded-b-3xl">
          <div className="text-white space-y-2">
            <h3 className="text-xl font-bold">{images[currentIndex].title}</h3>
            <p className="text-sm text-gray-300">{images[currentIndex].description}</p>
          </div>
        </div>
      </div>

      
    </div>
    </div>
    </div></div>
              {/* FLOATING TAGS */}
              {/* <div className="absolute -top-4 -right-4">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float-slow">
                  ✨ Premium Service
                </div>
              </div> */}
         
      
    
  </div>

  {/* SCROLL INDICATOR */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
    <div className="flex flex-col items-center gap-2">
      <span className="text-cyan-200/70 text-sm font-medium tracking-wider animate-pulse">Explore More</span>
      <div className="relative">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 animate-scroll"></div>
        </div>
        <div className="absolute top-0 left-0 w-6 h-10 border-2 border-cyan-400/30 rounded-full animate-ping-slow"></div>
      </div>
    </div>
  </div>

  {/* ANIMATION STYLES */}
  <style jsx>{`
    @keyframes float-slow {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-30px) rotate(180deg); }
    }
    
    @keyframes float-medium {
      0%, 100% { transform: translateY(0) translateX(0); }
      50% { transform: translateY(-20px) translateX(20px); }
    }
    
    @keyframes float-fast {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-15px) scale(1.05); }
    }
    
    @keyframes particle-float {
      0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.4; }
      33% { transform: translate(20px, -30px) rotate(120deg); opacity: 0.7; }
      66% { transform: translate(-15px, 20px) rotate(240deg); opacity: 0.4; }
    }
    
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    @keyframes gradient-reverse {
      0% { background-position: 100% 50%; }
      50% { background-position: 0% 50%; }
      100% { background-position: 100% 50%; }
    }
    
    @keyframes scroll {
      0% { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(15px); opacity: 0; }
    }
    
    @keyframes border-spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @keyframes dash {
      to { stroke-dashoffset: 1000; }
    }
    
    @keyframes dash-reverse {
      to { stroke-dashoffset: -1000; }
    }
    
    @keyframes bounce-horizontal {
      0%, 100% { transform: translateX(0); }
      50% { transform: translateX(5px); }
    }
    
    .animate-float-slow {
      animation: float-slow 20s ease-in-out infinite;
    }
    
    .animate-float-medium {
      animation: float-medium 15s ease-in-out infinite;
    }
    
    .animate-float-fast {
      animation: float-fast 10s ease-in-out infinite;
    }
    
    .animate-gradient {
      background-size: 200% 200%;
      animation: gradient 3s ease infinite;
    }
    
    .animate-gradient-reverse {
      background-size: 200% 200%;
      animation: gradient-reverse 3s ease infinite;
    }
    
    .animate-scroll {
      animation: scroll 2s ease-in-out infinite;
    }
    
    .animate-border-spin {
      animation: border-spin 3s linear infinite;
    }
    
    .animate-dash {
      stroke-dasharray: 10;
      animation: dash 30s linear infinite;
    }
    
    .animate-dash-reverse {
      stroke-dasharray: 10;
      animation: dash-reverse 25s linear infinite;
    }
    
    .animate-bounce-horizontal {
      animation: bounce-horizontal 2s ease-in-out infinite;
    }
    
    .animate-pulse-slow {
      animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    
    .animate-ping-slow {
      animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
    }
  `}</style>
</section>


      {/* EXPERIENCE SECTION */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700"></div>
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Discover Sri Lanka <span className="text-yellow-300">With Comfort</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Premium transportation services for an unforgettable journey</p>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Ancient Heritage",
                img: "https://static.toiimg.com/photo/112804069.cms",
                text: "Explore ancient heritage sites and sacred landmarks filled with centuries-old traditions.",
                icon: "🏛️"
              },
              {
                title: "Hill Country",
                img: "https://www.travelmapsrilanka.com/destinations/destinationimages/the-allure-of-pidurangala-rock.webp",
                text: "Journey through misty hills, tea plantations, and cool mountain air.",
                icon: "⛰️"
              },
              {
                title: "Wildlife & Beaches",
                img: "https://mediawtravel.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2025/01/13224913/304441-Tangalle-beach-in-Sri-Lanka-image-by-Marius-Dobilas-Shutterstock.jpg",
                text: "From golden beaches to rich wildlife, Sri Lanka offers unforgettable natural beauty.",
                icon: "🦁"
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:-translate-y-4 hover:scale-[1.02]"
              >
                <div className="absolute inset-0">
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40"></div>
                </div>
                
                <div className="relative h-80 p-6 flex flex-col justify-end">
                  <div className="absolute top-6 right-6 text-4xl opacity-80 transform group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-0.5 bg-yellow-400"></div>
                      <span className="text-yellow-300 text-sm font-semibold">EXPERIENCE</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
                    <p className="text-gray-200 mb-4">{card.text}</p>
                    
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      {/* <button className="text-yellow-300 text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                        Learn more
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our <span className="text-yellow-300">Transport Solutions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive transportation services tailored to your needs</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                { text: "Airport Pickup & Drop", icon: "✈️" },
                { text: "City-to-City Transfers", icon: "🚗" },
                { text: "Full Round Tours", icon: "🔄" },
                { text: "Vehicle at Disposal", icon: "⏱️" },
                { text: "Corporate & Conference Transport", icon: "🏢" },
              ].map((service, i) => (
                <div 
                  key={i}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 border border-gray-700 hover:border-yellow-500/30 hover:shadow-lg hover:shadow-yellow-500/10"
                >
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{service.text}</h3>
                    <p className="text-gray-400 text-sm mt-1">Professional service with luxury vehicles</p>
                  </div>
                  <div className="ml-auto text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-700 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-300">Why Choose Us?</span>
                  <div className="w-12 h-1 bg-blue-400 rounded-full"></div>
                </h3>
                
                <div className="space-y-4 text-gray-300">
                  <p className="leading-relaxed">
                    From ancient heritage sites and sacred landmarks to the legendary
                    Ramayana trails, Sri Lanka promises unforgettable memories for
                    every traveler.
                  </p>
                  
                  <div className="p-4 bg-gray-800/50 rounded-xl border-l-4 border-blue-400">
                    <p className="font-semibold text-white">Your Journey, Our Priority</p>
                    <p className="text-sm mt-2">
                      As you plan your journey, <strong className="text-blue-300">VroomVroom Tourist</strong>
                      ensures seamless and reliable transportation throughout your stay,
                      perfectly tailored to your needs.
                    </p>
                  </div>
                  
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      Professional drivers with local expertise
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      Modern, comfortable vehicles
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      24/7 customer support
                    </li>
                  </ul>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <a
                    href="https://wa.me/94717505090"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    Book Your Ride Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </main>
  );
}