// app/layout.tsx (Server Component)
//import './globals.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



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
