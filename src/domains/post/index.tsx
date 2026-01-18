import { Post } from '@/api/post';

interface Props {
  post: Post;
  date: string;
}

const PostMain = (props: Props) => {
  const { post, date } = props;

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <span>{date}</span>
    </main>
  );
};

export { PostMain };
