'use client';

import { useAuth } from '@/hooks/useAuth';
import { DecodedToken, decodeToken } from '@/utils/decodeToken';
import React, { useEffect, useState } from 'react'


interface FormData {
   userId: string;
  message: string;
  type: string;  // Set 'full-day' type in the interface
  mobileNumber: string; // Set 'full-day' type in the interface
}

function RegistrationConsultation() {

// const [typeSet, setTypeSet] = useState('Full'); // Set default value to 'full-day'
  
    const [formData, setFormData] = useState<FormData>({
     userId: '121',
  mobileNumber: '212',
  message: '',
      type: 'Register',  // Set default type value to 'full-day'
    });
  
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
                    });
                  }
                }
              }, []);
   

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
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      // if (!formData.userId) {
      //   alert('User ID is missing. Please log in and try again.');
      //   return;
      // }
  
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_CONSULTATION}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, type: 'Register' ,userId: userDetails?.email}),
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


  return (
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 via-red-700 to-red-900 p-4 text-white">
      <div className="glass-container bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-6xl w-full mx-4 p-8 mt-20 justify-center ">
        <h1 className="text-4xl font-bold mb-4 text-center">Vehicle Registration Consultation</h1>
          <h4>Vehicle Registration Consultation – Hassle-Free Registration Support from Experts</h4>
        <p>
Registering a vehicle can be time-consuming and confusing, especially with changing regulations and paperwork requirements. With our Vehicle Registration Consultation, we take the stress out of the process by providing step-by-step support from a knowledgeable, experienced team.
</p>
<p className='mt-2'>

Our service is designed to ensure your vehicle is registered legally, efficiently, and with minimal effort on your part:
</p>

<ul className='list-disc mt-2'>
<li>  Document Preparation – We guide you through the required forms and paperwork based on your vehicle type and region.
</li>
<li>Process Navigation – From temporary permits to permanent plates, we explain each step so you know exactly what to expect.
</li>
<li>Compliance Assurance – We ensure your registration meets all legal and regulatory standards to avoid delays or fines.

</li>
<li>On-Demand Support – Whether you’re registering a new purchase, a leased car, or transferring ownership, we’re here to help.

</li></ul>







<p className='mt-2'>
With Vehicle Registration Consultation, you’ll save time, avoid errors, and get on the road faster—with confidence that everything is done right.        </p>
      

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

export default RegistrationConsultation