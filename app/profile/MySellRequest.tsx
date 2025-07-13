// //import { useAuth } from '@/hooks/useAuth';
// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';
// //import { IoIosCloseCircle } from "react-icons/io";

// export interface SellCard {
//   id: string;
//   district: string;
//   city: string;
//   condition: number;
//   brand: string,
//   year: string,
//   model: string,
//   mileage: string;
//   fueltype: number;
//   engine_capacity: string,
//   transmission: string,
//   body_type: string,
//   price: string;
//   description: number;
//   mobileNum: string,
//   userName: string,
//   status:string;
//   images: string[];
// }

// export interface CarCard {
//   id: string;
//   brand: string;
//   model: string;
//   price: number;
//   year: number;
//   images: string[];
//   location?: string;
//   description?: string;
// }

// interface User {
//   email: string;
//   given_name: string;
// }

// function MySellRequest({ user }: { user: User }) {
  
//   const [sellRequests, setSellRequests] = useState<SellCard[]>([]);
// //  const [cars, setCars] = useState<CarCard[]>([]);
//   const [loading, setLoading] = useState(true);
//   //const [error, setError] = useState<string | null>(null);
//   //const [formData, setFormData] = useState<{ [key: string]: { star: number; reason: string } }>({});


//   useEffect(() => {
//     const fetchSellRequests = async () => {
//         try {
//           const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BUY}`);
//           if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
//           const data = await response.json();
//           console.log('daaaaata', data)
//           const filteredRequests = data.filter((requestsData1: { userId: string }) => 
//     requestsData1.userId === user.email
// );
//           setSellRequests(filteredRequests);
//           setLoading(false);
//         } catch (error) {
//           console.error('Failed to fetch rent-requests:', error);
//           setLoading(false);
//         }
//       };



  
//       fetchSellRequests();
//      // fetchCars();
//   }, []);

//   console.log('sellRequests 1111111111', sellRequests)
 
//   const handleCancelRequest = async (requestId: string) => {
//       try {
//         const response = await fetch(`https://yzrt64o9ga.execute-api.eu-north-1.amazonaws.com/buy/buy-cars`, {
//           method: 'PATCH',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ id:requestId,status: 'cancel' }), // Update status to 'reject'
//         });

//         console.log('requestId',requestId)

//         if (response.ok) {
//           // Update rentRequests state
//           setSellRequests(prev => 
//             prev.map(sellRequest => 
//               sellRequest.id === requestId 
//               ? { ...sellRequest, status: 'cancel' } 
//               : sellRequest
//             )
//           );
//         } else {
//           throw new Error('Failed to cancel rent request');
//         }
//       } catch (error) {
//         console.error('Error canceling rent request:', error);
//       }
//     };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center p-4">
//         <div className="glass-container bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-6xl w-full mx-4 p-8">
//           <h1 className="text-2xl font-bold text-black mb-8 text-center animate-pulse">Loading Your Requests...</h1>
          
//           <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
//             {[...Array(3)].map((_, index) => (
//               <div 
//                 key={index} 
//                 className="relative rounded-xl p-4 shadow-lg backdrop-blur border border-white/20 bg-white/10 animate-pulse"
//               >
//                 <div className="absolute top-2 right-2">
//                   <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
//                 </div>
                
//                 <div className="flex flex-col lg:flex-row gap-8">
//                   <div className="md:w-1/2">
//                     <div className="w-full h-64 bg-gray-200 rounded-lg mb-2"></div>
//                   </div>
                  

//                   <div className="md:w-1/2 space-y-4">
//                     <div className="h-6 bg-gray-200 rounded w-3/4"></div>
//                     <div className="h-4 bg-gray-200 rounded w-1/2"></div>
//                     <div className="h-4 bg-gray-200 rounded w-1/3"></div>
//                     <div className="h-4 bg-gray-200 rounded w-2/3"></div>
//                     <div className="h-4 bg-gray-200 rounded w-1/2"></div>
//                     <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//                   </div>
//                 </div>
                
//                 <div className="h-10 bg-gray-200 rounded w-1/3 mt-4"></div>
                
