'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
//import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

interface Slide {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  path:string;
}

const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slides] = useState<Slide[]>([
    
    {
      id: 1,
      title: 'Hire a Professional Chauffeur in Sri Lanka – Fast, Reliable & Safe',
      description: 'Find trusted, experienced drivers anywhere in Sri Lanka for tours, daily commutes, airport transfers & more.',
      buttonText: 'Book Your Driver Now',
      path: 'hire'
    },
    {
      id: 2,
      title: 'Hire Cabs in Sri Lanka – Wide Range of Vehicles Available',
      description: 'Choose from economy, luxury, SUVs & more for your next trip. Easy booking & great rates.',
      buttonText: 'Hire Your Cab Now',
      path: 'hireacab'
    },
    // {
    //   id: 3,
    //   title: 'Sell Your Car Fast.',
    //   description: 'Get a free instant valuation and connect with serious buyers today.',
    //   buttonText: 'Sell Your Car Now',
    //   path: 'sell'
    // },
    
    // {
    //   id: 4,
    //   title: 'Hire a Professional Lady Driver',
    //   description: 'Need a safe and reliable ride home',
    //   buttonText: 'Book Your Driver Now',
    //   path: 'ladycab'
    // },
    // {
    //   id: 5,
    //   title: 'Buy a Car in Sri Lanka – Wide Selection of New & Used Cars',
    //   description: "Browse thousands of listings from trusted dealers & private sellers.",
    //   buttonText: 'Buy Your Car Now',
    //   path: 'buy'
    // },
    // {
    //   id: 6,
    //   title: 'Consultation services,',
    //   description: 'Have questions about buying, selling, or financing a car? Our experts are here to help.',
    //   buttonText: 'Book Your Consultations Now',
    //   path: '/consultation'
    // },
    {
      id: 7,
      title: 'Book a  Tourists Cab in Sri Lanka',
      description: 'Explore Sri Lanka with ease and comfort using our reliable cab services tailored for tourists.',
      buttonText: 'Book Your Cab Now',
      path: '/cab-tourist'
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 14000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  const goToPrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative h-screen w-full overflow-hidden mt-10 ">
 {/* Site Name */}
      <div className="absolute top-8 left-8 z-50">
        {/* <h1 className="text-8xl font-bold text-white opacity-100">Vroom Vroom</h1> */}
      </div>
      
     

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex items-center justify-left bg-black transition-opacity duration-1000  ${
            index === activeSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className=" inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          
          <Image
  src={`/hero-${index + 1}.webp`}
  alt="title"
  className="absolute w-full object-cover"
  fill // Automatically sizes image to its container
  priority // Optional: prioritize this image for faster loading
/>

<div className="relative z-10 w-[90%] ml-4 p-4 text-white bg-white bg-opacity-40 backdrop-blur-lg rounded-xl shadow-lg border 
                md:ml-40 md:p-6 md:w-auto max-w-6xl">
            <div className="space-y-6">
              {/* <h2 className="text-5xl font-bold leading-tight">{slide.title}</h2> */}
              <h2 className="text-2xl md:text-3xl font-bold leading-tight text-black">{slide.title}</h2>

              {/* <p className="text-xl max-w-2xl">{slide.description}</p> */}
              <p className="text-s md:text-xl max-w-2xl text-black">{slide.description}</p>

              <Link href={slide.path}>
                {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors mt-4">
                  {slide.buttonText}
                </button> */}
                <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md text-sm md:text-lg font-medium transition-colors mt-4">
{slide.buttonText}
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-8 top-1/2 z-50 -translate-y-1/2 p-2 text-white hover:text-blue-500 transition-colors"
      >
        {/* <ChevronLeftIcon className="h-8 w-8" /> */}
        <FaArrowLeft/>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-8 top-1/2 z-50 -translate-y-1/2 p-2 text-white hover:text-blue-500 transition-colors"
      >
        {/* <ChevronRightIcon className="h-8 w-8" /> */}
        <FaArrowRight/>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 z-50 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === activeSlide ? 'bg-blue-600' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;