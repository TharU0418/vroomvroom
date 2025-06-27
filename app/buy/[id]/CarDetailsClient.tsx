'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import Image from 'next/image';

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

interface Props {
  id: string;
}

export default function CarDetailsClient({ id }: Props) {
  const [car, setCar] = useState<CarCard | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [contactVisible, setContactVisible] = useState(false);
  const user = useAuth();

  useEffect(() => {
    const fetchCar = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BUY}`);
        const data: CarCard[] = await res.json();
        const matchedCar = data.find((car) => car.id === id);
        setCar(matchedCar || null);
      } catch (err) {
        console.error('Failed to fetch car:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCar();
  }, [id]);

  const handleSubmit = (url: string) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  // ⬇️ PLACE THE REST OF YOUR COMPONENT JSX BELOW THIS LINE
  // You can paste in your existing return (...) here
}
