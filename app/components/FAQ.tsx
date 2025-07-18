'use client';
import React, { useState } from 'react'

type AccordionItem = {
  title: string;
  content: string;
};

const items: AccordionItem[] = [
  {
    title: 'Do You Want to sell a car?',
    content: `What&rsquo;s your car worth? Receive the absolute best value for your trade-in vehicle. We even handle all paperwork. Schedule your appointment today!`,
  },
  {
    title: 'Tell us what car you want ?',
    content: 'Your must-have features, lifestyle, and budget.',
  },
  {
    title: 'How to schedule a service online?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla, velit id laoreet hendrerit, sapien nisl varius dolor, eu consequat erat augue in eros. Fusce non orci vitae eros porta consequat non at ante. Etiam et ligula quam. In condimentum ex nec sapien luctus pulvinar. Curabitur quis leo quis ex aliquam interdum.',
  },
  {
    title: 'Connect with Vroomvroom',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla, velit id laoreet hendrerit, sapien nisl varius dolor, eu consequat erat augue in eros. Fusce non orci vitae eros porta consequat non at ante. Etiam et ligula quam. In condimentum ex nec sapien luctus pulvinar. Curabitur quis leo quis ex aliquam interdum.',
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