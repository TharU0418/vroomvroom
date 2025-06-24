'use client';

import React, { useState } from 'react';

interface FormData {
  userId: string;
  pickupTime: string;
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  message: string;
  type: string;  // Set 'full-day' type in the interface
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
  });


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
  
    

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.userId) {
      alert('User ID is missing. Please log in and try again.');
      return;
    }

    try {
      const res = await fetch('/api/hire-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ ...formData, type: 'one-time' }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to submit request');
      }
  setNotificationMessage(`Request registered successfully!`);
      setShowNotification(true);
      
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 via-red-700 to-red-900 p-4 text-white">
      <div className="glass-container bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-6xl w-full mx-4 p-8 mt-20 justify-center ">
        <h1 className="text-4xl font-bold mb-4 text-center">One Time Driver</h1>

        <p>
         With our One-Time Booking service, you can conveniently hire a skilled driver on an hourly basis for any day-to-day need. 
         Whether you&rsquo;re heading to a meeting, running errands, attending an event, or simply prefer not to drive for a few hours, 
         this flexible option ensures you have a reliable driver exactly when you need one—without any long-term commitment. 
         Just choose the date, set your preferred hours, and we&rsquo;ll handle the rest.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-white">Date</label>
              <input
                type="date"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-white">Time</label>
            <input
              type="time"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleChange}
              className="w-1/2 p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white">Pickup Location</label>
            <textarea
              name="pickupLocation"
              rows="2"
              value={formData.pickupLocation}
              onChange={handleChange}
              placeholder="e.g. colombo"
              className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black placeholder-black"
              required
            />
          </div>




          <div className="flex flex-col">
            <label className="text-white">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="I want ..."
              className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black placeholder-black"
              required
            />
          </div>

          {/* Only show the button if the user is logged in */}
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="bg-white hover:bg-red-200 text-red-500 py-3 px-6 rounded shadow mt-10 justify-center"
              >
                Request the driver
              </button>
            </div>
       
        </form>
      </div>
                                    {showNotification && <Notification />}

    </div>
  );
}

export default OneTimeDrive;
