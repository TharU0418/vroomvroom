

// buy/[id]/page.tsx

import CarDetailsClient from "./CarDetailsClient";
import { notFound } from "next/navigation";

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

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BUY}`);
  const cars: CarCard[] = await res.json();

  return cars.map((car) => ({
    id: car.id,
  }));
}

export default async function Page({ params }: PageProps) {
 
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BUY}`);
  const cars: CarCard[] = await res.json();
  const car = cars.find((c) => c.id === params.id);

  if (!car) {
    notFound();
  }

  return <CarDetailsClient car={car} />;
}

