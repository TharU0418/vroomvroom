'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Complete vehicle data
const vehicleCategories = [
  {
    id: 1,
    category: "Economy Cabs",
    description: "Budget-friendly options for city travel",
    icon: "🚗",
    options: [
      {
        id: "eco-1",
        name: "Suzuki Alto",
        price: "$12/day",
        capacity: "3 Passengers",
        luggage: "2 Bags",
        features: ["AC", "Fuel Efficient", "Great Mileage", "Bluetooth", "Power Steering"],
        image: "/types/car/suzuki alto.png",
        description: "Compact and efficient, perfect for city driving and tight parking spots.",
        specs: {
          engine: "796cc Petrol",
          transmission: "Manual",
          fuel: "Petrol",
          mileage: "22-25 km/l",
          airbags: "2",
          year: "2020-2023"
        },
        included: ["Free Cancellation", "Basic Insurance", "24/7 Support", "GPS Navigation"]
      },
      {
        id: "eco-2",
        name: "Toyota Glanza",
        price: "$12/day",
        capacity: "3 Passengers",
        luggage: "2 Bags",
        features: ["AC", "Comfortable Seats", "Touchscreen", "Rear Camera", "Keyless Entry"],
        image: "/types/car/Toyota Glanza.png",
        description: "A premium hatchback with modern features and excellent reliability.",
        specs: {
          engine: "1.2L Petrol",
          transmission: "Manual/Automatic",
          fuel: "Petrol",
          mileage: "19-22 km/l",
          airbags: "2",
          year: "2021-2023"
        },
        included: ["Free Cancellation", "Comprehensive Insurance", "Child Seat Available", "Roadside Assistance"]
      },
      {
        id: "eco-3",
        name: "Suzuki Wagon R",
        price: "$12/day",
        capacity: "3 Passengers",
        luggage: "2 Bags",
        features: ["AC", "Tall Boy Design", "Great Visibility", "Spacious Cabin", "Easy Parking"],
        image: "/types/car/suzuki wagon R.png",
        description: "Tall boy design provides excellent headroom and visibility for city driving.",
        specs: {
          engine: "1.0L Petrol",
          transmission: "Manual",
          fuel: "Petrol",
          mileage: "20-23 km/l",
          airbags: "2",
          year: "2019-2022"
        },
        included: ["Free Cancellation", "Basic Insurance", "City Guide", "24/7 Support"]
      }
    ]
  },
  {
    id: 2,
    category: "Standard / Sedan",
    description: "Comfortable sedans for family trips",
    icon: "🚙",
    options: [
      {
        id: "sedan-1",
        name: "Toyota Yaris",
        price: "$25/day",
        capacity: "4 Passengers",
        luggage: "2 Bags",
        features: ["Dual AC", "Touchscreen", "Cruise Control", "Push Start", "Premium Audio"],
        image: "/types/car/Toyota Yaris.png",
        description: "A reliable and comfortable sedan perfect for family trips and long drives.",
        specs: {
          engine: "1.5L Petrol",
          transmission: "CVT Automatic",
          fuel: "Petrol",
          mileage: "17-20 km/l",
          airbags: "7",
          year: "2021-2023"
        },
        included: ["Free Cancellation", "Comprehensive Insurance", "WiFi Hotspot", "Unlimited Mileage"]
      },
      {
        id: "sedan-2",
        name: "2022 Nissan Sentra",
        price: "$25/day",
        capacity: "4 Passengers",
        luggage: "2 Bags",
        features: ["Dual Zone AC", "Apple CarPlay", "Android Auto", "Leather Seats", "Sunroof"],
        image: "/types/car/Nissan Sentra.png",
        description: "Modern sedan with advanced technology and premium comfort features.",
        specs: {
          engine: "2.0L Petrol",
          transmission: "CVT Automatic",
          fuel: "Petrol",
          mileage: "16-19 km/l",
          airbags: "6",
          year: "2022-2023"
        },
        included: ["Free Cancellation", "Premium Insurance", "Chauffeur Service", "Refreshments"]
      },
      // {
      //   id: "sedan-3",
      //   name: "Honda City",
      //   price: "$25/day",
      //   capacity: "4 Passengers",
      //   luggage: "2 Bags",
      //   features: ["Dual AC", "Lane Watch", "Eco Assist", "LED Headlights", "Sunroof"],
      //   image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1170",
      //   description: "Premium sedan known for its reliability, comfort, and advanced safety features.",
      //   specs: {
      //     engine: "1.5L Petrol",
      //     transmission: "CVT Automatic",
      //     fuel: "Petrol",
      //     mileage: "18-21 km/l",
      //     airbags: "6",
      //     year: "2020-2023"
      //   },
      //   included: ["Free Cancellation", "Comprehensive Insurance", "Priority Support", "GPS"]
      // }
    ]
  },
  {
    id: 3,
    category: "Premium / Executive",
    description: "Luxury vehicles for special occasions",
    icon: "🏎️",
    options: [
      {
        id: "premium-1",
        name: "Toyota Premio",
        price: "$50/day",
        capacity: "4 Passengers",
        luggage: "4 Bags",
        features: ["Triple Zone AC", "Leather Interior", "Wood Finish", "Premium Sound", "Heated Seats"],
        image: "/types/car/Toyota Premio.png",
        description: "Executive sedan offering premium comfort and luxury features for business travel.",
        specs: {
          engine: "1.8L Petrol",
          transmission: "CVT Automatic",
          fuel: "Petrol",
          mileage: "15-18 km/l",
          airbags: "8",
          year: "2020-2023"
        },
        included: ["Free Cancellation", "VIP Insurance", "Professional Chauffeur", "Complimentary Refreshments"]
      },
      // {
      //   id: "premium-2",
      //   name: "BMW 3 Series",
      //   price: "$120/day",
      //   capacity: "5 Passengers",
      //   luggage: "3 Bags",
      //   features: ["Automatic AC", "iDrive System", "Parking Assistant", "Heads-up Display", "Sport Seats"],
      //   image: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=1287",
      //   description: "Ultimate driving machine with luxury features and exceptional performance.",
      //   specs: {
      //     engine: "2.0L Turbo Petrol",
      //     transmission: "8-Speed Automatic",
      //     fuel: "Petrol",
      //     mileage: "14-16 km/l",
      //     airbags: "6",
      //     year: "2021-2023"
      //   },
      //   included: ["Free Cancellation", "Luxury Insurance", "Personal Driver", "Premium Service"]
      // },
      {
        id: "premium-3",
        name: "Toyota Camry",
        price: "$50/day",
        capacity: "4 Passengers",
        luggage: "4 Bags",
        features: ["Triple Zone AC", "JBL Audio", "Panoramic Roof", "Memory Seats", "Ventilated Seats"],
        image: "/types/car/Toyota Camry.png",
        description: "Flagship sedan offering supreme comfort and advanced technology features.",
        specs: {
          engine: "2.5L Hybrid",
          transmission: "CVT Automatic",
          fuel: "Hybrid",
          mileage: "20-23 km/l",
          airbags: "10",
          year: "2021-2023"
        },
        included: ["Free Cancellation", "Premium Insurance", "Executive Driver", "VIP Support"]
      }
    ]
  },
  {
    id: 4,
    category: "SUV & MUV",
    description: "Spacious vehicles for adventure trips",
    icon: "🚙",
    options: [
      // {
      //   id: "suv-1",
      //   name: "Hyundai Creta",
      //   price: "$65/day",
      //   capacity: "5 Passengers",
      //   luggage: "4 Bags",
      //   features: ["Sunroof", "Touchscreen", "Wireless Charging", "Ventilated Seats", "Rear AC"],
      //   image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1025",
      //   description: "Popular SUV with modern features, comfortable ride, and excellent ground clearance.",
      //   specs: {
      //     engine: "1.5L Diesel",
      //     transmission: "Automatic",
      //     fuel: "Diesel",
      //     mileage: "18-21 km/l",
      //     airbags: "6",
      //     year: "2021-2023"
      //   },
      //   included: ["Free Cancellation", "SUV Insurance", "Adventure Kit", "24/7 Support"]
      // },
      {
        id: "suv-2",
        name: "Toyota CH-R",
        price: "$70/day",
        capacity: "4 Passengers",
        luggage: "5 Bags",
        features: ["Dual Tone", "Keyless Entry", "Push Start", "Lane Departure", "Adaptive Cruise"],
        image: "/types/car/Toyota CH-R.png",
        description: "Stylish crossover SUV with futuristic design and advanced safety features.",
        specs: {
          engine: "1.8L Hybrid",
          transmission: "CVT Automatic",
          fuel: "Hybrid",
          mileage: "21-24 km/l",
          airbags: "7",
          year: "2022-2023"
        },
        included: ["Free Cancellation", "Comprehensive Insurance", "Tech Package", "Roadside Assistance"]
      },
      // {
      //   id: "suv-3",
      //   name: "Kia Sonet",
      //   price: "$62/day",
      //   capacity: "5 Passengers",
      //   luggage: "3 Bags",
      //   features: ["Sunroof", "Bose Audio", "Wireless Android Auto", "Air Purifier", "Drive Modes"],
      //   image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1023",
      //   description: "Feature-packed compact SUV perfect for city driving and weekend getaways.",
      //   specs: {
      //     engine: "1.0L Turbo Petrol",
      //     transmission: "DCT Automatic",
      //     fuel: "Petrol",
      //     mileage: "18-20 km/l",
      //     airbags: "6",
      //     year: "2021-2023"
      //   },
      //   included: ["Free Cancellation", "Basic Insurance", "City Navigation", "24/7 Support"]
      // }
    ]
  },
  {
    id: 5,
    category: "Flat-Roof Van",
    description: "Spacious vans for group travel",
    icon: "🚐",
    options: [
      {
        id: "f-van-1",
        name: "Nissan Caravan",
        price: "$65/day",
        capacity: "8/10 Passengers",
        luggage: "6 Bags",
        features: ["Sunroof", "Touchscreen", "Wireless Charging", "Ventilated Seats", "Rear AC"],
        image: "/types/car/Nissan Caravan flat roof.png",
        description: "Nissan Caravan is a spacious van ideal for group travel with comfort and convenience.",
        specs: {
          engine: "1.5L Diesel",
          transmission: "Automatic",
          fuel: "Diesel",
          mileage: "18-21 km/l",
          airbags: "6",
          year: "2021-2023"
        },
        included: ["Free Cancellation", "SUV Insurance", "Adventure Kit", "24/7 Support"]
      },
      
    ]
  },
  {
    id: 6,
    category: "High-Roof Van",
    description: "Spacious vans for group travel",
    icon: "🚐",
    options: [
      {
        id: "h-van-1",
        name: "Toyota HiAce",
        price: "$80/day",
        capacity: "10/14 Passengers",
        luggage: "6 Bags",
        features: ["Sunroof", "Touchscreen", "Wireless Charging", "Ventilated Seats", "Rear AC"],
        image: "/types/car/Toyota HiAce high roof.png",
        description: "Popular SUV with modern features, comfortable ride, and excellent ground clearance.",
        specs: {
          engine: "1.5L Diesel",
          transmission: "Automatic",
          fuel: "Diesel",
          mileage: "18-21 km/l",
          airbags: "6",
          year: "2021-2023"
        },
        included: ["Free Cancellation", "SUV Insurance", "Adventure Kit", "24/7 Support"]
      },
      
    ]
  },
  {
    id: 7,
    category: "Tourist Bus",
    description: "Spacious vans for group travel",
    icon: "🚐",
    options: [
      {
        id: "bus",
        name: "Toyota Coaster",
        price: "$100/day",
        capacity: "23 Passengers",
        luggage: "12 Bags",
        features: ["Sunroof", "Touchscreen", "Wireless Charging", "Ventilated Seats", "Rear AC"],
        image: "/types/car/Toyota Coaster.png",
        description: "Popular SUV with modern features, comfortable ride, and excellent ground clearance.",
        specs: {
          engine: "1.5L Diesel",
          transmission: "Automatic",
          fuel: "Diesel",
          mileage: "18-21 km/l",
          airbags: "6",
          year: "2021-2023"
        },
        included: ["Free Cancellation", "SUV Insurance", "Adventure Kit", "24/7 Support"]
      },
      
    ]
  },
];