//                 {/* Driving Car Animation */}
//                 <div className="absolute bottom-4 left-0 w-full flex justify-center">
//                   <div className="animate-[drive_2s_linear_infinite] text-white">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
//                       <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
//                       <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
//                       <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // if (error) {
//   //   return (
//   //     <div className="min-h-screen flex items-center justify-center p-4">
//   //       <div className="glass-container bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-2xl w-full p-8 text-center">
//   //         <h1 className="text-2xl font-bold text-white mb-4">Error Loading Requests</h1>
//   //         <p className="text-white mb-6">{error}</p>
//   //         <button 
//   //           onClick={() => window.location.reload()}
//   //           className="bg-gradient-to-r from-red-400 to-red-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-all"
//   //         >
//   //           Try Again
//   //         </button>
//   //       </div>
//   //     </div>
//   //   );
//   // }

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4">
//       <div className="glass-container bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-6xl w-full mx-4 p-8">
//         <h1 className="text-2xl font-bold text-black mb-8 text-center">Your Car Rental Requests</h1>

//         <div className="grid grid-cols-1 gap-8">
//           {sellRequests.map((request) => {
//            // const car = cars.find(car => car._id === request.carId);
//             return request ? (
//               // <div key={request._id} className="relative rounded-xl p-4 shadow-lg backdrop-blur border border-white/20 bg-white/10">
//                 <div
//                   key={request.id}
//                   className={`relative rounded-xl p-4 shadow-lg backdrop-blur cursor-pointer border border-white/20 ${
//                     request.status === 'reject'
//                       ? 'bg-red-500/30'
//                       : request.status === 'pending'
//                       ? 'bg-yellow-500/30'
//                       : request.status === 'accept'
//                       ? 'bg-green-500/30'
//                       : 'bg-white/10'
//                   }`}
//                 >
//                 {/* <div className="absolute top-2 right-2">
//                   <button 
//                     className="text-red-500 hover:text-red-700"
//                     onClick={() => handleRemoveFromList(request._id)}
//                   >
//                     <IoIosCloseCircle size={24} />
//                   </button>
//                 </div> */}
//                 <div className="flex gap-8">
//                   <div className="w-1/3">
//                     <Image 
//                       src={request.images[0] || '/default-image.jpg'} 
//                       alt={request.brand} 
//                       className="w-full h-48 object-cover rounded-xl"
//                       width={100}
//                       height={100}
//                     />
//                   </div>
//                   <div className="w-2/3 space-y-4">
//                     <h2 className="text-xl font-bold">{request.brand} {request.model} {request.year}</h2>
//                     {/* <p className="font-medium">Year: {request.year}</p> */}
//                     <p className="font-medium">Location: {request.district} {request.city}</p>
//                     <p className="font-medium">Condition: {request.condition}</p>
//                     {/* <p className="font-medium">Brand: {request.brand}</p> */}
//                     {/* <p className="font-medium">Model: {request.model}</p> */}
//                     <p className="font-medium">Mileage: {request.mileage}</p>
//                     <p className="font-medium">Fuel Type: {request.fueltype}</p>
//                     <p className="font-medium">Engine Capacity: {request.engine_capacity}</p>
//                     <p className="font-medium">Transmission: {request.transmission}</p>
//                     <p className="font-medium">Body Type: {request.body_type}</p>
//                     <p className="font-medium">Price: {request.price}</p>
//                     <p className="font-medium">Description: {request.description}</p>
//                     <p className="font-medium">Status: {request.status}</p>

//                     {request.status == 'pending' && (
//                       <button
//                         onClick={() => handleCancelRequest(request.id)}
//                         className="text-white bg-gradient-to-r from-red-500 to-red-700 py-2 px-4 rounded-full"
//                       >
//                         Cancel the request
//                       </button>
//                     )}
//                     {request.status == 'accept' && (
//                       // <button
//                       //   onClick={() => handleRemoveFromList(request._id)}
//                       //   className="text-white bg-gradient-to-r from-green-500 to-green-700 py-2 px-4 rounded-full"
//                       // >
//                       //   Promote
//                       // </button>
//                       <></>
//                     )}
                    
