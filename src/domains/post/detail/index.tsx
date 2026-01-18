import { Post } from '@/api/post';
import { useRouter } from 'next/router';

interface Props {
  post: Post;
}

const PostDetail = (props: Props) => {
  const { post } = props;
  console.log(post);

  const router = useRouter();

  if (router.isFallback) return <main>Loading...</main>;

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </main>
  );
};

export { PostDetail };
