'use client';

import { useEffect, useState } from 'react';
import ProfileLayout from './ProfileLayout';
import { decodeToken } from '@/utils/decodeToken';

interface DecodedUser {
  email: string;
  given_name: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<DecodedUser | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('idToken');
    if (token) {
      const decoded = decodeToken(token);
      console.log('Decoded token:', decoded);
      if (decoded && decoded.email && decoded.given_name) {
        setUser({
          email: decoded.email,
          given_name: decoded.given_name,
        });
      }
    }
  }, []);

  if (!user) {
    return <div className="text-center mt-20 text-white">Loading or not authenticated...</div>;
  }

  return <ProfileLayout user={user} />;
}