//                   </div>
//                 </div>
//               </div>
//             ) : null;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MySellRequest;

//import { useAuth } from '@/hooks/useAuth';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import { FaChevronDown, FaChevronUp, FaInfoCircle, FaCar } from 'react-icons/fa';

export interface SellCard {
  id: string;
  district: string;
  city: string;
  condition: number;
  brand: string;
  year: string;
  model: string;
  mileage: string;
  fueltype: number;
  engine_capacity: string;
  transmission: string;
  body_type: string;
  price: string;
  description: number;
  mobileNum: string;
  userName: string;
  status: string;
  images: string[];
}

export interface CarCard {
  id: string;
  brand: string;
  model: string;
  price: number;
  year: number;
  images: string[];
  location?: string;
  description?: string;
}

interface User {
  email: string;
  given_name: string;
}

function MySellRequest({ user }: { user: User }) {
  const [sellRequests, setSellRequests] = useState<SellCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  
  // For mobile filter UI
  const [showFilters, setShowFilters] = useState(false);
  const [statusFilter, setStatusFilter] = useState('all');
  
  // Map condition numbers to text
  const conditionMap = {
    1: "New",
    2: "Used - Like New",
    3: "Used - Good",
    4: "Used - Fair"
  };
  
  // Map fuel types to text
  const fuelTypeMap = {
    1: "Petrol",
    2: "Diesel",
    3: "Hybrid",
    4: "Electric"
  };

  useEffect(() => {
    const fetchSellRequests = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BUY}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        const filteredRequests = data.filter((requestsData1: { userId: string }) => 
          requestsData1.userId === user.email
        );
        setSellRequests(filteredRequests);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch rent-requests:', error);
        setLoading(false);
      }
    };

    fetchSellRequests();
  }, []);

  const handleCancelRequest = async (requestId: string) => {
    try {
      const response = await fetch(`https://yzrt64o9ga.execute-api.eu-north-1.amazonaws.com/buy/buy-cars`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: requestId, status: 'cancel' }),
      });

      if (response.ok) {
        setSellRequests(prev => 
          prev.map(sellRequest => 
            sellRequest.id === requestId 
            ? { ...sellRequest, status: 'cancel' } 
            : sellRequest
          )
        );
      } else {
        throw new Error('Failed to cancel sell request');
      }
    } catch (error) {
      console.error('Error canceling sell request:', error);
    }
  };

  const toggleCardExpand = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending': return 'bg-yellow-500/20 border-yellow-500/50';
      case 'accept': return 'bg-green-500/20 border-green-500/50';
      case 'reject': return 'bg-red-500/10 border-red-500/50';
      case 'cancel': return 'bg-gray-500/10 border-gray-500/50';
      default: return 'bg-blue-500/10 border-blue-500/50';
    }
  };

  const getStatusText = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending': return 'Pending';
      case 'accept': return 'Accepted';
      case 'reject': return 'Rejected';
      case 'cancel': return 'Cancelled';
      default: return status;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending': return <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>;
      case 'accept': return <div className="w-3 h-3 rounded-full bg-green-500"></div>;
      case 'reject': return <div className="w-3 h-3 rounded-full bg-red-500"></div>;
      case 'cancel': return <div className="w-3 h-3 rounded-full bg-gray-500"></div>;
      default: return <div className="w-3 h-3 rounded-full bg-blue-500"></div>;
    }
  };

  const filteredRequests = statusFilter === 'all' 
    ? sellRequests 
    : sellRequests.filter(req => req.status.toLowerCase() === statusFilter);

  if (loading) {
    return (
      <div className="min-h-screen p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Your Sell Requests</h1>
            <div className="relative">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg"
              >
                <span>Filter</span>
                <FaChevronDown size={12} />
              </button>
              {showFilters && (
                <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg p-4 w-48 z-10">
                  <div className="text-sm font-medium mb-2">Status</div>
                  <div className="space-y-2">
                    {['all', 'pending', 'accept', 'reject', 'cancel'].map(status => (
                      <label key={status} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="statusFilter"
                          checked={statusFilter === status}
                          onChange={() => setStatusFilter(status)}
                          className="accent-blue-500"
                        />
                        <span className="capitalize">{status === 'all' ? 'All Statuses' : status}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow p-4 animate-pulse"
              >
                <div className="flex items-center justify-between">
                  <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/6"></div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                  <div className="w-full md:w-1/3">
                    <div className="w-full h-40 bg-gray-200 rounded-xl"></div>
                  </div>
                  
                  <div className="w-full md:w-2/3 space-y-3">
                    <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
                
                <div className="h-10 bg-gray-200 rounded w-1/3 mt-4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Your Sell Requests</h1>
          <div className="relative">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow border border-gray-200"
            >
              <span>Filter</span>
              <FaChevronDown size={12} />
            </button>
            {showFilters && (
              <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg p-4 w-48 z-10">
                <div className="text-sm font-medium mb-2">Status</div>
                <div className="space-y-2">
                  {['all', 'pending', 'accept', 'reject', 'cancel'].map(status => (
                    <label key={status} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="statusFilter"
                        checked={statusFilter === status}
                        onChange={() => setStatusFilter(status)}
                        className="accent-blue-500"
                      />
                      <span className="capitalize">{status === 'all' ? 'All Statuses' : status}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {filteredRequests.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-100 p-4 rounded-full">
                <FaCar className="text-gray-400 text-2xl" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-700 mb-2">No Sell Requests Found</h2>
            <p className="text-gray-500 mb-6">You haven't submitted any car sell requests yet.</p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
              Sell a Car
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredRequests.map((request) => (
              <div 
                key={request.id}
                className={`bg-white rounded-xl shadow overflow-hidden transition-all duration-300 ${
                  getStatusColor(request.status)
                }`}
              >
                <div 
                  className="p-4 cursor-pointer"
                  onClick={() => toggleCardExpand(request.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h2 className="font-bold text-gray-800">{request.brand} {request.model}</h2>
                      <span className="text-gray-500">{request.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        request.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        request.status === 'accept' ? 'bg-green-100 text-green-800' :
                        request.status === 'reject' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {getStatusText(request.status)}
                      </div>
                      {expandedCard === request.id ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-4 mt-4">
                    <div className="w-full md:w-1/3">
                      <div className="relative w-full h-40 rounded-xl overflow-hidden">
                        <Image 
                          src={request.images[0] || '/default-image.jpg'} 
                          alt={`${request.brand} ${request.model}`}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-xl"
                        />
                      </div>
                    </div>
                    
                    <div className="w-full md:w-2/3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-xl font-bold text-blue-600">Rs {request.price}</div>
                        <div className="flex items-center gap-1">
                          {getStatusIcon(request.status)}
                          <span className="text-sm text-gray-600">{getStatusText(request.status)}</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-1">
                          <span className="text-gray-500">Location:</span>
                          <span>{request.district}, {request.city}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-gray-500">Condition:</span>
                          <span>{conditionMap[request.condition as keyof typeof conditionMap]}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-gray-500">Mileage:</span>
                          <span>{request.mileage} km</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-gray-500">Fuel:</span>
                          <span>{fuelTypeMap[request.fueltype as keyof typeof fuelTypeMap]}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {expandedCard === request.id && (
                  <div className="px-4 pb-4 border-t border-gray-100 mt-2 pt-4 animate-fadeIn">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h3 className="font-medium text-gray-700 mb-2">Car Details</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Engine Capacity</span>
                            <span>{request.engine_capacity}cc</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Transmission</span>
                            <span>{request.transmission}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Body Type</span>
                            <span>{request.body_type}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-gray-700 mb-2">Contact Information</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Name</span>
                            <span>{request.userName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Phone</span>
                            <span>{request.mobileNum}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h3 className="font-medium text-gray-700 mb-2">Description</h3>
                      <p className="text-gray-700">{request.description}</p>
                    </div>
                    
                    {request.status === 'pending' && (
                      <div className="mt-6">
                        <button
                          onClick={() => handleCancelRequest(request.id)}
                          className="w-full py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium flex items-center justify-center gap-2"
                        >
                          <IoIosCloseCircle size={20} />
                          Cancel Sell Request
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MySellRequest;