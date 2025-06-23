'use client';
import { useState } from 'react';
import { FileUpload } from '../components/ui/file-upload';
import { locations } from '@/public/data/location';
import { brand } from '@/public/data/brand';
import { ToggleSwitch } from '../components/ToggleSwitch ';
import { useRouter } from 'next/navigation';

export default function Sell() {
  const router = useRouter(); // ✅ Move here

  const [formData, setFormData] = useState({
    district:'', city:'', condition: '', brand: '', year: '',
    model: '', mileage: '', fueltype: '', engine_capacity: '',
    transmission: '', body_type: '', price: '', description: '',
    mobileNum:'', negotiable:false, userName:''
  });

  const [files, setFiles] = useState<File[]>([]);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const Notification = () => (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out animate-fadeInUp">
        <div className="flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span className="font-semibold">{notificationMessage}</span>
        </div>
      </div>
    </div>
  );

  const handleFileUpload = (files: File[]) => {
    setFiles(files);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requiredStringFields: (keyof typeof formData)[] = [
      'district', 'city', 'condition', 'brand', 'year', 'model',
      'mileage', 'fueltype', 'engine_capacity', 'transmission',
      'body_type', 'price', 'description', 'mobileNum', 'userName'
    ];

    if (
      requiredStringFields.some((field) => !formData[field].toString().trim()) ||
      files.length === 0
    ) {
      alert('Please fill all required fields and upload at least one image');
      return;
    }

    const formDataToSend = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, String(value));
    });

    files.forEach((file) => {
      formDataToSend.append('images', file);
    });

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BUY}`, {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) throw new Error('Submission failed');

      //const result = await response.json();
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



  ////

 

const currentYear = new Date().getFullYear();
const startYear = 1990;
const years = Array.from(new Array(currentYear - startYear + 1), (val, index) => currentYear - index);

const districts = Object.keys(locations);
const cities = formData.district ? locations[formData.district as keyof typeof locations] : [];


  

  // Fix all form field onChange handlers  bg-gradient-to-r from-[#FD1D1D] to-[#FCB045]
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 via-red-700 to-red-900  p-4">
      
      <div className="glass-container bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-6xl w-full mx-4 p-8 mt-20">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Sell your Car</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Year and Model */}
          {/* <div className="grid grid-cols-2 gap-4"> */}
            {/* <div> */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-2">Select District</label>
                  <select
                    value={formData.district}
                    onChange={(e) =>
                      setFormData({ ...formData, district: e.target.value, city: '' })
                    }
                    className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black"
                    //required
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
                <label className="block text-white mb-2 ">Select City</label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black"
                // required
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

            {/* </div> */}
          {/* </div> */}

          {/* Condition Dropdown */}
          <div>
            <label className="block text-white mb-2">Condition</label>
            <select
              className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black"
              required
              value={formData.condition}
              onChange={(e) => setFormData({...formData, condition: e.target.value})}
            >
              <option value="">Select Condition</option>
              <option value="new">Brand New</option>
              <option value="used">Used</option>
            </select>
          </div>

          {/* Car Brand Dropdown */}
          <div>
            <label className="block text-white mb-2">Car Brand</label>
            <select
              className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black"
              required
              value={formData.brand}
              onChange={(e) => setFormData({...formData, brand: e.target.value})}
            >
              <option value="">Select Car Brand</option>
              {brand.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          {/* Year and Model */}
          <div className="grid grid-cols-2 gap-4">
            <div>
  <label className="block text-white mb-2">Manufacture Year</label>
  <select
    className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black"
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
              <label className="block text-white mb-2">Model</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black placeholder-black"
                placeholder="Enter model"
                required
                value={formData.model}
                onChange={(e) => setFormData({...formData, model: e.target.value})}
              />
            </div>
          </div>

          {/* Mileage and Fuel Type */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white mb-2">Mileage (km)</label>
              <input
                type="number"
                className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black placeholder-black"
                placeholder="Enter mileage"
                required
                value={formData.mileage}
                onChange={(e) => setFormData({...formData, mileage: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-white mb-2">Fuel Type</label>
              <select
                className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black"
                required
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
          </div>

          {/* Engine and Transmission */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white mb-2">Engine Capacity</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black placeholder-black"
                placeholder="Enter engine capacity"
                required
                value={formData.engine_capacity}
                onChange={(e) => setFormData({...formData, engine_capacity: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-white mb-2">Transmission</label>
              <select
                className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black"
                required
                value={formData.transmission}
                onChange={(e) => setFormData({...formData, transmission: e.target.value})}
              >
                <option value="">Select Transmission</option>
                <option value="automatic">Automatic</option>
                <option value="manual">Manual</option>
              </select>
            </div>
          </div>

          {/* Body Type and Price */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white mb-2">Body Type</label>
              <select
                className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black"
                required
                value={formData.body_type}
                onChange={(e) => setFormData({...formData, body_type: e.target.value})}
              >
                <option value="">Select Body Type</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="hatchback">Hatchback</option>
                <option value="coupe">Coupe</option>
              </select>
            </div>
            <div>
              <label className="block text-white mb-2">Price</label>
              <input
                type="number"
                className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black placeholder-black"
                placeholder="Enter price"
                required
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
              />
            </div>
          </div>
    <div>
  <label className="block text-white mb-2">Negotiable</label>
 <ToggleSwitch
  checked={formData.negotiable}
  onChange={() =>
    setFormData((prev) => ({
      ...prev,
      negotiable: !prev.negotiable
    }))
  }
/>

</div>



          {/* Description */}
          <div>
            <label className="block text-white mb-2">Description</label>
            <textarea
              className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-black placeholder-black"
              placeholder="More about your car"
              required
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows={4}
            />
          </div>

         

          {/* File Upload */}
          <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
            <FileUpload onChange={handleFileUpload} />
          </div>


 
     <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg hover:opacity-90 transition-all"
          //  disabled={!user}

          >
            Submit Listing
          </button>



        </form>
      </div>
                  {showNotification && <Notification />}

    </div>
  );
}