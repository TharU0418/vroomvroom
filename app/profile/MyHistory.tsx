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

// interface User {
//   email: string;
//   userId: string;
// }

function MyHistory() {
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

  useEffect(() => {
    const fetchRentRequests = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://qjfm2z3b55.execute-api.eu-north-1.amazonaws.com/rent-request/rent-requests`);
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
          const response = await fetch(`https://yzrt64o9ga.execute-api.eu-north-1.amazonaws.com/buy/buy-cars`);
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
       const carsRes = await fetch('https://qjfm2z3b55.execute-api.eu-north-1.amazonaws.com/rent-request/rent');
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
      <div className="mb-6 flex justify-center">
        <select
          value={selectedType}
          onChange={handleTypeChange}
          className="bg-white p-2 rounded-md border border-gray-300"
        >
          {/* <option value="all">All Requests</option> */}
          <option value="rent">Rent Request</option>
          <option value="sell">Sell Request</option>
          <option value="hire">Hire Request</option>
        </select>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          
          {/* Render Rent Requests */}
          {selectedType === 'all' || selectedType === 'rent'
            ? rentRequests
                .filter((rentRequest) => rentRequest.type === selectedType || selectedType === 'rent' && rentRequest.history || (rentRequest?.status === 'completed' ||
                rentRequest?.status === 'reject' ||
                rentRequest?.status === 'cancel' 
              ))
                
                .map((rentRequest) => {
                  const matchedCar = cars.find((car) => car.id === rentRequest.carId);
                //  const isMyRequest = user?.email === rentRequest.userId;

                 // if (!isMyRequest) return null;

                  return (
                    <div
                      key={rentRequest.id}
                      className={`rounded-xl p-4 shadow-lg backdrop-blur border border-white/20 ${
                        rentRequest.status === 'reject'
                          ? 'bg-red-500/50'
                          : rentRequest.status === 'cancel'
                          ? 'bg-blue-500/30'
                          : rentRequest.status === 'completed'
                          ? 'bg-green-500/100'
                          : 'bg-white/10'
                      }`}
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
                })
            : null}

          {/* Render Sell Requests */}
          {selectedType === 'all' || selectedType === 'sell'
            ? sellRequests
            
                .filter((sellRequest) => sellRequest.type === selectedType || selectedType === 'sell' 
             //   && //sellRequest?.history == true || 
               // (sellRequest?.status === 'completed' ||
               // sellRequest?.status === 'reject' ||
                //sellRequest?.status === 'cancel' 
            //  )
            )
                
                .map((sellRequest) => {

                  console.log('sellRequests', sellRequests)
                  //const matchedDriver = drivers.find((driver) => driver._id === hireRequest.driverId);
               //   const isMyRequest = user?.userId === sellRequest.user;

                                    console.log('sellRequests 2', sellRequests)
           //       console.log('isMyRequest', isMyRequest)


                //  if (!isMyRequest) return null;

                                    console.log('sellRequests 3', sellRequests)

                  return (
                    <div
                      key={sellRequest.id}
                      className={`rounded-xl p-4 shadow-lg backdrop-blur border border-white/20 ${
                        sellRequest.status === 'reject'
                          ? 'bg-red-500/50'
                          : sellRequest.status === 'cancel'
                          ? 'bg-blue-500/30'
                          : sellRequest.status === 'completed'
                          ? 'bg-green-500/100'
                          : 'bg-white/10'
                      }`}
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
                  );
                })
            : null}

            {/* Render Hire Requests */}
          {selectedType === 'hire' || selectedType === 'hire'
            ? hireRequests
            
                .filter((hireRequest) => hireRequest.type === selectedType || selectedType === 'hire')
                .map((hireRequest) => {
                                    console.log('22222222222222222222222 Hire')

                 // const matchedDriver = drivers.find((driver) => driver._id === hireRequest.driverId);
                //  const isMyRequest = user?.email === hireRequest.userId;

                  console.log('22222222222222222222222 Hire')
                  //if (!isMyRequest) return null;

                  return (
                    <div
                      key={hireRequest.id}
                      className={`rounded-xl p-4 shadow-lg backdrop-blur border border-white/20 ${
                        hireRequest.status === 'reject'
                          ? 'bg-red-500/50'
                          : hireRequest.status === 'cancel'
                          ? 'bg-blue-500/30'
                          : hireRequest.status === 'completed'
                          ? 'bg-green-500/100'
                          : 'bg-white/10'
                      }`}
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
                  );
                })
            : null}

        </div>
      </div>
    </div>
  );
}

export default MyHistory;
