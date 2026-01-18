import { Post } from '@/api/post';

interface Props {
  post: Post;
}

const PostDetail = (props: Props) => {
  const { post } = props;
  console.log(post);

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </main>
  );
};

export { PostDetail };
