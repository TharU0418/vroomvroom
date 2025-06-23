'use client';

import React, {useState } from 'react'


interface FormData {
  userId: string;
  pickupTime: string;
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  message: string;
  type: string;  // Set 'full-day' type in the interface
}

function DrinkDrive() {

 // const [user, setUser] = useState<User | null>(null);
const [typeSet, setTypeSet] = useState('drinkdrive'); // Set default value to 'full-day'

 const [formData, setFormData] = useState<FormData>({
  userId: '',
  pickupDate: '',
  returnDate: '',
  pickupTime: '',
  pickupLocation: '',
  message: '',
  type: 'drinkdrive',  // Set default type value to 'full-day'
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

         
  console.log('formData', formData);

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

    console.log('formData.userId', formData.userId);
    console.log('formData.type', formData.type); // Check the type value
setTypeSet('full-day')

    console.log('formData', formData); // Check the type value
    console.log('formData.type', formData.type); // Check the type value


    try {

      const res = await fetch('/api/hire-requests', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ ...formData, type: 'full-day' }),
});


      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to submit request');
      }

      alert('Request registered successfully!');
      setNotificationMessage(`Request registered successfully!`);
      setShowNotification(true);
      
      // Hide notification after 3 seconds
      setTimeout(() => setShowNotification(false), 5000);
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
        <h1 className="text-4xl font-bold mb-4 text-center">Drink and Drive</h1>

        <p>
         With Drive Me Home, you never have to risk driving under the influence. If you've been drinking and can't drive safely, 
         simply book a professional driver who will come to your location and drive your vehicle to your desired destination. 
         This service ensures both your safety and the safety of others on the road, while also allowing you to get your 
         car home without hassle. It&rsquo;s a responsible choice for nights out, parties, or any occasion where drinking is involved.
        </p>


        <form onSubmit={handleSubmit} className="mt-8 space-y-4">

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-white">Pickup Date</label>
              <input
                type="date"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white">Return Date</label>
              <input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-white">Pickup Time</label>
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

export default DrinkDrive