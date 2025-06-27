import React, { useEffect, useState } from 'react'

export interface RequestsCard {
   _id: string;
  driverId: string;
  userId: string;
  days: number;
    pickupTime: string;
message: string;
  pickupDate: String;
  returnDate: string;
  pickupLocation: string;
  type: string;
  status: string
}

    
export interface DriverCard {
  _id: string;
  brand: string;
  model: string;
  price: number;
  year: number;
  images: string[];
  location?: string;
  description?: string; // ← Add this if it's used
}

interface User {
  email: string;
  userId: string;
}


function HireRequests() {

    const [hireRequests, setHireRequests] = useState<RequestsCard[]>([]);
    const [drivers, setDrivers] = useState<DriverCard[]>([]);
    //const [priceRange, setPriceRange] = useState(1000);
    //const [selectedType, setSelectedType] = useState('all');
    const [loading, setLoading] = useState(true);
    //const [user, setUser] = useState<User | null>(null);
    //const [error, setError] = useState<string | null>(null);
    // const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
    //const [formData, setFormData] = useState<{ [key: string]: { star: number; reason: string } }>({});
  const [rentRequests, setRentRequests] = useState<RequestsCard[]>([]);

    useEffect(() => {
      const fetchRentRequests = async () => {
        try {
          const response = await fetch('https://kr8d0cvo4a.execute-api.eu-north-1.amazonaws.com/hire/hire-requests');
          const contentType = response.headers.get('content-type');
    
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
    
          if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            console.log('data', data)
            //console.log('Fetched rent-requests:', data);
            setHireRequests(data); // ✅ Set the fetched data into state
            setLoading(false); // ✅ Set loading to false after fetching
            console.log('hire-requests', hireRequests,data)
          } else {
            throw new Error('Expected JSON response');
          }
        } catch (error) {
          console.error('Failed to fetch rent-requests:', error);
          setLoading(false); // ✅ Ensure loading state ends even on error
        }
      };

      const fetchCars = async () => {
        try {
            const response = await fetch('/api/check-drivers');
            const contentType = response.headers.get('content-type');

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            if (contentType && contentType.includes('application/json')) {
                const data = await response.json();
                console.log('Fetched drivers:', data);
                setDrivers(data); // ✅ Set the fetched data into state
                setLoading(false); // ✅ Set loading to false after fetching
                console.log('drivers', drivers)
            } else {
                throw new Error('Expected JSON response');
            }
        } catch (error) {
            console.error('Failed to fetch cars:', error);
            setLoading(false); // ✅ Ensure loading state ends even on error
        }
    };

    

    fetchRentRequests();
    fetchCars();
    }, []);

    useEffect(() => {
  console.log('Updated hireRequests:', hireRequests);
}, [hireRequests]);

  console.log('Updated hireRequests:', hireRequests);

  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const Notification = () => (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out animate-fadeInUp">
        <div className="flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span className="font-semibold">{notificationMessage}</span>
        </div>
      </div>
    </div>
  );

    const handleCancelRequest = async (requestId: string) => {
    try {
      const response = await fetch(`/api/hire-requests/${requestId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'reject' }),
      });


      if (response.ok) {
        setRentRequests(prev => prev.map(req => 
          req._id === requestId ? { ...req, status: 'reject' } : req
        ));

        console.log('rentRequests',rentRequests)

        setNotificationMessage('Status updated');
      setShowNotification(true);
      
      // Hide notification after 3 seconds
      setTimeout(() => setShowNotification(false), 3000);

      } else {
        throw new Error('Failed to cancel rent request');
      }
    } catch (error) {
      console.error('Error canceling rent request:', error);
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
        setRentRequests(prev => prev.map(req => 
          req._id === requestId ? { ...req, status: 'accept' } : req
        ));
         setNotificationMessage('Status updated');
      setShowNotification(true);
      
      // Hide notification after 3 seconds
      setTimeout(() => setShowNotification(false), 3000);
      } else {
        throw new Error('Failed to accept rent request');
      }
    } catch (error) {
      console.error('Error accepting rent request:', error);
    }
  };

  
    if (loading) return <div className="text-white text-center mt-10">Loading rent-requests...</div>;
        return (
            <div className="glass-container bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-6xl w-full mx-4 p-8">
              <h1 className="text-xl font-bold text-black mb-1 text-center">Hire Driver Requests</h1>              
              <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">                        
                  {hireRequests.map(hireRequest => {
                   // const matchedCar = drivers.find(driver => driver._id === hireRequest.driverId);
                   // const isMyRequest = user?.email === hireRequest.userId;
                   // const currentForm = formData[hireRequest._id] || { star: 0, reason: '' };
                    const status = hireRequest.status?.toLowerCase();
                    // Show only current user's requests
                  //  if (!isMyRequest) return null;
                      return (
                        <div
                          key={hireRequest._id}
                          className={`rounded-xl p-4 shadow-lg backdrop-blur cursor-pointer border border-white/20 ${
                            hireRequest.status === 'reject'
                              ? 'bg-red-500/30'
                              : hireRequest.status === 'pending'
                              ? 'bg-yellow-500/30'
                              : hireRequest.status === 'available'
                              ? 'bg-green-500/30'
                              : 'bg-white/10'
                          }`}
                        >
                          <div>
                            {/* <div className="md:w-1/2"> */}
                              <h2 className="text-xl text-black font-semibold mb-1">
                                {hireRequest?.type}
                              </h2>
                              <p className="text-black text-m mb-2">Status {hireRequest?.status}</p>
                              <p className="text-black text-m mb-2">Pickup Date: {hireRequest?.pickupDate} </p>
                              <p className="text-black text-m mb-2">return Date for {hireRequest?.returnDate} </p>
                              <p className="text-black text-m mb-2">Pickup Time: {hireRequest?.pickupTime} </p>
                              <p className="text-black text-m mb-2">Description {hireRequest?.message}</p>

                             {hireRequest?.reason !== '1' && (
  <div>
    <p className="text-black text-m mb-2">Driver Name {hireRequest?.driverId}</p>
    <p className="text-black text-m mb-2">Driver Name {hireRequest?.reason}</p>
  </div>
)}

                            {/* </div> */}
                          </div>
                          <div className="mt-4 space-y-2">                               
                            <div className="flex gap-4 mt-2">
                              

                              {hireRequest?.status == 'pending' && (
                      <button
                      onClick={() => handleCancelRequest(hireRequest._id)}
                        className="text-white bg-gradient-to-r from-red-500 to-red-700 py-2 px-4 rounded-full"
                      >
                        Cancel the request
                      </button>
                    )}
                    {hireRequest?.status == 'available' && (
                      <button
                        onClick={() => handleCompleteRequest(hireRequest._id)}
                        className="text-white bg-gradient-to-r from-green-500 to-green-700 py-2 px-4 rounded-full"
                      >
                        Accept the driver
                      </button>
                    )}
                    
                            </div>
                          </div>
                        </div>
                            );
                    })}
                  </div>
              </div>
                          {showNotification && <Notification />}

          </div>
      )
}

export default HireRequests