'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
//import { FaWhatsapp } from "react-icons/fa"; // Import the WhatsApp icon
import ServiceCard from "@/components/ServiceCard";

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
      image: "/types/car/suzuki wagon R.png",
      features: ["AC", "Fuel Efficient", "Comfortable"],
      price: "$35/day"
    },
    {
      id: 2,
      name: "Standard / Sedan",
      type: "Family Van",
      capacity: "3 Passengers",
      luggage: "6-8 Large Bags",
      image: "/types/car/Nissan Sentra.png",
      features: ["Spacious", "AC", "Family Friendly"],
      price: "$60/day"
    },
    {
      id: 3,
      name: "Premium / Executive",
      type: "Premium SUV",
      capacity: "3 Passengers",
      luggage: "4 Large Bags",
      image: "/types/car/Toyota Premio.png",
      features: ["Luxury", "Premium AC", "Leather Seats"],
      price: "$90/day"
    },
    {
      id: 4,
      name: "SUV",
      type: "Compact Car",
      capacity: "4 Passengers",
      luggage: "2 Small Bags",
      image: "/types/car/Toyota CH-R.png",
      features: ["Stylish", "Easy Parking", "City Friendly"],
      price: "$100/day"
    },
    {
      id: 5,
      name: "Flat-Roof Van",
      type: "Premium SUV",
      capacity: "6/8 Passengers",
      luggage: "4 Large Bags",
      image: "/types/car/Nissan Caravan flat roof.png",
      features: ["Luxury", "Premium AC", "Leather Seats"],
      price: "$80/day"
    },
    {
      id: 6,
      name: "High-Roof Van",
      type: "Compact Car",
      capacity: "10/14 Passengers",
      luggage: "2 Small Bags",
      image: "/types/car/Toyota HiAce high roof.png",
      features: ["Stylish", "Easy Parking", "City Friendly"],
      price: "$90/day"
    },
    {
      id: 7,
      name: "Tourist Bus",
      type: "Premium SUV",
      capacity: "48 Passengers",
      luggage: "4 Large Bags",
      image: "/types/car/Toyota Coaster.png",
      features: ["Luxury", "Premium AC", "Leather Seats"],
      price: "$200/day"
    }
  ];
const leftServices = [
  {
    text: "Airport Pickup & Drop",
    slug: "airport-pickup-drop",
    icon: "✈️",
    description: "Punctual airport transfers with flight tracking",
    gradient: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/30"
  },
  {
    text: "Corporate Travel",
    slug: "corporate-travel",
    icon: "🏢",
    description: "Professional services for business needs",
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30"
  }
];

