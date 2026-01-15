import Image from 'next/image';
import mountain from './image.jpg';

const LocalMain = () => {
  return (
    <main>
      <Image src={mountain} alt="" width={1000} placeholder="blur" quality={100} priority />
    </main>
  );
};

export { LocalMain };
