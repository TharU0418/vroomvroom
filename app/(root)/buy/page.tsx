'use client';
//import Link from 'next/link';
import { useEffect, useState } from 'react';
import { locations } from '@/public/data/location';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

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

// interface Car {
//   id: string;
//   brand: string;
//   type: string;
//   model: string;
//   transmission: string;
//   fueltype: string;
//   year: string;
//   price: number;
// }

export default function CarListing() {
  const [cars, setCars] = useState<CarCard[]>([]);
  //const [hasSearched, setHasSearched] = useState(false);
  //const [searchResults, setSearchResults] = useState<Car[]>([]);
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

  const router = useRouter();

  useEffect(() => {
  const fetchCars = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BUY}`);
      const data = await res.json();
      console.log('data', data);
      const filteredCars = data.filter((caersData1: { status: string }) => 
            caersData1.status === 'accept'
        );
      setCars(filteredCars);
    } catch (err) {
      console.error('Failed to fetch cars:', err);
    } finally {
      setIsLoading(false);
    }
  };
  fetchCars();
}, []); // ✅ keep it empty

console.log('cars', cars)

  
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setHasSearched(true); 
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch('/api/check-sell', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     const result = await response.json();
  //     if (result.success) {
  //       setSearchResults(result.cars);
  //     } else {
  //       console.error('Search failed:', result.error);
  //     }
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

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
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 mt-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Find Your Dream Car
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our curated collection of premium vehicles and drive away with confidence
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              className="w-full p-4 pl-12 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-800"
              placeholder="Search by car brand..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Section */}
          <div className="lg:w-1/4">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Filters</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">District</label>
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value, city: '' })}
                    className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  >
                    <option value="">All Districts</option>
                    {districts.map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">City</label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    disabled={!formData.district}
                  >
                    <option value="">All Cities</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Car Brand</label>
                  <select
                    className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    onChange={(e) => setFormData({...formData, carBrand: e.target.value})}
                  >
                    <option value="">All Brands</option>
                    <option value="toyota">Toyota</option>
                    <option value="honda">Honda</option>
                    <option value="bmw">BMW</option>
                    <option value="ford">Ford</option>
                    <option value="audi">Audi</option>
                    <option value="mercedes">Mercedes-Benz</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Year</label>
                  <select
                    className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    onChange={(e) => setFormData({...formData, year: e.target.value})}
                  >
                    <option value="">All Years</option>
                    {years.map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Max Price ($)</label>
                  <input
                    type="number"
                    className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="Enter max price"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                  />
                </div>

                <button
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-medium transition-colors"
                  // onClick={() => setFormData({
                  //   district: '',
                  //   city: '',
                  //   carBrand: '',
                  //   year: '',
                  //   price: '',
                  // })}
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>

          {/* Car Cards Section */}
          <div className="lg:w-3/4">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((id) => (
                  <div key={id} className="bg-white border border-gray-200 rounded-xl p-6 animate-pulse">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-2/5">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
                      </div>
                      <div className="md:w-3/5 space-y-4">
                        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                        <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                        <div className="h-10 bg-gray-200 rounded w-32 mt-4"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    {filteredCars.length} Cars Available
                  </h2>
                </div>

                {filteredCars.length === 0 ? (
                  <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">
                    <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No cars found</h3>
                    <p className="text-gray-600">Try adjusting your search filters</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredCars.map((car) => (
                      <div 
                        key={car.id} 
                        className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="relative h-48">
                          {/* Proper image display */}
                          {car.images && car.images.length > 0 ? (
                            <Image
                              src={car.images[0]} // Display first image
                              alt={`${car.brand} ${car.model}`}
                              layout="fill"
                              objectFit="cover"
                              className="w-full h-full"
                            />
                          ) : (
                            <div className="bg-gray-200 border-2 border-dashed w-full h-full flex items-center justify-center">
                              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                              </svg>
                            </div>
                          )}
                          <div className="absolute top-4 left-4">
                            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-1 rounded">
                              {car.condition}
                            </span>
                          </div>
                          {/* <div className="absolute bottom-4 right-4 bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                              <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                              <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                              <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                            </svg>
                          </div> */}
                        </div>
                        
                        <div className="p-6">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">
                                {car.brand} {car.model}
                              </h3>
                              <p className="text-gray-600">{car.year} • {car.transmission} • {car.fueltype}</p>
                            </div>
                            <div className="text-xl font-bold text-gray-900">${car.price.toLocaleString()}</div>
                          </div>
                          
                          <div className="mt-4 flex items-center text-gray-600">
                            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <span>{car.city}, {car.district}</span>
                          </div>
                          
                          <div className="mt-6 flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                              {/* <span className="text-sm text-gray-600">Verified</span> */}
                            </div>
                            <button 
                              onClick={() => {
                                sessionStorage.setItem('selectedCar', JSON.stringify(car));
                                router.push('/details');
                              }}
                              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center"
                            >
                              View Details
                              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}