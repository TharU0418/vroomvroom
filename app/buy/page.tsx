'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { locations } from '@/public/data/location';
import Image from 'next/image';

// export interface CarCard {
//   _id: string;
//   brand: string;
//   model: string;
//   price: number;
//   year: number;
//   images: string[];
//   district: string;
//   city: string;
// }

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
  status?: string; // ✅ Add this line,
  reason:string;
}

interface Car {
  id: string;
  brand: string;
  type: string;
  model: string;
  transmission: string;
  fueltype: string;
  year: string;
  price: number;
}

export default function CarListing() {
  const [cars, setCars] = useState<CarCard[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchResults, setSearchResults] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [formData, setFormData] = useState({
    district: '',
    city: '',
    carType: '',
    carBrand: '',
    model: '',
    transmission:'',
    fueltype: '',
    year: '',
    price: '',
    terms: false
  });

  useEffect(() => {
  const fetchCars = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BUY}`);
      const data = await res.json();
      console.log('data', data);

      setCars(data);
    } catch (err) {
      console.error('Failed to fetch cars:', err);
    } finally {
      setIsLoading(false);
    }
  };
  fetchCars();
}, []); // ✅ keep it empty

console.log('cars', cars)

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true); 
    setIsLoading(true);
    try {
      const response = await fetch('/api/check-sell', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        setSearchResults(result.cars);
      } else {
        console.error('Search failed:', result.error);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const currentYear = new Date().getFullYear();
  const startYear = 1990;
  const years = Array.from(new Array(currentYear - startYear + 1), (val, index) => currentYear - index);
  const districts = Object.keys(locations); 
const cities = formData.district ? locations[formData.district as keyof typeof locations] : [];
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  console.log('cars', cars)

  // Combine search query with filters
  const filteredCars = cars.filter(
    (car) =>
      (searchQuery === '' || car.brand.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (formData.carBrand === '' || car.brand.toLowerCase().includes(formData.carBrand.toLowerCase())) &&
      (formData.year === '' || car.year.toString() === formData.year) &&
      (formData.price === '' || car.price <= parseInt(formData.price)) &&
      (formData.district === '' || car.district === formData.district) &&
      (formData.city === '' || car.city === formData.city)
  );

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 via-red-700 to-red-900  p-4">
      <div className="glass-container bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-6xl w-full mx-4 p-8 mt-20">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Buy Your Dream Car</h1>  
        {/* Search Bar */}
        <div className="mb-8 text-center">
          <input
            type="text"
            className="bg-white/20 text-white rounded-xl p-3 w-full max-w-lg"
            placeholder="Search by car brand..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query on change
          />
        </div>
          
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Section */}
          <div className="lg:w-1/3">
            <div className="glass-container bg-white bg-opacity-15 rounded-xl p-6 h-full">
              <h2 className="text-white text-xl font-bold mb-4">Filters</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white mb-2">Select District</label>
                  <select
                    value={formData.district}
                    onChange={(e) =>
                      setFormData({ ...formData, district: e.target.value, city: '' })
                    }
                    className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black"
                  >
                    <option value="">-- Choose a District --</option>
                    {districts.map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>

                  <label className="block text-white mb-2 mt-4">Select City</label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black"
                    disabled={!formData.district}
                  >
                    <option value="">-- Choose a City --</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
              
                    <div>
                      <label className="block text-white mb-4 mt-4">Car Brand</label>
                      <select
                        className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black"
                        onChange={(e) => setFormData({...formData, carBrand: e.target.value})}
                      >
                        <option value="">Select Car Brand</option>
                        <option value="toyota">Toyota</option>
                        <option value="honda">Honda</option>
                        <option value="bmw">BMW</option>
                        <option value="ford">Ford</option>
                        <option value="audi">Audi</option>
                        <option value="mercedes">Mercedes-Benz</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white mb-2 mt-4">Car Type</label>
                      <select
                        className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black"
                        onChange={(e) => setFormData({...formData, year: e.target.value})}
                      >
                        <option value="">Select Year</option>
                        {years.map((y) => (
                          <option key={y} value={y}>{y}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-white mb-2 mt-4">Price Range</label>
                      <input
                        type="number"
                        className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black placeholder-black"
                        placeholder="Enter price"
                        value={formData.price}
                        onChange={(e) => setFormData({...formData, price: e.target.value})}
                      />
                    </div>
                  </div>

                  <button
                    className="bg-red-900 text-white px-4 py-2 rounded-lg"
                    type="submit"
                  >
                    Apply Filter
                  </button>
                </form>
              </div>
            </div>

            {/* Car Cards Section with Animation */}
            <div className="lg:w-2/3 grid gap-6">
              {isLoading ? (
                // Loading animation with car driving effect
                Array.from({ length: 3 }).map((_, index) => (
                  <div key={`loading-${index}`}  
                    className="glass-container bg-white bg-opacity-15 rounded-xl p-6 animate-pulse"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 relative">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
                        <div className="absolute -bottom-4 left-0 w-full flex justify-center">
                          <div className="bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center">
                            <div className="animate-[drive_1.5s_infinite] text-white">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                                <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                                <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-2/3 space-y-4">
                        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                        <div className="h-10 bg-gray-200 rounded w-32 mt-4"></div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <>
                
                 { filteredCars
                 .filter(filteredCars => filteredCars?.status === 'accept')
                  .map((car) => ( 

              //     {cars
 // .filter(car => car.status === 'accept')
 // .map((car) => (
                    <div 
                      key={car.id} 
                      className="glass-container bg-white bg-opacity-15 rounded-xl p-6 transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:bg-opacity-20"
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3 relative">
              <Image
  src={car.images[Math.floor(Math.random() * car.images.length)]}
  alt={`${car.brand} ${car.model}`}
  className="w-full h-48 object-cover rounded-lg"
  width={500}
  height={300}
/>


                          <div className="absolute -bottom-4 left-0 w-full flex justify-center">
                            <div className="bg-red-700 rounded-full w-12 h-12 flex items-center justify-center animate-bounce">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                                <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                                <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="md:w-2/3">
                          <h3 className="text-white text-2xl font-bold mb-2">
                            {car.brand} {car.model} ({car.year})
                          </h3>
                          <div className="text-white mb-4">{car.district}, {car.city}</div>
                          <div className="text-white mb-4">${car.price}</div>
                          <Link href={`/buy/${car.id}`}>
                            <button className="bg-gradient-to-r from-red-400 to-red-500 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-all">
                              Buy Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))} 
                  
                  {!isLoading && (hasSearched && searchResults.length === 0 && cars.length === 0) && (
                    <p className="text-white text-center">No cars found under selected criteria.</p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes drive {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </>
  );
}