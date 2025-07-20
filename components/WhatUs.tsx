
'use client';
import React, { useState } from 'react';

type AccordionItem = {
  title: string;
  content: string;
};

const traditionalItems: AccordionItem[] = [
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


const vroomItems: AccordionItem[] = [
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
    <section className="w-full bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            VroomVroom vs. Traditional Car Buying
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Vroom Vroom simplifies the process of buying and selling cars online, providing a streamlined, user-friendly platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Traditional Column */}
          <div className="bg-gray-200 rounded-2xl overflow-hidden border border-gray-800 transform transition-all hover:border-gray-700">
            <div className="bg-gradient-to-r from-red-900 to-red-800 p-6">
              <h3 className="text-2xl font-bold text-white">Traditional Dealers</h3>
              <p className="text-white font-semibold mt-1">Do it yourself</p>
            </div>
            
            <div className="p-6">
              {traditionalItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`mb-4 rounded-xl overflow-hidden transition-all ${openIndex1 === index ? 'ring-2 ring-red-600' : 'bg-gray-800'}`}
                >
                  <button
                    className={`w-full flex justify-between items-center p-5 text-left transition-colors ${
                      openIndex1 === index 
                        ? 'bg-gray-400 text-black' 
                        : 'bg-gray-400 hover:bg-gray-750 text-gray-200'
                    }`}
                    onClick={() => toggle1(index)}
                  >
                    <span className="font-medium text-lg">{item.title}</span>
                    <span className={`text-xl font-light min-w-[24px] ${openIndex1 === index ? 'text-black' : 'text-black'}`}>
                      {openIndex1 === index ? '−' : '+'}
                    </span>
                  </button>
                  
                  {openIndex1 === index && (
                    <div className="px-5 pb-5 pt-1 bg-gray-400 text-black border-t border-gray-750">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* VroomVroom Column */}
          <div className="bg-gray-200 rounded-2xl overflow-hidden border border-gray-800 transform transition-all hover:border-gray-700">
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-6">
              <h3 className="text-2xl font-bold text-white">VroomVroom</h3>
              <p className="text-white font-semibold mt-1">We do it for you</p>
            </div>
            
            <div className="p-6">
              {vroomItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`mb-4 rounded-xl overflow-hidden transition-all ${openIndex2 === index ? 'ring-2 ring-red-500' : 'bg-gray-800'}`}
                >
                  <button
                    className={`w-full flex justify-between items-center p-5 text-left transition-colors ${
                      openIndex2 === index 
                        ? 'bg-gray-400 text-black' 
                        : 'bg-gray-400 hover:bg-gray-750 text-gray-200'
                    }`}
                    onClick={() => toggle2(index)}
                  >
                    <span className="font-medium text-lg">{item.title}</span>
                    <span className={`text-xl font-light min-w-[24px] ${openIndex2 === index ? 'text-black' : 'text-black'}`}>
                      {openIndex2 === index ? '−' : '+'}
                    </span>
                  </button>
                  
                  {openIndex2 === index && (
                    <div className="px-5 pb-5 pt-1 bg-gray-400 text-black border-t border-gray-750">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatUs;