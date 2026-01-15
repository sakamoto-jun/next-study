import Image from 'next/image';

const RemoteMain = () => {
  return (
    <main>
      <Image
        src="/img/image.jpg"
        width={1000}
        height={800}
        quality={1}
        alt=""
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPMrwcAAWMA8MtqDlIAAAAASUVORK5CYII="
        priority
      />
    </main>
  );
};

export { RemoteMain };
