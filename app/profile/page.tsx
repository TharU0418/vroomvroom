'use client';

import { useEffect, useState } from 'react';
import ProfileLayout from './ProfileLayout';
import { decodeToken, DecodedToken } from '@/utils/decodeToken';
import { useRouteGuard } from '@/hooks/useRouteGuard';

export default function ProfilePage() {
  const [user, setUser] = useState<DecodedToken | null>(null);

    useRouteGuard({ requiresAuth: true, redirectTo: '/' });

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
    return <div className="text-center mt-20">Loading or not authenticated...</div>;
  }

  return <ProfileLayout user={user} />;
}
