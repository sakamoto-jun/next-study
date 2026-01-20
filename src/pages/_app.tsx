import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const queryClient = new QueryClient();

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

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
