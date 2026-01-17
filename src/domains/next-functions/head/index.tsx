import { SomeComponent } from '@/domains/next-functions/head/SomeComponent';
import Head from 'next/head';
import { useState } from 'react';

const HeadMain = () => {
  const [visible, setVisible] = useState(false);

  return (
    <main>
      {/* <Head>
        <title>Head 타이틀</title>
        <meta name="description" content="Head Main" />
      </Head> */}
      <button type="button" onClick={() => setVisible(!visible)}>
        Some 컴포넌트 마운트 / 언마운트
      </button>
      {visible && <SomeComponent />}
    </main>
  );
};

export { HeadMain };
