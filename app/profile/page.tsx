'use client';

import { useEffect, useState } from 'react';
import ProfileLayout from './ProfileLayout';
import { decodeToken } from '@/utils/decodeToken';

type DecodedUser = {
  given_name: string;
  email?: string;
  sub?: string;
  // add more if needed
};

export default function ProfilePage() {
 // const { user } = useAuth();

const [user, setUser] = useState<DecodedUser | null>(null);

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


  return (
    <ProfileLayout user={user} />
  );
}
