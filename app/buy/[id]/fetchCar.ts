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

export const fetchCarById = async (id: string): Promise<CarCard | undefined> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BUY}`, { cache: "force-cache" });
  const cars: CarCard[] = await res.json();
  return cars.find((c) => c.id === id);
};
