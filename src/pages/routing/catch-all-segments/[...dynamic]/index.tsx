import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface Params extends ParsedUrlQuery {
  dynamic?: string[];
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (context) => {
  console.log(context.params?.dynamic);

  return {
    props: {
      route: context.params?.dynamic ?? [],
    },
  };
};

interface Props {
  route: string[];
}

const CatchAllSegments = (props: Props) => {
  return (
    <main>
      CATCH-ALL-SEGMENTS
      <p>{props.route.join('/')}</p>
    </main>
  );
};

export default CatchAllSegments;
