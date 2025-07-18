'use client';
import { useEffect, useState } from 'react';
import { FileUpload } from '../../components/ui/file-upload';
import { locations } from '@/public/data/location';
import { brand } from '@/public/data/brand';
import { useAuth } from '@/hooks/useAuth';
import { DecodedToken, decodeToken } from '@/utils/decodeToken';
import { useRouter } from 'next/navigation';
import { ToggleSwitch } from '../../components/ToggleSwitch ';

export default function Sell() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    district: '', city: '', condition: '', brand: '', year: '',
    model: '', mileage: '', fueltype: '', engine_capacity: '',
    transmission: '', body_type: '', price: '', description: '',
    mobileNum: '', negotiable: false, userId: ''
  });
  const [files, setFiles] = useState<File[]>([]);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [userDetails, setUserDetails] = useState<DecodedToken | null>(null);
  const router = useRouter();
  const { user } = useAuth();

  // Form steps
  const steps = [
    "Location",
    "Car Details",
    "Specifications",
    "Pricing",
    "Images"
  ];

  // Notification component
  const Notification = () => (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out animate-fadeInUp">
        <div className="flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span className="font-semibold">{notificationMessage}</span>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    const token = localStorage.getItem('idToken');
    if (token) {
      const decoded = decodeToken(token);
      if (decoded && decoded.email && decoded.given_name && decoded.nickname) {
        setUserDetails({
          email: decoded.email,
          given_name: decoded.given_name,
          nickname: decoded.nickname
        });
      }
    }
  }, []);

  const handleFileUpload = (files: File[]) => {
    setFiles(files);
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 5));
    } else {
      setNotificationMessage('Please fill all required fields');
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!formData.district && !!formData.city;
      case 2:
        return !!formData.condition && !!formData.brand && !!formData.year && !!formData.model;
      case 3:
        return !!formData.mileage && !!formData.fueltype && 
               !!formData.engine_capacity && !!formData.transmission && 
               !!formData.body_type;
      case 4:
        return !!formData.price;
      default:
        return true;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(5) || files.length === 0) {
      setNotificationMessage('Please fill all required fields and upload at least one image');
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
      return;
    }

    try {
      const base64Images = await Promise.all(
        files.map(file => {
          return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });
        })
      );

      const payload = {
        ...formData,
        images: base64Images,
        status: 'pending',
        report: null,
        userId: userDetails?.email,
        mobileNum: userDetails?.nickname
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BUY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Submission failed');

      setNotificationMessage('Car listed successfully!');
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
      router.push('/profile');
    } catch (error) {
      console.error('Error:', error);
      setNotificationMessage('Error submitting form');
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  const currentYear = new Date().getFullYear();
  const startYear = 1990;
  const years = Array.from(new Array(currentYear - startYear + 1), (val, index) => currentYear - index);
  const districts = Object.keys(locations);
  const cities = formData.district ? locations[formData.district as keyof typeof locations] : [];

  // Step components
  const Step1 = () => (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2">Location Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 mb-2 font-medium">Select District</label>
          <select
            value={formData.district}
            onChange={(e) => setFormData({ ...formData, district: e.target.value, city: '' })}
            className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-red-500 focus:ring-1 focus:ring-red-500"
            required
          >
            <option value="">-- Choose a District --</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-medium">Select City</label>
          <select
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-red-500 focus:ring-1 focus:ring-red-500"
            required
            disabled={!formData.district}
          >
            <option value="">-- Choose a City --</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );

  const Step2 = () => (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2">Car Information</h2>
      <div>
        <label className="block text-gray-700 mb-2 font-medium">Condition</label>
        <select
          className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-red-500 focus:ring-1 focus:ring-red-500"
          required
          value={formData.condition}
          onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
        >
          <option value="">Select Condition</option>
          <option value="new">Brand New</option>
          <option value="used">Used</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 mb-2 font-medium">Car Brand</label>
        <select
          className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-red-500 focus:ring-1 focus:ring-red-500"
          required
          value={formData.brand}
          onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
        >
          <option value="">Select Car Brand</option>
          {brand.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 mb-2 font-medium">Manufacture Year</label>
          <select
            className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-red-500 focus:ring-1 focus:ring-red-500"
            required
            value={formData.year}
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
        <div>
          <label className="block text-gray-700 mb-2 font-medium">Model</label>
          <input
            type="text"
            className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
            placeholder="Enter model"
            required
            value={formData.model}
            onChange={(e) => setFormData({ ...formData, model: e.target.value })}
          />
        </div>
      </div>
    </div>
  );

  const Step3 = () => (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2">Technical Specifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 mb-2 font-medium">Mileage (km)</label>
          <input
            type="number"
            className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
            placeholder="Enter mileage"
            required
            value={formData.mileage}
            onChange={(e) => setFormData({ ...formData, mileage: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2 font-medium">Fuel Type</label>
          <select
            className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-red-500 focus:ring-1 focus:ring-red-500"
            required
            value={formData.fueltype}
            onChange={(e) => setFormData({ ...formData, fueltype: e.target.value })}
          >
            <option value="">Select Fuel Type</option>
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
            <option value="electric">Electric</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 mb-2 font-medium">Engine Capacity</label>
          <input
            type="text"
            className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
            placeholder="Enter engine capacity"
            required
            value={formData.engine_capacity}
            onChange={(e) => setFormData({ ...formData, engine_capacity: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2 font-medium">Transmission</label>
          <select
            className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-red-500 focus:ring-1 focus:ring-red-500"
            required
            value={formData.transmission}
            onChange={(e) => setFormData({ ...formData, transmission: e.target.value })}
          >
            <option value="">Select Transmission</option>
            <option value="automatic">Automatic</option>
            <option value="manual">Manual</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-gray-700 mb-2 font-medium">Body Type</label>
        <select
          className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-red-500 focus:ring-1 focus:ring-red-500"
          required
          value={formData.body_type}
          onChange={(e) => setFormData({ ...formData, body_type: e.target.value })}
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
    </div>
  );

  const Step4 = () => (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2">Pricing & Description</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 mb-2 font-medium">Price ($)</label>
          <input
            type="number"
            className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
            placeholder="Enter price"
            required
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          />
        </div>
        <div className="flex items-center pt-6">
          <label className="block text-gray-700 mb-2 font-medium mr-4">Negotiable</label>
          <ToggleSwitch
            checked={formData.negotiable}
            onChange={() => setFormData(prev => ({ ...prev, negotiable: !prev.negotiable }))}
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-700 mb-2 font-medium">Description</label>
        <textarea
          className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
          placeholder="More about your car"
          required
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={4}
        />
      </div>
    </div>
  );

  const Step5 = () => (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2">Upload Images</h2>
      <div className="w-full max-w-4xl mx-auto min-h-96 border-2 border-dashed border-gray-300 bg-white rounded-lg p-4">
        <FileUpload onChange={handleFileUpload} />
      </div>
      
      {!user && (
        <p className="text-red-500 mt-4 text-center bg-red-50 p-4 rounded-lg border border-red-200">
          Sign in to sell your car.
        </p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 pt-20">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden mt-20">
        {/* Progress bar */}
        <div className="bg-red-600 text-white p-4 text-center">
          <h1 className="text-3xl font-bold mb-2">Sell your Car</h1>
          <div className="flex justify-center space-x-2 mt-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep > index + 1 
                    ? 'bg-green-500' 
                    : currentStep === index + 1 
                      ? 'bg-white text-red-600' 
                      : 'bg-gray-300'
                }`}>
                  {index + 1}
                </div>
                <div className="ml-2 text-sm font-medium">{step}</div>
                {index < steps.length - 1 && (
                  <div className={`w-10 h-1 mx-2 ${currentStep > index + 1 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {currentStep === 1 && <Step1 />}
          {currentStep === 2 && <Step2 />}
          {currentStep === 3 && <Step3 />}
          {currentStep === 4 && <Step4 />}
          {currentStep === 5 && <Step5 />}

          {/* Navigation buttons */}
          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-2 rounded-lg font-medium ${
                currentStep === 1
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              Previous
            </button>

            {currentStep < 5 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={!user}
                className={`px-6 py-2 rounded-lg font-medium ${
                  !user
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-red-600 to-red-800 text-white hover:from-red-700 hover:to-red-900'
                }`}
              >
                Submit Listing
              </button>
            )}
          </div>
        </form>
      </div>
      {showNotification && <Notification />}
    </div>
  );
}