export default function VehicleCategoryPage() {
  const params = useParams<{ id: string }>();
  if (!params) {
    return null; // or loading / error UI
  }
  const id = parseInt(params.id, 10);
  
  const category = vehicleCategories.find(c => c.id === id);
  //const [selectedVehicle, setSelectedVehicle] = useState(category?.options[0]);
 // const [selectedImage, setSelectedImage] = useState(0);
 const [selectedVehicle, setSelectedVehicle] = useState(
    category?.options[0]
  );
 
 const [bookingDetails, setBookingDetails] = useState({
    rentalPeriod: "1 Day",
    pickupLocation: "",
    pickupDate: "",
    pickupTime: "09:00"
  });

  useEffect(() => {
    if (category && category.options.length > 0) {
      setSelectedVehicle(category.options[0]);
    }
  }, [category]);

  if (!category || !selectedVehicle) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Category Not Found</h1>
          <Link href="/" className="text-red-500 hover:text-red-400">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsAppBooking = () => {
    const phoneNumber = "+94740662095"; // Replace with your WhatsApp number
    const message = `Hello! I would like to book the ${selectedVehicle.name} from ${category.category} category.
    
Booking Details:
- Vehicle: ${selectedVehicle.name}
- Category: ${category.category}
- Pickup Date: ${bookingDetails.pickupDate || 'To be specified'}

Please contact me for further details.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Navigation */}
      <nav className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-red-400 transition-colors">
            <span>←</span>
            Back to All Vehicles
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Category Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{category.icon}</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white">{category.category}</h1>
            </div>
            <p className="text-gray-400 text-lg">{category.description}</p>
          </div>

          {/* Vehicle Selection & Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Vehicle Selection & Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Vehicle Selection Dropdown */}
              <div className="bg-gray-800/50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Select Your Vehicle</h2>
                  <span className="text-red-500 font-bold text-xl">{selectedVehicle.price}  onwards</span>
                </div>
                
                <div className="space-y-4">
                  <select
                    value={selectedVehicle.id}
                    onChange={(e) => {
                      const vehicle = category.options.find(v => v.id === e.target.value);
                      if (vehicle) setSelectedVehicle(vehicle);
                    }}
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white text-lg focus:border-red-500 focus:outline-none"
                  >
                    {category.options.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name} 
                      </option>
                    ))}
                  </select>
                  
                  {/* Quick Vehicle Info */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-900/50 rounded-xl p-4">
                      <div className="text-gray-400 text-sm mb-1">Capacity</div>
                      <div className="text-white font-semibold">{selectedVehicle.capacity}</div>
                    </div>
                    <div className="bg-gray-900/50 rounded-xl p-4">
                      <div className="text-gray-400 text-sm mb-1">Luggage</div>
                      <div className="text-white font-semibold">{selectedVehicle.luggage}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Vehicle Image */}
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src={selectedVehicle.image}
                  alt={selectedVehicle.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-xl">
                  <h3 className="text-2xl font-bold text-white">{selectedVehicle.name}</h3>
                </div>
              </div>

              {/* Description */}
              <div className="bg-gray-800/50 rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
                <p className="text-gray-300 text-lg leading-relaxed">{selectedVehicle.description}</p>
              </div>

              {/* Features */}
              {/* <div className="bg-gray-800/50 rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Features & Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedVehicle.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg">
                      <span className="text-red-500">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* Specifications */}
              {/* <div className="bg-gray-800/50 rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Specifications</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {Object.entries(selectedVehicle.specs).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-gray-400 text-sm mb-1 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      <div className="text-white font-semibold text-lg">{value}</div>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>

            {/* Right Column - Booking & Included */}
            <div className="space-y-6">
              {/* Booking Card - WhatsApp Integration */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Book via WhatsApp</h3>
                
                <div className="space-y-4 mb-6">
                  {/* <div>
                    <label className="block text-gray-400 text-sm mb-2">Rental Period</label>
                    <select 
                      value={bookingDetails.rentalPeriod}
                      onChange={(e) => setBookingDetails({...bookingDetails, rentalPeriod: e.target.value})}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white"
                    >
                      <option>1 Day</option>
                      <option>3 Days</option>
                      <option>1 Week</option>
                      <option>2 Weeks</option>
                      <option>1 Month</option>
                    </select>
                  </div> */}
                  
                  {/* <div>
                    <label className="block text-gray-400 text-sm mb-2">Pickup Location</label>
                    <input 
                      type="text" 
                      placeholder="Colombo, Kandy, Airport, etc."
                      value={bookingDetails.pickupLocation}
                      onChange={(e) => setBookingDetails({...bookingDetails, pickupLocation: e.target.value})}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white"
                    />
                  </div> */}
                  
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Pickup Date</label>
                    <input 
                      type="date" 
                      value={bookingDetails.pickupDate}
                      onChange={(e) => setBookingDetails({...bookingDetails, pickupDate: e.target.value})}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white"
                    />
                  </div>
                  
                </div>
                
                <button 
                  onClick={handleWhatsAppBooking}
                  className="w-full py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <span>📱</span>
                  Book on WhatsApp
                </button>
                
                <p className="text-gray-400 text-sm text-center mt-4">
                  We will respond within 15 minutes
                </p>
              </div>

              {/* Included Services */}
              <div className="bg-gray-800/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6">Included Services</h3>
                <ul className="space-y-3">
                  {selectedVehicle.included.map((service, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="text-red-500">✓</span>
                      <span className="text-gray-300">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-800/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Need Quick Help?</h3>
                <p className="text-gray-400 mb-4">Call or WhatsApp us 24/7</p>
                <div className="space-y-3">
                  <a 
                    href="tel:+94771234567"
                    className="block w-full py-3 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors text-center"
                  >
                    📧 Email  - hellovroomvroom@outlook.com
                  </a>
                  <a 
                    href="https://wa.me/94771234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-center"
                  >
                    📱 WhatsApp  - +94717505090
                  </a>
                </div>
              </div>

              {/* Other Categories */}
              {/* <div className="bg-gray-800/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Other Categories</h3>
                <div className="space-y-3">
                  {vehicleCategories
                    .filter(c => c.id !== category.id)
                    .slice(0, 2)
                    .map(otherCategory => (
                      <Link href={`/vehicles/${otherCategory.id}`} key={otherCategory.id}>
                        <div className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                          <span>{otherCategory.icon}</span>
                          <span className="text-white">{otherCategory.category}</span>
                        </div>
                      </Link>
                    ))
                  }
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}