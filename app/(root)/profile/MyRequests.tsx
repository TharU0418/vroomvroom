import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { IoIosCloseCircle, IoIosArrowDown, IoIosArrowUp, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCar, FaCalendarAlt, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';

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
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  // Calculate pagination values
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = rentRequests.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(rentRequests.length / itemsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch rent requests
        const requestsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL_RENT_REQUESTS}`);
        if (!requestsRes.ok) throw new Error(`HTTP error! status: ${requestsRes.status}`);
        const requestsData = await requestsRes.json();
        const filteredRequests = requestsData.filter((requestsData1: { userId: string }) => 
            requestsData1.userId === user.email
        );
        setRentRequests(filteredRequests);
        
        // Fetch cars
        const carsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL_RENT}`);
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

  const handleRemoveFromList = async (requestId: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_RENT_REQUESTS}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: requestId, history: true }),
      });

      if (response.ok) {
        setRentRequests(prev => prev.filter(req => req.id !== requestId));
      } else {
        throw new Error('Failed to update rent request');
      }
    } catch (error) {
      console.error('Error removing from list:', error);
    }
  };

  const handleCancelRequest = async (requestId: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_RENT_REQUESTS}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: requestId, status: 'cancel' }),
      });

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
        body: JSON.stringify({ id: requestId, status: 'completed' }),
      });

      if (response.ok) {
        setRentRequests(prev => prev.map(req => 
          req.id === requestId ? { ...req, status: 'completed' } : req
        ));
      } else {
        throw new Error('Failed to complete rent request');
      }
    } catch (error) {
      console.error('Error completing rent request:', error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending': return 'bg-yellow-100 border-yellow-500';
      case 'accept': return 'bg-green-100 border-green-500';
      case 'on-going': return 'bg-blue-100 border-blue-500';
      case 'reject': return 'bg-red-100 border-red-500';
      case 'cancel': return 'bg-gray-100 border-gray-500';
      case 'completed': return 'bg-purple-100 border-purple-500';
      default: return 'bg-gray-100 border-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending': return 'Pending';
      case 'accept': return 'Accepted';
      case 'on-going': return 'On Going';
      case 'reject': return 'Rejected';
      case 'cancel': return 'Cancelled';
      case 'completed': return 'Completed';
      default: return status;
    }
  };

  const toggleCardExpand = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const filteredRequests = statusFilter === 'all' 
    ? rentRequests.filter(req => 
        !req.history && 
        ['accept', 'on-going', 'pending', 'reject'].includes(req.status)
      )
    : rentRequests.filter(req => 
        !req.history && 
        req.status.toLowerCase() === statusFilter
      );

      const handlePageChange = useCallback((newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [totalPages]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [statusFilter]);

  // Pagination component
  const Pagination = () => (
    <div className="flex justify-center items-center mt-8 gap-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-full ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-blue-500 hover:bg-blue-50'}`}
      >
        <IoIosArrowBack size={20} />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all ${
            currentPage === page
              ? 'bg-blue-500 text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-full ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-blue-500 hover:bg-blue-50'}`}
      >
        <IoIosArrowForward size={20} />
      </button>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen p-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Your Car Rental Requests</h1>
            <div className="relative">
              <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
                <span>Loading...</span>
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow p-4 animate-pulse">
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

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 max-w-2xl w-full p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Error Loading Requests</h1>
          <p className="text-gray-600 mb-6">{error}</p>
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
    <div className="min-h-screen p-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Your Car Rental Requests</h1>
          <div className="relative">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow border border-gray-200"
            >
              <span>Filter</span>
              <IoIosArrowDown size={16} />
            </button>
            {showFilters && (
              <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg p-4 w-48 z-10">
                <div className="text-sm font-medium mb-2">Status</div>
                <div className="space-y-2">
                  {['all', 'pending', 'accept', 'on-going', 'reject'].map(status => (
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
            <h2 className="text-xl font-bold text-gray-700 mb-2">No Current Requests</h2>
            <p className="text-gray-500 mb-6">You have no active car rental requests at this time.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {currentItems.map((request) => {
              const car = cars.find(c => c.id === request.carId);
              
              return car ? (
                <div 
                  key={request.id}
                  className="bg-white rounded-xl shadow overflow-hidden transition-all duration-300"
                >
                  <div 
                    className="p-4 cursor-pointer"
                    onClick={() => toggleCardExpand(request.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h2 className="font-bold text-gray-800">{car.brand} {car.model}</h2>
                        <span className="text-gray-500 text-sm">{car.year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                          {getStatusText(request.status)}
                        </div>
                        {expandedCard === request.id ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4 mt-4">
                      <div className="w-full md:w-1/3">
                        <div className="relative w-full h-40 rounded-xl overflow-hidden">
                          <Image 
                            src={car.images[0] || '/default-image.jpg'} 
                            alt={`${car.brand} ${car.model}`}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                      
                      <div className="w-full md:w-2/3">
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-gray-400" />
                            <span>{request.pickupLocation}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-gray-400" />
                            <span>{request.pickupDate}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaInfoCircle className="text-gray-400" />
                            <span>{request.days} days</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-gray-400" />
                            <span>{request.returnDate}</span>
                          </div>
                        </div>
                        
                        <div className="mt-4 flex items-center">
                          <span className="text-lg font-bold text-blue-600">Rs {car.price}/day</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {expandedCard === request.id && (
                    <div className="px-4 pb-4 border-t border-gray-100 mt-2 pt-4 animate-fadeIn">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium text-gray-700">Car Details</h3>
                        <button 
                          className="text-red-500 hover:text-red-700"
                          onClick={() => handleRemoveFromList(request.id)}
                        >
                          <IoIosCloseCircle size={24} />
                        </button>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Brand</span>
                            <p className="font-medium">{car.brand}</p>
                          </div>
                          <div>
                            <span className="text-gray-500">Model</span>
                            <p className="font-medium">{car.model}</p>
                          </div>
                          <div>
                            <span className="text-gray-500">Year</span>
                            <p className="font-medium">{car.year}</p>
                          </div>
                          <div>
                            <span className="text-gray-500">Location</span>
                            <p className="font-medium">{car.location || 'N/A'}</p>
                          </div>
                        </div>
                        
                        <div className="pt-4 flex gap-3">
                          {request.status === 'pending' && (
                            <button
                              onClick={() => handleCancelRequest(request.id)}
                              className="flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium"
                            >
                              Cancel Request
                            </button>
                          )}
                          {request.status === 'accept' && (
                            <button
                              onClick={() => handleCompleteRequest(request.id)}
                              className="flex-1 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium"
                            >
                              Mark as Complete
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : null;
            })}
                        {totalPages > 1 && <Pagination />}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyRequests;