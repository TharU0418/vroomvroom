// app/layout.tsx (Server Component)
import { GoogleOAuthProvider } from '@react-oauth/google';
//import './globals.css';

import { Geist } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

export const metadata = {
  title: 'Vroom Vroom',
  description: 'Secure car rental system',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-screen w-full font-inter">
        <Navbar />
          {children}
        <Footer />
    </main>
  );
}
