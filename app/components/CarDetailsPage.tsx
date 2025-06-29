'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { CarCard } from '../page';

export default function CarDetailsPage() {
  const [car, setCar] = useState<CarCard | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [show360, setShow360] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const carData = sessionStorage.getItem('selectedCar');
    if (carData) setCar(JSON.parse(carData));
  }, []);

  if (!car) return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-t-4 border-red-600 border-solid rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white text-xl font-light">Loading your dream car...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Floating Back Button */}
      <button 
        onClick={() => router.back()}
        className="fixed top-6 left-6 z-50 bg-black/50 backdrop-blur-md text-white rounded-full p-3 hover:bg-red-600 transition-all duration-300 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </button>
      
      {/* Floating Share Button */}
      <button className="fixed top-6 right-6 z-50 bg-black/50 backdrop-blur-md text-white rounded-full p-3 hover:bg-red-600 transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      </button>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {/* Image Gallery */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-r from-red-900/20 to-gray-900/20 backdrop-blur-xl border border-gray-700/50 shadow-2xl">
              <div 
                className="w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${car.images[activeImage]})` }}
              />
              
              {/* 360° View Button */}
              <button 
                onClick={() => setShow360(!show360)}
                className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2 group hover:bg-red-700 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>360° View</span>
              </button>
              
              {/* Favorite Button */}
              <button className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white p-2 rounded-full hover:bg-red-700 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-3 mt-6 overflow-x-auto py-2 px-1">
              {car.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`flex-shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImage === index ? 'border-red-600' : 'border-transparent'
                  }`}
                >
                  <div 
                    className="w-full h-full bg-center bg-cover"
                    style={{ backgroundImage: `url(${img})` }}
                  />
                </button>
              ))}
            </div>
            
            {/* Floating Price Tag */}
            <div className="absolute -bottom-4 left-6 z-10 bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-3 rounded-full font-bold text-xl shadow-xl">
              ${car.price.toLocaleString()}
            </div>
          </div>
          
          {/* Details Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 shadow-2xl relative overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-red-600/10 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-blue-600/10 blur-3xl"></div>
            
            <h1 className="text-4xl font-bold text-white mb-2">
              {car.brand} <span className="text-red-400">{car.model}</span>
            </h1>
            <p className="text-gray-300 mb-8">{car.year} • {car.district}, {car.city}</p>
            
            {/* Specifications Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                <div className="text-gray-400 text-sm">Engine</div>
                <div className="text-white font-medium">{car.engine_capacity}L</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                <div className="text-gray-400 text-sm">Transmission</div>
                <div className="text-white font-medium">{car.transmission}</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                <div className="text-gray-400 text-sm">Fuel Type</div>
                <div className="text-white font-medium">{car.fueltype}</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                <div className="text-gray-400 text-sm">Condition</div>
                <div className="text-white font-medium">{car.condition}</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                <div className="text-gray-400 text-sm">Mileage</div>
                <div className="text-white font-medium">42,000 km</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                <div className="text-gray-400 text-sm">Color</div>
                <div className="text-white font-medium">Midnight Black</div>
              </div>
            </div>
            
            {/* Description */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-white mb-4">Description</h2>
              <p className="text-gray-300 leading-relaxed">
                {car.description || "This stunning vehicle is in impeccable condition both inside and out. With low mileage and a full service history, it's been meticulously maintained. Features include premium sound system, leather seats, advanced safety features, and a powerful yet efficient engine."}
              </p>
            </div>
            
            {/* Features */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-white mb-4">Key Features</h2>
              <div className="flex flex-wrap gap-3">
                {(car.features || ["Leather Seats", "Sunroof", "Navigation", "Backup Camera", "Bluetooth", "Heated Seats", "Apple CarPlay", "Keyless Entry"]).map((feature, i) => (
                  <span key={i} className="bg-red-900/40 text-white px-3 py-1 rounded-full text-sm">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Contact Seller */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-white text-xl font-bold mb-4">Contact Seller</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 bg-gray-700/50 backdrop-blur-sm rounded-lg p-4 flex items-center gap-4">
                  <div className="bg-gray-600 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Call Now</p>
                    <p className="text-white font-medium">{car.mobileNum}</p>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-4 rounded-lg font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Message Seller</span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Similar Cars Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Similar Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50">
              <div className="h-48 bg-gradient-to-r from-blue-900/30 to-purple-900/30 relative">
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white px-4 py-1 rounded-full font-bold">
                  $32,500
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">BMW 5 Series</h3>
                <p className="text-gray-400 mb-4">2020 • 28,000 km</p>
                <div className="flex gap-2 mb-4">
                  <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Automatic</span>
                  <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Sedan</span>
                  <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Petrol</span>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-2 rounded-lg font-medium">
                  View Details
                </button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50">
              <div className="h-48 bg-gradient-to-r from-red-900/30 to-orange-900/30 relative">
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-1 rounded-full font-bold">
                  $28,900
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">Audi A4</h3>
                <p className="text-gray-400 mb-4">2019 • 35,000 km</p>
                <div className="flex gap-2 mb-4">
                  <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Automatic</span>
                  <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Sedan</span>
                  <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Diesel</span>
                </div>
                <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 rounded-lg font-medium">
                  View Details
                </button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50">
              <div className="h-48 bg-gradient-to-r from-green-900/30 to-teal-900/30 relative">
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-1 rounded-full font-bold">
                  $38,200
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">Mercedes C-Class</h3>
                <p className="text-gray-400 mb-4">2021 • 19,000 km</p>
                <div className="flex gap-2 mb-4">
                  <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Automatic</span>
                  <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Coupe</span>
                  <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Hybrid</span>
                </div>
                <button className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-2 rounded-lg font-medium">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}