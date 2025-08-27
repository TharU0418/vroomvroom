'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useRouteGuard } from '@/hooks/useRouteGuard';
import Link from 'next/link';

export default function LoginPage() {
  const [input, setInput] = useState('');
  const router = useRouter();
    const [message, setMessage] = useState('');
  
  useRouteGuard({ redirectIfAuth: true, redirectTo: '/' });
  

  const handleContinue = () => {
    setMessage('');
    const trimmedEmail = input.trim();

    // Basic email format validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setMessage('Please enter a valid email address.');
    return;
  }

   // if (!input.trim()) return;
    router.push(`/signup?email=${encodeURIComponent(input.trim())}`);
  };

  const handleLogin = async (credentialResponse: CredentialResponse) => {
   // const { credential } = credentialResponse;
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL_GOOGLE_SIGNUP}`,
        { token: credentialResponse.credential },
        {
          withCredentials: true,
        }
      );
      // From JSON response
      const { email, name } = response.data;
      // Store in localStorage
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userName', name);
      // Then redirect
      router.push('/');
      // Redirect to the home page
    } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      console.error('Error status:', err.response?.status);
    } else {
      console.error('Unknown error', err);
    }
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
          type="email"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          required
        />

        <button 
        onClick={handleContinue}
        className="w-full bg-red-700 text-white py-3 rounded-md text-sm font-semibold hover:opacity-90 transition">
          Continue
        </button>

        {message && (
          <div className={`mt-6 p-4 rounded-lg text-center ${message.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message}
          </div>
        )}

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

        <p className="text-black  text-sm font-medium">
                Already Have an Account ?  <Link href="sign">
               
                  <span className='text-red-700 font-bold'>Sign In</span>
              </Link>
              </p> 

        <p className="text-xs text-gray-500 text-center mt-6">
          By proceeding, you consent to get email, including by automated means,
          from Vroom Vroom and its affiliates to the number provided.
        </p>
      </div>
    </div>
  );
}
