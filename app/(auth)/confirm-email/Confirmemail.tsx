'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ConfirmEmail() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [resendMessage, setResendMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resendAllowed, setResendAllowed] = useState(true);
  const [resendCooldown, setResendCooldown] = useState(0);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const router = useRouter();

  // Get email from query params
  useEffect(() => {
    const paramEmail = searchParams?.get('email') ?? '';
    setEmail(paramEmail);
  }, [searchParams]);

  // Countdown timer for resend cooldown
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (resendCooldown > 0) {
      interval = setInterval(() => {
        setResendCooldown((prev) => prev - 1);
      }, 1000);
    } else {
      setResendAllowed(true);
    }
    return () => clearInterval(interval);
  }, [resendCooldown]);

  // Handle OTP input changes
  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
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

  // Submit verification code
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setResendMessage('');
    const code = otp.join('');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_VERIFY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Verification failed');

      router.push('/sign');
    } catch (err: unknown) {
  let errMsg = 'An unexpected error occurred.';

  if (err instanceof Error) {
    errMsg = err.message;
  }

  setError(errMsg);

  if (errMsg.toLowerCase().includes('resend') || errMsg.toLowerCase().includes('too many')) {
    setResendAllowed(true);
  }
} finally {
      setIsLoading(false);
    }
  };

  // Resend verification code
  const handleResend = async () => {
    setIsLoading(true);
    setError('');
    setResendMessage('');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_VERIFY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, resend: true }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Resend failed');

      setResendMessage('Verification code resent successfully.');
      setResendAllowed(false);
      setResendCooldown(60); // 60 seconds cooldown
    } catch (err: unknown) {
  let errMsg = 'Could not resend verification code.';

  if (err instanceof Error) {
    errMsg = err.message;
  }

  setError(errMsg);
}
 finally {
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
                ref={(el) => {
                  inputRefs.current[i] = el;
                }}
                maxLength={1}
                className="w-12 h-12 text-xl text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => e.key === 'Backspace' && handleBack(i)}
              />
            ))}
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {resendMessage && <p className="text-green-600 text-sm">{resendMessage}</p>}

          <button
            type="submit"
            disabled={!isFilled || isLoading}
            className="w-full bg-black text-white py-2 rounded-md hover:bg-opacity-90 transition disabled:opacity-50"
          >
            {isLoading ? 'Verifying...' : 'Verify Code'}
          </button>
        </form>

        <button
          className="text-sm text-gray-600 hover:underline mt-2 disabled:opacity-50"
          onClick={handleResend}
          disabled={!resendAllowed}
        >
          {resendAllowed
            ? 'Resend the verification code'
            : `You can resend in ${resendCooldown}s`}
        </button>
      </div>
    </div>
  );
}
