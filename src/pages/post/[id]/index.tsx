import { fetchComments } from '@/api/comment';
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
    return { notFound: true };
  }

  try {
    const [post, comments] = await Promise.all([fetchPost(id), fetchComments(id)]);

    // const post = await fetchPost(id);
    // const comments = await fetchComments(id);

    return {
      props: {
        post,
        comments,
      },
    };
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === 'NOT_FOUND') {
        return {
          notFound: true,
        };
      }
    }

    return {
      redirect: {
        destination: '/500',
        permanent: false,
      },
    };
  }
};

const PostDetailPage = (props: Props) => {
  return <PostDetail {...props} />;
};

export default PostDetailPage;
