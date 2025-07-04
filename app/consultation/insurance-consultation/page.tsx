'use client';

import { useAuth } from '@/hooks/useAuth';
import { DecodedToken, decodeToken } from '@/utils/decodeToken';
import React, { useEffect, useState } from 'react'


interface FormData {
  userId: string;
  message: string;
  type: string;  // Set 'full-day' type in the interface
  mobileNumber: string; 
}

function InsuranceConsultation() {

    const [formData, setFormData] = useState<FormData>({
      userId: '',
  mobileNumber: '',
  message: '',
      type: 'Insurence',  // Set default type value to 'full-day'
    });
  
   const {user} = useAuth();
    
   const [userDetails, setUserDetails] = useState<DecodedToken | null>(null);
   
          useEffect(() => {
               const token = localStorage.getItem('idToken');
               if (token) {
                 const decoded = decodeToken(token);
                 console.log('Decoded token:', decoded);
           
                  if (decoded && decoded.email && decoded.given_name && decoded.nickname) {
                setUserDetails({
                  email: decoded.email,
                  given_name: decoded.given_name,
                  nickname:decoded.nickname
                });
              }
               }
             }, []);
    
     
      

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
    
  
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_CONSULTATION}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          //body: JSON.stringify({ ...formData, type: typeSet }),
          body: JSON.stringify({ ...formData, type: 'Insurence',userId: userDetails?.email , mobileNumber: userDetails?.nickname}),

        });
  
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || 'Failed to submit request');
        }
  
        alert('Request registered successfully!');
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
        <h1 className="text-4xl font-bold mb-4 text-center">Insurance Consultation</h1>
          <h4>Insurance Consultation – Expert Guidance for the Right Vehicle Coverage</h4>
        <p>
Choosing the right vehicle insurance can be overwhelming—but with our Insurance Consultation service, 
you&rsquo;re never alone. Our dedicated team of insurance specialists offers clear, personalized advice to help you
 find the most suitable coverage at the best value.
</p>
<p className='mt-2'>

We understand that every driver and vehicle is unique. That&rsquo;s why our consultation covers:
</p>

<ul className=' list-disc mt-2'>

<li>Needs Assessment – We evaluate your driving habits, vehicle type, and coverage requirements to recommend the right insurance options.
</li>
<li>Policy Comparison – We compare multiple plans from trusted providers to ensure you get the best coverage at competitive rates.
</li>
<li>Coverage Explanation – We break down policy terms, deductibles, and coverage types so you fully understand what you&rsquo;re paying for.
</li>
<li>Claims Support – Need help understanding or filing a claim? Our team is here to guide you through the process step by step.
</li>
</ul>

<p className='mt-2'>
With years of experience in the vehicle and insurance industries, our consultants make sure your car is not just insured—but properly protected. Whether you&rsquo;re insuring a new purchase or reviewing your current plan, Insurance Consultation gives you peace of mind on the road.        </p>
      

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
    </div>
  )
}

export default InsuranceConsultation