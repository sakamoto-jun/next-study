import { Arvo, Noto_Sans } from 'next/font/google';
import nextLocalFont from 'next/font/local';

const gilroy = nextLocalFont({
  src: [
    {
      path: './Gilroy/Gilroy-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Gilroy/Gilroy-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
  ],
  adjustFontFallback: 'Times New Roman',
  preload: true,
  fallback: ['system-ui'],
});

const noto_sans = Noto_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
  fallback: ['system-ui'],
  adjustFontFallback: true,
  preload: true,
});

const arvo = Arvo({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  fallback: ['system-ui'],
});

export { arvo, gilroy, noto_sans };
