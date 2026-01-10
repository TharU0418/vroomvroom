'use client';
import Image from "next/image";
import { motion } from "framer-motion";
//import Link from "next/link";
//import { text } from "stream/consumers";
import { useEffect, useState } from "react";
//import { CheckCircle, Shield, Navigation, Clock, Car, MapPin } from "lucide-react";

export default function Hero() {

  const images = [
  "https://www.barcelo.com/guia-turismo/wp-content/uploads/2024/03/que-visitar-en-sri-lanka.jpg",
  "https://images.unsplash.com/photo-1612862862126-865765df2ded?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1533484482814-3fe2d922be89?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1544451822-38e32b887c08?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1593417697535-005222b1278c?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <motion.div
          key={index}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <Image
              src={images[index]}
            alt="Sri Lanka Tourist Cab"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
          />
        </motion.div>
        
        {/* Animated Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-blue-900/10"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              initial={{ y: 0, opacity: 0 }}
              animate={{ 
                y: [-20, 20, -20],
                opacity: [0, 0.5, 0],
                x: Math.sin(i) * 50
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              style={{
                left: `${(i + 1) * 12}%`,
                top: `${30 + (i % 3) * 20}%`
              }}
            />
          ))}
        </div>
      </div>

      {/* Top Navigation Bar */}
      <nav className="absolute top-0 left-0 w-full z-50 py-6 px-6 lg:px-12">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            
            <div className="relative">
              {/* <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div> */}
              {/* <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-black"></div> */}
            {/* </div> */}
            {/* <div> */}
            {/* <Link href="/" className="flex items-center space-x-2 mb-2">
              <Image 
                src="/logo.png" 
                alt="Luxury Car"
                width={100} // replace with your actual image width
                height={64} // replace with your actual image height
                className="object-contain"
              />
            </Link> */}
              {/* <h1 className="text-xl font-bold text-white">VroomVroom</h1> */}
              {/* <p className="text-xs text-gray-300">Tourist Services</p> */}
            </div>
          </motion.div>

          
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-30 pt-32 lg:pt-40 px-6 lg:px-12">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            {/* Tagline */}
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
              />
              <span className="text-sm font-semibold text-white/90 uppercase tracking-widest">
                Explore Sri Lanka - Reserve Your Ride Today
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Vroom Vroom
              </span>
              <span className="block text-red-400 drop-shadow-lg">Tourist</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-xl">
              From ancient heritage sites and sacred landmarks to the legendary Ramayana trails, 
              Sri Lanka promises unforgettable memories for every traveler. As you plan your journey, 
              VroomVroom Tourist ensures seamless and reliable transportation throughout your stay.
            </p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-6 mb-10"
            >
              {[
                { value: "20+", label: "Licensed Chauffeurs" },
                { value: "FIXED", label: " Transportation Price" },
                { value: "24/7", label: "WhatsApp Support" },
                { value: "100%", label: "Safety Record" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      

      

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-white/50 animate-pulse">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-gradient-to-b from-red-500 to-orange-500 rounded-full mt-2"></div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      {/* <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/4 left-10 hidden xl:block"
      >
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/10 max-w-xs">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">Live Availability</span>
          </div>
          <p className="text-gray-300 text-sm">15 cars available in Colombo</p>
        </div>
      </motion.div> */}

      {/* <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/4 right-1/4 hidden xl:block"
      >
        <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-4 border border-red-500/30 max-w-xs">
          <p className="text-white text-sm">🎉 Special offer: 20% off for 7+ day bookings</p>
        </div>
      </motion.div>
  */}




    </section>
     {/* SERVICES */}
      <section className="py-24 px-6 bg-red-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Why <span className="text-yellow-300">Choose Us?</span>
            </h2>
            {/* <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive transportation services tailored to your needs</p> */}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                { text: "Professional well spoken licensed chaffers", icon: "👮‍♂️" },
                {text: "24/7 Service", icon: "🏪" },
                { text: "City-to-City Transfers", icon: "🚗" },
                { text: "Easy Booking", icon: "🗺️" },
            
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
                    {/* <p className="text-gray-400 text-sm mt-1">Professional service with luxury vehicles</p> */}
                  </div>
                  <div className="ml-auto text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg> */}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {[
               
                { text: "Comfortable Vehicles", icon: "🚘" },
                { text: "Airport Pickup and Drops", icon: "🛫" },
                { text: "Full Round Tours", icon: "🔄" },
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
                    {/* <p className="text-gray-400 text-sm mt-1">Professional service with luxury vehicles</p> */}
                  </div>
                  <div className="ml-auto text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg> */}
                  </div>
                </div>
              ))}
            </div>

           
          </div>
        </div>
       </section> 
       

            {/* Floating Icons */}
<div className="fixed bottom-10 right-10 flex flex-col gap-4 z-[9999]">
  
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
       </>
  );
}