'use client';

import { useAuth } from '@/hooks/useAuth';
import React, { useState } from 'react';

interface FormData {
  userId: string;
  name: string;
  mobileNumber: string;
  message: string;
  type: string;
}

function RegistrationConsultation() {

// const [typeSet, setTypeSet] = useState('Full'); // Set default value to 'full-day'
  
    const [formData, setFormData] = useState<FormData>({
        userId: '',
        name: '',
        mobileNumber: '',
        message: '',
        type: 'Registration'
      });
    const { user } = useAuth();
        const email = user?.email;
    
      const [showNotification, setShowNotification] = useState(false);
      const [notificationMessage, setNotificationMessage] = useState('');
    

    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_CONSULTATION}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...formData, userId:email }),
          });
    
          if (!res.ok) {
            const data = await res.json();
            throw new Error(data.error || 'Failed to submit request');
          }
    
          setNotificationMessage('Request registered successfully');
          setShowNotification(true);
          
          // Reset form
          setFormData(prev => ({
            ...prev,
            message: '',
            ...(!user && { name: '', mobileNumber: '' }) // Clear fields if not logged in
          }));
          
          setTimeout(() => setShowNotification(false), 3000);
        } catch (error: unknown) {
          if (error instanceof Error) {
            alert(`Error: ${error.message}`);
          } else {
            alert('An unexpected error occurred.');
          }
        }
      };
    
      const Notification = () => (
        <div className="fixed bottom-4 right-4 z-50">
          <div className="bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center animate-fadeInUp">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="font-medium">{notificationMessage}</span>
          </div>
        </div>
      );

  return (
       <div className="min-h-screen bg-white text-black">
      
      {/* Main content container */}
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-10 mt-20">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center text-red-800">Vehicle Registration Consultation</h1>
         
          <div className="prose max-w-none mb-8">
            <h4 className="text-lg font-semibold text-gray-800">
          Vehicle Registration Consultation – Hassle-Free Registration Support from Experts</h4>
            <p className="text-gray-700">
Registering a vehicle can be time-consuming and confusing, especially with changing regulations and paperwork requirements. With our Vehicle Registration Consultation, we take the stress out of the process by providing step-by-step support from a knowledgeable, experienced team.
</p>
            <p className="mt-3 text-gray-700">

Our service is designed to ensure your vehicle is registered legally, efficiently, and with minimal effort on your part:
</p>

            <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-700">
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
      
 <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {/* Name and mobile fields only for non-logged-in users */}
            {/* {!user && ( */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="block text-gray-700 font-medium mb-2">
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent placeholder-gray-500"
                    required
                  />
                </div>
                
                <div className="flex flex-col">
                  <label className="block text-gray-700 font-medium mb-2">
                    Mobile Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    name="mobileNumber"
                    type="tel"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent placeholder-gray-500"
                    required
                  />
                </div>
              </div>
            {/* )} */}
            
            <div className="flex flex-col">
              <label className="block text-gray-700 font-medium mb-2">
                Message <span className="text-red-600">*</span>
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your vehicle needs..."
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent placeholder-gray-500"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-red-800 hover:bg-red-900 text-white py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
              >
                Request Consultation
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {showNotification && <Notification />}
    </div>
    </div>
  )
}


export default RegistrationConsultation;