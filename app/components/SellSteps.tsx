// components/SellSteps.tsx
'use client';
import React from 'react';
import { locations } from '@/public/data/location';
import { brand } from '@/public/data/brand';
import { FileUpload } from './ui/file-upload';
import { ToggleSwitch } from './ToggleSwitch ';

interface SellStepProps {
  formData: any;
  setFormData: (data: any) => void;
  files?: File[];
  previews?: string[];
  onFileChange?: (files: File[]) => void;
  user?: any;
}

export const Step1 = ({ formData, setFormData }: SellStepProps) => {
  const districts = Object.keys(locations);
  const cities = formData.district ? locations[formData.district as keyof typeof locations] : [];

  return (
    <div className="space-y-6 animate-fadeIn">
<h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2">Location Details</h2>      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 mb-2 font-medium">Select District</label>
          <select
            value={formData.district}
            onChange={(e) => setFormData({ ...formData, district: e.target.value, city: '' })}
             className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-red-500 focus:ring-1 focus:ring-red-500"
            required
          >
            <option value="">-- Choose a District --</option>
            {districts.map((d) => <option key={d}>{d}</option>)}
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
            {cities.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
};

export const Step2 = ({ formData, setFormData }: SellStepProps) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1990 + 1 }, (_, i) => currentYear - i);

  return (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2">Car Information</h2>
      <div>

    <label className="block text-gray-700 mb-2 font-medium">Condition</label>
      <select
        value={formData.condition}
        onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
        className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-red-500 focus:ring-1 focus:ring-red-500"
          required
      >
        <option value="">Select Condition</option>
        <option value="new">Brand New</option>
        <option value="used">Used</option>
      </select>
</div>
<div>
        <label className="block text-gray-700 mb-2 font-medium">Car Brand</label>
      <select
        value={formData.brand}
        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
        className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-red-500 focus:ring-1 focus:ring-red-500"
          required
      >
        <option value="">Select Car Brand</option>
        {brand.map((b) => <option key={b}>{b}</option>)}
      </select>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 mb-2 font-medium">Manufacture Year</label>
      <select
        value={formData.year}
        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
        className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-red-500 focus:ring-1 focus:ring-red-500"
            required
      >
        <option value="">Select Year</option>
        {years.map((y) => <option key={y}>{y}</option>)}
      </select>
</div>
<div>
          <label className="block text-gray-700 mb-2 font-medium">Model</label>
      <input
        type="text"
        value={formData.model}
        onChange={(e) => setFormData({ ...formData, model: e.target.value })}
        className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
            placeholder="Enter model"
            required
      />
    </div>
    </div>
    </div>
  );
};

export const Step3 = ({ formData, setFormData }: SellStepProps) => (
  <div className="space-y-6 animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2">Technical Specifications</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 mb-2 font-medium">Mileage (km)</label>
    <input
      type="number"
      value={formData.mileage}
      onChange={(e) => setFormData({ ...formData, mileage: e.target.value })}
className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
            placeholder="Enter mileage"
            required    />
</div>
        <div>
          <label className="block text-gray-700 mb-2 font-medium">Fuel Type</label>
    <select
      value={formData.fueltype}
      onChange={(e) => setFormData({ ...formData, fueltype: e.target.value })}
      className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-red-500 focus:ring-1 focus:ring-red-500"
            required
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
      value={formData.engine_capacity}
      onChange={(e) => setFormData({ ...formData, engine_capacity: e.target.value })}
      className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
            placeholder="Enter engine capacity"
            required
    />
</div>
        <div>
          <label className="block text-gray-700 mb-2 font-medium">Transmission</label>
    <select
      value={formData.transmission}
      onChange={(e) => setFormData({ ...formData, transmission: e.target.value })}
            className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-red-500 focus:ring-1 focus:ring-red-500"
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
      value={formData.body_type}
      onChange={(e) => setFormData({ ...formData, body_type: e.target.value })}
      className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-red-500 focus:ring-1 focus:ring-red-500"
          required
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

export const Step4 = ({ formData, setFormData }: SellStepProps) => (
  <div className="space-y-6 animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2">Pricing & Description</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 mb-2 font-medium">Price ($)</label>
    <input
      type="number"
      value={formData.price}
      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
     className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
            placeholder="Enter price"
            required

    />
</div>
    <div className="flex flex-col gap-2">
  <label className="block text-gray-700 font-medium">Negotiable</label>
  <div className="flex items-center gap-6">
    <label className="flex items-center gap-2">
      <input
        type="radio"
        name="negotiable"
        value="true"
        checked={formData.negotiable === true}
        onChange={() => setFormData(prev => ({ ...prev, negotiable: true }))}
        className="form-radio text-blue-600"
      />
      <span>Yes</span>
    </label>
    <label className="flex items-center gap-2">
      <input
        type="radio"
        name="negotiable"
        value="false"
        checked={formData.negotiable === false}
        onChange={() => setFormData(prev => ({ ...prev, negotiable: false }))}
        className="form-radio text-blue-600"
      />
      <span>No</span>
    </label>
  </div>
</div>

</div>
<div>
        <label className="block text-gray-700 mb-2 font-medium">Description</label>
    <textarea
      value={formData.description}
      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      rows={4}
          className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
          required    />
  </div>
  </div>
);

export const Step5 = ({ onFileChange, previews = [], user }: SellStepProps) => (
  <div className="space-y-6 animate-fadeIn">
    <h2 className="text-2xl font-bold">Upload Images</h2>
    <FileUpload onChange={onFileChange!} previews={previews} />
    {/* {!user && (
      <p className="text-red-500 mt-4 text-center bg-red-50 p-4 rounded-lg border border-red-200">
        Sign in to sell your car.
      </p>
    )} */}
  </div>
);
