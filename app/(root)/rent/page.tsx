'use client';

//import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { brand } from "../../../public/data/brand";
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

interface Car {
  id: string; // Added ID field
  brand: string;
  type: string;
  model: string;
  transmission: string;
  fueltype: string;
  year: string;
  price: number;
  images: string[];
  seats: number; // Added missing property
  bookedDates:BookingDate[]
}
interface BookingDate {
  pickedDate: string;
  returnDate: string;
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
  userId: '',
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
  //const [defaultCars, setDefaultCars] = useState<Car[]>([]);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null); // Track selected car
const [rentalDetails, setRentalDetails] = useState({
    needDriver: 'no',
    pickupTime: '08:00',
    pickupLocation: '',
  });
  const currentYear = new Date().getFullYear();
  const startYear = 1990;
  const years = Array.from(new Array(currentYear - startYear + 1), (_, i) => currentYear - i);  
  const {user} = useAuth();

  const [showNotification, setShowNotification] = useState(false);
        const [notificationMessage, setNotificationMessage] = useState('');
   //   const router = useRouter();
    
        const Notification = () => (
          <div className="fixed bottom-4 right-4 z-50">
            
            <div className="bg-green-500 text-white px-8 py-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out animate-fadeInUp">
              <div className="flex items-center">
                
                <span className="font-semibold text-xl">{notificationMessage}</span>
              </div>
            </div>
          </div>
        );

    



const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setHasSearched(true);

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_RENT}`);
    const allCars = await response.json();

    const selectedPickup = new Date(formData.pickupDate);
    const selectedReturn = new Date(formData.returnDate);

    // Filtering logic
    const filtered = allCars.filter((car: Car) => {
      const matchesType = formData.carType ? car.type === formData.carType : true;
      const matchesBrand = formData.carBrand ? car.brand === formData.carBrand : true;
      const matchesYear = formData.year ? car.year === formData.year : true;
      const matchesFuel = formData.fueltype ? car.fueltype === formData.fueltype : true;
      const matchesPrice = formData.price ? car.price <= parseFloat(formData.price) : true;

      const isAvailable = !car.bookedDates?.some((booking: { pickedDate: string, returnDate: string }) => {
        const bookedStart = new Date(booking.pickedDate);
        const bookedEnd = new Date(booking.returnDate);

        // Check if selected dates overlap with any booked dates
        return selectedPickup <= bookedEnd && selectedReturn >= bookedStart;
      });

      return matchesType && matchesBrand && matchesYear && matchesFuel && matchesPrice && isAvailable;
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
    const diffTime = Math.abs(end.getTime() - start.getTime() + 1);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  // Close modal when clicking outside
  const handleCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedCar(null);
    }
  };

  const handleRentalDetailChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;
  setRentalDetails((prev) => ({
    ...prev,
    [name]: value,
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
        body: JSON.stringify({ ...formData2, carId: selectedCar.id, driver:rentalDetails.needDriver,  pickupTime:rentalDetails.pickupTime,pickupLocation: rentalDetails.pickupLocation, pickupDate:formData.pickupDate,returnDate:formData.returnDate, userId:user.email }),

      });

          console.log('res', formData.returnDate ,)

                    console.log('res', user.email)


      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to submit request');
      }

      //console.log('formData', formData)
      //alert('Request registered successfully!');
    } catch (error: unknown) {
  if (error instanceof Error) {
    alert(`Error: ${error.message}`);
  } else {
    alert('An unknown error occurred');
  }
}
    setNotificationMessage(`Request registered successfully!`);
      setShowNotification(true);
    //alert('Rental confirmed!');
   // setSelectedCar(null);
   //   router.push('/profile');

  };

// console.log('searchResult', searchResults)

//   useEffect(() => {
//     const fetchDefaultCars = async () => {
//       try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_RENT}`); // You need to create this API route
//         const data = await response.json();
//         console.log('data', data)
//         setDefaultCars(data);
//       } catch (err) {
//         console.error('Failed to fetch default cars:', err);
//       }
//     };

