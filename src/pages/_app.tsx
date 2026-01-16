import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      console.log('route change start');
    });
    router.events.on('routeChangeComplete', () => {
      console.log('route change end');
    });
  }, [router.events]);

  return <Component {...pageProps} />;
}
