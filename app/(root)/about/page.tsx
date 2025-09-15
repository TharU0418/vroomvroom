'use client';
// pages/about.tsx
//import { useState } from 'react';
//import Head from 'next/head';
import Image from 'next/image';

export default function About() {
  // const [stats, setStats] = useState([
  //   { value: 100, label: 'Happy Customers', suffix: '+' },
  //   { value: 10, label: 'Vehicles', suffix: '+' },
  //   { value: 2, label: 'Cities', suffix: '' },
  //   { value: 10, label: 'Team Members', suffix: '+' },
  // ]);

  const stats= [
    { value: 100, label: 'Happy Customers', suffix: '+' },
    { value: 10, label: 'Vehicles', suffix: '+' },
    { value: 2, label: 'Cities', suffix: '' },
    { value: 10, label: 'Team Members', suffix: '+' },
  ];

  // useEffect(() => {
  //   // Animate stats counter
  //   const interval = setInterval(() => {
  //     setStats(prev => prev.map((stat, i) => ({
  //       ...stat,
  //       value: stat.value < [25, 500, 45, 80][i] 
  //         ? Math.min(stat.value + Math.ceil([25, 500, 45, 80][i] / 20), [25, 500, 45, 80][i]) 
  //         : stat.value
  //     })));
  //   }, 50);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="min-h-screen bg-white mt-20">

      {/* Hero Section */}
      <div className="relative h-[70vh] bg-black text-white">
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center z-0"></div>
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">ABOUT <span className="text-red-600">Vroom Vroom</span></h1>
          <p className="text-xl max-w-3xl text-gray-300 mb-8">
            Hire professional drivers, consultation services and premium car rental,for the discerning client
          </p>
          {/* <div className="flex space-x-4">
            <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition">
              Our Services
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </div> */}
        </div>
      </div>

      {/* Our Story */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">OUR <span className="text-red-600">STORY</span></h2>
            <p className="text-gray-600 mb-6">
              VroomVroom is more than just a name—it’s a movement. As a trusted automotive marketplace and mobility partner, we bring together a full spectrum of vehicle-related services under one roof. From buying your next car online to finding a reliable driver for the night, we’re here to make every part of your automotive journey seamless, smart, and stress-free.

            </p>
            <p className="text-gray-600 mb-6">
At our core, VroomVroom is driven by one mission: to simplify and elevate the vehicle ownership experience through ethical, user-friendly, and transparent solutions. Whether you’re a first-time buyer or a seasoned motorist, we’ve got you covered.
            </p>

            <p className="text-gray-600 mb-6">
              Need a driver for a few hours, days, or long-term? We offer reliable, professional drivers on-demand to match your schedule and lifestyle.
              If you’ve had a few drinks or feel unfit to drive, our discreet pickup service ensures you and your car get home safely—without judgment or compromise.
              For clients who prefer a female chauffeur, we proudly offer trained, respectful lady drivers to ensure a comfortable, personalized travel experience.
              Easily search for trusted service providers and genuine spare parts with our reliable platform—saving you time, effort, and uncertainty.
            </p>

            <p className="text-gray-600 mb-6">
              At VroomVroom, we’re not just keeping up with the future of mobility—we’re helping shape it. Whether it’s finding the perfect ride, the right driver, or the best parts, we’re your go-to partner for everything on wheels.

Let’s move smarter. Let’s move better. Let’s move with VroomVroom.
            </p>
            
            <div className="flex space-x-4">
              {/* <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition">
                Our Fleet
              </button> */}
              {/* <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
                Meet Our Team
              </button> */}
            </div>
          </div>
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Premium Car Collection"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">BY THE <span className="text-red-600">NUMBERS</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-5xl font-bold text-red-600 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-xl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">OUR <span className="text-red-600">SERVICES</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive automotive solutions tailored to meet your every need
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              title: "Hire Driver", 
              icon: "🚘", 
              desc: "We help you find the best driver to assit you." 
            },
            { 
              title: "Consultation Services", 
              icon: "👔", 
              desc: "Any problem you faced about a vechicle our professional team will guide you." 
            },{ 
              title: "Car Rental", 
              icon: "🚗", 
              desc: "Short-term rentals with flexible options and premium vehicles" 
            },
            { 
              title: "Buy Car", 
              icon: "💰", 
              desc: "Quality pre-owned and brand new cars with comprehensive warranties" 
            }
          ].map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      {/* <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">MEET OUR <span className="text-red-600">TEAM</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The passionate professionals who make Drive Elite exceptional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Mahesh Senanayake", role: "Founder & CEO", img: "/team1.jpg" },
              { name: "Gayahtthi Wickramashingha", role: "Operations Director", img: "/team2.jpg" },
              { name: "Eshan Hasitha", role: "Project Manager", img: "/team3.jpg" },
              { name: "Tharusha Dilshan", role: "Project Developer", img: "/team4.jpg" }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="h-64 bg-gray-300 relative">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-red-600 mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-4"> */}
                    {/* <a href="#" className="text-gray-600 hover:text-red-600">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a> */}
                    {/* <a href="#" className="text-gray-600 hover:text-red-600">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* CTA Section */}
      {/* <div className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">READY TO EXPERIENCE <span className="text-black">ELITE</span> SERVICE?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust us for their automotive needs
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-900 transition">
              Book Your Vehicle Now
            </button>
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition">
              Contact Our Team
            </button>
          </div>
        </div>
      </div> */}


    </div>
  );
}