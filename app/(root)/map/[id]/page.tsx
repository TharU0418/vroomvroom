'use client';
import { useAuth } from "@/hooks/useAuth";
import React, { useState, useRef, useEffect } from "react";

interface Location {
  latitude: number;
  longitude: number;
  timestamp: string;
}

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

interface PageProps {
  params: {
    id: string
  }
}


function MyLocation({ params }: PageProps) {
  const [tracking, setTracking] = useState<boolean>(false);
  const [locations, setLocations] = useState<Location[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [hireRequest, setHireRequest] = useState<RequestsCard | null>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
    const email = user?.email;

  useEffect(() => {
    const fetchHireRequest = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_HIRE}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        const foundRequest = data.find((request: RequestsCard) => request.id === params.id);
        setHireRequest(foundRequest || null);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch hire request:', error);
        setLoading(false);
      }
    };

    fetchHireRequest();
  }, []);

  const sendLocationToAPI = async (location: Location) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_LOCATION}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...location,
          hireRequestId: params.id,
          driverId: user?.id,
          userId:email,
          rideId:params.id,
        }),
      });

      if (!response.ok) {
        console.error("Failed to send location:", await response.text());
      } else {
        console.log("Location sent successfully:", location);
      }
    } catch (error) {
      console.error("Error sending location:", error);
    }
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const timestamp = new Date().toISOString();
        const newLocation: Location = { latitude, longitude, timestamp };

        setLocations((prev) => [...prev, newLocation]);
        sendLocationToAPI(newLocation);
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  };

  const startRide = () => {
    if (tracking) return;
    setTracking(true);
    getLocation();
    intervalRef.current = setInterval(getLocation, 2 * 60 * 1000);
  };

  const stopRide = () => {
    setTracking(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading request details...</div>
      </div>
    );
  }

  if (!hireRequest) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Hire request not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto pt-20">
        <h1 className="text-3xl font-bold mb-8 text-center text-red-500">Ride Tracking</h1>
        
        {/* Hire Request Card */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border-l-4 border-red-500">
          <h2 className="text-2xl font-semibold mb-4 text-white">Hire Request Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex">
                <span className="text-gray-400 w-32">Pickup Location:</span>
                <span className="text-white">{hireRequest.pickupLocation}</span>
              </div>
              <div className="flex">
                <span className="text-gray-400 w-32">Pickup Date:</span>
                <span className="text-white">{new Date(hireRequest.pickupDate).toLocaleDateString()}</span>
              </div>
              <div className="flex">
                <span className="text-gray-400 w-32">Return Date:</span>
                <span className="text-white">{new Date(hireRequest.returnDate).toLocaleDateString()}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex">
                <span className="text-gray-400 w-32">Pickup Time:</span>
                <span className="text-white">{hireRequest.pickupTime}</span>
              </div>
              <div className="flex">
                <span className="text-gray-400 w-32">Duration:</span>
                <span className="text-white">{hireRequest.days} days</span>
              </div>
              <div className="flex">
                <span className="text-gray-400 w-32">Status:</span>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  hireRequest.status === 'approved' ? 'bg-green-500' : 
                  hireRequest.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'
                }`}>
                  {hireRequest.status}
                </span>
              </div>
            </div>
          </div>
          
          {hireRequest.message && (
            <div className="mt-4 pt-4 border-t border-gray-700">
              <span className="text-gray-400 block mb-2">Message:</span>
              <p className="text-white">{hireRequest.message}</p>
            </div>
          )}
        </div>

        {/* Tracking Controls */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-white">Location Tracking</h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={startRide} 
              disabled={tracking}
              className={`px-6 py-3 rounded-lg font-semibold text-white transition-all ${
                tracking 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-red-600 hover:bg-red-700'
              }`}
            >
              {tracking ? 'Tracking in Progress' : 'Start Ride Tracking'}
            </button>
            
            <button 
              onClick={stopRide} 
              disabled={!tracking}
              className={`px-6 py-3 rounded-lg font-semibold text-white transition-all ${
                !tracking 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              Stop Tracking
            </button>
          </div>
          
          <p className="text-center text-gray-400 mt-4">
            {tracking 
              ? 'Tracking your location every 2 minutes' 
              : 'Click "Start Ride Tracking" to begin'}
          </p>
        </div>

        {/* Location History */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-white">Location History</h2>
          
          {locations.length === 0 ? (
            <p className="text-gray-400 text-center py-4">No location data recorded yet</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">#</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Latitude</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Longitude</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {locations.map((loc, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-white">{index + 1}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-white">{loc.latitude.toFixed(6)}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-white">{loc.longitude.toFixed(6)}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-white">
                        {new Date(loc.timestamp).toLocaleTimeString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyLocation;