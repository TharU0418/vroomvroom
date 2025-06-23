// store/useAuth.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

interface AuthState {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: () => {
        // Clear token here
        localStorage.removeItem("token");  // or sessionStorage / Cookies
        set({ user: null });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
