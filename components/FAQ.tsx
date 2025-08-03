'use client';
import React, { useState } from 'react'

type AccordionItem = {
  title: string;
  content: string;
};

const items: AccordionItem[] = [
  {
    title: 'How quickly can I book a driver for a one-time need, like an airport run or a few errands?',
    content: `Our One-Time Booking (Hourly/On-Demand) service is designed for speed and flexibility! You can typically book a trusted, professional driver with minimal notice, depending on current availability. Simply select your desired date and time through our easy online platform or app, and we'll confirm a driver ready to provide reliable, convenient transportation for your specific needs.`,
  },
  {
    title: 'If I use the "Drive Me Home" service after drinking, does the driver use my car?',
    content: 'Your must-have features, lifestyle, and budget.',
  },
  {
    title: 'What are the main advantages of hiring a driver for multiple days or long-term?',
    content: 'Our Multi-Day Hire and Long-Term Driver (Full-Time/Contracted) services offer consistency and peace of mind. You benefit from having the same professional driver who becomes familiar with your routine, schedule, and preferences. This eliminates the need for repeated bookings, ensures dependable daily transportation (perfect for trips, guests, or daily commutes), and builds a trusted relationship. Long-term contracts provide even greater routine familiarity and personalized service.',
  },
  {
    title: 'What does the Full Vehicle Consultation cover if I am buying a car?',
    content: 'Our Full Consultation is your complete start-to-finish guide! We provide personalized expert support through every step: helping you select the perfect vehicle based on your budget/lifestyle, navigating registration paperwork, finding the best leasing options, securing competitive insurance coverage, and ensuring your car is road-ready. We handle the complexities behind the scenes so you drive away with confidence.',
  }
];

const FAQ = () => {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // <section>
    <section className="relative h-[86vh] w-full overflow-hidden mt-20 bg-white p-4">

        <h4 className='text-4xl font-bold text-black mb-4 text-center'>Frequently Asked Questions</h4>

    <section className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto py-12 px-4 gap-8">


        {/* <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2> */}
        <div className="space-y-4 bg-slate-300 p-4 border-r-4 w-full rounded-2xl">
          {items.map((item, index) => (
            <div key={index} className="border rounded-lg ">
              <button
                className="w-full text-left px-4 py-3 font-medium text-gray-800 focus:outline-none flex justify-between items-center "
                onClick={() => toggle(index)}
              >
                {item.title}
                <span>{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-4 py-3 text-gray-600 border-t">{item.content}</div>
              )}
            </div>
          ))}
        </div>
    </section>
    </section>
  )
}

export default FAQ