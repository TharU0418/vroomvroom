'use client';
import React, { useState } from 'react'

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionItem2 = {
  title: string;
  content: string;
};

const items: AccordionItem[] = [
  {
    title: '☹️ Countless Hours Spent',
    content: '14+ hours spent during the car buying process.',
  },
  {
    title: '☹️ Money Spent on Junk Fees',
    content: '34% of buyers paid fees they had never heard of before.',
  },
  {
    title: '☹️ Not Transparent',
    content: '74% of buyers say the buying process is not transparent.',
  },
  {
    title: '☹️ Confusing',
    content: '80%+ of consumers are unfamiliar with what the F&I department does, and the products they sell.',
  },
  {
    title: '☹️ Frustrating Negotiations',
    content: '45% of car buyers found it difficult to agree to a final price.',
  },
  {
    title: '☹️ Dealership Service',
    content: '46 NPS (Net Promoter Score) at dealership.',
  },
];


const items2: AccordionItem2[] = [
  {
    title: '😊 Hands off approach',
    content: 'You tell us your dream car, we put it in your driveway.',
  },
  {
    title: '😊 No Hidden Fees',
    content: 'The price you pay is the price you pay.',
  },
  {
    title: '😊 Transparency',
    content: 'Communication at every step of the process.',
  },
  {
    title: '😊 No More Haggling',
    content: 'Let our team do the work for you.',
  },
  {
    title: '😊 Expert Negotiation',
    content: '15+ years of car buying experience on your side.',
  },
  {
    title: '😊 Additional Support',
    content: 'Free access to CarEdge Consult.',
  }
];

function WhatUs() {

  const [openIndex1, setOpenIndex1] = useState<number | null>(null);
  const [openIndex2, setOpenIndex2] = useState<number | null>(null);

  const toggle1 = (index: number) => {
    setOpenIndex1(openIndex1 === index ? null : index);
  };
  const toggle2 = (index: number) => {
    setOpenIndex2(openIndex2 === index ? null : index);
  };

  return (
    <section className="relative  w-full overflow-hidden mt-4">
      <h4 className='text-xl md:text-4xl  font-bold text-white mb-2 text-center'>VroomVroom vs. Traditional Car Buying</h4>
      <p className='text-s md:text-xl text-white mb-4 text-center'>
        Vroom Vroom simplifies the process of buying and selling cars online, providing a streamlined, user-friendly platform. Here&rsquo;s how:
      </p>
      <section className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto py-12 px-4 gap-8 ">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 bg-slate-300 p-6 rounded-xl">
          <h2 className="text-3xl font-bold mb-1 text-center">Others</h2>
          <h5 className="text-3xl font-bold mb-4 text-red-700 text-center">Do it your self</h5>
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index} className="border rounded-lg">
                <button
                  className="w-full text-left px-4 py-3 font-medium text-gray-800 focus:outline-none flex justify-between items-center"
                  onClick={() => toggle1(index)}
                >
                  {item.title}
                  <span>{openIndex1 === index ? '−' : '+'}</span>
                </button>
                {openIndex1 === index && (
                  <div className="px-4 py-3 text-gray-600 border-t">{item.content}</div>
                )}
              </div>
            ))}
          </div>
          </div>
          {/* Right: Accordion */}
          <div className="w-full md:w-1/2 bg-slate-300 p-6 rounded-xl">
            <h2 className="text-3xl font-bold mb-1 text-center">Vroom Vroom</h2>
            <h5 className="text-3xl font-bold mb-4 text-red-700 text-center">Do it your self</h5>
            <div className="space-y-4">
              {items2.map((item, index) => (
                <div key={index} className="border rounded-lg">
                  <button
                    className="w-full text-left px-4 py-3 font-medium text-gray-800 focus:outline-none flex justify-between items-center"
                    onClick={() => toggle2(index)}
                  >
                    {item.title}
                    <span>{openIndex2 === index ? '−' : '+'}</span>
                  </button>
                  {openIndex2 === index && (
                    <div className="px-4 py-3 text-gray-600 border-t">{item.content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
    </section>
  )
}

export default WhatUs