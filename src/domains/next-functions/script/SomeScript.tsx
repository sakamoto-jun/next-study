import Script from 'next/script';

const SomeScript = () => {
  return (
    <Script id="some-script" strategy="afterInteractive">
      {`
        console.log('SOME SCRIPT');
      `}
    </Script>
  );
};

export { SomeScript };
