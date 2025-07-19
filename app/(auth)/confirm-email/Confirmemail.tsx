'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ConfirmEmail() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  //const [timer, setTimer] = useState(60);
  const [error, setError] = useState('');
  //const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const router = useRouter();

  useEffect(() => {
    const paramEmail = searchParams?.get('email') ?? '';
    setEmail(paramEmail);
  }, [searchParams]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Only allow digits
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBack = (index: number) => {
    if (otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    const code = otp.join('');
    console.log(email, code)

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_VERIFY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Verification failed');

      if (data === 'Invalid code') {
        setError('Invalid verification code. Please try again.');
        //setSuccess(false);
      } else {
        //setSuccess(true);
        router.push('/auth/signin');
      }
    } catch (err) {
      console.error(err);
      setError('An unexpected error occurred. Please try again.');
      //setSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  const isFilled = otp.every((v) => v !== '');

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full space-y-6 text-center">
        <h2 className="text-2xl font-semibold">
          Enter the 6-digit code sent <br /> to <strong>{email}</strong>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-center space-x-3 mt-4">
            {otp.map((digit, i) => (
              <input
                key={i}
                ref={(el) => (inputRefs.current[i] = el)}
                maxLength={1}
                className="w-12 h-12 text-xl text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => e.key === 'Backspace' && handleBack(i)}
              />
            ))}
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={!isFilled || isLoading}
            className="w-full bg-black text-white py-2 rounded-md hover:bg-opacity-90 transition disabled:opacity-50"
          >
            {isLoading ? 'Verifying...' : 'Verify Code'}
          </button>
        </form>

        <button className="text-sm text-gray-600 hover:underline mt-2">
          Login with email
        </button>
      </div>
    </div>
  );
}
