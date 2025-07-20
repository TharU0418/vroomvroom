'use client';

import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import React, {useState } from 'react';

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

  return (
       <div className="min-h-screen bg-white text-black">
      
      {/* Main content container */}
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-10 mt-20">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center text-red-800">Leasing Consultation</h1>
                 
          <div className="prose max-w-none mb-8">
            <h4 className="text-lg font-semibold text-gray-800">Leasing Consultation – Find the Right Lease with Confidence</h4>
            <p className="text-gray-700">
  Leasing a vehicle can be a smart and flexible alternative to buying—but only if you fully understand your options. 
  Our Leasing Consultation service is designed to guide you through every detail of the leasing process, ensuring you 
  make an informed and financially sound decision.
</p>
            <p className="mt-3 text-gray-700">

With expert support and deep industry knowledge, we help you:

</p>
            <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-700">
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
</ul>

<p className='mt-2'>
Whether you&rsquo;re leasing for personal convenience or business flexibility, our Leasing Consultation ensures you get the right vehicle with the right terms—quickly and stress-free.        </p>
      

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
      
      {showNotification && <Notification />}
    </div>
    
    </div>
  )
}

export default LeasingConsultation;