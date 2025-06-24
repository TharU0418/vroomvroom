'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { brand } from "../../public/data/brand";
import Image from 'next/image';

interface Car {
  brand: string;
  type: string;
  model: string;
  transmission: string;
  fueltype: string;
  year: string;
  price: number;
}

export default function Rent() {
  const [formData, setFormData] = useState({
    carType: '',
    carBrand: '',
    model: '',
    transmission:'',
    fueltype: '',
    year: '',
    price: '',
    pickupDate:'',
    returnDate:'',
    terms: false
  });

  const router = useRouter();

  const [searchResults, setSearchResults] = useState<Car[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [defaultCars, setDefaultCars] = useState<Car[]>([]);

  const currentYear = new Date().getFullYear();
  const startYear = 1990;
  const years = Array.from(new Array(currentYear - startYear + 1), (_, i) => currentYear - i);  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true); 
  setLoading(true); // Start loading


    console.log('formData', formData)

    try {
      const response = await fetch('/api/check-cars', {
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
    setLoading(false); // Stop loading
  }
};


console.log('searchResults', searchResults)

  useEffect(() => {
    const fetchDefaultCars = async () => {
      try {
        const response = await fetch('/api/rent-cars'); // You need to create this API route
        const data = await response.json();
        console.log('data', data)
        setDefaultCars(data);
      } catch (err) {
        console.error('Failed to fetch default cars:', err);
      }
    };

    fetchDefaultCars();
  }, []);

  return (   //#ffbebe]
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 via-red-700 to-red-900 p-4"> 
      {/* from-blue-500 to-purple-600 */}
      <div className="glass-container bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-6xl w-full mx-4 p-8  mt-20">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Rent a Car</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side - Image Card */}
          {loading && <p className="text-white text-center mt-4">Searching...</p>}
         
          {hasSearched ? (
            loading ? (
    <div className="flex justify-center items-center mt-6">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-white border-opacity-50"></div>
    </div>
  ) :
          searchResults.length > 0 ? (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-4">Your Search Result</h2>
              <div className="grid grid-cols-1 gap-4">
                {searchResults.map((car, index) => (
                  <div
                    key={index}
                    //onClick={() => router.push(`/rent/${car._id}`)}
                    onClick={() =>
                      router.push(`/rent/${car._id}?pickupDate=${formData.pickupDate}&returnDate=${formData.returnDate}`)
                    }
                    className="glass-container bg-white bg-opacity-15 rounded-xl p-6 h-full cursor-pointer hover:scale-105 transition-transform"
                  >
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <img 
                        src={car.images[0]}
                        alt={`${car.brand} ${car.model}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                        <h3 className="text-white text-xl font-bold">{car.brand} {car.model}</h3>
                        <p className="text-gray-200">{car.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
<p className="text-white text-center mt-8 text-lg">
      Unfortunately, we don't have that car.
    </p>          )
          ) : (
            defaultCars.length > 0 && (
              <div className="mt-12">
                {/* <h2 className="text-2xl font-bold text-white mb-4">Most Cars</h2> */}
                <div className="grid grid-cols-1 gap-4">
                  {defaultCars.map((car, index) => (
                    <div
                      key={index}
                    // onClick={() => router.push(`/rent/${car._id}`)}
                      className="glass-container bg-white bg-opacity-15 rounded-xl p-6 h-full  hover:scale-105 transition-transform"
                    >
                      <div className="relative h-64 rounded-lg overflow-hidden">
                        <Image 
                          src={car.images[0]}
                          alt={`${car.brand} ${car.model}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                          {/* <h3 className="text-white text-xl font-bold">{car.brand} {car.model}</h3>
                          <p className="text-gray-200">{car.year}</p> */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
        )}
        {/* Right Side - Form */}
        <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Car Type Dropdown */}
              <div>
                <label className="block text-white mb-2">Car Type</label>
                <select
                  className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black"
                  
                  onChange={(e) => setFormData({...formData, carType: e.target.value})}
                >
                  <option value="">Select Car Type</option>
                  <option value="luxury">Luxury Sedan</option>
                  <option value="Premium_suv">Premium SUV</option>
                  <option value="sports">Sports Car</option>
                  <option value="electric">Electric Vehicle</option>
                  <option value="hatchback">Hatchback</option>
                  <option value="convertible">Convertible</option>
                  <option value="crossover_suv">Crossover SUV</option>
                  <option value="coupe">Coupe</option>
                  <option value="sedan">Sedan</option>
                  <option value="minivan">Minivan</option>
                  <option value="luxury_sedan">Luxury Sedan</option>
                  <option value="compact_car">Compact Car</option>
                  <option value="luxury_sports_car">Luxury Sports Car</option>
                  <option value="city_car">City Car</option>
                  <option value="roadster">Roadster</option>
                </select>
              </div>
              {/* Car Brand Dropdown */}
              <div>
                <label className="block text-white mb-2">Car Brand</label>
                <select
                  className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black"
                  onChange={(e) => setFormData({ ...formData, carBrand: e.target.value })}
                >
                  <option value="">Select Car Brand</option>
                    {brand.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
              </div>
              {/* Year Dropdowns */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-2">Manufacture Year</label>
                  <select
                    className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black"
                    onChange={(e) => setFormData({...formData, year: e.target.value})}
                  >
                    <option value="">Select Year</option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              {/* Location Dropdowns */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-2">Fuel Type</label>
                  <select
                    className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black"
                    value={formData.fueltype}
                    onChange={(e) => setFormData({...formData, fueltype: e.target.value})}
                  >
                    <option value="">Select Fuel Type</option>
                    <option value="petrol">Petrol</option>
                    <option value="diesel">Diesel</option>
                    <option value="electric">Electric</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white mb-2">Maximum Budget</label>
                  <input
                    type="number"
                    className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black placeholder-black"
                    placeholder="Enter price"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                  />
                </div>            
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-white">Pickup Date</label>
                  <input
                    type="date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={(e) => setFormData({...formData, pickupDate: e.target.value})}
                    className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-white">Return Date</label>
                  <input
                    type="date"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={(e) => setFormData({...formData, returnDate: e.target.value})}
                    className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-red-800 to-red-900 text-white rounded-lg hover:opacity-90 transition-all"
              >
                Check
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}