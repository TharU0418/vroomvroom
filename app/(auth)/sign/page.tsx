'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
//import { FcGoogle } from 'react-icons/fc';
import { useRouteGuard } from '@/hooks/useRouteGuard';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Link from 'next/link';

export default function Sign() {

      const [formData, setFormData] = useState({    
        email: '',
        password: '',
      });
         const [showNotification, setShowNotification] = useState(false);
        const [notificationMessage, setNotificationMessage] = useState('');
        
            useRouteGuard({ redirectIfAuth: true, redirectTo: '/' });

  //const [input, setInput] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
    try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_SIGNIN}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
      credentials: 'include',
    });


    const data = await res.json();
    const { email } = data;

localStorage.setItem('userEmail', email);
     // localStorage.setItem('userName', name);
      // Then redirect
      router.push('/');

  if (!res.ok){
    setNotificationMessage(data.message);
  setShowNotification(true);
  setTimeout(() => setShowNotification(false), 5000);
   }

          
  if (!res.ok) throw new Error(data.error || 'Login failed');


 
  

 // router.push('/');
} catch (err) {
  const message = err instanceof Error ? err.message : 'Unknown error';
  setNotificationMessage(message);
  setShowNotification(true);
  setTimeout(() => setShowNotification(false), 5000);
}
  };

const handleLogin = async (credentialResponse: CredentialResponse) => {
  //  const { credential } = credentialResponse;

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
      //Store in localStorage
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userName', name);
      // Then redirect
      router.push('/');
      // Redirect to the home page
    } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      console.error('Error data:', err.response?.data);
    } else {
      console.error('Unknown error', err);
    }
    alert('Authentication failed. Please try again.');
  }
  };
    const Notification = () => (
      <div className="fixed bottom-4 right-4 z-50">
        
        <div className="bg-red-500 text-white px-8 py-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out animate-fadeInUp">
          <div className="flex items-center">
            
            <span className="font-semibold text-xl">{notificationMessage}</span>
          </div>
        </div>
      </div>
    );

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-white mt-10">
      <div className="w-full max-w-md space-y-6 p-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Welcome Back
        </h2>

        <input
          type="email"
          //value={input}
          required
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
          placeholder="Enter your email"
          className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="password"
        //  value={input}
          required
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
          placeholder="Enter your password"
          className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <button 
        onClick={handleSubmit}
        className="w-full bg-red-700 text-white py-3 rounded-md text-sm font-semibold hover:opacity-90 transition">
          Sign In
        </button>

        <div className="relative text-center my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative bg-white px-4 text-sm text-gray-500">or</div>
        </div>

        <GoogleLogin 
        onSuccess={handleLogin} 
        onError={() => console.log('Login Failed')} 
      />


      <p className="text-black  text-sm font-medium">
                Don&apos;t Have an Account ?  <Link href="register">
               
                  <span className='text-red-700 font-bold'>Sign Up</span>
              </Link>
              </p> 

        <p className="text-xs text-gray-500 text-center mt-6">
          By proceeding, you consent to get email, including by automated means,
          from Vroom Vroom and its affiliates to the number provided.
        </p>
      </div>
            {showNotification && <Notification />}

    </div>
  );
}
