'use client';

import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'


interface FormData {
  userId: string;
  pickupTime: string;
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  message: string;
  type: string;  // Set 'full-day' type in the interface
  status:string;
  driverStatus:string;
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
  status:'pending',
  driverStatus:'not_assigned'
});

const router = useRouter();
  const [showNotification, setShowNotification] = useState(false);
      const [notificationMessage, setNotificationMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const searchParams = useSearchParams();
const mode = searchParams ? searchParams.get('mode') : null;

    useEffect(() => {
  if (mode === 'lady') {
    setFormData(prev => ({
      ...prev,
      type: 'lady-drinkdrive'
    }));
  }
}, [mode]);
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

//setTypeSet('full-day')


    try {

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_HIRE}`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ ...formData, status:'pending', userId: user?.email }),
});


      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to submit request');
      }

    //  alert('Request registered successfully!');
      setNotificationMessage(`Request registered successfully!`);
      setShowNotification(true);
      // Redirect conditionally based on mode
if (mode === 'lady') {
  router.push('/ladycab');
} else {
  router.push('/hire');
}

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

  
  const [isVisible, setIsVisible] = useState(false);
    const [isPulsing, setIsPulsing] = useState(true);
  
    const [showWelcome, setShowWelcome] = useState(true);
      const [isLoading, setIsLoading] = useState(true);
    
      
      const welcomeRef = useRef<HTMLDivElement>(null);
    
      useEffect(() => {
        // Button appears with fade-in animation after page load
        const appearTimer = setTimeout(() => {
          setIsVisible(true);
        }, 500);
    
        // Loading state for the welcome message
        const loadingTimer = setTimeout(() => {
          setIsLoading(false);
        }, 1500);
    
        // Hide welcome message after 5 seconds
        const hideTimer = setTimeout(() => {
          setShowWelcome(false);
        }, 5000);
    
        // Pulse animation stops after 3 pulses
        const pulseTimer = setTimeout(() => {
          setIsPulsing(false);
        }, 3000);
    
        return () => {
          clearTimeout(appearTimer);
          clearTimeout(loadingTimer);
          clearTimeout(hideTimer);
          clearTimeout(pulseTimer);
        };
      }, []);

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
  <div className=" relative overflow-hidden">
      {/* Background pattern */}
      
      
          
      
      {/* Welcome message */}
      {showWelcome && (
        <div 
          ref={welcomeRef}
          className="fixed bottom-24 right-6 z-50 bg-white rounded-lg shadow-xl p-4 max-w-xs transition-all duration-500"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <div className="flex items-start">
            <div className="mr-3">
              {isLoading ? (
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-500"></div>
              ) : (
                <div className="bg-green-100 p-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            <div>
              <p className="font-medium text-gray-800">
                {isLoading ? 'Setting up WhatsApp booking...' : 'Click here to book through WhatsApp'}
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 right-6 transform translate-y-4 -z-10">
            <div className="w-4 h-4 bg-white rotate-45"></div>
          </div>
        </div>
      )}
      
      {/* WhatsApp Button */}
     <div className="fixed bottom-6 right-6 z-50 group">
  <button
    onClick={() => window.open('https://wa.me/94740343095?text=Welcome', '_blank')}
    aria-label="Chat on WhatsApp"
    className={`
      bg-[#25D366] text-white rounded-full p-4 shadow-xl relative
      transition-all duration-700 ease-out
      hover:bg-[#128C7E] hover:scale-105 hover:shadow-2xl
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      ${isPulsing ? 'animate-pulse-slow' : 'animate-float'}
    `}
  >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-current"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
           <span className="
      absolute right-14 top-1/2 -translate-y-1/2
      bg-gray-800 text-white text-sm font-medium px-3 p-4 rounded
      opacity-0 group-hover:opacity-100 transition-opacity duration-300
      whitespace-nowrap shadow-md z-50
    ">
      Hire Driver through WhatsApp
    </span>
        </button>
      </div>
    </div>
    </div>
  );
}

export default DrinkDrive