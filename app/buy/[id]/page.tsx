// 'use client';
// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { use } from 'react';
// import { useAuth } from '@/hooks/useAuth';
// import Link from 'next/link';
// import Image from 'next/image';

// interface CarCard {
//   id: string;
//   brand: string;
//   model: string;
//   price: number;
//   year: number;
//   images: string[];
//   location?: string;
//   condition: string,
//   description: string,
//   engine_capacity: number,
//   fueltype: string,
//   transmission: string,
//   mobileNum: string,
//   district: string;
//   city: string;
//   features?: string[]; // Added to match your JSX
//   type?: string; // Added to match your JSX
//   report:string;
// }

// export default function CarDetails({ params }: { params: Promise<{ id: string }> }) {
//   const { id } = use(params); // ✅ Unwrap the params

//   const [car, setCar] = useState<CarCard | null>(null);
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const [contactVisible, setContactVisible] = useState(false);
//   const user = useAuth();

//   useEffect(() => {
//     const fetchCar = async () => {
//       try {
//         setIsLoading(true);
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BUY}`);
//         const data: CarCard[] = await res.json();
//         const matchedCar = data.find((car) => car.id === id);
//         setCar(matchedCar || null);
//       } catch (err) {
//         console.error('Failed to fetch car:', err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchCar();
//   }, [id]); // ✅ Use unwrapped id

//  const handleSubmit = (url: string) => {
//   console.log('url', url);
//   if (url) {
//     window.open(url, '_blank'); // Open the link in a new tab/window
//   }
//   // handleSubmit2();
// };


//   // const handleSubmit2 = async () => {
//   //   //e.preventDefault();
//   //   formData.carId = id
//   //   try {
//   //     const res = await fetch('/api/buy-requests', {
//   //       method: 'POST',
//   //       headers: { 'Content-Type': 'application/json' },
//   //       body: JSON.stringify(formData),
//   //     });      
//   //     if (!res.ok) {
//   //       const data = await res.json();
//   //       throw new Error(data.error || 'Failed to submit request');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error:', error);
//   //     alert('Error submitting form');
//   //   }
//   // }


//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
//           <p className="mt-4 text-lg font-medium text-gray-700">Loading car details...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!car) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 via-red-700 to-red-900  p-4">
//         <div className="text-center">
//           <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </div>
//           <h2 className="mt-4 text-2xl font-bold text-gray-800">Car Not Found</h2>
//           <p className="mt-2 text-gray-600">The car you&rsquo;re looking for doesn&rsquo;t exist or has been removed.</p>
//           <Link href="/buy" className="mt-6 inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition">
//             Browse Other Cars
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   console.log('user', user.user)
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-red-500 via-red-700 to-red-900  p-4">
//       {/* Navigation */}
//       <nav className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <Link href="/buy" className="flex items-center">
//                 <div className="bg-red-600 w-8 h-8 rounded-md flex items-center justify-center">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
//                     <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
//                     <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h.5a1 1 0 00.8-.4l1.075-1.433c.196-.261.472-.4.768-.4H15a1 1 0 001-1v-1.5c0-.265-.105-.52-.293-.707l-2-2A.997.997 0 0013 5h-1.586a1 1 0 00-.707.293l-1.353 1.353A.5.5 0 019 7H6.5a.5.5 0 01-.5-.5V5a1 1 0 00-1-1H3z" />
//                   </svg>
//                 </div>
//                 <span className="ml-2 text-xl font-bold text-gray-900">AutoElite</span>
//               </Link>
//             </div>
//             <div className="flex items-center">
//               <Link 
//                 href="/buy" 
//                 className="text-red-600 hover:text-red-700 px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 ← Back to Cars
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="bg-white rounded-xl shadow-lg overflow-hidden"
//         >
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
//             {/* Car Images */}
//             <div className="space-y-4">
//               <div className="relative h-96 rounded-xl overflow-hidden bg-gray-100">
//                 {car.images.length > 0 ? (
//                   <Image 
//                     src={car.images[selectedImage]} 
//                     alt={`${car.brand} ${car.model}`}
//                     className="w-full h-full object-contain transition duration-300"
//                     width={100}
//                     height={200}
//                   />
//                 ) : (
//                   <div className="w-full h-full flex items-center justify-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                     </svg>
//                   </div>
//                 )}
//                 <div className="absolute bottom-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
//                   ${car.price.toLocaleString()}
//                 </div>
//               </div>
              
//               {/* Image Thumbnails */}
//               <div className="grid grid-cols-4 gap-2">
//                 {car.images.map((img, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setSelectedImage(index)}
//                     className={`h-24 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
//                       selectedImage === index ? 'border-red-500' : 'border-transparent'
//                     }`}
//                   >
//                     <Image 
//                       src={img} 
//                       alt={`Thumbnail ${index + 1}`}
//                       className="w-full h-full object-cover"
//                        width={60}
//                     height={100}
//                     />
//                   </button>
//                 ))}
//               </div>
//             </div>
            
