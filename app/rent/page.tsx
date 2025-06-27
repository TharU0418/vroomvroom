'use client';

//import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { brand } from "../../public/data/brand";
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';

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

// interface FormData {
//   userId: string;
//   carId: string;
//   pickupTime: string;
//   pickupDate: string;
//   returnDate: string;
//   pickupLocation: string;
//   driver:string,
//   history:boolean;
//   deleteReq:boolean;
//   status:string;
// }


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

//     const [formData2, setFormData2] = useState<FormData>({
//   userId: '3232',
//   carId:'',
//   pickupDate: '',
//   returnDate: '',
//   pickupTime:'',
//   pickupLocation: '',
//   driver: '',
//   history:false,
//   deleteReq:false,
//   status:'pending'
// });

const formData2 = {
  userId: '3232',
  carId:'',
  pickupDate: '',
  returnDate: '',
  pickupTime:'',
  pickupLocation: '',
  driver: '',
  history:false,
  deleteReq:false,
  status:'pending'
}

 
  //const router = useRouter();

  const [searchResults, setSearchResults] = useState<Car[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [defaultCars, setDefaultCars] = useState<Car[]>([]);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null); // Track selected car
const [rentalDetails, setRentalDetails] = useState({
    needDriver: 'no',
    pickupTime: '08:00',
    pickupLocation: 'airport',
  });
  const currentYear = new Date().getFullYear();
  const startYear = 1990;
  const years = Array.from(new Array(currentYear - startYear + 1), (_, i) => currentYear - i);  
  const {user} = useAuth();

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

  const handleRentalDetailChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setRentalDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRentNow = async() => {
    if (!selectedCar) return;
    
    // Here you would typically process the rental
    console.log('Renting car with details:', {
      car: selectedCar,
      rentalDates: {
        pickupDate: formData.pickupDate,
        returnDate: formData.returnDate
      },
      rentalDetails,
     
    });


    console.log('formData', formData)
    console.log('formData2', formData2)

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_RENT_REQUESTS}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        //body: JSON.stringify(formData2),
        body: JSON.stringify({ ...formData2, carId: selectedCar.id, driver:rentalDetails.needDriver,  pickupTime:rentalDetails.pickupTime,pickupLocation: rentalDetails.pickupLocation, pickupDate:formData.pickupDate,returnDate:formData.returnDate }),

      });

          console.log('res', formData.returnDate ,)


      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to submit request');
      }

      console.log('formData', formData)
      alert('Request registered successfully!');
    } catch (error: unknown) {
  if (error instanceof Error) {
    alert(`Error: ${error.message}`);
  } else {
    alert('An unknown error occurred');
  }
}
    
    alert('Rental confirmed!');
    setSelectedCar(null);
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
    <div className="bg-white rounded-xl min-w-[900px] max-w-4xl w-full max-h-[90vh] overflow-y-auto">
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
                    
                    {/* Rental Dates Display (non-editable) */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Rental Period</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-gray-500 text-sm">Pickup Date</p>
                          <p className="font-medium">{formData.pickupDate || 'Not selected'}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm">Return Date</p>
                          <p className="font-medium">{formData.returnDate || 'Not selected'}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm">Total Days</p>
                          <p className="font-medium">{calculateRentalDays()} days</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm">Price per Day</p>
                          <p className="font-bold">${selectedCar.price}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* New Rental Details Fields */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 mb-1">Need a Driver?</label>
                        <select
                          name="needDriver"
                          value={rentalDetails.needDriver}
                          onChange={handleRentalDetailChange}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="no">No, I&rsquo;ll drive myself</option>
                          <option value="yes">Yes, I need a driver</option>
                        </select>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 mb-1">Pickup Time</label>
                          <select
                            name="pickupTime"
                            value={rentalDetails.pickupTime}
                            onChange={handleRentalDetailChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                          >
                            {Array.from({ length: 13 }, (_, i) => {
                              const hour = i + 8;
                              return hour <= 20 ? (
                                <option key={hour} value={`${hour}:00`}>
                                  {hour}:00
                                </option>
                              ) : null;
                            })}
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 mb-1">Pickup Location</label>
                           <textarea
        name="pickupLocation"
          rows={2} 
          value={rentalDetails.pickupLocation}
          onChange={handleRentalDetailChange}
          placeholder="e.g. colombo"
          //className="p-2 rounded border"
          className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black placeholder-black"
          required
        />
                        </div>
                      </div>
                    </div>
                    
                    {/* Pricing Summary */}
                    {/* <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                      <h3 className="font-bold text-gray-800 mb-2">Pricing Summary</h3>
                      <div className="flex justify-between mb-1">
                        <span>Base Price ({calculateRentalDays()} days)</span>
                        <span>${(calculateRentalDays() * selectedCar.price).toFixed(2)}</span>
                      </div>
                      {rentalDetails.needDriver === 'yes' && (
                        <div className="flex justify-between mb-1">
                          <span>Driver Service</span>
                          <span>+${(calculateRentalDays() * 30).toFixed(2)}</span>
                        </div>
                      )}
                      <div className="border-t border-gray-300 mt-2 pt-2 flex justify-between font-bold">
                        <span>Total Amount</span>
                        <span>
                          ${(
                            calculateRentalDays() * selectedCar.price +
                            (rentalDetails.needDriver === 'yes' ? calculateRentalDays() * 30 : 0)
                          ).toFixed(2)}
                        </span>
                      </div>
                    </div> */}
                    
                     {user ? (<div className="flex justify-center items-center">
        <button
          type="submit"
          className="bg-white hover:bg-red-200 text-red-500 py-3 px-6 rounded shadow mt-10 justify-center"
          onClick={handleRentNow}
        >
          Request the vehicle
        </button>
      </div>):(
        <p className="text-red-500 mt-10 text-center bg-white  p-4 rounded-lg">
    Sign in to rent a car.
  </p>
      )}
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
                    {searchResults.map((car, index) => (
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
                        //onClick={() => setSelectedCar(car)}
                        className="glass-container bg-white bg-opacity-15 rounded-xl p-6 h-full hover:scale-105 transition-transform"
                      >
                        <div className="relative h-64 rounded-lg overflow-hidden">
                        <Image 
                          src={car.images[0]}
                          alt={`${car.brand} ${car.model}`}
                          className="w-full h-full object-cover"
                          width={100}
                          height={100}
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