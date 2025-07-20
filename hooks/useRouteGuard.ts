// hooks/useRouteGuard.ts
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './useAuth';

export const useRouteGuard = (options: { requiresAuth?: boolean; redirectIfAuth?: boolean; redirectTo: string }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  console.log('useeer', user)


  useEffect(() => {
    if (loading) return; // wait until loading finishes

    if (options.requiresAuth && !user?.email) {
      // If route requires auth but user is NOT signed in, redirect
      router.replace(options.redirectTo);
    }

    if (options.redirectIfAuth && user) {
      // If route should redirect if user IS signed in
      router.replace(options.redirectTo);
    }
  }, [user, loading, options, router]);
};
