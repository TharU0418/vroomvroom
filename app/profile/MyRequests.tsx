import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { IoIosCloseCircle } from "react-icons/io";

export interface RequestsCard {
  id: string;
  carId: string;
  userId: string;
  days: number;
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  history?: boolean;
  status: string;
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


function MyRequests({ user }: { user: User }) {
  const [rentRequests, setRentRequests] = useState<RequestsCard[]>([]);
  const [cars, setCars] = useState<CarCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  console.log('user', user.email)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        
        
        // Fetch rent requests
        const requestsRes = await fetch(`https://qjfm2z3b55.execute-api.eu-north-1.amazonaws.com/rent-request/rent-requests`,);
        if (!requestsRes.ok) throw new Error(`HTTP error! status: ${requestsRes.status}`);
        const requestsData = await requestsRes.json();
        const filteredRequests = requestsData.filter(requestsData1 => requestsData1.userId ===  user.email);

          console.log('filteredRequests', filteredRequests)
        setRentRequests(filteredRequests);
          console.log('rentRequests', rentRequests)

        
        // Fetch cars
        const carsRes = await fetch('https://qjfm2z3b55.execute-api.eu-north-1.amazonaws.com/rent-request/rent');
        if (!carsRes.ok) throw new Error(`HTTP error! status: ${carsRes.status}`);
        const carsData = await carsRes.json();
        setCars(carsData);
        
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setError('Failed to load data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
  console.log('Updated hireRequests:', rentRequests);
}, [rentRequests]);




  const handleRemoveFromList = async (requestId: string) => {
    try {
      const response = await fetch(`https://qjfm2z3b55.execute-api.eu-north-1.amazonaws.com/rent-request/rent-requests`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: requestId, history: true }),
      });

      if (response.ok) {
        setRentRequests(prev => prev.map(req => 
          req.id === requestId ? { ...req, history: true } : req
        ));
      } else {
        throw new Error('Failed to update rent request');
      }
    } catch (error) {
      console.error('Error removing from list:', error);
    }
  };

  const handleCancelRequest = async (requestId: string) => {
    try {
      const response = await fetch(`https://qjfm2z3b55.execute-api.eu-north-1.amazonaws.com/rent-request/rent-requests`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: requestId, status: 'cancel' }),
        
      });
      console.log(JSON.stringify({ id: requestId, status: 'cancel' }))


      if (response.ok) {
        setRentRequests(prev => prev.map(req => 
          req.id === requestId ? { ...req, status: 'cancel' } : req
        ));
      } else {
        throw new Error('Failed to cancel rent request');
      }
    } catch (error) {
      console.error('Error canceling rent request:', error);
    }
  };


  const handleCompleteRequest = async (requestId: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_RENT_REQUESTS}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: requestId,status: 'completed' }),
      });

      if (response.ok) {
        setRentRequests(prev => prev.map(req => 
          req.id === requestId ? { ...req, status: 'completed' } : req
        ));
      } else {
        throw new Error('Failed to completed rent request');
      }
    } catch (error) {
      console.error('Error completing rent request:', error);
    }
  };
  console.log('rentRequests', rentRequests)
  console.log('rentCars 12', cars)


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="glass-container bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-6xl w-full mx-4 p-8">
          <h1 className="text-2xl font-bold text-black mb-8 text-center animate-pulse">Loading Your Requests...</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {[...Array(3)].map((_, index) => (
              <div 
                key={index} 
                className="relative rounded-xl p-4 shadow-lg backdrop-blur border border-white/20 bg-white/10 animate-pulse"
              >
                <div className="absolute top-2 right-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                </div>
                
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="md:w-1/2">
                    <div className="w-full h-64 bg-gray-200 rounded-lg mb-2"></div>
                  </div>
                  

                  <div className="md:w-1/2 space-y-4">
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
                
                <div className="h-10 bg-gray-200 rounded w-1/3 mt-4"></div>
                
                {/* Driving Car Animation */}
                <div className="absolute bottom-4 left-0 w-full flex justify-center">
                  <div className="animate-[drive_2s_linear_infinite] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                      <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                      <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                      <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="glass-container bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-2xl w-full p-8 text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Error Loading Requests</h1>
          <p className="text-white mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-red-400 to-red-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-all"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass-container bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-6xl w-full mx-2 p-2">
        <h1 className="text-2xl font-bold text-black mb-8 text-center">Your Car Rental Requests</h1>

        <div className="grid grid-cols-1 gap-6">
  {rentRequests
    .filter(
      (rentRequest) =>
        rentRequest?.history == false &&
        ['accept', 'on-going', 'pending', 'reject'].includes(rentRequest?.status)
    )
    .map((request) => {
      const car = cars.find((car) => car.id === request.carId);
      return car ? (
        <div
          key={request.id}
          className={`relative rounded-xl p-4 shadow-lg backdrop-blur border border-white/20 transition-all 
            ${
              request.status === 'reject'
                ? 'bg-red-500/30'
                : request.status === 'pending'
                ? 'bg-yellow-500/30'
                : request.status === 'accept'
                ? 'bg-green-500/30'
                : 'bg-white/10'
            }`}
        >
          {/* Close Button */}
          <div className="absolute top-2 right-2">
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => handleRemoveFromList(request.id)}
            >
              <IoIosCloseCircle size={24} />
            </button>
          </div>

          {/* Card Content */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            {/* Car Image */}
            <div className="w-full md:w-1/3">
              <Image
                src={car.images[0] || '/default-image.jpg'}
                alt={car.brand}
                className="w-full h-48 object-cover rounded-lg"
                width={200}
                height={100}
              />
            </div>

            {/* Details */}
            <div className="w-full md:w-2/3 space-y-2 md:space-y-4">
              <h2 className="text-lg md:text-xl font-bold">
                {car.brand} {car.model}
              </h2>
              <p className="text-sm md:text-base font-medium">
                <span className="text-slate-600">Pickup Location:</span> {request.pickupLocation}
              </p>
              <p className="text-sm md:text-base font-medium">
                <span className="text-slate-600">Pickup Date:</span> {request.pickupDate}
              </p>
              <p className="text-sm md:text-base font-medium">
                <span className="text-slate-600">Return Date:</span> {request.returnDate}
              </p>
              <p className="text-sm md:text-base font-medium capitalize">
                <span className="text-slate-600">Status:</span> {request.status}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col md:flex-row gap-3">
                {request.status === 'pending' && (
                  <button
                    onClick={() => handleCancelRequest(request.id)}
                    className="text-sm md:text-base text-white bg-gradient-to-r from-red-500 to-red-700 py-2 px-4 rounded-full w-full md:w-auto"
                  >
                    Cancel the Request
                  </button>
                )}
                {request.status === 'accept' && (
                  <button
                    onClick={() => handleCompleteRequest(request.id)}
                    className="text-sm md:text-base text-white bg-gradient-to-r from-green-500 to-green-700 py-2 px-4 rounded-full w-full md:w-auto"
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null;
    })}
</div>

      </div>
    </div>
  );
}

export default MyRequests;
