'use client';

import { useEffect, useState } from 'react';
import ProfileLayout from './ProfileLayout';
import { decodeToken } from '@/utils/decodeToken';

export default function ProfilePage() {

  const[user, setUser] = useState([])

  useEffect(() => {
  const token = localStorage.getItem('idToken');
  console.log('token 12', token)

  if (token) {
    const decoded = decodeToken(token);
      console.log('decoded 12', decoded)

    setUser(decoded?.email); 
  } else {
    setUser(null);
  }
}, []);

console.log('user 12', user)

  return (
    <ProfileLayout user={user} />
  );
}
