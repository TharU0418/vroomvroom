'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
//import { FcGoogle } from 'react-icons/fc';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

export default function LoginPage() {
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleContinue = () => {
    if (!input.trim()) return;
    router.push(`/signup?email=${encodeURIComponent(input.trim())}`);
  };

  const handleLogin = async (credentialResponse: any) => {
    console.log('credentialResponse', credentialResponse); // Log the full response to inspect its structure
   // const { credential } = credentialResponse;

    try {
      const response = await axios.post(
        "https://g79c9ghmgk.execute-api.eu-north-1.amazonaws.com/signin/gsignin",
        { token: credentialResponse.credential },
        {
          withCredentials: true,
        }
      );

      console.log('response', response)
      // ✅ Option A: From JSON response
      const { email, name } = response.data;
      // ✅ Store in localStorage
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userName', name);
      // Then redirect
      router.push('/');
      // Redirect to the home page
    } catch (err: any) {
      console.error('Error status:', err.response?.status);
      console.error('Error data:', err.response?.data);
      console.error('Full Axios error:', err.toJSON());
      alert('Authentication failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white mt-20">
      <div className="w-full max-w-md space-y-6 p-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          What&rsquo;s your email?
        </h2>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <button 
        onClick={handleContinue}
        className="w-full bg-red-700 text-white py-3 rounded-md text-sm font-semibold hover:opacity-90 transition">
          Continue
        </button>

        <div className="relative text-center my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative bg-white px-4 text-sm text-gray-500">or</div>
        </div>

        {/* <button className="bbg-red-700 w-full flex items-center justify-center border border-gray-300 py-3 rounded-md hover:bg-gray-50 transition">
          <FcGoogle className="mr-2 text-xl" />
          Continue with Google
        </button> */}

<GoogleLogin 
        onSuccess={handleLogin} 
        onError={() => console.log('Login Failed')} 
      />

        <p className="text-xs text-gray-500 text-center mt-6">
          By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages, including by automated means,
          from Uber and its affiliates to the number provided.
        </p>
      </div>
    </div>
  );
}
