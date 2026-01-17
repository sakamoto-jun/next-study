import { HeadMain } from '@/domains/next-functions/head';
import { GetStaticProps } from 'next';
import Head from 'next/head';

interface Props {
  // title: string;
}

export const getStaticProps: GetStaticProps<Props> = () => {
  // const res = await fetch('Test Api')
  // const data = await res.json();

  return {
    props: {
      // title: data.title,
      // thumbnail: data.thumbnail,
      // description: data.description
    },
  };
};

const HeadPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>타이틀</title>
        <meta name="description" content="Head Main" />
      </Head>
      <HeadMain />
    </>
  );
};

export default HeadPage;
