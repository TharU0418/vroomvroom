'use client';

import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import React, {useEffect, useRef, useState } from 'react';

interface FormData {
  userId: string;
  name: string;
  mobileNumber: string;
  message: string;
  type: string;
}

function LeasingConsultation() {

const [formData, setFormData] = useState<FormData>({
    userId: '',
    name: '',
    mobileNumber: '',
    message: '',
    type: 'Leasing'
  });

  const { user } = useAuth();
      const email = user?.email;  
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
const [showWelcome, setShowWelcome] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
 const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);

      
  
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
       <div className="min-h-screen bg-white text-black">
      
      {/* Main content container */}
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-10 mt-20">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center text-red-800">Leasing Consultation</h1>
                 
          <div className="prose max-w-none mb-8">
            <h4 className="text-lg font-semibold text-gray-800">Leasing Consultation – Find the Right Lease with Confidence</h4>
            <p className="text-black">
Leasing a vehicle can be a smart, flexible alternative to purchasing—but only if you have your information straight. Our Leasing Consultation service is your own personal navigator through every phase of the leasing process, 
ensuring you make a completely knowledgeable and financially prudent choice.
</p>



            {/* <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-700">
<li>  Understand Leasing Options – Learn the difference between types of leases (personal, business, short-term, long-term) and what suits your situation best.
</li>
<li>Compare Plans and Rates – We evaluate multiple leasing offers from trusted providers to find the most cost-effective and transparent deals.
</li>
<li>Review Terms & Conditions – Our team breaks down the fine print—monthly payments, mileage limits, end-of-lease obligations—so there are no surprises.
</li>
<li>Negotiate Smartly – We help you identify where you can save or gain better terms through negotiation or incentives.

</li>
<li>Prepare for End-of-Lease – Get guidance on what happens when your lease ends, from buyout options to renewal or return.
</li>
</ul> */}

<p className='mt-2'>
      Whether you&rsquo;re leasing for personal comfort or business flexibility, our Leasing Consultation assists you in obtaining the appropriate car with the proper terms—quickly and easily. </p>

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
       <div className="overflow-hidden">
     
      
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
    onClick={() => window.open('https://wa.me/9401780780?text=Welcome', '_blank')}
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
      Consultation through WhatsApp
    </span>
        </button>
      </div>
    </div>
      {showNotification && <Notification />}
    </div>
    
    </div>
  )
}

export default LeasingConsultation;