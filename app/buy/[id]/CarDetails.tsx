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

export default async function CarDetails({ carPromise }: { carPromise: Promise<CarCard | undefined> }) {
  const car = await carPromise;

  if (!car) {
    notFound();
  }

  return <CarDetailsClient car={car} />;
}
