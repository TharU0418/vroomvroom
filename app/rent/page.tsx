'use client';

//import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { brand } from "../../public/data/brand";
import Image from 'next/image';

interface Car {
  _id: string; // Added ID field
  brand: string;
  type: string;
  model: string;
  transmission: string;
  fueltype: string;
  year: string;
  price: number;
  images: string[];
  seats: number; // Added missing property
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

  //const router = useRouter();

  const [searchResults, setSearchResults] = useState<Car[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [defaultCars, setDefaultCars] = useState<Car[]>([]);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null); // Track selected car

  const currentYear = new Date().getFullYear();
  const startYear = 1990;
  const years = Array.from(new Array(currentYear - startYear + 1), (_, i) => currentYear - i);  

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setHasSearched(true);

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_RENT}`);
    const allCars = await response.json();

    // Filtering logic
    const filtered = allCars.filter((car: Car) => {
      const matchesType = formData.carType ? car.type === formData.carType : true;
      const matchesBrand = formData.carBrand ? car.brand === formData.carBrand : true;
      const matchesYear = formData.year ? car.year === formData.year : true;
      const matchesFuel = formData.fueltype ? car.fueltype === formData.fueltype : true;
      const matchesPrice = formData.price ? car.price <= parseFloat(formData.price) : true;

      return matchesType && matchesBrand && matchesYear && matchesFuel && matchesPrice;
    });

    setSearchResults(filtered);
  } catch (err) {
    console.error("Search failed:", err);
    setSearchResults([]);
  } finally {
    setLoading(false);
  }
};

// Calculate rental days
  const calculateRentalDays = () => {
    if (!formData.pickupDate || !formData.returnDate) return 0;
    
    const start = new Date(formData.pickupDate);
    const end = new Date(formData.returnDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  // Close modal when clicking outside
  const handleCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedCar(null);
    }
  };


console.log('searchResult', searchResults)

  useEffect(() => {
    const fetchDefaultCars = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_RENT}`); // You need to create this API route
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
      <div className="glass-container bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-6xl w-full mx-4 p-8 mt-20">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Rent a Car</h1>
        
        {/* Selected Car Modal */}
        {selectedCar && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            onClick={handleCloseModal}
          >
            <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {selectedCar.brand} {selectedCar.model} ({selectedCar.year})
                  </h2>
                  <button 
                    onClick={() => setSelectedCar(null)}
                    className="text-gray-500 hover:text-red-500 text-2xl"
                  >
                    &times;
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                    <Image 
                      src={selectedCar.images[0]}
                      alt={`${selectedCar.brand} ${selectedCar.model}`}
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-gray-500 text-sm">Type</h3>
                        <p className="font-medium">{selectedCar.type}</p>
                      </div>
                      <div>
                        <h3 className="text-gray-500 text-sm">Transmission</h3>
                        <p className="font-medium capitalize">{selectedCar.transmission}</p>
                      </div>
                      <div>
                        <h3 className="text-gray-500 text-sm">Fuel Type</h3>
                        <p className="font-medium capitalize">{selectedCar.fueltype}</p>
                      </div>
                      <div>
                        <h3 className="text-gray-500 text-sm">Seats</h3>
                        <p className="font-medium">{selectedCar.seats}</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <h3 className="text-gray-500 text-sm">Price per Day</h3>
                      <p className="text-2xl font-bold text-red-600">${selectedCar.price}</p>
                    </div>
                    
                    {formData.pickupDate && formData.returnDate && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Rental Period</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-gray-500 text-sm">Pickup Date</p>
                            <p>{formData.pickupDate}</p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-sm">Return Date</p>
                            <p>{formData.returnDate}</p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-sm">Total Days</p>
                            <p>{calculateRentalDays()} days</p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-sm">Total Price</p>
                            <p className="font-bold">${calculateRentalDays() * selectedCar.price}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <button className="w-full py-3 bg-gradient-to-r from-red-800 to-red-900 text-white rounded-lg hover:opacity-90 transition-all mt-4">
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side - Results */}
          <div className="md:w-1/2">
            {loading ? (
              <div className="flex justify-center items-center mt-6">
                <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-white border-opacity-50"></div>
              </div>
            ) : hasSearched ? (
              searchResults.length > 0 ? (
                <div className="mt-4">
                  <h2 className="text-2xl font-bold text-white mb-4">Your Search Result</h2>
                  <div className="grid grid-cols-1 gap-4">
                    {searchResults.map((car) => (
                      <div
                        key={car._id}
                        onClick={() => setSelectedCar(car)}
                        className="glass-container bg-white bg-opacity-15 rounded-xl p-6 h-full cursor-pointer hover:scale-105 transition-transform"
                      >
                        <div className="flex gap-4">
                          <div className="relative w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                            <Image 
                              src={car.images[0]}
                              alt={`${car.brand} ${car.model}`}
                              layout="fill"
                              objectFit="cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-white text-xl font-bold">{car.brand} {car.model}</h3>
                            <p className="text-gray-200">{car.year} • {car.type}</p>
                            <p className="text-gray-200 capitalize">{car.transmission} • {car.fueltype}</p>
                            <p className="text-xl font-bold text-red-300 mt-2">${car.price}/day</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-white text-center mt-8 text-lg">
                  Unfortunately, we don&rsquo;t have that car.
                </p>
              )
            ) : ( 
              defaultCars.length > 0 && (
                <div className="mt-4">
                  <h2 className="text-2xl font-bold text-white mb-4">Available Cars</h2>
                  <div className="grid grid-cols-1 gap-4">
                    {defaultCars.map((car, index) => (
                      <div
                        key={car._id || index}
                        onClick={() => setSelectedCar(car)}
                        className="glass-container bg-white bg-opacity-15 rounded-xl p-6 h-full cursor-pointer hover:scale-105 transition-transform"
                      >
                        <div className="flex gap-4">
                          <div className="relative w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                            <Image 
                              src={car.images[0]}
                              alt={`${car.brand} ${car.model}`}
                              layout="fill"
                              objectFit="cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-white text-xl font-bold">{car.brand} {car.model}</h3>
                            <p className="text-gray-200">{car.year} • {car.type}</p>
                            <p className="text-gray-200 capitalize">{car.transmission} • {car.fueltype}</p>
                            <p className="text-xl font-bold text-red-300 mt-2">${car.price}/day</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
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