'use client';

import { useAuth } from '@/hooks/useAuth';
import { DecodedToken, decodeToken } from '@/utils/decodeToken';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface FormData {
  userId: string;
  pickupTime: string;
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  message: string;
  type: string;  // Set 'full-day' type in the interface
  status:string;
}

function OneTimeDrive() {
  //const [typeSet, setTypeSet] = useState('one-time'); // Set default value to 'full-day'

  const [formData, setFormData] = useState<FormData>({
    userId: '',
    pickupDate: '',
    returnDate: '',
    pickupTime: '',
    pickupLocation: '',
    message: '',
    type: 'one-time',  // Set default type value to 'full-day'
    status:'pending'
  });

const router = useRouter();
  const [showNotification, setShowNotification] = useState(false);
      const [notificationMessage, setNotificationMessage] = useState('');
    
  
      const Notification = () => (
        <div className="fixed bottom-4 right-4 z-50">
          
          <div className="bg-green-500 text-white px-8 py-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out animate-fadeInUp">
            <div className="flex items-center">
              
              <span className="font-semibold text-xl">{notificationMessage}</span>
            </div>
          </div>
        </div>
      );
  
    const {user} = useAuth();
  const [userDetails, setUserDetails] = useState<DecodedToken | null>(null);

       useEffect(() => {
            const token = localStorage.getItem('idToken');
            if (token) {
              const decoded = decodeToken(token);
              console.log('Decoded token:', decoded);
        
              if (decoded && decoded.email && decoded.given_name) {
                setUserDetails({
                  email: decoded.email,
                  given_name: decoded.given_name,
                  nickname:decoded.nickname
                });
              }
            }
          }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

 

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_HIRE}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ ...formData, type: 'one-time',status:'pending', userId: userDetails?.email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to submit request');
      }
  setNotificationMessage(`Request registered successfully!`);
      setShowNotification(true);
                router.push('/hire');

      // Hide notification after 3 seconds
      setTimeout(() => setShowNotification(false), 5000);
    //  alert('Request registered successfully!');
   } catch (error: unknown) {
  if (error instanceof Error) {
    alert(`Error: ${error.message}`);
  } else {
    alert('An unknown error occurred');
  }
}
  };

  

  return (
<div className="min-h-screen bg-white p-4 text-black flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 max-w-6xl w-full mx-4 p-8 mt-20  ">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center text-red-800">One Time Driver</h1>

        <p>
         With our One-Time Booking service, you can conveniently hire a skilled driver on an hourly basis for any day-to-day need. 
         Whether you&rsquo;re heading to a meeting, running errands, attending an event, or simply prefer not to drive for a few hours, 
         this flexible option ensures you have a reliable driver exactly when you need one—without any long-term commitment. 
         Just choose the date, set your preferred hours, and we&rsquo;ll handle the rest.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-black">Date</label>
              <input
                type="date"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent placeholder-gray-500"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="">Time</label>
            <input
              type="time"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent placeholder-gray-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="">Pickup Location</label>
            <textarea
              name="pickupLocation"
              rows={2}
              value={formData.pickupLocation}
              onChange={handleChange}
              placeholder="e.g. colombo"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent placeholder-gray-500"
              required
            />
          </div>




          <div className="flex flex-col">
            <label className="">Message</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="I want ..."
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent placeholder-gray-500"
              required
            />
          </div>

          {/* Only show the button if the user is logged in */}
            {user ? (
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="bg-red-800 hover:bg-red-900 text-white py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
              >
                Request a driver
              </button>
            </div>
          ) : (
            <div className="flex justify-center items-center mt-4">
              <p className="text-white">Please log in.</p>
            </div>
          )}
        </form>
      </div>
                                    {showNotification && <Notification />}

    </div>
  );
}

export default OneTimeDrive;
