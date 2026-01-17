import { SomeScript } from '@/domains/next-functions/script/SomeScript';
import Link from 'next/link';
import Script from 'next/script';

declare global {
  interface Window {
    dayjs: () => {
      format: (params: string) => string;
    };
  }
}

const ScriptMain = () => {
  const onLoad = () => {
    console.log('on load!');
  };
  const onReady = () => {
    console.log('on ready!', window.dayjs().format('YYYY-MM-DD HH:mm:ss'));
  };

  return (
    <main>
      <SomeScript />
      <Link href="/next-functions/script/some-route">다른 페이지 가기</Link>

      <Script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"
        onLoad={onLoad}
        onReady={onReady}
      />
    </main>
  );
};

export { ScriptMain };
