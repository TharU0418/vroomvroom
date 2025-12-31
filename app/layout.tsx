// export const dynamic = 'force-dynamic'

// import type { Metadata } from "next";
// import { Inter, IBM_Plex_Serif } from "next/font/google";
// import "./globals.css";
// import Script from "next/script";

// const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
// const ibmPlexSerif = IBM_Plex_Serif({
//   subsets: ['latin'],
//   weight: ['400', '700'],
//   variable: '--font-ibm-plex-serif'
// })

// export const metadata: Metadata = {
//   title: "Vroom Vroom",
//   description: "Your Ultimate Car Rental Experience",
//   icons: {
//     icon: '/icons/logo.svg'
//   }
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
// <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17844969930"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'AW-17844969930');
// </script>
//       </head>
//       <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
//     </html>
//   );
// }

export const dynamic = 'force-dynamic'

import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: "Vroom Vroom",
  description: "Your Ultimate Car Rental Experience",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17844969930"
          strategy="afterInteractive"
        />

        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17844969930');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
