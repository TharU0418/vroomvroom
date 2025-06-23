// pages/_app.tsx
import { useEffect } from 'react';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    fetch('/api/socket'); // Initialize the socket server once
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
