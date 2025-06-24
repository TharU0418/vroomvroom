'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

function Guide() {

  const router = useRouter();
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 via-red-700 to-red-900 p-4 mt-6"> 
      {/* from-blue-500 to-purple-600 */}
      <div className="glass-container bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-6xl w-full mx-4 p-8 mb-6 mt-8">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Consultations</h1>

        <div onClick={() => router.push(`/consultation/full-consultation`)} className="glass-container bg-white bg-opacity-80 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-6xl w-full mx-4 p-8 mb-6">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left Side - Image Card */}
                {/* <div onClick={() => router.push(`/hire/drink-drive`)} className="glass-container bg-white bg-opacity-40 rounded-xl p-2 h-full cursor-pointer hover:scale-105 transition-transform"> */}
                <div className="md:w-1/2">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                        <Image 
                        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        width={150} 
                          height={64}
                        alt="Luxury Car"
                        className="w-full h-full object-cover"
                        />
                           
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="md:w-1/2">
                    <h4 className="text-2xl font-bold text-black mb-4 text-center">Full Consultation</h4>
                        <p> Full Guide is a complete vehicle consultation program that helps you through every step—from finding the right 
                            car to registration, leasing, and insurance. Backed by a highly experienced team, we make the vehicle buying 
                            process smooth, stress-free, and fully guided from start to finish.
                        </p>
                
                        <button
                            type="submit"
                            className="w-40 mt-4 py-3 px-6  bg-red-800 text-white rounded-lg hover:opacity-90 transition-all text-center justify-center">
                                Book Now
                        </button>
                </div>
            </div>
        </div>


        <div onClick={() => router.push(`/consultation/insurance-consultation`)} className="glass-container bg-white bg-opacity-80 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-6xl w-full mx-4 p-8 mb-6">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left Side - Image Card */}
                <div className="md:w-1/2">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                        width={150} 
                          height={64} 
                        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Luxury Car"
                        className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="md:w-1/2">
                    <h4 className="text-2xl font-bold text-black mb-4 text-center">Insurance Consultation</h4>
                        <p> Insurance Consultation provides expert guidance to help you choose the right insurance plan for your vehicle.
                             We compare options, explain coverage, and ensure you get the best protection at the most competitive
                              rate—backed by a knowledgeable team that makes the entire process clear, fast, and stress-free.
                        </p>
                
                        <button
                            type="submit"
                            className="w-40 mt-4 py-3 px-6  bg-red-800 text-white rounded-lg hover:opacity-90 transition-all text-center justify-center">
                                Book Now
                        </button>
                </div>
            </div>
        </div>


         <div onClick={() => router.push(`/consultation/registration-consultation`)}  className="glass-container bg-white bg-opacity-80 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-6xl w-full mx-4 p-8 mb-6">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left Side - Image Card */}
                <div className="md:w-1/2">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                        <Image 
                        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        width={150} 
                          height={64}
                        alt="Luxury Car"
                        className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right Side - Form */} 
                <div className="md:w-1/2">
                    <h4 className="text-2xl font-bold text-black mb-4 text-center">Vehicle Registration Consultation</h4>
                        <p>Vehicle Registration Consultation offers expert help with the entire registration process. 
                            From documentation to legal compliance, our team ensures your vehicle is properly registered 
                            without hassle or delays. We make the process simple, fast, and worry-free so you can focus 
                            on enjoying your new ride.
                        </p>
                
                        <button
                            type="submit"
                            className="w-40 mt-4 py-3 px-6  bg-red-800 text-white rounded-lg hover:opacity-90 transition-all text-center justify-center">
                                Book Now
                        </button>
                </div>
            </div>
        </div>


        <div onClick={() => router.push(`/consultation/leasing-consultation`)}   className="glass-container bg-white bg-opacity-80 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-6xl w-full mx-4 p-8 mb-6">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left Side - Image Card */}
                <div className="md:w-1/2">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                        <Image 
                        width={150} 
                          height={64}
                        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Luxury Car"
                        className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="md:w-1/2">
                    <h4 className="text-2xl font-bold text-black mb-4 text-center">Leasing Consultation</h4>
                        <p> Leasing Consultation helps you find the best vehicle lease options tailored to your needs and budget. 
                            Our experienced team compares plans, explains terms, and ensures you get flexible, affordable, 
                            and transparent leasing solutions—whether for personal use or business. We simplify the process 
                            so you lease with confidence.
                        </p>
                
                        <button
                            type="submit"
                            className="w-40 mt-4 py-3 px-6  bg-red-800 text-white rounded-lg hover:opacity-90 transition-all text-center justify-center">
                                Book Now
                        </button>
                </div>
            </div>
        </div>

        <div className="glass-container bg-white bg-opacity-80 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-6xl w-full mx-4 p-8 mb-6">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left Side - Image Card */}
                <div className="md:w-1/2">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                        width={150} 
                          height={64} 
                        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Luxury Car"
                        className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="md:w-1/2">
                    <h4 className="text-2xl font-bold text-black mb-4 text-center">Full Guide</h4>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, 
                            pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec 
                            ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit 
                            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                
                        <button
                            type="submit"
                            className="w-40 mt-4 py-3 px-6  bg-red-800 text-white rounded-lg hover:opacity-90 transition-all text-center justify-center">
                                Book Now
                        </button>
                </div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Guide