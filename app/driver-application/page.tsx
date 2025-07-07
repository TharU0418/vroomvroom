'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import emailjs from '@emailjs/browser';

export default function DriverApplication() {
  const router = useRouter();
  const [formData, setFormData] = useState<{
  name: string;
  email: string;
  phone: string;
  categories: string[];
  message: string;
  file: File | null;
}>({
  name: '',
  email: '',
  phone: '',
  categories: [],
  message: '',
  file: null
});



const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value, type } = e.target;

  if (type === 'checkbox') {
    const target = e.target as HTMLInputElement;
    const checked = target.checked;
    const updatedCategories = checked
      ? [...formData.categories, value]
      : formData.categories.filter((cat) => cat !== value);

    setFormData((prev) => ({
      ...prev,
      categories: updatedCategories
    }));
  } else if (type === 'file') {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      file
    }));
  } else {
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }
};



const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;

  const formDataToSend = new FormData();
  formDataToSend.append('name', formData.name);
  formDataToSend.append('email', formData.email);
  formDataToSend.append('phone', formData.phone);
  formDataToSend.append('categories', formData.categories.join(', '));
  formDataToSend.append('message', formData.message);

  if (formData.file) {
    formDataToSend.append('file', formData.file);
  }

  try {
    const result = await emailjs.sendForm(
      'service_vhacbhf',
      'template_0evfudc',
      form,
      'v8tDyGLe1WnKiihEE'
    );

    console.log('Email sent successfully:', result.text);
    alert('Application submitted successfully!');
    router.push('/thank-you'); // or wherever you want to redirect

    setFormData({
      name: '',
      email: '',
      phone: '',
      categories: [],
      message: '',
      file: null
    });
  } catch (error) {
    console.error('Failed to send email:', error);
    alert('Something went wrong. Please try again.');
  }
};



  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 via-red-700 to-red-900 p-4">
      <div className="glass-container bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-2xl w-full mx-4 p-6 md:p-8 mt-10 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">Driver Application</h1>
        <p className="text-gray-200 text-center mb-8">Join our team of professional drivers</p>
        
<form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-white mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-white mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-white mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Drive Categories */}
          <div>
            <label className="block text-white mb-3">
              Select Drive Categories
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['One Time Booking', 'Multi-Day Hire', 'Drink and Drive', 'Long Term Driver'].map((category) => (
                <div key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    id={category}
                    name="categories"
                    value={category}
                    checked={formData.categories.includes(category)}
                    onChange={handleChange}
                    className="h-5 w-5 text-red-600 focus:ring-red-500"
                  />
                  <label htmlFor={category} className="ml-2 text-gray-200">
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* File Upload */}
<div>
  <label htmlFor="file" className="block text-white mb-2">
    Upload Cover Letter / CV (PDF, DOCX)
  </label>
  <input
    type="file"
    id="file"
    name="file"
    accept=".pdf,.doc,.docx"
    onChange={handleChange}
    className="w-full text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-600 file:text-white hover:file:bg-red-700"
  />
</div>


          {/* Message Box */}
          <div>
            <label htmlFor="message" className="block text-white mb-2">
              Tell us about yourself
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300"
              placeholder="Your experience, availability, why you want to join us..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-red-600 to-red-800 text-white font-bold py-3 px-8 rounded-full hover:from-red-700 hover:to-red-900 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}