import Image from 'next/image';
import React, { useEffect, useState } from 'react'

export interface RequestsCard {
  id: string;
  carId: string;
  userId: string;
  days: number;
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  type: string; // Add type field to differentiate between Rent, Sell, and Hire
  status:string;
  history:string;
}

export interface HireRequestsCard {
  id: string;
  driverId: string;
  userId: string;
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  description: string;
  reason: string;
  type: string; // Add type field to differentiate between Rent, Sell, and Hire
  status:string;
}

export interface CarCard {
  id: string;
  brand: string;
  model: string;
  price: number;
  year: number;
  images: string[];
  location?: string;
  description?: string;
}

export interface DriverCard {
  id: string;
  fullname: string;
  email: string;
  contact: number;
  images: string[];
  description?: string;
}

export interface SellCard {
  id: string;
  district: string;
  city: string;
  condition: number;
  brand: string,
  year: string,
  model: string,
  mileage: string;
  fueltype: number;
  engine_capacity: string,
  transmission: string,
  body_type: string,
  price: string;
  description: number;
  mobileNum: string,
  userName: string,
  type:string;
  status:string;
  images: string[];
}

interface User {
  email: string;
  given_name: string;
}



function MyHistory({ user }: { user: User }) {

  const [rentRequests, setRentRequests] = useState<RequestsCard[]>([]);
  const [hireRequests, setHireRequests] = useState<HireRequestsCard[]>([]);
  const [sellRequests, setSellRequests] = useState<SellCard[]>([]);
  const [cars, setCars] = useState<CarCard[]>([]);
  //const [drivers, setDrivers] = useState<DriverCard[]>([]);
  const [selectedType, setSelectedType] = useState('all'); // Default to 'all'
  const [loading, setLoading] = useState(true);
 // const [user, setUser] = useState<User | null>(null);
 // const [error, setError] = useState<string | null>(null);
  //const [formData, setFormData] = useState<{ [key: string]: { star: number; reason: string } }>({});


  console.log(user)

  useEffect(() => {
    const fetchRentRequests = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_RENT_REQUESTS}`);
        const contentType = response.headers.get('content-type');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          console.log('daaata', data)
          setRentRequests(data);
        } else {
          throw new Error('Expected JSON response');
        }
      } catch (error) {
        console.error('Failed to fetch rent-requests:', error);
      }

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_HIRE_REQUESTS}`);
        const contentType = response.headers.get('content-type');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          setHireRequests(data);
        } else {
          throw new Error('Expected JSON response');
        }
      } catch (error) {
        console.error('Failed to fetch hire-requests:', error);
      }
      try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BUY}`);
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          const data = await response.json();
          
          setSellRequests(data);
          setLoading(false);
        } catch (error) {
          console.error('Failed to fetch rent-requests:', error);
          setLoading(false);
        }
    };


    console.log('rent', rentRequests, cars)

    const fetchCars = async () => {
      try {
        // Fetch cars
       const carsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL_RENT_REQUESTS}`);
        if (!carsRes.ok) throw new Error(`HTTP error! status: ${carsRes.status}`);
        const carsData = await carsRes.json();
        console.log('carsData',carsData)
        setCars(carsData);
        

      } catch (error) {
        console.error('Failed to fetch cars:', error);
      }

    
    };

 
    fetchRentRequests();
    fetchCars();
  }, []);

  // Dropdown change handler
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
  };

  console.log('selectedType', selectedType)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="glass-container bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-6xl w-full mx-4 p-8">
          <h1 className="text-2xl font-bold text-black mb-8 text-center animate-pulse">Loading Your Requests...</h1>
        </div>
      </div>
    );
  }

  // if (error) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center p-4">
  //       <div className="glass-container bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-2xl w-full p-8 text-center">
  //         <h1 className="text-2xl font-bold text-white mb-4">Error Loading Requests</h1>
  //         <p className="text-white mb-6">{error}</p>
  //         <button
  //           onClick={() => window.location.reload()}
  //           className="bg-gradient-to-r from-red-400 to-red-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-all"
  //         >
  //           Try Again
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="glass-container bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-6xl w-full mx-4 p-8">
      <h1 className="text-2xl font-bold text-black mb-1 text-center">Requests</h1>

      {/* Dropdown Menu for selecting request type */}
      <select
  value={selectedType}
  onChange={handleTypeChange}
  className="bg-white p-2 rounded-md border border-gray-300"
>
  <option value="all">All Requests</option>
  <option value="rent">Rent Request</option>
  <option value="sell">Sell Request</option>
  <option value="hire">Hire Request</option>
