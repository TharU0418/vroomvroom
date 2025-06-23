'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useAuth } from '@/store/useAuth';
import Image from 'next/image';

interface CarCard {
  _id: string;
  brand: string;
  model: string;
  price: number;
  year: number;
  images: string[];
  location?: string;
  condition: string,
  description: string,
  engine_capacity: number,
  fueltype: string,
  transmission: string,
  mobileNum: string,
  district: string;
  city: string;
  features?: string[]; // Added to match your JSX
  type?: string; // Added to match your JSX
  report:string;
}

// Somewhere in your store or types file


export default function CarDetails() {

  // const [formData, setFormData] = useState({
  //     carId: '',
  //     description: '',
  //     mobileNum:'',
  //     email:''
  //   });

  const params = useParams();
  const id = params?.id as string;
  const [car, setCar] = useState<CarCard | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  //const [user, setUser] = useState<User | null>(null);
//   const [showNotification, setShowNotification] = useState(false);
// const [notificationMessage, setNotificationMessage] = useState('');


//   const Notification = () => (
//     <div className="fixed bottom-4 right-4 z-50">
//       <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out animate-fadeInUp">
//         <div className="flex items-center">
//           <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//           </svg>
//           <span className="font-semibold">{notificationMessage}</span>
//         </div>
//       </div>
//     </div>
//   );

     const { user } = useAuth();
  
// const handleSubmit2 = async () => {
//     //e.preventDefault();
//     formData.carId = id
//     try {
//       const res = await fetch('/api/buy-requests', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });      
//       if (!res.ok) {
//         const data = await res.json();
//         throw new Error(data.error || 'Failed to submit request');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error submitting form');
//     }
//   }

  // useEffect(() => {
  //   if (user?.mobileNumber) {
  //     //setFormData((prev) => ({ ...prev, mobileNum: user.mobileNumber, userName:user.firstName+user.lastName }));
  //     setFormData((prev) => ({ ...prev, mobileNum: user.mobileNumber, email:user.email }));
  //     }
  //   }, [user]);
    
   const handleSubmit = (url) => {
      if (url) {
        window.open(url, '_blank'); // Open the link in a new tab/window
      }
     // handleSubmit2();
    };



  useEffect(() => {
    if (!id) return;
    const fetchCar = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`https://gps5pt6uw7.execute-api.eu-north-1.amazonaws.com/dev/api/buy/${id}`);
        const data = await res.json();
        setCar(data?.data);
      } catch (err) {
        console.error('Failed to fetch car details:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCar();
  }, [id]);


  console.log('user', user)


  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#FD1D1D] to-[#FCB045] p-4">
        <div className="glass-container bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-4xl w-full mx-4 p-8 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-full rounded-xl overflow-hidden">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 animate-pulse mb-4"></div>
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 animate-pulse mb-4"></div>
            </div>            
            {/* Details Loading Animation */}
            <div className="text-white space-y-6">
              <div className="h-10 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                </div> 
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                </div> 
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                </div>
              </div>          
              {/* Specifications Loading */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-white/10 p-4 rounded-lg text-center">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 mx-auto animate-pulse"></div>
                    <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto animate-pulse"></div>
                  </div>
                ))}
              </div>
              
              {/* Features Loading */}
              <div className="mb-8">
                <div className="h-6 bg-gray-200 rounded w-1/4 mb-4 animate-pulse"></div>
                <ul className="grid grid-cols-2 gap-2">
                  {[...Array(6)].map((_, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-200 rounded-full animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Description Loading */}
              <div className="mb-8">
                <div className="h-6 bg-gray-200 rounded w-1/4 mb-4 animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
                </div>
              </div>
              
              {/* Button Loading */}
              <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          </div>
          
          {/* Driving Car Animation */}
          <div className="absolute bottom-4 left-0 w-full flex justify-center">
            <div className="animate-[drive_2.5s_linear_infinite] text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
              </svg>
            </div>
          </div>
        </div>
        
        <style jsx global>{`
          @keyframes drive {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}</style>
      </div>
    );
  }

  if (!car) return <div className="text-white text-center mt-20">Car details not found</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 via-red-700 to-red-900  p-4">
      <div className="glass-container bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-4xl w-full mx-4 p-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Car Images */}
          <div className="relative h-full rounded-xl overflow-hidden">
            {car.images.map((image: string, index: number) => (
              <div key={index} className="relative mb-4">
                <Image
                  src={image}
                  alt={`${car.brand} ${car.model} image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
                {index === 0 && (
                  <div className="absolute -bottom-4 left-0 w-full flex justify-center">
                    <div className="bg-red-700 rounded-full w-12 h-12 flex items-center justify-center animate-bounce">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                        <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                        <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                        <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Car Details */}
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">{car.brand}, {car.model}</h1>
            
            <div className="space-y-4 mb-8">

              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a2 2 0 012-2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                  <span className="text-xl">{car.year}</span>
              </div>

              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                </svg>
                <span className="text-2xl">${car.price.toLocaleString()}</span>
              </div>

              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-xl">{car.district}, {car.city}</span>
              </div>

              {/* Mobile Number */}

              {/* <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-xl">{car.mobileNum}</span>
              </div> */}
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-300">Fuel Type</p>
                <p className="text-xl font-bold">{car.fueltype}</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-300">Condition</p>
                <p className="text-xl font-bold">{car.condition}</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-300">Engine Capacity</p>
                <p className="text-xl font-bold">{car.engine_capacity} cc</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-300">Transmission</p>
                <p className="text-xl font-bold capitalize">{car.transmission}</p>
              </div>
            </div>

            {/* Features */}
            {car.features && car.features.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Features</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {car.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Description</h3>
              <p className="text-white">{car.description}</p>
            </div>


              

            {/* Contact Button */}
            {/* <a 
              href={`tel:${car.mobileNum}`}
              className="w-full block py-3 px-6 bg-gradient-to-r from-green-400 to-blue-500 text-white text-center rounded-lg hover:opacity-90 transition-all"
            > */}

             {!user?(
                <button
      type="submit"
      className="w-full py-3 px-6 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg hover:opacity-90 transition-all"
      disabled={!user}
     // onClick={() => handleSubmit(car.report)} // Pass the car.report value (URL)
    >
     

      <div className="flex items-center justify-center gap-2">
       
        Sign in to access the Vroom Vroom Vehicle Report
      </div>
    </button>
             ):(
              <button
      type="submit"
      className="w-full py-3 px-6 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg hover:opacity-90 transition-all"
      disabled={!user}
      onClick={() => handleSubmit(car.report)} // Pass the car.report value (URL)
    >
      <div className="flex items-center justify-center gap-2">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Request the Vroom Vroom Vehicle Report
      </div>
    </button>
             )}
   
          </div>
        </div>
      </div>
            {/* {showNotification && <Notification />} */}

    </div>
  );
}