const rightServices = [
  {
    text: "Transfer and Sightseeing",
    slug: "transfer-and-site-seeing",
    icon: "🚗",
    description: "Seamless travel between cities with comfort",
    gradient: "from-red-500/20 to-orange-500/20",
    border: "border-red-500/30"
  },
  {
    text: "Full Round Tours",
    slug: "full-round-tours",
    icon: "🔄",
    description: "Complete tour packages with guided experience",
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30"
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

{/* Contact Shortcut Buttons */}
<div className="flex flex-wrap gap-4 mb-10">
  {/* WhatsApp Button */}
  <a
    href="https://wa.me/94717505090" // replace with your WhatsApp number
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="w-5 h-5 fill-current"
    >
      <path d="M16 .4C7.3.4.3 7.4.3 16.1c0 2.8.7 5.5 2.1 7.9L0 32l8.2-2.3c2.3 1.3 4.9 2 7.8 2h.1c8.7 0 15.7-7 15.7-15.7C31.7 7.4 24.7.4 16 .4zm0 28.5c-2.4 0-4.7-.7-6.7-2l-.5-.3-4.9 1.4 1.3-4.8-.3-.5c-1.4-2.1-2.1-4.5-2.1-7 0-7.4 6-13.4 13.4-13.4 7.4 0 13.4 6 13.4 13.4 0 7.4-6 13.4-13.4 13.4zm7.4-9.9c-.4-.2-2.4-1.2-2.8-1.3-.4-.2-.6-.2-.9.2-.3.4-1 1.3-1.3 1.6-.2.2-.5.3-.9.1-.4-.2-1.6-.6-3.1-2-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7 0-.2-.9-2.2-1.3-3-.3-.7-.6-.6-.9-.6h-.8c-.2 0-.6.1-.9.5-.3.4-1.2 1.2-1.2 3s1.2 3.5 1.4 3.7c.2.2 2.4 3.7 5.9 5.1.8.4 1.5.6 2 .8.8.3 1.5.3 2 .2.6-.1 2.4-1 2.8-2 .4-1 .4-1.8.3-2-.1-.2-.3-.3-.7-.5z"/>
    </svg>
    (+94) 71 750 5090
  </a>

  {/* Email Button */}
  <a
    href="mailto:hellovroomvroom@outlook.com" // replace with your email
    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 fill-current"
      viewBox="0 0 24 24"
    >
      <path d="M12 13.5L0 6.75V18h24V6.75L12 13.5zM12 10.5L24 3H0l12 7.5z"/>
    </svg>
    hellovroomvroom@outlook.com
  </a>
</div>


              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-wrap gap-6 mb-10"
              >
                {[
                  { value: "100+", label: "Trained Chauffeurs" },
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


{/* VEHICLE OPTIONS SECTION */}
<section className="py-12 md:py-20 px-4 md:px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-10 md:mb-16"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-gray-900">
        Our <span className="text-red-500">Vehicle</span> Fleet
      </h2>
      <p className="text-gray-800 max-w-2xl mx-auto text-base md:text-lg px-2 md:px-0">
        Choose from our well-maintained vehicles for a comfortable journey across Sri Lanka
      </p>
    </motion.div>

    {/* Mobile swipeable carousel */}
    <div className="md:hidden relative">
      <div className="flex overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
        {vehicles.map((vehicle) => (
          // <Link 
          //   href={`/vehicles/${vehicle.id}`} 
          //   key={vehicle.id}
          //   className="flex-shrink-0 w-[85vw] mx-2 snap-center"
          // >
          <div key={vehicle.id}
          className="flex-shrink-0 w-[85vw] mx-2 snap-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              whileTap={{ scale: 0.98 }}
              key={vehicle.id}
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
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {vehicle.price}
                </div>
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
                
                {/* <div className="pt-2">
                  <button className="w-full py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold group-hover:from-red-700 group-hover:to-red-800 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95">
                    View Details
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div> */}
              </div>
            </motion.div>
          {/* // </Link> */}
          </div>
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
        // <Link href={`/vehicles/${vehicle.id}`} key={vehicle.id}>
          <motion.div
           key={vehicle.id}
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
              <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {vehicle.price}
              </div>
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
              
              {/* <div className="pt-4 border-t border-gray-700">
                <button className="w-full py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold group-hover:from-red-700 group-hover:to-red-800 transition-all duration-300 flex items-center justify-center gap-2">
                  View Details
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div> */}
            </div>
          </motion.div>
        // </Link>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
      className="text-center mt-8 md:mt-12"
    >
      <p className="text-gray-800 text-sm md:text-base px-2 md:px-0">
        All vehicles include professional driver, fuel, and insurance
      </p>
    </motion.div>

    
  </div>
  
{/* Centered Contact Section */}
<div className="mt-6 flex justify-center">
  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4">
    
    {/* WhatsApp Button */}
    <a
      href="https://wa.me/94717505090"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 w-full sm:w-auto"
    >
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="w-5 h-5 fill-current"
    >
      <path d="M16 .4C7.3.4.3 7.4.3 16.1c0 2.8.7 5.5 2.1 7.9L0 32l8.2-2.3c2.3 1.3 4.9 2 7.8 2h.1c8.7 0 15.7-7 15.7-15.7C31.7 7.4 24.7.4 16 .4zm0 28.5c-2.4 0-4.7-.7-6.7-2l-.5-.3-4.9 1.4 1.3-4.8-.3-.5c-1.4-2.1-2.1-4.5-2.1-7 0-7.4 6-13.4 13.4-13.4 7.4 0 13.4 6 13.4 13.4 0 7.4-6 13.4-13.4 13.4zm7.4-9.9c-.4-.2-2.4-1.2-2.8-1.3-.4-.2-.6-.2-.9.2-.3.4-1 1.3-1.3 1.6-.2.2-.5.3-.9.1-.4-.2-1.6-.6-3.1-2-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7 0-.2-.9-2.2-1.3-3-.3-.7-.6-.6-.9-.6h-.8c-.2 0-.6.1-.9.5-.3.4-1.2 1.2-1.2 3s1.2 3.5 1.4 3.7c.2.2 2.4 3.7 5.9 5.1.8.4 1.5.6 2 .8.8.3 1.5.3 2 .2.6-.1 2.4-1 2.8-2 .4-1 .4-1.8.3-2-.1-.2-.3-.3-.7-.5z"/>
      </svg>
      (+94) 71 750 5090
    </a>

    {/* Email Button */}
    <a
      href="mailto:hellovroomvroom@outlook.com"
      className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 w-full sm:w-auto"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 fill-current"
        viewBox="0 0 24 24"
      >
        <path d="M12 13.5L0 6.75V18h24V6.75L12 13.5zM12 10.5L24 3H0l12 7.5z"/>
      </svg>
      hellovroomvroom@outlook.com
    </a>

  </div>
</div>


</section>

{/* SERVICES SECTION */}
  <section className="relative py-28 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-white to-yellow-300 bg-clip-text text-transparent">
            Our <span className="text-red-500">Services</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {leftServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block"
              >
                <ServiceCard service={service} />
              </Link>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {rightServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block"
              >
                <ServiceCard service={service} />
              </Link>
            ))}
          </div>

        </div>
        
      </div>

{/* Centered Contact Section */}
<div className="mt-6 flex justify-center">
  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4">
    
    {/* WhatsApp Button */}
    <a
      href="https://wa.me/94717505090"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 w-full sm:w-auto"
    >
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="w-5 h-5 fill-current"
    >
      <path d="M16 .4C7.3.4.3 7.4.3 16.1c0 2.8.7 5.5 2.1 7.9L0 32l8.2-2.3c2.3 1.3 4.9 2 7.8 2h.1c8.7 0 15.7-7 15.7-15.7C31.7 7.4 24.7.4 16 .4zm0 28.5c-2.4 0-4.7-.7-6.7-2l-.5-.3-4.9 1.4 1.3-4.8-.3-.5c-1.4-2.1-2.1-4.5-2.1-7 0-7.4 6-13.4 13.4-13.4 7.4 0 13.4 6 13.4 13.4 0 7.4-6 13.4-13.4 13.4zm7.4-9.9c-.4-.2-2.4-1.2-2.8-1.3-.4-.2-.6-.2-.9.2-.3.4-1 1.3-1.3 1.6-.2.2-.5.3-.9.1-.4-.2-1.6-.6-3.1-2-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7 0-.2-.9-2.2-1.3-3-.3-.7-.6-.6-.9-.6h-.8c-.2 0-.6.1-.9.5-.3.4-1.2 1.2-1.2 3s1.2 3.5 1.4 3.7c.2.2 2.4 3.7 5.9 5.1.8.4 1.5.6 2 .8.8.3 1.5.3 2 .2.6-.1 2.4-1 2.8-2 .4-1 .4-1.8.3-2-.1-.2-.3-.3-.7-.5z"/>
      </svg>
      (+94) 71 750 5090
    </a>

    {/* Email Button */}
    <a
      href="mailto:hellovroomvroom@outlook.com"
      className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 w-full sm:w-auto"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 fill-current"
        viewBox="0 0 24 24"
      >
        <path d="M12 13.5L0 6.75V18h24V6.75L12 13.5zM12 10.5L24 3H0l12 7.5z"/>
      </svg>
      hellovroomvroom@outlook.com
    </a>

  </div>
</div>
    </section>

      {/* SERVICES */}
      
<section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-900">
              Why <span className="text-black">Choose Us?</span>
            </h2>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full border-2 border-gray-900 flex items-center justify-center">
              👮‍♂️
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-gray-900">
              Professional well spoken licensed Chauffeurs
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Our professional, well-spoken licensed chauffeurs ensure a safe
              and comfortable journey, providing top-notch service with local
              expertise.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full border-2 border-gray-900 flex items-center justify-center">
              🚘
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-gray-900">
              Comfortable Vehicles
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Our fleet of well-maintained, comfortable vehicles ensures a
              smooth and enjoyable ride throughout your journey.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full border-2 border-gray-900 flex items-center justify-center">
              🏪
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-gray-900">
              24/7 Service
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Our 24/7 customer support ensures assistance whenever you need
              it, providing peace of mind throughout your travels.{" "}
              
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full border-2 border-gray-900 flex items-center justify-center">
              🗺️
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-gray-900">
              Easy Booking
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">

              Our easy booking process allows you to reserve your cab quickly
              and conveniently, ensuring a hassle-free experience from start to
              finish.
            </p>
          </div>

          
        </div>
      </div>
    </section>
      {/* Floating Icons */}
    {/* <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[9999] max-w-xs">
  <a
    href="https://wa.me/94717505090"
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => gtag_report_conversion("https://wa.me/94717505090")}
    className="flex flex-col items-center justify-center text-center gap-1 bg-green-500 text-white px-5 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
    aria-label="Chat on WhatsApp"
  >
    <FaWhatsapp className="text-3xl" />
    <span className="text-sm font-medium">
      (+94) 71 750 5090
    </span>
  </a>

  <a
    href="mailto:hellovroomvroom@outlook.com"
    className="flex flex-col items-center justify-center text-center gap-1 bg-blue-500 text-white px-5 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
    aria-label="Send Email"
  >
    <span className="text-2xl">📧</span>
    <span className="text-sm font-medium break-all">
      hellovroomvroom@outlook.com
    </span>
  </a>
</div> */}

    </>
  );
}