</select>


      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          
          {/* Render Rent Requests */}
  {(selectedType === 'all' || selectedType === 'rent') && (() => {
  const filteredRentRequests = rentRequests.filter(
    (rentRequest) =>
      rentRequest.userId === user.email &&
      ['completed', 'reject', 'cancel'].includes(rentRequest.status)
  );

  if (filteredRentRequests.length === 0) {
    return (
      <p className="text-center text-gray-500">No rent requests found.</p>
    );
  }

  return filteredRentRequests.map((rentRequest) => {
    const matchedCar = cars.find((car) => car.id === rentRequest.carId);
                  return (
                    <div
                      key={rentRequest.id}
                      className={`rounded-xl p-4 shadow-lg backdrop-blur border border-white/20 bg-blue-500/30`}
                    >
                      <div className="flex flex-col lg:flex-row gap-8">
                        <div className="md:w-1/2">
                          {matchedCar?.images?.[0] && (
                            <Image
                              src={matchedCar.images[0]}
                              alt={`${matchedCar.brand} ${matchedCar.model}`}
                              className="w-80 h-auto object-cover rounded-lg mb-2"
                              width={100}
                              height={100}
                            />
                          )}
                        </div>
                        <div className="md:w-1/2">
                          <h2 className="text-xl text-black font-semibold mb-2">
                            {matchedCar ? `${matchedCar.brand} ${matchedCar.model} (${matchedCar?.year})` : 'Car not found'}
                          </h2>
                          <p className="text-black font-medium mb-2">Status: {rentRequest?.status}</p>
                          <p className="text-black font-medium mb-2">Pickup Date: {new Date(rentRequest?.pickupDate).toISOString().split('T')[0]}</p>
                          <p className="text-black font-medium mb-2">Return Date: {new Date(rentRequest?.returnDate).toISOString().split('T')[0]}</p>
                          <p className="text-black font-medium mb-2">Pickup Location: {rentRequest?.pickupLocation}</p>
                        </div>
                      </div>
                    </div>
                  );
  });
})()}
          {/* Render Sell Requests */}
       {(selectedType === 'all' || selectedType === 'sell') && (() => {
  const filteredSellRequests = sellRequests.filter(
    (sellRequest) =>
      sellRequest.userName === user.email &&
      ['completed', 'reject', 'cancel'].includes(sellRequest.status)
  );

  if (filteredSellRequests.length === 0) {
    return <p className="text-center text-gray-500">No sell requests found.</p>;
  }

  return filteredSellRequests.map((sellRequest) => (
                    <div
                      key={sellRequest.id}
                      className={`rounded-xl p-4 shadow-lg backdrop-blur border border-white/20  bg-blue-500/30`}
                    >
                      <div className="flex flex-col lg:flex-row gap-8">
                        <div className="md:w-1/2">
                          {sellRequest?.images?.[0] && (
                            <Image
                              src={sellRequest.images[0]}
                              alt={`${sellRequest.brand}`}
                              className="w-80 h-auto object-cover rounded-lg mb-2"
                              width={100}
                              height={100}
                            />
                          )}
                        </div>
                        <div className="md:w-1/2">
                          <h2 className="text-xl text-black font-semibold mb-2">
                            {sellRequest ? sellRequest.brand : 'Driver not found'}
                          </h2>
                          {/* <p className="text-black font-medium mb-2">Status: {hireRequest?.status}</p>
                        */}
                    <p className="font-medium">Location: {sellRequest.district} {sellRequest.city}</p>
                    <p className="font-medium">Condition: {sellRequest.condition}</p>
                    {/* <p className="font-medium">Brand: {request.brand}</p> */}
                    {/* <p className="font-medium">Model: {request.model}</p> */}
                    <p className="font-medium">Mileage: {sellRequest.mileage}</p>
                    <p className="font-medium">Fuel Type: {sellRequest.fueltype}</p>
                    <p className="font-medium">Engine Capacity: {sellRequest.engine_capacity}</p>
                    <p className="font-medium">Transmission: {sellRequest.transmission}</p>
                    <p className="font-medium">Body Type: {sellRequest.body_type}</p>
                    <p className="font-medium">Price: {sellRequest.price}</p>
                    <p className="font-medium">Description: {sellRequest.description}</p>
                    <p className="font-medium">Status: {sellRequest.status}</p>

                        </div>
                      </div>
                    </div>
                ));
})()}

            {/* Render Hire Requests */}
{(selectedType === 'all' || selectedType === 'hire') && (() => {
  const filteredHireRequests = hireRequests.filter(
    (hireRequest) =>
      hireRequest.userId === user.email &&
      ['completed', 'reject', 'cancel'].includes(hireRequest.status)
  );

  if (filteredHireRequests.length === 0) {
    return <p className="text-center text-gray-500">No hire requests found.</p>;
  }

  return filteredHireRequests.map((hireRequest) => (
                    <div
                      key={hireRequest.id}
                      className={`rounded-xl p-4 shadow-lg backdrop-blur border border-white/20 bg-blue-500/30 `}
                    >
                      <div className="flex flex-col lg:flex-row gap-8">

                        <div className="md:w-1/2">
                          <h2 className="text-xl text-black font-semibold mb-2">
                            {hireRequest.type}
                          </h2>
                          <p className="text-black font-medium mb-2">Status: {hireRequest?.status}</p>
                          <p className="text-black font-medium mb-2">Pickup Date: {hireRequest?.pickupDate}</p>
                          <p className="text-black font-medium mb-2">Return Date: {hireRequest?.returnDate}</p>
                          <p className="text-black font-medium mb-2">Pickup Location: {hireRequest?.pickupLocation}</p>
                          <p className="text-black font-medium mb-2">Description: {hireRequest?.description}</p>
                          <p className="text-black font-medium mb-2">Reason: {hireRequest?.reason}</p>
                        </div>
                      </div>
                    </div>
                 ));
})()}
            

        </div>
      </div>
    </div>
  );
}

export default MyHistory;
