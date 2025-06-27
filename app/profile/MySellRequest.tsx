import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { IoIosCloseCircle } from "react-icons/io";

export interface SellCard {
  _id: string;
  district: string;
  city: string;
  condition: number;
  brand: string,
  year: string,
  model: string,
  mileage: string;
  fueltype: number;
  engine_capacity: string,
  transmission: string,
  body_type: string,
  price: string;
  description: number;
  mobileNum: string,
  userName: string,
}

export interface CarCard {
  _id: string;
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
  userId: string;
}

function MySellRequest() {
  const [sellRequests, setSellRequests] = useState<SellCard[]>([]);
  const [cars, setCars] = useState<CarCard[]>([]);
  const [loading, setLoading] = useState(true);
  //const [error, setError] = useState<string | null>(null);
  //const [formData, setFormData] = useState<{ [key: string]: { star: number; reason: string } }>({});


  useEffect(() => {
    const fetchSellRequests = async () => {
        try {
          const response = await fetch('/api/buy');
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          const data = await response.json();
          
          setSellRequests(data?.data);
          setLoading(false);
        } catch (error) {
          console.error('Failed to fetch rent-requests:', error);
          setLoading(false);
        }
      };

const fetchCars = async () => {
        try {
          const response = await fetch('/api/check-cars');
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          const data = await response.json();
          setCars(data);
          setLoading(false);
        } catch (error) {
          console.error('Failed to fetch cars:', error);
          setLoading(false);
        }
      };

  
      fetchSellRequests();
      fetchCars();
  }, []);

  console.log('sellRequests', sellRequests)
  console.log('cars', cars)

    const handleRemoveFromList = async (requestId: string) => {
      try {
        const response = await fetch(`/api/rent-requests/${requestId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ history: true }), // Update history field to true
        });

        if (response.ok) {
          // Update rentRequests state
          setSellRequests(prev => 
            prev.map(sellRequest => 
              sellRequest._id === requestId 
              ? { ...sellRequest, history: true } 
              : sellRequest
            )
          );
        } else {
          throw new Error('Failed to update rent request');
        }
      } catch (error) {
        console.error('Error removing from list:', error);
      }
    };

  const handleCancelRequest = async (requestId: string) => {
      try {
        const response = await fetch(`/api/buy/${requestId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: 'cancel' }), // Update status to 'reject'
        });

        if (response.ok) {
          // Update rentRequests state
          setSellRequests(prev => 
            prev.map(sellRequest => 
              sellRequest._id === requestId 
              ? { ...sellRequest, status: 'cancel' } 
              : sellRequest
            )
          );
        } else {
          throw new Error('Failed to cancel rent request');
        }
      } catch (error) {
        console.error('Error canceling rent request:', error);
      }
    };

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
      <div className="glass-container bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-6xl w-full mx-4 p-8">
        <h1 className="text-2xl font-bold text-black mb-8 text-center">Your Car Rental Requests</h1>

        <div className="grid grid-cols-1 gap-8">
          {sellRequests.map((request) => {
           // const car = cars.find(car => car._id === request.carId);
            return request ? (
              // <div key={request._id} className="relative rounded-xl p-4 shadow-lg backdrop-blur border border-white/20 bg-white/10">
                <div
                  key={request._id}
                  className={`relative rounded-xl p-4 shadow-lg backdrop-blur cursor-pointer border border-white/20 ${
                    request.status === 'reject'
                      ? 'bg-red-500/30'
                      : request.status === 'pending'
                      ? 'bg-yellow-500/30'
                      : request.status === 'accept'
                      ? 'bg-green-500/30'
                      : 'bg-white/10'
                  }`}
                >
                <div className="absolute top-2 right-2">
                  <button 
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleCancelRequest(request._id)}
                  >
                    <IoIosCloseCircle size={24} />
                  </button>
                </div>
                <div className="flex gap-8">
                  <div className="w-1/3">
                    <Image 
                      src={request.images[0] || '/default-image.jpg'} 
                      alt={request.brand} 
                      className="w-full h-48 object-cover rounded-xl"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="w-2/3 space-y-4">
                    <h2 className="text-xl font-bold">{request.brand} {request.model} {request.year}</h2>
                    {/* <p className="font-medium">Year: {request.year}</p> */}
                    <p className="font-medium">Location: {request.district} {request.city}</p>
                    <p className="font-medium">Condition: {request.condition}</p>
                    {/* <p className="font-medium">Brand: {request.brand}</p> */}
                    {/* <p className="font-medium">Model: {request.model}</p> */}
                    <p className="font-medium">Mileage: {request.mileage}</p>
                    <p className="font-medium">Fuel Type: {request.fueltype}</p>
                    <p className="font-medium">Engine Capacity: {request.engine_capacity}</p>
                    <p className="font-medium">Transmission: {request.transmission}</p>
                    <p className="font-medium">Body Type: {request.body_type}</p>
                    <p className="font-medium">Price: {request.price}</p>
                    <p className="font-medium">Description: {request.description}</p>
                    <p className="font-medium">Status: {request.status}</p>

                    {request.status == 'pending' && (
                      <button
                        onClick={() => handleRemoveFromList(request._id)}
                        className="text-white bg-gradient-to-r from-red-500 to-red-700 py-2 px-4 rounded-full"
                      >
                        Cancel the request
                      </button>
                    )}
                    {request.status == 'accept' && (
                      <button
                        onClick={() => handleRemoveFromList(request._id)}
                        className="text-white bg-gradient-to-r from-green-500 to-green-700 py-2 px-4 rounded-full"
                      >
                        Promote
                      </button>
                    )}
                    
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

export default MySellRequest;
