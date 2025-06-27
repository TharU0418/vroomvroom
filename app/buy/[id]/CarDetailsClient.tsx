"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface CarCard {
  id: string;
  brand: string;
  model: string;
  price: number;
  year: number;
  images: string[];
  location?: string;
  condition: string;
  description: string;
  engine_capacity: number;
  fueltype: string;
  transmission: string;
  mobileNum: string;
  district: string;
  city: string;
  features?: string[];
  type?: string;
  report: string;
}

export default function CarDetailsClient({ car }: { car: CarCard }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const user = useAuth();

  const handleReportRequest = () => {
    if (car.report) {
      window.open(car.report, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 via-red-700 to-red-900 p-4">
      <nav className="bg-white shadow-sm mb-6">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <Link href="/buy" className="flex items-center">
            <div className="bg-red-600 w-8 h-8 rounded-md flex items-center justify-center">
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h.5a1 1 0 00.8-.4l1.075-1.433c.196-.261.472-.4.768-.4H15a1 1 0 001-1v-1.5c0-.265-.105-.52-.293-.707l-2-2A.997.997 0 0013 5h-1.586a1 1 0 00-.707.293l-1.353 1.353A.5.5 0 019 7H6.5a.5.5 0 01-.5-.5V5a1 1 0 00-1-1H3z" />
              </svg>
            </div>
            <span className="ml-2 text-xl font-bold text-gray-900">AutoElite</span>
          </Link>
          <Link href="/buy" className="text-red-600 hover:text-red-700 px-3 py-2 text-sm font-medium">
            ← Back to Cars
          </Link>
        </div>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="space-y-4">
            <div className="relative h-96 bg-gray-100 rounded-xl overflow-hidden">
              <Image
                src={car.images[selectedImage]}
                alt={`${car.brand} ${car.model}`}
                layout="fill"
                objectFit="contain"
              />
              <div className="absolute bottom-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                ${car.price.toLocaleString()}
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {car.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === idx ? "border-red-500" : "border-transparent"
                  }`}
                >
                  <Image src={img} alt="Thumbnail" width={80} height={80} className="object-cover w-full h-full" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900">{car.brand} {car.model}</h1>
            <p className="text-gray-600 mt-1">{car.year} • {car.district}, {car.city}</p>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <p><strong>Condition:</strong> {car.condition}</p>
              <p><strong>Engine:</strong> {car.engine_capacity}L</p>
              <p><strong>Transmission:</strong> {car.transmission}</p>
              <p><strong>Fuel Type:</strong> {car.fueltype}</p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-bold mb-2">Features</h2>
              {car.features?.length ? (
                <div className="flex flex-wrap gap-2">
                  {car.features.map((f, i) => (
                    <span key={i} className="bg-gray-200 text-sm px-3 py-1 rounded-full">{f}</span>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No additional features listed.</p>
              )}
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-bold mb-2">Description</h2>
              <p className="text-gray-700">{car.description}</p>
            </div>

            <div className="mt-6">
              {user.user ? (
                <button
                  onClick={handleReportRequest}
                  className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
                >
                  Request Vehicle Report
                </button>
              ) : (
                <p className="text-red-100">Please log in to request the vehicle report.</p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
