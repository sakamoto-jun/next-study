import { fetchPost, fetchPostList } from '@/api/post';
import { PostDetail } from '@/domains/post/detail';
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import { ComponentProps } from 'react';

type Params = { id: string };
type Props = ComponentProps<typeof PostDetail>;

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const res = await fetchPostList();
  const sliced_post_list = res.slice(0, 3);

  const paths: GetStaticPathsResult<Params>['paths'] = sliced_post_list.map((post) => {
    return {
      params: { id: String(post.id) },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const id = context.params?.id;

  if (!id) {
    return {
      notFound: true,
    };
  }

  const post = await fetchPost(id);

  return {
    props: {
      post,
    },
  };
};

const PostDetailPage = (props: Props) => {
  return <PostDetail {...props} />;
};

export default PostDetailPage;
