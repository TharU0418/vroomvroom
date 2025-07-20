import Header from "@/components/Header";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen w-full justify-between font-inter fixed">
      <Header/>
             <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID || ''}>

      {children}
  </GoogleOAuthProvider>
    </main>
  );
}
