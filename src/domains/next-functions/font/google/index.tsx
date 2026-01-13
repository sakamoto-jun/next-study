import { arvo } from '@/styles/fonts';
import Head from 'next/head';
import styles from './index.module.css';

const GoogleMain = () => {
  return (
    <main>
      {/* <p style={{ fontSize: '50px' }}>FONT: DEFAULT</p>
      <p>CLS TEST</p>
      <hr />
      <p className={noto_sans.className} style={{ fontSize: '50px' }}>
        FONT: ROBOTO
      </p>
      <p>CLS TEST</p>
      <hr /> */}
      <p className={arvo.className} style={{ fontSize: 50 }}>
        FONT: REMOTE
      </p>
      <p>CLS TEST</p>
      <hr />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <p className={styles.arvoRegular} style={{ fontSize: 50 }}>
        FONT: REMOTE
      </p>
      <p>CLS TEST</p>
    </main>
  );
};

export { GoogleMain };
