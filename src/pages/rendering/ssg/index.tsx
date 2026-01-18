import dayjs from 'dayjs';
import { GetServerSideProps, GetStaticProps } from 'next';

interface Props {
  test: string;
}

// export const getServerSideProps: GetServerSideProps<Props> = async (_) => {
//   return {
//     props: {
//       test: dayjs().format('YYYY-MM-DD HH:mm:ss'),
//     },
//   };
// };

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      test: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    },
  };
};

const SsgPage = (props: Props) => {
  console.log(props);

  return (
    <main className="text-[60px]">
      {props.test}
      <p>{dayjs().format('YYYY-MM-DD HH:mm:ss')}</p>
    </main>
  );
};

export default SsgPage;
