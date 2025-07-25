'use client';

import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'


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

function DrinkDrive() {

 // const [user, setUser] = useState<User | null>(null);
//const [typeSet, setTypeSet] = useState('drinkdrive'); // Set default value to 'full-day'
 const [formData, setFormData] = useState<FormData>({
  userId: '',
  pickupDate: '',
  returnDate: '',
  pickupTime: '',
  pickupLocation: '',
  message: '',
  type: 'drinkdrive',  // Set default type value to 'full-day'
  status:'pending'
});

const router = useRouter();
  const [showNotification, setShowNotification] = useState(false);
      const [notificationMessage, setNotificationMessage] = useState('');
    const [loading, setLoading] = useState(false);
    
      const {user} = useAuth();

    
  
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
    setLoading(true);

    // if (!formData.userId) {
    //   alert('User ID is missing. Please log in and try again.');
    //   return;
    // }

    console.log('formData.userId', formData.userId);
    console.log('formData.type', formData.type); // Check the type value
//setTypeSet('full-day')

    console.log('formData', formData); // Check the type value
    console.log('formData.type', formData.type); // Check the type value


    try {

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_HIRE}`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ ...formData, status:'pending', type: 'drinkdrive', userId: user?.email }),
});


      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to submit request');
      }

    //  alert('Request registered successfully!');
      setNotificationMessage(`Request registered successfully!`);
      setShowNotification(true);
          router.push('/hire');

      // Hide notification after 3 seconds
      setTimeout(() => setShowNotification(false), 5000);
    } catch (error: unknown) {
  if (error instanceof Error) {
    alert(`Error: ${error.message}`);
  } else {
    alert('An unknown error occurred');
  }
}finally{
      setLoading(false);
}
  };

  return (
   <div className="min-h-screen bg-white p-4 text-black flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 max-w-6xl w-full mx-4 p-8 mt-20  ">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center text-red-800">Drink and Drive</h1>

        <p>
         With Drive Me Home, you never have to risk driving under the influence. If you&rsquo;ve been drinking and can&rsquo;t drive safely, 
         simply book a professional driver who will come to your location and drive your vehicle to your desired destination. 
         This service ensures both your safety and the safety of others on the road, while also allowing you to get your 
         car home without hassle. It&rsquo;s a responsible choice for nights out, parties, or any occasion where drinking is involved.
        </p>


        <form onSubmit={handleSubmit} className="mt-8 space-y-4">

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="">Pickup Date</label>
              <input
                type="date"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent placeholder-gray-500"
                required
              />
            </div>

            {/* <div className="flex flex-col">
              <label className="text-white">Return Date</label>
              <input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black"
                required
              />
            </div> */}
          </div>

          <div className="flex flex-col">
            <label className="">Pickup Time</label>
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
  disabled={loading}
  className={`bg-red-800 text-white py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 ${
    loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-900'
  }`}
>
  {loading ? 'Submitting...' : 'Request the driver'}
</button>
            </div>
          ) : (
            <div className="flex justify-center items-center mt-4">
               <p className="text-black bg-white p-4 rounded-lg w-full text-center">
                Please sign in to hire a driver  <Link href="/sign" className="text-red-700 hover:underline">
                Sign In
              </Link>
                </p>
            </div>
          )}
         
        </form>

      </div>
                                          {showNotification && <Notification />}
 <div className="fixed bottom-6 right-6 z-50">
      
        
        <button
onClick={() => {
    window.open('https://wa.me/94740662095', '_blank');

  }}          className="bg-red-600 text-white rounded-full p-4 shadow-lg hover:bg-red-700 transition-all"
          aria-label="Open chat"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default DrinkDrive