'use client';
import { useRouteGuard } from '@/hooks/useRouteGuard';
//import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

function SignUp() {
  const searchParams = useSearchParams();
  //const emailFromQuery = searchParams.get('email') || '';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: 'emailFromQuery',
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

  const passwordCriteria = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setPasswordError('');

    if (!mobileNumberPattern.test(formData.mobileNumber)) {
      setError('Invalid mobile number.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

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

      console.log('data', data)

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      alert('User registered successfully!');
      router.push(`/confirm-email?email=${encodeURIComponent(formData.email)}`);

    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(`Error: ${error.message}`);
      } else {
        alert('An unknown error occurred');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="max-w-md w-full p-6 mt-10">
        <h1 className="text-3xl font-bold text-black mb-6 text-center">Create Account</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-black mb-1">Full Name</label>
            <input
              type="text"
              className="w-full p-2.5 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your first name"
              required
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-black mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              className="w-full p-2.5 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your email"
              required
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-black mb-1">Mobile Number</label>
            <input
              type="text"
              className="w-full p-2.5 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your mobile number"
              required
              onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-black mb-1">Password</label>
            <input
              type="password"
              className="w-full p-2.5 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your password"
              required
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            {passwordError && (
              <p className="text-red-600 text-xs mt-1">{passwordError}</p>
            )}
          </div>

          <div>
            <label className="block text-black mb-1">Confirm Password</label>
            <input
              type="password"
              className="w-full p-2.5 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Confirm your password"
              required
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 border-gray-300 rounded focus:ring-black"
              required
              onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
            />
            <label className="ml-2 text-black text-sm">
              I accept rental terms
            </label>
          </div>

          <div className="flex justify-center">
            <p className="text-black text-sm">
              Already have an account?{' '}
              <Link href="/signin" className="text-red-700 hover:underline">
                Sign In
              </Link>
            </p>
          </div>

          {error && <p className="text-red-600 text-center text-sm py-1">{error}</p>}

          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-gradient-to-r from-red-700 to-red-900 text-white rounded-lg hover:opacity-90 transition-all text-sm"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;