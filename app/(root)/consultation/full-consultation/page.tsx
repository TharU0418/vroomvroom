'use client';

import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import DOMPurify from 'dompurify';

interface FormData {
  userId: string;
  name: string;
  mobileNumber: string;
  message: string;
  type: string;
}

function FullConsultation() {
    const { user } = useAuth();
    const email = user?.email;

  const [formData, setFormData] = useState<FormData>({
    userId:'',
    name: '',
    mobileNumber: '',
    message: '',
    type: 'Full'
  });

  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
const [loading, setLoading] = useState(false);
const router = useRouter();

  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {

      // Sanitize the input fields using DOMPurify
      const sanitizedFormData = {
        userId: email, // Assuming `email` is a safe value
        name: DOMPurify.sanitize(formData.name),
        mobileNumber: DOMPurify.sanitize(formData.mobileNumber),
        message: DOMPurify.sanitize(formData.message),
        type: formData.type,
      };

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_CONSULTATION}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitizedFormData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to submit request');
      }

      setNotificationMessage('Request registered successfully');
      setShowNotification(true);
      
     
      setTimeout(() => setShowNotification(false), 2000);
       // Reset form
      setFormData(prev => ({
        ...prev,
        message: '',
        ...(!user && { name: '', mobileNumber: '' }) // Clear fields if not logged in
      }));
      
      router.push('/consultation')
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(`Error: ${error.message}`);
      } else {
        alert('An unexpected error occurred.');
      }
    }finally{
          setLoading(false);

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
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center text-red-800">Full Consultation</h1>
          
          <div className="prose max-w-none mb-8">
            <h4 className="text-lg font-semibold text-gray-800">Full Guide – Expert Vehicle Consultation from Start to Finish</h4>
            <p className="text-gray-700">
              Full Guide is a comprehensive vehicle consultation program designed to walk you through every stage of the car-buying journey. 
              Whether you are purchasing your first car or upgrading to your dream vehicle, our expert team is here to make the process simple, 
              informed, and stress-free.
            </p>
            
            <p className="mt-3 text-gray-700">
              We bring years of industry experience to help you make the right decisions with confidence:
            </p>
            
            <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-700">
              <li>Vehicle Selection – We help you identify and choose the right vehicle based on your lifestyle, preferences, and budget, whether new or used.</li>
              <li>Registration Support – Our team handles all the paperwork and guides you through the registration process so your vehicle is ready for the road.</li>
              <li>Leasing Assistance – We help you explore the best leasing options, ensuring flexible terms and cost-effective choices tailored to your needs.</li>
              <li>Insurance Guidance – Get matched with reliable insurance providers offering the best protection at competitive rates.</li>
            </ul>
          </div>

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
                    //value={user.email}
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
                    maxLength={10}
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
                  disabled={loading}

className={`bg-red-800 text-white py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 ${
    loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-900'
  }`}              >
                 {loading ? 'Submitting...' : ' Request Consultation'}

              </button>
            </div>
          </form>
        </div>
      </div>
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
      {showNotification && <Notification />}

    </div>
  )
}

export default FullConsultation;