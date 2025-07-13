import React, { useEffect, useState } from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import { FaChevronDown, FaChevronUp, FaUser } from 'react-icons/fa';

export interface RequestsCard {
  id: string;
  driverId: string;
  userId: string;
  days: number;
  pickupTime: string;
  message: string;
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  type: string;
  status: string;
  reason: string;
}

export interface DriverCard {
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

function HireRequests({ user }: { user: User }) {
  const [hireRequests, setHireRequests] = useState<RequestsCard[]>([]);
  //const [drivers, setDrivers] = useState<DriverCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [statusFilter, setStatusFilter] = useState('all');
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  useEffect(() => {
    const fetchRentRequests = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_HIRE_REQUESTS}`);
        const contentType = response.headers.get('content-type');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          setHireRequests(data);
          setLoading(false);
        } else {
          throw new Error('Expected JSON response');
        }
      } catch (error) {
        console.error('Failed to fetch rent-requests:', error);
        setLoading(false);
      }
    };

    console.log('user', user)

    // const fetchDrivers = async () => {
    //   try {
    //     const response = await fetch('/api/check-drivers');
    //     const contentType = response.headers.get('content-type');

    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
    //     }

    //     if (contentType && contentType.includes('application/json')) {
    //       const data = await response.json();
    //       setDrivers(data);
    //     } else {
    //       throw new Error('Expected JSON response');
    //     }
    //   } catch (error) {
    //     console.error('Failed to fetch drivers:', error);
    //   }
    // };

    fetchRentRequests();
   // fetchDrivers();
  }, []);

  const handleCancelRequest = async (requestId: string) => {
    try {
      const response = await fetch(`/api/hire-requests/${requestId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'reject' }),
      });

      if (response.ok) {
        setHireRequests(prev => 
          prev.map(req => 
            req.id === requestId ? { ...req, status: 'reject' } : req
          )
        );

        setNotificationMessage('Request canceled');
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
      } else {
        throw new Error('Failed to cancel request');
      }
    } catch (error) {
      console.error('Error canceling request:', error);
    }
  };

  const handleCompleteRequest = async (requestId: string) => {
    try {
      const response = await fetch(`/api/hire-requests/${requestId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'accept' }),
      });

      if (response.ok) {
        setHireRequests(prev => 
          prev.map(req => 
            req.id === requestId ? { ...req, status: 'accept' } : req
          )
        );
        setNotificationMessage('Request accepted');
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
      } else {
        throw new Error('Failed to accept request');
      }
    } catch (error) {
      console.error('Error accepting request:', error);
    }
  };

  const toggleCardExpand = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending': return 'bg-yellow-500/10 border-yellow-500/50';
      case 'accept': return 'bg-green-500/10 border-green-500/50';
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

  // const getStatusIcon = (status: string) => {
  //   switch (status.toLowerCase()) {
  //     case 'pending': return <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>;
  //     case 'accept': return <div className="w-3 h-3 rounded-full bg-green-500"></div>;
  //     case 'reject': return <div className="w-3 h-3 rounded-full bg-red-500"></div>;
  //     case 'cancel': return <div className="w-3 h-3 rounded-full bg-gray-500"></div>;
  //     default: return <div className="w-3 h-3 rounded-full bg-blue-500"></div>;
  //   }
  // };

  const filteredRequests = statusFilter === 'all' 
    ? hireRequests 
    : hireRequests.filter(req => req.status.toLowerCase() === statusFilter);

  if (loading) {
    return (
      <div className="min-h-screen p-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Hire Driver Requests</h1>
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
                
                <div className="mt-4 space-y-3">
                  <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
                
                <div className="h-10 bg-gray-200 rounded w-1/3 mt-4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const Notification = () => (
    <div className="fixed bottom-4 right-4 z-50 animate-fadeInUp">
      <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center">
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span className="font-semibold">{notificationMessage}</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Hire Driver Requests</h1>
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
                <FaUser className="text-gray-400 text-2xl" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-700 mb-2">No Hire Requests Found</h2>
            <p className="text-gray-500 mb-6">You have not made any driver hire requests yet.</p>
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
                      <h2 className="font-bold text-gray-800">{request.type}</h2>
                      <span className="text-gray-500 text-sm">ID: {request.id.slice(-6)}</span>
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
                  
                  <div className="mt-4">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex flex-col">
                        <span className="text-gray-500">Pickup Date</span>
                        <span className="font-medium">{request.pickupDate}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-500">Return Date</span>
                        <span className="font-medium">{request.returnDate}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-500">Pickup Time</span>
                        <span className="font-medium">{request.pickupTime}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-500">Duration</span>
                        <span className="font-medium">{request.days} days</span>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex items-center gap-1 text-sm">
                      <span className="text-gray-500">Location:</span>
                      <span>{request.pickupLocation}</span>
                    </div>
                  </div>
                </div>
                
                {expandedCard === request.id && (
                  <div className="px-4 pb-4 border-t border-gray-100 mt-2 pt-4 animate-fadeIn">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-medium text-gray-700 mb-1">Description</h3>
                        <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{request.message}</p>
                      </div>
                      
                      {request.reason && (
                        <div className="mt-2">
                          <h3 className="font-medium text-gray-700 mb-1">Reason</h3>
                          <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{request.reason}</p>
                        </div>
                      )}
                      
                      <div className="mt-4 flex gap-3">
                        {request.status === 'pending' && (
                          <button
                            onClick={() => handleCancelRequest(request.id)}
                            className="flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium flex items-center justify-center gap-2"
                          >
                            <IoIosCloseCircle size={20} />
                            Cancel Request
                          </button>
                        )}
                        
                        {request.status === 'available' && (
                          <button
                            onClick={() => handleCompleteRequest(request.id)}
                            className="flex-1 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium flex items-center justify-center gap-2"
                          >
                            Accept Driver
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {showNotification && <Notification />}
      </div>
    </div>
  );
}

export default HireRequests;