//             {/* Car Details */}
//             <div>
//               <div className="mb-6">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h1 className="text-3xl font-bold text-gray-900">
//                       {car.brand} {car.model}
//                     </h1>
//                     <p className="text-gray-600 mt-1">{car.year} • {car.district}, {car.city}</p>
//                   </div>
//                   <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
//                     Verified
//                   </div>
//                 </div>
                
//                 <div className="mt-4 flex items-center">
//                   <div className="flex items-center text-yellow-500">
//                     {[...Array(5)].map((_, i) => (
//                       <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                       </svg>
//                     ))}
//                   </div>
//                   <span className="ml-2 text-sm text-gray-600">(12 reviews)</span>
//                 </div>
//               </div>
              
//               {/* Specifications */}
//               <div className="bg-gray-50 rounded-xl p-6 mb-6">
//                 <h2 className="text-xl font-bold text-gray-900 mb-4">Specifications</h2>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="flex items-center">
//                     <div className="bg-red-100 p-2 rounded-lg">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                       </svg>
//                     </div>
//                     <div className="ml-3">
//                       <p className="text-sm text-gray-500">Condition</p>
//                       <p className="font-medium">{car.condition}</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center">
//                     <div className="bg-red-100 p-2 rounded-lg">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                       </svg>
//                     </div>
//                     <div className="ml-3">
//                       <p className="text-sm text-gray-500">Engine</p>
//                       <p className="font-medium">{car.engine_capacity}L</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center">
//                     <div className="bg-red-100 p-2 rounded-lg">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                       </svg>
//                     </div>
//                     <div className="ml-3">
//                       <p className="text-sm text-gray-500">Transmission</p>
//                       <p className="font-medium">{car.transmission}</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center">
//                     <div className="bg-red-100 p-2 rounded-lg">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
//                       </svg>
//                     </div>
//                     <div className="ml-3">
//                       <p className="text-sm text-gray-500">Fuel Type</p>
//                       <p className="font-medium">{car.fueltype}</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center">
//                     <div className="bg-red-100 p-2 rounded-lg">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                       </svg>
//                     </div>
                   
//                   </div>
//                 </div>
//               </div>
              
//               {/* Features */}
//               <div className="mb-6">
//                 <h2 className="text-xl font-bold text-gray-900 mb-4">Features</h2>
//                 <div className="flex flex-wrap gap-2">
//                   {car.features && car.features.length > 0 ? (
//                     car.features.map((feature, index) => (
//                       <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
//                         {feature}
//                       </span>
//                     ))
//                   ) : (
//                     <p className="text-gray-600">No additional features listed</p>
//                   )}
//                 </div>
//               </div>
              
//               {/* Description */}
//               <div className="mb-6">
//                 <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
//                 <p className="text-gray-700 leading-relaxed">
//                   {car.description || "This well-maintained vehicle is in excellent condition and ready for its new owner. With a powerful engine and smooth transmission, it offers a comfortable and reliable driving experience."}
//                 </p>
//               </div>
              
//               {/* Contact Section */}
//               <div className="border-t border-gray-200 pt-6">
//                 <h2 className="text-xl font-bold text-gray-900 mb-4">Interested in this car?</h2>
                
//                 {contactVisible ? (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: 'auto' }}
//                     transition={{ duration: 0.3 }}
//                     className="bg-gray-50 p-4 rounded-lg"
//                   >
//                     <div className="flex items-center mb-4">
//                       <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
//                       <div className="ml-4">
//                         <h3 className="font-bold text-lg">John Smith</h3>
//                         <p className="text-gray-600">Private Seller</p>
//                       </div>
//                     </div>
                    
