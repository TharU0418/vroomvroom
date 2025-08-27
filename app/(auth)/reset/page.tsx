'use client';

import React, { useState } from 'react';

const ForgetPassword = () => {
  const [step, setStep] = useState('start'); // 'start' or 'confirm'
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
        const [showPassword, setShowPassword] = useState(false);

  const handleStartReset = async () => {
    setLoading(true);
    setMessage('');

    const trimmedEmail = email.trim();

    // Basic email format validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setLoading(false);
      setMessage('Please enter a valid email address.');
    return;
  }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_RESET_PASSWORD}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, step: 'start' }),
      });

      const data = await res.json();
      if (data.success) {
        setStep('confirm');
        setMessage(data.message);
      } else {
        setMessage(data.message || 'Something went wrong');
      }
    } catch (err) {
      setMessage(err instanceof Error ? err.message : 'Error starting password reset');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmReset = async () => {
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_RESET_PASSWORD}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          code,
          newPassword,
          step: 'confirm',
        }),
      });

      const data = await res.json();
      if (data.success) {
        setMessage('Password reset successfully. You can now log in.');
        setStep('start');
        setCode('');
        setNewPassword('');
      } else {
        setMessage(data.message || 'Failed to reset password');
      }
    } catch (err) {
      setMessage(err instanceof Error ? err.message : 'Error confirming password reset');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md space-y-6 p-8">
        {/* <div className="text-center mb-8"> */}
          <h2 className="text-2xl font-semibold text-gray-900">
         Reset Password
        </h2>
          {/* <h2 className="text-3xl font-bold text-red-600 mb-2"></h2>
          <div className="h-1 w-20 bg-red-600 mx-auto"></div> */}
        {/* </div> */}

        <div className="mb-6">
          {/* <label className="block text-gray-800 font-medium mb-2">Email</label> */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={step === 'confirm'}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
            placeholder="Enter your email"
          />
        </div>

        {step === 'confirm' && (
          <>
            <div className="mb-6">
              {/* <label className="block text-gray-800 font-medium mb-2">Verification Code</label> */}
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                placeholder="Enter verification code"
              />
            </div>
           

            <div className="relative">
  <input
    type={showPassword ? 'text' : 'password'}
    value={newPassword}
    
    required
    onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                placeholder="Enter new password"
  />
  <button
    type="button"
    className="absolute right-3 top-6 transform -translate-y-1/2 text-gray-500"
    onClick={() => setShowPassword(!showPassword)}
    tabIndex={-1}
  >
    {showPassword ? '🙈' : '👁️'}
  </button>
  
</div>

          </>
        )}

        <button
          onClick={step === 'start' ? handleStartReset : handleConfirmReset}
          disabled={loading}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 disabled:opacity-70"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : step === 'start' ? (
            'Send Reset Code'
          ) : (
            'Reset Password'
          )}
        </button>

        {message && (
          <div className={`mt-6 p-4 rounded-lg text-center ${message.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;