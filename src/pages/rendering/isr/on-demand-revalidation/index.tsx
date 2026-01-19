import dayjs from 'dayjs';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

interface Props {
  timestamp: string;
}

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    },
  };
};

const OnDemandRevalidationPage = (props: Props) => {
  const { timestamp } = props;

  const router = useRouter();

  const handleRevalidate = async () => {
    const res = await fetch('/api/revalidate');
    const data = await res.json();

    if (data.revalidated) {
      alert('revalidated 성공');
      router.reload();
    } else {
      alert('revalidated 실패');
    }
  };

  return (
    <main>
      <h1 className="text-2xl">{timestamp}</h1>
      <button onClick={handleRevalidate}>Revalidate Button</button>
    </main>
  );
};

export default OnDemandRevalidationPage;
