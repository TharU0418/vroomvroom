export interface CarCard {
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
  status?: string;
  reason: string;
}

// Server-side function to fetch a single car
async function getCar(id: string): Promise<CarCard | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BUY}`);
    if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
    
    const cars: CarCard[] = await res.json();
    return cars.find(c => c.id === id) || null;
  } catch (err) {
    console.error('Failed to fetch car:', err);
    return null;
  }
}

// Generate static paths at build time
export async function generateStaticParams() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BUY}`);
    if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
    
    const cars: CarCard[] = await res.json();
    return cars.map(car => ({ id: car.id }));
  } catch (error) {
    console.error('Failed to generate static params:', error);
    return [];
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const car = await getCar(params.id);
  const CarDetailsClient = (await import('./CarDetailsClient')).default;
  
  return <CarDetailsClient car={car} />;
}