//                     <div className="flex items-center mb-4 p-3 bg-white rounded-lg">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                       </svg>
//                       <a href={`tel:${car.mobileNum}`} className="text-lg font-medium text-gray-900">
//                         {car.mobileNum}
//                       </a>
//                     </div>
                    
//                     <button 
//                       onClick={() => setContactVisible(false)}
//                       className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition"
//                       disabled={!user.user}
//                     >
//                       Close Contact
//                     </button>
//                   </motion.div>
//                 ) : (
//                   <motion.button
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                    // onClick={() => setContactVisible(true)}
//                    onClick={() => handleSubmit(car.report)}
//                     className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition"
//                     disabled={!user.user}
//                   >
//                     Request the Vroom Vroom Vehicle Report
//                   </motion.button>
//                 )}
//               </div>
//               {!user ? (<></>):(<>Please Log in</>)}
//             </div>
//           </div>
//         </motion.div>
        
//         {/* Similar Cars */}
//         {/* <div className="mt-12">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Cars</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[1, 2, 3].map((item) => (
//               <motion.div 
//                 key={item}
//                 whileHover={{ y: -5 }}
//                 className="bg-white rounded-xl shadow-md overflow-hidden"
//               >
//                 <div className="h-48 bg-gray-200 border-2 border-dashed rounded-t-xl" />
//                 <div className="p-4">
//                   <h3 className="text-lg font-bold text-gray-900">Toyota Camry</h3>
//                   <p className="text-gray-600">2020 • Automatic • 15,000 miles</p>
//                   <div className="flex justify-between items-center mt-3">
//                     <span className="text-lg font-bold text-red-600">$24,500</span>
//                     <button className="text-red-600 hover:text-red-700 font-medium">
//                       View Details
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div> */}
//       </main>
      
//       {/* Footer */}
//       {/* <footer className="bg-gray-900 text-white py-12 mt-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-xl font-bold mb-4">AutoElite</h3>
//               <p className="text-gray-400">Find your dream car with our premium selection of vehicles from trusted sellers.</p>
//             </div>
//             <div>
//               <h4 className="font-bold mb-4">Quick Links</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li><a href="#" className="hover:text-white">Home</a></li>
//                 <li><a href="#" className="hover:text-white">Buy a Car</a></li>
//                 <li><a href="#" className="hover:text-white">Sell Your Car</a></li>
//                 <li><a href="#" className="hover:text-white">Services</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-bold mb-4">Contact Us</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li className="flex items-center">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
//                   </svg>
//                   123 Auto St, Car City
//                 </li>
//                 <li className="flex items-center">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
//                     <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//                   </svg>
//                   (123) 456-7890
//                 </li>
//                 <li className="flex items-center">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
//                     <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                     <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                   </svg>
//                   info@autoelite.com
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-bold mb-4">Newsletter</h4>
//               <p className="text-gray-400 mb-2">Subscribe to get updates on new listings</p>
//               <div className="flex">
//                 <input 
//                   type="email" 
//                   placeholder="Your email" 
//                   className="px-4 py-2 rounded-l-lg text-gray-900 w-full focus:outline-none"
//                 />
//                 <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r-lg">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//             <p>© 2023 AutoElite. All rights reserved.</p>
//           </div>
//         </div>
//       </footer> */}
//     </div>
//   );
// }

// app/buy/[id]/page.tsx

import CarDetailsClient from "./CarDetailsClient";
import { notFound } from "next/navigation";

interface CarCard {
  id: string;
  brand: string;
  model: string;
  price: number;
  year: number;
  images: string[];
  location?: string;
  condition: string;
  description: string;
  engine_capacity: number;
  fueltype: string;
  transmission: string;
  mobileNum: string;
  district: string;
  city: string;
  features?: string[];
  type?: string;
  report: string;
}

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BUY}`);
  const cars: CarCard[] = await res.json();

  return cars.map((car) => ({
    id: car.id,
  }));
}

export default async function Page({ params }: PageProps) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BUY}`);
  const cars: CarCard[] = await res.json();
  const car = cars.find((c) => c.id === params.id);

  if (!car) {
    notFound();
  }

  return <CarDetailsClient car={car} />;
}
