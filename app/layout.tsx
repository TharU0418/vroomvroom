// app/layout.tsx (Server Component)
import './globals.css';

import { Geist } from 'next/font/google';

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
    <html lang="en">
      <body className={geistSans.variable}>
        

          {children}
          
      </body>
    </html>
  );
}
