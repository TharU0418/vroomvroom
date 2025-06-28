// app/auth/confirm-signup/page.tsx
'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
//import { handleconfirmSignUp } from '@/lib/cognitoActions';

function ConfirmSignUp() {


  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
const router = useRouter();

// const [formData, setFormData] = useState({    
//     email: email,
//     code: code,
//   });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    console.log('code', code)
    console.log('email', email)


    try {
    

      //console.log('form', formData)

      const res = await fetch(`https://tvu7ajftla.execute-api.eu-north-1.amazonaws.com/verify/verifytoken`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        //body: JSON.stringify({...formData,code: code}),
        body: JSON.stringify({ email, code }),
      });

    //           const result = await ('sas',{
    //   email: 'mipiwiy440@exitbit.com',
    //   code: code,
    // });


    const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Verify failed');

              console.log('formData', formData)

    if (data === "Invalid code") {
        setError("Invalid verification code. Please try again.");
        setSuccess(false);
      } else {
        setSuccess(true);
          router.push('/auth/signin');

      }
    } catch (_) {
      setError('An unexpected error occurred. Please try again.');
      setSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    try {
      // Implement resend code functionality here
      setError('');
      // This would call your resendSignUpCode function
      alert('A new verification code has been sent to your email.');
    } catch (_) {
      setError('Failed to resend code. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 via-red-700 to-red-900 p-4">
      <div className="glass-container bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 max-w-6xl w-full mx-4 p-8 mt-20">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side - Form */}
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-black mb-8 text-center">CONFIRM YOUR EMAIL</h1>
            
            {success ? (
              <div className="text-center py-8">
                <div className="flex justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Email Confirmed Successfully!</h2>
                <p className="text-white mb-6">
                  Your email has been successfully verified. You can now sign in to your account.
                </p>
                <Link href="/auth/signin">
                  <button className="py-3 px-6 bg-gradient-to-r from-red-700 to-red-900 text-white rounded-lg hover:opacity-90 transition-all">
                    Sign In Now
                  </button>
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-6">
                  <p className="text-white">
                    We&rsquo;ve sent a verification code to
                  </p>
                  <p className="font-bold text-white text-lg mt-2">{email}</p>
                  <p className="text-white mt-2">
                    Please check your inbox and enter the code below.
                  </p>
                </div>

                {/* Verification Code */}
                <div>
                  <label className="block text-white mb-2">Verification Code</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-gray-200"
                    placeholder="Enter 6-digit code"
                    required
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="p-3 bg-red-500/30 border border-red-500 rounded-lg">
                    <p className="text-white">{error}</p>
                  </div>
                )}

                {/* Resend Code */}
                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    onClick={handleResendCode}
                    className="text-white hover:underline text-sm"
                  >
                    Didn&rsquo;t receive code? Resend
                  </button>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 px-6 bg-gradient-to-r from-red-700 to-red-900 text-white rounded-lg hover:opacity-90 transition-all ${isLoading ? 'opacity-70' : ''}`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Verifying...
                    </span>
                  ) : (
                    'Confirm Email'
                  )}
                </button>

                {/* Back to Sign Up */}
                <p className="text-white text-sm font-medium text-center">
                  Need to change email?{' '}
                  <Link href="/auth/signup" className="text-white hover:underline font-semibold">
                    Go back to Sign Up
                  </Link>
                </p>
              </form>
            )}
          </div>

          {/* Right Side - Image Card */}
          <div className="md:w-1/2">
            <div className="glass-container bg-white bg-opacity-15 rounded-xl p-2 h-full">
              <div className="relative h-full rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Car Verification"
                  className="w-full h-full object-cover"
                   sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">Secure Your Account</h3>
                    <p className="text-sm opacity-80">Email verification helps protect your account and ensures you can recover it if needed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmSignUp;