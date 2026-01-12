import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface Params extends ParsedUrlQuery {
  dynamic: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (context) => {
  return {
    props: {
      route: context.params?.dynamic,
    },
  };
};

interface Props {
  route: string | undefined;
}

const DynamicRouting = ({ route }: Props) => {
  // const router = useRouter();
  // const { dynamic } = router.query; // [폴더명]과 같은 이름을 가져와야 됨

  return (
    <main>
      DYNAMIC-ROUTING
      <p>{route}</p>
    </main>
  );
};

export default DynamicRouting;
