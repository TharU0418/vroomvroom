'use client';

import React, { useState } from 'react';

const ForgetPassword = () => {
  const [step, setStep] = useState('start'); // 'start' or 'confirm'
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const API_URL = 'https://tsbntwm224.execute-api.eu-north-1.amazonaws.com/password/reset'; // Replace with your deployed endpoint

  const handleStartReset = async () => {
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch(API_URL, {
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
      const res = await fetch(API_URL, {
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
    <div style={{ maxWidth: 400, margin: '0 auto', padding: 20 ,marginTop: 100}}>
      <h2>Forgot Password</h2>

      <div>
        <label>Email:</label><br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={step === 'confirm'}
        />
      </div>

      {step === 'confirm' && (
        <>
          <div>
            <label>Verification Code:</label><br />
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <div>
            <label>New Password:</label><br />
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
        </>
      )}

      <button
        onClick={step === 'start' ? handleStartReset : handleConfirmReset}
        disabled={loading}
        style={{ marginTop: 10 }}
      >
        {loading ? 'Processing...' : step === 'start' ? 'Send Reset Code' : 'Reset Password'}
      </button>

      {message && (
        <div style={{ marginTop: 10, color: 'blue' }}>
          {message}
        </div>
      )}
    </div>
  );
};

export default ForgetPassword;
