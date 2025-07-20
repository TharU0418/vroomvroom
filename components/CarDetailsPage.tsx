'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import Image from 'next/image';
import { CarCard } from '@/app/(root)/buy/page';

export default function CarDetailsPage() {
  const [car, setCar] = useState<CarCard | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showPreview, setShowPreview] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const router = useRouter();
  const { user } = useAuth();

  const payload = {
    userId: user?.id || '',
    carId: car?.id,
  };

  const handleReportRequest = () => {
    if (car && car.report) {
      window.open(car.report, "_blank");
    }
    handleSubmit2();
  };

  const handleLogin = () => {
    router.push('/sign')
  }

  const handleSubmit2 = async () => {
    try {
      const res = await fetch('https://vih0lw3c29.execute-api.eu-north-1.amazonaws.com/sell/sell-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });      
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to submit request');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form');
    }
  }

  useEffect(() => {
    const carData = sessionStorage.getItem('selectedCar');
    if (carData) {
      setCar(JSON.parse(carData));
      setIsLoading(false);
    }
  }, []);

  if (isLoading) return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-t-4 border-red-600 border-solid rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-800 text-xl font-light">Loading your dream car...</p>
      </div>
    </div>
  );

  if (!car) return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <svg className="w-16 h-16 text-red-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Car Not Found</h3>
        <p className="text-gray-600 mb-6">The car details could not be loaded</p>
        <button 
          onClick={() => router.push('/buy')}
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
        >
          Browse Cars
        </button>
      </div>
    </div>
  );

  const handleImagePreview = (img: string) => {
    setPreviewImage(img);
    setShowPreview(true);
  };

  if (isLoading) return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-t-4 border-red-600 border-solid rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-800 text-xl font-light">Loading your dream car...</p>
      </div>
    </div>
  );

   return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Preview Modal */}
      {showPreview && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowPreview(false)}
        >
          <div className="max-w-4xl w-full">
            <div className="relative aspect-video">
              <Image
                src={previewImage}
                alt="Preview"
                layout="fill"
                objectFit="contain"
                className="cursor-zoom-out"
              />
            </div>
            <button 
              className="absolute top-6 right-6 text-white bg-black/50 rounded-full p-2 hover:bg-red-600 transition-colors"
              onClick={() => setShowPreview(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
      
      {/* Floating Back Button */}
      <button 
        onClick={() => router.back()}
        className="fixed top-6 left-6 z-40 bg-white border border-gray-200 shadow-md text-gray-800 rounded-full p-3 hover:bg-red-600 hover:text-white transition-all duration-300 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
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
            <div 
              className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-md cursor-zoom-in"
              onClick={() => handleImagePreview(car.images[activeImage])}
            >
              <div className="w-full h-full relative">
                <Image
                  src={car.images[activeImage]}
                  alt={`${car.brand} ${car.model}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                  <h1 className="text-white text-3xl font-bold">
                    {car.brand} <span className="text-red-400">{car.model}</span>
                  </h1>
                </div>
              </div>
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-3 mt-6 overflow-x-auto py-2 px-1">
              {car.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === index ? 'border-red-600' : 'border-gray-300'
                  }`}
                >
                  <div className="w-full h-full relative">
                    <Image
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </button>
              ))}
            </div>
            
            {/* Floating Price Tag */}
            {/* <div className="absolute -bottom-4 left-6 z-10 bg-red-600 text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg">
              ${car.price.toLocaleString()}
            </div> */}
          </div>
          
          {/* Details Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {car.brand} <span className="text-red-600">{car.model}</span>
                </h1>
                <p className="text-gray-600">{car.year} • {car.district}, {car.city}</p>
              </div>
              <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                {car.condition}
              </div>
            </div>
            
            {/* Specifications Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-gray-500 text-sm">Engine</div>
                <div className="text-gray-900 font-medium">{car.engine_capacity}L</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-gray-500 text-sm">Transmission</div>
                <div className="text-gray-900 font-medium">{car.transmission}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-gray-500 text-sm">Fuel Type</div>
                <div className="text-gray-900 font-medium">{car.fueltype}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-gray-500 text-sm">Report</div>
                <div className="text-gray-900 font-medium">{car.report ? "Available" : "N/A"}</div>
              </div>
               <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-gray-500 text-sm">Price</div>
                <div className="text-gray-900 font-medium">{car.price.toLocaleString()}</div>
              </div>
             {/* <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-gray-500 text-sm">Contact</div>
                <div className="text-gray-900 font-medium">{car.mobileNum}</div>
              </div> */}
            </div>
            
            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed">
                {car.description}
              </p>
            </div>
            
            {/* Vehicle Report */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-8">
              <h3 className="text-gray-900 text-xl font-bold mb-4">Vehicle Report</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <button
  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition-colors flex items-center justify-center"
  onClick={user ? handleReportRequest : handleLogin}
>
  <svg
    className="w-5 h-5 mr-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    ></path>
  </svg>
  {!user ? (
    <p>Please Log In to access the Vehicle Report</p>
  ) : (
    <p>Request Vehicle Report</p>
  )}
</button>

                </div>
              </div>
            </div>
            
            {/* Contact Seller */}
            {/* <div className="bg-gray-900 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Interested in this vehicle?</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition-colors font-medium">
                  Contact Seller
                </button>
                <button className="flex-1 bg-white text-gray-900 hover:bg-gray-100 py-3 rounded-lg transition-colors font-medium border border-gray-300">
                  Schedule Test Drive
                </button>
              </div>
            </div> */}
          </motion.div>
        </motion.div>
        
        {/* Additional Images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">More Images</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {car.images.map((img, index) => (
              <div 
                key={index}
                className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 border border-gray-200 shadow-sm cursor-pointer"
                onClick={() => handleImagePreview(img)}
              >
                <Image
                  src={img}
                  alt={`Preview ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Specifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-white rounded-2xl border border-gray-200 p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Technical Specifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Performance</h3>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-600">Engine</span>
                  <span className="text-gray-900 font-medium">4.4L Twin-Turbo V8</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-600">Horsepower</span>
                  <span className="text-gray-900 font-medium">617 HP</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-600">Torque</span>
                  <span className="text-gray-900 font-medium">553 lb-ft</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-600">0-60 mph</span>
                  <span className="text-gray-900 font-medium">3.1 seconds</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-600">Top Speed</span>
                  <span className="text-gray-900 font-medium">190 mph</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Features</h3>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-600">Transmission</span>
                  <span className="text-gray-900 font-medium">8-Speed Automatic</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-600">Drivetrain</span>
                  <span className="text-gray-900 font-medium">All-Wheel Drive</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-600">Brakes</span>
                  <span className="text-gray-900 font-medium">Carbon Ceramic</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-600">Suspension</span>
                  <span className="text-gray-900 font-medium">Adaptive M Suspension</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-600">Seats</span>
                  <span className="text-gray-900 font-medium">Merino Leather</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}