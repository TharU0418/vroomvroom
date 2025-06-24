'use client';

import React, {  useState } from 'react'


interface FormData {
  userId: string;
  message: string;
  type: string;  // Set 'full-day' type in the interface
  mobileNumber: string; 
}

function LeasingConsultation() {

  
                //   const [typeSet, setTypeSet] = useState('Full'); // Set default value to 'full-day'
  
  
        const [formData, setFormData] = useState<FormData>({
      userId: '121',
      mobileNumber: '212',
      message: '',
      type: 'Leasing'
    });
    
 

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
          body: JSON.stringify({ ...formData, type: 'Leasing' }),
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
        <h1 className="text-4xl font-bold mb-4 text-center">Leasing Consultation</h1>
          <h4>Leasing Consultation – Find the Right Lease with Confidence</h4>
        <p>
  Leasing a vehicle can be a smart and flexible alternative to buying—but only if you fully understand your options. 
  Our Leasing Consultation service is designed to guide you through every detail of the leasing process, ensuring you 
  make an informed and financially sound decision.
</p>
<p className='mt-2'>

With expert support and deep industry knowledge, we help you:


<ul className='list-disc mt-2'>
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
</p>
<p className='mt-2'>
Whether you&rsquo;re leasing for personal convenience or business flexibility, our Leasing Consultation ensures you get the right vehicle with the right terms—quickly and stress-free.        </p>
      

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
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="bg-white hover:bg-red-200 text-red-500 py-3 px-6 rounded shadow mt-10 justify-center"
              >
                Request a consult
              </button>
            </div>
        
        </form>
      </div>
    </div>
  )
}
export default LeasingConsultation