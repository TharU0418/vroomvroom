// app/layout.tsx (Server Component)
//import './globals.css';

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: 'Vroom Vroom',
  description: 'Secure car rental system, hire professional drivers, and enjoy seamless rides with Vroom Vroom.',
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
