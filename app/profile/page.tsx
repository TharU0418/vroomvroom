'use client';

import { useEffect, useState } from 'react';
import ProfileLayout from './ProfileLayout';
import { useAuth } from '@/hooks/useAuth';
import { decodeToken } from '@/utils/decodeToken';

export default function ProfilePage() {
 // const { user } = useAuth();

  const[user, setUser] = useState('')

  useEffect(() => {
  const token = localStorage.getItem('idToken');
  console.log('token 12', token)

  if (token) {
    const decoded = decodeToken(token);
      console.log('decoded 12', decoded)

    setUser(decoded); // will include email, sub, etc.
  } else {
    setUser(null);
  }
}, []);

console.log('user 12', user.given_name)

  return (
    <ProfileLayout user={user?.given_name} />
  );
}
