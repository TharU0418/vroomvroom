'use client';
import React, { useState } from 'react'

type AccordionItem = {
  title: string;
  content: string;
    path: string;
};

const items: AccordionItem[] = [
  {
    title: 'Do You Want to sell a car?',
    content: `What&rsquo;s your car worth? Receive the absolute best value for your trade-in vehicle. We even handle all paperwork. Schedule your appointment today!`,
    path: '/sell',
  },
  {
    title: 'Tell us what car you want ?',
    content: 'Your must-have features, lifestyle, and budget.',
    path: '/buy',
  },
  {
    title: 'What is the special about vroom vroom?',
    content: 'Are you busy to go and check the vechicle? We do it for you. Our team check all the vechicle and take a report before selling on the vroom vrrom.',
    path: '/buy',
  },
  {
    title: 'How to register your vehicle?',
    content: 'Having trouble with register your vechicle. Contact our consultation team.',
    path: '/consultation',
  },
  {
    title: 'Connect with Vroomvroom',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    path: '/',
  },
  {
    title: 'How to find your dream car?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    path: '/buy',
  },
];


import { useRouter } from 'next/navigation'; // or 'next/router' for older Next.js

const HowWork = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const router = useRouter();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <section className="relative w-full overflow-hidden mt-14 bg-red-50">
      <h4 className="text-4xl font-bold text-black mb-4 text-center mt-2">How VroomVroom Work</h4>
      <p className="text-black mb-2 text-center">
        Vroom Vroom simplifies the process of buying and selling cars online, providing a streamlined, user-friendly platform. Here&rsquo;s how:
      </p>
      <section className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto py-12 px-4 gap-8">
        <div className="w-full md:w-1/2">
          <img src="/whyus.jpg" alt="Why Us" className="rounded-lg shadow-md w-full h-auto object-cover" />
        </div>
        <div className="w-full md:w-1/2">
          <div className="space-y-4 bg-slate-200 p-1 border-r-4">
            {items.map((item, index) => (
              <div key={index} className="border rounded-lg">
                <button
                  className="w-full text-left px-4 py-3 font-medium text-gray-800 focus:outline-none flex justify-between items-center"
                  onClick={() => toggle(index)}
                >
                  {item.title}
                  <span>{openIndex === index ? '−' : '+'}</span>
                </button>
                {openIndex === index && (
                  <div className="px-4 py-3 text-gray-600 border-t">
                    <p>{item.content}</p>
                    <button
                      onClick={() => navigateTo(item.path)}
                      className="mt-2 text-sm inline-block bg-red-500 text-white px-2 py-2 rounded hover:bg-red-600 transition"
                    >
                      Check Now
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default HowWork