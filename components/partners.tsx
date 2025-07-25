'use client';

import Image from 'next/image';
import { useRef } from 'react';
//import { FaChevronLeft } from "react-icons/fa";
//import { FaChevronRight } from "react-icons/fa";

const logos = [
  '/parners1.jpg',
 // '/parners1.jpg',
 // '/parners1.jpg'
];

export default function Partners() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // const scroll = (direction: 'left' | 'right') => {
  //   if (scrollRef.current) {
  //     scrollRef.current.scrollBy({
  //       left: direction === 'left' ? -200 : 200,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  return (
    <div className="py-12  text-center bg-white">
            <h4 className="text-xl md:text-3xl font-bold text-black mb-4 text-center mt-2">OUR PARTNERS</h4>


      <div className="relative flex items-center justify-center">
        {/* <button
          onClick={() => scroll('left')}
          className="absolute left-0 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <FaChevronLeft />
        </button> */}

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto px-12 py-4 scrollbar-hide scroll-smooth"
        >
          {logos.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`Logo ${idx + 1}`}
              className="object-contain flex-shrink-0 ml-20"
              width={200}
              height={120}
            />
          ))}
        </div>

        {/* <button
          onClick={() => scroll('right')}
          className="absolute right-0 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <FaChevronRight />
        </button> */}
      </div>
    </div>
  );
}
