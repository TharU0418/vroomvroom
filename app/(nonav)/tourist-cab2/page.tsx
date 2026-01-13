'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa"; // Import the WhatsApp icon

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
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Vehicle data
  const vehicles = [
    {
      id: 1,
      name: "Economy Cabs",
      type: "Economy Sedan",
      capacity: "3 Passengers",
      luggage: "2 Large Bags",
      image: "/types/Economy Cabs.png",
      features: ["AC", "Fuel Efficient", "Comfortable"],
      price: "$35/day"
    },
    {
      id: 2,
      name: "Standard / Sedan",
      type: "Family Van",
      capacity: "4 Passengers",
      luggage: "6-8 Large Bags",
      image: "/types/Standard-Sedan.png",
      features: ["Spacious", "AC", "Family Friendly"],
      price: "$60/day"
    },
    {
      id: 3,
      name: "Premium / Executive",
      type: "Premium SUV",
      capacity: "4 Passengers",
      luggage: "4 Large Bags",
      image: "/types/Premium-Executive.png",
      features: ["Luxury", "Premium AC", "Leather Seats"],
      price: "$85/day"
    },
    {
      id: 4,
      name: "SUV",
      type: "Compact Car",
      capacity: "6 Passengers",
      luggage: "2 Small Bags",
      image: "/types/SUV.png",
      features: ["Stylish", "Easy Parking", "City Friendly"],
      price: "$45/day"
    },
    {
      id: 5,
      name: "Flat-Roof Van",
      type: "Premium SUV",
      capacity: "6/8 Passengers",
      luggage: "4 Large Bags",
      image: "/types/flatroof.png",
      features: ["Luxury", "Premium AC", "Leather Seats"],
      price: "$85/day"
    },
    {
      id: 6,
      name: "High-Roof Van",
      type: "Compact Car",
      capacity: "10/14 Passengers",
      luggage: "2 Small Bags",
      image: "/types/highroof.png",
      features: ["Stylish", "Easy Parking", "City Friendly"],
      price: "$45/day"
    },
    {
      id: 7,
      name: "Tourist Bus",
      type: "Premium SUV",
      capacity: "48 Passengers",
      luggage: "4 Large Bags",
      image: "/types/bus.png",
      features: ["Luxury", "Premium AC", "Leather Seats"],
      price: "$85/day"
    }
  ];

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
              className="flex items-center gap-2"
            >
              <div className="relative">
                <Link href="/" className="flex items-center space-x-2 mb-5">
              <Image 
                src="/logo.png" 
                alt="Luxury Car"
                width={150} // replace with your actual image width
                height={64} // replace with your actual image height
                className="object-contain"
              />
            </Link>
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
              

              {/* Main Heading */}
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Vroom Vroom 
                </span>
                <span className=" text-red-400 drop-shadow-lg">Tourist</span>
              </h1>

              {/* Tagline */}
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                />
                <span className="text-sm font-semibold text-white/90 uppercase tracking-widest">
                   Reserve Your Cab Today to Explore Sri Lanka
                </span>
              </div>

              {/* Subtitle */}
              <p className="text-l text-white/80 mb-8 leading-relaxed max-w-2xl">
                From ancient heritage sites and sacred landmarks to the legendary Ramayana trails, Sri Lanka promises unforgettable memories 
                for every traveler. Blessed with golden beaches, misty hills, lush greenery, and breathtaking landscapes, the island truly is 
                a heaven for a perfect holiday. Whether you seek relaxation by the ocean or adventure in the cool hill country, Sri Lanka 
                offers something for everyone. As you plan your journey, VroomVroom Tourist ensures seamless, comfortable, and value-for-money 
                transportation throughout your stay. Our reliable tourist cab services are designed to give you a stress-free travel experience, 
                allowing you to explore the island in complete comfort. Talk to us today and let VroomVroom Tourist make your Sri Lankan holiday 
                smooth, memorable, and truly enjoyable.
              </p>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-wrap gap-6 mb-10"
              >
                {[
                  { value: "100+", label: "Licensed Chauffeurs" },
                  { value: "FLEXIBLE", label: "Transportation Price" },
                  { value: "24/7", label: "Customer Support" },
                  { value: "100%", label: "Relaible" }
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
      </section>

{/* SERVICES SECTION */}
<section className="relative py-28 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">

  <div className="relative max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-10">
      
      
      <h2 className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-white via-white to-yellow-300 bg-clip-text text-transparent">
        Our <span className="text-red-500">Services</span> 
      </h2>
   
    </div>

    {/* Services Grid */}
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Left Column - Services List */}
      <div className="space-y-6">
        {[
          
          { 
            text: "Airport Pickup & Drop", 
            icon: "✈️",
            description: "Punctual airport transfers with flight tracking",
            gradient: "from-green-500/20 to-emerald-500/20",
            border: "border-green-500/30"
          },
          { 
            text: "Corporate Travel", 
            icon: "🏢",
            description: "Professional services for business needs",
            gradient: "from-purple-500/20 to-pink-500/20",
            border: "border-purple-500/30"
          }
        ].map((service, i) => (
          <div 
            key={i}
            className="group relative p-6 rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-transparent transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer overflow-hidden"
          >
            {/* Hover effect background */}
            <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            {/* Content */}
            <div className="relative flex items-center gap-6">
              {/* Icon Container */}
              <div className={`p-4 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border ${service.border} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <div className="text-3xl">{service.icon}</div>
              </div>
              
              {/* Text Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-yellow-300 transition-all duration-500">
                    {service.text}
                  </h3>
                  <div className="opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                    <div className="p-2 rounded-full bg-white/10">
                      <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Column - Visual Element */}
      <div className="relative">
        {/* Main Card */}
        <div className="space-y-6">
        {[
          { 
            text: "City-to-City Transfers", 
            icon: "🚗",
            description: "Seamless travel between cities with comfort",
            gradient: "from-red-500/20 to-orange-500/20",
            border: "border-red-500/30"
          },
          { 
            text: "Full Round Tours", 
            icon: "🔄",
            description: "Complete tour packages with guided experience",
            gradient: "from-blue-500/20 to-cyan-500/20",
            border: "border-blue-500/30"
          }

        ].map((service, i) => (
          <div 
            key={i}
            className="group relative p-6 rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-transparent transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer overflow-hidden"
          >
            {/* Hover effect background */}
            <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            {/* Content */}
            <div className="relative flex items-center gap-6">
              {/* Icon Container */}
              <div className={`p-4 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border ${service.border} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <div className="text-3xl">{service.icon}</div>
              </div>
              
              {/* Text Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-yellow-300 transition-all duration-500">
                    {service.text}
                  </h3>
                  <div className="opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                    <div className="p-2 rounded-full bg-white/10">
                      <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
 </div>
    </div>

    
  </div>
</section>
{/* VEHICLE OPTIONS SECTION */}
<section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-gray-900 to-black">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-10 md:mb-16"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-white">
        Our <span className="text-red-500">Vehicle</span> Fleet
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg px-2 md:px-0">
        Choose from our well-maintained vehicles for a comfortable journey across Sri Lanka
      </p>
    </motion.div>

    {/* Mobile swipeable carousel */}
    <div className="md:hidden relative">
      <div className="flex overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
        {vehicles.map((vehicle) => (
          <Link 
            href={`/vehicles/${vehicle.id}`} 
            key={vehicle.id}
            className="flex-shrink-0 w-[85vw] mx-2 snap-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              whileTap={{ scale: 0.98 }}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-red-500/50 transition-all duration-300 cursor-pointer shadow-xl"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  priority={vehicles.indexOf(vehicle) === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                {/* <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {vehicle.price}
                </div> */}
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors line-clamp-1">
                      {vehicle.name}
                    </h3>
                    {/* <p className="text-gray-400 text-sm">{vehicle.type}</p> */}
                  </div>
                  <span className="text-2xl ml-2 flex-shrink-0">🚗</span>
                </div>
                
                <div className="flex items-center justify-between mb-3 py-2 border-y border-gray-700/50">
                  <div className="flex items-center gap-1">
                    <span className="text-lg">👥</span>
                    <span className="text-white text-sm ml-1">{vehicle.capacity}</span>
                  </div>
                  {/* Quick book button for mobile */}
                  <button className="px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
                    Book Now
                  </button>
                  {/* <div className="flex items-center gap-1">
                    <span className="text-lg">🎒</span>
                    <span className="text-white text-sm ml-1">{vehicle.luggage}</span>
                  </div> */}
                </div>
                
                {/* <div className="flex overflow-x-auto gap-1 mb-3 pb-2 scrollbar-hide">
                  {vehicle.features.slice(0, 3).map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs whitespace-nowrap"
                    >
                      {feature}
                    </span>
                  ))}
                </div> */}
                
                <div className="pt-2">
                  <button className="w-full py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold group-hover:from-red-700 group-hover:to-red-800 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95">
                    View Details
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
      {/* Scroll indicator for mobile */}
      <div className="flex justify-center gap-1 mt-4">
        {vehicles.map((_, idx) => (
          <div key={idx} className="w-2 h-2 rounded-full bg-gray-700"></div>
        ))}
      </div>
    </div>

    {/* Desktop grid layout (unchanged) */}
    <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {vehicles.map((vehicle) => (
        <Link href={`/vehicles/${vehicle.id}`} key={vehicle.id}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-red-500/50 transition-all duration-300 cursor-pointer"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={vehicle.image}
                alt={vehicle.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              {/* <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {vehicle.price}
              </div> */}
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                    {vehicle.name}
                  </h3>
                  {/* <p className="text-gray-400 text-sm">{vehicle.type}</p> */}
                </div>
                <span className="text-2xl">🚗</span>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">👥</span>
                  <span className="text-white">{vehicle.capacity}</span>
                </div>
                {/* <div className="flex items-center gap-2">
                  <span className="text-gray-400">🎒</span>
                  <span className="text-white">{vehicle.luggage}</span>
                </div> */}
              </div>
              
              {/* <div className="flex flex-wrap gap-2 mb-4">
                {vehicle.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs"
                  >
                    {feature}
                  </span>
                ))}
              </div> */}
              
              <div className="pt-4 border-t border-gray-700">
                <button className="w-full py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold group-hover:from-red-700 group-hover:to-red-800 transition-all duration-300 flex items-center justify-center gap-2">
                  View Details
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
      className="text-center mt-8 md:mt-12"
    >
      <p className="text-gray-400 text-sm md:text-base px-2 md:px-0">
        All vehicles include professional driver, fuel, and insurance
      </p>
    </motion.div>
  </div>
</section>

      {/* SERVICES */}
      <section className="py-24 px-6 bg-red-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Why <span className="text-yellow-300">Choose Us?</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                { text: "Professional well spoken licensed chaffers", icon: "👮‍♂️" },
                { text: "24/7 Service", icon: "🏪" },
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
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {[
                { text: "Comfortable Vehicles", icon: "🚘" },
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
  onClick={() => gtag_report_conversion("https://wa.me/94717505090")}
  rel="noopener noreferrer"
  className="bg-green-500 text-white p-3 rounded-full shadow-xl cursor-pointer hover:scale-110 transition-transform duration-300 animate-bounce"
  aria-label="Chat on WhatsApp"
>
  <FaWhatsapp className="text-4xl" /> 🇱🇰
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