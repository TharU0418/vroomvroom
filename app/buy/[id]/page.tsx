//import { notFound } from "next/navigation";

import { Suspense } from "react";
import CarDetails from "./CarDetails";
import { fetchCarById } from "./fetchCar";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BUY}`);
  const cars = await res.json();

  return cars.map((car: { id: string }) => ({
    id: car.id,
  }));
}

export default function Page({ params }: PageProps) {
  const carPromise = fetchCarById(params.id);

  return (
    <Suspense fallback={<div className="text-white">Loading car details...</div>}>
      <CarDetails carPromise={carPromise} />
    </Suspense>
  );
}
