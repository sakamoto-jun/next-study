import { ErrorResponse } from '@/api/types';
import { NextApiRequest, NextApiResponse } from 'next';

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export async function fetchComments(post_id: string): Promise<Comment[]> {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}/comments`,
  );

  if (!result.ok) {
    if (result.status === 404) {
      throw new Error('NOT_FOUND');
    }
    throw new Error('FETCH_FAILED');
  }

  const data: Comment[] = await result.json();
  return data;
}

interface ExtendsNextApiRequest extends NextApiRequest {
  query: {
    id: string;
  };
}

export interface CommentResponse {
  comments: Comment[];
}

export async function commentsApiHandler(
  req: ExtendsNextApiRequest,
  res: NextApiResponse<CommentResponse | ErrorResponse>,
) {
  if (req.method !== 'GET') {
    return res.status(400).json({ error_message: 'Bad Request' });
  }

  const post_id = req.query.id;
  const parsed_post_id = Number(post_id);

  if (Number.isNaN(parsed_post_id)) {
    return res.status(400).json({ error_message: 'Bad Request' });
  }

  try {
    const result = await fetchComments(post_id);
    return res.status(200).json({ comments: result });
  } catch (error) {
    if (error instanceof Error && error.message === 'NOT_FOUND') {
      return res.status(404).json({ error_message: 'Not found' });
    }
    return res.status(500).json({ error_message: 'Failed to fetch' });
  }
}
