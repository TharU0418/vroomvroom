// components/NavbarWrapper.tsx
'use client';

import { useAuth } from '@/hooks/useAuth';
import Navbar from './Navbar';
import Navbar1 from './Navbar1';

export default function NavbarWrapper() {
  const { user, loading } = useAuth();

  if (loading) return null; // Optional: show nothing or loading while checking

  return user ? <Navbar /> : <Navbar1 />;
}