//     fetchDefaultCars();
//   }, []);

  return (   //#ffbebe]
   <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="max-w-6xl w-full mx-4 p-8 mt-20">
        <h1 className="text-4xl font-bold text-black mb-8 text-center">Rent a Car</h1>
        
        {/* Selected Car Modal */}
       {selectedCar && (
  <div 
    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
    onClick={handleCloseModal}
  >
    {/* Responsive container */}
    <div className="bg-white/90 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto mx-2 sm:mx-4">
      <div className="p-4 md:p-6">
        <div className="flex justify-between items-start mb-4">
          {/* Responsive title */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 max-w-[80%] break-words">
            {selectedCar.brand} {selectedCar.model} ({selectedCar.year})
          </h2>
          {/* Larger close button for mobile */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedCar(null);
            }}
            className="text-gray-500 hover:text-red-500 text-3xl p-1"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Responsive image container */}
          <div className="relative h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden">
            <Image 
              src={selectedCar.images[0]}
              alt={`${selectedCar.brand} ${selectedCar.model}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
                  
                  <div className="space-y-4">
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
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
                        <h3 className="text-gray-500 text-sm">Condition</h3>
                        <p className="font-medium">{selectedCar.seats}</p>
                      </div>
                    </div>
                    
                    {/* Rental Dates Display (non-editable) */}
                    <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Rental Period</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              {/* Driver selection - full width on mobile */}
              <div>
                <label className="block text-gray-700 mb-1">Need a Driver?</label>
                <select
                  name="needDriver"
                  value={rentalDetails.needDriver}
                  onChange={handleRentalDetailChange}
                  className="w-full p-3 border border-gray-300 rounded-md text-sm md:text-base"
                >
                  <option value="no">No, I&rsquo;ll drive myself</option>
                  <option value="yes">Yes, I need a driver</option>
                </select>
              </div>
                      
                      {/* Time & location - responsive grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-1">Pickup Time</label>
                  <select
                    name="pickupTime"
                    value={rentalDetails.pickupTime}
                    onChange={handleRentalDetailChange}
                    className="w-full p-3 border border-gray-300 rounded-md text-sm md:text-base"
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
                    placeholder="e.g. Colombo"
                    className="w-full p-3 rounded-lg border border-gray-300 text-black placeholder-gray-500 text-sm md:text-base"
                    required
                  />
                </div>
              </div>
            </div>
                    
          {/* Pricing summary */}
            <div className="bg-red-50 p-4 rounded-lg border border-red-100">
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
                    </div>
                    
                   {/* Responsive button */}
            <div className="flex justify-center">
              {user ? (
                <button
                  type="submit"
                  className="bg-white hover:bg-red-200 text-red-500 py-3 px-6 rounded shadow w-full sm:w-auto text-center"
                  onClick={handleRentNow}
                >
                  Request the vehicle
                </button>
              ) : (
                <p className="text-red-500 bg-white p-4 rounded-lg w-full text-center">
                  Sign in to rent a car
                </p>
              )}
            </div>
            </div>
                </div>
              </div>
            </div>
          </div>
        )}

   <div className="flex flex-col md:flex-row gap-8 bg-gray-200 p-6 rounded-2xl">
  {/* Left Side - Results */}
  <div className={`${hasSearched ? 'w-full' : 'hidden'}`}>
    {loading ? (
      <div className="flex justify-center items-center mt-6">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-red-500"></div>
      </div>
    ) : hasSearched ? (
      searchResults.length > 0 ? (
        <div className="mt-4">
  <h2 className="text-2xl font-bold text-black mb-6 border-b-4 border-red-600 pb-2">
    Your Search Results
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
    {searchResults.map((car, index) => (
      <div
        key={car.id || index}
        onClick={() => setSelectedCar(car)}
        className="bg-white rounded-2xl p-6 h-full cursor-pointer hover:shadow-xl hover:scale-105 transition-all border border-gray-300 hover:border-red-600"
      >
        <div className="flex gap-6 items-center">
          <div className="relative w-48 h-48 rounded-lg overflow-hidden flex-shrink-0 border-2 border-red-600">
            <Image
              src={car.images[0]}
              alt={`${car.brand} ${car.model}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-black text-xl font-semibold hover:text-red-600 transition-all">{car.brand} {car.model}</h3>
            <div className="flex gap-3 mt-2 flex-wrap">
              <span className="bg-red-700 text-gray-200 px-3 py-1 rounded-full text-sm font-semibold">
                {car.year}
              </span>
              <span className="bg-red-700 text-gray-200 px-3 py-1 rounded-full text-sm font-semibold">
                {car.transmission}
              </span>
              <span className="bg-red-700 text-gray-200 px-3 py-1 rounded-full text-sm font-semibold">
                {car.fueltype}
              </span>
            </div>
            <p className="text-xl font-bold text-red-500 mt-4">
              ${car.price}/day
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
  <button
    onClick={() => setHasSearched(false)}
    className="mt-8 text-black font-medium hover:text-red-400 transition flex items-center gap-2"
  >
    {/* <ArrowLeftIcon className="w-5 h-5" /> */}
    Back to Filters
  </button>
</div>

      ) : (
        <div className="text-center py-12">
          <div className="text-white text-2xl font-medium mb-2">
            No matching vehicles found
          </div>
          <p className="text-gray-400 mb-6">
            Try adjusting your search filters
          </p>
          <button
            onClick={() => setHasSearched(false)}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Modify Search
          </button>
        </div>
      )
    ) : null}
  </div>

  {/* Right Side - Form */}
  {!hasSearched && (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-black mb-2 font-medium">Car Type</label>
            <select
              className="w-full p-3 rounded-lg bg-white border border-gray-700 text-black focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none"
              onChange={(e) => setFormData({ ...formData, carType: e.target.value })}
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

          <div>
            <label className="block text-black mb-2">Car Brand</label>
            <select
              className="w-full p-3 rounded-lg bg-white border border-gray-700 backdrop-blur-sm text-black focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none"
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
          <div>
            <label className="block text-black mb-2">Maximum Budget</label>
            <input
              type="number"
              className="w-full p-3 rounded-lg bg-white border border-gray-700 backdrop-blur-sm text-black placeholder-black focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none"
              placeholder="Enter price"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-black mb-2">Manufacture Year</label>
            <select
              className="w-full p-3 rounded-lg bg-white border border-gray-700 backdrop-blur-sm text-black focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none"
              onChange={(e) => setFormData({ ...formData, year: e.target.value })}
            >
              <option value="">Select Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          
          {/* Other form fields with similar styling */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-black mb-2 font-medium">Pickup Date</label>
            <input
              type="date"
              className="w-full p-3 rounded-lg bg-white border-gray-700 text-black focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none placeholder-white"
              value={formData.pickupDate}
              onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-black mb-2 font-medium">Return Date</label>
            <input
              type="date"
              className="w-full p-3 rounded-lg bg-white border border-gray-700 text-black focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none"
              value={formData.returnDate}
              onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 px-6 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-red-900/30"
        >
          SEARCH VEHICLES
        </button>
      </form>
    </div>
  )}
</div>
</div>
                                                {showNotification && <Notification />}

    </div>
    
  );
}