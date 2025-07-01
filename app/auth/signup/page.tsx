'use client';
import { useRouteGuard } from '@/hooks/useRouteGuard';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function SignUp() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    location: '',
    password: '',
    confirmPassword: '',
    terms: false,
    isAdmin: false,
  });

  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');
const router = useRouter();
const mobileNumberPattern = /^07\d{8}$/;

      useRouteGuard({ redirectIfAuth: true, redirectTo: '/' });
  

  // Password validation regex
  const passwordCriteria = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  setError('');
  setPasswordError('');

  // Validate mobile number
  if (!mobileNumberPattern.test(formData.mobileNumber)) {
    setError('Invalid mobile number.');
    return;
  }

    // Check if password and confirmPassword are the same
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Check if the password meets the required criteria
    if (!passwordCriteria.test(formData.password)) {
      setPasswordError('Password must be at least 8 characters long, including uppercase, lowercase, numbers, and special characters.');
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_SIGNUP}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      console.log('data',data)

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      alert('User registered successfully!');
      router.push(`/auth/confirm-email?email=${encodeURIComponent(formData.email)}`);

    } catch (error: unknown) {
  if (error instanceof Error) {
    alert(`Error: ${error.message}`);
  } else {
    alert('An unknown error occurred');
  }
}
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 via-red-700 to-red-900 p-4"> 
      <div className="glass-container bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-6xl w-full mx-4 p-8 mt-20">        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side - Form */}
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-black mb-8 text-center">REGISTER</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-gray-200"
                    placeholder="Enter your first name"
                    required
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-gray-200"
                    placeholder="Enter your second name"
                    required
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-gray-200"
                  placeholder="Enter your email"
                  required
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              
              {/* Mobile Number */}
              <div>
                <label className="block text-white mb-2">Mobile Number</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-gray-200"
                  placeholder="Enter your mobile number"
                  required
                  onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                />
              </div>
              

              {/* Location */}
              <div>
                <label className="block text-white mb-2">Location</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-gray-200"
                  placeholder="Enter your location"
                  required
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-white mb-2">Password</label>
                <input
                  type="password"
                  className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-gray-200"
                  placeholder="Enter your password"
                  required
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                {/* Display password error message */}
                {passwordError && (
                  <p className="text-white text-sm mt-2">{passwordError}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-white mb-2">Confirm Password</label>
                <input
                  type="password"
                  className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-gray-200"
                  placeholder="Confirm your password"
                  required
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 border-white/30 rounded bg-white/20"
                  required
                  onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                />
                <label className="ml-2 text-white">I accept rental terms</label>
              </div> 

              {/* Sign In Link */}
              <p className="text-white text-sm font-medium">Already Have an Account ? 
                <Link href="/auth/signin">
                  Sign In
                </Link>
              </p> 

              {/* Display general error message */}
              {error && <p className="text-white p-1 w-1/2 text-center">{error}</p>}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-red-700 to-red-900 text-white rounded-lg hover:opacity-90 transition-all"
              >
                Sign Up
              </button>
            </form>
          </div>

          {/* Right Side - Image Card */}
          <div className="md:w-1/2">
            <div className="glass-container bg-white bg-opacity-15 rounded-xl p-2 h-full">
              <div className="relative h-full rounded-lg overflow-hidden">
                 <Image
    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Luxury Car"
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default SignUp;
