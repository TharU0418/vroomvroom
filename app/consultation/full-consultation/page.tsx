'use client';

import { useAuth } from '@/hooks/useAuth';
import React, { useState } from 'react'


interface FormData {
  userId: string;
  message: string;
  type: string;  // Set 'full-day' type in the interface
  mobileNumber: string; 
}

function FullConsultation() {

    //const [typeSet, setTypeSet] = useState('Full'); // Set default value to 'full-day'
  
    const [formData, setFormData] = useState<FormData>({
  userId: '121',
  mobileNumber: '212',
  message: '',
  type: 'Full'
});

const {user} = useAuth();
  
 
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
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_CONSULTATION}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, type: 'Full' }),
          
        });
  
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || 'Failed to submit request');
        }
  
          setNotificationMessage('Request registered successfully');
      setShowNotification(true);
      
      // Hide notification after 3 seconds
      setTimeout(() => setShowNotification(false), 3000);
      } catch (error: unknown) {
  if (error instanceof Error) {
    alert(`Error: ${error.message}`);
  } else {
    alert('An unexpected error occurred.');
  }
}
    };

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


  return (
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 via-red-700 to-red-900 p-4 text-white">
      <div className="glass-container bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-6xl w-full mx-4 p-8 mt-20 justify-center ">
        <h1 className="text-4xl font-bold mb-4 text-center">Full Consultation</h1>
          <h4>Full Guide – Expert Vehicle Consultation from Start to Finish</h4>
        <p>
          

Full Guide is a comprehensive vehicle consultation program designed to walk you through every stage of the car-buying journey. 
Whether you&rsquo;re purchasing your first car or upgrading to your dream vehicle, our expert team is here to make the process simple, 
informed, and stress-free.
</p>
<p className='mt-2'>

We bring years of industry experience to help you make the right decisions with confidence:
</p>
<ul className='list-disc mt-2'>
<li>  Vehicle Selection – We help you identify and choose the right vehicle based on your lifestyle, preferences, and budget, whether new or used.
</li>
<li>Registration Support – Our team handles all the paperwork and guides you through the registration process so your vehicle is ready for the road.
</li>
<li>Leasing Assistance – We help you explore the best leasing options, ensuring flexible terms and cost-effective choices tailored to your needs.
</li>
<li>Insurance Guidance – Get matched with reliable insurance providers offering the best protection at competitive rates.
</li></ul>

<p className='mt-2'>
With Full Guide, you&rsquo;re never alone in the process. Our mission is to offer complete support and peace of mind—so you can focus on enjoying your new ride while we handle the rest.
        </p>
      

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          

          <div className="flex flex-col">
            <label className="text-white">Message</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="I want ..."
              className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black placeholder-black"
              required
            />
          </div>

          {/* Only show the button if the user is logged in */}
           {user ? (
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="bg-white hover:bg-red-200 text-red-500 py-3 px-6 rounded shadow mt-10 justify-center"
              >
                Request a consultation
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
  )
}

export default FullConsultation