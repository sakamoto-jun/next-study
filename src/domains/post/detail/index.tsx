import { CommentResponse } from '@/api/comment';
import { Post } from '@/api/post';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useRouter } from 'next/router';

interface Props {
  post: Post;
}

const PostDetail = (props: Props) => {
  const { post } = props;
  const router = useRouter();
  const { data: comments, isLoading } = useQuery(getCommentsQueryOptions(post.id));

  if (router.isFallback) return <main>Loading...</main>;

  return (
    <main className="p-3">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <ol>
        {isLoading
          ? 'Loading Comments...'
          : comments?.map((comment) => {
              return (
                <li key={comment.id}>
                  <span className="text-lg font-bold">{comment.name}</span>
                  <p className="text-sm text-gray-500">{comment.email}</p>
                  <p className="m-1">{comment.body}</p>
                </li>
              );
            })}
      </ol>
    </main>
  );
};

export { PostDetail };

async function fetchCommentsClient(post_id: number): Promise<CommentResponse> {
  const res = await fetch(`/api/post/${post_id}/comment`);

  if (!res.ok) {
    if (res.status === 404) throw new Error('NOT_FOUND');
    throw new Error('FATCH_FAILED');
  }

  return res.json();
}

function getCommentsQueryOptions(
  post_id: number,
): UseQueryOptions<
  CommentResponse,
  Error,
  CommentResponse['comments'],
  [string, typeof post_id]
> {
  return {
    queryKey: ['comments', post_id],
    queryFn: () => fetchCommentsClient(post_id),
    select: (data) => {
      return data.comments;
    },
  };
}
