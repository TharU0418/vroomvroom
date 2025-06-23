'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Hire() {

  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 via-red-700 to-red-900  p-4">
      <div className="glass-container bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-6xl w-full mx-4 p-6 mt-10">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Hire a Driver</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div onClick={() => router.push(`/hire/one-time-drive`)} className="glass-container bg-white bg-opacity-40 rounded-xl p-2 h-full cursor-pointer hover:scale-105 transition-transform">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="https://plus.unsplash.com/premium_photo-1681821679118-bb069eeb2d98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              width={150} 
  height={64}
              className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white text-xl font-bold">One Time Booking</h3>
                <p className="text-gray-200 font-small">Hire a professional driver by the hour for same-day use.</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div onClick={() => router.push(`/hire/full-day-driver`)} className="glass-container bg-white bg-opacity-40 rounded-xl p-2 h-full cursor-pointer hover:scale-105 transition-transform">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1485575397155-c9b47f81f645?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={150} 
  height={64}
  className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white text-xl font-bold">Multi-Day Hire</h3>
                <p className="text-gray-200 font-small">Book a dedicated driver for several days or even weeks—perfect for short-term travel or business needs.</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div onClick={() => router.push(`/hire/drink-drive`)} className="glass-container bg-white bg-opacity-40 rounded-xl p-2 h-full cursor-pointer hover:scale-105 transition-transform">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1541747277704-ef7fb8e1a31c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              width={150} 
  height={100}
  className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white text-xl font-bold">Drink and Drive</h3>
                <p className="text-gray-200 font-small">Offers a safe and responsible way to get home—our driver will drive your vehicle when you’ve been drinking.</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div onClick={() => router.push(`/hire/long-term--driver`)} className="glass-container bg-white bg-opacity-40 rounded-xl p-2 h-full cursor-pointer hover:scale-105 transition-transform">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1615563164538-89e1da13fcc4?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={150} 
  height={64}
  className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white text-xl font-bold"> Long Term Driver</h3>
                <p className="text-gray-200 font-small">Allows you to hire a dedicated driver on a monthly or yearly basis through a formal agreement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
